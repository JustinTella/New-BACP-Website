import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

/**
 * Open roles, read live from Ashby's public job board API and drawn in the
 * site's own type rather than Ashby's. No key is needed — the posting endpoint
 * is public and sends `access-control-allow-origin: *`, so it works from the
 * static build. Applying hands off to Ashby, which owns the application flow.
 *
 * Ashby's drop-in `embed?version=2` script is the alternative; it renders the
 * board in Ashby's styling, which reads as a different site inside this one.
 */
const BOARD_NAME = import.meta.env.VITE_ASHBY_JOB_BOARD || 'Blue Angel Clinical Partners';
const BOARD_SLUG = encodeURIComponent(BOARD_NAME);

export const ASHBY_BOARD_URL = `https://jobs.ashbyhq.com/${BOARD_SLUG}`;
const POSTING_API = `https://api.ashbyhq.com/posting-api/job-board/${BOARD_SLUG}`;

type AshbyJob = {
  id: string;
  title: string;
  department: string | null;
  team: string | null;
  employmentType: string | null;
  location: string | null;
  isListed: boolean;
  isRemote: boolean | null;
  jobUrl: string;
};

/** Ashby returns these as single words; spell them the way people read them. */
const employmentLabels: Record<string, string> = {
  FullTime: 'Full-time',
  PartTime: 'Part-time',
  Intern: 'Internship',
  Contract: 'Contract',
  Temporary: 'Temporary',
};

function employmentLabel(type: string | null) {
  if (!type) return null;
  return employmentLabels[type] ?? type.replace(/([a-z])([A-Z])/g, '$1 $2');
}

/** Groups roles under their department, keeping the board's own ordering. */
function groupByDepartment(jobs: AshbyJob[]) {
  const groups: { department: string; jobs: AshbyJob[] }[] = [];

  for (const job of jobs) {
    const department = job.department?.trim() || 'Open roles';
    const existing = groups.find((group) => group.department === department);
    if (existing) {
      existing.jobs.push(job);
    } else {
      groups.push({ department, jobs: [job] });
    }
  }

  return groups;
}

function JobBoard() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [jobs, setJobs] = useState<AshbyJob[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(POSTING_API, { signal: controller.signal });
        if (!response.ok) throw new Error(`Job board responded ${response.status}`);

        const data = (await response.json()) as { jobs?: AshbyJob[] };
        setJobs((data.jobs ?? []).filter((job) => job.isListed !== false));
        setStatus('ready');
      } catch (error) {
        if ((error as Error).name === 'AbortError') return;
        setStatus('error');
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (status === 'loading') {
    return (
      <div className="mt-12 animate-pulse space-y-6" aria-busy="true">
        <span className="sr-only">Loading open positions</span>
        {[0, 1].map((row) => (
          <div key={row} className="border-t border-navy/10 pt-7">
            <div className="h-6 w-2/3 bg-navy/10" />
            <div className="mt-4 h-4 w-1/3 bg-navy/[0.07]" />
          </div>
        ))}
      </div>
    );
  }

  // Either the board is quiet or it could not be reached; both end with the
  // same next step, so send people somewhere useful instead of nowhere.
  if (status === 'error' || jobs.length === 0) {
    return (
      <Reveal className="mt-12">
        <div className="border-l-2 border-gold bg-light-gray p-8 lg:p-10">
          <p className="text-base leading-relaxed text-foreground/80">
            {status === 'error'
              ? 'We could not load our open positions just now.'
              : 'There are no open positions posted at the moment.'}{' '}
            You can see every current opening on our careers portal, or introduce
            yourself below and we will be in touch as roles open.
          </p>
          <a
            href={ASHBY_BOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-steely-blue"
          >
            Open the careers portal
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </Reveal>
    );
  }

  const groups = groupByDepartment(jobs);

  return (
    <div className="mt-12">
      {groups.map((group, groupIndex) => (
        <Reveal key={group.department} delay={groupIndex * 0.07} className="mt-12 first:mt-0">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
            {group.department}
          </h3>

          <ul className="mt-6 divide-y divide-navy/15 border-y border-navy/15">
            {group.jobs.map((job) => {
              const meta = [
                job.location,
                employmentLabel(job.employmentType),
                job.isRemote ? 'Remote' : null,
              ].filter(Boolean);

              return (
                <li key={job.id}>
                  <a
                    href={job.jobUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-6 py-7 transition-colors"
                  >
                    <span className="min-w-0">
                      <span className="block font-serif text-xl leading-snug tracking-tight text-navy transition-colors group-hover:text-steely-blue sm:text-2xl">
                        {job.title}
                      </span>
                      {meta.length > 0 && (
                        <span className="mt-2 block text-[0.95rem] leading-relaxed text-foreground/65">
                          {meta.join(' · ')}
                        </span>
                      )}
                      <span className="sr-only"> (opens on our careers portal)</span>
                    </span>
                    <span className="mt-1 inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-medium text-steely-blue transition-colors group-hover:text-navy">
                      <span className="hidden sm:inline">View role</span>
                      <ArrowUpRight
                        className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

export default JobBoard;

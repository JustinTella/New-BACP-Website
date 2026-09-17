import { ArrowUpRight } from 'lucide-react';
import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import IntakeForm from '@/components/IntakeForm';
import JobBoard, { ASHBY_BOARD_URL } from '@/components/JobBoard';
import careersTeam from '@/assets/careers-team.webp';
import careersTeamSm from '@/assets/careers-team-sm.webp';

function CareersPage() {
  return (
    <Page title="Careers">
      <PageHero
        eyebrow="Resources — Careers"
        title="Build the alternative to selling out."
        lede="Blue Angel supports independent medicine through its partner practices and the platform behind them. Tell us where you could make a difference."
        image={careersTeam}
        imageMobile={careersTeamSm}
        imageAlt="Watercolour of a small mixed team of clinicians and operators talking around a table, the bay and San Francisco skyline through the windows"
      />

      {/* Live from Ashby, drawn in our own type. Applications hand off to Ashby. */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                Open positions
              </span>
              <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                Roles across the network.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                We hire as the network grows, both at Blue Angel and inside our partner
                practices. Every current opening is listed below.
              </p>
            </Reveal>

            <JobBoard />

            <Reveal className="mt-10">
              <a
                href={ASHBY_BOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-medium text-steely-blue transition-colors hover:text-navy"
              >
                See all openings on our careers portal
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* For people the board does not have a posting for yet */}
      <section className="border-y border-navy/10 bg-light-gray py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Don&rsquo;t see the right role?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              Introduce yourself and we will keep you in mind as the network grows and new
              positions open.
            </p>
            <div className="mt-10">
              <IntakeForm kind="careers" />
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}

export default CareersPage;

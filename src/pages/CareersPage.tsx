import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { PrimaryLink, TextLink } from '@/components/Buttons';
import { site } from '@/content/blueangel';

/**
 * Placeholder role families rather than live postings — the live site has no
 * careers page yet, so these describe the kinds of work rather than open reqs.
 */
type RoleFamily = {
  area: string;
  title: string;
  body: string;
  to?: string;
  label?: string;
};

const roleFamilies: RoleFamily[] = [
  {
    area: 'Clinical',
    title: 'Concierge physicians and advanced practice clinicians',
    body:
      'Roles inside partner practices across the Bay Area — associate physicians stepping toward ownership, and clinicians joining an established panel.',
    to: '/resources/joining-a-practice',
    label: 'Read about joining a practice',
  },
  {
    area: 'Practice operations',
    title: 'Practice managers, front office, and medical assistants',
    body:
      'The people who make a concierge practice feel like a concierge practice: scheduling, patient communication, and the day-to-day running of the office.',
  },
  {
    area: 'Platform',
    title: 'Finance, revenue cycle, recruiting, and marketing',
    body:
      'The central team that carries the administrative load for every practice in the network, so physicians do not have to.',
    to: '/services',
    label: 'See what the platform handles',
  },
];

function CareersPage() {
  return (
    <Page title="Careers">
      <PageHero
        eyebrow="Resources — Careers"
        title="Build the alternative to selling out."
        lede="Blue Angel is a small team backing independent physicians against much larger consolidators. We hire clinically, operationally, and centrally — and we are always glad to hear from people who care about this problem."
      >
        <PrimaryLink to="/be-a-partner">Get in touch</PrimaryLink>
      </PageHero>

      {/* Where we hire */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Where we hire
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Three kinds of work.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 md:grid-cols-3">
            {roleFamilies.map((role, i) => (
              <Reveal key={role.area} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col bg-white p-8 lg:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                    {role.area}
                  </span>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-navy">
                    {role.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/75">
                    {role.body}
                  </p>
                  {role.to && (
                    <div className="mt-7">
                      <TextLink to={role.to}>{role.label}</TextLink>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="border-y border-navy/10 bg-light-gray py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                Open roles
              </span>
              <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                No formal postings right now.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  We are a small team and we hire as the network grows, which means the
                  right introduction usually matters more than an open requisition. If
                  you are a physician, a practice manager, or someone who has built the
                  operating side of a multi-site healthcare business, write to us.
                </p>
                <p>
                  Send a short note about what you would want to work on, along with a CV
                  or a LinkedIn profile.
                </p>
                <a
                  href={`mailto:${site.email}?subject=Careers%20at%20Blue%20Angel`}
                  className="mt-2 inline-block font-serif text-2xl text-navy underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-steely-blue"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </Page>
  );
}

export default CareersPage;

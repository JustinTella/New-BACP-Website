import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { PrimaryLink, OutlineLink, TextLink } from '@/components/Buttons';
import { site } from '@/content/blueangel';

const approach = [
  {
    index: '01',
    title: 'Two-Step Sale',
    body:
      'Receive upfront liquidity for your practice, followed by a mutually agreed transition plan that suits your timeline.',
  },
  {
    index: '02',
    title: 'Seamless Physician Transition',
    body:
      'Blue Angel recruits, trains, and transitions in a new associate physician to take over your practice seamlessly.',
  },
  {
    index: '03',
    title: 'Patient Care Continuity',
    body:
      'Your patients receive uninterrupted, high-quality care from a trusted successor, ensuring your legacy is honored.',
  },
  {
    index: '04',
    title: 'Flexible Involvement',
    body:
      'You can choose to keep practicing during the handoff period, ensuring a smooth and gradual transition for everyone.',
  },
];

const reasons = [
  {
    title: 'A Personalized Approach',
    body:
      'Unlike large consolidators, we take the time to build a personal relationship with you, understand your goals, and craft a transition plan that preserves your legacy while unlocking the full value of your practice.',
  },
  {
    title: 'Preserve Your Legacy',
    body:
      'Avoid simply closing your doors. We ensure your practice continues to thrive and serve the community under a new, dedicated physician.',
  },
  {
    title: 'Maximize Your Value',
    body:
      "Capture the full financial value of your patient panel and the goodwill you've built over decades through our strategic valuation process.",
  },
];

function SuccessionPlanningPage() {
  return (
    <Page title="Succession Planning">
      <PageHero
        eyebrow="Resources — Succession Planning"
        title="A transition plan that's uniquely rewarding."
        lede="Blue Angel offers a unique path for retiring physicians to ensure their practice thrives, their patients are cared for, and their life's work is honored."
      >
        <PrimaryLink to="/be-a-partner">Start the conversation</PrimaryLink>
        <OutlineLink to="/services">See what we handle</OutlineLink>
      </PageHero>

      {/* The Blue Angel approach */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              The Blue Angel approach
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Four steps, on your timeline.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2">
            {approach.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.07} className="h-full">
                <div className="flex h-full flex-col bg-white p-8 lg:p-10">
                  <span className="font-serif text-5xl leading-none text-navy/20">
                    {step.index}
                  </span>
                  <h3 className="mt-6 font-serif text-xl leading-snug text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/75">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why succession planning with Blue Angel */}
      <section className="border-y border-navy/10 bg-light-gray py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Why succession planning with Blue Angel
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              The value is in the panel you built, not the walls.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 md:grid-cols-3">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col bg-light-gray p-8 lg:p-10">
                  <h3 className="font-serif text-xl leading-snug text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/75">
                    {reason.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <TextLink to="/about#current-partners">
              Curious? Hear from some of our existing partners
            </TextLink>
          </Reveal>
        </div>
      </section>

      {/* Start the conversation */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Start the conversation
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              Reach out to our team directly at:
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block font-serif text-2xl text-navy underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-steely-blue"
            >
              {site.email}
            </a>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </Page>
  );
}

export default SuccessionPlanningPage;

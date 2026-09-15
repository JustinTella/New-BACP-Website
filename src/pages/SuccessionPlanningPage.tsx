import Page from '@/components/Page';
import SplitHero from '@/components/SplitHero';
import Reveal from '@/components/Reveal';
import IntakeForm from '@/components/IntakeForm';
import { TextLink } from '@/components/Buttons';
import successionHandover from '@/assets/succession-handover.webp';
import successionHandoverSm from '@/assets/succession-handover-sm.webp';

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
      <SplitHero
        eyebrow="Resources — Succession Planning"
        title="A transition plan that's uniquely rewarding."
        lede="Blue Angel offers a unique path for retiring physicians to ensure their practice thrives, their patients are cared for, and their life's work is honored."
        image={successionHandover}
        imageMobile={successionHandoverSm}
        imageAlt="Watercolour of a retiring physician and a younger successor talking together in a light-filled consulting room above the bay"
      />

      {/* The approach, as a stepped timeline rather than a grid of cards */}
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

          <ol className="mt-16 max-w-4xl">
            {approach.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.07}>
                <li className="relative grid gap-4 border-l border-navy/15 pb-14 pl-8 last:pb-0 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:pl-12">
                  {/* Marker sits on the rule to make the sequence explicit */}
                  <span
                    className="absolute -left-[0.3125rem] top-2 h-2.5 w-2.5 rounded-full bg-gold"
                    aria-hidden
                  />
                  <span className="font-serif text-4xl leading-none text-navy/25">
                    {step.index}
                  </span>
                  <div>
                    <h3 className="whitespace-nowrap font-serif text-[clamp(1rem,3.5vw,1.5rem)] leading-snug tracking-tight text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-foreground/75">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why us, as hanging-heading prose rather than boxes */}
      <section className="border-y border-navy/10 bg-light-gray py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Why succession planning with Blue Angel
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              The preferred partner for your final chapter.
            </h2>
          </Reveal>

          <dl className="mt-14 divide-y divide-navy/15 border-y border-navy/15">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.07}>
                <div className="grid gap-4 py-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  <dt className="font-serif text-2xl leading-snug text-navy">
                    {reason.title}
                  </dt>
                  <dd className="text-base leading-relaxed text-foreground/75">
                    {reason.body}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-12">
            <TextLink to="/about#current-partners">
              Curious? Hear from some of our existing partners
            </TextLink>
            <TextLink to="/resources/succession-planning-guide" className="mt-5">
              Read the Blue Angel succession planning guide
            </TextLink>
          </Reveal>
        </div>
      </section>

      {/* Start the conversation */}
      <section id="succession-intake" className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Start the conversation
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              A confidential first conversation can clarify your options, timing, and what
              a transition designed around your practice could look like.
            </p>
            <div className="mt-10">
              <IntakeForm kind="selling" />
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}

export default SuccessionPlanningPage;

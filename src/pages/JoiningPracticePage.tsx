import { Check } from 'lucide-react';
import Page from '@/components/Page';
import SplitHero from '@/components/SplitHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { OutlineLink } from '@/components/Buttons';
import { site } from '@/content/blueangel';
import joiningArrival from '@/assets/joining-arrival.webp';
import joiningArrivalSm from '@/assets/joining-arrival-sm.webp';

const opportunity = [
  {
    index: '01',
    title: 'Step into an Existing Practice',
    body:
      'Join a high-quality, established concierge practice without the challenges of starting from scratch.',
  },
  {
    index: '02',
    title: 'Inherit a Patient Panel',
    body:
      'Begin with an established patient panel, allowing you to focus on building relationships from day one.',
  },
  {
    index: '03',
    title: 'Receive Full Operational Support',
    body:
      'We handle all administrative, billing, and marketing tasks so you can focus entirely on patient care.',
  },
  {
    index: '04',
    title: 'Gain Equity Over Time',
    body: 'Build long-term wealth with a clear path to equity ownership in your practice.',
  },
];

const criteria = [
  'Self-starters who are looking for an opportunity for ownership',
  'Knowledgeable doctors who are passionate about their patients',
  'Believers in the relationship-style approach to primary care',
  'Avid learners who are eager for mentorship',
  "Physicians who don't want the financial risk or operational burden of running a practice",
];

function JoiningPracticePage() {
  return (
    <Page title="Joining a Practice">
      {/* Artwork on the left here, mirroring succession planning, so the two
          sibling pages are distinguishable at a glance. */}
      <SplitHero
        reverse
        eyebrow="Resources — Joining a Practice"
        title="Ownership that's not overwhelming."
        lede="Blue Angel offers early-career physicians a unique opportunity to build a rewarding career in concierge medicine with the full support of an established network."
        image={joiningArrival}
        imageMobile={joiningArrivalSm}
        imageAlt="Watercolour of an early-career physician stepping through the glass door of a hillside concierge practice, the bay and skyline behind"
      >
        <OutlineLink to="/be-a-partner">Start the conversation</OutlineLink>
      </SplitHero>

      {/* Who this is for — opens on the quote, which is the whole pitch */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Who this is for
            </span>
            <blockquote className="mt-8 font-serif text-2xl leading-snug text-navy sm:text-3xl lg:text-4xl">
              &ldquo;I am a hospitalist now. What I actually want is to be a doctor with my
              own practice &mdash; I like the idea of stepping into my own practice.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                That is the conversation we have most often. The pull is not away from
                medicine, it is toward the kind of medicine that made you go into it: a
                panel you know, appointments long enough to be useful, and a practice with
                your name on it.
              </p>
              <p>
                What stops most physicians is everything around the medicine — the lease,
                the loan, the billing, the hiring, the years of building a panel from zero.
                Joining an established Blue Angel practice removes that entire layer. You
                inherit a working practice and a full patient panel on your first day, and
                you build equity in it from there.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The opportunity, as numbered rows rather than another card grid */}
      <section className="border-y border-navy/10 bg-light-gray py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              The opportunity
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              A practice on day one, equity over time.
            </h2>
          </Reveal>

          <ol className="mt-14 divide-y divide-navy/15 border-y border-navy/15">
            {opportunity.map((item, i) => (
              <Reveal key={item.index} delay={i * 0.06}>
                <li className="grid gap-3 py-9 sm:grid-cols-[4rem_1fr] sm:gap-8 lg:grid-cols-[4rem_0.7fr_1.3fr] lg:gap-12">
                  <span className="font-serif text-3xl leading-none text-navy/25">
                    {item.index}
                  </span>
                  <h3 className="font-serif text-xl leading-snug text-navy sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/75 sm:col-start-2 lg:col-start-3">
                    {item.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                Who we&rsquo;re looking for
              </span>
              <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                The physicians who do well here.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="divide-y divide-navy/10 border-y border-navy/10">
                {criteria.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-5">
                    <Check
                      className="mt-1.5 h-5 w-5 shrink-0 text-steely-blue"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className="text-base leading-relaxed text-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Start the conversation */}
      <section className="border-t border-navy/10 bg-white py-20 md:py-24">
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

export default JoiningPracticePage;

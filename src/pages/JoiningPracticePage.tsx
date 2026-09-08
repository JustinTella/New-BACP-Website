import { Check } from 'lucide-react';
import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { PrimaryLink, OutlineLink } from '@/components/Buttons';
import { site } from '@/content/blueangel';

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
      <PageHero
        eyebrow="Resources — Joining a Practice"
        title="Ownership that's not overwhelming."
        lede="Blue Angel offers early-career physicians a unique opportunity to build a rewarding career in concierge medicine with the full support of an established network."
      >
        <PrimaryLink to="/be-a-partner">Start the conversation</PrimaryLink>
        <OutlineLink to="/services">See what we handle</OutlineLink>
      </PageHero>

      {/* Who this is for */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                Who this is for
              </span>
              <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                You like the idea of stepping into your own practice.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p className="border-l-2 border-gold bg-light-gray p-7 text-navy">
                  &ldquo;I am a hospitalist now. What I actually want is to be a doctor
                  with my own practice — I like the idea of stepping into my own
                  practice.&rdquo;
                </p>
                <p>
                  That is the conversation we have most often. The pull is not away from
                  medicine, it is toward the kind of medicine that made you go into it:
                  a panel you know, appointments long enough to be useful, and a practice
                  with your name on it.
                </p>
                <p>
                  What stops most physicians is everything around the medicine — the
                  lease, the loan, the billing, the hiring, the years of building a panel
                  from zero. Joining an established Blue Angel practice removes that
                  entire layer. You inherit a working practice and a full patient panel on
                  your first day, and you build equity in it from there.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The opportunity */}
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

          <div className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2">
            {opportunity.map((item, i) => (
              <Reveal key={item.index} delay={i * 0.07} className="h-full">
                <div className="flex h-full flex-col bg-light-gray p-8 lg:p-10">
                  <span className="font-serif text-5xl leading-none text-navy/20">
                    {item.index}
                  </span>
                  <h3 className="mt-6 font-serif text-xl leading-snug text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/75">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
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

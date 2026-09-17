import Page from '@/components/Page';
import SplitHero from '@/components/SplitHero';
import Reveal from '@/components/Reveal';
import IntakeForm from '@/components/IntakeForm';
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
      'Blue Angel carries the administrative, billing, recruiting, and operating work so you can focus on patient care.',
  },
  {
    index: '04',
    title: 'Gain Equity Over Time',
    body: 'Build long-term wealth with a clear path to equity ownership in your practice.',
  },
];

function JoiningPracticePage() {
  return (
    <Page title="Joining a Practice">
      <SplitHero
        reverse
        eyebrow="Resources — Joining a Practice"
        title="Ownership that's not overwhelming."
        lede="Blue Angel gives physicians a path into relationship-based concierge medicine with an established practice, a patient panel, and a platform behind them."
        image={joiningArrival}
        imageMobile={joiningArrivalSm}
        imageAlt="Watercolour of an early-career physician stepping through the glass door of a hillside concierge practice, the bay and skyline behind"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-serif text-2xl italic leading-snug text-navy sm:text-3xl lg:text-4xl">
              Blue Angel helps physicians step into an established concierge practice,
              care for a panel from day one, and grow into ownership with a full platform
              behind them.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                The opportunity is not simply a new job. It is a supported path into a
                practice that already has a name, a team, and patients who value
                relationship-based care. You can spend your energy learning the patients,
                shaping the medicine, and becoming a trusted owner in the community.
              </p>
              <p>
                Blue Angel provides the operating structure that is difficult to build
                alone: administrative support, recruiting resources, shared services, and
                guidance from physicians who have already chosen this model. The practice
                remains physician-led while you gain a clear, practical path to equity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

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
            {opportunity.map((item, index) => (
              <Reveal key={item.index} delay={index * 0.06}>
                <li className="grid gap-3 py-9 sm:grid-cols-[4rem_1fr] sm:gap-8 lg:grid-cols-[4rem_0.7fr_1.3fr] lg:gap-12">
                  <span className="font-serif text-3xl leading-none text-navy/25">{item.index}</span>
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

      <section id="joining-intake" className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Start the conversation
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              Tell us the kind of concierge practice you hope to build and where you see
              yourself practicing.
            </p>
            <div className="mt-10">
              <IntakeForm kind="joining" />
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}

export default JoiningPracticePage;

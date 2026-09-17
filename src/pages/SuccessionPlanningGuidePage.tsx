import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import IntakeForm from '@/components/IntakeForm';
import { TextLink } from '@/components/Buttons';

const guideSections = [
  {
    eyebrow: '1. Get clear before you get a number',
    title: 'A succession plan starts with your goals, not a valuation.',
    paragraphs: [
      'A practice sale is rarely only a financial decision. It is a decision about your patients, your team, your name, and the pace of the next chapter of your life. Before beginning a process, write down what you want to protect: the kind of care your patients receive, the staff you want to support, the role you may want to keep after a transition, and the timeline that would feel right to you.',
      'The strongest processes begin while the physician still has choices. Starting early gives you time to understand the value of the practice, prepare clean financial and operating information, and identify the kind of successor who can carry the practice forward. Waiting until a lease deadline, an unexpected health change, or burnout creates pressure that can narrow your options.',
    ],
  },
  {
    eyebrow: '2. Understand the paths in front of you',
    title: 'The right plan is one that preserves both value and continuity.',
    paragraphs: [
      'A solo physician can close a practice, sell to a large group, or build a tailored succession plan. Closing is simple on paper, but patients lose continuity and years of goodwill can be left behind. A large-system transaction can provide scale, but it may also change the practice model, brand, and clinical autonomy that made the practice valuable in the first place.',
      'Blue Angel is designed for physicians who want a different outcome: upfront liquidity for the practice they built, a successor recruited and prepared for the panel, and a transition that respects the physician’s timeline. The goal is not a one-size-fits-all deal. It is a partnership structure that makes sense for the individual practice, its patients, and its owner.',
    ],
  },
  {
    eyebrow: '3. What the process looks like',
    title: 'A thoughtful handoff happens in clear stages.',
    paragraphs: [
      'First, we listen. We learn how the practice runs, what makes the patient relationships special, and what the physician wants next. Next comes a careful review of the practice: the patient panel, operating model, team, financial picture, and opportunities for support. That work creates a shared view of value and of what a successful transition needs to protect.',
      'Once the structure is aligned, the transition plan is built around the physician—not imposed on them. Blue Angel helps recruit and prepare the next clinician, supports the operating side of the practice, and creates a patient communication plan. The outgoing physician can stay involved for a mutually agreed handoff period, giving patients and staff confidence while the successor grows into the role.',
      'The final stage is continuity. The practice remains open, the new physician has the support needed to succeed, and the departing physician can step back knowing that their patients and legacy have a durable home.',
    ],
  },
  {
    eyebrow: '4. The right and wrong way to approach a transition',
    title: 'Protect the things that cannot be recreated quickly.',
    paragraphs: [
      'The right approach is deliberate: begin early, keep records organized, be honest about what you want, and evaluate a partner’s plan for patients and staff as carefully as its financial terms. Ask who will recruit the successor, how that person will be introduced, what operational support will be available, and whether the practice can keep its identity after the transaction.',
      'The wrong approach is treating a succession plan as a last-minute asset sale. A buyer who only values equipment or short-term cash flow may miss the real value of a relationship-based practice: trust, reputation, and the continuity of care that patients have chosen. The best transition creates a future for the practice rather than an ending for it.',
    ],
  },
  {
    eyebrow: '5. Start with a confidential conversation',
    title: 'You do not need to have every answer before you begin.',
    paragraphs: [
      'A first conversation is simply a way to understand your options. It can clarify what preparation would be useful, what timing is realistic, and whether Blue Angel is the right partner for your goals. There is no obligation to move forward before the path feels right.',
    ],
  },
];

function SuccessionPlanningGuidePage() {
  return (
    <Page title="Succession Planning Guide">
      <PageHero
        eyebrow="Resources — Succession Planning Guide"
        title="A practical guide to planning your practice transition."
        lede="A physician-first framework for understanding the process, preparing for the right conversation, and protecting the legacy you have built."
      />

      <article className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                Blue Angel guide
              </span>
              <p className="mt-5 font-serif text-2xl leading-snug text-navy">
                A clear way to think about your final chapter in practice ownership.
              </p>
              <TextLink to="/resources/succession-planning" className="mt-8">
                Back to succession planning
              </TextLink>
            </aside>

            <div className="space-y-20">
              {guideSections.map((section, index) => (
                <Reveal key={section.title} delay={index * 0.04}>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                    {section.eyebrow}
                  </span>
                  <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                    {section.title}
                  </h2>
                  <div className="mt-7 space-y-6 text-lg leading-relaxed text-foreground/80">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-navy/10 bg-light-gray py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Ready when you are
            </span>
            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Start a confidential conversation.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <IntakeForm kind="selling" />
          </div>
        </div>
      </section>
    </Page>
  );
}

export default SuccessionPlanningGuidePage;

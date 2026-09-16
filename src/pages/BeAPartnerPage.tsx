import { useState } from 'react';
import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import IntakeForm from '@/components/IntakeForm';
import { TextLink } from '@/components/Buttons';
import partnerConversation from '@/assets/partner-conversation.webp';
import partnerConversationSm from '@/assets/partner-conversation-sm.webp';

type PartnerPath = 'selling' | 'joining';

const partnerPaths: Record<
  PartnerPath,
  {
    eyebrow: string;
    title: string;
    summary: string;
    benefitsTo: string;
    benefitsLabel: string;
  }
> = {
  selling: {
    eyebrow: 'You own a practice',
    title: 'Explore a partnership designed around your practice.',
    summary:
      'Learn what succession planning can protect: the value of your patient panel, continuity for your patients, and a path that follows your timing.',
    benefitsTo: '/resources/succession-planning',
    benefitsLabel: 'See succession-planning benefits',
  },
  joining: {
    eyebrow: 'You want to join a practice',
    title: 'Build toward ownership with a practice behind you.',
    summary:
      'See how an established practice, a patient panel, and Blue Angel support can give you a practical path into concierge medicine and equity.',
    benefitsTo: '/resources/joining-a-practice',
    benefitsLabel: 'See joining-a-practice benefits',
  },
};

function BeAPartnerPage() {
  const [selectedPath, setSelectedPath] = useState<PartnerPath | null>(null);
  const selected = selectedPath ? partnerPaths[selectedPath] : null;

  return (
    <Page title="Become a Partner">
      <PageHero
        eyebrow="Become a Partner"
        title="Choose the conversation that fits your next chapter."
        lede="Whether you own a practice or want to grow into one, start with the information that matters most to your path."
        image={partnerConversation}
        imageMobile={partnerConversationSm}
        imageAlt="Watercolour of a physician and a visitor talking across a small table by a window, the bay, Bay Bridge and San Francisco skyline beyond"
      />

      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Start here
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Which path describes you?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              Choose one path to see the benefits that matter most and the right form to
              start a private conversation.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6">
            {(Object.keys(partnerPaths) as PartnerPath[]).map((path) => {
              const option = partnerPaths[path];
              const isSelected = selectedPath === path;

              return (
                <Reveal key={path} delay={path === 'joining' ? 0.08 : 0} className="h-full">
                  <button
                    type="button"
                    onClick={() => setSelectedPath(path)}
                    aria-pressed={isSelected}
                    aria-controls="partner-inquiry"
                    className={`flex h-full w-full flex-col border-t-2 p-8 text-left transition-colors duration-200 sm:p-10 ${
                      isSelected
                        ? 'border-gold bg-white shadow-[0_20px_60px_rgba(6,56,98,0.10)]'
                        : 'border-navy/20 bg-light-gray hover:border-gold hover:bg-white'
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                      {option.eyebrow}
                    </span>
                    <span className="mt-5 font-serif text-2xl leading-tight tracking-tight text-navy sm:text-3xl">
                      {option.title}
                    </span>
                    <span className="mt-5 text-base leading-relaxed text-foreground/80">
                      {option.summary}
                    </span>
                    <span className="mt-8 text-sm font-medium text-steely-blue">
                      {isSelected ? 'Selected — form below' : 'Choose this path'}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {selected && selectedPath && (
            <Reveal key={selectedPath} className="mt-10 max-w-3xl">
              <div
                id="partner-inquiry"
                className="border-t-2 border-gold bg-white p-6 shadow-[0_20px_60px_rgba(6,56,98,0.08)] sm:p-8 lg:p-10"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                  {selected.eyebrow}
                </span>
                <h2 className="mt-5 font-serif text-2xl leading-tight tracking-tight text-navy sm:text-3xl">
                  Start the conversation.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">
                  Learn more first, or share a few details and we will follow up with the
                  right next conversation.
                </p>
                <TextLink to={selected.benefitsTo} className="mt-6">
                  {selected.benefitsLabel}
                </TextLink>
                <div className="mt-8">
                  <IntakeForm kind={selectedPath} />
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </Page>
  );
}

export default BeAPartnerPage;

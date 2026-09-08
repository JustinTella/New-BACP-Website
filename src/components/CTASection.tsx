import Reveal from '@/components/Reveal';
import { PrimaryLink, OutlineLink } from '@/components/Buttons';

/**
 * Closing block used at the foot of every page. The heading sits on its own
 * above two even columns — sell on the left, join on the right — so a visitor
 * self-selects before choosing an action.
 */
function CTASection() {
  return (
    <section className="border-t border-navy/10 bg-light-gray py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
            Considering your next chapter?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            Whether you are building a practice or planning your exit from one, we
            would welcome the conversation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-navy/10 md:grid-cols-2">
          <Reveal className="flex h-full flex-col bg-light-gray pb-2 pr-0 pt-8 md:pr-10 md:pt-10">
            <h3 className="font-serif text-2xl leading-snug text-navy sm:text-3xl">
              Do you want to sell?
            </h3>
            <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/75">
              Receive upfront liquidity for the practice you built, then hand it to a
              successor we recruit and train — on a timeline you set, with your patients
              cared for throughout.
            </p>
            <div className="mt-8">
              <PrimaryLink to="/resources/succession-planning">
                Succession planning
              </PrimaryLink>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="flex h-full flex-col bg-light-gray pb-2 pt-8 md:pl-10 md:pt-10"
          >
            <h3 className="font-serif text-2xl leading-snug text-navy sm:text-3xl">
              Do you want to join?
            </h3>
            <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/75">
              Step into an established concierge practice with an existing patient panel,
              full operational support behind you, and a clear path to equity ownership.
            </p>
            <div className="mt-8">
              <OutlineLink to="/resources/joining-a-practice">
                Joining a practice
              </OutlineLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

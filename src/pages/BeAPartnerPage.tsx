import { ArrowUpRight } from 'lucide-react';
import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import IntakeForm from '@/components/IntakeForm';
import { TextLink } from '@/components/Buttons';
import { partners } from '@/content/blueangel';
import partnerConversation from '@/assets/partner-conversation.webp';
import partnerConversationSm from '@/assets/partner-conversation-sm.webp';

function BeAPartnerPage() {
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
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal className="h-full">
              <div className="h-full border-t-2 border-gold bg-light-gray pt-8 lg:pt-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                  You own a practice
                </span>
                <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                  Explore a partnership designed around your practice.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  Learn what succession planning can protect: the value of your patient
                  panel, continuity for your patients, and a path that follows your timing.
                </p>
                <TextLink to="/resources/succession-planning" className="mt-7">
                  See succession-planning benefits
                </TextLink>
                <div className="mt-10">
                  <IntakeForm kind="selling" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <div className="h-full border-t-2 border-gold bg-light-gray pt-8 lg:pt-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                  You want a practice
                </span>
                <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                  Build toward ownership with a practice behind you.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  See how an established practice, a patient panel, and Blue Angel support
                  can give you a practical path into concierge medicine and equity.
                </p>
                <TextLink to="/resources/joining-a-practice" className="mt-7">
                  See joining-a-practice benefits
                </TextLink>
                <div className="mt-10">
                  <IntakeForm kind="joining" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Current partners
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              The physicians already building the network.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2">
            {partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.08} className="h-full">
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-6 bg-white p-6 transition-colors duration-200 hover:bg-light-gray sm:p-8"
                >
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    loading="lazy"
                    className="h-24 w-24 shrink-0 object-cover sm:h-28 sm:w-28"
                  />
                  <span className="min-w-0">
                    <span className="block font-serif text-xl leading-snug text-navy sm:text-2xl">
                      {partner.name}
                      <span className="ml-2 text-base text-steely-blue">{partner.credential}</span>
                    </span>
                    <span className="mt-2 block text-sm text-foreground/70">{partner.location}</span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-steely-blue transition-colors group-hover:text-navy">
                      Visit {partner.practice}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}

export default BeAPartnerPage;

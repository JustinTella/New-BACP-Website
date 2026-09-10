import { Mail, ArrowUpRight } from 'lucide-react';
import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { TextLink } from '@/components/Buttons';
import { site, partners } from '@/content/blueangel';
import partnerConversation from '@/assets/partner-conversation.webp';
import partnerConversationSm from '@/assets/partner-conversation-sm.webp';

const paths = [
  {
    eyebrow: 'You own a practice',
    title: 'Considering selling, eventually',
    body:
      'We take the time to understand your goals before we talk about a number. The result is a two-step sale with upfront liquidity and a transition on your timeline.',
    to: '/resources/succession-planning',
    label: 'Succession planning',
  },
  {
    eyebrow: 'You want a practice',
    title: 'Ready to step into ownership',
    body:
      'Join an established concierge practice with a full patient panel, the whole back office handled, and a defined path to equity.',
    to: '/resources/joining-a-practice',
    label: 'Joining a practice',
  },
];

function BeAPartnerPage() {
  return (
    <Page title="Become a Partner">
      <PageHero
        eyebrow="Become a Partner"
        title="Get in touch."
        lede="We're here to answer your questions about our partnership model, whether you're considering selling your practice or joining our network."
        image={partnerConversation}
        imageMobile={partnerConversationSm}
        imageAlt="Watercolour of a physician and a visitor talking across a small table by a window, the bay, Bay Bridge and San Francisco skyline beyond"
      />

      {/* Contact */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-navy/10 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col bg-white p-8 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                  Contact information
                </span>
                <h2 className="mt-5 font-serif text-2xl leading-snug text-navy sm:text-3xl">
                  Email us
                </h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-7 inline-flex items-center gap-3 font-serif text-xl text-navy underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-steely-blue sm:text-2xl"
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden />
                  {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <div className="flex h-full flex-col bg-white p-8 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                  Our commitment
                </span>
                <h2 className="mt-5 font-serif text-2xl leading-snug text-navy sm:text-3xl">
                  Physician-first, and confidential.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-foreground/75">
                  We believe in transparent, physician-first conversations. When you reach
                  out, you&rsquo;re not just contacting a company; you&rsquo;re starting a
                  partnership with a team that respects your autonomy and values your
                  legacy. Every discussion is confidential and tailored to your unique
                  goals.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Which conversation */}
      <section className="border-y border-navy/10 bg-light-gray py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Where to start
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Two ways into the network.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 md:grid-cols-2">
            {paths.map((path, i) => (
              <Reveal key={path.to} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col bg-light-gray p-8 lg:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                    {path.eyebrow}
                  </span>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-navy sm:text-2xl">
                    {path.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/75">
                    {path.body}
                  </p>
                  <div className="mt-7">
                    <TextLink to={path.to}>{path.label}</TextLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reference to current partners */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Current partners
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              You would be joining these physicians.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              Before you talk to us, talk to them. Our current partners kept their own
              names, their own brands, and their own websites — and they are the best
              account of what partnering with Blue Angel is actually like.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 0.08} className="h-full">
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
                      <span className="ml-2 text-base text-steely-blue">
                        {partner.credential}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm text-foreground/70">
                      {partner.location}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-steely-blue transition-colors group-hover:text-navy">
                      Visit {partner.practice}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <TextLink to="/about#current-partners">
              Read more about our current partners
            </TextLink>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </Page>
  );
}

export default BeAPartnerPage;

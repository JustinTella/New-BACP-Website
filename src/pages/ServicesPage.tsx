import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { OutlineLink, TextLink } from '@/components/Buttons';
import {
  clinicalServices,
  administrativeServices,
  type ServiceItem,
} from '@/content/blueangel';
import servicesDesk from '@/assets/services-desk.webp';

function ServiceGrid({ items }: { items: ServiceItem[] }) {
  return (
    <div className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.06} className="h-full">
          <div className="flex h-full flex-col bg-white p-8 lg:p-10">
            <h3 className="font-serif text-xl leading-snug text-navy">{item.title}</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/75">
              {item.body}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ServicesPage() {
  return (
    <Page title="Services">
      <PageHero
        eyebrow="Services"
        title="Unlock the power of partnership — keep the perks of independence."
        lede="Blue Angel takes on the business of running a practice so the medicine stays yours. Everything below is handled by a team that does this every day, across the whole network."
      />

      {/* Clinical */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Square artwork beside the intro, rather than another banner across
              the top, so this page reads differently from the rest of the site. */}
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                Clinical services
              </span>
              <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                Support at the point of care.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                Clinical services stay with you. We bring what may not be achievable for a
                standalone practice but is possible through the Blue Angel platform:
                cross-coverage, shared services, and support for your journey to clinical
                excellence.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <img
                src={servicesDesk}
                alt="Watercolour of a physician working at a desk in a light-filled practice office, the bay and San Francisco skyline through tall windows"
                loading="eager"
                decoding="async"
                fetchpriority="low"
                className="aspect-square w-full object-cover shadow-[0_20px_60px_rgba(6,56,98,0.13)]"
              />
            </Reveal>
          </div>

          <ServiceGrid items={clinicalServices} />
        </div>
      </section>

      {/* Administrative */}
      <section className="border-y border-navy/10 bg-light-gray py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Administrative services
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              We handle the business of medicine.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              We take on the day-to-day work that pulls physicians away from the medical
              room, so your time goes back to patient care.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
            {administrativeServices.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col bg-light-gray p-8 lg:p-10">
                  <h3 className="font-serif text-xl leading-snug text-navy">
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

      {/* Liquidity */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 border-l-2 border-gold pl-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:pl-12">
            <Reveal>
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                Liquidity
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  Unlike other alternatives, there is no one-size-fits-all structure at
                  Blue Angel Clinical Partners. Each agreement is tailored to what makes
                  sense for you. We&rsquo;re proud to help practice owners fairly monetize the value of
                  what they&rsquo;ve built. Most of a physician&rsquo;s net worth sits
                  inside a practice that is difficult to sell and easy to undervalue. We
                  capture the full financial value of the patient panel and the goodwill
                  built over decades, and pay for it upfront.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <OutlineLink to="/resources/succession-planning">
                    Succession planning
                  </OutlineLink>
                  <TextLink to="/resources">See all resources</TextLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </Page>
  );
}

export default ServicesPage;

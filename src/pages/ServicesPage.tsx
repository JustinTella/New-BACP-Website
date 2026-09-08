import { Link } from 'react-router-dom';
import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { PrimaryLink, TextLink } from '@/components/Buttons';
import {
  clinicalServices,
  administrativeServices,
  type ServiceItem,
} from '@/content/blueangel';

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
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Clinical services
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Support at the point of care.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              The clinical decisions stay with you. What changes is what stands behind
              them — coverage, referrals, colleagues, and continuing education.
            </p>
          </Reveal>
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
              The work that pulls physicians away from patients moves to us, so your time
              goes back to the exam room.
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                Also a service
              </span>
              <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                Liquidity
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  One of the services we offer is liquidity. Most of a physician&rsquo;s
                  net worth sits inside a practice that is difficult to sell and easy to
                  undervalue. We capture the full financial value of the patient panel and
                  the goodwill built over decades, and pay for it upfront — without you
                  closing the doors or walking away from the practice on day one.
                </p>
                <p>
                  To learn more about thoughtful succession planning,{' '}
                  <Link
                    to="/resources/succession-planning"
                    className="font-medium text-steely-blue underline decoration-steely-blue/40 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy/60"
                  >
                    click here
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <PrimaryLink to="/resources/succession-planning">
                    Succession planning
                  </PrimaryLink>
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

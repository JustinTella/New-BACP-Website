import { MapPin, Plus, Linkedin, ArrowUpRight } from 'lucide-react';
import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { TextLink } from '@/components/Buttons';
import { partners, investorLogos } from '@/content/blueangel';
import josephPortrait from '@/assets/bacp/joseph-robillard.jpg';
import consultDesktop from '@/assets/hero-consult.webp';
import consultMobile from '@/assets/hero-consult-sm.webp';

function AboutBlueAngelPage() {
  return (
    <Page title="About Blue Angel">
      <PageHero
        eyebrow="About Blue Angel"
        title="The partner of choice for concierge physicians."
        lede="Our mission is to become the partner of choice for existing and aspiring doctors practicing concierge medicine."
        image={consultDesktop}
        imageMobile={consultMobile}
        imageAlt="Watercolour of a physician and patient talking across a desk, with the Bay Bridge and San Francisco Bay through the window behind them"
      />

      {/* Mission narrative */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                  Our mission
                </span>
                <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                  Better for doctors. Better for patients.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  Traditional primary care is in crisis. Physician burnout has reached
                  all-time highs and consistently declining reimbursement rates have made
                  it impossible to make ends meet. Faced with higher volumes of patients
                  and razor-thin appointment times, it is becoming increasingly
                  challenging to deliver high-quality care.
                </p>
                <p>
                  However, there is a bright spot. Relationship-based medicine, such as
                  the concierge model, offers a solution: fewer patients per day, longer
                  appointments, personalized care, and more time to focus on prevention
                  and lifestyle changes. The result? Better outcomes for patients and a
                  better lifestyle for doctors.
                </p>
                <p>
                  We see this as the future. Our mission is to enable physicians to
                  practice the concierge model — reducing the barriers to own, run, and
                  eventually sell your practice — while preserving your independence and
                  enhancing patient care.
                </p>
                <p className="border-l-2 border-gold bg-light-gray p-7 text-navy">
                  We are not a private equity firm and we are not a large hospital
                  system. Built in partnership with tenured concierge physicians, we are
                  a new type of partner dedicated to supporting independent practices for
                  the long term, not flipping them for profit.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section
        id="current-partners"
        className="scroll-mt-24 border-y border-navy/10 bg-light-gray py-20 md:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Current partners
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Meet our valued partners.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              We are proud to partner with some of the finest physicians in concierge
              medicine, supporting them in delivering exceptional patient care. Each
              practice maintains its independence, while getting access to the benefits of
              a premier network of clinicians. Each practice keeps its name, brand, and
              its own clinical practices.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 0.08} className="h-full">
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col bg-white transition-colors duration-200 hover:bg-light-gray"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={partner.image}
                      alt={partner.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-serif text-2xl leading-snug text-navy">
                      {partner.name}
                      <span className="ml-2 text-base text-steely-blue">
                        {partner.credential}
                      </span>
                    </h3>
                    <p className="mt-3 inline-flex items-center gap-2 text-sm text-foreground/70">
                      <MapPin className="h-4 w-4" aria-hidden /> {partner.location}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-steely-blue transition-colors group-hover:text-navy">
                      Visit {partner.practice}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.16} className="h-full">
              <div className="flex h-full min-h-[18rem] flex-col items-center justify-center bg-white p-8 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-navy/20 text-navy">
                  <Plus className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-6 font-serif text-xl text-navy">Coming soon</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  Our network is growing. Check back for updates.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <TextLink to="/be-a-partner">Interested in joining the network?</TextLink>
          </Reveal>
        </div>
      </section>

      {/* Investors */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Our investors
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              A world-class team behind the model.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              We have assembled a world-class team of board members and investors with
              deep healthcare experience, particularly in concierge medicine and scaling
              multi-site healthcare platforms. Their expertise ensures we build a
              sustainable model that prioritizes physician autonomy and patient care.
              Below are selected examples of their healthcare experience.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-px bg-navy/10 sm:grid-cols-3">
            {investorLogos.map((logo, i) => (
              <Reveal key={logo.name} delay={i * 0.04} className="h-full">
                <div className="grid h-full place-items-center bg-white px-6 py-10">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className="max-h-14 w-auto max-w-[10rem] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-navy/10 bg-light-gray py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div className="bg-white p-8">
                <img
                  src={josephPortrait}
                  alt="Portrait of Joseph Robillard, founder of Blue Angel Clinical Partners"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <h3 className="mt-8 font-serif text-2xl text-navy">Meet Joseph</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                  Founder
                </p>
                <a
                  href="https://www.linkedin.com/in/josephnrobillard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 border border-navy/30 px-6 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white"
                >
                  <Linkedin className="h-4 w-4" aria-hidden /> Connect on LinkedIn
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  I grew up in Winter Park, Florida, and have always been drawn to
                  building things from the ground up. Prior to founding Blue Angel, I
                  worked in finance, focusing on supporting multi-unit, consumer-facing
                  businesses as they launched new product lines, opened new stores, and
                  enhanced their customer experience.
                </p>
                <p>
                  It was during this time I was introduced to relationship-based
                  medicine, an innovative care delivery model that seemed to improve the
                  lives of both patients and physicians. I wondered why more doctors
                  were not operating under this care model, so I began speaking to local
                  practitioners to understand their challenges and aspirations. It became
                  clear there were few options that allowed top doctors to retain their
                  autonomy while still benefiting from the resources and support of a
                  larger system. It was in those conversations that Blue Angel was born.
                </p>
                <p>
                  I received my MBA from Stanford Graduate School of Business, where I
                  graduated as an Arjay Miller Scholar (top 10% of the class), and a BS in
                  Economics from The Wharton School at the University of Pennsylvania,
                  where I graduated Magna Cum Laude. Outside of work, you will usually
                  find me running, golfing, enjoying live music, or fishing with my
                  younger brother. I am also a Level 2 sommelier, always looking for a new
                  favorite bottle of wine on my travels.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default AboutBlueAngelPage;

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ComparisonTable from '@/components/ComparisonTable';
import Reveal from '@/components/Reveal';
import { rise } from '@/lib/motion';
import { PrimaryLink, OutlineLink, TextLink } from '@/components/Buttons';
import networkDesktop from '@/assets/hero-network.webp';
import networkMobile from '@/assets/hero-network-sm.webp';
import { partners } from '@/content/blueangel';

const pillars = [
  {
    index: '01',
    title: 'Clinical autonomy stays with you',
    body:
      'No corporate protocols and no outside party setting appointment lengths. The medicine, the panel, and the name on the door remain the physicians own.',
  },
  {
    index: '02',
    title: 'We carry the administrative load',
    body:
      'Billing, credentialing, compliance, staffing and technology move to a team that does this every day, giving physicians their time back.',
  },
  {
    index: '03',
    title: 'You share in what you build',
    body:
      'Partnership means real economic alignment and a defined path to your next chapter, planned with you rather than handed down.',
  },
];

function HomePage() {
  useEffect(() => {
    document.title = 'Blue Angel Clinical Partners';
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Hero: full-bleed network-of-practices watercolour with an overlapping panel */}
        <section className="relative bg-white">
          <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden md:h-[76vh]">
            <picture>
              <source media="(max-width: 768px)" srcSet={networkMobile} />
              <img
                src={networkDesktop}
                alt="Watercolour of independent concierge practices across the Bay Area, linked by glowing lines, with the San Francisco skyline and Bay Bridge beyond"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
          </div>

          {/* Panel deliberately overlaps the image so the section reads as layered */}
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative -mt-24 max-w-3xl bg-white p-8 shadow-[0_20px_60px_rgba(6,56,98,0.13)] sm:p-12 md:-mt-32 lg:p-14"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                Blue Angel Clinical Partners
              </span>
              <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
                Empowering physicians,
                <span className="block">preserving autonomy.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80">
                We give independent practices the financial and operational backing of a
                large group, while the medicine and the patient relationships stay exactly
                where they belong.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <PrimaryLink to="/be-a-partner">Become a Partner</PrimaryLink>
                <OutlineLink to="/about">About Blue Angel</OutlineLink>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Positioning statement */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...rise} className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                A partner built for independent medicine
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  Physicians are usually offered two options: carry every administrative
                  burden alone, or sell the practice and accept someone elses protocols.
                  Blue Angel exists because neither is a good answer.
                </p>
                <p>
                  We take on the operational side of the practice and leave the clinical
                  side alone, a distinction that shapes everything else about how we
                  partner.
                </p>
              </div>
            </motion.div>

            {/* Current partners, given real weight rather than a passing link —
                the practices already in the network are the proof of the model. */}
            <Reveal className="mt-16">
              <Link
                to="/about#current-partners"
                className="group flex flex-col gap-8 border-l-2 border-gold bg-light-gray p-8 transition-colors duration-200 hover:bg-navy/[0.04] sm:flex-row sm:items-center sm:gap-10 lg:p-10"
              >
                <span className="flex shrink-0 items-center">
                  {partners.map((partner, i) => (
                    <img
                      key={partner.name}
                      src={partner.image}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className={`h-20 w-20 rounded-full border-2 border-white object-cover shadow-sm sm:h-24 sm:w-24 ${
                        i > 0 ? '-ml-6' : ''
                      }`}
                    />
                  ))}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                    Current partners
                  </span>
                  <span className="mt-4 block font-serif text-2xl leading-snug text-navy sm:text-3xl">
                    Two independent practices have already chosen partnership over
                    acquisition.
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-steely-blue transition-colors group-hover:text-navy">
                    Meet Dr. Daniher and Dr. Sujansky
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Three pillars */}
        <section className="border-y border-navy/10 bg-light-gray py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.span
              {...rise}
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue"
            >
              Why Blue Angel
            </motion.span>
            <div className="mt-12 grid gap-px bg-navy/10 md:grid-cols-3">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.index}
                  {...rise}
                  transition={{ ...rise.transition, delay: i * 0.08 }}
                  className="flex h-full flex-col bg-light-gray p-8 lg:p-10"
                >
                  <span className="font-serif text-5xl leading-none text-navy/20">
                    {pillar.index}
                  </span>
                  <h3 className="mt-6 font-serif text-xl leading-snug text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/75">
                    {pillar.body}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div {...rise} className="mt-12">
              <TextLink to="/about">Learn more about us</TextLink>
            </motion.div>
          </div>
        </section>

        {/* Comparison — doubles as a summary of the services and resources pages */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                Compare the options
              </span>
              <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                Everything a large group gives you. Nothing it takes.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                Every row below is something we actually do. Follow any of them through to
                the page that explains it.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-14">
              <ComparisonTable />
            </Reveal>

            <Reveal className="mt-12 flex flex-wrap gap-4">
              <PrimaryLink to="/services">Explore services</PrimaryLink>
              <OutlineLink to="/resources">Browse resources</OutlineLink>
            </Reveal>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import skylineDesktop from '@/assets/hero-sf-skyline.webp';
import skylineMobile from '@/assets/hero-sf-skyline-sm.webp';

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

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

const stats = [
  { figure: 'Bay Area', label: 'Rooted in Northern California' },
  { figure: 'Independent', label: 'Practices stay physician-led' },
  { figure: 'MSO', label: 'Management services, not acquisition' },
];

const previewCards = [
  {
    eyebrow: 'Services',
    title: 'The back office of a large group, at your scale',
    body:
      'Revenue cycle, compliance, staffing, technology and vendor contracts, handled end to end so your time goes back to the exam room.',
    to: '/services',
    label: 'Explore services',
  },
  {
    eyebrow: 'Resources',
    title: 'Guidance for the decisions ahead',
    body:
      'Practical material on practice economics, succession, and what is genuinely changing in the market for physician-owned practices.',
    to: '/resources',
    label: 'Browse resources',
  },
];

function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero: full-bleed skyline with an overlapping panel */}
        <section className="relative">
          <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden md:h-[76vh]">
            <picture>
              <source media="(max-width: 768px)" srcSet={skylineMobile} />
              <img
                src={skylineDesktop}
                alt="Illustrated view of the San Francisco skyline and Bay Bridge at dawn"
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
                <Link
                  to="/be-a-partner"
                  className="inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-steely-blue"
                >
                  Be a Partner
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/why-blue-angel"
                  className="inline-flex items-center gap-2 border border-navy/30 px-7 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white"
                >
                  Why Blue Angel
                </Link>
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
                  We are a management services organisation. We take on the operational
                  side of the practice and leave the clinical side alone, a distinction
                  that shapes everything else about how we partner.
                </p>
              </div>
            </motion.div>
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
              <Link
                to="/why-blue-angel"
                className="inline-flex items-center gap-2 text-sm font-medium text-steely-blue transition-colors hover:text-navy"
              >
                Read the full case
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Proof band */}
        <section className="bg-navy py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...rise}
                  transition={{ ...rise.transition, delay: i * 0.08 }}
                >
                  <p className="font-serif text-3xl tracking-tight text-white sm:text-4xl">
                    {stat.figure}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services / Resources preview */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-px bg-navy/10 md:grid-cols-2">
              {previewCards.map((card, i) => (
                <motion.div
                  key={card.to}
                  {...rise}
                  transition={{ ...rise.transition, delay: i * 0.08 }}
                  className="bg-white p-8 lg:p-12"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                    {card.eyebrow}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl leading-snug text-navy sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-foreground/75">
                    {card.body}
                  </p>
                  <Link
                    to={card.to}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-steely-blue transition-colors hover:text-navy"
                  >
                    {card.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-navy/10 bg-light-gray py-20 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              {...rise}
              className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
            >
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
                  Considering your next chapter?
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  Whether you are building a practice or planning your exit from one, we
                  would welcome the conversation.
                </p>
              </div>
              <Link
                to="/be-a-partner"
                className="inline-flex shrink-0 items-center gap-2 bg-navy px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-steely-blue"
              >
                Be a Partner
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;

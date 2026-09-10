import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import resourcesPath from '@/assets/resources-path.webp';
import resourcesPathSm from '@/assets/resources-path-sm.webp';

const resources = [
  {
    eyebrow: 'For physicians planning an exit',
    title: 'Succession Planning',
    body:
      'Receive upfront liquidity for your practice, then hand it to a successor we recruit and train. A transition plan on your timeline that keeps your patients cared for and your legacy intact.',
    to: '/resources/succession-planning',
    label: 'Plan your succession',
  },
  {
    eyebrow: 'For physicians who want their own practice',
    title: 'Joining a Practice',
    body:
      'Step into an established concierge practice with an existing patient panel, full operational support, and a clear path to equity — without the financial risk of starting from scratch.',
    to: '/resources/joining-a-practice',
    label: 'Explore joining',
  },
  {
    eyebrow: 'For everyone else building this with us',
    title: 'Careers',
    body:
      'Clinical and operating roles across the Blue Angel platform and its partner practices, for people who want independent medicine to keep existing.',
    to: '/resources/careers',
    label: 'See careers',
  },
];

function ResourcesPage() {
  return (
    <Page title="Resources">
      <PageHero
        eyebrow="Resources"
        title="Guidance for the decisions ahead."
        lede="Three paths into the Blue Angel platform, depending on where you are in your career. Each one is explained in full below."
        image={resourcesPath}
        imageMobile={resourcesPathSm}
        imageAlt="Watercolour of stone steps climbing a Bay Area hillside toward a glass-fronted concierge practice, the bay and San Francisco skyline beyond"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-navy/10 lg:grid-cols-3">
            {resources.map((resource, i) => (
              <Reveal key={resource.to} delay={i * 0.08} className="h-full">
                <Link
                  to={resource.to}
                  className="group flex h-full flex-col bg-white p-8 transition-colors duration-200 hover:bg-light-gray lg:p-10"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
                    {resource.eyebrow}
                  </span>
                  <h2 className="mt-5 font-serif text-2xl leading-snug text-navy sm:text-3xl">
                    {resource.title}
                  </h2>
                  <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/75">
                    {resource.body}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-steely-blue transition-colors group-hover:text-navy">
                    {resource.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Page>
  );
}

export default ResourcesPage;

import Page from '@/components/Page';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import IntakeForm from '@/components/IntakeForm';
import careersTeam from '@/assets/careers-team.webp';
import careersTeamSm from '@/assets/careers-team-sm.webp';

function CareersPage() {
  return (
    <Page title="Careers">
      <PageHero
        eyebrow="Resources — Careers"
        title="Build the alternative to selling out."
        lede="Blue Angel supports independent medicine through its partner practices and the platform behind them. Tell us where you could make a difference."
        image={careersTeam}
        imageMobile={careersTeamSm}
        imageAlt="Watercolour of a small mixed team of clinicians and operators talking around a table, the bay and San Francisco skyline through the windows"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              Open positions
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
              Start with an introduction.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              We hire as the network grows. Share your interests and background so we can
              connect you with the right Blue Angel or partner-practice opportunity.
            </p>
            <div className="mt-10">
              <IntakeForm kind="careers" />
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}

export default CareersPage;

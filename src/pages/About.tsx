import { Linkedin, GraduationCap, Briefcase } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            The partner of choice for concierge physicians.
          </>
        }
        lede="Our mission is to become the partner of choice for existing and aspiring doctors practicing concierge medicine."
      />

      {/* Mission narrative */}
      <section className="container-x pb-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="sticky top-28">
              <span className="eyebrow">Our mission</span>
              <h2 className="display mt-4 text-3xl">
                Better for doctors. Better for patients.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-muted">
              <p>
                Traditional primary care is in crisis. Physician burnout has reached
                all-time highs and consistently declining reimbursement rates have
                made it impossible to make ends meet. Faced with higher volumes of
                patients and razor-thin appointment times, it's becoming increasingly
                challenging to deliver high-quality care.
              </p>
              <p>
                However, there's a bright spot. Relationship-based medicine, such as
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
              <p className="rounded-2xl bg-sand p-6 text-navy">
                We're not a private equity firm and we're not a large hospital system.
                Built in partnership with tenured concierge physicians, we're a new
                type of partner dedicated to supporting independent practices for the
                long term, not flipping them for profit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Investors */}
      <section className="bg-sand py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Our investors</span>
              <h2 className="display mt-4 text-3xl sm:text-4xl">
                A world-class team behind the model.
              </h2>
              <p className="mt-5 text-muted">
                We have assembled a world-class team of board members and investors
                with deep healthcare experience, particularly in concierge medicine
                and scaling multi-site healthcare platforms. Their expertise ensures
                we build a sustainable model that prioritizes physician autonomy and
                patient care.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="card">
              <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-navy to-navy-700" />
              <h3 className="mt-6 text-2xl text-navy">Meet Joseph</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-azure">
                Founder
              </p>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-6 w-full"
              >
                <Linkedin size={18} /> Connect on LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-muted">
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
                weren't operating under this care model, so I began speaking to local
                practitioners to understand their challenges and aspirations. It became
                clear there were few options that allowed top doctors to retain their
                autonomy while still benefiting from the resources and support of a
                larger system. It was in those conversations that Blue Angel was born.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-navy/5">
                  <GraduationCap className="text-azure" size={22} />
                  <h4 className="mt-3 text-lg text-navy">Education</h4>
                  <p className="mt-2 text-sm text-muted">
                    MBA from Stanford Graduate School of Business — Arjay Miller
                    Scholar (top 10%). BS in Economics from The Wharton School,
                    University of Pennsylvania — Magna Cum Laude.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-navy/5">
                  <Briefcase className="text-azure" size={22} />
                  <h4 className="mt-3 text-lg text-navy">Beyond work</h4>
                  <p className="mt-2 text-sm text-muted">
                    Running, golfing, live music, and fishing with my younger brother.
                    A Level 2 sommelier always looking for a new favorite bottle of
                    wine while traveling.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

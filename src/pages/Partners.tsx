import { Link } from "react-router-dom";
import { MapPin, Plus } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const partners = [
  { name: "Dr. Amy Daniher", credential: "MD", location: "San Mateo, CA" },
  { name: "Dr. Rika Sujansky", credential: "MD", location: "San Mateo, CA" },
];

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Current partners"
        title="Meet our valued partners."
        lede="We are proud to partner with some of the finest physicians in concierge medicine, supporting them in delivering exceptional patient care."
      />

      <section className="container-x py-10">
        <Reveal>
          <span className="eyebrow">Our network of practices</span>
          <h2 className="display mt-3 text-3xl">A growing community.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-3xl bg-white/70 shadow-card ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-navy to-navy-700" />
                <div className="p-7">
                  <h3 className="text-xl text-navy">
                    {p.name}
                    <span className="ml-1.5 text-sm font-medium text-azure">
                      {p.credential}
                    </span>
                  </h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                    <MapPin size={15} /> {p.location}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Coming soon */}
          <Reveal delay={0.2}>
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-navy/20 bg-cream p-7 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-navy/5 text-navy">
                <Plus size={22} />
              </span>
              <h3 className="mt-4 text-lg text-navy">Coming Soon</h3>
              <p className="mt-1 text-sm text-muted">
                Our network is growing! Check back for updates.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-6">
        <Reveal>
          <div className="rounded-[2rem] bg-sand px-8 py-12 text-center sm:px-16">
            <h2 className="display text-2xl sm:text-3xl">
              Interested in joining the Blue Angel network?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/joining" className="btn-primary">
                Learn more about joining
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

import { Link } from "react-router-dom";
import { Building2, Users, LifeBuoy, TrendingUp, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const opportunity = [
  {
    icon: Building2,
    title: "Step into an Existing Practice",
    body: "Join a high-quality, established concierge practice without the challenges of starting from scratch.",
  },
  {
    icon: Users,
    title: "Inherit a Patient Panel",
    body: "Begin with an established patient panel, allowing you to focus on building relationships from day one.",
  },
  {
    icon: LifeBuoy,
    title: "Receive Full Operational Support",
    body: "We handle all administrative, billing, and marketing tasks so you can focus entirely on patient care.",
  },
  {
    icon: TrendingUp,
    title: "Gain Equity Over Time",
    body: "Build long-term wealth with a clear path to equity ownership in your practice.",
  },
];

const lookingFor = [
  "Self-starters who are looking for an opportunity for ownership",
  "Knowledgeable doctors who are passionate about their patients",
  "Believers in the relationship-style approach to primary care",
  "Avid learners who are eager for mentorship",
  "Physicians who don't want the financial risk or operational burden of running a practice",
];

export default function Joining() {
  return (
    <>
      <PageHero
        eyebrow="Joining a practice"
        title="Ownership that's not overwhelming."
        lede="Blue Angel offers early-career physicians a unique opportunity to build a rewarding career in concierge medicine with the full support of an established network."
      >
        <Link to="/contact" className="btn-primary">
          Start the conversation
        </Link>
      </PageHero>

      {/* The opportunity */}
      <section className="container-x py-10">
        <Reveal>
          <span className="eyebrow">The opportunity</span>
          <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
            Everything you need to own a practice — minus the risk.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {opportunity.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl bg-white/70 p-8 shadow-card ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-cream transition-colors group-hover:bg-azure">
                  <item.icon size={22} />
                </span>
                <h3 className="mt-5 text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="bg-sand py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Who we're looking for</span>
            <h2 className="display mt-3 text-3xl sm:text-4xl">
              Does this sound like you?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {lookingFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-cream p-5 ring-1 ring-navy/5"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-azure text-white">
                    <Check size={16} />
                  </span>
                  <span className="text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

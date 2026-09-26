import { Link } from "react-router-dom";
import { Coins, UserCheck, HeartHandshake, CalendarClock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const approach = [
  {
    icon: Coins,
    title: "Two-Step Sale",
    body: "Receive upfront liquidity for your practice, followed by a mutually agreed-upon transition plan that suits your timeline.",
  },
  {
    icon: UserCheck,
    title: "Seamless Physician Transition",
    body: "Blue Angel recruits, trains, and transitions in a new associate physician to take over your practice seamlessly.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Care Continuity",
    body: "Your patients receive uninterrupted, high-quality care from a trusted successor, ensuring your legacy is honored.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Involvement",
    body: "You can choose to keep practicing during the handoff period, ensuring a smooth and gradual transition for everyone.",
  },
];

const why = [
  {
    title: "A Personalized Approach",
    body: "Unlike large consolidators, we take the time to build a personal relationship with you, understand your goals, and craft a transition plan that preserves your legacy while unlocking the full value of your practice.",
  },
  {
    title: "Preserve Your Legacy",
    body: "Avoid simply closing your doors. We ensure your practice continues to thrive and serve the community under a new, dedicated physician.",
  },
  {
    title: "Maximize Your Value",
    body: "Capture the full financial value of your patient panel and the goodwill you've built over decades through our strategic valuation process.",
  },
];

export default function Succession() {
  return (
    <>
      <PageHero
        eyebrow="Succession planning"
        title="A transition plan that's uniquely rewarding."
        lede="Blue Angel offers a unique path for retiring physicians to ensure their practice thrives, their patients are cared for, and their life's work is honored."
      >
        <Link to="/contact" className="btn-primary">
          Explore your options
        </Link>
        <Link to="/partners" className="btn-outline">
          Hear from our partners
        </Link>
      </PageHero>

      {/* The approach — numbered steps */}
      <section className="container-x py-10">
        <Reveal>
          <span className="eyebrow">The Blue Angel approach</span>
          <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
            Four steps to a transition on your terms.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {approach.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="flex gap-5 rounded-3xl bg-white/70 p-8 shadow-card ring-1 ring-navy/5">
                <div className="flex flex-col items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-cream">
                    <step.icon size={22} />
                  </span>
                  <span className="mt-3 font-serif text-2xl text-azure">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-sand py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Why succession planning with Blue Angel?</span>
              <h2 className="display mt-3 text-3xl sm:text-4xl">
                Your legacy, unlocked — not liquidated.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {why.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-cream p-8 ring-1 ring-navy/5">
                  <h3 className="text-xl text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

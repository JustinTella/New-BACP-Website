import {
  Stethoscope,
  Network,
  GraduationCap,
  Users,
  Sparkles,
  Calculator,
  ShieldCheck,
  UserPlus,
  Boxes,
  Megaphone,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const clinical = [
  { icon: Network, title: "Cross-Coverage", body: "Reliable coverage from a trusted network so your patients are always cared for." },
  { icon: Sparkles, title: "Ancillary Services", body: "Expand your offering with supported ancillary services that add value for patients." },
  { icon: Users, title: "Shared Specialist Networks", body: "Tap into shared specialist networks for seamless referrals and coordinated care." },
  { icon: Stethoscope, title: "Physician Community", body: "Join a community of like-minded concierge physicians who share your philosophy." },
  { icon: GraduationCap, title: "Access to Specialty Education", body: "Continuing education and specialty learning to keep your practice at the leading edge." },
];

const administrative = [
  { icon: Calculator, title: "Accounting, Payroll & Benefits", body: "We handle the back office — accounting, payroll, and benefits administration." },
  { icon: ShieldCheck, title: "Insurance Coverage", body: "Comprehensive insurance coverage handled on your behalf." },
  { icon: UserPlus, title: "Recruiting & Hiring", body: "We recruit, screen, and hire the staff your practice needs to thrive." },
  { icon: Boxes, title: "Vendor Management", body: "We manage vendor relationships so you don't have to." },
  { icon: Megaphone, title: "Operations & Marketing", body: "Day-to-day operations and marketing support to grow your practice." },
];

function BenefitGrid({ items }: { items: typeof clinical }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.06}>
          <div className="group h-full rounded-3xl bg-white/70 p-7 shadow-card ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy text-cream transition-colors group-hover:bg-azure">
              <item.icon size={20} />
            </span>
            <h3 className="mt-5 text-lg text-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Benefits() {
  return (
    <>
      <PageHero
        eyebrow="Benefits"
        title="Unlock the power of partnership — keep the perks of independence."
        lede="Blue Angel allows you to unlock the power of partnership while maintaining the perks of independence. Here's how we support you."
      />

      <section className="container-x pb-6">
        <Reveal>
          <span className="eyebrow">Clinical benefits</span>
          <h2 className="display mt-3 text-3xl">Support at the point of care.</h2>
        </Reveal>
        <BenefitGrid items={clinical} />
      </section>

      <section className="container-x py-16">
        <Reveal>
          <span className="eyebrow">Administrative benefits</span>
          <h2 className="display mt-3 text-3xl">We handle the business of medicine.</h2>
        </Reveal>
        <BenefitGrid items={administrative} />
      </section>

      <CTASection />
    </>
  );
}

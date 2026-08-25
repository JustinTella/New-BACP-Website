import { Mail, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Get in touch."
        lede="We're here to answer your questions about our partnership model — whether you're considering selling your practice or joining our network."
      />

      <section className="container-x pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-navy p-10 text-cream">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream/15">
                  <Mail size={22} />
                </span>
                <h2 className="display mt-6 text-2xl text-cream">Email us</h2>
                <p className="mt-2 text-cream/70">
                  The fastest way to reach our team. We read every message.
                </p>
              </div>
              <a
                href={`mailto:${site.email}`}
                className="btn-accent mt-8 w-full"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl bg-white/70 p-10 shadow-card ring-1 ring-navy/5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-azure/10 text-azure">
                <ShieldCheck size={22} />
              </span>
              <h2 className="display mt-6 text-2xl">Our commitment</h2>
              <p className="mt-3 leading-relaxed text-muted">
                We believe in transparent, physician-first conversations. When you
                reach out, you're not just contacting a company; you're starting a
                partnership with a team that respects your autonomy and values your
                legacy. Every discussion is confidential and tailored to your unique
                goals.
              </p>
              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-pill bg-sand px-4 py-2 text-xs font-medium text-navy">
                    Confidential
                  </span>
                  <span className="rounded-pill bg-sand px-4 py-2 text-xs font-medium text-navy">
                    Physician-first
                  </span>
                  <span className="rounded-pill bg-sand px-4 py-2 text-xs font-medium text-navy">
                    No pressure
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 max-w-2xl">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}

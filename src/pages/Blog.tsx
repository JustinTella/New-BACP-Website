import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const posts = [
  {
    category: "News and Press",
    date: "February 2, 2026",
    title:
      "Blue Angel Closes its First Partnership with leading Concierge Physicians Dr. Amy Daniher and Dr. Ulrike Sujansky",
    excerpt:
      "Blue Angel Clinical Partners announces its inaugural partnership with two of the Bay Area's most respected concierge physicians.",
  },
  {
    category: "News and Press",
    date: "December 4, 2025",
    title:
      "Blue Angel Clinical Partners Completes Its $15M Fundraise to Accelerate the Growth of Concierge Medicine",
    excerpt:
      "The raise will fuel Blue Angel's mission to support independent concierge practices across the country.",
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Latest news."
        lede="Announcements, press, and perspectives from the Blue Angel team."
      />

      <section className="container-x py-6">
        <div className="grid gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <article className="group grid gap-6 rounded-3xl bg-white/70 p-8 shadow-card ring-1 ring-navy/5 transition-all duration-300 hover:shadow-soft md:grid-cols-[1fr_2fr] md:items-center">
                <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-navy to-navy-700" />
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
                    <span className="text-azure">{post.category}</span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">{post.date}</span>
                  </div>
                  <h2 className="mt-3 text-2xl leading-snug text-navy">{post.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-azure">
                    Read full story
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

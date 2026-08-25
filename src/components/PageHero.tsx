import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* soft ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-azure/10 blur-3xl" />
      <div className="container-x relative pt-16 pb-14 sm:pt-24 sm:pb-20">
        <Reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="display mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lede && <p className="lede mt-6 max-w-2xl">{lede}</p>}
          {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

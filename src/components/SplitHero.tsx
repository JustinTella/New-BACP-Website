import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SplitHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  image: string;
  /** Narrower source served below 768px. */
  imageMobile?: string;
  imageAlt: string;
  /** Put the artwork on the left instead of the right. */
  reverse?: boolean;
  children?: ReactNode;
};

/**
 * Asymmetric hero: copy on one side, artwork on the other. Used on the resource
 * pages so they do not open with the same full-width banner as the rest of the
 * site.
 *
 * On desktop the artwork is pinned to one half of the viewport rather than
 * sitting inside the container, so it bleeds to the edge at every width. The
 * container is centred, so its half-way point coincides with the viewport's and
 * the copy never runs underneath.
 */
function SplitHero({
  eyebrow,
  title,
  lede,
  image,
  imageMobile,
  imageAlt,
  reverse = false,
  children,
}: SplitHeroProps) {
  const picture = (
    <picture>
      {imageMobile && <source media="(max-width: 768px)" srcSet={imageMobile} />}
      <img
        src={image}
        alt={imageAlt}
        loading="eager"
        className="h-full w-full object-cover"
      />
    </picture>
  );

  return (
    <section className="relative overflow-hidden border-b border-navy/10 bg-light-gray">
      {/* Desktop artwork: half the viewport, full height of the section. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        aria-hidden
        className={`absolute inset-y-0 hidden w-1/2 lg:block ${
          reverse ? 'left-0' : 'right-0'
        }`}
      >
        {picture}
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:min-h-[34rem] lg:grid-cols-2">
          {/* Mobile artwork sits above the copy in normal flow. */}
          <div className="-mx-4 h-64 sm:-mx-6 sm:h-80 lg:hidden">{picture}</div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col justify-center py-16 md:py-24 ${
              reverse ? 'lg:col-start-2 lg:pl-12' : 'lg:pr-12'
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              {eyebrow}
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-navy sm:text-5xl">
              {title}
            </h1>
            {lede && (
              <p className="mt-7 text-lg leading-relaxed text-foreground/80">{lede}</p>
            )}
            {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SplitHero;

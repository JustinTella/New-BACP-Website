import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  /** Optional full-bleed banner rendered above the heading block. */
  image?: string;
  /** Narrower source served below 768px. Falls back to `image`. */
  imageMobile?: string;
  imageAlt?: string;
  /** object-position utility for the banner crop, e.g. "object-bottom". */
  imagePosition?: string;
  /** Removes the separator when the next section should flow directly from the hero. */
  divider?: boolean;
};

/**
 * Interior-page counterpart to the home page hero panel: same typography and
 * eyebrow treatment, with an optional banner image above it.
 */
function PageHero({
  eyebrow,
  title,
  lede,
  children,
  image,
  imageMobile,
  imageAlt = '',
  imagePosition = 'object-center',
  divider = true,
}: PageHeroProps) {
  return (
    <section className={`${divider ? 'border-b border-navy/10' : ''} bg-white`}>
      {image && (
        <div className="relative h-[32vh] min-h-[240px] w-full overflow-hidden md:h-auto md:aspect-[21/9] md:max-h-[60vh]">
          <picture>
            {imageMobile && <source media="(max-width: 768px)" srcSet={imageMobile} />}
            <img
              src={image}
              alt={imageAlt}
              className={`h-full w-full object-cover ${imagePosition}`}
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
        </div>
      )}

      <div
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          image ? 'pb-16 pt-12 md:pb-20 md:pt-16' : 'pb-16 pt-16 md:pb-20 md:pt-24'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
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
    </section>
  );
}

export default PageHero;

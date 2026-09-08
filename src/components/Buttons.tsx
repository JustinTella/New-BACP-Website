import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

/** Solid navy button — the home page hero treatment. */
export function PrimaryLink({
  to,
  children,
  className = '',
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-steely-blue ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

/** Hairline-outlined button that fills navy on hover. */
export function OutlineLink({
  to,
  children,
  className = '',
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 border border-navy/30 px-7 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}

/** Quiet inline link with a trailing arrow. */
export function TextLink({
  to,
  children,
  className = '',
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 text-sm font-medium text-steely-blue transition-colors hover:text-navy ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

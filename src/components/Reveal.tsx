import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Accepted for API compatibility; no longer used (see note below). */
  delay?: number;
  className?: string;
}

/**
 * Subtle upward-settle on mount via a pure CSS keyframe (`animate-fade-up`).
 *
 * IMPORTANT: this animation only moves the element (transform), it never touches
 * opacity. That is deliberate — an earlier opacity-based reveal (framer-motion,
 * then a CSS fade) could leave a freshly navigated page stuck invisible until a
 * manual refresh when the animation didn't fire/complete on a client-side route
 * change. By keeping opacity at its visible rest state at all times, content can
 * never be hidden regardless of whether the animation runs.
 */
export default function Reveal({ children, className }: RevealProps) {
  return <div className={`animate-fade-up ${className ?? ""}`}>{children}</div>;
}

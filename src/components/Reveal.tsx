import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { rise } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/** Wraps children in the shared rise-on-scroll reveal. */
function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      {...rise}
      transition={{ ...rise.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;

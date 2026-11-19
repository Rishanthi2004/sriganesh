import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
  duration?: number;
}

export function FadeInUp({
  children,
  delay = 0,
  className = '',
  yOffset = 22,
  duration = 0.45,
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

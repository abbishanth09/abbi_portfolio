import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type NextLinkProps = {
  href: string;
  label: string;
  number: string;
  children?: ReactNode;
};

export function NextLink({ href, label, number, children }: NextLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.98 }}
      className="group inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.26em] text-ink transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <span className="font-medium text-muted">{number}</span>
      <span className="inline-flex items-center gap-2 font-medium text-ink group-hover:text-accent">
        {label}
        <span aria-hidden="true" className="block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
      {children}
    </motion.a>
  );
}

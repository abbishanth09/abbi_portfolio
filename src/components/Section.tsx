import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  number: string;
  children: ReactNode;
  className?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export function Section({ id, number, children, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
            ease: 'easeOut',
            duration: 0.7,
          },
        },
      }}
      className={`relative isolate overflow-hidden px-5 pb-16 pt-24 sm:px-8 lg:px-10 ${className}`}
    >
      <motion.div variants={fadeUp} className="relative z-10 mx-auto max-w-[1200px]">
        {children}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-[-7%] right-[-4%] text-[clamp(9rem,34vw,45rem)] font-medium leading-none tracking-[-0.08em] text-[#efefef] select-none">
          {number}
        </div>
      </div>
    </motion.section>
  );
}

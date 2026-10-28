import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useState } from 'react';
import { NextLink } from '../components/NextLink';
import { projects } from '../data/projects';

export function WorkSection() {
  const reduceMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22 });
  const springY = useSpring(y, { stiffness: 180, damping: 22 });

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({ x: event.clientX - rect.left + 18, y: event.clientY - rect.top + 18 });
    x.set(event.clientX - rect.left + 18);
    y.set(event.clientY - rect.top + 18);
  };

  return (
    <section id="work" className="relative min-h-screen px-5 pb-16 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted">Projects</p>
        </motion.div>

        <div className="space-y-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              onMouseMove={handleMove}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.08 }}
              className="group relative grid items-center gap-4 border-t border-black/10 py-6 text-left sm:grid-cols-[60px_1fr_180px_50px] sm:gap-8"
            >
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">{String(index + 1).padStart(2, '0')}</span>
              <div className="space-y-2">
                <span className="block text-lg font-medium uppercase tracking-[-0.04em] text-ink transition-transform duration-200 group-hover:translate-x-3 group-hover:text-accent sm:text-2xl">
                  {project.title}
                </span>
                <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-muted">{project.tag}</span>
              </div>
              <span className="hidden text-[0.68rem] uppercase tracking-[0.18em] text-muted sm:block">{project.year}</span>
              <span className="ml-auto inline-flex text-2xl text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">→</span>

              {!reduceMotion && activeProject === index && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    style={{ x: springX, y: springY, left: cursor.x, top: cursor.y }}
                    className="pointer-events-none absolute z-20 hidden h-44 w-52 overflow-hidden border border-black/10 bg-paper shadow-none md:block"
                  >
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <NextLink href="#contact" label="Contact" number="04" />
        </div>
      </div>
    </section>
  );
}

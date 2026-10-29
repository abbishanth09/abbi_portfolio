import { motion, useReducedMotion } from 'framer-motion';
import { certifications } from '../data/certifications';

export function CertificationsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="relative min-h-screen px-5 pb-16 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted">Certifications</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.a
              key={certification.title}
              href={certification.href}
              target="_blank"
              rel="noreferrer"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }}
              className="group border border-black/10 bg-paper transition-colors duration-200 hover:border-accent"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-ghost">
                {certification.image ? (
                  <img
                    src={certification.image}
                    alt={`${certification.title} certificate`}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="px-8 text-center text-4xl font-medium uppercase tracking-[-0.08em] text-accent">PDF</span>
                )}
              </div>
              <div className="space-y-3 border-t border-black/10 p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-medium uppercase leading-tight tracking-[-0.04em] text-ink">{certification.title}</h3>
                  <span className="shrink-0 text-[0.68rem] text-muted">{certification.year}</span>
                </div>
                <p className="text-[0.68rem] uppercase leading-relaxed tracking-[0.12em] text-muted">{certification.issuer}</p>
                <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-accent">View certificate ↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

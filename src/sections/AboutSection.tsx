import { motion, useReducedMotion } from 'framer-motion';
import { NextLink } from '../components/NextLink';
import { skills } from '../data/skills';
import { site } from '../data/site';
import Abbishanth from '../assets/Abbishanth.jpg';
import resume from '../assets/Abbishanth_Resume Cyber Security.pdf';

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-7"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted">About</p>
          <h2 className="max-w-[520px] text-2xl leading-relaxed text-ink sm:text-3xl">
            I am a cybersecurity-focused student building practical skills in secure systems, ethical hacking, and defensive engineering.
          </h2>
          <p className="max-w-[560px] text-base leading-8 text-neutral-700">
            I am a student from Uva Wellassa University, currently studying in the Computer Science and Technology degree program. I am passionate about cybersecurity, system hardening, network defense, and learning how to protect digital environments from modern threats.
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-ink">
            {skills.map((skill, index) => (
              <span key={skill} className="inline-flex items-center gap-3">
                <span>{skill}</span>
                {index !== skills.length - 1 && <span className="text-muted">/</span>}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href={`mailto:${site.email}`}
              className="text-[0.7rem] uppercase tracking-[0.24em] text-ink hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Contact ↗
            </a>
            <a
              href={resume}
              download="Abbishanth-Resume.pdf"
              className="inline-flex items-center border border-ink px-4 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink transition-colors duration-200 hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Download CV ↓
            </a>
            <NextLink href="#work" label="Projects" number="03" />
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="group relative aspect-[4/5] w-full max-w-[420px] overflow-hidden border border-black/10 bg-ghost">
            <img
              src={Abbishanth}
              alt="Portrait of Abbishanth"
              className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

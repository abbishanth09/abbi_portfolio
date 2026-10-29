import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NextLink } from '../components/NextLink';
import { site } from '../data/site';

const roles = ['CYBER SECURITY', 'NETWORK', 'SOFTWARE', 'Systems'];

export function HomeSection() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const roleTimer = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(roleTimer);
  }, [reduceMotion]);

  return (
    <section id="home" className="relative flex min-h-screen items-end px-5 pb-10 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] items-end justify-between gap-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-[620px]"
        >
          <div className="mb-5 overflow-hidden">
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-[0.68rem] uppercase tracking-[0.26em] text-muted"
            >
              {site.intro}
            </motion.p>
          </div>

          <div className="space-y-2">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={roles[roleIndex]}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-110%', opacity: 0 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="text-[clamp(2.8rem,8vw,6.2rem)] font-medium uppercase leading-[0.9] tracking-[-0.06em] text-ink"
                >
                  {roles[roleIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="text-[clamp(2.8rem,8vw,6.2rem)] font-medium uppercase leading-[0.9] tracking-[-0.06em] text-ink"
              >
                ENGINEER<span className="text-accent">.../&gt;</span>
              </motion.h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="hidden md:flex"
        >
          <NextLink href="#about" label="About" number="02" />
        </motion.div>
      </div>
    </section>
  );
}

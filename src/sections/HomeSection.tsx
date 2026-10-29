import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NextLink } from '../components/NextLink';
import { site } from '../data/site';
import { RoleIndex } from '../components/RoleIndex';

export function HomeSection() {
  const reduceMotion = useReducedMotion();
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [rotationPaused, setRotationPaused] = useState(false);
  const activeRole = site.roles[activeRoleIndex];
  const roleWords = activeRole.title.split(' ');
  const headlineTitle = roleWords.slice(0, -1).join(' ');
  const headlineSuffix = roleWords[roleWords.length - 1];

  useEffect(() => {
    if (reduceMotion || rotationPaused) {
      return;
    }

    const roleTimer = window.setInterval(() => {
      setActiveRoleIndex((currentIndex) => (currentIndex + 1) % site.roles.length);
    }, 3000);

    return () => window.clearInterval(roleTimer);
  }, [reduceMotion, rotationPaused, activeRoleIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 py-28 sm:px-8 lg:px-10">
      <div className="relative mx-auto flex min-h-[calc(100vh-14rem)] w-full max-w-[1200px] items-center justify-between gap-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-[620px] translate-y-[10vh]"
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
            <div className="overflow-hidden" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={activeRole.title}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-110%', opacity: 0 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="text-[clamp(2.8rem,8vw,6.2rem)] font-medium uppercase leading-[0.9] tracking-[-0.06em] text-ink"
                >
                  {headlineTitle}
                </motion.h1>
              </AnimatePresence>
            </div>
            <div className="overflow-visible">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={headlineSuffix}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-110%', opacity: 0 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="whitespace-nowrap text-[clamp(2.8rem,8vw,6.2rem)] font-medium uppercase leading-[0.9] tracking-[-0.06em] text-ink"
                >
                  {headlineSuffix.toUpperCase()}
                  <span className="text-accent">...</span>
                  <span className="ml-3 inline-block font-bold tracking-normal text-accent">/&gt;</span>
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="absolute bottom-0 right-0 hidden md:flex"
        >
          <NextLink href="#about" label="About" number="02" />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-[12%] hidden w-[220px] md:block lg:w-[280px]"
        >
          <RoleIndex
            roles={site.roles}
            activeIndex={activeRoleIndex}
            paused={rotationPaused}
            onSelect={setActiveRoleIndex}
            onPause={() => setRotationPaused(true)}
            onResume={() => setRotationPaused(false)}
          />
        </motion.div>

        <div className="absolute bottom-8 left-0 right-0 md:hidden">
          <RoleIndex
            roles={site.roles}
            activeIndex={activeRoleIndex}
            paused={rotationPaused}
            onSelect={setActiveRoleIndex}
            onPause={() => setRotationPaused(true)}
            onResume={() => setRotationPaused(false)}
          />
        </div>
      </div>
    </section>
  );
}

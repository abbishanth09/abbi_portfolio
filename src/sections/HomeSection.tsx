import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import portrait from '../assets/Abbishanth.jpg';
import { site } from '../data/site';

const roles = ['CYBER SECURITY', 'NETWORK', 'SOFTWARE', 'SYSTEMS', 'MOBILE APPLICATION'];

const homeLinks = [
  { href: '#about', label: 'Me', icon: '☺' },
  { href: '#work', label: 'Projects', icon: '▣' },
  { href: '#about', label: 'Skills', icon: '◈' },
  { href: '#work', label: 'Fun', icon: '✧' },
  { href: '#contact', label: 'Contact', icon: '♧' },
];

export function HomeSection() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const isMobileApplication = roles[roleIndex] === 'MOBILE APPLICATION';

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
    <section id="home" className="relative min-h-screen overflow-hidden bg-paper px-5 pb-5 pt-24 sm:px-8">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-1/3 h-96 w-96 rounded-full bg-fuchsia-200/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-yellow-100/35 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[1180px] flex-col items-center">
        <motion.a
          href="#contact"
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-0 top-0 inline-flex items-center gap-3 rounded-full border border-black/10 bg-paper/75 px-4 py-2.5 text-sm font-semibold text-ink shadow-sm backdrop-blur transition-colors hover:border-accent hover:text-accent"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-sm text-paper" aria-hidden="true">
            ●
          </span>
          Build something together
          <span className="text-lg font-normal" aria-hidden="true">
            →
          </span>
        </motion.a>

        <div className="flex w-full flex-1 flex-col items-center pt-2 text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-paper text-2xl shadow-[0_8px_24px_rgba(17,17,17,0.12)]"
            aria-hidden="true"
          >
            ◒
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1.25rem,2.4vw,2rem)] font-medium tracking-[-0.04em] text-ink"
          >
            Hey, I&apos;m {site.name.split(' ')[1]} <span aria-hidden="true">👋</span>
          </motion.p>

          <div className="mt-2 h-[clamp(4.5rem,10vw,8rem)] overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.h1
                key={roles[roleIndex]}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="text-[clamp(3.4rem,9vw,8rem)] font-bold uppercase leading-none tracking-[-0.08em] text-ink"
              >
                {roles[roleIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="mt-1 h-14 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={isMobileApplication ? 'developer' : 'engineer'}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.06em] text-accent"
              >
                {isMobileApplication ? 'Developer' : 'Engineer'} <span aria-hidden="true">.../&gt;</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mt-3 h-[clamp(15rem,38vh,22rem)] w-[clamp(13rem,30vw,19rem)] overflow-hidden rounded-[46%_46%_42%_42%] border-8 border-paper bg-ghost shadow-[0_18px_45px_rgba(17,17,17,0.18)]"
          >
            <img src={portrait} alt={`${site.name} portrait`} className="h-full w-full object-cover object-top" />
          </motion.div>

          <a
            href="#contact"
            className="mt-5 flex w-full max-w-[580px] items-center justify-between rounded-full border border-black/10 bg-paper/80 px-6 py-3.5 text-left text-sm text-muted shadow-sm backdrop-blur transition-colors hover:border-accent hover:text-ink"
          >
            <span>Ask me anything...</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-xl text-white" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <nav aria-label="Homepage navigation" className="mt-5 grid w-full max-w-[780px] grid-cols-3 gap-3 sm:grid-cols-5">
          {homeLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex min-h-20 flex-col items-center justify-center rounded-2xl border border-black/10 bg-paper/80 px-2 py-3 text-center shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <span className="mb-1 text-lg text-accent" aria-hidden="true">
                {link.icon}
              </span>
              <span className="text-sm font-semibold text-ink">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

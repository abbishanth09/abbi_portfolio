import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { site } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';

type HeaderProps = {
  sectionIds: string[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Header({ sectionIds, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const activeSection = useActiveSection(sectionIds);
  const reduceMotion = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-paper/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
          <span>{site.handle}</span>
          <span className="h-2 w-2 bg-accent" aria-hidden="true" />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');

            return (
              <div key={item.href} className="relative">
                <a
                  href={item.href}
                  className={`relative inline-flex items-center px-1 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-accent'
                  }`}
                >
                  {isActive && !reduceMotion && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-x-0 -bottom-[0.5rem] h-px bg-accent"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                  {item.label}
                </a>
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-black/10 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:hidden"
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-px w-full bg-ink transition-transform duration-300 ${mobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-px w-full bg-ink transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'top-2 opacity-100'}`} />
            <span className={`absolute left-0 h-px w-full bg-ink transition-transform duration-300 ${mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-paper pt-24 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex h-full flex-col items-start justify-start gap-8 px-5 pt-8">
              {site.nav.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.25, ease: 'easeOut' }}
                  className="w-full border-b border-black/10 pb-4 text-[clamp(2.1rem,8vw,4rem)] font-medium uppercase leading-none tracking-[-0.06em] text-ink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

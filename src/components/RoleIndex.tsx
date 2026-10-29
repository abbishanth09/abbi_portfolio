import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { Role } from '../data/site';

type RoleIndexProps = {
  roles: Role[];
  activeIndex: number;
  paused: boolean;
  onSelect: (index: number) => void;
  onPause: () => void;
  onResume: () => void;
};

const ROTATION_DURATION = 3000;

export function RoleIndex({ roles, activeIndex, paused, onSelect, onPause, onResume }: RoleIndexProps) {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    progress.set(0);
    startTime.current = null;
  }, [activeIndex, progress]);

  useAnimationFrame((time) => {
    if (paused || reduceMotion) return;
    if (startTime.current === null) startTime.current = time;
    progress.set(Math.min((time - startTime.current) / ROTATION_DURATION, 1));
  });

  const handleSelect = (index: number) => {
    onSelect(index);
    onResume();
  };

  const renderRole = (role: Role, index: number, compact = false) => {
    const isActive = index === activeIndex;

    return (
      <motion.button
        key={role.id}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-current={isActive ? 'true' : undefined}
        initial={reduceMotion ? false : { opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={onPause}
        onMouseLeave={onResume}
        onFocus={onPause}
        onBlur={onResume}
        onClick={() => handleSelect(index)}
        className={
          compact
            ? `border border-black/10 px-3 py-2 text-[0.6rem] uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive ? 'font-bold text-ink focus:text-accent' : 'text-muted hover:text-accent focus:text-accent'
              }`
            : 'group relative flex min-h-[60px] w-full items-center gap-3 border-t border-black/15 text-left text-[0.68rem] uppercase tracking-[0.18em] transition-colors last:border-b focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset'
        }
      >
        {compact ? (
          <>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{role.label}</span>
          </>
        ) : (
          <>
            <span className="relative flex w-8 shrink-0 items-center justify-center tabular-nums text-muted">
              {isActive && <motion.span layoutId="active-role-marker" className="absolute -left-1 h-2 w-2 bg-accent" aria-hidden="true" />}
              <span className={isActive ? 'font-bold text-ink' : undefined}>{String(index + 1).padStart(2, '0')}</span>
            </span>
            <span className={isActive ? 'font-bold text-ink group-hover:text-accent group-focus:text-accent' : 'text-muted group-hover:text-accent group-focus:text-accent'}>
              {role.label}
            </span>
            {isActive && <motion.span className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent" style={{ scaleX: progress }} />}
          </>
        )}
      </motion.button>
    );
  };

  return (
    <nav aria-label="Roles" role="tablist" className="w-full max-w-[340px]">
      <div className="hidden md:block">{roles.map((role, index) => renderRole(role, index))}</div>
      <div className="flex flex-wrap justify-end gap-2 md:hidden">{roles.map((role, index) => renderRole(role, index, true))}</div>
    </nav>
  );
}

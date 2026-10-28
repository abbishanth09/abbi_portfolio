type SectionNumberProps = {
  number: string;
};

export function SectionNumber({ number }: SectionNumberProps) {
  return (
    <div className="pointer-events-none select-none absolute bottom-[-4vw] right-[-1vw] text-[clamp(7rem,32vw,44rem)] font-medium leading-none tracking-[-0.08em] text-ghost/80 text-stone-200">
      {number}
    </div>
  );
}

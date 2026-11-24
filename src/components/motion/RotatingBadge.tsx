import { cn } from "@/lib/utils";

/** Selo circular com texto girando. */
export function RotatingBadge({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("relative grid size-32 place-items-center rounded-full bg-accent text-accent-foreground shadow-lift md:size-40", className)}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-spin-slow" aria-hidden>
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-current text-[9.5px] uppercase tracking-[0.32em]">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="font-display text-3xl italic md:text-4xl">a.</span>
    </div>
  );
}

import { cn } from "@/lib/utils";

/** Faixa de frases em movimento contínuo. */
export function Marquee({ items, reverse = false, className }: { items: string[]; reverse?: boolean; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("overflow-hidden", className)} aria-label={items.join(", ")}>
      <div className={cn("flex w-max", reverse ? "animate-marquee-reverse" : "animate-marquee")} aria-hidden>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="px-6 font-display text-3xl italic md:px-10 md:text-5xl">{item}</span>
                <span className="text-accent text-2xl md:text-3xl">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

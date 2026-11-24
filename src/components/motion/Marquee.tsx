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
                <span className="px-5 text-4xl tracking-[-0.05em] md:px-8 md:text-7xl">{item}</span>
                <span className="mono rounded-full border border-current px-2 py-0.5">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

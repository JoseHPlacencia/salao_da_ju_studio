import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { stats } from "@/data/content";

export function StatsRow() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 120} className="border-t pt-6">
          <p className="font-display text-5xl md:text-6xl">
            <CountUp value={s.value} suffix={s.suffix} />
          </p>
          <p className="eyebrow mt-3 text-muted-foreground">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}

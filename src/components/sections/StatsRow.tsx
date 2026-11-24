import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { stats } from "@/data/content";

export function StatsRow() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 120} className="border-t border-current/30 pt-4">
          <p className="text-6xl font-medium tracking-[-0.06em] md:text-7xl">
            <CountUp value={s.value} suffix={s.suffix} />
          </p>
          <p className="mono mt-3 opacity-70">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}

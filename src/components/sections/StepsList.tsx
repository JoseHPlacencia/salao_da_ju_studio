import { Reveal } from "@/components/motion/Reveal";
import { steps } from "@/data/content";

export function StepsList() {
  return (
    <ol className="divide-y border-y">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 120} className="group flex gap-6 py-7">
          <span className="font-display text-4xl italic text-accent transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-6">
            0{i + 1}
          </span>
          <div>
            <h3 className="text-2xl">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

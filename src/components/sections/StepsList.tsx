import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/aura/Tag";
import { steps } from "@/data/content";

export function StepsList() {
  return (
    <ol className="grid gap-px overflow-hidden bg-current/15 md:grid-cols-3">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 120} className="group flex min-h-72 flex-col justify-between bg-[var(--step-bg,var(--background))] p-6">
          <Tag shape="circle">{i + 1}</Tag>
          <div>
            <h3 className="display-md transition-transform duration-500 group-hover:-translate-y-1">{s.title}</h3>
            <p className="mt-3 max-w-xs text-sm opacity-70">{s.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type Props = { eyebrow: string; title: string; italic: string; side?: string; light?: boolean; className?: string };

export function SectionHeading({ eyebrow, title, italic, side, light = false, className }: Props) {
  return (
    <div className={cn("grid items-end gap-6 md:grid-cols-12", className)}>
      <div className="md:col-span-8">
        <Reveal variant="fade">
          <p className={cn("eyebrow mb-5", light ? "text-champagne" : "text-accent")}>{eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg">
            {title} <em className={light ? "text-champagne" : "text-accent"}>{italic}</em>
          </h2>
        </Reveal>
      </div>
      {side ? (
        <Reveal delay={200} className="md:col-span-4">
          <p className={cn("max-w-sm", light ? "text-ink-muted" : "text-muted-foreground")}>{side}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

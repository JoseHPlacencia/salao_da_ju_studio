import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "light" | "ink" | "muted" | "accent";
const tones: Record<Tone, string> = {
  light: "bg-background text-foreground",
  ink: "bg-ink text-ink-foreground",
  muted: "bg-muted text-foreground",
  accent: "bg-accent text-accent-foreground",
};

/** Bloco com cantos superiores arredondados que se sobrepõe ao bloco anterior. */
export function Sheet({ children, tone = "light", className, id }: { children: ReactNode; tone?: Tone; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("sheet", tones[tone], className)}>
      {children}
    </section>
  );
}

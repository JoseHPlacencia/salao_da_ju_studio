import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/** Rótulo pequeno de seção ("Serviços em destaque") com ação opcional à direita. */
export function SectionLabel({ children, action, className }: { children: ReactNode; action?: ReactNode; className?: string }) {
  return (
    <Reveal variant="fade" className={cn("flex items-baseline justify-between gap-4 pb-8", className)}>
      <h2 className="eyebrow">{children}</h2>
      {action}
    </Reveal>
  );
}

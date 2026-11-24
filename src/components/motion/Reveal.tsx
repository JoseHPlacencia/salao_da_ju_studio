import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type Variant = "up" | "fade" | "scale" | "left" | "right" | "clip";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
};

/** Revela o conteúdo com animação quando ele entra na tela. */
export function Reveal({ children, as: Tag = "div", variant = "up", delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-variant={variant}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn("reveal", inView && "is-visible", className)}
    >
      {variant === "clip" ? <div className="reveal-inner">{children}</div> : children}
    </Tag>
  );
}

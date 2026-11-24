import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TagProps = { children: ReactNode; shape?: "box" | "pill" | "circle"; className?: string };

/** Etiqueta em fonte mono, no estilo de catálogo. */
export function Tag({ children, shape = "box", className }: TagProps) {
  return (
    <span
      className={cn(
        "mono inline-flex h-[1.35rem] shrink-0 items-center justify-center border border-current px-1.5 whitespace-nowrap",
        shape === "pill" && "rounded-full px-2",
        shape === "circle" && "w-[1.35rem] rounded-full px-0",
        className,
      )}
    >
      {children}
    </span>
  );
}

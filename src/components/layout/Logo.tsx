import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid size-10 place-items-center rounded-full font-display text-xl italic transition-transform duration-700 hover:rotate-[360deg]",
          light ? "bg-ink-foreground text-ink" : "bg-primary text-primary-foreground",
        )}
      >
        a.
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-wide">
          Studio <em>Aura</em>
        </span>
        <span className={cn("eyebrow mt-1 text-[0.55rem]", light ? "text-ink-muted" : "text-muted-foreground")}>Beleza & bem-estar</span>
      </span>
    </span>
  );
}

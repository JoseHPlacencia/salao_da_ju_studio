import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { navLinks } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/** Menu flutuante no rodapé da tela, com painel que abre para cima. */
export function BottomNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = navLinks.find((l) => (l.to === "/" ? pathname === "/" : pathname.startsWith(l.to)));

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div
        className={cn("fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] transition-opacity duration-500", open ? "opacity-100" : "pointer-events-none opacity-0")}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <nav aria-label="Navegação principal" className="fixed bottom-4 left-1/2 z-50 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 md:bottom-6">
        <div
          className={cn(
            "grid overflow-hidden rounded-t-[4px] bg-ink/90 text-ink-foreground backdrop-blur-md transition-[grid-template-rows] duration-700 ease-[var(--ease-out-expo)]",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <ul className="min-h-0">
            {navLinks.map((l, i) => (
              <li key={l.to} className="border-b border-ink-foreground/10 first:pt-2">
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className={cn(
                    "group flex items-baseline justify-between px-5 py-3 text-3xl tracking-[-0.04em] transition-all duration-500 hover:pl-7 hover:text-accent data-[status=active]:text-accent",
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  )}
                  style={{ transitionDelay: open ? `${100 + i * 45}ms` : "0ms" }}
                >
                  {l.label}
                  <span className="mono text-ink-muted">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn("flex h-12 items-center bg-ink/80 text-sm text-ink-foreground backdrop-blur-md transition-[border-radius] duration-500", open ? "rounded-b-[4px]" : "rounded-[4px]")}>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-full w-12 shrink-0 flex-col items-center justify-center gap-[5px] border-r border-ink-foreground/10"
          >
            <span className={cn("h-px w-4 bg-current transition-transform duration-500", open && "translate-y-[3px] rotate-45")} />
            <span className={cn("h-px w-4 bg-current transition-transform duration-500", open && "-translate-y-[3px] -rotate-45")} />
          </button>
          <span className="flex-1 truncate px-4 font-medium">{current?.label ?? "Da Ju Hair"}</span>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1.5 rounded-[3px] bg-accent px-3 py-1.5 font-medium text-accent-foreground transition-colors hover:bg-ink-foreground"
          >
            Agendar
          </a>
        </div>
      </nav>
    </>
  );
}

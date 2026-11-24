import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { navLinks } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 shadow-soft backdrop-blur-md" : "bg-background",
      )}
    >
      <div className={cn("container-aura flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20 md:h-24")}>
        <Link to="/" aria-label="Studio Aura, início">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative text-sm text-foreground/75 transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="ink" size="lg">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Agendar horário <ArrowUpRight />
            </a>
          </Button>
        </div>

        <button
          type="button"
          className={cn("relative z-[60] flex size-11 flex-col items-center justify-center gap-1.5 transition-colors duration-500 lg:hidden", open && "text-ink-foreground")}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={cn("h-px w-7 bg-current transition-transform duration-500", open && "translate-y-[3.5px] rotate-45")} />
          <span className={cn("h-px w-7 bg-current transition-transform duration-500", open && "-translate-y-[3.5px] -rotate-45")} />
        </button>
      </div>

      {/* Menu mobile em tela cheia */}
      <div
        className={cn(
          "fixed inset-0 z-[55] flex flex-col justify-between bg-gradient-ink px-6 pt-28 pb-10 text-ink-foreground transition-[clip-path] duration-700 ease-[var(--ease-out-expo)] lg:hidden",
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Navegação mobile">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={cn(
                "font-display text-5xl italic transition-all duration-700 data-[status=active]:text-champagne",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="light" size="xl">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            Agendar pelo WhatsApp <ArrowUpRight />
          </a>
        </Button>
      </div>
    </header>
  );
}

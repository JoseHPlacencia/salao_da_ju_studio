import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Tag } from "@/components/aura/Tag";
import { LiveClock } from "@/components/aura/LiveClock";
import { cn } from "@/lib/utils";
import { isHeroLogoDocked, onHeroLogoDocked } from "@/lib/logo-handoff";

/** Barra superior fixa: logo pequeno e etiquetas. O modo "difference" mantém contraste sobre qualquer fundo. */
export function TopBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  // No início, o logo pequeno só aparece quando o nome gigante da capa termina de encolher.
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    setDocked(isHeroLogoDocked());
    return onHeroLogoDocked(setDocked);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 text-ink-foreground mix-blend-difference">
      <div className="container-aura flex items-start justify-between pt-4 md:pt-6">
        <Link
          to="/"
          aria-label="Da Ju Hair, início"
          data-aura-logo
          className={cn(
            "pointer-events-auto font-display text-[1.75rem] leading-[0.78] font-medium tracking-[-0.075em] md:text-[2.25rem]",
            isHome && !docked && "pointer-events-none opacity-0",
          )}
        >
          Da Ju Hair
        </Link>
        <div className="pointer-events-auto flex items-center gap-1.5">
          <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="hidden transition-opacity hover:opacity-60 sm:block">
            <Tag>@{site.instagram}</Tag>
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">
            <Tag shape="pill">whatsapp</Tag>
          </a>
          <Tag shape="pill">
            <LiveClock />
          </Tag>
        </div>
      </div>
    </div>
  );
}

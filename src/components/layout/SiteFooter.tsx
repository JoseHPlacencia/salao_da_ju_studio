import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Tag } from "@/components/aura/Tag";
import { LiveClock } from "@/components/aura/LiveClock";
import { Reveal } from "@/components/motion/Reveal";
import { SplitChars } from "@/components/aura/SplitChars";
import { useInView } from "@/hooks/use-in-view";

export function SiteFooter() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <footer className="sheet bg-accent text-accent-foreground">
      <div className="container-aura grid gap-10 pt-20 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal>
          <p className="eyebrow mb-4">Agende</p>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="display-md link-underline">
            Fale com a gente ↗
          </a>
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow mb-4">Visite</p>
          <p className="text-sm">
            {site.address.street}
            <br />
            {site.address.district} · {site.address.city}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="eyebrow mb-4">Horários</p>
          <ul className="space-y-1 text-sm">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 border-b border-accent-foreground/20 pb-1">
                <span>{h.days}</span>
                <span className="mono">{h.time}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={240}>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="grid grid-cols-2 gap-1 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div ref={ref} className="container-aura flex flex-col justify-between gap-6 overflow-x-clip lg:flex-row lg:items-end">
        <p className="wordmark-name -ml-[0.04em] pb-[0.1em]">{inView ? <SplitChars text="Da Ju Hair" step={80} /> : <span className="opacity-0">Da Ju Hair</span>}</p>
        <div className="flex flex-wrap gap-1.5 pb-4 lg:pb-[3vw]">
          <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
            <Tag>@{site.instagram}</Tag>
          </a>
          <a href={`mailto:${site.email}`} className="hover:opacity-60">
            <Tag shape="pill">e-mail</Tag>
          </a>
          <Tag shape="pill">
            <LiveClock />
          </Tag>
        </div>
      </div>
      <div className="container-aura flex flex-wrap items-center justify-between gap-2 pt-4 pb-24 text-xs md:pb-20">
        <span>© 2014—{new Date().getFullYear()} {site.name}</span>
        <span className="mono">Beleza & bem-estar · {site.address.city}</span>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Mail, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/motion/Reveal";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-ink text-ink-foreground">
      <div className="container-aura pt-20 pb-10 md:pt-28">
        <Reveal>
          <p className="display-lg max-w-4xl">
            Um espaço para florescer <em className="text-champagne">do seu jeito.</em>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-ink-muted/25 pt-12 md:grid-cols-4">
          <Reveal delay={0}>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm text-ink-muted">
              Cabelo, unhas, maquiagem e tratamentos com atendimento personalizado em {site.address.city}.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow mb-5 text-champagne">Explore</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline text-ink-foreground/80 hover:text-ink-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <p className="eyebrow mb-5 text-champagne">Fale com a gente</p>
            <ul className="space-y-3 text-sm text-ink-foreground/80">
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2">
                  <Instagram className="size-4" /> @{site.instagram}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-underline inline-flex items-center gap-2">
                  <Mail className="size-4" /> {site.email}
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={300}>
            <p className="eyebrow mb-5 text-champagne">Visite-nos</p>
            <p className="text-sm text-ink-foreground/80">
              {site.address.street}
              <br />
              {site.address.district} · {site.address.city}
            </p>
            <ul className="mt-4 space-y-1 text-sm text-ink-foreground/80">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: <span className="text-ink-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ink-muted/25 pt-6 text-xs text-ink-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="eyebrow group inline-flex items-center gap-2 text-ink-foreground"
          >
            Voltar ao topo <ArrowUp className="size-3.5 transition-transform duration-500 group-hover:-translate-y-1" />
          </button>
          <span className="eyebrow">Feito com <span className="text-accent">✳</span> carinho</span>
        </div>
      </div>
    </footer>
  );
}

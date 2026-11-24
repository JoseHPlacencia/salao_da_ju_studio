import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { Marquee } from "@/components/motion/Marquee";
import { SplitChars } from "@/components/aura/SplitChars";
import { Sheet } from "@/components/aura/Sheet";
import { Tag } from "@/components/aura/Tag";
import { MediaCard } from "@/components/aura/MediaCard";
import { SectionLabel } from "@/components/aura/SectionLabel";
import { StepsList } from "@/components/sections/StepsList";
import { StatsRow } from "@/components/sections/StatsRow";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { useInView } from "@/hooks/use-in-view";
import { site } from "@/config/site";
import { images } from "@/data/images";
import { serviceCategories } from "@/data/services";
import { gallery, testimonials } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Aura | Beleza que revela você" },
      { name: "description", content: "Salão de beleza em Vitória: cabelo, unhas, maquiagem e tratamentos com atendimento acolhedor e personalizado." },
      { property: "og:title", content: "Studio Aura | Beleza que revela você" },
      { property: "og:description", content: "Um espaço para cuidar de você. Cabelo, unhas, maquiagem e tratamentos no Studio Aura." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.hero },
    ],
  }),
  component: HomePage,
});

const heroSlides = [
  { src: images.hero, alt: "Cliente com cabelos longos e ondulados" },
  { src: images.curls, alt: "Cabelo cacheado volumoso e saudável" },
  { src: images.nailsSoft, alt: "Unhas delicadas em tom nude" },
  { src: images.makeup, alt: "Maquiagem com pele luminosa" },
];

function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <ServicesGrid />
      <Ritual />
      <GalleryRow />
      <BookingCTA />
      <Testimonials />
    </>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4500);
    return () => window.clearInterval(t);
  }, []);

  return (
    <>
      <section className="container-aura pt-14 pb-8 md:pt-6 md:pb-10">
        <h1 className="wordmark -ml-[0.05em]">
          <span className="sr-only">Studio Aura — salão de beleza</span>
          <span aria-hidden>
            <SplitChars text="Aura" baseDelay={1200} step={90} />
          </span>
        </h1>
        <Reveal variant="fade" delay={1700} className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="max-w-sm text-sm">Salão de beleza · cabelo, unhas, maquiagem e tratamentos em {site.address.city}.</p>
          <div className="flex gap-1">
            <Tag>Beleza</Tag>
            <Tag>Bem-estar</Tag>
            <Tag shape="pill">desde 2014</Tag>
          </div>
        </Reveal>
      </section>

      <div className="sticky top-0 h-[80vh] overflow-hidden bg-muted md:h-screen">
        {heroSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            aria-hidden={i !== slide}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1600ms] ease-[var(--ease-out-expo)]",
              i === slide ? "scale-100 opacity-100" : "scale-110 opacity-0",
            )}
          />
        ))}
        <div className="absolute top-4 left-4 flex gap-1 text-ink-foreground mix-blend-difference md:left-6">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={cn("mono h-[1.35rem] rounded-full border border-current px-2 transition-colors", i === slide && "bg-ink-foreground text-ink")}
            >
              0{i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function Statement() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <Sheet tone="ink">
      <div className="container-aura pt-16 pb-24 md:pt-24 md:pb-32">
        <div ref={ref} className="statement max-w-5xl md:text-[clamp(2rem,4.2vw,4.25rem)]">
          {inView ? (
            <SplitWords
              step={28}
              lines={[
                { text: "O Studio Aura é um salão de beleza que cria momentos de cuidado" },
                { text: "para revelar a sua melhor versão.", className: "text-accent" },
              ]}
            />
          ) : (
            <span className="opacity-0">O Studio Aura é um salão de beleza que cria momentos de cuidado.</span>
          )}
        </div>
        <div className="mt-20">
          <StatsRow />
        </div>
        <Reveal className="mt-14 flex flex-wrap gap-3">
          <Button asChild variant="accent" size="xl">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Agende seu momento <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="frame-light" size="xl">
            <Link to="/sobre">Conheça o studio</Link>
          </Button>
        </Reveal>
      </div>
    </Sheet>
  );
}

function ServicesGrid() {
  return (
    <Sheet tone="light">
      <div className="container-aura pt-8 pb-20 md:pb-28">
        <SectionLabel action={<Link to="/servicos" className="eyebrow link-underline">Ver todos</Link>}>Serviços em destaque</SectionLabel>
        <div className="grid gap-x-5 gap-y-14 md:grid-cols-2">
          {serviceCategories.map((c, i) => (
            <Reveal key={c.id} variant="clip" delay={(i % 2) * 120} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <Link to="/servicos" hash={c.id} className="block">
                <MediaCard
                  image={c.image}
                  alt={c.headline}
                  title={c.headline}
                  tags={[c.title, c.items[0]?.name ?? "", "Agendar"].filter(Boolean)}
                  count={c.items.length}
                  aspect={i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}
                />
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 flex justify-center">
          <Button asChild variant="frame" size="xl">
            <Link to="/servicos">Ver todos os serviços</Link>
          </Button>
        </Reveal>
      </div>
    </Sheet>
  );
}

function Ritual() {
  return (
    <Sheet tone="muted" className="[--step-bg:var(--muted)]">
      <div className="container-aura pt-8 pb-20 md:pb-28">
        <SectionLabel>O ritual Aura</SectionLabel>
        <Reveal>
          <p className="display-lg max-w-4xl">Mais que um atendimento — uma experiência pensada em você.</p>
        </Reveal>
        <div className="mt-14">
          <StepsList />
        </div>
      </div>
    </Sheet>
  );
}

function GalleryRow() {
  const items = gallery.slice(0, 8);
  return (
    <Sheet tone="light">
      <div className="container-aura pt-8">
        <SectionLabel action={<Link to="/galeria" className="eyebrow link-underline">Ver galeria</Link>}>Galeria</SectionLabel>
      </div>
      <div className="border-y border-foreground py-6">
        <Marquee items={["Cabelo", "Unhas", "Maquiagem", "Tratamentos"]} />
      </div>
      <div className="scrollbar-none flex gap-4 overflow-x-auto px-4 py-10 md:px-6">
        {items.map((g, i) => (
          <Reveal key={g.src} variant="fade" delay={i * 60} className="w-64 shrink-0 md:w-80">
            <MediaCard image={g.src} alt={g.alt} title={g.alt} tags={[g.category]} count={i + 1} aspect="aspect-[3/4]" />
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}

function Testimonials() {
  return (
    <Sheet tone="accent" className="-mb-px">
      <div className="container-aura pt-8 pb-8">
        <SectionLabel action={<Link to="/depoimentos" className="eyebrow link-underline">Ver todos</Link>}>Quem vive, recomenda</SectionLabel>
      </div>
      <div className="scrollbar-none flex gap-4 overflow-x-auto px-4 pb-4 md:px-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} variant="fade" delay={i * 80} className="w-80 shrink-0 md:w-96">
            <TestimonialCard {...t} index={i + 1} />
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}

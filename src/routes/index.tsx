import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Marquee } from "@/components/motion/Marquee";
import { Magnetic } from "@/components/motion/Magnetic";
import { RotatingBadge } from "@/components/motion/RotatingBadge";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StepsList } from "@/components/sections/StepsList";
import { StatsRow } from "@/components/sections/StatsRow";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { images } from "@/data/images";
import { serviceCategories } from "@/data/services";
import { gallery, testimonials } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";

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

function HomePage() {
  return (
    <>
      <Hero />
      <section className="border-y bg-paper py-8">
        <Marquee items={["Beleza que acolhe", "Cuidado que transforma", "Você em primeiro lugar", "Um tempo só seu"]} />
      </section>
      <AboutTeaser />
      <ServicesPreview />
      <QuoteBand />
      <ExperienceSection />
      <GalleryStrip />
      <TestimonialsPreview />
      <BookingCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="container-aura relative grid gap-12 pt-8 pb-20 md:pt-14 lg:grid-cols-12 lg:pb-28">
      <div className="relative z-10 flex flex-col justify-center lg:col-span-7">
        <Reveal variant="fade">
          <p className="eyebrow mb-8 flex items-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent" /> Sua beleza, no seu tempo
          </p>
        </Reveal>
        <h1 className="display-xl">
          <SplitWords
            baseDelay={1300}
            lines={[{ text: "Um novo olhar." }, { text: "A sua melhor", italic: true, className: "text-accent" }, { text: "versão." }]}
          />
        </h1>
        <Reveal delay={1800}>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            Mais do que beleza, criamos momentos de cuidado. Um espaço acolhedor para você se sentir bem por inteiro.
          </p>
        </Reveal>
        <Reveal delay={1950} className="mt-10 flex flex-wrap items-center gap-6">
          <Magnetic>
            <Button asChild variant="ink" size="xl">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Agende seu momento <ArrowUpRight />
              </a>
            </Button>
          </Magnetic>
          <Link to="/servicos" className="group inline-flex items-center gap-2 text-sm font-medium">
            <span className="link-underline">Conheça nossos serviços</span>
            <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-1" />
          </Link>
        </Reveal>
        <Reveal delay={2100} className="mt-14 flex items-center gap-4 border-t pt-6">
          <span className="tracking-[0.3em] text-champagne">★★★★★</span>
          <p className="text-sm text-muted-foreground">
            Beleza com intenção. <b className="text-foreground">Cuidado em cada detalhe.</b>
          </p>
        </Reveal>
      </div>

      <div className="relative lg:col-span-5">
        <Reveal variant="clip" delay={1200}>
          <div className="aspect-[4/5] overflow-hidden rounded-t-full shadow-lift">
            <Parallax speed={0.1}>
              <img src={images.hero} alt="Profissional cuidando dos cabelos de uma cliente no salão" className="h-full w-full object-cover" />
            </Parallax>
          </div>
        </Reveal>
        <Reveal variant="scale" delay={1900} className="absolute -bottom-8 -left-6 md:-left-14">
          <RotatingBadge text="Studio Aura ✳ Realce sua essência ✳ " />
        </Reveal>
        <Reveal variant="right" delay={2100} className="absolute top-10 -right-3 hidden md:block">
          <div className="animate-float rounded-2xl bg-card/90 px-5 py-4 shadow-soft backdrop-blur">
            <p className="eyebrow text-muted-foreground">Agenda aberta</p>
            <p className="font-display text-xl italic">Terça a sábado</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="container-aura grid items-center gap-14 py-24 md:grid-cols-12 md:py-32">
      <div className="relative md:col-span-5">
        <Reveal variant="clip">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl">
            <Parallax speed={0.06}>
              <img src={images.interior} alt="Interior elegante e acolhedor do salão" className="h-full w-full object-cover" />
            </Parallax>
          </div>
        </Reveal>
        <Reveal variant="scale" delay={300} className="absolute -right-6 -bottom-10 hidden w-2/5 md:block">
          <div className="aspect-square overflow-hidden rounded-full border-8 border-background shadow-lift">
            <img src={images.nailsSoft} alt="Detalhe de unhas delicadas" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <Reveal variant="fade">
          <p className="eyebrow mb-5 text-accent">Bem-vinda ao Studio Aura</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg">
            Seu momento de <em className="text-accent">se reconectar.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-lg text-muted-foreground">
            Acreditamos que beleza não é sobre seguir padrões. É sobre descobrir o que faz você se sentir confiante, leve e autêntica.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-4 text-muted-foreground">
            Cada atendimento começa com uma boa conversa. Entendemos seu estilo, sua rotina e o que você deseja — para criar um resultado com a sua identidade.
          </p>
        </Reveal>
        <Reveal delay={400} className="mt-12">
          <StatsRow />
        </Reveal>
        <Reveal delay={500} className="mt-10">
          <Button asChild variant="line" size="xl">
            <Link to="/sobre">
              Conheça o studio <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-aura">
        <SectionHeading
          eyebrow="Cuidado de ponta a ponta"
          title="O que podemos"
          italic="fazer por você?"
          side="Serviços pensados para valorizar sua beleza natural e tornar cada visita especial."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((c, i) => (
            <Reveal key={c.id} delay={i * 120} className={i % 2 === 1 ? "lg:mt-16" : ""}>
              <Link
                to="/servicos"
                hash={c.id}
                className="zoom-media group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <img src={c.image} alt={c.headline} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-veil" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ink-foreground">
                  <p className="eyebrow text-champagne">
                    {c.number} / {c.title}
                  </p>
                  <h3 className="mt-3 text-3xl">{c.headline}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm text-ink-foreground/80 opacity-0 transition-all duration-700 group-hover:max-h-24 group-hover:opacity-100">
                    {c.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm">
                    Ver serviços <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center text-sm text-muted-foreground">
          * Consulte nossa equipe para conhecer todos os procedimentos, valores e disponibilidade.
        </Reveal>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-ink py-28 text-center text-ink-foreground md:py-40">
      <span className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 font-display text-[18rem] leading-none text-accent/30" aria-hidden>
        “
      </span>
      <div className="container-aura relative">
        <Reveal>
          <p className="display-lg mx-auto max-w-5xl">
            Não é sobre mudar quem você é. É sobre <em className="text-champagne">revelar o que já existe.</em>
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="eyebrow mt-10 text-ink-muted">Studio Aura — beleza com propósito</p>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="container-aura grid items-center gap-14 py-24 md:grid-cols-12 md:py-32">
      <div className="md:col-span-6">
        <Reveal variant="fade">
          <p className="eyebrow mb-5 text-accent">Mais que um atendimento</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg">
            Uma experiência <em className="text-accent">pensada em você.</em>
          </h2>
        </Reveal>
        <div className="mt-10">
          <StepsList />
        </div>
        <Reveal className="mt-10">
          <Button asChild variant="rouge" size="xl">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Quero viver essa experiência <ArrowUpRight />
            </a>
          </Button>
        </Reveal>
      </div>
      <Reveal variant="clip" delay={200} className="md:col-span-5 md:col-start-8">
        <div className="aspect-[4/5] overflow-hidden rounded-b-full">
          <img src={images.wash} alt="Cliente relaxando durante a lavagem dos cabelos" className="h-full w-full animate-ken-burns object-cover" />
        </div>
      </Reveal>
    </section>
  );
}

function GalleryStrip() {
  const items = gallery.slice(0, 8);
  return (
    <section className="overflow-hidden py-20">
      <div className="container-aura mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Inspire-se" title="Nosso trabalho," italic="em detalhes." />
        <Reveal>
          <Button asChild variant="line" size="xl">
            <Link to="/galeria">
              Ver galeria completa <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
      </div>
      <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
        {[...items, ...items].map((g, i) => (
          <div key={i} className="zoom-media h-72 w-56 shrink-0 overflow-hidden rounded-2xl md:h-96 md:w-72">
            <img src={g.src} alt={i < items.length ? g.alt : ""} aria-hidden={i >= items.length} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  return (
    <section className="bg-gradient-blush py-24 md:py-32">
      <div className="container-aura">
        <SectionHeading eyebrow="Palavras que nos inspiram" title="Quem vive," italic="recomenda." side="Cada sorriso na saída é parte da nossa história." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link to="/depoimentos" className="link-underline text-sm font-medium">
            Ler todos os depoimentos →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

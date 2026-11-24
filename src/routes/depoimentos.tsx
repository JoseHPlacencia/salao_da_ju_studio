import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Sheet } from "@/components/aura/Sheet";
import { Tag } from "@/components/aura/Tag";
import { SectionLabel } from "@/components/aura/SectionLabel";
import { testimonials } from "@/data/content";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos | Da Ju Hair" },
      { name: "description", content: "O que nossas clientes dizem sobre o atendimento, o ambiente e os resultados no Da Ju Hair." },
      { property: "og:title", content: "Depoimentos | Da Ju Hair" },
      { property: "og:description", content: "Quem vive, recomenda. Leia as experiências de nossas clientes." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.brushing },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.brushing },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => window.clearInterval(t);
  }, [paused, active]);

  const featured = testimonials[active] ?? testimonials[0]!;

  return (
    <>
      <PageHero
        eyebrow="Depoimentos"
        tags={["5 estrelas"]}
        title="Clientes"
        description="Quem vive, recomenda. Cada sorriso na saída é parte da nossa história."
        image={images.brushing}
        imageAlt="Cliente feliz com o resultado da escova"
      />

      <Sheet tone="ink">
        <div className="container-aura pt-8 pb-20 md:pb-28" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <SectionLabel>Em destaque</SectionLabel>
          <div key={active} className="min-h-[18rem] animate-in fade-in slide-in-from-bottom-4 duration-700 md:min-h-[22rem]" aria-live="polite">
            <p className="statement max-w-5xl md:text-[clamp(2rem,4vw,4rem)]">“{featured.text}”</p>
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <span className="eyebrow mr-2">{featured.name}</span>
              <Tag>Cliente</Tag>
              <Tag shape="pill">{featured.service}</Tag>
            </div>
          </div>
          <div className="mt-12 flex gap-1">
            {testimonials.map((t, i) => (
              <button key={t.name} type="button" onClick={() => setActive(i)} aria-label={`Ver depoimento de ${t.name}`} className="relative h-6 flex-1">
                <span className="absolute inset-x-0 top-1/2 h-px bg-ink-foreground/25" />
                <span
                  className={cn("absolute top-1/2 left-0 h-px bg-accent", i === active && !paused ? "w-full transition-[width] duration-[6000ms] ease-linear" : i < active ? "w-full" : "w-0")}
                />
              </button>
            ))}
          </div>
        </div>
      </Sheet>

      <Sheet tone="light">
        <div className="container-aura pt-8 pb-20 md:pb-28">
          <SectionLabel>Todos os depoimentos</SectionLabel>
          <div className="grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} variant="clip" delay={(i % 3) * 100}>
                <TestimonialCard {...t} index={i + 1} />
              </Reveal>
            ))}
          </div>
          <p className="mono mt-12 text-muted-foreground">* Depoimentos ilustrativos — substitua por avaliações reais de suas clientes antes de publicar.</p>
        </div>
      </Sheet>

      <BookingCTA />
    </>
  );
}

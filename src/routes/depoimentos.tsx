import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/data/content";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos | Studio Aura" },
      { name: "description", content: "O que nossas clientes dizem sobre o atendimento, o ambiente e os resultados no Studio Aura." },
      { property: "og:title", content: "Depoimentos | Studio Aura" },
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
  }, [paused]);

  const featured = testimonials[active] ?? testimonials[0]!;

  return (
    <>
      <PageHero
        eyebrow="Depoimentos"
        title="Quem vive,"
        italic="recomenda."
        description="Cada sorriso na saída é parte da nossa história. Estas são algumas das palavras que nos inspiram todos os dias."
        image={images.brushing}
        imageAlt="Cliente feliz com o resultado da escova"
      />

      <section
        className="relative overflow-hidden bg-gradient-ink py-24 text-ink-foreground md:py-32"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <span className="pointer-events-none absolute -top-10 left-6 font-display text-[16rem] leading-none text-accent/30" aria-hidden>
          “
        </span>
        <div className="container-aura relative">
          <div key={active} className="animate-in fade-in slide-in-from-bottom-6 duration-700" aria-live="polite">
            <p className="display-md max-w-4xl">“{featured.text}”</p>
            <p className="mt-10 flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-full bg-accent font-display text-xl italic text-accent-foreground">{featured.initials}</span>
              <span>
                <b className="font-semibold">{featured.name}</b>
                <br />
                <span className="text-sm text-ink-muted">{featured.service}</span>
              </span>
            </p>
          </div>
          <div className="mt-14 flex items-center gap-6">
            <div className="flex gap-2">
              <button type="button" onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)} className="grid size-12 place-items-center rounded-full border border-ink-foreground/30 transition-colors hover:bg-ink-foreground hover:text-ink" aria-label="Depoimento anterior">
                <ChevronLeft className="size-4" />
              </button>
              <button type="button" onClick={() => setActive((a) => (a + 1) % testimonials.length)} className="grid size-12 place-items-center rounded-full border border-ink-foreground/30 transition-colors hover:bg-ink-foreground hover:text-ink" aria-label="Próximo depoimento">
                <ChevronRight className="size-4" />
              </button>
            </div>
            <div className="flex flex-1 gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ver depoimento de ${t.name}`}
                  className={cn("h-1 flex-1 rounded-full transition-colors duration-500", i === active ? "bg-champagne" : "bg-ink-foreground/20 hover:bg-ink-foreground/40")}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-aura py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 120}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          * Depoimentos ilustrativos — substitua por avaliações reais de suas clientes antes de publicar.
        </p>
      </section>

      <BookingCTA />
    </>
  );
}

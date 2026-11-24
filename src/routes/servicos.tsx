import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/services";
import { images } from "@/data/images";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | Studio Aura" },
      { name: "description", content: "Cortes, coloração, mechas, manicure, nail design, maquiagem, noivas e tratamentos capilares no Studio Aura." },
      { property: "og:title", content: "Serviços | Studio Aura" },
      { property: "og:description", content: "Cabelo, unhas, maquiagem e tratamentos com atendimento personalizado." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.haircut },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.haircut },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Cuidado de"
        italic="ponta a ponta."
        description="Do corte ao ritual de autocuidado, cada serviço é personalizado para valorizar quem você é. Valores e disponibilidade direto com a equipe."
        image={images.haircut}
        imageAlt="Bancadas e cadeiras do salão"
      />

      <nav className="sticky top-16 z-30 border-y bg-background/90 backdrop-blur-md" aria-label="Categorias de serviço">
        <div className="container-aura flex gap-2 overflow-x-auto py-3">
          {serviceCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="eyebrow shrink-0 rounded-full border px-5 py-2.5 transition-all duration-500 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              {c.number} {c.title}
            </a>
          ))}
        </div>
      </nav>

      {serviceCategories.map((c, ci) => (
        <section key={c.id} id={c.id} className={cn("scroll-mt-36 py-20 md:py-28", ci % 2 === 1 && "bg-paper")}>
          <div className="container-aura grid gap-12 md:grid-cols-12">
            <div className={cn("md:col-span-5", ci % 2 === 1 && "md:order-2 md:col-start-8")}>
              <div className="md:sticky md:top-40">
                <Reveal variant="clip">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                    <Parallax speed={0.06}>
                      <img src={c.image} alt={c.headline} className="h-full w-full object-cover" loading="lazy" />
                    </Parallax>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className={cn("md:col-span-6", ci % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-7")}>
              <Reveal variant="fade">
                <p className="eyebrow text-accent">
                  {c.number} / {c.title}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-lg mt-4">{c.headline}</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-lg text-muted-foreground">{c.summary}</p>
              </Reveal>
              <ul className="mt-10 border-t">
                {c.items.map((item, i) => (
                  <Reveal as="li" key={item.name} delay={i * 80} className="border-b">
                    <a
                      href={whatsappUrl({ service: item.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-6 py-6 transition-all duration-500 hover:pl-3"
                    >
                      <div>
                        <h3 className="text-2xl transition-colors duration-500 group-hover:text-accent">{item.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-4">
                        <span className="hidden items-center gap-1.5 text-xs text-muted-foreground sm:inline-flex">
                          <Clock className="size-3.5" /> {item.duration}
                        </span>
                        <span className="grid size-10 place-items-center rounded-full border transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </ul>
              <Reveal className="mt-10">
                <Button asChild variant="ink" size="xl">
                  <a href={whatsappUrl({ service: c.title })} target="_blank" rel="noopener noreferrer">
                    Agendar {c.title.toLowerCase()} <ArrowUpRight />
                  </a>
                </Button>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="container-aura py-20 md:py-28">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-blush p-8 md:grid-cols-2 md:p-14">
            <div>
              <p className="eyebrow text-accent">Pacote especial</p>
              <h2 className="display-lg mt-4">
                Dia da <em className="text-accent">noiva.</em>
              </h2>
              <p className="mt-6 text-muted-foreground">
                Penteado, maquiagem com prova prévia, manicure e um espaço reservado para você e suas madrinhas. Também atendemos no local do evento.
              </p>
              <Button asChild variant="rouge" size="xl" className="mt-8">
                <a href={whatsappUrl({ service: "Dia da noiva" })} target="_blank" rel="noopener noreferrer">
                  Quero saber mais <ArrowUpRight />
                </a>
              </Button>
            </div>
            <div className="zoom-media aspect-square overflow-hidden rounded-full">
              <img src={images.makeup} alt="Maquiagem de noiva com pele luminosa" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Reveal>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          * Duração aproximada. Consulte valores e disponibilidade pelo WhatsApp.
        </p>
      </section>

      <BookingCTA />
    </>
  );
}

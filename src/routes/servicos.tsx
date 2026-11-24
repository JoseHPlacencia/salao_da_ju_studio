import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/aura/Sheet";
import { Tag } from "@/components/aura/Tag";
import { serviceCategories } from "@/data/services";
import { images } from "@/data/images";
import { whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | Da Ju Hair" },
      { name: "description", content: "Cortes, coloração, mechas, manicure, nail design, maquiagem, noivas e tratamentos capilares no Da Ju Hair." },
      { property: "og:title", content: "Serviços | Da Ju Hair" },
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
  const total = serviceCategories.reduce((n, c) => n + c.items.length, 0);
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        tags={[`${total} serviços`, "4 áreas"]}
        title="Serviços"
        description="Cuidado de ponta a ponta. Do corte ao ritual de autocuidado, cada serviço é personalizado para valorizar quem você é."
        image={images.haircut}
        imageAlt="Bancadas e cadeiras do salão"
      />

      <Sheet tone="light">
        <nav className="sticky top-0 z-20 rounded-t-[1.25rem] border-b border-foreground bg-background/95 backdrop-blur" aria-label="Categorias de serviço">
          <div className="container-aura scrollbar-none flex gap-1 overflow-x-auto pt-16 pb-3 md:pt-20">
            {serviceCategories.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="transition-colors hover:text-accent">
                <Tag shape="pill" className="h-7 px-3">
                  {c.number} {c.title}
                </Tag>
              </a>
            ))}
          </div>
        </nav>

        {serviceCategories.map((c) => (
          <section key={c.id} id={c.id} className="container-aura scroll-mt-32 border-b border-foreground/15 py-16 md:py-20">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="md:sticky md:top-32">
                  <Reveal variant="fade" className="flex gap-1">
                    <Tag>{c.number}</Tag>
                    <Tag shape="pill">{c.title}</Tag>
                    <Tag shape="circle">{c.items.length}</Tag>
                  </Reveal>
                  <Reveal delay={100}>
                    <h2 className="display-lg mt-6">{c.headline}</h2>
                    <p className="mt-4 max-w-sm text-muted-foreground">{c.summary}</p>
                  </Reveal>
                  <Reveal variant="clip" delay={200} className="mt-8">
                    <div className="zoom-media aspect-[4/3] overflow-hidden bg-muted">
                      <img src={c.image} alt={c.headline} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  </Reveal>
                </div>
              </div>
              <ul className="border-t border-foreground md:col-span-8">
                {c.items.map((item, i) => (
                  <Reveal as="li" key={item.name} delay={i * 70} className="border-b border-foreground/15">
                    <a
                      href={whatsappUrl({ service: item.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 transition-colors duration-300 hover:bg-accent md:gap-8 md:px-3"
                    >
                      <span className="mono text-muted-foreground group-hover:text-accent-foreground">0{i + 1}</span>
                      <span>
                        <span className="block text-2xl tracking-[-0.035em] md:text-3xl">{item.name}</span>
                        <span className="mt-1 block text-sm text-muted-foreground group-hover:text-accent-foreground">{item.description}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Tag shape="pill" className="hidden sm:inline-flex">{item.duration}</Tag>
                        <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" />
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        ))}
        <p className="container-aura mono py-6 text-muted-foreground">* Duração aproximada. Consulte valores e disponibilidade pelo WhatsApp.</p>
      </Sheet>

      <Sheet tone="accent">
        <div className="container-aura grid items-end gap-10 pt-10 pb-20 md:grid-cols-12 md:pb-28">
          <div className="md:col-span-7">
            <Reveal variant="fade" className="flex gap-1">
              <Tag>Pacote especial</Tag>
              <Tag shape="pill">Noivas</Tag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-xl mt-8">Dia da noiva</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-lg">Penteado, maquiagem com prova prévia, manicure e um espaço reservado para você e suas madrinhas. Também atendemos no local do evento.</p>
              <Button asChild variant="solid" size="xl" className="mt-8">
                <a href={whatsappUrl({ service: "Dia da noiva" })} target="_blank" rel="noopener noreferrer">
                  Quero saber mais <ArrowUpRight />
                </a>
              </Button>
            </Reveal>
          </div>
          <Reveal variant="clip" delay={200} className="md:col-span-5">
            <div className="zoom-media aspect-[4/5] overflow-hidden">
              <img src={images.makeup} alt="Maquiagem de noiva com pele luminosa" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </Sheet>

      <BookingCTA />
    </>
  );
}

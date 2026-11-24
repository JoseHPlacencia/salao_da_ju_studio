import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/content";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria | Studio Aura" },
      { name: "description", content: "Veja cortes, cores, unhas, maquiagens e o ambiente do Studio Aura em nossa galeria de fotos." },
      { property: "og:title", content: "Galeria | Studio Aura" },
      { property: "og:description", content: "Inspire-se com nossos trabalhos em cabelo, unhas e maquiagem." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.curls },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.curls },
    ],
  }),
  component: GalleryPage,
});

type Filter = "Todos" | GalleryCategory;

function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = filter === "Todos" ? gallery : gallery.filter((g) => g.category === filter);
  const current = openIndex !== null ? items[openIndex] : undefined;

  const step = (dir: 1 | -1) =>
    setOpenIndex((i) => (i === null ? i : (i + dir + items.length) % items.length));

  return (
    <>
      <PageHero
        eyebrow="Galeria"
        title="Nosso trabalho,"
        italic="em detalhes."
        description="Uma amostra do carinho que colocamos em cada atendimento. Toque em uma foto para ampliar."
        image={images.curls}
        imageAlt="Cliente com cabelo cacheado volumoso"
      />

      <section className="container-aura pb-20 md:pb-28">
        <Reveal className="mb-12 flex flex-wrap gap-2">
          {(["Todos", ...galleryCategories] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "eyebrow rounded-full border px-5 py-2.5 transition-all duration-500",
                filter === f ? "border-primary bg-primary text-primary-foreground" : "hover:border-accent hover:text-accent",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div key={filter} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <Reveal key={g.src + filter} variant="scale" delay={(i % 6) * 80} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="zoom-media group relative block w-full overflow-hidden rounded-2xl"
                aria-label={`Ampliar: ${g.alt}`}
              >
                <img src={g.src} alt={g.alt} loading="lazy" className={cn("w-full object-cover", g.tall ? "aspect-[3/4]" : "aspect-square")} />
                <span className="absolute inset-0 flex items-end justify-between bg-veil p-5 text-left text-ink-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span>
                    <span className="eyebrow text-champagne">{g.category}</span>
                    <span className="mt-1 block font-display text-xl">{g.alt}</span>
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink-foreground text-ink">
                    <Plus className="size-4" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Dialog open={!!current} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-4xl border-none bg-ink p-2 text-ink-foreground sm:rounded-2xl">
          {current ? (
            <figure className="animate-in fade-in zoom-in-95 duration-500">
              <img src={current.src.replace("w=1200", "w=1800")} alt={current.alt} className="max-h-[78vh] w-full rounded-xl object-contain" />
              <figcaption className="flex items-center justify-between gap-4 px-3 py-4">
                <div>
                  <DialogTitle className="font-display text-xl font-normal">{current.alt}</DialogTitle>
                  <span className="eyebrow text-champagne">{current.category}</span>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => step(-1)} className="grid size-10 place-items-center rounded-full border border-ink-foreground/30 transition-colors hover:bg-ink-foreground hover:text-ink" aria-label="Foto anterior">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button type="button" onClick={() => step(1)} className="grid size-10 place-items-center rounded-full border border-ink-foreground/30 transition-colors hover:bg-ink-foreground hover:text-ink" aria-label="Próxima foto">
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </figcaption>
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>

      <BookingCTA />
    </>
  );
}

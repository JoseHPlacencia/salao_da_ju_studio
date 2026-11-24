import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Sheet } from "@/components/aura/Sheet";
import { Tag } from "@/components/aura/Tag";
import { MediaCard } from "@/components/aura/MediaCard";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/content";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria | Da Ju Hair" },
      { name: "description", content: "Veja cortes, cores, unhas, maquiagens e o ambiente do Da Ju Hair em nossa galeria de fotos." },
      { property: "og:title", content: "Galeria | Da Ju Hair" },
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
  const step = (dir: 1 | -1) => setOpenIndex((i) => (i === null ? i : (i + dir + items.length) % items.length));

  return (
    <>
      <PageHero
        eyebrow="Galeria"
        tags={[`${gallery.length} fotos`]}
        title="Galeria"
        description="Nosso trabalho, em detalhes. Uma amostra do carinho que colocamos em cada atendimento."
        image={images.curls}
        imageAlt="Cliente com cabelo cacheado volumoso"
      />

      <Sheet tone="light">
        <div className="container-aura pt-8 pb-20 md:pb-28">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-10">
            <h2 className="eyebrow">Por categoria</h2>
            <div className="flex flex-wrap gap-1">
              {(["Todos", ...galleryCategories] as Filter[]).map((f) => (
                <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={filter === f}>
                  <Tag shape="pill" className={cn("h-7 px-3 transition-colors", filter === f ? "border-foreground bg-foreground text-background" : "hover:bg-accent")}>
                    {f} {f === "Todos" ? gallery.length : gallery.filter((g) => g.category === f).length}
                  </Tag>
                </button>
              ))}
            </div>
          </div>

          <div key={filter} className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((g, i) => (
              <Reveal key={g.src} variant="clip" delay={(i % 3) * 90}>
                <button type="button" onClick={() => setOpenIndex(i)} className="block w-full text-left" aria-label={`Ampliar: ${g.alt}`}>
                  <MediaCard image={g.src} alt={g.alt} title={g.alt} tags={[g.category]} count={i + 1} aspect={g.tall ? "aspect-[3/4]" : "aspect-[4/3]"} />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </Sheet>

      <Dialog open={!!current} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-5xl rounded-none border-none bg-ink p-3 text-ink-foreground sm:rounded-[4px]">
          {current ? (
            <figure className="animate-in fade-in zoom-in-95 duration-500">
              <img src={current.src.replace("w=1200", "w=1800")} alt={current.alt} className="max-h-[78vh] w-full object-contain" />
              <figcaption className="flex items-center justify-between gap-4 pt-3">
                <div className="flex flex-wrap items-center gap-2">
                  <DialogTitle className="text-sm font-medium">{current.alt}</DialogTitle>
                  <Tag>{current.category}</Tag>
                  <Tag shape="circle">{(openIndex ?? 0) + 1}</Tag>
                </div>
                <div className="flex gap-1">
                  <button type="button" onClick={() => step(-1)} className="grid size-9 place-items-center rounded-[3px] border border-ink-foreground/40 hover:bg-ink-foreground hover:text-ink" aria-label="Foto anterior">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button type="button" onClick={() => step(1)} className="grid size-9 place-items-center rounded-[3px] border border-ink-foreground/40 hover:bg-ink-foreground hover:text-ink" aria-label="Próxima foto">
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

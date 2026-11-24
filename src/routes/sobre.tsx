import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { StatsRow } from "@/components/sections/StatsRow";
import { StepsList } from "@/components/sections/StepsList";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Sheet } from "@/components/aura/Sheet";
import { Tag } from "@/components/aura/Tag";
import { SectionLabel } from "@/components/aura/SectionLabel";
import { MediaCard } from "@/components/aura/MediaCard";
import { images } from "@/data/images";
import { team, values } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "O Studio | Da Ju Hair" },
      { name: "description", content: "Conheça a história, os valores e a equipe do Da Ju Hair, salão de beleza acolhedor em Vitória." },
      { property: "og:title", content: "O Studio | Da Ju Hair" },
      { property: "og:description", content: "Nossa história, nossos valores e as profissionais que cuidam de você." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.interior },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.interior },
    ],
  }),
  component: AboutPage,
});

const teamTones = ["bg-accent text-accent-foreground", "bg-ink text-ink-foreground", "bg-muted text-foreground", "bg-foreground text-background"];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O studio"
        tags={["Desde 2014", "Vitória ES"]}
        title="Studio"
        description="Um lugar para ser você. Beleza e bem-estar caminhando juntos — sem pressa, sem padrões, com muito afeto."
        image={images.interior}
        imageAlt="Interior acolhedor do Da Ju Hair"
      />

      <Sheet tone="light">
        <div className="container-aura grid gap-10 pt-8 pb-20 md:grid-cols-12 md:pb-28">
          <div className="md:col-span-4">
            <SectionLabel className="pb-0">Nossa história</SectionLabel>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="statement">Começou com uma cadeira, uma tesoura e muita escuta.</p>
            </Reveal>
            <div className="mt-10 grid gap-6 text-muted-foreground md:grid-cols-2">
              <Reveal delay={100}>
                <p>Há mais de uma década, Helena abriu as portas de um pequeno estúdio com uma ideia simples: tratar cada cliente como única. A conversa vinha antes do corte, o café antes da cor.</p>
              </Reveal>
              <Reveal delay={200}>
                <p>O studio cresceu, a equipe também — mas o jeito de cuidar continua o mesmo. Hoje reunimos especialistas em cabelo, unhas, maquiagem e tratamentos em um ambiente pensado para você desacelerar.</p>
              </Reveal>
            </div>
            <div className="mt-16">
              <StatsRow />
            </div>
          </div>
        </div>
      </Sheet>

      <Sheet tone="ink">
        <div className="container-aura pt-8 pb-20 md:pb-28">
          <SectionLabel>No que acreditamos</SectionLabel>
          <div className="grid gap-px bg-ink-foreground/15 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120} className="group flex min-h-80 flex-col justify-between bg-ink p-6 transition-colors duration-500 hover:bg-accent hover:text-accent-foreground">
                <Tag shape="circle">{i + 1}</Tag>
                <div>
                  <h3 className="display-lg">{v.title}</h3>
                  <p className="mt-4 max-w-xs text-sm opacity-70">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Sheet>

      <Sheet tone="light">
        <div className="container-aura pt-8 pb-20 md:pb-28">
          <SectionLabel>Quem cuida de você</SectionLabel>
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} variant="clip" delay={i * 100}>
                <div className="group">
                  <div className={cn("relative flex aspect-[3/4] flex-col justify-between overflow-hidden p-5", teamTones[i % teamTones.length])}>
                    <span className="mono">{m.note}</span>
                    <span className="text-[7rem] leading-[0.8] font-medium tracking-[-0.08em] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-3">
                      {m.initials}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="eyebrow">{m.name}</h3>
                    <Tag shape="pill">{m.role}</Tag>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Sheet>

      <Sheet tone="muted" className="[--step-bg:var(--muted)]">
        <div className="container-aura grid gap-10 pt-8 pb-20 md:grid-cols-12 md:pb-28">
          <div className="md:col-span-12">
            <SectionLabel>Como trabalhamos</SectionLabel>
          </div>
          <Reveal variant="clip" className="md:col-span-4">
            <MediaCard image={images.brushing} alt="Profissional finalizando escova" title="Cada visita, um ritual" tags={["Escuta", "Cuidado"]} aspect="aspect-[3/4]" />
          </Reveal>
          <div className="md:col-span-8">
            <StepsList />
          </div>
        </div>
      </Sheet>

      <BookingCTA />
    </>
  );
}

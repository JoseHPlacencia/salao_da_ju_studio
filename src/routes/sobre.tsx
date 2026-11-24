import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatsRow } from "@/components/sections/StatsRow";
import { StepsList } from "@/components/sections/StepsList";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Marquee } from "@/components/motion/Marquee";
import { images } from "@/data/images";
import { team, values } from "@/data/content";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "O Studio | Studio Aura" },
      { name: "description", content: "Conheça a história, os valores e a equipe do Studio Aura, salão de beleza acolhedor em Vitória." },
      { property: "og:title", content: "O Studio | Studio Aura" },
      { property: "og:description", content: "Nossa história, nossos valores e as profissionais que cuidam de você." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.interior },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.interior },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O studio"
        title="Um lugar para"
        italic="ser você."
        description="O Studio Aura nasceu do desejo de criar um espaço onde beleza e bem-estar caminham juntos — sem pressa, sem padrões, com muito afeto."
        image={images.interior}
        imageAlt="Interior acolhedor do Studio Aura"
      />

      <section className="container-aura grid gap-14 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-5">
          <p className="eyebrow mb-5 text-accent">Nossa história</p>
          <h2 className="display-md">
            Começou com uma cadeira, uma tesoura e <em className="text-accent">muita escuta.</em>
          </h2>
        </Reveal>
        <div className="space-y-6 text-lg text-muted-foreground md:col-span-6 md:col-start-7">
          <Reveal delay={100}>
            <p>
              Há mais de uma década, Helena abriu as portas de um pequeno estúdio com uma ideia simples: tratar cada cliente como única. A conversa vinha antes do corte, o café antes da cor.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              O studio cresceu, a equipe também — mas o jeito de cuidar continua o mesmo. Hoje reunimos especialistas em cabelo, unhas, maquiagem e tratamentos em um ambiente pensado para você desacelerar.
            </p>
          </Reveal>
          <Reveal delay={300} className="pt-6">
            <StatsRow />
          </Reveal>
        </div>
      </section>

      <section className="border-y bg-paper py-8">
        <Marquee reverse items={["Escuta", "Autenticidade", "Cuidado", "Acolhimento"]} />
      </section>

      <section className="container-aura py-20 md:py-28">
        <SectionHeading eyebrow="No que acreditamos" title="Nossos" italic="valores." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="group h-full rounded-2xl border bg-card p-10 transition-all duration-700 hover:-translate-y-2 hover:bg-primary hover:text-primary-foreground hover:shadow-lift">
                <span className="font-display text-6xl italic text-accent transition-colors duration-700 group-hover:text-champagne">0{i + 1}</span>
                <h3 className="mt-8 text-3xl">{v.title}</h3>
                <p className="mt-4 text-muted-foreground transition-colors duration-700 group-hover:text-primary-foreground/75">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-blush py-20 md:py-28">
        <div className="container-aura">
          <SectionHeading eyebrow="Quem cuida de você" title="Nossa" italic="equipe." side="Profissionais apaixonadas, em constante atualização, que amam o que fazem." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <article className="group text-center">
                  <div className="relative mx-auto grid aspect-square w-full max-w-[16rem] place-items-center overflow-hidden rounded-full bg-card shadow-soft transition-all duration-700 group-hover:shadow-lift">
                    <span className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-700 group-hover:scale-y-100" />
                    <span className="relative font-display text-6xl italic transition-colors duration-700 group-hover:text-accent-foreground">{m.initials}</span>
                  </div>
                  <h3 className="mt-6 text-2xl">{m.name}</h3>
                  <p className="eyebrow mt-2 text-accent">{m.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{m.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-aura grid items-center gap-14 py-20 md:grid-cols-12 md:py-28">
        <Reveal variant="clip" className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-t-full">
            <Parallax speed={0.08}>
              <img src={images.brushing} alt="Profissional finalizando escova com cuidado" className="h-full w-full object-cover" />
            </Parallax>
          </div>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="eyebrow mb-5 text-accent">Como trabalhamos</p>
            <h2 className="display-lg">
              Cada visita, <em className="text-accent">um ritual.</em>
            </h2>
          </Reveal>
          <div className="mt-10">
            <StepsList />
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}

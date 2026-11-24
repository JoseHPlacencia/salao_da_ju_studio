import type { ReactNode } from "react";
import { SplitChars } from "@/components/aura/SplitChars";
import { StickyMedia } from "@/components/aura/StickyMedia";
import { Tag } from "@/components/aura/Tag";
import { Reveal } from "@/components/motion/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  children?: ReactNode;
};

/**
 * Abertura das páginas internas: título gigante, texto curto e foto em tela cheia.
 * O conteúdo seguinte deve vir dentro de <Sheet> para deslizar por cima da foto.
 */
export function PageHero({ eyebrow, title, description, image, imageAlt, tags = [], children }: PageHeroProps) {
  return (
    <>
      <section className="container-aura pt-24 pb-10 md:pt-28 md:pb-14">
        <h1 className="display-xl -ml-[0.04em]">
          <SplitChars text={title} baseDelay={150} step={45} />
        </h1>
        <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-12">
          <Reveal variant="fade" delay={400} className="flex flex-wrap items-start gap-1 md:col-span-5">
            <Tag>{eyebrow}</Tag>
            {tags.map((t, i) => (
              <Tag key={t} shape={i === tags.length - 1 ? "pill" : "box"}>
                {t}
              </Tag>
            ))}
          </Reveal>
          <Reveal delay={500} className="md:col-span-7">
            <p className="statement max-w-3xl">{description}</p>
            {children ? <div className="mt-8">{children}</div> : null}
          </Reveal>
        </div>
      </section>
      <StickyMedia src={image} alt={imageAlt} />
    </>
  );
}

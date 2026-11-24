import type { ReactNode } from "react";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  italic: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
};

/** Abertura padrão das páginas internas. */
export function PageHero({ eyebrow, title, italic, description, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className="container-aura grid items-end gap-10 pt-10 pb-16 md:grid-cols-12 md:pt-16 md:pb-24">
      <div className="md:col-span-7">
        <Reveal variant="fade">
          <p className="eyebrow mb-6 flex items-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent" /> {eyebrow}
          </p>
        </Reveal>
        <h1 className="display-xl">
          <SplitWords lines={[{ text: title }, { text: italic, italic: true, className: "text-accent" }]} baseDelay={150} />
        </h1>
        <Reveal delay={500}>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">{description}</p>
        </Reveal>
        {children ? <Reveal delay={650}>{children}</Reveal> : null}
      </div>
      <Reveal variant="clip" delay={200} className="md:col-span-5">
        <div className="aspect-[4/5] overflow-hidden rounded-t-full">
          <Parallax speed={0.08}>
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </Parallax>
        </div>
      </Reveal>
    </section>
  );
}

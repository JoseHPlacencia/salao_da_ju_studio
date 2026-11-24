import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { SplitWords } from "@/components/motion/SplitWords";
import { Sheet } from "@/components/aura/Sheet";
import { Tag } from "@/components/aura/Tag";
import { useInView } from "@/hooks/use-in-view";
import { images } from "@/data/images";

/** Chamada final para agendar, em bloco preto. */
export function BookingCTA() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  return (
    <Sheet tone="ink" className="pb-24">
      <div className="container-aura grid gap-10 pt-16 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-7">
          <Reveal variant="fade" className="flex gap-1">
            <Tag>Agendamento</Tag>
            <Tag shape="pill">WhatsApp</Tag>
          </Reveal>
          <div ref={ref} className="display-lg mt-8">
            {inView ? (
              <SplitWords lines={[{ text: "Você merece esse" }, { text: "tempo para si.", className: "text-accent" }]} step={55} />
            ) : (
              <span className="opacity-0">Você merece esse tempo para si.</span>
            )}
          </div>
          <Reveal delay={300}>
            <p className="mt-8 max-w-md text-ink-muted">
              Escolha seu serviço e fale com a nossa equipe. Vamos encontrar o melhor horário para você.
            </p>
          </Reveal>
          <Reveal delay={400} className="mt-10">
            <Magnetic>
              <Button asChild variant="accent" size="xl">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  Agendar pelo WhatsApp <ArrowUpRight />
                </a>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
        <Reveal variant="clip" delay={200} className="md:col-span-4 md:col-start-9">
          <div className="zoom-media aspect-[3/4] overflow-hidden">
            <img src={images.nailsSoft} alt="Detalhe de unhas delicadas" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

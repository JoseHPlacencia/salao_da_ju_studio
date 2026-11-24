import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { images } from "@/data/images";

export function BookingCTA() {
  return (
    <section className="container-aura py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-ink px-6 py-20 text-ink-foreground md:px-16 md:py-28">
        <img
          src={images.nailsSoft}
          alt=""
          aria-hidden
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-30 mix-blend-luminosity md:block [mask-image:linear-gradient(to_left,black,transparent)]"
        />
        <span className="pointer-events-none absolute -right-6 -bottom-16 font-display text-[16rem] leading-none text-accent/40 animate-spin-slow md:text-[22rem]" aria-hidden>
          ✳
        </span>
        <div className="relative max-w-2xl">
          <Reveal variant="fade">
            <p className="eyebrow mb-6 text-champagne">Seu próximo momento começa aqui</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg">
              Você merece esse <em className="text-champagne">tempo para si.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-md text-ink-muted">
              Escolha seu serviço e fale com a nossa equipe. Vamos encontrar o melhor horário para você.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10">
            <Magnetic>
              <Button asChild variant="light" size="xl">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  Agendar pelo WhatsApp <ArrowUpRight />
                </a>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

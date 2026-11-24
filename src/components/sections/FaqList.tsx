import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/data/content";

export function FaqList() {
  return (
    <section className="container-aura grid gap-12 py-20 md:grid-cols-12 md:py-28">
      <div className="md:col-span-5">
        <Reveal variant="fade">
          <p className="eyebrow mb-5 text-accent">Antes de chegar</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg">
            Ficou com <em className="text-accent">alguma dúvida?</em>
          </h2>
        </Reveal>
      </div>
      <Reveal delay={200} className="md:col-span-7">
        <Accordion type="single" collapsible className="border-t">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="py-6 font-display text-xl hover:no-underline md:text-2xl">{f.q}</AccordionTrigger>
              <AccordionContent className="pr-10 text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

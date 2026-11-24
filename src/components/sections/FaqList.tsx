import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/aura/Tag";
import { faqs } from "@/data/content";

export function FaqList() {
  return (
    <div className="container-aura grid gap-10 py-20 md:grid-cols-12 md:py-28">
      <Reveal className="md:col-span-4">
        <Tag>FAQ</Tag>
        <h2 className="display-lg mt-6">Antes de chegar</h2>
      </Reveal>
      <Reveal delay={150} className="md:col-span-8">
        <Accordion type="single" collapsible className="border-t border-foreground">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-foreground/15">
              <AccordionTrigger className="gap-6 py-5 text-xl tracking-[-0.03em] hover:no-underline md:text-2xl">
                <span className="flex items-baseline gap-4">
                  <span className="mono text-muted-foreground">0{i + 1}</span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-9 text-base text-muted-foreground md:pr-20">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  );
}

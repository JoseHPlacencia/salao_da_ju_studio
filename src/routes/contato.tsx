import { useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FaqList } from "@/components/sections/FaqList";
import { Reveal } from "@/components/motion/Reveal";
import { Sheet } from "@/components/aura/Sheet";
import { Tag } from "@/components/aura/Tag";
import { SectionLabel } from "@/components/aura/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { site } from "@/config/site";
import { serviceCategories } from "@/data/services";
import { images } from "@/data/images";
import { whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e agendamento | Da Ju Hair" },
      { name: "description", content: "Agende seu horário no Da Ju Hair pelo WhatsApp. Endereço, horários de funcionamento e dúvidas frequentes." },
      { property: "og:title", content: "Contato e agendamento | Da Ju Hair" },
      { property: "og:description", content: "Fale com a gente e agende seu momento no Da Ju Hair." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.salonChairs },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.salonChairs },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "h-12 rounded-none border-0 border-b border-foreground bg-transparent px-0 text-lg shadow-none focus-visible:border-accent focus-visible:ring-0";

function ContactPage() {
  const [service, setService] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const url = whatsappUrl({
      name: String(data.get("name") ?? ""),
      service,
      day: String(data.get("day") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const mapQuery = encodeURIComponent(`${site.address.street}, ${site.address.city}`);

  return (
    <>
      <PageHero
        eyebrow="Contato"
        tags={["Agendamento", "WhatsApp"]}
        title="Contato"
        description="Vamos marcar seu momento? Preencha o formulário e sua mensagem chega pronta no nosso WhatsApp."
        image={images.salonChairs}
        imageAlt="Cadeiras do salão Da Ju Hair"
      />

      <Sheet tone="light">
        <div className="container-aura grid gap-14 pt-8 pb-20 md:grid-cols-12 md:pb-28">
          <Reveal className="md:col-span-7">
            <SectionLabel className="pb-4">Pedido de agendamento</SectionLabel>
            <form onSubmit={onSubmit} className="grid gap-8 md:grid-cols-2">
              <Field label="Seu nome" htmlFor="name">
                <Input id="name" name="name" required maxLength={80} placeholder="Como podemos te chamar?" className={fieldClass} />
              </Field>
              <Field label="Serviço" htmlFor="service">
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service" className={fieldClass}>
                    <SelectValue placeholder="Escolha um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.flatMap((c) =>
                      c.items.map((item) => (
                        <SelectItem key={item.name} value={item.name}>
                          {item.name}
                        </SelectItem>
                      )),
                    )}
                    <SelectItem value="Dia da noiva">Dia da noiva</SelectItem>
                    <SelectItem value="Ainda não sei">Ainda não sei</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Melhor dia e horário" htmlFor="day" wide>
                <Input id="day" name="day" maxLength={80} placeholder="Ex.: sábado de manhã" className={fieldClass} />
              </Field>
              <Field label="Observações" htmlFor="message" wide>
                <Textarea
                  id="message"
                  name="message"
                  maxLength={500}
                  rows={3}
                  placeholder="Referências, dúvidas, alergias..."
                  className="min-h-24 resize-none rounded-none border-0 border-b border-foreground bg-transparent px-0 text-lg shadow-none focus-visible:border-accent focus-visible:ring-0"
                />
              </Field>
              <div className="md:col-span-2">
                <Button type="submit" variant="solid" size="xl">
                  Enviar pelo WhatsApp <ArrowUpRight />
                </Button>
              </div>
            </form>
          </Reveal>

          <div className="md:col-span-4 md:col-start-9">
            <SectionLabel className="pb-4">Informações</SectionLabel>
            <dl className="border-t border-foreground">
              <InfoRow label="Endereço" delay={0}>
                {site.address.street}
                <br />
                {site.address.district} · {site.address.city}
              </InfoRow>
              <InfoRow label="Horários" delay={100}>
                <ul className="space-y-1">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4">
                      <span>{h.days}</span>
                      <span className="mono">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>
              <InfoRow label="Canais" delay={200}>
                <div className="flex flex-wrap gap-1">
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    <Tag shape="pill">whatsapp</Tag>
                  </a>
                  <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    <Tag>@{site.instagram}</Tag>
                  </a>
                  <a href={`mailto:${site.email}`} className="hover:text-accent">
                    <Tag shape="pill">{site.email}</Tag>
                  </a>
                </div>
              </InfoRow>
            </dl>
          </div>
        </div>
      </Sheet>

      <Sheet tone="muted">
        <div className="container-aura pt-8 pb-6">
          <SectionLabel action={<Tag shape="pill">{site.address.city}</Tag>}>Como chegar</SectionLabel>
        </div>
        <Reveal variant="clip">
          <div className="aspect-[4/3] md:aspect-[21/8]">
            <iframe
              title="Mapa com a localização do Da Ju Hair"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Sheet>

      <Sheet tone="light">
        <FaqList />
      </Sheet>
    </>
  );
}

function Field({ label, htmlFor, wide, children }: { label: string; htmlFor: string; wide?: boolean; children: ReactNode }) {
  return (
    <div className={wide ? "space-y-1 md:col-span-2" : "space-y-1"}>
      <Label htmlFor={htmlFor} className="mono text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}

function InfoRow({ label, delay, children }: { label: string; delay: number; children: ReactNode }) {
  return (
    <Reveal delay={delay} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-foreground/15 py-5 text-sm">
      <dt className="mono text-muted-foreground">{label}</dt>
      <dd>{children}</dd>
    </Reveal>
  );
}

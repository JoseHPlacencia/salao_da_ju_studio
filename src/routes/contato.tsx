import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FaqList } from "@/components/sections/FaqList";
import { Reveal } from "@/components/motion/Reveal";
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
      { title: "Contato e agendamento | Studio Aura" },
      { name: "description", content: "Agende seu horário no Studio Aura pelo WhatsApp. Endereço, horários de funcionamento e dúvidas frequentes." },
      { property: "og:title", content: "Contato e agendamento | Studio Aura" },
      { property: "og:description", content: "Fale com a gente e agende seu momento no Studio Aura." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.salonChairs },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.salonChairs },
    ],
  }),
  component: ContactPage,
});

const fieldClass = "h-12 rounded-none border-0 border-b bg-transparent px-0 shadow-none focus-visible:border-accent focus-visible:ring-0";

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
        title="Vamos marcar"
        italic="seu momento?"
        description="Preencha o formulário e sua mensagem chega pronta no nosso WhatsApp. Se preferir, fale direto com a equipe."
        image={images.salonChairs}
        imageAlt="Cadeiras do salão Studio Aura"
      />

      <section className="container-aura grid gap-14 pb-20 md:grid-cols-12 md:pb-28">
        <Reveal className="md:col-span-7">
          <form onSubmit={onSubmit} className="rounded-[2rem] border bg-card p-8 shadow-soft md:p-12">
            <p className="eyebrow text-accent">Pedido de agendamento</p>
            <h2 className="display-md mt-3">
              Conte para a gente <em className="text-accent">o que deseja.</em>
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="eyebrow text-muted-foreground">Seu nome</Label>
                <Input id="name" name="name" required maxLength={80} placeholder="Como podemos te chamar?" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service" className="eyebrow text-muted-foreground">Serviço</Label>
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
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="day" className="eyebrow text-muted-foreground">Melhor dia e horário</Label>
                <Input id="day" name="day" maxLength={80} placeholder="Ex.: sábado de manhã" className={fieldClass} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message" className="eyebrow text-muted-foreground">Observações</Label>
                <Textarea id="message" name="message" maxLength={500} rows={3} placeholder="Referências, dúvidas, alergias..." className="min-h-24 resize-none rounded-none border-0 border-b bg-transparent px-0 shadow-none focus-visible:border-accent focus-visible:ring-0" />
              </div>
            </div>
            <Button type="submit" variant="ink" size="xl" className="mt-10 w-full md:w-auto">
              Enviar pelo WhatsApp <ArrowUpRight />
            </Button>
          </form>
        </Reveal>

        <div className="space-y-6 md:col-span-5">
          <Reveal delay={100}>
            <InfoCard icon={<MapPin className="size-5" />} title="Endereço">
              {site.address.street}
              <br />
              {site.address.district} · {site.address.city}
            </InfoCard>
          </Reveal>
          <Reveal delay={200}>
            <InfoCard icon={<Clock className="size-5" />} title="Horários">
              <ul className="space-y-1">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </Reveal>
          <Reveal delay={300}>
            <InfoCard icon={<MessageCircle className="size-5" />} title="Fale com a gente">
              <div className="flex flex-col gap-2">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex w-fit items-center gap-2">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex w-fit items-center gap-2">
                  <Instagram className="size-4" /> @{site.instagram}
                </a>
                <a href={`mailto:${site.email}`} className="link-underline inline-flex w-fit items-center gap-2">
                  <Mail className="size-4" /> {site.email}
                </a>
              </div>
            </InfoCard>
          </Reveal>
        </div>
      </section>

      <Reveal variant="clip" className="container-aura">
        <div className="aspect-[16/9] overflow-hidden rounded-[2rem] border md:aspect-[21/8]">
          <iframe
            title="Mapa com a localização do Studio Aura"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-full w-full grayscale-[60%] sepia-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>

      <FaqList />
    </>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border bg-card p-7 transition-all duration-700 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-secondary text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
          {icon}
        </span>
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div className="mt-5 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

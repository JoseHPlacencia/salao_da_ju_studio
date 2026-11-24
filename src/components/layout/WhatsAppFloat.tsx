import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lift transition-transform duration-500 hover:scale-110 md:right-8 md:bottom-8"
    >
      <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" aria-hidden />
      <MessageCircle className="relative size-6 transition-transform duration-500 group-hover:-rotate-12" />
    </a>
  );
}

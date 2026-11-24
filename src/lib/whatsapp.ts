import { site } from "@/config/site";

export type BookingRequest = {
  name?: string;
  service?: string;
  day?: string;
  message?: string;
};

/** Monta a mensagem de agendamento enviada pelo WhatsApp. */
export function buildBookingMessage(req: BookingRequest = {}): string {
  const lines = [`Olá, ${site.name}! Gostaria de agendar um horário.`];
  if (req.name?.trim()) lines.push(`Nome: ${req.name.trim()}`);
  if (req.service?.trim()) lines.push(`Serviço: ${req.service.trim()}`);
  if (req.day?.trim()) lines.push(`Preferência de dia: ${req.day.trim()}`);
  if (req.message?.trim()) lines.push(`Observações: ${req.message.trim()}`);
  return lines.join("\n");
}

/** Link do WhatsApp com a mensagem já preenchida. */
export function whatsappUrl(req: BookingRequest = {}, phone: string = site.whatsappNumber): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(buildBookingMessage(req))}`;
}

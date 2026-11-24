import { describe, expect, it } from "vitest";
import { buildBookingMessage, whatsappUrl } from "@/lib/whatsapp";

describe("agendamento pelo WhatsApp", () => {
  it("envia para o número do salão, só com dígitos", () => {
    expect(whatsappUrl({}, "+55 (27) 99999-9999").startsWith("https://wa.me/5527999999999?text=")).toBe(true);
  });

  it("inclui nome, serviço e dia escolhidos na mensagem", () => {
    const msg = buildBookingMessage({ name: "Ana", service: "Coloração", day: "sábado de manhã" });
    expect(msg).toContain("Nome: Ana");
    expect(msg).toContain("Serviço: Coloração");
    expect(msg).toContain("Preferência de dia: sábado de manhã");
  });

  it("omite campos vazios", () => {
    expect(buildBookingMessage({ name: "  " })).not.toContain("Nome:");
  });
});

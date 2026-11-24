/**
 * Dados do salão em um só lugar. Troque aqui e o site inteiro é atualizado.
 * Os valores abaixo ainda são de exemplo — substitua pelos dados reais antes de publicar.
 */
export const site = {
  name: "Da Ju Hair",
  tagline: "Beleza & bem-estar",
  whatsappNumber: "5527995012859",
  instagram: "seusalao",
  email: "ola@dajuhair.com.br",
  address: { street: "Rua Exemplo, 123", district: "Praia do Canto", city: "Vitória — ES" },
  hours: [
    { days: "Terça a sexta", time: "09h às 19h" },
    { days: "Sábado", time: "09h às 17h" },
    { days: "Domingo e segunda", time: "Fechado" },
  ],
  url: "https://dajuhair.com.br",
} as const;

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "O studio" },
  { to: "/servicos", label: "Serviços" },
  { to: "/galeria", label: "Galeria" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/contato", label: "Contato" },
] as const;

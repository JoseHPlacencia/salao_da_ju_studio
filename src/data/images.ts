/** Fotos de demonstração (Unsplash). Troque pelas fotos reais do salão quando tiver. */
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=82`;

export const images = {
  /** Retrato real do salão, sem fundo, usado na capa do início. Arquivo em public/images/da-ju-portrait.webp */
  heroPortrait: "/images/da-ju-portrait.webp",
  hero: u("1522337360788-8b13dee7a37e", 1400),
  interior: u("1600948836101-f9ffda59d250"),
  salonChairs: u("1521590832167-7bcbfaa6381f"),
  haircut: u("1560066984-138dadb4c035"),
  blowdry: u("1562322140-8baeececf3df"),
  brushing: u("1580618672591-eb180b1a973f"),
  wash: u("1595476108010-b4d1f102b1b1"),
  curls: u("1519699047748-de8e457a634e"),
  nails: u("1604654894610-df63bc536371"),
  nailsPolish: u("1457972729786-0411a3b2b626"),
  nailsSoft: u("1610992015732-2449b76344bc"),
  makeup: u("1487412947147-5cebf100ffc2"),
  treatment: u("1516975080664-ed2fc6a32937"),
} as const;

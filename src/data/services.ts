import { images } from "./images";

export type ServiceItem = { name: string; description: string; duration: string };
export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  headline: string;
  summary: string;
  image: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "cabelo",
    number: "01",
    title: "Cabelo",
    headline: "Cabelo com personalidade",
    summary: "Cortes, cor, mechas, escova e penteados pensados para o seu estilo e a sua rotina.",
    image: images.blowdry,
    items: [
      { name: "Corte feminino", description: "Consultoria de visagismo e finalização inclusa.", duration: "1h" },
      { name: "Coloração", description: "Cor global, retoque de raiz ou tonalização.", duration: "2h" },
      { name: "Mechas & morena iluminada", description: "Técnicas de iluminação sob medida.", duration: "3h30" },
      { name: "Escova modelada", description: "Movimento e brilho que duram dias.", duration: "50min" },
      { name: "Penteados", description: "Para festas, formaturas e ocasiões especiais.", duration: "1h30" },
    ],
  },
  {
    id: "unhas",
    number: "02",
    title: "Unhas",
    headline: "Manicure & nail design",
    summary: "Detalhes que fazem toda a diferença, com materiais esterilizados e muito capricho.",
    image: images.nails,
    items: [
      { name: "Manicure & pedicure", description: "Cutilagem cuidadosa e esmaltação clássica.", duration: "1h20" },
      { name: "Esmaltação em gel", description: "Brilho intenso e duração de até 3 semanas.", duration: "1h" },
      { name: "Alongamento", description: "Fibra de vidro ou gel moldado.", duration: "2h30" },
      { name: "Nail art", description: "Desenhos delicados e francesinhas modernas.", duration: "a combinar" },
    ],
  },
  {
    id: "maquiagem",
    number: "03",
    title: "Maquiagem",
    headline: "Make para seus momentos",
    summary: "Do natural ao extraordinário — uma pele bonita e um olhar que conta a sua história.",
    image: images.makeup,
    items: [
      { name: "Make social", description: "Para eventos, jantares e celebrações.", duration: "1h" },
      { name: "Make de noiva", description: "Com prova prévia e kit de retoque.", duration: "2h" },
      { name: "Design de sobrancelhas", description: "Com henna ou coloração opcional.", duration: "40min" },
      { name: "Aula de automaquiagem", description: "Aprenda a valorizar seus traços no dia a dia.", duration: "2h" },
    ],
  },
  {
    id: "tratamentos",
    number: "04",
    title: "Tratamentos",
    headline: "Rituais de autocuidado",
    summary: "Saúde, brilho e carinho para os fios — e um momento de pausa só para você.",
    image: images.treatment,
    items: [
      { name: "Hidratação profunda", description: "Reposição de água e maciez imediata.", duration: "1h" },
      { name: "Reconstrução capilar", description: "Para fios danificados por química ou calor.", duration: "1h30" },
      { name: "Cronograma capilar", description: "Acompanhamento personalizado em sessões.", duration: "por sessão" },
      { name: "Spa dos pés e mãos", description: "Esfoliação, máscara e massagem relaxante.", duration: "1h" },
    ],
  },
];

import { images } from "./images";

export const testimonials = [
  { name: "Mariana C.", initials: "MC", service: "Mechas", text: "Um atendimento impecável! Me senti acolhida desde o primeiro minuto e amei o resultado. Já quero voltar." },
  { name: "Ana F.", initials: "AF", service: "Corte & escova", text: "Finalmente encontrei um lugar que entende o que eu gosto. Saí me sentindo ainda mais bonita e confiante." },
  { name: "Juliana L.", initials: "JL", service: "Make de noiva", text: "O cuidado com os detalhes faz toda a diferença. O ambiente é lindo, a equipe é maravilhosa e o resultado também!" },
  { name: "Beatriz R.", initials: "BR", service: "Nail design", text: "Minhas unhas nunca duraram tanto. E o café com a conversa boa já fazem parte do ritual." },
  { name: "Camila S.", initials: "CS", service: "Reconstrução", text: "Cheguei com o cabelo muito danificado e hoje ele está saudável e brilhante. Gratidão à equipe!" },
  { name: "Larissa M.", initials: "LM", service: "Coloração", text: "A cor ficou exatamente como eu sonhava. Profissionais que escutam de verdade." },
];

export const team = [
  { name: "Helena Duarte", role: "Fundadora & hair stylist", initials: "HD", note: "15 anos dedicados a cortes e cor." },
  { name: "Rafaela Nunes", role: "Colorista", initials: "RN", note: "Especialista em mechas e loiros." },
  { name: "Bianca Lopes", role: "Nail designer", initials: "BL", note: "Detalhista, ama nail art minimalista." },
  { name: "Lívia Prado", role: "Maquiadora", initials: "LP", note: "Noivas e peles naturais são a sua assinatura." },
];

export const values = [
  { title: "Escuta", text: "Todo atendimento começa com uma conversa sobre você, sua rotina e seus desejos." },
  { title: "Autenticidade", text: "Beleza não é seguir padrões, é revelar a sua essência com confiança." },
  { title: "Cuidado", text: "Produtos de qualidade, materiais esterilizados e atenção em cada detalhe." },
];

export const steps = [
  { title: "Escutamos você", text: "Conversamos sobre seus desejos, referências e rotina antes de começar." },
  { title: "Criamos juntos", text: "Indicamos as melhores possibilidades respeitando seu estilo e sua individualidade." },
  { title: "Cuidamos de cada detalhe", text: "Você aproveita seu momento enquanto nossa equipe cuida de tudo com carinho." },
];

export const stats = [
  { value: 12, suffix: "+", label: "anos de história" },
  { value: 4800, suffix: "+", label: "clientes atendidas" },
  { value: 98, suffix: "%", label: "voltam a nos visitar" },
];

export const faqs = [
  { q: "Como faço para agendar?", a: "É só clicar em qualquer botão de agendamento e falar com nossa equipe pelo WhatsApp. Vamos ajudar você a escolher o melhor horário." },
  { q: "Preciso saber qual serviço escolher?", a: "Não! Conte para nós o que você deseja e nossa equipe orientará sobre o serviço mais indicado." },
  { q: "Posso consultar os valores antes?", a: "Claro. Entre em contato pelo WhatsApp para consultar valores, duração dos procedimentos e disponibilidade." },
  { q: "Vocês atendem noivas fora do salão?", a: "Sim, fazemos atendimento externo para noivas e madrinhas mediante agendamento prévio." },
  { q: "Quais formas de pagamento aceitam?", a: "Pix, cartões de débito e crédito (com parcelamento em pacotes) e dinheiro." },
];

export type GalleryCategory = "Cabelo" | "Unhas" | "Make" | "Espaço";
export const galleryCategories: GalleryCategory[] = ["Cabelo", "Unhas", "Make", "Espaço"];
export const gallery: { src: string; alt: string; category: GalleryCategory; tall?: boolean }[] = [
  { src: images.curls, alt: "Cabelo cacheado volumoso e saudável", category: "Cabelo", tall: true },
  { src: images.nailsSoft, alt: "Unhas em tom nude delicado", category: "Unhas" },
  { src: images.interior, alt: "Interior acolhedor do salão", category: "Espaço" },
  { src: images.makeup, alt: "Maquiagem profissional com pele luminosa", category: "Make", tall: true },
  { src: images.brushing, alt: "Escova modelada com movimento", category: "Cabelo" },
  { src: images.nailsPolish, alt: "Esmaltação vinho sendo aplicada", category: "Unhas", tall: true },
  { src: images.salonChairs, alt: "Cadeiras do salão prontas para receber clientes", category: "Espaço" },
  { src: images.haircut, alt: "Profissional realizando corte de cabelo", category: "Cabelo" },
  { src: images.nails, alt: "Unhas com esmaltação clara", category: "Unhas" },
  { src: images.wash, alt: "Lavagem relaxante no lavatório", category: "Espaço", tall: true },
  { src: images.blowdry, alt: "Finalização com secador e escova", category: "Cabelo" },
  { src: images.hero, alt: "Cliente sendo atendida com carinho", category: "Cabelo" },
];

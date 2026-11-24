import { cn } from "@/lib/utils";

/** Foto em tela cheia que fica parada enquanto o próximo bloco desliza por cima. */
export function StickyMedia({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("sticky top-0 h-[75vh] overflow-hidden bg-muted md:h-screen", className)}>
      <img src={src} alt={alt} className="h-full w-full animate-ken-burns object-cover" />
    </div>
  );
}

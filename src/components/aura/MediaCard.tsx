import type { ReactNode } from "react";
import { Tag } from "./Tag";
import { cn } from "@/lib/utils";

type MediaCardProps = {
  image: string;
  alt: string;
  title: string;
  tags?: string[];
  count?: number | string;
  aspect?: string;
  overlay?: ReactNode;
  className?: string;
};

/** Cartão de catálogo: imagem e, abaixo, título à esquerda e etiquetas à direita. */
export function MediaCard({ image, alt, title, tags = [], count, aspect = "aspect-[3/2]", overlay, className }: MediaCardProps) {
  return (
    <div className={cn("group", className)}>
      <div className={cn("zoom-media relative overflow-hidden bg-muted", aspect)}>
        <img src={image} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        {overlay}
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h3 className="eyebrow">{title}</h3>
        <div className="flex flex-wrap items-center gap-1">
          {tags.map((t, i) => (
            <Tag key={t} shape={i === tags.length - 1 && tags.length > 1 ? "pill" : "box"}>
              {t}
            </Tag>
          ))}
          {count !== undefined ? <Tag shape="circle">{count}</Tag> : null}
        </div>
      </div>
    </div>
  );
}

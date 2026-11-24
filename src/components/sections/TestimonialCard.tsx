import { Tag } from "@/components/aura/Tag";
import { cn } from "@/lib/utils";

type Props = { name: string; initials: string; service: string; text: string; index?: number; className?: string };

export function TestimonialCard({ name, initials, service, text, index, className }: Props) {
  return (
    <article className={cn("group flex h-full flex-col justify-between", className)}>
      <div className="flex aspect-[4/3] flex-col justify-between bg-current/[0.06] p-5 transition-colors duration-500 group-hover:bg-current/[0.12]">
        <span className="text-5xl font-medium tracking-[-0.06em]">{initials}</span>
        <blockquote className="text-lg leading-snug tracking-[-0.02em] md:text-xl">“{text}”</blockquote>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="eyebrow">{name}</p>
        <div className="flex gap-1">
          <Tag>Cliente</Tag>
          <Tag shape="pill">{service}</Tag>
          {index !== undefined ? <Tag shape="circle">{index}</Tag> : null}
        </div>
      </div>
    </article>
  );
}

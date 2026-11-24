import { cn } from "@/lib/utils";

type Props = { name: string; initials: string; service: string; text: string; className?: string };

export function TestimonialCard({ name, initials, service, text, className }: Props) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col justify-between rounded-2xl border bg-card p-8 transition-all duration-700 hover:-translate-y-2 hover:border-accent/40 hover:shadow-lift",
        className,
      )}
    >
      <div>
        <div className="text-sm tracking-[0.3em] text-champagne">★★★★★</div>
        <blockquote className="mt-6 font-display text-xl leading-snug md:text-2xl">“{text}”</blockquote>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <span className="grid size-12 place-items-center rounded-full bg-secondary font-display italic transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
          {initials}
        </span>
        <p className="leading-tight">
          <b className="font-semibold">{name}</b>
          <br />
          <small className="text-muted-foreground">{service}</small>
        </p>
      </div>
    </article>
  );
}

import { useEffect, useState } from "react";

/** Tela de abertura com contador, exibida ao abrir o site. */
export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }
    let value = 0;
    const timer = window.setInterval(() => {
      value = Math.min(100, value + Math.ceil(Math.random() * 12));
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => setDone(true), 200);
        window.setTimeout(() => setGone(true), 1200);
      }
    }, 40);
    return () => window.clearInterval(timer);
  }, []);

  if (gone) return null;

  return (
    <div
      className={`aura-loader fixed inset-0 z-[90] flex flex-col justify-between bg-gradient-ink p-6 text-ink-foreground md:p-12 ${done ? "is-done" : ""}`}
      role="status"
      aria-label="Carregando Studio Aura"
    >
      <span className="eyebrow text-ink-muted">Studio Aura · Beleza & bem-estar</span>
      <div className="font-display text-[22vw] leading-none italic md:text-[16vw]">
        aura<span className="text-accent">.</span>
      </div>
      <div>
        <div className="mb-4 flex items-end justify-between">
          <span className="eyebrow text-ink-muted">Um momento só seu</span>
          <span className="font-display text-5xl tabular-nums md:text-7xl">{String(progress).padStart(2, "0")}</span>
        </div>
        <div className="h-px w-full bg-ink-muted/30">
          <div className="h-px bg-champagne transition-[width] duration-100" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

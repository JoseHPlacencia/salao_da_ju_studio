import { useEffect, useState } from "react";

/** Tela de abertura em coral com contador gigante. */
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
      value = Math.min(100, value + Math.ceil(Math.random() * 14));
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => setDone(true), 150);
        window.setTimeout(() => setGone(true), 1150);
      }
    }, 38);
    return () => window.clearInterval(timer);
  }, []);

  if (gone) return null;

  return (
    <div
      className={`aura-loader fixed inset-0 z-[90] flex flex-col justify-between bg-accent p-4 text-accent-foreground md:p-6 ${done ? "is-done" : ""}`}
      role="status"
      aria-label="Carregando Da Ju Hair"
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl font-medium tracking-[-0.06em]">Da Ju Hair</span>
        <span className="mono rounded-full border border-current px-2 py-0.5">carregando</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="wordmark tabular-nums">{String(progress).padStart(2, "0")}</span>
        <span className="mono mb-4">Um momento só seu</span>
      </div>
    </div>
  );
}

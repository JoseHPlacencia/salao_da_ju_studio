import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

/** Número que conta de 0 até o valor quando aparece na tela. */
export function CountUp({ value, suffix = "", duration = 1800 }: { value: number; suffix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setCurrent(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {current.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

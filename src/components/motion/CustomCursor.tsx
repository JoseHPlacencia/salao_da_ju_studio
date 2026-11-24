import { useEffect, useRef } from "react";

/** Cursor personalizado com rastro suave (apenas em computadores com mouse). */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || !fine || reduce) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let x = mx;
    let y = my;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      el.classList.add("is-active");
      const target = e.target as HTMLElement | null;
      el.classList.toggle("is-large", !!target?.closest("a, button, [role=button], summary, label"));
    };
    const loop = () => {
      x += (mx - x) * 0.18;
      y += (my - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };
    const onLeave = () => el.classList.remove("is-active");

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="aura-cursor hidden md:block" aria-hidden />;
}

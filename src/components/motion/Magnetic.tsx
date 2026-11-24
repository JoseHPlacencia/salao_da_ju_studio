import { useRef, type ReactNode } from "react";

/** Puxa levemente o elemento na direção do mouse. */
export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <span
      ref={ref}
      className="inline-block transition-transform duration-500 ease-[var(--ease-out-expo)]"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "";
      }}
    >
      {children}
    </span>
  );
}

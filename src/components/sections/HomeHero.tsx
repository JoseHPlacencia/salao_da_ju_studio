import { useEffect, useRef } from "react";
import { SplitChars } from "@/components/aura/SplitChars";
import { Tag } from "@/components/aura/Tag";
import { site } from "@/config/site";
import { images } from "@/data/images";
import { setHeroLogoDocked } from "@/lib/logo-handoff";

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/**
 * Capa do início: o nome "Da Ju Hair" gigante fica atrás do retrato. Ao rolar, o retrato some
 * (sobe e é recortado de baixo para cima) e o nome encolhe até virar o logo do topo.
 * A posição final é medida no logo do topo ([data-aura-logo]) para a troca ser invisível.
 */
export function HomeHero() {
  const runwayRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLSpanElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const runway = runwayRef.current;
      const stage = stageRef.current;
      const mark = markRef.current;
      if (!runway || !stage || !mark) return;

      const total = Math.max(1, runway.offsetHeight - window.innerHeight);
      const p = clamp01(-runway.getBoundingClientRect().top / total);
      const e = easeInOut(p);

      // Nome gigante → logo do topo
      const target = document.querySelector<HTMLElement>("[data-aura-logo]");
      if (target && mark.offsetWidth > 0) {
        const hdr = target.getBoundingClientRect();
        const stageRect = stage.getBoundingClientRect();
        const x0 = stageRect.left + mark.offsetLeft;
        const y0 = stageRect.top + mark.offsetTop;
        const endScale = hdr.width / mark.offsetWidth;
        const tx = (hdr.left - x0) * e;
        const ty = (hdr.top + hdr.height / 2 - (y0 + (mark.offsetHeight * endScale) / 2)) * e;
        const scale = 1 + (endScale - 1) * e;
        mark.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
      }

      const docked = p >= 0.999;
      mark.style.opacity = docked ? "0" : "1";
      setHeroLogoDocked(docked);

      // Retrato some subindo e sendo recortado de baixo para cima
      const q = clamp01(p / 0.8);
      const portrait = portraitRef.current;
      if (portrait) {
        portrait.style.transform = `translate3d(0, ${(-q * 16).toFixed(2)}vh, 0) scale(${(1 - q * 0.12).toFixed(4)})`;
        portrait.style.clipPath = `inset(0 0 ${(q * 100).toFixed(2)}% 0)`;
        portrait.style.filter = q > 0 ? `blur(${(q * 6).toFixed(2)}px)` : "";
      }

      const info = infoRef.current;
      if (info) {
        const f = clamp01(p * 3);
        info.style.opacity = String(1 - f);
        info.style.transform = `translate3d(0, ${(f * 24).toFixed(1)}px, 0)`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    document.fonts?.ready.then(schedule).catch(() => {});
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
      setHeroLogoDocked(true);
    };
  }, []);

  return (
    <section ref={runwayRef} className="relative h-[180svh]">
      <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden bg-background">
        <div className="container-aura pt-[22svh] lg:pt-6">
          <h1 className="wordmark-name">
            <span className="sr-only">Da Ju Hair — salão de beleza</span>
            <span ref={markRef} aria-hidden className="-ml-[0.05em] inline-block origin-top-left will-change-transform">
              <SplitChars text="Da Ju Hair" baseDelay={1200} step={90} />
            </span>
          </h1>
        </div>

        <div
          ref={portraitRef}
          className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end will-change-transform lg:justify-center"
          style={{ transformOrigin: "50% 0%" }}
        >
          <div className="animate-portrait-in">
            <img
              src={images.heroPortrait}
              alt="Cabeleireira do Da Ju Hair segurando uma tesoura"
              className="h-[84svh] w-auto max-w-none object-contain lg:h-[90svh]"
              fetchPriority="high"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        <div ref={infoRef} className="container-aura absolute inset-x-0 top-14 lg:top-auto lg:bottom-8">
          <div className="flex flex-wrap items-start justify-between gap-3 animate-[page-in_0.9s_var(--ease-out-expo)_1.7s_both] lg:items-end">
            <p className="max-w-[16rem] text-sm">Salão de beleza · cabelo, unhas, maquiagem e tratamentos em {site.address.city}.</p>
            <div className="flex gap-1">
              <Tag>Beleza</Tag>
              <Tag>Bem-estar</Tag>
              <Tag shape="pill">desde 2014</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

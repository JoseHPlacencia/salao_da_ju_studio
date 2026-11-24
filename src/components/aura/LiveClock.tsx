import { useEffect, useState } from "react";

/** Hora atual de Vitória (mostrada depois que a página carrega no navegador). */
export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = window.setInterval(tick, 15000);
    return () => window.clearInterval(t);
  }, []);

  if (!time) return <>--:--</>;
  const [h, m] = time.split(":");
  return (
    <>
      {h}
      <span className="animate-blink">:</span>
      {m} VIX
    </>
  );
}

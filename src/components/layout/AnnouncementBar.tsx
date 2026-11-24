export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-primary py-2 text-primary-foreground">
      <div className="flex w-max animate-marquee" aria-hidden>
        {Array.from({ length: 2 }).map((_, c) => (
          <div key={c} className="flex shrink-0">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="eyebrow px-8 text-[0.62rem]">
                Um tempo só seu <span className="mx-3 text-champagne">✳</span> Agende sua experiência
                <span className="mx-3 text-champagne">✳</span> Atendimento com hora marcada
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">Um tempo só seu. Agende sua experiência.</span>
    </div>
  );
}

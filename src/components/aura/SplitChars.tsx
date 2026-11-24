/** Palavra gigante que sobe letra por letra. */
export function SplitChars({ text, baseDelay = 0, step = 60 }: { text: string; baseDelay?: number; step?: number }) {
  return (
    <span aria-label={text} className="inline-block">
      {Array.from(text).map((ch, i) => (
        <span key={i} className="split-word" aria-hidden>
          <span style={{ "--word-delay": `${baseDelay + i * step}ms` } as React.CSSProperties}>{ch === " " ? "\u00a0" : ch}</span>
        </span>
      ))}
    </span>
  );
}

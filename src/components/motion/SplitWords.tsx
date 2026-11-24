import { Fragment } from "react";

type Line = { text: string; italic?: boolean; className?: string };

/** Título que sobe palavra por palavra. Cada linha pode ser itálica. */
export function SplitWords({ lines, baseDelay = 0, step = 70 }: { lines: Line[]; baseDelay?: number; step?: number }) {
  let index = 0;
  return (
    <>
      {lines.map((line, li) => (
        <span key={li} className={`block ${line.italic ? "italic" : ""} ${line.className ?? ""}`}>
          {line.text.split(" ").map((word, wi) => {
            const delay = baseDelay + index++ * step;
            return (
              <Fragment key={wi}>
                <span className="split-word">
                  <span style={{ "--word-delay": `${delay}ms` } as React.CSSProperties}>{word}</span>
                </span>
                {wi < line.text.split(" ").length - 1 ? " " : null}
              </Fragment>
            );
          })}
        </span>
      ))}
    </>
  );
}

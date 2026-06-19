import type { ReactNode } from "react"

export function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="da-table-wrap">
      <table className="da-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={cellIndex === 0 ? "da-table-label" : undefined}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function DirectAnswer({ children }: { children: ReactNode }) {
  return (
    <div className="da-direct-answer">
      <p className="da-direct-label">Direct Answer</p>
      <p className="da-direct-text">{children}</p>
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="da-hero-visual" aria-hidden>
      <div className="da-hero-visual-glow" />
      <div className="da-hero-visual-sphere">
        <div className="da-hero-visual-grid" />
        <div className="da-hero-visual-core" />
      </div>
    </div>
  )
}

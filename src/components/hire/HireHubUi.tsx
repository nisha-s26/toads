"use client"

import Link from "next/link"
import { type LucideIcon } from "lucide-react"

export function HubSectionHeader({
  title,
  intro,
  introRight,
  centered = false,
  inverted = false,
}: {
  title: string
  intro?: string
  introRight?: string
  centered?: boolean
  inverted?: boolean
}) {
  const titleClass = inverted ? "text-white" : "text-page-fg"
  const introClass = inverted ? "text-white/78" : "text-page-fg-muted"

  if (centered) {
    return (
      <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 text-center md:mb-12">
        <h2 className={`text-2xl font-bold md:text-3xl ${titleClass}`}>{title}</h2>
        {intro ? <p className={`text-sm leading-relaxed md:text-base ${introClass}`}>{intro}</p> : null}
      </div>
    )
  }

  return (
    <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 className={`mt-2 text-2xl font-bold md:text-3xl ${titleClass}`}>{title}</h2>
        {intro ? <p className={`mt-2 text-sm leading-relaxed md:text-base ${introClass}`}>{intro}</p> : null}
      </div>
      {introRight ? <p className={`max-w-md text-sm leading-relaxed ${introClass}`}>{introRight}</p> : null}
    </div>
  )
}

export function HubTable({
  headers,
  rows,
  linkFirstColumn,
}: {
  headers: string[]
  rows: string[][]
  linkFirstColumn?: { hrefs: string[] }
}) {
  return (
    <div className="hire-hub-table-wrap overflow-x-auto rounded-2xl border border-page-border bg-white shadow-sm">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="bg-toadster-green text-white">
            {headers.map((header) => (
              <th key={header} className="px-5 py-4 text-sm font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-page-border text-sm text-black/85">
          {rows.map((row, rowIndex) => (
            <tr key={row.join("|")} className="transition-colors hover:bg-[#065606]/5">
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  className={`px-5 py-4 ${index === 0 ? "font-semibold text-black" : ""}`}
                >
                  {index === 0 && linkFirstColumn ? (
                    <Link href={linkFirstColumn.hrefs[rowIndex]} title={cell} className="text-[#065606] hover:underline">
                      {cell}
                    </Link>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function HubBenefitCard({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string
  description: string
  icon: LucideIcon
  index: number
}) {
  return (
    <article className="hire-hub-benefit-card">
      <div className="flex items-start justify-between gap-3">
        <span className="text-[10px] font-bold tracking-[0.2em] text-toadster-green">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-toadster-green/12 text-toadster-green">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>
      <h3 className="mt-4 text-base font-bold text-black md:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-black/85">{description}</p>
      <div className="mt-4 h-0.5 w-10 rounded-full bg-[#065606]" />
    </article>
  )
}

export function HubFeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: LucideIcon
}) {
  return (
    <article className="hire-hub-feature-card">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-toadster-green/12 text-toadster-green">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 text-base font-bold text-black md:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-black/85">{description}</p>
      <div className="mt-4 h-0.5 w-10 rounded-full bg-[#065606]" />
    </article>
  )
}

export function HubTechCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="hire-hub-tech-card">
      <h3 className="text-lg font-extrabold text-black">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-black/85">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#065606]" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function HubWorkflowPanel({ items }: { items: string[] }) {
  return (
    <div className="hire-hub-workflow-panel">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#065606]">Day-to-day workflow</p>
      <ul className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-black/85">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#065606]/12 text-xs font-bold text-[#065606]">
              {index + 1}
            </span>
            <span className="pt-0.5">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function HubChallengeCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="hire-challenge-card">
      <h3 className="hire-challenge-card-title">{title}</h3>
      <span className="hire-challenge-card-rule" aria-hidden="true" />
      <p className="hire-challenge-card-copy">{description}</p>
    </article>
  )
}

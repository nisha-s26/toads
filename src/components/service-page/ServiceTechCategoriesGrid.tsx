"use client"

import type { LucideIcon } from "lucide-react"
import { ServiceExpandableGrid } from "./ServiceExpandableGrid"

export type TechCategoryItem = {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}

function TechCategoryCard({ cat }: { cat: TechCategoryItem }) {
  const Icon = cat.icon

  return (
    <div className="capability-card-surface group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300">
      <div className="capability-card-header relative z-10">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-toadster-green">{cat.title}</h3>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
            <Icon size={22} strokeWidth={2} />
          </span>
        </div>
        <span className="capability-card-heading-rule" aria-hidden="true" />
      </div>
      <p className="capability-card-copy relative z-10 mb-4 text-sm leading-relaxed">{cat.why}</p>
      <div className="relative z-10 mt-auto flex flex-wrap gap-2">
        {cat.pills.map((pill) => (
          <span
            key={pill}
            className="capability-card-tag rounded-full border border-page-border bg-page-bg-alt px-3 py-1 text-xs font-semibold"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ServiceTechCategoriesGrid({
  categories,
  scrollTargetId,
}: {
  categories: TechCategoryItem[]
  scrollTargetId?: string
}) {
  return (
    <ServiceExpandableGrid
      items={categories}
      getKey={(cat) => cat.title}
      renderItem={(cat) => <TechCategoryCard cat={cat} />}
      scrollTargetId={scrollTargetId}
    />
  )
}

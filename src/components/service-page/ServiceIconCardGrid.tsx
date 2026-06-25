"use client"

import type { LucideIcon } from "lucide-react"
import { ServiceExpandableGrid } from "./ServiceExpandableGrid"

export type ServiceIconCardItem = {
  icon: LucideIcon
  title: string
  desc: string
}

function ServiceIconCard({ item }: { item: ServiceIconCardItem }) {
  const Icon = item.icon

  return (
    <div className="capability-card-surface group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300">
      <span className="relative z-10 mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
        <Icon size={22} strokeWidth={2} />
      </span>
      <div className="capability-card-header relative z-10">
        <h3 className="font-bold text-toadster-green">{item.title}</h3>
        <span className="capability-card-heading-rule" aria-hidden="true" />
      </div>
      <p className="capability-card-copy relative z-10 text-sm leading-relaxed">{item.desc}</p>
    </div>
  )
}

export function ServiceIconCardGrid({
  items,
  scrollTargetId,
  gapClassName = "gap-5",
}: {
  items: ServiceIconCardItem[]
  scrollTargetId?: string
  gapClassName?: string
}) {
  return (
    <ServiceExpandableGrid
      items={items}
      getKey={(item) => item.title}
      renderItem={(item) => <ServiceIconCard item={item} />}
      scrollTargetId={scrollTargetId}
      gapClassName={gapClassName}
    />
  )
}

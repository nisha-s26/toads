"use client"

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ServiceExpandableGrid } from "./ServiceExpandableGrid"

export type ServiceCapabilityItem = {
  icon: LucideIcon
  title: string
  desc: string
  value?: string
  tags?: string[]
  tag?: string
}

type ServiceCapabilitiesGridProps = {
  capabilities: ServiceCapabilityItem[]
  columns?: "two" | "three"
  tagsLabel?: string
  scrollTargetId?: string
  compact?: boolean
}

function CapabilityCard({
  cap,
  compact,
  tagsLabel,
}: {
  cap: ServiceCapabilityItem
  compact?: boolean
  tagsLabel: string
}) {
  const Icon = cap.icon
  const padding = compact ? "p-6" : "p-7"

  return (
    <div className={cn("capability-card-surface group relative flex h-full flex-col rounded-2xl transition-all duration-300", padding)}>
      <div className="capability-card-header relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            {cap.tag ? (
              <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-toadster-green">{cap.tag}</p>
            ) : null}
            <h3 className="text-lg font-bold text-toadster-green">{cap.title}</h3>
          </div>
          <span className="ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
            <Icon size={22} strokeWidth={2} />
          </span>
        </div>
        <span className="capability-card-heading-rule" aria-hidden="true" />
      </div>
      <p className="capability-card-copy relative z-10 mb-4 text-sm leading-relaxed">{cap.desc}</p>
      {cap.value ? (
        <p className="relative z-10 mb-4 text-sm font-semibold text-toadster-green">→ {cap.value}</p>
      ) : null}
      {cap.tags && cap.tags.length > 0 ? (
        <div className="relative z-10 mt-auto border-t border-page-border pt-4">
          <p className="capability-card-copy mb-2 text-[11px] font-bold uppercase tracking-wider">{tagsLabel}</p>
          <div className="flex flex-wrap gap-2">
            {cap.tags.map((tag) => (
              <span
                key={tag}
                className="capability-card-tag rounded border border-page-border bg-page-bg-alt px-2.5 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export function ServiceCapabilitiesGrid({
  capabilities,
  columns = "three",
  tagsLabel = "Common Use Cases",
  scrollTargetId = "services",
  compact = false,
}: ServiceCapabilitiesGridProps) {
  return (
    <ServiceExpandableGrid
      items={capabilities}
      getKey={(cap) => cap.title}
      renderItem={(cap) => <CapabilityCard cap={cap} compact={compact} tagsLabel={tagsLabel} />}
      columns={columns}
      scrollTargetId={scrollTargetId}
    />
  )
}

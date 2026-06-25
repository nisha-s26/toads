"use client"

import { useState, type ReactNode } from "react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { cn } from "@/lib/utils"
import { SeeMoreToggle } from "./SeeMoreToggle"

export const SERVICE_EXPANDABLE_INITIAL_COUNT = 6
export const SERVICE_EXPANDABLE_COLLAPSE_MS = 420
const STAGGER_STEP = 0.08

type ServiceExpandableGridProps<T> = {
  items: T[]
  getKey: (item: T) => string
  renderItem: (item: T) => ReactNode
  columns?: "two" | "three"
  scrollTargetId?: string
  gapClassName?: string
  initialCount?: number
}

export function ServiceExpandableGrid<T>({
  items,
  getKey,
  renderItem,
  columns = "three",
  scrollTargetId,
  gapClassName = "gap-6",
  initialCount = SERVICE_EXPANDABLE_INITIAL_COUNT,
}: ServiceExpandableGridProps<T>) {
  const hasMore = items.length > initialCount
  const [expanded, setExpanded] = useState(false)
  const [collapsing, setCollapsing] = useState(false)

  const showExtra = expanded || collapsing
  const visibleItems = showExtra ? items : items.slice(0, initialCount)

  function handleSeeMore() {
    setCollapsing(false)
    setExpanded(true)
  }

  function handleSeeLess() {
    setCollapsing(true)
    window.setTimeout(() => {
      setExpanded(false)
      setCollapsing(false)
      if (scrollTargetId) {
        document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, SERVICE_EXPANDABLE_COLLAPSE_MS)
  }

  return (
    <>
      <div
        className={cn(
          "grid items-stretch",
          gapClassName,
          columns === "two" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {visibleItems.map((item, index) => {
          const isExtra = index >= initialCount
          const card = renderItem(item)

          return (
            <div
              key={getKey(item)}
              className={cn(
                "service-capability-card-slot h-full",
                isExtra && expanded && !collapsing && "hire-hub-resource-card-slot--enter",
                isExtra && collapsing && "hire-hub-resource-card-slot--exit",
              )}
              style={
                isExtra
                  ? { ["--resource-reveal-delay" as string]: `${(index - initialCount) * 0.07}s` }
                  : undefined
              }
            >
              {isExtra ? (
                card
              ) : (
                <ScrollReveal delay={index * STAGGER_STEP} className="h-full">
                  {card}
                </ScrollReveal>
              )}
            </div>
          )
        })}
      </div>

      {hasMore ? (
        <SeeMoreToggle
          expanded={expanded}
          collapsing={collapsing}
          onSeeMore={handleSeeMore}
          onSeeLess={handleSeeLess}
        />
      ) : null}
    </>
  )
}

"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"

export function SeeMoreToggle({
  expanded,
  collapsing = false,
  onSeeMore,
  onSeeLess,
}: {
  expanded: boolean
  collapsing?: boolean
  onSeeMore: () => void
  onSeeLess: () => void
}) {
  return (
    <ScrollReveal className="mt-8 flex justify-center" delay={0.1}>
      {!expanded ? (
        <button type="button" onClick={onSeeMore} className="hire-hub-toggle-btn hire-hub-toggle-btn--more">
          See more
          <ChevronDown className="h-4 w-4" aria-hidden />
        </button>
      ) : (
        <button
          type="button"
          onClick={onSeeLess}
          disabled={collapsing}
          className="hire-hub-toggle-btn hire-hub-toggle-btn--less"
        >
          See less
          <ChevronUp className="h-4 w-4" aria-hidden />
        </button>
      )}
    </ScrollReveal>
  )
}

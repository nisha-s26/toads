"use client"

import { useState, type CSSProperties } from "react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { cn } from "@/lib/utils"
import type { GlobalCountryProcessStep } from "@/views/global-pages/types"

type GlobalCountryProcessTrackProps = {
  steps: GlobalCountryProcessStep[]
  renderDescription: (step: GlobalCountryProcessStep) => string
}

export function GlobalCountryProcessTrack({ steps, renderDescription }: GlobalCountryProcessTrackProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const displayIndex = hoverIndex ?? activeIndex
  const stepCount = steps.length
  const progressPercent =
    displayIndex !== null && stepCount > 1 ? (displayIndex / (stepCount - 1)) * 100 : 0

  const clearHover = () => {
    setHoverIndex(null)
  }

  return (
    <div
      className="global-country-process-track"
      style={{ "--gc-process-cols": stepCount } as CSSProperties}
      onMouseLeave={clearHover}
      onBlurCapture={(event) => {
        const next = event.relatedTarget as Node | null
        if (!next || !event.currentTarget.contains(next)) {
          clearHover()
        }
      }}
    >
      <div className="global-country-process-line" aria-hidden="true">
        <div className="global-country-process-line-base" />
        <div className="global-country-process-line-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      {steps.map((step, index) => (
        <ScrollReveal
          key={step.num}
          delay={index * 0.05}
          y={12}
          className={cn(
            "global-country-process-item",
            displayIndex !== null && index <= displayIndex && "global-country-process-item--reached",
            displayIndex === index && "global-country-process-item--current",
          )}
        >
          <button
            type="button"
            className="global-country-process-item-hit"
            onMouseEnter={() => setHoverIndex(index)}
            onFocus={() => setHoverIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            <div className="global-country-process-node">{step.num}</div>
            <h3 className="global-country-process-title mt-3 text-sm font-bold md:text-base">{step.title}</h3>
            <p className="global-country-process-desc mt-1.5 text-xs leading-snug text-page-fg-muted md:text-sm">
              {renderDescription(step)}
            </p>
          </button>
        </ScrollReveal>
      ))}
    </div>
  )
}

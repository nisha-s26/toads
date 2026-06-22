"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export type ProcessStep = {
  num: string
  title: string
  desc: string
  deliverables: string[]
}

interface ServiceProcessStepsProps {
  steps: ProcessStep[]
  /** "scroll" highlights the step in view; "hover" highlights on mouse over */
  highlightMode?: "scroll" | "hover"
}

export function ServiceProcessSteps({ steps, highlightMode = "hover" }: ServiceProcessStepsProps) {
  const stepRefs = useRef<(HTMLElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(highlightMode === "hover" ? null : 0)

  useEffect(() => {
    if (highlightMode !== "scroll") return

    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((stepEl, index) => {
      if (!stepEl) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index)
          }
        },
        {
          threshold: 0.45,
          rootMargin: "-12% 0px -40% 0px",
        },
      )

      observer.observe(stepEl)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [steps, highlightMode])

  return (
    <div className="service-process-steps-outer">
      <div
        className="service-process-steps"
        onMouseLeave={highlightMode === "hover" ? () => setActiveIndex(null) : undefined}
      >
        {steps.map((step, index) => (
          <article
            key={step.num}
            ref={(el) => {
              stepRefs.current[index] = el
            }}
            onMouseEnter={highlightMode === "hover" ? () => setActiveIndex(index) : undefined}
            className={cn(
              "service-process-step grid gap-4 py-7 md:grid-cols-[4.5rem_1fr] md:gap-8",
              activeIndex === index && "service-process-step--active",
            )}
          >
            <div className="service-process-step-num text-right text-4xl font-extrabold leading-none md:text-5xl">
              {step.num}
            </div>
            <div className="min-w-0">
              <h3 className="service-process-step-title mb-2 text-lg font-bold md:text-xl">{step.title}</h3>
              <p className="service-process-step-desc mb-4 text-sm leading-relaxed">{step.desc}</p>
              {step.deliverables.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {step.deliverables.map((tag) => (
                    <li key={tag}>
                      <span className="service-process-tag">{tag}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

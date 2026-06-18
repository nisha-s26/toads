"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export type ProcessStep = {
  num: string
  title: string
  desc: string
  deliverables: string[]
}

interface ServiceProcessStepsProps {
  steps: ProcessStep[]
}

export function ServiceProcessSteps({ steps }: ServiceProcessStepsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const [canScrollDown, setCanScrollDown] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const hasOverflow = el.scrollHeight > el.clientHeight + 8
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 28
    setCanScrollDown(hasOverflow && !atBottom)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const update = () => checkScroll()
    const frame = requestAnimationFrame(update)

    el.addEventListener("scroll", update, { passive: true })
    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(el)

    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener("scroll", update)
      resizeObserver.disconnect()
    }
  }, [checkScroll, steps])

  useEffect(() => {
    const root = scrollRef.current
    if (!root) return

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
          root,
          threshold: 0.45,
          rootMargin: "-12% 0px -40% 0px",
        }
      )

      observer.observe(stepEl)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [steps])

  return (
    <div
      className={cn(
        "service-process-steps-outer",
        canScrollDown && "service-process-steps-outer--can-scroll"
      )}
    >
      <div
        ref={scrollRef}
        style={{ maxHeight: "calc(100vh - 8rem)", overflow: "auto" }}
        className="service-process-steps hide-scrollbar"
      >
        {steps.map((step, index) => (
          <div
            key={step.num}
            ref={(el) => {
              stepRefs.current[index] = el
            }}
            className={cn(
              "service-process-step group grid gap-5 py-8 md:grid-cols-[72px_1fr] md:gap-8",
              activeIndex === index && "service-process-step--active"
            )}
          >
            <div className="service-process-step-num text-right text-5xl font-extrabold leading-none">
              {step.num}
            </div>
            <div>
              <h3 className="service-process-step-title mb-2 text-xl font-bold">{step.title}</h3>
              <p className="service-process-step-desc mb-4 text-sm leading-relaxed">{step.desc}</p>
              <div className="flex flex-wrap gap-2">
                {step.deliverables.map((tag) => (
                  <span key={tag} className="service-process-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {canScrollDown && (
        <div className="service-process-scroll-hint" aria-hidden="true">
          <span>Scroll for more steps</span>
          <ChevronDown className="service-process-scroll-hint-icon h-4 w-4" strokeWidth={2.5} />
        </div>
      )}
    </div>
  )
}

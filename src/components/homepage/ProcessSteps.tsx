"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type ProcessStepItem = {
  id: string
  title: string
  description: string
  Icon: LucideIcon
}

type ProcessStepsProps = {
  steps: ProcessStepItem[]
  className?: string
}

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.55"],
  })
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  const [lineProgressOverride, setLineProgressOverride] = useState<number | null>(null)

  const animatedScaleX = useSpring(0, { stiffness: 120, damping: 20 })
  const animatedY = useSpring(-120, { stiffness: 120, damping: 20 })

  useMotionValueEvent(lineScaleX, "change", (latest) => {
    if (lineProgressOverride === null) {
      animatedScaleX.set(latest)
      animatedY.set(-120 + 240 * latest)
    }
  })

  useEffect(() => {
    if (lineProgressOverride !== null) {
      animatedScaleX.set(lineProgressOverride)
      animatedY.set(-120 + 240 * lineProgressOverride)
    } else {
      // Restore to current scroll-driven value when hover ends
      const currentScroll = lineScaleX.get()
      animatedScaleX.set(currentScroll)
      animatedY.set(-120 + 240 * currentScroll)
    }
  }, [lineProgressOverride, animatedScaleX, animatedY, lineScaleX])

  const lineInsetPercent = steps.length === 4 ? null : 100 / (steps.length * 2)
  const lineInsetClass = steps.length === 4 ? "inset-x-[104px]" : undefined
  const lineInsetStyle =
    lineInsetPercent !== null
      ? { left: `${lineInsetPercent}%`, right: `${lineInsetPercent}%` }
      : undefined

  return (
    <div ref={sectionRef} className={cn("process-steps relative", className)}>
      <div className="hidden md:block relative">
        <div
          className={`absolute top-[52px] z-0 h-[2px] bg-page-fg/10 rounded-full ${lineInsetClass ?? ""}`}
          style={lineInsetStyle}
        />
        <motion.div
          className={`absolute top-[52px] z-0 h-[2px] bg-toadster-green rounded-full origin-left ${lineInsetClass ?? ""}`}
          style={{ ...lineInsetStyle, scaleX: animatedScaleX }}
        />
        <div
          className="relative z-10 grid gap-8"
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
        >
          {steps.map((step, i) => {
            const isActive = activeIndex === i
            const Icon = step.Icon

            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => {
                  setActiveIndex(i)
                  // When hovering ball i, fill the line to connect to ball i+1
                  if (i === 0) setLineProgressOverride(1 / (steps.length - 1))
                  else if (i === steps.length - 1) setLineProgressOverride(1)
                  else setLineProgressOverride((i + 1) / (steps.length - 1))
                }}
                onMouseLeave={() => {
                  setActiveIndex(null)
                  setLineProgressOverride(null)
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="process-step text-center"
              >
                <div className="relative z-10 mx-auto w-[104px] h-[104px]">
                  <div
                    className={`process-step-circle relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm transition-all duration-300 dark:bg-white dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.45)] ${
                      isActive
                        ? "border-toadster-green"
                        : "border-page-border dark:border-slate-200/80"
                    }`}
                  >
                    <motion.div
                      className="process-step-circle-glow absolute inset-0 rounded-full"
                      initial={false}
                      animate={
                        isActive
                          ? { opacity: 1, scale: 1.25 }
                          : { opacity: 0, scale: 0.5 }
                      }
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{
                        background:
                          "radial-gradient(circle at center, color-mix(in srgb, var(--toadster-green) 10%, transparent), color-mix(in srgb, var(--toadster-green) 10%, transparent) 45%, rgba(255,255,255,0) 75%)",
                      }}
                    />

                    <Icon
                      className={`process-step-icon relative z-[2] transition-colors duration-300 ${
                        isActive ? "text-toadster-green" : "text-toadster-green/80"
                      }`}
                      size={28}
                      strokeWidth={2}
                    />
                    <span
                      className={`process-step-num relative z-[2] mt-1 text-[12px] font-bold transition-colors duration-300 ${
                        isActive ? "text-toadster-green" : "text-toadster-green/75"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>
                </div>

                <p
                  className={`process-step-title mt-5 text-base font-extrabold transition-colors duration-300 ${
                    isActive ? "text-page-fg" : "text-page-fg-subtle"
                  }`}
                >
                  {step.title}
                </p>
                <p className="process-step-desc mt-2 mx-auto max-w-[18rem] text-sm leading-relaxed text-page-fg-muted sm:text-base">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="md:hidden relative">
        <div className="absolute left-[40px] top-[40px] bottom-[40px] z-0 w-[2px] bg-page-fg/10 rounded-full" />
        <motion.div className="absolute left-[40px] top-[40px] bottom-[40px] z-0 w-[2px] rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-toadster-green to-transparent"
            style={{ y: useTransform(animatedY, (val) => `${val}%`) }}
          />
        </motion.div>

        <div className="relative z-10 space-y-12">
          {steps.map((step, i) => {
            const isActive = activeIndex === i
            const Icon = step.Icon

            return (
              <div key={step.id} className="flex items-start gap-6">
                <motion.div
                  onMouseEnter={() => {
                    setActiveIndex(i)
                    if (i === 0) setLineProgressOverride(1 / (steps.length - 1))
                    else if (i === steps.length - 1) setLineProgressOverride(1)
                    else setLineProgressOverride((i + 1) / (steps.length - 1))
                  }}
                  onMouseLeave={() => {
                    setActiveIndex(null)
                    setLineProgressOverride(null)
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex-shrink-0"
                >
                  <div className="relative z-10 w-[80px] h-[80px]">
                    <div
                      className={`process-step-circle relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm transition-all duration-300 dark:bg-white dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.45)] ${
                        isActive
                          ? "border-toadster-green"
                          : "border-page-border dark:border-slate-200/80"
                      }`}
                    >
                      <motion.div
                        className="process-step-circle-glow absolute inset-0 rounded-full"
                        initial={false}
                        animate={
                          isActive
                            ? { opacity: 1, scale: 1.25 }
                            : { opacity: 0, scale: 0.5 }
                        }
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{
                          background:
                            "radial-gradient(circle at center, color-mix(in srgb, var(--toadster-green) 10%, transparent), color-mix(in srgb, var(--toadster-green) 10%, transparent) 45%, rgba(255,255,255,0) 75%)",
                        }}
                      />

                      <Icon
                        className={`process-step-icon relative z-[2] transition-colors duration-300 ${
                          isActive ? "text-toadster-green" : "text-toadster-green/80"
                        }`}
                        size={24}
                        strokeWidth={2}
                      />
                      <span
                        className={`process-step-num relative z-[2] mt-1 text-[10px] font-bold transition-colors duration-300 ${
                          isActive ? "text-toadster-green" : "text-toadster-green/75"
                        }`}
                      >
                        {step.id}
                      </span>
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 min-w-0 pt-2">
                  <p
                    className={`process-step-title text-base font-extrabold transition-colors duration-300 ${
                      isActive ? "text-page-fg" : "text-page-fg-subtle"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="process-step-desc mt-2 text-sm leading-relaxed text-page-fg-muted sm:text-base">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

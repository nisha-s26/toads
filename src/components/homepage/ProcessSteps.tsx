"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import type { LucideIcon } from "lucide-react"

export type ProcessStepItem = {
  id: string
  title: string
  description: string
  Icon: LucideIcon
}

type ProcessStepsProps = {
  steps: ProcessStepItem[]
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
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
    }
  }, [lineProgressOverride, animatedScaleX, animatedY])

  const lineInsetPercent = steps.length === 4 ? null : 100 / (steps.length * 2)
  const lineInsetClass = steps.length === 4 ? "inset-x-[104px]" : undefined
  const lineInsetStyle =
    lineInsetPercent !== null
      ? { left: `${lineInsetPercent}%`, right: `${lineInsetPercent}%` }
      : undefined

  return (
    <div ref={sectionRef} className="relative">
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
                  if (i === 0) setLineProgressOverride(0.5)
                }}
                onMouseLeave={() => {
                  setActiveIndex(null)
                }}
                onClick={() => {
                  if (i === 1 || i === 2) setLineProgressOverride(1)
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="text-center"
              >
                <div className="relative z-10 mx-auto w-[104px] h-[104px]">
                  <div
                    className={`relative w-full h-full rounded-full bg-page-card border shadow-sm flex flex-col items-center justify-center overflow-hidden transition-all duration-300 dark:bg-white dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.45)] ${
                      isActive
                        ? "border-toadster-green dark:border-toadster-green"
                        : "border-page-border dark:border-slate-200/80"
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
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
                      className={`transition-colors duration-300 ${
                        isActive ? "text-page-fg dark:text-slate-900" : "text-page-fg-muted dark:text-slate-600"
                      }`}
                      size={28}
                    />
                    <span
                      className={`mt-1 text-[12px] font-bold transition-colors duration-300 ${
                        isActive ? "text-page-fg dark:text-slate-900" : "text-page-fg-muted dark:text-slate-600"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>
                </div>

                <p
                  className={`mt-5 text-base font-extrabold transition-colors duration-300 ${
                    isActive ? "text-page-fg" : "text-page-fg-subtle"
                  }`}
                >
                  {step.title}
                </p>
                <p className="mt-2 text-sm text-page-fg-muted leading-relaxed max-w-[18rem] mx-auto">
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
                    if (i === 0) setLineProgressOverride(0.5)
                  }}
                  onMouseLeave={() => {
                    setActiveIndex(null)
                  }}
                  onClick={() => {
                    if (i === 1 || i === 2) setLineProgressOverride(1)
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex-shrink-0"
                >
                  <div className="relative z-10 w-[80px] h-[80px]">
                    <div
                      className={`relative w-full h-full rounded-full bg-page-card border shadow-sm flex flex-col items-center justify-center overflow-hidden transition-all duration-300 dark:bg-white dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.45)] ${
                        isActive
                          ? "border-toadster-green dark:border-toadster-green"
                          : "border-page-border dark:border-slate-200/80"
                      }`}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
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
                        className={`transition-colors duration-300 ${
                          isActive ? "text-page-fg dark:text-slate-900" : "text-page-fg-muted dark:text-slate-600"
                        }`}
                        size={24}
                      />
                      <span
                        className={`mt-1 text-[10px] font-bold transition-colors duration-300 ${
                          isActive ? "text-page-fg dark:text-slate-900" : "text-page-fg-muted dark:text-slate-600"
                        }`}
                      >
                        {step.id}
                      </span>
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 pt-2">
                  <p
                    className={`text-base font-extrabold transition-colors duration-300 ${
                      isActive ? "text-page-fg" : "text-page-fg-subtle"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-page-fg-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

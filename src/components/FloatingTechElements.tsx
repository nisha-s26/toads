"use client"

import { useSyncExternalStore } from "react"
import type { LucideIcon } from "lucide-react"
import {
  Brain,
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Network,
  Server,
  Shield,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

type FloatingItem = {
  Icon: LucideIcon
  left: string
  top: string
  size: number
  duration: number
  delay: number
  driftX: number
  driftY: number
  opacity: number
}

const FLOATING_ITEMS: FloatingItem[] = [
  { Icon: Brain, left: "6%", top: "14%", size: 26, duration: 52, delay: 0, driftX: 18, driftY: 24, opacity: 0.14 },
  { Icon: Code2, left: "88%", top: "10%", size: 24, duration: 58, delay: 2, driftX: -14, driftY: 20, opacity: 0.12 },
  { Icon: Database, left: "92%", top: "38%", size: 22, duration: 64, delay: 1, driftX: -20, driftY: 16, opacity: 0.11 },
  { Icon: Cloud, left: "4%", top: "52%", size: 28, duration: 56, delay: 3, driftX: 22, driftY: -18, opacity: 0.13 },
  { Icon: Cpu, left: "78%", top: "68%", size: 25, duration: 60, delay: 0.5, driftX: -16, driftY: -22, opacity: 0.12 },
  { Icon: Terminal, left: "14%", top: "78%", size: 23, duration: 54, delay: 4, driftX: 12, driftY: -14, opacity: 0.11 },
  { Icon: Network, left: "48%", top: "6%", size: 21, duration: 68, delay: 1.5, driftX: 10, driftY: 18, opacity: 0.09 },
  { Icon: Server, left: "62%", top: "88%", size: 24, duration: 62, delay: 2.5, driftX: -12, driftY: 10, opacity: 0.1 },
  { Icon: Bot, left: "32%", top: "22%", size: 22, duration: 66, delay: 3.5, driftX: 16, driftY: 12, opacity: 0.1 },
  { Icon: Layers, left: "70%", top: "28%", size: 23, duration: 55, delay: 0.8, driftX: -18, driftY: 14, opacity: 0.11 },
  { Icon: Workflow, left: "22%", top: "42%", size: 21, duration: 70, delay: 4.2, driftX: 14, driftY: -16, opacity: 0.09 },
  { Icon: Shield, left: "54%", top: "72%", size: 22, duration: 59, delay: 1.2, driftX: -10, driftY: -20, opacity: 0.1 },
  { Icon: GitBranch, left: "38%", top: "58%", size: 20, duration: 63, delay: 2.8, driftX: 8, driftY: 18, opacity: 0.08 },
  { Icon: Globe, left: "84%", top: "52%", size: 26, duration: 57, delay: 3.2, driftX: -14, driftY: -12, opacity: 0.11 },
  { Icon: Zap, left: "10%", top: "32%", size: 20, duration: 61, delay: 5, driftX: 20, driftY: 10, opacity: 0.1 },
]

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function getReducedMotionServerSnapshot() {
  return false
}

export function FloatingTechElements() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  if (reducedMotion) return null

  return (
    <div className="floating-tech-elements pointer-events-none absolute inset-0 -z-[5] overflow-hidden" aria-hidden>
      {FLOATING_ITEMS.map((item, index) => {
        const { Icon } = item
        return (
          <div
            key={index}
            className="floating-tech-item absolute"
            style={{
              left: item.left,
              top: item.top,
              ["--float-duration" as string]: `${item.duration}s`,
              ["--float-delay" as string]: `${item.delay}s`,
              ["--float-drift-x" as string]: `${item.driftX}px`,
              ["--float-drift-y" as string]: `${item.driftY}px`,
              ["--float-opacity" as string]: item.opacity,
            }}
          >
            <div
              className={cn(
                "floating-tech-icon flex items-center justify-center rounded-xl border border-toadster-green/15",
                "bg-page-card/40 shadow-sm backdrop-blur-[2px] dark:bg-page-card/25",
              )}
            >
              <Icon size={item.size} className="text-toadster-green/70" strokeWidth={1.75} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

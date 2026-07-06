"use client"

import type { ComponentType } from "react"
import {
  BarChart3,
  Bot,
  Brain,
  Cloud,
  Cpu,
  Database,
  Layers,
  Network,
  Server,
  Workflow,
} from "lucide-react"

interface Ring {
  radius: number
  duration: number
  direction: 1 | -1
  icons: ComponentType<{ size?: number; className?: string }>[]
}

const rings: Ring[] = [
  { radius: 180, duration: 18, direction: 1, icons: [Brain, Cpu, Bot, Network, Brain] },
  { radius: 350, duration: 28, direction: -1, icons: [Database, Cloud, Workflow, Server] },
  { radius: 440, duration: 40, direction: 1, icons: [BarChart3, Layers, Brain, Cpu, Brain, Cpu, Bot, Network] },
  { radius: 550, duration: 40, direction: -1, icons: [BarChart3, Layers, Brain, Cpu, Brain, Cpu, Bot, Network] },
]

export function DesktopHeroOrbits() {
  return (
    <div
      className="hero-orbits pointer-events-none absolute inset-0 z-[1] hidden items-center justify-center opacity-40 md:flex [@media(max-height:720px)]:hidden"
      aria-hidden="true"
    >
      <div className="relative w-[650px]" style={{ contain: "layout paint" }}>
        {rings.map((ring, ringIndex) => (
          <div
            key={ringIndex}
            className="hero-orbit-ring absolute inset-0"
            style={{
              animationDuration: `${ring.duration}s`,
              animationDirection: ring.direction === -1 ? "reverse" : "normal",
            }}
          >
            {ring.icons.map((Icon, i) => {
              const angle = (i / ring.icons.length) * 2 * Math.PI
              const x = ring.radius * Math.cos(angle)
              const y = ring.radius * Math.sin(angle)

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="rounded-xl border border-page-border bg-page-bg-alt p-3 shadow-md hover:scale-110">
                    <Icon size={22} className="text-toadster-green" />
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function ScrollReveal({ children, className, delay = 0, y = 16 }: ScrollRevealProps) {
  return (
    <div
      className={cn("scroll-reveal scroll-reveal-visible", className)}
      style={{
        ["--scroll-reveal-delay" as string]: `${delay}s`,
        ["--scroll-reveal-y" as string]: `${y}px`,
      }}
    >
      {children}
    </div>
  )
}

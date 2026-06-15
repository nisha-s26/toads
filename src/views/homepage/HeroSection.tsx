"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, type ComponentType } from "react"
import Link from "next/link"
import {
  Brain,
  Database,
  Cpu,
  BarChart3,
  Cloud,
  Workflow,
  Network,
  Bot,
  Server,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface Ring {
  radius: { desktop: number; mobile: number }
  duration: number
  direction: 1 | -1
  icons: ComponentType<{ size?: number; className?: string }>[]
}

const rings: Ring[] = [
  { radius: { desktop: 180, mobile: 80 }, duration: 18, direction: 1, icons: [Brain, Cpu, Bot, Network, Brain] },
  { radius: { desktop: 350, mobile: 180 }, duration: 28, direction: -1, icons: [Database, Cloud, Workflow, Server] },
  { radius: { desktop: 440, mobile: 240 }, duration: 40, direction: 1, icons: [BarChart3, Layers, Brain, Cpu, Brain, Cpu, Bot, Network] },
  { radius: { desktop: 550, mobile: 300 }, duration: 40, direction: -1, icons: [BarChart3, Layers, Brain, Cpu, Brain, Cpu, Bot, Network] },
]

const FADE_WORD_INTERVAL_MS = 2800
const FADE_DURATION_S = 0.55

function AnimatedFadeText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, FADE_WORD_INTERVAL_MS)

    return () => clearTimeout(timeout)
  }, [index, words.length])

  return (
    <span className="hero-accent inline-block min-h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION_S, ease: "easeInOut" }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function FadeText({ words }: { words: string[] }) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <span className="hero-accent">{words[0]}</span>
  }

  return <AnimatedFadeText words={words} />
}

interface OrbitsProps {
  variant: "desktop" | "mobile"
}

function Orbits({ variant }: OrbitsProps) {
  const containerSize = variant === "desktop" ? "w-[650px]" : "w-[320px]"
  const iconSize = variant === "desktop" ? 22 : 18
  const padding = variant === "desktop" ? "p-3" : "p-2"

  return (
    <div className={`relative ${containerSize}`} style={{ contain: "layout paint", willChange: "transform" }}>
      {rings.map((ring, ringIndex) => (
        <motion.div
          key={ringIndex}
          className="absolute inset-0"
          animate={{ rotate: ring.direction * 360 }}
          transition={{ repeat: Infinity, duration: ring.duration, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {ring.icons.map((Icon, i) => {
            const angle = (i / ring.icons.length) * 2 * Math.PI
            const radius = variant === "desktop" ? ring.radius.desktop : ring.radius.mobile
            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)
            return (
              <div
                key={i}
                className="absolute"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)" }}
              >
                <div className={`bg-page-bg-alt shadow-md border border-page-border rounded-xl ${padding} hover:scale-110`}>
                  <Icon size={iconSize} className="text-toadster-green" />
                </div>
              </div>
            )
          })}
        </motion.div>
      ))}
    </div>
  )
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [showOrbits, setShowOrbits] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback
    const handle = idle ? idle(() => setShowOrbits(true)) : window.setTimeout(() => setShowOrbits(true), 1200)
    return () => {
      if (typeof handle === "number") {
        const cancelIdle = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback
        if (cancelIdle) cancelIdle(handle)
        else clearTimeout(handle)
      }
    }
  }, [prefersReducedMotion])

  return (
    <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 pb-2 pt-[calc(4.75rem+env(safe-area-inset-top,0px))] sm:px-6">      <motion.div
        className="max-w-9xl mx-auto text-center relative z-20"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm hero-badge backdrop-blur-sm sm:mb-3 sm:px-4 sm:py-2 [@media(max-height:720px)]:mb-1.5 [@media(max-height:720px)]:px-2.5 [@media(max-height:720px)]:py-1"
          initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="w-2.5 h-2.5 bg-toadster-green rounded-full" />
          <span className="text-xs font-medium sm:text-sm">Agentic AI and Data Transformation</span>
        </motion.div>

        <motion.h1
          className="text-black dark:text-white w-full text-[clamp(1.65rem,4.2vw+0.75rem,4.5rem)] font-extrabold leading-[1.08] [@media(max-height:720px)]:text-[clamp(1.45rem,3.8vw+0.5rem,2.25rem)]"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Build Smarter Enterprises With
          <div className="mt-1.5 italic sm:mt-2 [@media(max-height:720px)]:mt-1">
            <FadeText
              words={["Custom AI Development", "Machine Learning", "AI Automation", "Predictive Analytics", ""]}
            />
          </div>
        </motion.h1>

        <motion.p
          className="text-black dark:text-white mx-auto mt-1.5 max-w-2xl text-sm font-semibold leading-snug sm:mt-2 sm:text-base md:text-lg [@media(max-height:720px)]:mt-1 [@media(max-height:720px)]:text-xs [@media(max-height:720px)]:sm:text-sm"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We engineer production-ready AI agents, LLM-powered applications, and scalable data platforms -
          purpose-built for startups, mid-market, and enterprise teams across globe.
        </motion.p>

        <motion.div
          className="mt-4 flex flex-col items-center justify-center gap-2.5 sm:mt-6 sm:flex-row sm:gap-3 [@media(max-height:720px)]:mt-3 [@media(max-height:720px)]:gap-2"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button asChild className="rounded-xl px-5 py-5 text-sm sm:px-6 sm:py-6 sm:text-base [@media(max-height:720px)]:px-4 [@media(max-height:720px)]:py-3.5 [@media(max-height:720px)]:text-xs">
            <Link href="/contact" title="Get Started">Get Free Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hero-outline-btn rounded-xl px-5 py-5 text-sm backdrop-blur-sm sm:px-6 sm:py-6 sm:text-base [@media(max-height:720px)]:px-4 [@media(max-height:720px)]:py-3.5 [@media(max-height:720px)]:text-xs"
          >
            <Link href="/services/ai-automation" title="View AI Solutions">Explore AI Solutions</Link>
          </Button>
        </motion.div>
      </motion.div>

      {showOrbits && !prefersReducedMotion && (
        <div
          className="hero-orbits pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-40 [@media(max-height:720px)]:hidden"
          aria-hidden="true"
        >
          <div className="hidden md:block">
            <Orbits variant="desktop" />
          </div>
          <div className="md:hidden">
            <Orbits variant="mobile" />
          </div>
        </div>
      )}
    </div>
  )
}

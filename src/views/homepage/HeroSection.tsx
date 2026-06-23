"use client"

import { useEffect, useState, useSyncExternalStore, type ComponentType } from "react"
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
const FADE_WORDS = ["Custom AI Development", "Machine Learning", "AI Automation", "Predictive Analytics", ""]

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

function AnimatedFadeText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false)
      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setVisible(true)
      }, 280)
    }, FADE_WORD_INTERVAL_MS)

    return () => clearTimeout(timeout)
  }, [index, words.length])

  return (
    <span className={`hero-accent inline-block min-h-[1.2em] hero-fade-word ${visible ? "hero-fade-word-visible" : ""}`}>
      {words[index]}
    </span>
  )
}

function FadeText({ words }: { words: string[] }) {
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  if (reduceMotion) {
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
    <div className={`relative ${containerSize}`} style={{ contain: "layout paint" }}>
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
        </div>
      ))}
    </div>
  )
}

export default function HeroSection() {
  const [showOrbits, setShowOrbits] = useState(false)
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  useEffect(() => {
    if (reduceMotion) return

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200))
    const handle = idle(() => setShowOrbits(true))
    return () => {
      if (typeof handle === "number") {
        const cancelIdle = window.cancelIdleCallback ?? clearTimeout
        cancelIdle(handle)
      }
    }
  }, [reduceMotion])

  return (
    <div className="relative z-10 flex w-full flex-col items-center px-4 pb-4 pt-[calc(5.75rem+env(safe-area-inset-top,0px))] sm:min-h-0 sm:flex-1 sm:justify-center sm:pb-[calc(var(--hero-bottom-offset,3.5rem)+0.25rem)] sm:px-6 sm:pt-[calc(4.75rem+env(safe-area-inset-top,0px))]">
      <div className="hero-enter relative z-20 mx-auto w-full max-w-9xl text-center py-10">
        <div className="hero-enter-delay-1 mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm hero-badge backdrop-blur-md sm:mb-3 sm:px-4 sm:py-2 [@media(max-height:720px)]:mb-1.5 [@media(max-height:720px)]:px-2.5 [@media(max-height:720px)]:py-1">
          <span className="h-2.5 w-2.5 rounded-full bg-toadster-green" />
          <span className="text-xs font-medium sm:text-sm">Agentic AI and Data Transformation</span>
        </div>

        <h1 className="hero-enter-delay-2 hero-title w-full text-[clamp(1.55rem,4vw+0.65rem,4.5rem)] font-extrabold leading-[1.08] drop-shadow-[0_1px_12px_rgba(255,255,255,0.85)] dark:drop-shadow-[0_1px_14px_rgba(0,0,0,0.55)] [@media(max-height:720px)]:text-[clamp(1.35rem,3.6vw+0.45rem,2.1rem)]">
          Build Smarter Enterprises With
          <div className="mt-1.5 italic sm:mt-2 [@media(max-height:720px)]:mt-1">
            <FadeText words={FADE_WORDS} />
          </div>
        </h1>

        <p className="hero-enter-delay-3 hero-subtitle mx-auto mt-1.5 max-w-2xl px-1 text-sm font-semibold leading-snug drop-shadow-[0_1px_10px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)] sm:mt-2 sm:px-0 sm:text-base md:text-lg [@media(max-height:720px)]:mt-1 [@media(max-height:720px)]:text-xs [@media(max-height:720px)]:sm:text-sm">
          We engineer production-ready AI agents, LLM-powered applications, and scalable data platforms -
          purpose-built for startups, mid-market, and enterprise teams across globe.
        </p>

        <div className="hero-enter-delay-4 mx-auto mt-4 flex w-full max-w-sm flex-col items-stretch justify-center gap-2.5 sm:mt-6 sm:max-w-none sm:flex-row sm:items-center sm:gap-3 [@media(max-height:720px)]:mt-3 [@media(max-height:720px)]:gap-2">
          <Button asChild className="w-full rounded-xl px-5 py-4 text-sm shadow-lg sm:w-auto sm:px-6 sm:py-6 sm:text-base [@media(max-height:720px)]:px-4 [@media(max-height:720px)]:py-3.5 [@media(max-height:720px)]:text-xs">
            <Link href="/contact" title="Get Started">Get Free Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hero-outline-btn w-full rounded-xl px-5 py-4 text-sm shadow-md backdrop-blur-md sm:w-auto sm:px-6 sm:py-6 sm:text-base [@media(max-height:720px)]:px-4 [@media(max-height:720px)]:py-3.5 [@media(max-height:720px)]:text-xs"
          >
            <Link href="/services/agentic-ai" title="View AI Solutions">Explore AI Solutions</Link>
          </Button>
        </div>
      </div>

      {showOrbits && !reduceMotion ? (
        <div
          className="hero-orbits pointer-events-none absolute inset-0 z-[1] hidden items-center justify-center opacity-40 md:flex [@media(max-height:720px)]:hidden"
          aria-hidden="true"
        >
          <Orbits variant="desktop" />
        </div>
      ) : null}
    </div>
  )
}

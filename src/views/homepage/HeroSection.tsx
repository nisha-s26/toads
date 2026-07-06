"use client"

import dynamic from "next/dynamic"
import { useEffect, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const DesktopHeroOrbits = dynamic(
  () => import("./DesktopHeroOrbits").then((mod) => mod.DesktopHeroOrbits),
  { ssr: false },
)

const FADE_WORD_INTERVAL_MS = 2800
const FADE_WORDS = ["Custom AI Development", "Machine Learning", "AI Automation", "Predictive Analytics"]

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

function subscribeDesktop(onStoreChange: () => void) {
  const media = window.matchMedia("(min-width: 768px)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getDesktopSnapshot() {
  return window.matchMedia("(min-width: 768px)").matches
}

function getDesktopServerSnapshot() {
  return false
}

function AnimatedFadeText({ words }: { words: string[] }) {
  const displayWords = words.filter((word) => word.length > 0)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (displayWords.length <= 1) return

    const timeout = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % displayWords.length)
    }, FADE_WORD_INTERVAL_MS)

    return () => window.clearTimeout(timeout)
  }, [index, displayWords.length])

  return (
    <span className="hero-accent inline-grid min-h-[1.2em] [grid-template-columns:1fr] [grid-template-rows:1fr]">
      {displayWords.map((word, wordIndex) => (
        <span
          key={word}
          aria-hidden={wordIndex !== index}
          className={`hero-fade-word col-start-1 row-start-1 inline-block ${wordIndex === index ? "hero-fade-word-visible" : ""}`}
        >
          {word}
        </span>
      ))}
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
    const firstWord = words.find((word) => word.length > 0) ?? words[0]
    return <span className="hero-accent">{firstWord}</span>
  }

  return <AnimatedFadeText words={words} />
}

export default function HeroSection() {
  const [showOrbits, setShowOrbits] = useState(false)
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktopSnapshot, getDesktopServerSnapshot)

  useEffect(() => {
    if (reduceMotion || !isDesktop) return

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200))
    const handle = idle(() => setShowOrbits(true))
    return () => {
      if (typeof handle === "number") {
        const cancelIdle = window.cancelIdleCallback ?? clearTimeout
        cancelIdle(handle)
      }
    }
  }, [isDesktop, reduceMotion])

  return (
    <div className="homepage-hero-content relative z-10 flex w-full flex-col items-center px-3 sm:min-h-0 sm:flex-1 sm:justify-center sm:px-4 sm:pb-[calc(var(--hero-bottom-offset,3.5rem)+0.25rem)] sm:pt-[calc(4.75rem+env(safe-area-inset-top,0px))] md:px-6">
      <div className="hero-enter relative z-20 mx-auto w-full max-w-9xl text-center py-20 sm:py-6 md:py-10">
        <div className="hero-enter-delay-1 mb-1.5 inline-flex max-w-[calc(100%-0.5rem)] items-center gap-1.5 rounded-full border px-2.5 py-1 shadow-sm hero-badge backdrop-blur-md sm:mb-3 sm:gap-2 sm:px-4 sm:py-2 [@media(max-height:720px)]:mb-1 [@media(max-height:720px)]:px-2 [@media(max-height:720px)]:py-0.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-toadster-green sm:h-2.5 sm:w-2.5" />
          <span className="text-[0.6875rem] font-medium leading-tight sm:text-sm">Agentic AI and Data Transformation</span>
        </div>

        <h1 className="hero-enter-delay-2 hero-title w-full text-[clamp(1.3rem,5.2vw+0.45rem,4.5rem)] font-extrabold leading-[1.06] drop-shadow-[0_1px_12px_rgba(255,255,255,0.85)] dark:drop-shadow-[0_1px_14px_rgba(0,0,0,0.55)] sm:leading-[1.08] [@media(max-height:720px)]:text-[clamp(1.2rem,4.8vw+0.35rem,2rem)]">
          Build Smarter Enterprises With
          <div className="mt-1 italic sm:mt-2 [@media(max-height:720px)]:mt-0.5">
            <FadeText words={FADE_WORDS} />
          </div>
        </h1>

        <p className="hero-enter-delay-3 hero-subtitle mx-auto mt-1.5 max-w-[18.5rem] px-0.5 text-xs font-semibold leading-snug drop-shadow-[0_1px_10px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)] sm:mt-2 sm:max-w-2xl sm:px-0 sm:text-sm md:max-w-4xl md:text-base lg:max-w-5xl lg:text-lg [@media(max-height:720px)]:mt-1 [@media(max-height:720px)]:text-[0.6875rem]">
          We engineer production-ready AI agents, LLM-powered applications, and scalable data platforms -
          purpose-built for startups, mid-market, and enterprise teams across globe.
        </p>

        <div className="hero-enter-delay-4 mx-auto mt-3 flex w-full flex-col items-center justify-center sm:mt-6 sm:flex-row sm:gap-3 [@media(max-height:720px)]:mt-2">
          <Button asChild className="w-auto rounded-xl px-5 py-3 text-sm shadow-lg sm:px-6 sm:py-6 sm:text-base [@media(max-height:720px)]:px-4 [@media(max-height:720px)]:py-2.5 [@media(max-height:720px)]:text-xs">
            <Link href="/contact" title="Get Started">Start Your Project</Link>
          </Button>
        </div>
      </div>

      {showOrbits && !reduceMotion && isDesktop ? <DesktopHeroOrbits /> : null}
    </div>
  )
}

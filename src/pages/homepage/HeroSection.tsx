import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, type ComponentType } from "react"
import { Link } from "react-router-dom"
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

function AnimatedTypewriter({ words }: { words: string[] }) {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, text.length + 1))
        if (text === word) setDeleting(true)
      } else {
        setText(word.substring(0, text.length - 1))
        if (text === "") {
          setDeleting(false)
          setIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, deleting ? 40 : 100)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span className="hero-accent">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function Typewriter({ words }: { words: string[] }) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <span className="hero-accent">{words[0]}</span>
  }

  return <AnimatedTypewriter words={words} />
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
    <section className="relative overflow-hidden sm:py-40 py-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-linear-to-b from-black/40 via-black/25 to-black/50" aria-hidden="true" />

      <motion.div
        className="max-w-7xl px-40 mx-auto px-4 text-center relative z-20"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-3 inline-flex items-center gap-2 px-4 py-2 rounded-full hero-badge backdrop-blur-sm border shadow-sm"
          initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="w-2.5 h-2.5 bg-toadster-green rounded-full" />
          <span className="text-sm font-medium">AI-Powered Digital Transformation</span>
        </motion.div>

        <motion.h1
          className="hero-title text-5xl md:text-7xl font-extrabold leading-tight"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Build Intelligent Systems with
          <div className="mt-3">
            <Typewriter
              words={["Data Science", "Machine Learning", "AI Automation", "Predictive Analytics"]}
            />
          </div>
        </motion.h1>

        <motion.p
          className="hero-subtitle mt-2 md:text-lg sm:text-md text-base font-extrabold max-w-2xl mx-auto leading-tight"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We design scalable AI systems, data pipelines, and machine learning platforms that power intelligent businesses.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button asChild style={{ padding: "1.5rem 2rem" }} className="rounded-xl px-6">
            <Link to="/contact" title="Get Started">Get Started</Link>
          </Button>
          <Button
            asChild
            style={{ padding: "1.5rem 2rem" }}
            variant="outline"
            className="rounded-xl px-6 hero-outline-btn backdrop-blur-sm"
          >
            <Link to="/services/ai-automation" title="View AI Solutions">View AI Solutions</Link>
          </Button>
        </motion.div>
      </motion.div>

      {showOrbits && !prefersReducedMotion && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-50"
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
    

    </section>
  )
}

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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
  Layers
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const rings = [
  {
    radius: { desktop: 180, mobile: 80 },
    duration: 18,
    direction: 1,
    icons: [Brain, Cpu, Bot, Network, Brain]
  },
  {
    radius: { desktop: 350, mobile: 180 },
    duration: 28,
    direction: -1,
    icons: [Database, Cloud, Workflow, Server]
  },
  {
    radius: { desktop: 440, mobile: 240 },
    duration: 40,
    direction: 1,
    icons: [BarChart3, Layers, Brain, Cpu, Brain, Cpu, Bot, Network]
  },
  {
    radius: { desktop: 550, mobile: 300 },
    duration: 40,
    direction: -1,
    icons: [BarChart3, Layers, Brain, Cpu, Brain, Cpu, Bot, Network]
  }
]


function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, text.length + 1))

        if (text === word) {
          setDeleting(true)
        }
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
    <span className="text-toadster-green">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function HeroSection() {
  const navigate = useNavigate();
  return (
   <section className="relative overflow-hidden sm:py-32 py-20">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="https://dey5irgcg4c8.cloudfront.net/assets/video/banner-home.mp4"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-[#050d18]/50 z-1" />
      {/* HERO CONTENT */}

      <motion.div
        className="max-w-7xl mx-auto px-6 text-center relative z-20 pt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Badge */}

        <motion.div
          className="mb-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2.5 h-2.5 bg-toadster-green rounded-full"></span>

          <span className="text-sm font-medium text-white">
            AI-Powered Digital Transformation
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Build Intelligent Systems with
          <div className="mt-3">
            <Typewriter
              words={[
                "Data Science",
                "Machine Learning",
                "AI Automation",
                "Predictive Analytics"
              ]}
            />
          </div>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          className="mt-6 md:text-lg sm:text-md text-base text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          We design scalable AI systems, data pipelines, and machine learning
          platforms that power intelligent businesses.
        </motion.p>

        {/* Buttons */}

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button style={{ padding: "1.5rem 2rem" }} className="rounded-xl px-6" onClick={() => navigate('/contact')}>
            Get Started
          </Button>

          <Button
            style={{ padding: "1.5rem 2rem" }}
            variant="outline"
            className="rounded-xl px-6 border-white/30 text-white hover:bg-white bg-transparent"
            onClick={() => navigate('/services/ai-automation')}
          >
            View AI Solutions
          </Button>
        </motion.div>
      </motion.div>

      {/* ORBIT ICONS */}

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-50"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      >
        {/* Desktop Orbits */}

        <div className="relative hidden md:block w-[650px]">
          {rings.map((ring, ringIndex) => (
            <motion.div
              key={ringIndex}
              className="absolute inset-0"
              animate={{ rotate: ring.direction * 360 }}
              transition={{
                repeat: Infinity,
                duration: ring.duration,
                ease: "linear"
              }}
            >
              {ring.icons.map((Icon, i) => {
                const angle = (i / ring.icons.length) * 2 * Math.PI
                const radius =
                  typeof ring.radius === "object"
                    ? ring.radius.desktop
                    : ring.radius

                const x = radius * Math.cos(angle)
                const y = radius * Math.sin(angle)

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)"
                    }}
                  >
                    <motion.div
                      className="bg-[#0a1628] shadow-md border border-white/10 rounded-xl p-3 hover:scale-110"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <Icon size={22} className="text-toadster-green" />
                    </motion.div>
                  </div>
                )
              })}
            </motion.div>
          ))}
        </div>

        {/* Mobile Orbits */}

        <div className="relative md:hidden w-[320px]">
          {rings.map((ring, ringIndex) => (
            <motion.div
              key={ringIndex}
              className="absolute inset-0"
              animate={{ rotate: ring.direction * 360 }}
              transition={{
                repeat: Infinity,
                duration: ring.duration,
                ease: "linear"
              }}
            >
              {ring.icons.map((Icon, i) => {
                const angle = (i / ring.icons.length) * 2 * Math.PI
                const radius =
                  typeof ring.radius === "object"
                    ? ring.radius.mobile
                    : ring.radius

                const x = radius * Math.cos(angle)
                const y = radius * Math.sin(angle)

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)"
                    }}
                  >
                    <motion.div
                      className="bg-[#0a1628] shadow-md border border-white/10 rounded-xl p-2 hover:scale-110"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <Icon size={18} className="text-toadster-green" />
                    </motion.div>
                  </div>
                )
              })}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
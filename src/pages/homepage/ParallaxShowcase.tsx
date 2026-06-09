import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight, Cpu, Gauge, ShieldCheck } from "lucide-react"

const STATS = [
  { value: "200+", label: "AI systems shipped", Icon: Cpu },
  { value: "99.9%", label: "Production uptime", Icon: Gauge },
  { value: "Zero-trust", label: "Security by design", Icon: ShieldCheck },
]

const TECH_IMAGE = "/parallax-bg.jpg"

const ParallaxShowcase = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Move the background slower than the scroll for the parallax effect.
  const imageY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"])

  return (
    <section
      ref={sectionRef}
      className="section-full-bleed relative isolate w-full overflow-hidden min-h-[50vh] flex items-center"
    >
      {/* Parallax image layer (oversized so the translate never reveals edges) */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: imageY }}
        className="absolute inset-x-0 -top-[18%] h-[136%] -z-10"
      >
        <img
          src={TECH_IMAGE}
          alt="Abstract AI technology circuit"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-40"
        />
      </motion.div>

      {/* Theme-adaptive overlays */}
      <div className="absolute inset-0 -z-10 parallax-overlay" />
      <div className="absolute inset-0 -z-10 parallax-grid opacity-30" />

      {/* Content */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: contentY }}
        className="relative z-10 mx-auto w-full max-w-9xl px-24 py-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-sm md:text-xl font-bold uppercase tracking-[0.35em] text-toadster-green"
        >
          Engineered for Scale
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl text-4xl md:text-6xl font-extrabold leading-[1.05] text-white"
        >
          From prototype to{" "}
          <span className="text-toadster-green">production-grade AI</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-base md:text-lg font-bold leading-relaxed text-white/80"
        >
          We architect intelligent systems on resilient data foundations—observable,
          secure, and built to perform under real-world load.
        </motion.p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          {STATS.map((stat, index) => {
            const Icon = stat.Icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/20 bg-white dark:bg-white/30 backdrop-blur-md p-5"
              >
                <span className="feature-icon mb-3 h-10 w-10">
                  <Icon size={18} />
                </span>
                <p className="text-2xl font-extrabold dark:text-white text-black">{stat.value}</p>
                <p className="mt-1 text-base dark:text-white text-black/70">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            to="/services/ai-development"
            title="Explore our AI engineering services"
            className="group inline-flex items-center gap-2 rounded-xl bg-toadster-green px-7 py-3 font-semibold text-toadster-green-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Explore Our Engineering
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ParallaxShowcase

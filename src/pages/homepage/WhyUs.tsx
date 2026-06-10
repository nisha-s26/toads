import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Database, ShieldCheck, Workflow, ArrowRight, ArrowUpRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const CARD_STYLES = {
  accent: "text-toadster-green",
  hoverTitle: "group-hover:text-toadster-green",
  iconGradient: "from-[#006600] to-[#1C3829] dark:from-[#2ECC71] dark:to-[#006600]",
  iconText: "text-white dark:text-black",
  mesh: "from-toadster-green/20 via-green-500/8 to-transparent",
  ring: "hover:border-toadster-green/40 hover:shadow-[0_18px_45px_-18px_rgba(0,102,0,0.35)] dark:hover:shadow-[0_18px_45px_-18px_rgba(46,204,113,0.3)]",
  line: "from-toadster-green to-green-400 dark:from-[#2ECC71] dark:to-green-300",
}

const FEATURES: {
  title: string
  description: string
  icon: LucideIcon
  tag: string
}[] = [
  {
    tag: "01",
    title: "Data-First Engineering",
    description:
      "Reliable pipelines, warehousing, and governance—so your data is clean, trusted, and ready for analytics & ML.",
    icon: Database,
  },
  {
    tag: "02",
    title: "AI-First Delivery",
    description:
      "From forecasting to GenAI, we build production-grade models with measurable impact—not demos.",
    icon: Brain,
  },
  {
    tag: "03",
    title: "MLOps & Monitoring",
    description:
      "Deploy, observe, and iterate faster with reproducible training, CI/CD, evaluation, and drift monitoring.",
    icon: Workflow,
  },
  {
    tag: "04",
    title: "Secure by Design",
    description:
      "Security & compliance baked in—access controls, encryption, and best practices across your data and AI stack.",
    icon: ShieldCheck,
  },
]

const STATS = [
  { value: "200+", label: "Systems shipped" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support" },
]

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) {
  const Icon = feature.icon

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-page-border",
        "bg-page-card/70 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1",
        CARD_STYLES.ring,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          CARD_STYLES.mesh,
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-1 -top-2 select-none text-5xl font-black leading-none opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.12]",
          CARD_STYLES.accent,
        )}
      >
        {feature.tag}
      </div>

      <div className="relative flex h-full flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br shadow-md",
              "transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
              CARD_STYLES.iconGradient,
            )}
          >
            <Icon size={20} className={CARD_STYLES.iconText} strokeWidth={2} />
          </div>
          <ArrowUpRight
            size={16}
            className={cn(
              "mt-1 shrink-0 text-page-fg-muted opacity-0 transition-all duration-300",
              "group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
              CARD_STYLES.accent,
            )}
          />
        </div>

        <div>
          <h3
            className={cn(
              "font-bold text-page-fg transition-colors duration-300",
              CARD_STYLES.hoverTitle,
            )}
          >
            {feature.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-page-fg-muted">{feature.description}</p>
        </div>

        <div
          className={cn(
            "absolute bottom-0 left-0 h-[3px] w-0 bg-linear-to-r transition-all duration-500 group-hover:w-full",
            CARD_STYLES.line,
          )}
        />
      </div>
    </motion.div>
  )
}

const WhyUs = () => {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { amount: 0.25, once: true })

  return (
    <section ref={ref} className="relative py-16 md:py-20">
      <div className="mx-auto max-w-9xl px-4 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Left — copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] section-eyebrow md:text-base">
              Why Us
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-page-fg md:text-5xl lg:text-[3.25rem]">
              Why Choose{" "}
              <span className="text-toadster-green">Toadster</span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-page-fg-subtle lg:mx-0 md:text-lg">
              We don&apos;t just build software—we engineer intelligent systems centered around
              data quality, ML reliability, and production-grade delivery.
            </p>

            {/* Mini stats row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl font-extrabold text-toadster-green">{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-page-fg-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to="/about"
                title="Learn more about Toadster"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:-translate-y-0.5"
              >
                Learn About Us
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services/ai-development"
                title="View our AI development services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-page-border-strong px-7 py-3.5 font-semibold text-page-fg transition-colors hover:bg-page-fg/5"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right — 2×2 feature grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.15 },
              },
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs

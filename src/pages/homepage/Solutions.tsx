import {
  Brain,
  Code2,
  Layers,
  Database,
  Cloud,
  Sparkles,
  Bot,
  LayoutGrid,
  ArrowUpRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const solutions: {
  icon: LucideIcon
  title: string
  desc: string
  to: string
  image: string
}[] = [
  {
    icon: Brain,
    title: "AI / ML Solutions",
    desc: "Custom machine learning models, NLP systems, and intelligent automation for enterprise.",
    to: "/services/machine-learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Modern web applications built with React, Next.js, Node.js, and scalable cloud infrastructure.",
    to: "/services/ai-development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Layers,
    title: "MERN Development",
    desc: "MongoDB, Express, React, Node.js — complete JavaScript ecosystem for rapid development.",
    to: "/services/ai-development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: LayoutGrid,
    title: "CRM Systems",
    desc: "Custom CRM solutions that streamline customer relationships and boost sales efficiency.",
    to: "/services/custom-ai-solutions",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Large-scale data pipelines, ETL processes, and analytics platforms built for real-time insights.",
    to: "/services/ai-data-analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Cloud-native architecture, CI/CD pipelines, and infrastructure automation across AWS, GCP, and Azure.",
    to: "/services/ai-integration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "SaaS Development",
    desc: "Multi-tenant SaaS platforms with subscription management, analytics, and scalable architecture.",
    to: "/services/custom-ai-solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Bot,
    title: "Automation Systems",
    desc: "Intelligent process automation that reduces costs and eliminates repetitive manual workflows.",
    to: "/services/intelligent-automation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
]

function SolutionTile({
  item,
  index,
}: {
  item: (typeof solutions)[0]
  index: number
}) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.07 }}
      viewport={{ once: true }}
    >
      <Link
        to={item.to}
        title={item.title}
        className={cn(
          "group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-3xl border border-page-border",
          "bg-white/10 shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12]",
          "dark:border-white/14",
          "dark:shadow-[0_12px_40px_-14px_rgba(0,0,0,0.9),0_4px_20px_-6px_rgba(46,204,113,0.12),inset_0_1px_0_0_rgba(255,255,255,0.06)]",
          "dark:hover:border-[#2ECC71]/45",
          "dark:hover:shadow-[0_22px_55px_-16px_rgba(0,0,0,0.95),0_0_48px_-12px_rgba(46,204,113,0.28)]",
        )}
      >
        {/* Visual header panel with background image */}
        <div className="relative flex h-[200px] shrink-0 items-center justify-center overflow-hidden md:h-[220px]">
          <img
            src={item.image}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-br from-[#0a1f12]/88 via-[#1C3829]/72 to-[#0d2818]/82 dark:from-black/80 dark:via-[#122818]/75 dark:to-black/85"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[#2ECC71]/10 transition-colors duration-500 group-hover:bg-[#2ECC71]/5"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-radial-[circle_at_50%_120%] from-[#2ECC71]/20 via-transparent to-transparent"
          />
          <Icon
            aria-hidden
            size={100}
            strokeWidth={1}
            className="absolute text-white/10 transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className={cn(
              "relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#2ECC71]/45",
              "bg-black/40 backdrop-blur-md transition-all duration-500",
              "group-hover:border-[#2ECC71]/70 group-hover:bg-black/50",
            )}
          >
            <Icon size={34} className="text-[#2ECC71]" strokeWidth={1.75} />
          </div>
        </div>

        {/* Content panel */}
        <div className="relative flex flex-1 flex-col justify-center p-6 md:p-8">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="text-lg font-bold text-page-fg transition-colors duration-300 group-hover:text-toadster-green md:text-xl">
              {item.title}
            </h3>
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-page-border",
                "bg-page-bg-alt/80 text-page-fg-muted transition-all duration-300",
                "group-hover:border-toadster-green/40 group-hover:bg-toadster-green group-hover:text-toadster-green-foreground",
              )}
            >
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>

          <p className="text-base leading-relaxed text-page-fg-muted dark:text-page-fg-subtle">
            {item.desc}
          </p>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-toadster-green opacity-70 transition-opacity duration-300 group-hover:opacity-100">
            View solution
          </p>

          <div
            aria-hidden
            className="absolute bottom-0 left-0 h-[3px] w-0 bg-linear-to-r from-[#006600] to-[#2ECC71] transition-all duration-500 group-hover:w-full"
          />
        </div>
      </Link>
    </motion.div>
  )
}

export default function Solutions() {
  return (
    <section className="relative overflow-hidden bg-page-bg pb-20 pt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-toadster-green/5 blur-3xl dark:bg-toadster-green/10"
      />

      <div className="relative mx-auto max-w-9xl px-4 lg:px-20">
        <div className="mb-14 text-center">
          <p className="text-lg font-bold tracking-[0.35em] section-eyebrow">SOLUTIONS</p>
          <h2 className="mt-3 text-4xl font-bold text-page-fg md:text-6xl">
            What We <span className="text-toadster-green">Deliver</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-page-fg-subtle">
            Comprehensive technology solutions from concept to scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((item, index) => (
            <SolutionTile key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/services/ai-development"
            title="Explore all AI development services"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:-translate-y-0.5"
          >
            Explore All Services
            <ArrowUpRight size={18} />
          </Link>
          <Link
            to="/contact"
            title="Talk to our team about your project"
            className="inline-flex items-center gap-2 rounded-xl border border-page-border-strong px-7 py-3 font-semibold text-page-fg transition-colors hover:bg-page-fg/5"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}

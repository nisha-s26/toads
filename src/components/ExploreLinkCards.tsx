"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  ArrowUpRight,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  MessageSquare,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ExploreItem {
  icon: LucideIcon
  title: string
  desc: string
  to: string
  tag: string
  accent: string
  hoverTitle: string
  iconGradient: string
  mesh: string
  ring: string
  line: string
  arrow: string
}

const EXPLORE_ITEMS: ExploreItem[] = [
  {
    icon: Brain,
    title: "Agentic AI Services",
    desc: "Autonomous agents that plan, execute, and adapt at enterprise scale.",
    to: "/services/agentic-ai",
    tag: "01",
    accent: "text-violet-400",
    hoverTitle: "group-hover:text-violet-600 dark:group-hover:text-violet-300",
    iconGradient: "from-violet-500 to-fuchsia-600",
    mesh: "from-violet-600/25 via-fuchsia-500/10 to-transparent",
    ring: "group-hover:border-violet-400/40 group-hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.55)]",
    line: "from-violet-400 to-fuchsia-500",
    arrow: "group-hover:bg-violet-500 group-hover:text-white",
  },
  {
    icon: Sparkles,
    title: "RAG Development",
    desc: "Retrieval-augmented generation and knowledge systems for enterprise AI.",
    to: "/services/rag-development",
    tag: "02",
    accent: "text-amber-400",
    hoverTitle: "group-hover:text-amber-600 dark:group-hover:text-amber-300",
    iconGradient: "from-amber-400 to-orange-500",
    mesh: "from-amber-500/25 via-orange-400/10 to-transparent",
    ring: "group-hover:border-amber-400/40 group-hover:shadow-[0_20px_50px_-20px_rgba(251,191,36,0.45)]",
    line: "from-amber-400 to-orange-500",
    arrow: "group-hover:bg-amber-400 group-hover:text-black",
  },
  {
    icon: Bot,
    title: "AI Development",
    desc: "Practical AI solutions - ML, GenAI, NLP, vision, and MLOps.",
    to: "/services/ai-development",
    tag: "03",
    accent: "text-cyan-400",
    hoverTitle: "group-hover:text-cyan-600 dark:group-hover:text-cyan-300",
    iconGradient: "from-cyan-400 to-blue-500",
    mesh: "from-cyan-500/25 via-sky-400/10 to-transparent",
    ring: "group-hover:border-cyan-400/40 group-hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.45)]",
    line: "from-cyan-400 to-blue-500",
    arrow: "group-hover:bg-cyan-400 group-hover:text-black",
  },
  {
    icon: MessageSquare,
    title: "Read the Blog",
    desc: "Research, tutorials, and engineering insights from our team.",
    to: "/blogs",
    tag: "04",
    accent: "text-rose-400",
    hoverTitle: "group-hover:text-rose-600 dark:group-hover:text-rose-300",
    iconGradient: "from-rose-500 to-pink-600",
    mesh: "from-rose-500/25 via-pink-400/10 to-transparent",
    ring: "group-hover:border-rose-400/40 group-hover:shadow-[0_20px_50px_-20px_rgba(244,63,94,0.45)]",
    line: "from-rose-400 to-pink-500",
    arrow: "group-hover:bg-rose-500 group-hover:text-white",
  },
  {
    icon: Briefcase,
    title: "We're Hiring",
    desc: "Join our team of engineers, data scientists, and product builders.",
    to: "/careers",
    tag: "05",
    accent: "text-blue-400",
    hoverTitle: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    iconGradient: "from-blue-500 to-indigo-600",
    mesh: "from-blue-600/25 via-indigo-500/10 to-transparent",
    ring: "group-hover:border-blue-400/40 group-hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.45)]",
    line: "from-blue-400 to-indigo-500",
    arrow: "group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    icon: BookOpen,
    title: "About Toadster",
    desc: "Get to know our mission, values, and the people behind the work.",
    to: "/about",
    tag: "06",
    accent: "text-orange-400",
    hoverTitle: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    iconGradient: "from-orange-500 to-red-500",
    mesh: "from-orange-500/25 via-red-400/10 to-transparent",
    ring: "group-hover:border-orange-400/40 group-hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.45)]",
    line: "from-orange-400 to-red-500",
    arrow: "group-hover:bg-orange-500 group-hover:text-white",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

export function ExploreLinkCards() {
  return (
    <section className="max-w-9xl mx-20 px-4 pb-20">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-black dark:text-white">
          While You&apos;re Here
        </p>
        <h2 className="text-2xl font-bold text-page-fg md:text-3xl">Explore Our Work</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-page-fg-muted dark:text-white/70">
          Browse our top services, recent insights, and open roles while you wait.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {EXPLORE_ITEMS.map((card) => {
          const Icon = card.icon
          return (
            <motion.div key={card.title} variants={item}>
              <Link
                href={card.to}
                title={card.title}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-page-border",
                  "bg-page-card/80 backdrop-blur-sm transition-all duration-500",
                  "hover:-translate-y-1.5",
                  card.ring,
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    card.mesh,
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-2 -top-3 select-none text-7xl font-black leading-none opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]",
                    card.accent,
                  )}
                >
                  {card.tag}
                </div>

                <div className="relative flex flex-1 flex-col p-6">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg",
                        "transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                        card.iconGradient,
                      )}
                    >
                      <Icon size={22} className="text-white" strokeWidth={2} />
                    </div>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-page-border",
                        "bg-page-bg-alt/80 text-page-fg-muted transition-all duration-300",
                        card.arrow,
                      )}
                    >
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>

                  <h3 className={cn("font-bold text-page-fg transition-colors duration-300", card.hoverTitle)}>
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-page-fg-muted">
                    {card.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    <span className={cn("text-xs font-bold tracking-widest uppercase", card.accent)}>
                      Explore
                    </span>
                    <div
                      className={cn(
                        "h-px flex-1 bg-page-border transition-all duration-500 group-hover:bg-linear-to-r",
                        card.line,
                      )}
                    />
                  </div>
                </div>

                <div
                  className={cn(
                    "absolute bottom-0 left-0 h-[3px] w-0 bg-linear-to-r transition-all duration-500 group-hover:w-full",
                    card.line,
                  )}
                />
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

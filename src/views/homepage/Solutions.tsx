"use client"

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
import Link from "next/link"
import { cn } from "@/lib/utils"

const solutions: {
  icon: LucideIcon
  title: string
  desc: string
  to: string
}[] = [
  {
    icon: Brain,
    title: "AI / ML Solutions",
    desc: "Custom machine learning models, NLP systems, and intelligent automation for enterprise.",
    to: "/services/ai-development",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Modern web applications built with React, Next.js, Node.js, and scalable cloud infrastructure.",
    to: "/services/software-development",
  },
  {
    icon: Layers,
    title: "MERN Development",
    desc: "MongoDB, Express, React, Node.js - complete JavaScript ecosystem for rapid development.",
    to: "/services/web-development",
  },
  {
    icon: LayoutGrid,
    title: "CRM Systems",
    desc: "Custom CRM solutions that streamline customer relationships and boost sales efficiency.",
    to: "/services/software-development",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Large-scale data pipelines, ETL processes, and analytics platforms built for real-time insights.",
    to: "/services/ai-development",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Cloud-native architecture, CI/CD pipelines, and infrastructure automation across AWS, GCP, and Azure.",
    to: "/services/devops",
  },
  {
    icon: Sparkles,
    title: "SaaS Development",
    desc: "Multi-tenant SaaS platforms with subscription management, analytics, and scalable architecture.",
    to: "/services/saas-app-development",
  },
  {
    icon: Bot,
    title: "Automation Systems",
    desc: "Intelligent process automation that reduces costs and eliminates repetitive manual workflows.",
    to: "/services/agentic-ai",
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
      className="h-full"
    >
      <Link
        href={item.to}
        title={item.title}
        className={cn(
          "capability-card-surface group flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 md:p-7",
        )}
      >
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-5 flex items-start justify-between gap-4">
            <span
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80",
                "bg-white/70 text-slate-700 transition-all duration-300",
                "group-hover:border-slate-300 group-hover:bg-white",
              )}
            >
              <Icon size={22} strokeWidth={1.75} />
            </span>
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/80",
                "bg-white/80 text-slate-600 transition-all duration-300",
                "group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white",
              )}
            >
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
            {item.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">{item.desc}</p>

          <p className="mt-auto pt-5 font-mono text-xs uppercase tracking-[0.2em] text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
            View solution
          </p>

          <div
            aria-hidden
            className="absolute bottom-0 left-0 h-[3px] w-0 bg-linear-to-r from-slate-300 to-slate-500 transition-all duration-500 group-hover:w-full"
          />
        </div>
      </Link>
    </motion.div>
  )
}

export default function Solutions() {
  return (
    <section className="relative pb-20 pt-10">
      <div className="mx-auto max-w-9xl px-4 lg:px-20">
        <div className="mb-14 text-center">
          <p className="section-eyebrow-heading text-2xl font-bold tracking-[0.35em]">SOLUTIONS</p>
          <h2 className="mt-3 text-4xl font-bold text-page-fg md:text-6xl">
            What We <span className="text-toadster-green">Deliver</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-page-fg-subtle">
            Comprehensive technology solutions from concept to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {solutions.map((item, index) => (
            <SolutionTile key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/services/ai-development"
            title="Explore all AI development services"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:-translate-y-0.5"
          >
            Explore All Services
            <ArrowUpRight size={18} />
          </Link>
          <Link
            href="/contact"
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

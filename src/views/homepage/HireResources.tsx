"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Brain,
  Layers,
  Server,
  BarChart3,
  Shield,
  Code2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/ScrollReveal"

type HireRole = {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  href: string
}

const HIRE_ROLES: HireRole[] = [
  {
    icon: Brain,
    title: "AI / ML Engineers",
    description:
      "LLM integration, RAG pipeline development, fine-tuning, and agentic AI systems - built for production, not just demos. Specialists in on-demand AI model integration and custom LLM deployment.",
    tags: ["LLM", "RAG", "MLOps"],
    href: "/hire/ai-ml-engineers",
  },
  {
    icon: Layers,
    title: "Full Stack Developers",
    description:
      "From pixel-perfect React frontends to robust APIs - developers who ship AI-powered web applications and scalable SaaS backends that other developers don't dread inheriting.",
    tags: ["React", "Node", "Python"],
    href: "/hire/fullstack-developers",
  },
  {
    icon: Server,
    title: "DevOps & Cloud Engineers",
    description:
      "CI/CD, Kubernetes, multi-cloud infrastructure - specialists in AI workload orchestration and cloud cost optimisation for ML teams who set things up right the first time.",
    tags: ["AWS", "GCP", "Kubernetes"],
    href: "/hire/mlops-engineers",
  },
  {
    icon: BarChart3,
    title: "Data Scientists",
    description:
      "Experts in business intelligence for AI startups and predictive analytics consulting - people who turn messy data into decisions, not just dashboards nobody opens after the first sprint.",
    tags: ["Python", "SQL", "Analytics"],
    href: "/hire/data-engineers",
  },
  {
    icon: Shield,
    title: "AI Security Engineers",
    description:
      "Experts in LLM security and prompt injection defence, AI model red-teaming, and compliance-ready AI governance frameworks - built for teams where a breach or model failure isn't an option.",
    tags: ["AI RedTeam", "SOC2", "LLM Safety"],
    href: "/hire/dedicated-resources",
  },
  {
    icon: Code2,
    title: "Python Developers",
    description:
      "Modern digital solutions require more than just code. Our Python specialists deliver scalable backend systems, API integrations, workflow automation, data-driven applications, and cloud-ready architectures built for growth.",
    tags: ["Python", "Django", "FastAPI"],
    href: "/hire/python-developers",
  },
]

function HireRoleCard({ role, index }: { role: HireRole; index: number }) {
  const Icon = role.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={role.href}
        title={`Hire ${role.title}`}
        className="hire-role-card group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-7"
      >
        <div className="mb-4 flex min-h-11 items-center justify-between gap-3">
          <h3 className="min-w-0 flex-1 pr-1 text-lg font-bold leading-snug text-slate-900 dark:text-black">
            {role.title}
          </h3>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
            <Icon size={22} strokeWidth={2} />
          </span>
        </div>

        <div className="flex-1">
          <p className="text-sm leading-relaxed text-slate-700 md:text-[0.9375rem] dark:text-black/80">
            {role.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {role.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200/80 bg-slate-100/90 px-2.5 py-0.5 text-xs font-semibold text-slate-800 dark:border-slate-300/60 dark:bg-white/55 dark:text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}

export default function HireResources() {
  return (
    <section id="hire-resources" className="homepage-snap-section relative flex flex-col justify-center pt-4">
      <div className="mx-auto max-w-9xl px-4 lg:px-20">
        <ScrollReveal className="mb-12 text-center md:mb-14">
          {/* <p className="section-eyebrow-heading text-2xl font-normal tracking-[0.35em]">
            HIRE <span className="font-extrabold">RESOURCES</span>
          </p> */}
          <h2 className="mt-4 text-5xl font-extrabold md:text-6xl">
            <span className="text-page-fg">Hire </span>
            <span className="text-toadster-green">Resources</span>
          </h2>
          <p className="mx-auto mt-4 max-w-9xl text-xl text-page-fg-muted">
            Need a vetted remote AI engineer, ML specialist, or growth expert - without the overhead
            of a full-time hire? Toadster places pre-screened specialists into your team, your
            tools, and your sprint cadence. Most engagements go from brief to kickoff in under a
            week.
          </p>
          <p className="mx-auto mt-4 max-w-9xl text-lg text-page-fg-subtle">
            Browse the roles below to find the right specialist for your team - most engagements go
            from brief to kickoff in under a week.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {HIRE_ROLES.map((role, index) => (
            <HireRoleCard key={role.title} role={role} index={index} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="section-full-bleed mt-14 md:mt-16"
      >
        <div className="hire-resources-cta w-full">
          <div className="relative z-10 mx-auto grid max-w-9xl items-center gap-6 px-4 pt-10 sm:px-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10 md:px-12 md:pt-12 lg:px-20">
              <div className="mx-auto flex shrink-0 items-end justify-center md:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hire-resources-employee.png"
                  alt="Toadster specialist helping you choose the right hire resource"
                  width={408}
                  height={612}
                  className="h-[180px] w-auto object-contain md:h-[300px] lg:h-[340px]"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl lg:text-4xl dark:text-black">
                  Not sure which role fits?
                  <span className="text-slate-700 dark:text-black/80">Let&apos;s figure it out.</span>
                </h3>
                <p className="mt-4 max-w-5xl text-base leading-relaxed text-slate-700 md:text-lg dark:text-black/80">
                  We&apos;ve matched engineers, analysts, and AI specialists at companies ranging
                  from two-person startups to teams of 500 - across{" "}
                  <strong className="font-semibold text-slate-900 dark:text-black">
                    AI product development
                  </strong>
                  ,{" "}
                  <strong className="font-semibold text-slate-900 dark:text-black">
                    search visibility strategy
                  </strong>
                  , and{" "}
                  <strong className="font-semibold text-slate-900 dark:text-black">
                    MLOps infrastructure
                  </strong>
                  . Tell us what you&apos;re trying to build or fix, and we&apos;ll match you with
                  someone who&apos;s done exactly that. Most matches happen within 48 hours.
                </p>
                <Link
                  href="/hire/dedicated-resources"
                  title="Explore all hire resources"
                  className={cn(
                    "mt-8 w-fit inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold",
                    "text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-md",
                  )}
                >
                  Explore All Resources
                  <ArrowRight size={16} />
                </Link>
              </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

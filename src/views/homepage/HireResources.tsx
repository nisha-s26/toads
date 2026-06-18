"use client"

import Link from "next/link"
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
    <div className="scroll-reveal-stagger h-full" style={{ ["--stagger-index" as string]: index }}>
      <Link
        href={role.href}
        title={`Hire ${role.title}`}
        className="hire-role-card group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-7"
      >
        <div className="capability-card-header">
          <div className="flex min-h-11 items-center justify-between gap-3">
            <h3 className="min-w-0 flex-1 pr-1 text-lg font-bold leading-snug text-slate-900 dark:text-black">
              {role.title}
            </h3>
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
              <Icon size={22} strokeWidth={2} />
            </span>
          </div>
          <span className="capability-card-heading-rule" aria-hidden="true" />
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
    </div>
  )
}

export default function HireResources() {
  return (
    <section id="hire-resources" className="homepage-snap-section relative flex flex-col justify-center px-4 pb-8 pt-6 sm:pt-4">
      <div className="mx-auto max-w-9xl px-4 lg:px-20">
        <ScrollReveal className="mb-12 text-center md:mb-14">
          {/* <p className="section-eyebrow-heading text-2xl font-normal tracking-[0.35em]">
            HIRE <span className="font-extrabold">RESOURCES</span>
          </p> */}
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-page-fg">Hire </span>
            <span className="text-toadster-green">Resources</span>
          </h2>
          <p className="mx-auto mt-4 max-w-9xl text-base text-page-fg-muted sm:text-lg md:text-xl">
            Need a vetted remote AI engineer, ML specialist, or growth expert - without the overhead
            of a full-time hire? Toadster places pre-screened specialists into your team, your
            tools, and your sprint cadence. Most engagements go from brief to kickoff in under a
            week.
          </p>
          <p className="mx-auto mt-4 max-w-9xl text-sm text-page-fg-subtle sm:text-base md:text-lg">
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

      <ScrollReveal className="section-full-bleed mt-14 md:mt-16">
        <div className="mx-auto max-w-9xl px-4 lg:px-20">
          <div className="hire-resources-cta relative overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14">
            <h3 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              Not sure which role fits? Let&apos;s figure it out.
            </h3>
            <p className="mx-auto mt-4 w-[85%] text-base leading-relaxed text-white/80 md:text-lg">
              We&apos;ve matched engineers, analysts, and AI specialists at companies ranging from
              two-person startups to teams of 500 - across{" "}
              <strong className="font-semibold text-white">AI product development</strong>,{" "}
              <strong className="font-semibold text-white">search visibility strategy</strong>, and{" "}
              <strong className="font-semibold text-white">MLOps infrastructure</strong>. Tell us
              what you&apos;re trying to build or fix, and we&apos;ll match you with someone
              who&apos;s done exactly that. Most matches happen within 48 hours.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/hire/dedicated-resources"
                title="Explore all hire resources"
                className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full border border-white/90 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore All Resources
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

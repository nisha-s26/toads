"use client"

import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Layers,
  Server,
  Code2,
  Smartphone,
  Database,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { HireRoleCard } from "@/components/homepage/HireRoleCard"

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
    title: "AI / ML Developers",
    description:
      "LLM integration, RAG pipeline development, fine-tuning, and agentic AI systems - built for production, not just demos. Specialists in on-demand AI model integration and custom LLM deployment.",
    tags: ["LLM", "RAG", "MLOps"],
    href: "/hire/ai-ml-developers",
  },
  {
    icon: Layers,
    title: "Full Stack Developers",
    description:
      "From pixel-perfect React frontends to robust APIs - developers who ship AI-powered web applications and scalable SaaS backends that other developers don't dread inheriting.",
    tags: ["React", "Node", "Python"],
    href: "/hire/full-stack-developers",
  },
  {
    icon: Server,
    title: "DevOps Engineers",
    description:
      "CI/CD, Kubernetes, multi-cloud infrastructure - specialists in AI workload orchestration and cloud cost optimisation for ML teams who set things up right the first time.",
    tags: ["AWS", "GCP", "Kubernetes"],
    href: "/hire/devops-engineers",
  },
  {
    icon: Code2,
    title: "Software Developers",
    description:
      "Web, backend, cloud, and AI software engineering - dedicated developers who integrate into your sprints and deliver production-ready code from day one.",
    tags: ["Web", "API", "Cloud"],
    href: "/hire/software-developers",
  },
  {
    icon: Smartphone,
    title: "React Native Developers",
    description:
      "Cross-platform iOS and Android apps from a shared codebase - mobile engineers who ship to both app stores without maintaining two separate native teams.",
    tags: ["iOS", "Android", "Expo"],
    href: "/hire/react-native-developers",
  },
  {
    icon: Database,
    title: "MERN Developers",
    description:
      "MongoDB, Express, React, and Node.js specialists who build scalable full-stack JavaScript web applications from MVP through production.",
    tags: ["MongoDB", "Express", "React"],
    href: "/hire/mern-developers",
  },
]

export default function HireResources() {
  return (
    <section id="hire-resources" className="homepage-snap-section relative flex flex-col justify-center px-4 pb-8 pt-0 sm:px-0">
      <div className="hire-page-container">
        <ScrollReveal className="mb-8 text-center md:mb-10">
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            <span className="text-black dark:text-white">Hire </span>
            <span className="text-toadster-green">Dedicated Resources</span>
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-page-fg-muted sm:text-base md:text-lg">
            Scale your team with pre-vetted developers and engineers who embed directly into your workflow -
            onboarded in days, not months.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIRE_ROLES.map((role, index) => (
            <ScrollReveal key={role.title} delay={index * 0.08}>
              <HireRoleCard
                icon={role.icon}
                title={role.title}
                description={role.description}
                tags={role.tags}
                href={role.href}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-14 md:mt-16">
          <div className="hire-resources-cta relative overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14">
            <h3 className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-white md:text-3xl">
              Need a different role or a full dedicated pod?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
              Browse all 11 resource types - mobile, backend, AI/ML, DevOps, and more - or tell us what you&apos;re
              building and we&apos;ll shortlist candidates within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/hire-resources"
                className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-toadster-green shadow-md transition-all hover:-translate-y-0.5 hover:bg-white/90 dark:bg-primary dark:text-white dark:shadow-md dark:ring-1 dark:ring-white/15 dark:hover:bg-primary-hover"
              >
                View All Resources
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full border border-white/90 px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

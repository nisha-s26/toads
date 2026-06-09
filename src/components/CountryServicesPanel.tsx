import {
  ArrowUpRight,
  Bot,
  Brain,
  Building2,
  Database,
  Layers,
  Sparkles,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { ScrollReveal } from "@/components/ScrollReveal"
import { TECH_IMAGES } from "@/constants/countryTechImages"
import { cn } from "@/lib/utils"

interface CountryServicesPanelProps {
  title: string
  services: string[]
  sectorsTitle?: string
  sectors?: string[]
}

const SERVICE_META: Record<string, { icon: LucideIcon; href?: string; image: string }> = {
  "Agentic AI": { icon: Bot, href: "/services/agentic-ai", image: TECH_IMAGES.aiNeural },
  "Agentic AI for Financial Services": {
    icon: Bot,
    href: "/services/agentic-ai",
    image: TECH_IMAGES.fintech,
  },
  "Generative AI & LLM Development": {
    icon: Sparkles,
    href: "/services/generative-ai",
    image: TECH_IMAGES.llm,
  },
  "Generative AI for Enterprise": {
    icon: Sparkles,
    href: "/services/generative-ai",
    image: TECH_IMAGES.llm,
  },
  "AI Development": { icon: Brain, href: "/services/ai-development", image: TECH_IMAGES.code },
  "Machine Learning": {
    icon: Database,
    href: "/services/machine-learning",
    image: TECH_IMAGES.data,
  },
  "AI Integration": { icon: Layers, href: "/services/ai-integration", image: TECH_IMAGES.cloud },
  "Intelligent Automation": {
    icon: Workflow,
    href: "/services/intelligent-automation",
    image: TECH_IMAGES.automation,
  },
  "Staff Augmentation": { icon: Users, image: TECH_IMAGES.team },
  "Dedicated Resources": { icon: UserCheck, image: TECH_IMAGES.team },
  "LLM Application Development": {
    icon: Sparkles,
    href: "/services/llm-development",
    image: TECH_IMAGES.circuit,
  },
}

function getServiceMeta(name: string) {
  return SERVICE_META[name] ?? { icon: Sparkles, image: TECH_IMAGES.aiNeural }
}

function ServiceCard({ name, index }: { name: string; index: number }) {
  const { icon: Icon, href, image } = getServiceMeta(name)
  const tag = String(index + 1).padStart(2, "0")

  const card = (
    <div
      className={cn(
        "group relative flex h-full min-h-[168px] flex-col justify-between overflow-hidden rounded-2xl border border-page-border p-4",
        "transition-all duration-500 hover:-translate-y-1",
        "hover:border-toadster-green/45 hover:shadow-[0_18px_45px_-16px_rgba(46,204,113,0.35)]",
      )}
    >
      {/* Background image */}
      <img
        src={image}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient + dark overlay stack */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-br from-[#0a1f12]/92 via-[#0d2818]/88 to-[#051408]/95"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[#2ECC71]/10 transition-colors duration-500 group-hover:bg-[#2ECC71]/18"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-radial-[circle_at_80%_0%] from-[#2ECC71]/25 via-transparent to-transparent opacity-60"
      />

      <div className="relative flex items-start justify-between gap-3">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#2ECC71]">{tag}</span>
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20",
            "bg-white/10 text-white backdrop-blur-sm transition-all duration-300",
            "group-hover:border-[#2ECC71]/60 group-hover:bg-[#2ECC71] group-hover:text-black",
          )}
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <div className="relative mt-4 flex items-end gap-3">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#2ECC71]/30",
            "bg-linear-to-br from-[#006600] to-[#1C3829] text-white shadow-lg",
            "dark:from-[#2ECC71] dark:to-[#006600] dark:text-black",
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <p className="text-sm font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#2ECC71] md:text-[15px]">
          {name}
        </p>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-[#006600] to-[#2ECC71] transition-all duration-500 group-hover:w-full"
      />
    </div>
  )

  if (href) {
    return (
      <Link to={href} title={name} className="block h-full">
        {card}
      </Link>
    )
  }

  return card
}

export function CountryServicesPanel({
  title,
  services,
  sectorsTitle,
  sectors,
}: CountryServicesPanelProps) {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-8 lg:px-20">
        {/* Section gradient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-toadster-green/8 via-transparent to-toadster-green/5"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-toadster-green/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-9xl">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-toadster-green">
                What We Deliver
              </p>
              <h2 className="mt-2 text-2xl font-bold text-page-fg md:text-3xl">{title}</h2>
            </div>
            <p className="max-w-md text-sm text-page-fg-muted">
              Production-ready AI capabilities delivered with local context and global engineering standards.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service} name={service} index={index} />
            ))}
          </div>

          {sectors && sectorsTitle && (
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-page-border p-5 md:p-6">
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-br from-page-card/90 via-page-card/70 to-toadster-green/10 dark:from-white/10 dark:via-white/5 dark:to-toadster-green/10"
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-toadster-green/15">
                    <Building2 className="h-4 w-4 text-toadster-green" />
                  </span>
                  <h3 className="text-base font-bold md:text-lg">{sectorsTitle}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-xl border border-page-border bg-white/10 px-3.5 py-2 text-sm font-medium text-page-fg transition-colors hover:border-toadster-green/35 hover:bg-toadster-green/5"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </ScrollReveal>
  )
}

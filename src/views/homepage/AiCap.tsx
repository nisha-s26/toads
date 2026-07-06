import {
  ArrowRight,
  Bot,
  Brain,
  ClipboardList,
  Code2,
  Cpu,
  Eye,
  GitBranch,
  Layers,
  LifeBuoy,
  Lock,
  Monitor,
  Scan,
  Server,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { SERVICES_NAV, type ServiceNavIcon } from "@/config/services-nav"

const SERVICE_NAV_ICON_MAP: Record<ServiceNavIcon, LucideIcon> = {
  Brain,
  Bot,
  GitBranch,
  Code2,
  Smartphone,
  Server,
  Cpu,
  Eye,
  Scan,
  ClipboardList,
  ShieldCheck,
  Lock,
  LifeBuoy,
  Layers,
  Monitor,
}

const SERVICE_TAGS: Record<string, string[]> = {
  "AI Development": ["ML", "GenAI", "MLOps"],
  "Agentic AI": ["Agents", "LLM", "Automation"],
  "RAG Development": ["RAG", "LLM", "Search"],
  "Software Development": ["Web", "API", "Cloud"],
  "Mobile App Development": ["iOS", "Android", "React Native"],
  DevOps: ["AWS", "GCP", "Kubernetes"],
  "IoT Development": ["Firmware", "Edge", "Cloud"],
  "VR Development": ["Meta Quest", "Unity", "PC VR"],
  "AR Development": ["WebAR", "HoloLens", "Mobile AR"],
  "Product Management": ["Roadmaps", "Discovery", "Agile"],
  "Penetration Testing": ["AppSec", "Red Team", "OWASP"],
  "Cybersecurity Services": ["SOC", "Compliance", "AppSec"],
  "Application Support": ["SLA", "Monitoring", "L3"],
  "SaaS App Development": ["Multi-tenant", "Stripe", "Scale"],
  "Web Development": ["React", "Next.js", "SEO"],
}

const VISIBLE_SERVICE_COUNT = 6

export default function AiCap() {
  const visibleServices = SERVICES_NAV.slice(0, VISIBLE_SERVICE_COUNT)
  return (
    <section id="services" className="homepage-snap-section flex w-full flex-col justify-center px-4">
      <div className="scroll-reveal scroll-reveal-visible mb-8 text-center">
        <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
          <span className="text-black dark:text-white">AI </span>
          <span className="text-toadster-green">Capabilities</span>
        </h2>
        <p className="mx-auto max-w-7xl px-2 text-base text-page-fg-muted sm:px-0 sm:text-lg md:text-xl">
          From AI and agentic systems to software, mobile, DevOps, and security - explore the full
          range of services we deliver for production-grade digital products.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-9xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {visibleServices.map((service, index) => {
          const Icon = SERVICE_NAV_ICON_MAP[service.icon]

          return (
            <div
              key={service.href}
              className="scroll-reveal-stagger h-full min-w-0 w-full max-w-full"
              style={{ ["--stagger-index" as string]: index }}
            >
              <Link
                href={service.href}
                title={`Explore ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hire-role-card group relative flex h-full min-w-0 max-w-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-7"
              >
                <div className="capability-card-header min-w-0 max-w-full overflow-hidden">
                  <div className="flex min-h-11 min-w-0 max-w-full items-center justify-between gap-2 sm:gap-3">
                    <h3 className="min-w-0 flex-1 max-w-full break-words text-lg font-bold leading-snug text-black">
                      {service.title}
                    </h3>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                  </div>
                  <span className="capability-card-heading-rule" aria-hidden="true" />
                </div>

                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-black/85 md:text-[0.9375rem]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(SERVICE_TAGS[service.title] ?? []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#065606]/20 bg-[#065606]/8 px-2.5 py-0.5 text-xs font-semibold text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      <div className="scroll-reveal scroll-reveal-visible mx-auto mt-8 flex max-w-6xl flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/services"
          title="View all services"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
        >
          View All Services
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

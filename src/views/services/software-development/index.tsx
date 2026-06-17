"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react"
import { CTALink } from "@/components/CTALink"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ServicesTrustedBy } from "@/components/ServicesTrustedBy"
import {
  benefits,
  capabilities,
  engagementModels,
  faqs,
  heroTrustItems,
  processSteps,
  techCategories,
  trustStats,
  whyToadster,
} from "./data"

function SectionHead({
  label,
  title,
  subtitle,
  centered = false,
  labelClassName = "text-green-400",
}: {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
  labelClassName?: string
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <p className={`text-xs font-bold uppercase tracking-[0.08em] ${labelClassName} mb-4`}>{label}</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-page-fg tracking-tight mb-4">{title}</h2>
      {subtitle ? (
        <p className={`text-page-fg-muted text-lg leading-relaxed ${centered ? "mx-auto max-w-2xl" : "max-w-full"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-page-border bg-page-card overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-page-fg">{question}</span>
        <ChevronDown
          className={`shrink-0 text-toadster-green transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      {open ? <p className="px-6 pb-5 text-sm leading-relaxed text-page-fg-muted">{answer}</p> : null}
    </div>
  )
}

function HeroConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    fromEmail: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const res = await fetch("/api/send-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed")

      setSubmitStatus("success")
      setFormData({ name: "", fromEmail: "", company: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      id="contact-form"
      className="rounded-2xl border border-page-border bg-page-card p-8 shadow-2xl lg:p-9"
    >
      <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-toadster-green/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-toadster-green">
        <span className="h-2 w-2 rounded-full bg-toadster-green" />
        Free Consultation
      </span>
      <h3 className="text-xl font-bold text-page-fg">Tell us about your project</h3>
      <p className="mt-2 mb-6 text-sm text-page-fg-muted">
        We typically respond within 4 hours on business days. No sales pitch — just an honest conversation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="sd-name" className="mb-1.5 block text-sm font-semibold text-page-fg">
            Your Name
          </label>
          <Input
            id="sd-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="border-page-border bg-page-bg text-page-fg placeholder:text-page-fg-muted"
          />
        </div>
        <div>
          <label htmlFor="sd-email" className="mb-1.5 block text-sm font-semibold text-page-fg">
            Work Email
          </label>
          <Input
            id="sd-email"
            name="fromEmail"
            type="email"
            value={formData.fromEmail}
            onChange={handleChange}
            placeholder="alex@company.com"
            required
            className="border-page-border bg-page-bg text-page-fg placeholder:text-page-fg-muted"
          />
        </div>
        <div>
          <label htmlFor="sd-company" className="mb-1.5 block text-sm font-semibold text-page-fg">
            Company Name
          </label>
          <Input
            id="sd-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="border-page-border bg-page-bg text-page-fg placeholder:text-page-fg-muted"
          />
        </div>
        <div>
          <label htmlFor="sd-requirements" className="mb-1.5 block text-sm font-semibold text-page-fg">
            Project Requirements
          </label>
          <Textarea
            id="sd-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe what you're building or the problem you're trying to solve..."
            className="min-h-[90px] border-page-border bg-page-bg text-page-fg placeholder:text-page-fg-muted"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={isSubmitting}>
          {submitStatus === "success"
            ? "Request Received — We'll be in touch soon!"
            : isSubmitting
              ? "Sending..."
              : "Get a Free Consultation"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
        ) : null}
        <p className="text-center text-xs text-page-fg-muted">Your information is never shared with third parties.</p>
      </form>
    </div>
  )
}

export default function SoftwareDevelopmentPage() {
  return (
    <div className="software-development-page bg-page-bg text-page-fg">
      {/* Hero — full bleed, no page container card behind */}
      <section
        id="contact"
        style={{ marginTop: "30px" }}
        className="software-development-hero section-full-bleed relative overflow-hidden py-14 md:py-20 bg-page-bg"
      >
        <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-8 lg:grid-cols-[1fr_520px] lg:gap-14" style={{ marginLeft: "60px" }}>
          <div className="lg:sticky lg:top-24 self-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-toadster-green/35 bg-toadster-green/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-toadster-green">
              <span className="h-2 w-2 rounded-full bg-toadster-green" />
              Software Development Services
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">
              Software That Solves <span className="text-toadster-green">Real</span> Business Problems
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-page-fg-muted">
              We help startups, SMEs, and growing enterprises build software that actually works — products that scale
              with demand, integrate with your existing systems, and deliver measurable value from day one.
            </p>
            <div className="mb-8 flex flex-wrap gap-5">
              {heroTrustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-page-fg-muted">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-toadster-green" />
                  {item}
                </div>
              ))}
            </div>

            {/* Trust Stats */}
            <div className="mb-8 grid gap-8 grid-cols-5">
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-3xl font-extrabold text-page-fg">{stat.number}</div>
                  <div className="text-sm text-page-fg-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <CTALink to={"/contact"} className="gap-2">
                Discuss Your Project <ArrowRight size={18} />
              </CTALink>
              <Link
                href="#process"
                className="inline-flex items-center rounded-xl border border-page-border bg-page-card px-7 py-3 text-sm font-semibold text-page-fg transition-colors hover:bg-page-bg-alt"
              >
                See How We Work
              </Link>
            </div>
          </div>

          <div style={{ maxHeight: 'calc(100vh - 6rem)', overflow: 'auto' }} className="hide-scrollbar">
            <HeroConsultationForm />
          </div>
        </div>
      </section>

      <ServicesTrustedBy />

      {/* Capabilities */}
      <section id="services" className="section-padding py-16 bg-page-bg-alt">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Software development services built for business outcomes"
            subtitle="We don't just write code — we build systems that solve specific business problems, at the right level of complexity for where your business is today."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-page-border bg-page-card p-7 transition-all hover:-translate-y-0.5 hover:border-toadster-green/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-page-fg flex-1">{cap.title}</h3>
                  <div className="text-4xl shrink-0 ml-4">{cap.icon}</div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-page-fg-muted">{cap.desc}</p>
                <p className="mb-4 text-sm font-semibold text-toadster-green">→ {cap.value}</p>
                <div className="border-t border-page-border pt-4">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-page-fg-muted">
                    Common Use Cases
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-page-border bg-page-bg-alt px-2.5 py-1 text-xs text-page-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Toadster */}
      <section className="py-16 bg-page-bg section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="What makes working with us different"
            subtitle="We've heard what frustrates businesses about software agencies. Here's what we actually do differently."
            labelClassName="text-toadster-green"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {whyToadster.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-page-border bg-page-card p-7 transition-colors hover:border-toadster-green/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green/10 text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-page-fg">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-page-fg-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      {/* <section id="industries" style={{ marginTop: "-40px" }} className="py-20 bg-page-bg-alt">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Industry experience that shapes better software"
            subtitle="Domain knowledge matters. We understand the compliance requirements, user expectations, and business models of the industries we serve."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-page-border bg-page-card p-6 transition-all hover:-translate-y-0.5 hover:border-toadster-green/40 hover:shadow-md"
              >
                <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-page-fg">
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </h3>
                <p className="mb-3 text-sm text-page-fg-muted">{item.challenge}</p>
                <p className="flex items-start gap-2 text-sm font-semibold text-toadster-green">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" />
                  {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process */}
      <section id="process" className="py-16 bg-page-bg section-padding">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 lg:grid-cols-[380px_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 self-start">
            <SectionHead
              label=""
              title="How we turn requirements into working software"
              subtitle="Every project is different. But the way we approach every project — the thinking, the communication, the quality standards — stays consistent. Here's what you can expect."
            />
            <div className="mt-10 rounded-[2rem] border border-page-border bg-page-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-toadster-green/80">
                Average time to App Store
              </p>
              <div className="mt-6 text-5xl font-extrabold tracking-tight text-page-fg">
                10–16 <span className="text-2xl font-semibold text-page-fg-muted">weeks</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-page-fg-muted">
                for a well-scoped MVP
              </p>
            </div>
          </div>

          <div style={{ maxHeight: 'calc(100vh - 6rem)', overflow: 'auto' }} className="divide-y divide-page-border hide-scrollbar">
            {processSteps.map((step) => (
              <div key={step.num} className="group grid gap-6 py-8 md:grid-cols-[72px_1fr] md:gap-8">
                <div className="text-right text-5xl font-extrabold leading-none text-page-border group-hover:text-toadster-green transition-colors">{step.num}</div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-page-fg">{step.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-page-fg-muted">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-toadster-green/10 px-3 py-1 text-xs font-semibold text-toadster-green"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="The right tools for the right job"
            subtitle="We don't have a single default stack we push on every project. We choose technologies that fit your requirements, your team, and your future plans."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-page-border bg-page-card p-6">
                <h3 className="mb-2 font-bold text-page-fg">{cat.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-page-fg-muted">{cat.why}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-page-border bg-page-bg-alt px-3 py-1 text-xs font-semibold text-page-fg-muted"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Talent */}
      <section className="py-16 section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label="Hire talent"
            title="The people you need, ready when you need them"
            subtitle="Building a team is expensive, slow, and risky at the wrong stage. We give you a faster path — pre-vetted engineers, AI specialists, and product professionals who slot into your workflows and start contributing from week one."
          />

          <div className="grid gap-4 md:grid-cols-4 mb-10">
            <div className="rounded-2xl border border-page-border bg-page-card p-6">
              <div className="text-3xl font-extrabold text-page-fg">48h</div>
              <p className="mt-4 text-sm text-page-fg-muted">Average time to candidate shortlist</p>
            </div>
            <div className="rounded-2xl border border-page-border bg-page-card p-6">
              <div className="text-3xl font-extrabold text-page-fg">40+</div>
              <p className="mt-4 text-sm text-page-fg-muted">Specialist roles across AI, mobile, cloud & data</p>
            </div>
            <div className="rounded-2xl border border-page-border bg-page-card p-6">
              <div className="text-3xl font-extrabold text-page-fg">3 tiers</div>
              <p className="mt-4 text-sm text-page-fg-muted">Flexible hiring models — no forced lock-in</p>
            </div>
            <div className="rounded-2xl border border-page-border bg-page-card p-6">
              <div className="text-3xl font-extrabold text-page-fg">IST · GST · EST</div>
              <p className="mt-4 text-sm text-page-fg-muted">Active timezone coverage for your team</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI & Machine Learning Engineers",
                desc: "From fine-tuning LLMs and building RAG pipelines to deploying models in production — engineers who understand the full ML lifecycle.",
                tags: ["LangChain", "PyTorch", "Hugging Face"],
              },
              {
                title: "Agentic AI Developers",
                desc: "Specialists in building AI agents that take actions, execute code, and manage multi-step workflows without constant human input.",
                tags: ["CrewAI", "AutoGen", "LangChain"],
              },
              {
                title: "Mobile App Developers",
                desc: "Native iOS and Android developers plus React Native and Flutter engineers who build polished customer-facing apps.",
                tags: ["Swift", "Kotlin", "React Native"],
              },
              {
                title: "Full-Stack Engineers",
                desc: "Developers who own both sides of the stack — building APIs, managing databases, and delivering polished frontends.",
                tags: ["Node.js", "React", "PostgreSQL"],
              },
              {
                title: "DevOps & Cloud Engineers",
                desc: "Infrastructure engineers who build CI/CD pipelines, manage Kubernetes, and keep your cloud environments reliable.",
                tags: ["Terraform", "Docker", "Kubernetes"],
              },
              {
                title: "Data Engineers & Architects",
                desc: "People who build the pipelines, warehouses, and dashboards your business decisions run on.",
                tags: ["Snowflake", "dbt", "Airflow"],
              },
              {
                title: "UI/UX Designers",
                desc: "Designers who think in systems — wireframes, prototypes, and design systems that make complex software feel obvious.",
                tags: ["Figma", "Framer", "Design Systems"],
              },
              {
                title: "QA & Security Engineers",
                desc: "Test engineers and security specialists who find issues before users do — from automation to compliance testing.",
                tags: ["Selenium", "Cypress", "OWASP"],
              },
              {
                title: "Product Managers & BAs",
                desc: "Experienced PMs and analysts who translate messy requirements into clear sprint-ready work.",
                tags: ["Agile", "BPMN", "Jira"],
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col h-full rounded-2xl border border-page-border bg-page-card p-6 transition-all hover:-translate-y-0.5 hover:border-toadster-green/40 hover:shadow-md">
                <h3 className="mb-3 text-lg font-bold text-page-fg">{item.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-page-fg-muted">{item.desc}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-page-border bg-page-bg-alt px-2.5 py-1 text-[11px] font-semibold text-page-fg-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/hire"
                  className="apply-link mt-auto inline-flex items-center gap-2 text-sm text-page-fg transition-colors hover:text-toadster-green"
                >
                  Hire Now <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {/* <section id="case-studies" style={{ marginTop: "-40px" }} className="py-20 bg-page-bg">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Projects we're proud of"
            subtitle="Real projects, real results. Here's a look at how we've helped businesses solve specific problems through software."
            labelClassName="text-toadster-green"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="overflow-hidden rounded-2xl border border-page-border bg-page-card transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="bg-[#0f1117] px-6 py-5 dark:bg-black">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-green-400">{study.industry}</p>
                  <h3 className="text-lg font-bold leading-snug text-white">{study.title}</h3>
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-page-fg-muted">The Challenge</p>
                    <p className="text-sm leading-relaxed text-page-fg-muted">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-page-fg-muted">Our Approach</p>
                    <p className="text-sm leading-relaxed text-page-fg-muted">{study.approach}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {study.results.map((result) => (
                      <div key={result.label} className="rounded-lg bg-toadster-green/10 p-3 text-center">
                        <div className="text-2xl font-extrabold text-toadster-green">{result.num}</div>
                        <div className="text-[11px] leading-snug text-page-fg-muted">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits */}
      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="What good software actually delivers"
            subtitle="The real ROI of custom software isn't always a single number. It shows up in faster teams, fewer errors, and capabilities your competitors don't have."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-page-border bg-page-card p-6 transition-colors hover:border-toadster-green/40"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 font-bold text-page-fg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-page-fg-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-16 bg-page-bg section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Work with us the way that makes sense for your situation"
            subtitle="Different businesses have different needs. We've structured our engagement models to match."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className={`relative rounded-2xl border p-8 transition-all hover:shadow-md ${
                  model.featured
                    ? "border-toadster-green bg-toadster-green/5"
                    : "border-page-border bg-page-card hover:border-toadster-green/40"
                }`}
              >
                {model.badge ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-toadster-green px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {model.badge}
                  </span>
                ) : null}
                <h3 className="text-xl font-extrabold text-page-fg">{model.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-page-fg-muted">{model.who}</p>
                <p className="mt-4 text-sm leading-relaxed text-page-fg-muted">{model.desc}</p>
                <ul className="mt-5 space-y-2">
                  {model.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 border-b border-page-border py-2 text-sm text-page-fg-muted last:border-0">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-toadster-green" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Questions we hear before every project"
            subtitle="Straightforward answers to the things decision-makers actually want to know."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16 bg-page-bg section-padding">
        <div className="pointer-events-none absolute inset-0 dark:opacity-100 opacity-0">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #0f1117 0%, #1a2340 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(0, 77, 45, 0.22) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-page-fg md:text-4xl">
            Let&apos;s talk about what you&apos;re building
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-page-fg-muted">
            Whether you have a detailed spec or just a problem you&apos;re trying to solve, we&apos;d like to hear about
            it. Our first conversation is about understanding your situation — not selling you a solution before we know
            if it&apos;s the right one.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTALink to="#contact-form" className="bg-toadster-green text-white hover:bg-toadster-green/90 hover:text-white">
              Schedule a Free Consultation <ArrowRight size={18} className="ml-2" />
            </CTALink>
            <Link
              href="mailto:business@toadsters.com"
              className="inline-flex items-center rounded-xl border border-page-border bg-page-bg-alt px-7 py-3 text-sm font-semibold text-page-fg transition-colors hover:bg-page-border"
            >
              Email us directly
            </Link>
          </div>
          <p className="mt-6 text-sm text-page-fg-muted">
            Typically responds within 4 hours on business days · No spam, no sales scripts
          </p>
        </div>
      </section>
    </div>
  )
}

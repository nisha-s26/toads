"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { CTALink } from "@/components/CTALink"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FAQSection } from "@/components/service-page/FAQSection"
import { SectionHead } from "@/components/service-page/SectionHead"
import { ServiceProcessSteps } from "@/components/service-page/ServiceProcessSteps"
import { LazyTrustedBy } from "@/components/service-page/LazyTrustedBy"
import {
  benefits,
  capabilities,
  costTimelines,
  engagementModels,
  faqs,
  industries,
  processSteps,
  techCategories,
  trustStats,
  whatIsRag,
  whyToadster,
} from "./data"

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
      className="capability-card-surface relative overflow-hidden rounded-2xl p-8 shadow-2xl lg:p-9"
    >
      <span className="relative z-10 mb-3 inline-flex items-center gap-2 rounded-full bg-toadster-green/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-toadster-green">
        <span className="h-2 w-2 rounded-full bg-toadster-green" />
        Free Consultation
      </span>
      <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-black">Tell us about your project</h3>
      <p className="capability-card-copy relative z-10 mt-2 mb-6 text-sm">
        Tell us about your data and use case - we&apos;ll schedule a free consultation and tell you honestly whether RAG is the right fit.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="rag-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="rag-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="rag-email" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Work Email
          </label>
          <Input
            id="rag-email"
            name="fromEmail"
            type="email"
            value={formData.fromEmail}
            onChange={handleChange}
            placeholder="alex@company.com"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="rag-company" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Company Name
          </label>
          <Input
            id="rag-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="rag-requirements" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Describe your RAG use case
          </label>
          <Textarea
            id="rag-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your data sources, query types, existing systems, and what outcomes you need from a RAG system..."
            className="bright-panel-input min-h-[90px]"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={isSubmitting}>
          {submitStatus === "success"
            ? "Request Received - We'll be in touch soon!"
            : isSubmitting
              ? "Sending..."
              : "Schedule a Free Consultation"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
        ) : null}
        <p className="capability-card-copy text-center text-xs">Your information is never shared with third parties.</p>
      </form>
    </div>
  )
}

export default function RAGDevelopmentPage() {
  return (
    <main className="modern-service-page rag-development-page bg-page-bg text-page-fg">
      <section
        id="contact"
        className="software-development-hero section-full-bleed relative overflow-hidden pb-10 md:pb-14 lg:pb-20 bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full max-w-6xl items-start gap-8 lg:gap-14">
          <div className="service-hero-content lg:sticky lg:top-24 self-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-toadster-green/35 bg-toadster-green/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-toadster-green">
              <span className="h-2 w-2 rounded-full bg-toadster-green" />
              RAG Development Services
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">
              AI That Knows Your Business - Not Just the <span className="text-toadster-green">Internet</span>
            </h1>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              We design and build Retrieval-Augmented Generation (RAG) systems that connect large language models to
              your proprietary data - so your teams get precise, contextually accurate answers instead of hallucinated
              generalities.
            </p>

            <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl font-extrabold text-page-fg md:text-3xl">{stat.number}</div>
                  <div className="text-sm text-page-fg-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <CTALink to="#contact-form" className="gap-2">
                Schedule a Free Consultation <ArrowRight size={18} />
              </CTALink>
              <Link
                href="#services"
                className="inline-flex items-center rounded-xl border border-page-border bg-page-card px-7 py-3 text-sm font-semibold text-page-fg transition-colors hover:bg-page-bg-alt"
              >
                See Our Capabilities
              </Link>
            </div>
          </div>

          <div style={{ maxHeight: "calc(100vh - 6rem)", overflow: "auto" }} className="service-hero-form hide-scrollbar">
            <HeroConsultationForm />
          </div>
        </div>
      </section>

      <LazyTrustedBy compact />

      <section id="what-is-rag" className="section-padding py-16 bg-page-bg">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title={whatIsRag.title}
            subtitle={whatIsRag.intro}
          />
          <p className="mb-4 max-w-3xl text-lg font-semibold text-page-fg">{whatIsRag.summary}</p>
          <p className="mb-10 max-w-3xl text-page-fg-muted leading-relaxed">{whatIsRag.outcome}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {whatIsRag.components.map((item) => (
              <div
                key={item.title}
                className="capability-card-surface relative rounded-2xl p-6 transition-all duration-300"
              >
                <div className="capability-card-header relative z-10">
                  <h3 className="text-base font-bold text-toadster-green">{item.title}</h3>
                  <span className="capability-card-heading-rule" aria-hidden="true" />
                </div>
                <p className="capability-card-copy relative z-10 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-padding py-16 bg-page-bg-alt">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="RAG development services built for business outcomes"
            subtitle="We don't deliver RAG demos. We build production-grade RAG systems that are reliable, maintainable, and aligned with how your business actually operates."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.title}
                  className="capability-card-surface group relative rounded-2xl p-7 transition-all duration-300"
                >
                  <div className="capability-card-header relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-toadster-green flex-1">{cap.title}</h3>
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md ml-4">
                        <Icon size={22} strokeWidth={2} />
                      </span>
                    </div>
                    <span className="capability-card-heading-rule" aria-hidden="true" />
                  </div>
                  <p className="capability-card-copy relative z-10 mb-4 text-sm leading-relaxed">{cap.desc}</p>
                  <p className="relative z-10 mb-4 text-sm font-semibold text-toadster-green">→ {cap.value}</p>
                  <div className="relative z-10 border-t border-page-border pt-4">
                    <p className="capability-card-copy mb-2 text-[11px] font-bold uppercase tracking-wider">
                      Common Use Cases
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="capability-card-tag rounded border border-page-border bg-page-bg-alt px-2.5 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-page-bg section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Industries we serve"
            subtitle="RAG development applies broadly, but delivers the most value in industries where accurate, contextual information access is mission-critical."
            labelClassName="text-toadster-green"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="capability-card-surface group relative rounded-2xl p-6 transition-all duration-300"
                >
                  <span className="relative z-10 mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <div className="capability-card-header relative z-10">
                    <h3 className="text-base font-bold text-toadster-green">{item.title}</h3>
                    <span className="capability-card-heading-rule" aria-hidden="true" />
                  </div>
                  <p className="capability-card-copy relative z-10 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="What makes working with us different"
            subtitle="There are plenty of teams that can wire together a RAG demo. We build systems that hold up under production conditions - and we stay accountable to business outcomes, not just deliverables."
            labelClassName="text-toadster-green"
          />
          <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-2">
            {whyToadster.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="capability-card-surface group relative flex gap-4 rounded-2xl p-7 transition-all duration-300"
                >
                  <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <div className="relative z-10 min-w-0">
                    <div className="capability-card-header">
                      <h3 className="font-bold text-toadster-green">{item.title}</h3>
                      <span className="capability-card-heading-rule" aria-hidden="true" />
                    </div>
                    <p className="capability-card-copy text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="process" className="service-process-section py-16 section-padding">
                <div className="service-process-panel mx-auto grid max-w-6xl items-start gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-14 lg:px-10 lg:py-14">
          <div className="service-process-intro lg:sticky lg:top-24 self-start">
            <SectionHead
              label=""
              title="How we turn your data into a working RAG system"
              subtitle="A RAG system is only as good as the architecture decisions made during development. Our process produces accurate, scalable systems - not proof-of-concept demos that fall apart under real usage."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">
                Typical project timeline
              </p>
              <div className="service-process-timeline-value">
                10-16 <span className="service-process-timeline-unit">weeks</span>
              </div>
              <p className="service-process-timeline-desc">from discovery to production deployment, depending on data complexity</p>
            </div>
          </div>

          <ServiceProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="The right tools for the right RAG system"
            subtitle="We don't prescribe a fixed stack. We select the tools that fit your data type, query volume, latency requirements, and existing infrastructure."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.title}
                  className="capability-card-surface group relative rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="capability-card-header relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-toadster-green">{cat.title}</h3>
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                        <Icon size={22} strokeWidth={2} />
                      </span>
                    </div>
                    <span className="capability-card-heading-rule" aria-hidden="true" />
                  </div>
                  <p className="capability-card-copy relative z-10 mb-4 text-sm leading-relaxed">{cat.why}</p>
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {cat.pills.map((pill) => (
                      <span
                        key={pill}
                        className="capability-card-tag rounded-full border border-page-border bg-page-bg-alt px-3 py-1 text-xs font-semibold"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="What challenges does RAG development solve?"
            subtitle="RAG isn't the answer to every AI problem. But for specific business situations, it's one of the most effective and practical AI architectures available."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="capability-card-surface group relative rounded-2xl p-6 transition-all duration-300"
                >
                  <span className="relative z-10 mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <div className="capability-card-header relative z-10">
                    <h3 className="font-bold text-toadster-green">{item.title}</h3>
                    <span className="capability-card-heading-rule" aria-hidden="true" />
                  </div>
                  <p className="capability-card-copy relative z-10 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-page-bg section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="How much does RAG development cost? How long does it take?"
            subtitle="Pricing depends on data volume, source complexity, LLM selection, infrastructure requirements, and integration scope. Here's a realistic breakdown - we'll give you a detailed estimate after a discovery call."
          />
          <div className="overflow-x-auto rounded-2xl border border-page-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-page-border bg-page-bg-alt">
                  <th className="px-6 py-4 font-bold text-page-fg">Scope</th>
                  <th className="px-6 py-4 font-bold text-page-fg">Typical Timeline</th>
                  <th className="px-6 py-4 font-bold text-page-fg">Indicative Investment</th>
                </tr>
              </thead>
              <tbody>
                {costTimelines.map((row) => (
                  <tr key={row.scope} className="border-b border-page-border last:border-0">
                    <td className="px-6 py-4 font-medium text-page-fg">{row.scope}</td>
                    <td className="px-6 py-4 text-page-fg-muted">{row.timeline}</td>
                    <td className="px-6 py-4 font-semibold text-toadster-green">{row.investment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Work with us the way that makes sense for your project"
            subtitle="We adapt to your situation - whether you need a full team, specialist augmentation, a defined deliverable, or ongoing support."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {engagementModels.map((model) => (
              <div key={model.title} className={model.badge ? "relative pt-3" : "relative"}>
                {model.badge ? (
                  <span className="absolute left-6 top-0 z-20 -translate-y-1/2 rounded-full bg-toadster-green px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-[0_2px_10px_rgba(0,77,45,0.28)] ring-2 ring-white dark:ring-[#eef2f7]">
                    {model.badge}
                  </span>
                ) : null}
                <div
                  className={`capability-card-surface relative rounded-2xl p-8 transition-all duration-300 hover:shadow-md ${
                    model.featured ? "ring-2 ring-toadster-green/35" : ""
                  }`}
                >
                  <div className="capability-card-header relative z-10">
                    <h3 className="text-xl font-extrabold text-toadster-green">{model.title}</h3>
                    <span className="capability-card-heading-rule" aria-hidden="true" />
                  </div>
                  <p className="capability-card-copy relative z-10 mt-2 text-xs font-semibold uppercase tracking-wide">
                    {model.who}
                  </p>
                  <p className="capability-card-copy relative z-10 mt-4 text-sm leading-relaxed">{model.desc}</p>
                  <ul className="relative z-10 mt-5 space-y-2">
                    {model.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="capability-card-copy flex items-start gap-2 border-b border-slate-200/80 py-2 text-sm last:border-0 dark:border-slate-300/40"
                      >
                        <CheckCircle size={16} className="mt-0.5 shrink-0 text-toadster-green" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="relative overflow-hidden py-16 bg-page-bg section-padding">
        <div className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100">
          <div className="absolute inset-0" />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(0, 77, 45, 0.22) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-page-fg md:text-4xl">
            Let&apos;s Talk About What You&apos;re Building
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-page-fg-muted">
            Tell us about your data, your use case, and where you want to get to. We&apos;ll tell you honestly whether
            RAG is the right fit - and if it is, what it would take to build it well.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTALink
              to="#contact-form"
              className="bg-toadster-green text-white hover:bg-toadster-green/90 hover:text-white"
            >
              Schedule a Free Consultation <ArrowRight size={18} className="ml-2" />
            </CTALink>
          </div>
          <p className="mt-6 text-sm text-page-fg-muted">
            Typically responds within one business day · No spam, no sales scripts
          </p>
        </div>
      </section>
    </main>
  )
}

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
  engagementModels,
  faqs,
  processSteps,
  techCategories,
  trustStats,
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
        We typically respond within one business day. No hard sell - just a focused conversation about your project.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="mad-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="mad-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="mad-email" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Work Email
          </label>
          <Input
            id="mad-email"
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
          <label htmlFor="mad-company" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Company Name
          </label>
          <Input
            id="mad-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="mad-requirements" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Tell us about your project
          </label>
          <Textarea
            id="mad-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe what you're building, who will use it, and what success looks like..."
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

export default function MobileAppDevelopmentPage() {
  return (
    <div className="modern-service-page mobile-app-development-page bg-page-bg text-page-fg">
      <section
        id="contact"
        className="software-development-hero section-full-bleed relative overflow-hidden pb-10 md:pb-14 lg:pb-20 bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full max-w-6xl items-start gap-8 lg:gap-14">
          <div className="service-hero-content lg:sticky lg:top-24 self-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-toadster-green/35 bg-toadster-green/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-toadster-green">
              <span className="h-2 w-2 rounded-full bg-toadster-green" />
              Mobile App Development Services
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">
              Build Mobile Apps That Actually <span className="text-toadster-green">Get Used</span>
            </h1>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              Your users are on their phones. If your mobile experience is slow, clunky, or just absent, you&apos;re
              already losing ground. We design and build mobile apps that feel right - fast to load, intuitive to
              navigate, and built to scale with your business.
            </p>

            <div className="mb-8 grid gap-6 sm:grid-cols-3">
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
                See Our Work
              </Link>
            </div>
          </div>

          <div style={{ maxHeight: "calc(100vh - 6rem)", overflow: "auto" }} className="service-hero-form hide-scrollbar">
            <HeroConsultationForm />
          </div>
        </div>
      </section>

      <LazyTrustedBy compact />

      <section id="services" className="section-padding py-16 bg-page-bg-alt">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Mobile app development services for business outcomes"
            subtitle="We build mobile applications across platforms, industries, and complexity levels - from product strategy and UX design to development, QA, and deployment."
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
            title="What makes working with us different"
            subtitle="There are a lot of mobile development shops. Here's what actually separates the ones that deliver from the ones that don't - and where Toadster sits."
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
              title="How we turn requirements into a working app"
              subtitle="A typical project runs 8 to 16 weeks for a full product. MVPs can ship in 4 to 8 weeks depending on scope. Here's how we structure the work."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">
                Focused MVP timeline
              </p>
              <div className="service-process-timeline-value">
                4-8 <span className="service-process-timeline-unit">weeks</span>
              </div>
              <p className="service-process-timeline-desc">for a well-scoped MVP with clear requirements</p>
            </div>
          </div>

          <ServiceProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="The right tools for the right job"
            subtitle="We don't push a single stack. We recommend the technology that fits your product goals, team, and budget."
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
            title="What a good mobile app actually delivers"
            subtitle="A well-built mobile app isn't just a digital product - it's a channel for revenue, retention, and operational efficiency."
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

      <section className="py-16 bg-page-bg section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Work with us the way that makes sense for your situation"
            subtitle="We offer flexible engagement models depending on where you are, what you need, and how you prefer to work."
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
            Let&apos;s talk about what you&apos;re building
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-page-fg-muted">
            Tell us what you need and we&apos;ll get back to you within one business day. No hard sell, no generic pitch
            deck - just a focused conversation about your project.
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
    </div>
  )
}

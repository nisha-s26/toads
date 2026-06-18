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
  hireRoles,
  industries,
  processSteps,
  teamStats,
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
        We typically respond within one business day. No sales pitch - just an honest conversation about your security
        requirements.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="pentest-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="pentest-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="pentest-email" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Work Email
          </label>
          <Input
            id="pentest-email"
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
          <label htmlFor="pentest-company" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Company Name
          </label>
          <Input
            id="pentest-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="pentest-requirements" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Tell us about your security requirements
          </label>
          <Textarea
            id="pentest-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your environment, compliance needs, upcoming audit, or product launch timeline..."
            className="bright-panel-input min-h-[90px]"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={isSubmitting}>
          {submitStatus === "success"
            ? "Request Received - We'll be in touch soon!"
            : isSubmitting
              ? "Sending..."
              : "Schedule a Security Consultation"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
        ) : null}
        <p className="capability-card-copy text-center text-xs">Your information is never shared with third parties.</p>
      </form>
    </div>
  )
}

export default function PenetrationTestingPage() {
  return (
    <div className="modern-service-page penetration-testing-page bg-page-bg text-page-fg">
      <section
        id="contact"
        className="software-development-hero section-full-bleed relative overflow-hidden pb-10 md:pb-14 lg:pb-20 bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full max-w-6xl items-start gap-8 lg:gap-14">
          <div className="service-hero-content lg:sticky lg:top-24 self-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-toadster-green/35 bg-toadster-green/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-toadster-green">
              <span className="h-2 w-2 rounded-full bg-toadster-green" />
              Penetration Testing Services
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">
              Find the Gaps Before Someone Else <span className="text-toadster-green">Does</span>
            </h1>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              Most businesses only discover security vulnerabilities after a breach. We find them first - through
              structured, real-world attack simulations that expose exactly what your defences are missing.
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
                Schedule a Security Consultation <ArrowRight size={18} />
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

      <section id="services" className="section-padding py-16 bg-page-bg-alt">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Penetration testing services built for real risk"
            subtitle="Every engagement is scoped to your actual environment - not a generic checklist. Here is what we cover."
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
                      Focus Areas
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
            subtitle="A lot of security firms run automated tools and hand you a spreadsheet. That is not what we do."
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
              title="How a penetration testing engagement works"
              subtitle="From first conversation to final remediation confirmation, here is how we run an engagement."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">
                Typical web app test timeline
              </p>
              <div className="service-process-timeline-value">
                5-10 <span className="service-process-timeline-unit">days</span>
              </div>
              <p className="service-process-timeline-desc">
                for a targeted web application penetration test
              </p>
            </div>
          </div>

          <ServiceProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="The tools behind the testing"
            subtitle="We use industry-standard tooling, combined with custom scripts and manual techniques that go beyond what commercial platforms can do."
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

      <section className="py-16 bg-page-bg section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="The people you work with"
            subtitle="Security testing is only as good as the testers doing it."
            labelClassName="text-toadster-green"
          />
          <div className="mb-10 grid gap-6 sm:grid-cols-3">
            {teamStats.map((stat) => (
              <div
                key={stat.label}
                className="capability-card-surface rounded-2xl p-6 text-center transition-all duration-300"
              >
                <div className="text-3xl font-extrabold text-toadster-green">{stat.number}</div>
                <div className="mt-2 text-sm text-page-fg-muted">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {hireRoles.map((role) => {
              const Icon = role.icon
              return (
                <div
                  key={role.title}
                  className="capability-card-surface group relative rounded-2xl p-7 transition-all duration-300"
                >
                  <div className="capability-card-header relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-toadster-green flex-1">{role.title}</h3>
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                        <Icon size={22} strokeWidth={2} />
                      </span>
                    </div>
                    <span className="capability-card-heading-rule" aria-hidden="true" />
                  </div>
                  <p className="capability-card-copy relative z-10 mb-4 text-sm leading-relaxed">{role.desc}</p>
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="capability-card-tag rounded border border-page-border bg-page-bg-alt px-2.5 py-1 text-xs"
                      >
                        {tag}
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
            title="Industries we test for"
            subtitle="Penetration testing requirements vary significantly by sector. We have worked across:"
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

      <section className="py-16 bg-page-bg section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="What good penetration testing actually delivers"
            subtitle="Beyond the report, here is what you actually get from a well-run engagement."
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

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead
            label=""
            title="Work with us the way that makes sense for your situation"
            subtitle="We offer engagement models that match where you are and what you actually need."
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
            Talk to us about your security requirements
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-page-fg-muted">
            Whether you have an upcoming compliance audit, a product launch, or a nagging feeling that your security
            posture needs a proper look - we can help you work out what the right engagement looks like. No sales pitch.
            Just an honest conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTALink
              to="#contact-form"
              className="bg-toadster-green text-white hover:bg-toadster-green/90 hover:text-white"
            >
              Schedule a Security Consultation <ArrowRight size={18} className="ml-2" />
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

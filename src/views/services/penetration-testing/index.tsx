"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FAQSection } from "@/components/service-page/FAQSection"
import { SectionHead } from "@/components/service-page/SectionHead"
import { ServiceProcessSteps } from "@/components/service-page/ServiceProcessSteps"
import { LazyTrustedBy } from "@/components/service-page/LazyTrustedBy"
import { ServiceHeroViewport } from "@/components/service-page/ServiceHeroViewport"
import { ServiceStatRow } from "@/components/service-page/ServiceStatRow"
import { ServicePageCta } from "@/components/service-page/ServicePageCta"
import {
  benefits,
  capabilities,
  faqs,
  hireRoles,
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
      className="capability-card-surface relative rounded-2xl p-8 shadow-2xl lg:p-9"
    >
      <p className="service-form-label relative z-10 mb-3 text-xs font-bold uppercase tracking-wide text-toadster-green">
        Free Consultation
      </p>
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
    <div className="service-page modern-service-page penetration-testing-page bg-page-bg text-page-fg">
      <ServiceHeroViewport>

      <section
        id="contact"
        className="software-development-hero section-full-bleed relative overflow-hidden bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full items-start gap-8 lg:gap-14">
          <div className="service-hero-content lg:sticky lg:top-24 self-start">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">

              Penetration Testing Services

            </h1>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              Most businesses only discover security vulnerabilities after a breach. We find them first - through
              structured, real-world attack simulations that expose exactly what your defences are missing.
            </p>

            <ServiceStatRow stats={trustStats} />
          </div>

          <div style={{ maxHeight: "calc(100vh - 6rem)", overflow: "auto" }} className="service-hero-form hide-scrollbar">
            <HeroConsultationForm />
          </div>
        </div>
      </section>

      <LazyTrustedBy compact />


      </ServiceHeroViewport>
      <section id="services" className="section-padding py-16 bg-page-bg-alt">
        <div className="service-page-container px-4">
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
        <div className="service-page-container px-4">
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
                <div className="service-process-panel mx-auto grid service-page-container items-start gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-14 lg:px-10 lg:py-14">
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
        <div className="service-page-container px-4">
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
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="The people you work with"
            subtitle="Security testing is only as good as the testers doing it."
            labelClassName="text-toadster-green"
          />
          <ServiceStatRow stats={teamStats} />
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


      <section className="py-16 bg-page-bg section-padding">
        <div className="service-page-container px-4">
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

      

      <FAQSection faqs={faqs} />
      <ServicePageCta
        title="Talk to us about your security requirements"

        footnote="Typically responds within one business day"
      >
        <p>Whether you have an upcoming compliance audit, a product launch, or a nagging feeling that your security
            posture needs a proper look - we can help you work out what the right engagement looks like. No sales pitch.
            Just an honest conversation.</p>
      </ServicePageCta>
    </div>
  )
}

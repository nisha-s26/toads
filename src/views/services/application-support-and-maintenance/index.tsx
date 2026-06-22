"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHead } from "@/components/service-page/SectionHead"
import { FAQSection } from "@/components/service-page/FAQSection"
import { ServiceProcessSteps } from "@/components/service-page/ServiceProcessSteps"
import { LazyTrustedBy } from "@/components/service-page/LazyTrustedBy"
import { ServiceHeroViewport } from "@/components/service-page/ServiceHeroViewport"
import { ServiceStatRow } from "@/components/service-page/ServiceStatRow"
import { ServicePageCta } from "@/components/service-page/ServicePageCta"
import {
  benefits,
  capabilities,
  faqs,
  processSteps,
  teamRoles,
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
      <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-black">Talk to our support team</h3>
      <p className="capability-card-copy relative z-10 mt-2 mb-6 text-sm">
        Tell us about your applications and support requirements — we&apos;ll respond within one business day with a
        clear view of how we can help.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="asm-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="asm-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="asm-email" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Work Email
          </label>
          <Input
            id="asm-email"
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
          <label htmlFor="asm-company" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Company Name
          </label>
          <Input
            id="asm-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="asm-requirements" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Describe your applications and support needs
          </label>
          <Textarea
            id="asm-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the applications you need supported, your current uptime challenges, tech stack, and SLA requirements..."
            className="bright-panel-input min-h-[90px]"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={isSubmitting}>
          {submitStatus === "success"
            ? "Request Received — We'll be in touch soon!"
            : isSubmitting
              ? "Sending..."
              : "Talk to Our Support Team"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
        ) : null}
        <p className="capability-card-copy text-center text-xs">Your information is never shared with third parties.</p>
      </form>
    </div>
  )
}

export default function ApplicationSupportAndMaintenancePage() {
  return (
    <div className="service-page modern-service-page asm-service-page bg-page-bg text-page-fg">
      <ServiceHeroViewport>

      <section
        id="contact"
        className="software-development-hero section-full-bleed relative overflow-hidden bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full items-start gap-8 lg:gap-14">
          <div className="service-hero-content lg:sticky lg:top-24 self-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">

              Application Support & Maintenance

            </h1>
            <p className="service-hero-subtitle mb-6 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              Production applications don&apos;t fail on a schedule — and when they do, the cost isn&apos;t just
              downtime. It&apos;s lost revenue, eroded user trust, and your internal team pulled away from building what
              matters next.
            </p>
            <p className="service-hero-subtitle mb-6 w-full max-w-none text-base leading-relaxed text-page-fg-muted">
              At Toadster Technologies, we provide application support and maintenance that goes beyond ticket
              closing. Proactive monitoring, structured incident response, preventive maintenance, security patching, and
              the documentation that makes your applications supportable long-term — whether we built them or inherited
              them from someone else.
            </p>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-base leading-relaxed text-page-fg-muted">
              We support web applications, mobile apps, APIs, cloud infrastructure, and legacy systems across modern
              and established tech stacks — with SLAs that match how critical your applications actually are to your
              business.
            </p>

            <ServiceStatRow stats={trustStats.slice(0, 3)} />
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
            title="Application Support & Maintenance Services"
            subtitle="From 24/7 monitoring and incident response to security patching, performance optimisation, and legacy stabilisation — here's what we cover:"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.title}
                  className="capability-card-surface group relative rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="capability-card-header relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="flex-1 text-lg font-bold text-toadster-green">{cap.title}</h3>
                      <span className="ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                        <Icon size={22} strokeWidth={2} />
                      </span>
                    </div>
                    <span className="capability-card-heading-rule" aria-hidden="true" />
                  </div>
                  <p className="capability-card-copy relative z-10 text-sm leading-relaxed">{cap.desc}</p>
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
            title="What Makes Working With Us Different"
            subtitle="Application support is an industry full of ticket-closers and vague SLAs. Here's how we approach it differently."
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
              title="How We Onboard and Support Your Applications"
              subtitle="Effective support starts with understanding your systems before an incident happens. Our process is designed to build knowledge, monitoring, and documentation from day one."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">Typical onboarding time</p>
              <div className="service-process-timeline-value">
                48 <span className="service-process-timeline-unit">hours</span>
              </div>
              <p className="service-process-timeline-desc">for straightforward applications with existing documentation</p>
            </div>
          </div>

          <ServiceProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-page-bg section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="Technologies & Platforms We Support"
            subtitle="We maintain applications across modern and legacy tech stacks — web, mobile, cloud, and data layers."
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
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="The Support Team Behind Your Applications"
            subtitle="Application support requires engineers who can diagnose, fix, and maintain — not just route tickets. Here's who you'll be working with."
          />
          <ServiceStatRow stats={teamStats} />
          <div className="ar-content-list divide-y divide-page-border border-y border-page-border">
            {teamRoles.map((role) => (
              <article key={role.title} className="grid gap-2 py-6 md:grid-cols-[minmax(200px,34%)_1fr] md:gap-8">
                <h3 className="font-bold text-page-fg">{role.title}</h3>
                <p className="text-sm leading-relaxed text-page-fg-muted">{role.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-page-bg section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What Reliable Application Support Actually Delivers"
            subtitle="Support is justified by the business outcomes it produces — not by ticket volume. Here's what well-maintained applications deliver:"
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
        title="Schedule a Free Support Consultation"

        footnote="Typically responds within one business day"
      >
        <p>Tell us about the applications you need supported — their tech stack, current challenges, uptime requirements,
            and what&apos;s not working with your current support setup — and we&apos;ll have a direct conversation about
            what the right plan looks like.</p>
        <p>We respond within one business day. No hard sell, no generic pitch deck — just an honest assessment of
            whether we&apos;re the right fit for your applications.</p>
      </ServicePageCta>
    </div>
  )
}

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
        We typically respond within one business day. No sales pressure - just a real conversation about your SaaS project.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="saas-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="saas-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="saas-email" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Work Email
          </label>
          <Input
            id="saas-email"
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
          <label htmlFor="saas-company" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Company Name
          </label>
          <Input
            id="saas-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="saas-requirements" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Project Description
          </label>
          <Textarea
            id="saas-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your SaaS idea, target users, timeline, and what success looks like..."
            className="bright-panel-input min-h-[90px]"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={isSubmitting}>
          {submitStatus === "success"
            ? "Request Received - We'll be in touch soon!"
            : isSubmitting
              ? "Sending..."
              : "Get Free Consultation"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
        ) : null}
        <p className="capability-card-copy text-center text-xs">Your information is never shared with third parties.</p>
      </form>
    </div>
  )
}

export default function SaaSAppDevelopmentPage() {
  return (
    <div className="service-page modern-service-page saas-app-development-page bg-page-bg text-page-fg">
      <ServiceHeroViewport>

      <section
        id="contact"
        className="software-development-hero section-full-bleed relative overflow-hidden bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full items-start gap-8 lg:gap-14">
          <div className="service-hero-content lg:sticky lg:top-24 self-start">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">

              SaaS App Development

            </h1>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              Building a SaaS product is one of the most consequential investments a business can make. At Toadster
              Technologies, we build SaaS applications end-to-end - from concept and architecture to launch, scaling,
              and long-term iteration.
            </p>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-base leading-relaxed text-page-fg-muted">
              Whether you&apos;re a founder building your first product, an SME modernizing internal tools into a
              licensable SaaS, or an enterprise spinning off a digital product line - we help you get to market faster
              with fewer regrets.
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
            title="SaaS development services built for business outcomes"
            subtitle="Every product we build is designed around one goal: making your business work better. Here's how we help."
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
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What makes working with us different"
            subtitle="We've helped a lot of companies build software. Here's what we've learned about what actually makes the difference."
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
              title="How we turn requirements into working software"
              subtitle="From kickoff to launch, most SaaS builds take 10-16 weeks depending on scope - a production-ready product with real users, real data, and real infrastructure."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">
                Typical SaaS MVP timeline
              </p>
              <div className="service-process-timeline-value">
                10-16 <span className="service-process-timeline-unit">weeks</span>
              </div>
              <p className="service-process-timeline-desc">
                for a production-ready SaaS product with real infrastructure
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
            title="The right tools for the right job"
            subtitle="We don't chase trends. We pick the stack that fits your project's scale, your team's skills, and your long-term maintenance reality."
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
            title="The people you need, ready when you need them"
            subtitle="Building a SaaS product requires more than developers. It requires product thinkers, system architects, QA specialists, and designers working in sync."
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
            title="What good SaaS software actually delivers"
            subtitle="The real measure of a SaaS build isn't the code - it's what happens after launch. Here's what our clients experience."
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
        title="Let's talk about what you're building"

        footnote="Typically responds within one business day"
      >
        <p>Whether you&apos;re starting from scratch, scaling what exists, or modernizing something that&apos;s started
            to slow you down - we can help you figure out the right path forward. The first conversation is free, and
            it&apos;s useful. No sales pressure. No long pitch decks.</p>
      </ServicePageCta>
    </div>
  )
}

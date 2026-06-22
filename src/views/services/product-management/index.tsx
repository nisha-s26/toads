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
      className="capability-card-surface relative rounded-2xl p-8 shadow-2xl lg:p-9"
    >
      <p className="service-form-label relative z-10 mb-3 text-xs font-bold uppercase tracking-wide text-toadster-green">
        Free Consultation
      </p>
      <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-black">Tell us about your project</h3>
      <p className="capability-card-copy relative z-10 mt-2 mb-6 text-sm">
        Tell us about your product and we&apos;ll schedule a free strategy call - no sales pitch, just an honest conversation.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="pm-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="pm-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="pm-email" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Work Email
          </label>
          <Input
            id="pm-email"
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
          <label htmlFor="pm-company" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Company Name
          </label>
          <Input
            id="pm-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="pm-requirements" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Describe your product challenge
          </label>
          <Textarea
            id="pm-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your product, team size, current roadmap challenges, and what outcomes you need from product management support..."
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

export default function ProductManagementPage() {
  return (
    <main className="service-page modern-service-page product-management-page bg-page-bg text-page-fg">
      <ServiceHeroViewport>

      <section
        id="contact"
        className="software-development-hero section-full-bleed relative overflow-hidden bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full items-start gap-8 lg:gap-14">
          <div className="service-hero-content lg:sticky lg:top-24 self-start">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">

              Product Management Services

            </h1>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              Great products don&apos;t happen by accident. We embed senior product managers who own roadmaps, run
              discovery, write requirements, and drive delivery - so your engineering team builds the right things, in
              the right order, for the right reasons.
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
            title="Product management services built around your outcomes"
            subtitle="Every engagement starts with a clear answer to one question: what product outcome does your business need to achieve - and what's standing in the way?"
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


      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What makes working with us different"
            subtitle="A lot of consultants will impress you with frameworks. Few will embed in your team, own delivery outcomes, and stay accountable when stakeholders disagree and timelines slip."
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
              title="How we turn a product brief into predictable delivery"
              subtitle="Good product management isn't a deck of slides - it's a operating rhythm that connects strategy, discovery, prioritisation, and delivery into one coherent system."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">
                Typical onboarding time
              </p>
              <div className="service-process-timeline-value">
                48-72 <span className="service-process-timeline-unit">hours</span>
              </div>
              <p className="service-process-timeline-desc">to embed a PM and start running delivery with your team</p>
            </div>
          </div>

          <ServiceProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="Tools & platforms we work with"
            subtitle="We work across all major product management tools - so our recommendation is always based on what fits your team, not what we're most comfortable with."
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
            title="What strong product management actually delivers"
            subtitle="The ROI of product management isn't theoretical. Here's what clients consistently see when roadmaps, discovery, and delivery are run with real discipline."
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
        title="Let's Talk About Your Product"

        footnote="Typically responds within one business day"
      >
        <p>Tell us where your product is today and where it needs to go. We&apos;ll schedule a free consultation - no
            sales pitch, just an honest conversation about whether we&apos;re the right fit.</p>
      </ServicePageCta>
    </main>
  )
}

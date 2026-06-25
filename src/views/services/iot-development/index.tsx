"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FAQSection } from "@/components/service-page/FAQSection"
import { SectionHead } from "@/components/service-page/SectionHead"
import { ServiceCapabilitiesGrid } from "@/components/service-page/ServiceCapabilitiesGrid"
import { ServiceTechCategoriesGrid } from "@/components/service-page/ServiceTechCategoriesGrid"
import { ServiceIconCardGrid } from "@/components/service-page/ServiceIconCardGrid"
import { ServiceProcessSteps } from "@/components/service-page/ServiceProcessSteps"
import { LazyTrustedBy } from "@/components/service-page/LazyTrustedBy"
import { ServiceHeroViewport } from "@/components/service-page/ServiceHeroViewport"
import { ServiceStatRow } from "@/components/service-page/ServiceStatRow"
import { ServiceHeroSubheading } from "@/components/service-page/ServiceHeroSubheading"
import { ServicePageCta } from "@/components/service-page/ServicePageCta"
import {
  benefits,
  capabilities,
  faqs,
  processSteps,
  techCategories,
  trustStats,
  heroSubheading,
  heroCta,
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
        We typically respond within one business day. No generic pitch - just a direct conversation about what you're trying to connect.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="mad-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="iot-name"
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
            id="iot-email"
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
            id="iot-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="iot-requirements" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Describe your IoT use case or challenge
          </label>
          <Textarea
            id="iot-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your devices, environment, connectivity constraints, and what decisions you need the data to support..."
            className="bright-panel-input min-h-[90px]"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={isSubmitting}>
          {submitStatus === "success"
            ? "Request Received - We'll be in touch soon!"
            : isSubmitting
              ? "Sending..."
              : "Discuss Your IoT Project"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
        ) : null}
        <p className="capability-card-copy text-center text-xs">Your information is never shared with third parties.</p>
      </form>
    </div>
  )
}

export default function IoTDevelopmentPage() {
  return (
    <div className="service-page modern-service-page iot-development-page bg-page-bg text-page-fg">
      <ServiceHeroViewport>

      <section
        id="contact"
        className="software-development-hero section-full-bleed relative bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full items-center gap-8 lg:gap-14">
          <div className="service-hero-content self-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">

              IoT Development

            </h1>
            <ServiceHeroSubheading text={heroSubheading} />

            <p className="service-hero-subtitle mb-8 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              Most businesses are sitting on untapped operational data in factories, fleets, facilities, and field
              equipment. We build end-to-end IoT systems - from hardware and firmware to cloud connectivity, data
              pipelines, and dashboards - that turn that data into decisions.
            </p>

            <ServiceStatRow stats={trustStats} ctaLabel={heroCta.label} ctaHref={heroCta.href} />
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
            title="IoT development services across the full stack"
            subtitle="IoT spans hardware, firmware, connectivity, cloud, data, and application. We cover all of it - from architecture and embedded development to dashboards and analytics."
          />
          <ServiceCapabilitiesGrid capabilities={capabilities} columns="three" tagsLabel="Common Use Cases" compact={false} />
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What makes working with us different"
            subtitle="IoT projects fail at a higher rate than standard software projects. Here's what we do differently - and why it matters for your team long-term."
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
              title="How we approach an IoT project"
              subtitle="IoT projects involve more moving parts than most software projects. Our process reduces risk at each stage before moving to the next - especially when hardware is involved."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">
                Typical PoC timeline
              </p>
              <div className="service-process-timeline-value">
                4-8 <span className="service-process-timeline-unit">weeks</span>
              </div>
              <p className="service-process-timeline-desc">for a focused proof of concept with off-the-shelf hardware</p>
            </div>
          </div>

          <ServiceProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="The tools and platforms we work with"
            subtitle="We're hardware-agnostic and cloud-agnostic. We recommend the right combination for your use case - not what we happen to have invested in."
          />
          <ServiceTechCategoriesGrid categories={techCategories} />
        </div>
      </section>

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What a well-built IoT system actually delivers"
            subtitle="IoT investment is justified by the operational and financial outcomes it produces. Here's what businesses typically gain once a production-grade IoT system is running."
          />
          <ServiceIconCardGrid items={benefits} />
        </div>
      </section>

      

      <FAQSection faqs={faqs} />
      <ServicePageCta
        title="Let's talk about what you're trying to connect"

        footnote="Typically responds within one business day"
      >
        <p>Whether you have a well-defined IoT project, a rough concept, or an existing system you need to fix or
            scale - we&apos;re happy to have a direct conversation about what it would take to get there.</p>
      </ServicePageCta>
    </div>
  )
}

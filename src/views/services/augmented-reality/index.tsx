"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHead } from "@/components/service-page/SectionHead"
import { FAQSection } from "@/components/service-page/FAQSection"
import { ServiceProcessSteps } from "@/components/service-page/ServiceProcessSteps"
import { LazyTrustedBy } from "@/components/service-page/LazyTrustedBy"
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
      <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-black">Discuss your AR project</h3>
      <p className="capability-card-copy relative z-10 mt-2 mb-6 text-sm">
        Tell us the experience you want to create and we&apos;ll schedule a focused discovery call — no hard sell, no
        generic demo reel.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="ar-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="ar-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="ar-email" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Work Email
          </label>
          <Input
            id="ar-email"
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
          <label htmlFor="ar-company" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Company Name
          </label>
          <Input
            id="ar-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="ar-requirements" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Describe the AR experience or problem you&apos;re exploring
          </label>
          <Textarea
            id="ar-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the product you want customers to visualise, the procedure you want engineers to follow, or the data you want teams to see in context..."
            className="bright-panel-input min-h-[90px]"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={isSubmitting}>
          {submitStatus === "success"
            ? "Request Received — We'll be in touch soon!"
            : isSubmitting
              ? "Sending..."
              : "Discuss Your AR Project"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
        ) : null}
        <p className="capability-card-copy text-center text-xs">Your information is never shared with third parties.</p>
      </form>
    </div>
  )
}

export default function AugmentedRealityPage() {
  return (
    <div className="service-page modern-service-page ar-service-page bg-page-bg text-page-fg">
      <section
        id="contact"
        className="software-development-hero section-full-bleed relative overflow-hidden pb-10 md:pb-14 lg:pb-20 bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full items-start gap-8 lg:gap-14">
          <div className="service-hero-content lg:sticky lg:top-24 self-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">

              Augmented Reality Services

            </h1>
            <p className="mb-6 text-xl font-semibold text-toadster-green md:text-2xl">
              Bring Your Products, Spaces, and Processes to Life.
            </p>
            <p className="service-hero-subtitle mb-6 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              There&apos;s a meaningful gap between what customers can imagine from a product page, what trainees can
              absorb from a manual, and what field engineers can diagnose from a diagram — and what they can understand
              when they can actually see it in their environment, overlaid on the real world.
            </p>
            <p className="service-hero-subtitle mb-6 w-full max-w-none text-base leading-relaxed text-page-fg-muted">
              Augmented reality closes that gap. Not as a novelty, but as a practical tool that changes how people buy,
              learn, work, and make decisions. At Toadster Technologies, we design and build AR applications that solve
              real operational and commercial problems — from industrial training and remote assistance to retail
              product visualisation and spatial data overlays.
            </p>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-base leading-relaxed text-page-fg-muted">
              We work across mobile AR, wearable platforms, and web-based AR, and we match the technology to the use case
              rather than defaulting to the most complex or the most experimental option available.
            </p>

            <ServiceStatRow stats={trustStats} />
          </div>

          <div style={{ maxHeight: "calc(100vh - 6rem)", overflow: "auto" }} className="service-hero-form hide-scrollbar">
            <HeroConsultationForm />
          </div>
        </div>
      </section>

      <LazyTrustedBy compact />

      <section id="services" className="section-padding py-16 bg-page-bg-alt">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="Augmented Reality Development Services"
            subtitle="We build across the full AR spectrum — from smartphone-based experiences to enterprise wearable applications, WebAR, and spatial computing. Here's what we cover:"
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


      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What Makes Working With Us Different"
            subtitle="The AR market has a problem with demos that don't survive contact with real users, real lighting conditions, and real operational constraints. Here's how we approach it differently."
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
              title="How We Approach an AR Development Project"
              subtitle="AR projects involve more design and user experience work upfront than standard app development — because the experience is spatial and physical in a way that a screen-based UI is not. Our process reflects that."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">Typical PoC timeline</p>
              <div className="service-process-timeline-value">
                3-6 <span className="service-process-timeline-unit">weeks</span>
              </div>
              <p className="service-process-timeline-desc">for a focused AR proof of concept with real-environment testing</p>
            </div>
          </div>

          <ServiceProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-page-bg section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="Platforms, Frameworks, and Tools We Work With"
            subtitle="We work across all major AR development platforms and choose the right combination based on your target hardware, user base, and content requirements."
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
            title="The People You Need, Ready When You Need Them"
            subtitle="AR development requires a blend of skills that you won't find in a standard mobile development team — spatial UX design, 3D art, real-time rendering optimisation, and AR SDK expertise all need to work together."
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
            title="What Well-Built AR Actually Delivers"
            subtitle="AR is justified by the business outcomes it produces — not by the technology itself. Here's what organisations that have deployed AR well are actually seeing:"
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

      

      <FAQSection
        faqs={faqs}
        title="Questions We Hear Before Every AR Project"
        subtitle="Straightforward answers to the things decision-makers actually want to know."
      />
      <ServicePageCta
        title="Let's Talk About What You Want People to See"

        footnote="Typically responds within one business day"
      >
        <p>Tell us the experience you&apos;re trying to create — the product you want customers to visualise, the
            procedure you want engineers to follow, the data you want teams to see in context — and we&apos;ll have a
            direct conversation about what it would take to build it well.</p>
        <p>We respond within one business day and can schedule a discovery call within the week. No hard sell, no
            generic demo reel. Just a focused conversation about your use case.</p>
      </ServicePageCta>
    </div>
  )
}

"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHead } from "@/components/service-page/SectionHead"
import { FAQSection } from "@/components/service-page/FAQSection"
import { ServiceProcessSteps } from "@/components/service-page/ServiceProcessSteps"
import { LazyTrustedBy } from "@/components/service-page/LazyTrustedBy"
import {
  benefits,
  capabilities,
  complianceFrameworks,
  engagementModels,
  faqs,
  industries,
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
      <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-black">Tell us about your security needs</h3>
      <p className="capability-card-copy relative z-10 mt-2 mb-6 text-sm">
        We typically respond within one business day. No sales pitch — just an honest conversation about your security
        requirements and what the right engagement looks like.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="cyber-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="cyber-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="cyber-email" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Work Email
          </label>
          <Input
            id="cyber-email"
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
          <label htmlFor="cyber-company" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Company Name
          </label>
          <Input
            id="cyber-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="cyber-requirements" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Message
          </label>
          <Textarea
            id="cyber-requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your environment, compliance needs, upcoming audit, or product launch timeline..."
            className="bright-panel-input min-h-[90px]"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={isSubmitting}>
          {submitStatus === "success"
            ? "Request Received — We'll be in touch soon!"
            : isSubmitting
              ? "Sending..."
              : "Get a Free Security Consultation"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
        ) : null}
        <p className="capability-card-copy text-center text-xs">Your information is never shared with third parties.</p>
      </form>
    </div>
  )
}

export default function CybersecurityPage() {
  return (
    <div className="service-page modern-service-page cybersecurity-service-page bg-page-bg text-page-fg">
      <section
        id="contact"
        className="software-development-hero section-full-bleed relative overflow-hidden pb-10 md:pb-14 lg:pb-20 bg-page-bg"
      >
        <div className="service-hero-grid relative mx-auto grid w-full items-start gap-8 lg:gap-14">
          <div className="service-hero-content lg:sticky lg:top-24 self-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">

              Cybersecurity Services

            </h1>
            <p className="mb-6 text-xl font-semibold text-toadster-green md:text-2xl">
              Security That Actually Protects Your Business
            </p>
            <p className="service-hero-subtitle mb-6 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
              Most organisations discover security gaps only after something goes wrong — a breach, a failed audit, a
              customer security questionnaire they can&apos;t answer. We help you find and fix those gaps before they
              become incidents.
            </p>
            <p className="service-hero-subtitle mb-8 w-full max-w-none text-base leading-relaxed text-page-fg-muted">
              At Toadster Technologies, we deliver end-to-end cybersecurity services — from penetration testing and
              vulnerability assessment to cloud security, compliance readiness, and managed SOC operations. Every
              engagement is scoped to your actual environment and threat profile, with manual testing, business-context
              reporting, and retesting included.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="capability-card-surface rounded-xl px-5 py-4 transition-all duration-300"
                >
                  <div className="text-base font-extrabold text-page-fg md:text-lg">{stat.number}</div>
                  <div className="text-sm text-page-fg-muted">{stat.label}</div>
                </div>
              ))}
            </div>
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
            title="Cybersecurity Services Built for Real Risk"
            subtitle="Every engagement is scoped to your actual environment — not a generic checklist. Here's what we cover:"
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
                      <div className="min-w-0 flex-1">
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-toadster-green">{cap.tag}</p>
                        <h3 className="text-lg font-bold text-toadster-green">{cap.title}</h3>
                      </div>
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
            subtitle="A lot of security firms run automated tools and hand you a spreadsheet. That's not what we do."
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
              title="How a Cybersecurity Engagement Works"
              subtitle="From first conversation to continuous improvement, here's how we run a security engagement — transparently, with your team involved at every stage."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">Typical assessment timeline</p>
              <div className="service-process-timeline-value">
                1-6 <span className="service-process-timeline-unit">weeks</span>
              </div>
              <p className="service-process-timeline-desc">
                depending on scope — from a focused assessment to a comprehensive security programme
              </p>
            </div>
          </div>

          <ServiceProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-page-bg section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="The Tools and Platforms Behind Our Work"
            subtitle="We use industry-standard tooling combined with custom scripts and manual techniques that go beyond what commercial platforms can do alone."
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
            title="Compliance Frameworks We Support"
            subtitle="Whether you're preparing for your first audit or maintaining ongoing certification, we help you build the technical controls and evidence your auditors need."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {complianceFrameworks.map((framework) => (
              <div
                key={framework.title}
                className="capability-card-surface relative rounded-2xl p-6 transition-all duration-300"
              >
                <div className="capability-card-header relative z-10">
                  <h3 className="text-lg font-bold text-toadster-green">{framework.title}</h3>
                  <span className="capability-card-heading-rule" aria-hidden="true" />
                </div>
                <p className="capability-card-copy relative z-10 text-sm leading-relaxed">{framework.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-page-bg section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="The People You Work With"
            subtitle="Security is only as good as the people doing the work. Here's the team behind every engagement."
          />
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamStats.map((stat) => (
              <div
                key={stat.label}
                className="capability-card-surface rounded-xl px-5 py-5 transition-all duration-300"
              >
                <div className="text-lg font-extrabold text-page-fg">{stat.value}</div>
                <div className="text-sm text-page-fg-muted">{stat.label}</div>
              </div>
            ))}
          </div>
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

      <section className="py-16 bg-page-bg-alt section-padding">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="Industries We Secure"
            subtitle="Security requirements vary significantly by sector. We have direct delivery experience across regulated and high-risk industries:"
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
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What Good Cybersecurity Actually Delivers"
            subtitle="Beyond the report, here's what you actually get from a well-run security engagement."
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
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="Work With Us the Way That Fits Your Situation"
            subtitle="We offer engagement models that match where you are and what you actually need — from a one-time assessment to a fully managed security programme."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {engagementModels.map((model) => (
              <div key={model.title} className="capability-card-surface relative rounded-2xl p-8 transition-all duration-300">
                <div className="capability-card-header relative z-10">
                  <h3 className="text-xl font-extrabold text-toadster-green">{model.title}</h3>
                  <span className="capability-card-heading-rule" aria-hidden="true" />
                </div>
                <p className="capability-card-copy relative z-10 mt-4 text-sm leading-relaxed">{model.desc}</p>
                <p className="relative z-10 mt-5 mb-3 text-xs font-bold uppercase tracking-wider text-toadster-green">
                  What&apos;s included
                </p>
                <ul className="relative z-10 space-y-2">
                  {model.includes.map((item) => (
                    <li
                      key={item}
                      className="capability-card-copy flex items-start gap-2 border-b border-page-border/60 py-2 text-sm last:border-0"
                    >
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-toadster-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Questions We Hear Before Every Security Engagement"
        subtitle="Straightforward answers to the things decision-makers actually want to know."
      />

      <section className="relative overflow-hidden py-16 bg-page-bg section-padding">
        <div className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(0, 77, 45, 0.22) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-page-fg md:text-4xl">
            Let&apos;s Talk About Your Security Requirements
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-page-fg-muted">
            Whether you have an upcoming compliance audit, a product launch, or a nagging feeling that your security
            posture needs a proper look — we can help you work out what the right engagement looks like.
          </p>
          <p className="mb-10 text-base leading-relaxed text-page-fg-muted">
            We respond within one business day and can schedule a discovery call within the week. No hard sell, no
            generic checklist. Just a focused conversation about your environment and what you need to protect.
          </p>
          <p className="mt-6 text-sm text-page-fg-muted">
            Typically responds within one business day · No spam, no sales scripts
          </p>
        </div>
      </section>
    </div>
  )
}

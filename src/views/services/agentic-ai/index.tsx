"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
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
  costTimelines,
  engagementModels,
  faqs,
  processSteps,
  teamRoles,
  techCategories,
  trustStats,
  useCases,
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
        Agentic AI Consultation
      </p>
      <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-black">
        Talk to an Agentic AI Specialist
      </h3>
      <p className="capability-card-copy relative z-10 mt-2 mb-6 text-sm">
        Tell us the process or task you&apos;re considering automating - we respond within one business day.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div>
          <label htmlFor="agentic-name" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Your Name
          </label>
          <Input
            id="agentic-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            required
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="agentic-company" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Company
          </label>
          <Input
            id="agentic-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="bright-panel-input"
          />
        </div>
        <div>
          <label htmlFor="agentic-email" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            Email
          </label>
          <Input
            id="agentic-email"
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
          <label htmlFor="agentic-task" className="capability-card-copy mb-1.5 block text-sm font-semibold">
            What task or process are you considering automating with an agent?
          </label>
          <Textarea
            id="agentic-task"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe the steps involved, the systems it would need to touch, and what decisions it would need to make..."
            className="bright-panel-input min-h-[100px]"
          />
        </div>
        <Button type="submit" className="w-full rounded-xl py-6 text-base font-bold" disabled={isSubmitting}>
          {submitStatus === "success"
            ? "Request Received - We'll be in touch soon!"
            : isSubmitting
              ? "Sending..."
              : "Talk to an Agentic AI Specialist"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
        ) : null}
        <p className="capability-card-copy text-center text-xs">Your information is never shared with third parties.</p>
      </form>
    </div>
  )
}

export default function AgenticAIPage() {
  return (
    <main className="service-page modern-service-page agentic-ai-page bg-page-bg text-page-fg">
      <ServiceHeroViewport>
        <section
          id="contact"
          className="software-development-hero section-full-bleed relative bg-page-bg"
        >
          <div className="service-hero-grid relative mx-auto grid w-full items-center gap-8 lg:gap-14">
            <div className="service-hero-content self-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-page-fg md:text-5xl lg:text-[3.25rem]">
                Agentic AI
              </h1>
              <p className="mb-6 text-xl font-semibold text-toadster-green md:text-2xl">
                AI That Doesn&apos;t Just Answer. It Acts.
              </p>
              <p className="service-hero-subtitle mb-5 w-full max-w-none text-lg leading-relaxed text-page-fg-muted">
                A chatbot that answers a question is useful. An agent that reads the question, checks three systems,
                makes a decision within defined boundaries, takes an action, and reports back what it did - that&apos;s a
                different category of system, and a different category of business value.
              </p>
              <p className="service-hero-subtitle mb-8 w-full max-w-none text-base leading-relaxed text-page-fg-muted">
                Agentic AI systems plan, use tools, make decisions, and complete multi-step tasks with limited human
                intervention. We design and build agentic AI systems that handle real operational workflows - with the
                guardrails, evaluation, and human oversight that keep them safe and reliable in production.
              </p>

              <ServiceStatRow stats={trustStats} />

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Talk to an Agentic AI Specialist
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#use-cases"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-page-border bg-page-bg-alt px-6 py-3 text-sm font-semibold text-page-fg transition-colors hover:border-toadster-green/40"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            <div
              style={{ maxHeight: "calc(100vh - 6rem)", overflow: "auto" }}
              className="service-hero-form hide-scrollbar"
            >
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
            title="Agentic AI Services Built for Real Operations"
            subtitle="Agentic AI spans a range of capabilities and architectures. Here's what we design and build, matched to the complexity your use case actually requires."
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
                      <h3 className="flex-1 text-lg font-bold text-toadster-green">{cap.title}</h3>
                      <span className="ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
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

      <section id="use-cases" className="section-padding py-16 bg-page-bg">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What Businesses Are Actually Using Agentic AI For"
            subtitle="Agentic AI is most valuable where a task involves multiple steps, requires checking or combining information from more than one source, and follows rules that can be clearly defined."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => {
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

      <section className="section-padding py-16 bg-page-bg-alt">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What Makes Working With Us Different"
            subtitle="Agentic AI is one of the most hyped areas of technology right now, and also one of the easiest to get wrong in ways that aren't obvious until an agent has already taken a wrong action."
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

      <section id="process" className="service-process-section section-padding py-16">
        <div className="service-process-panel mx-auto grid service-page-container items-start gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-14 lg:px-10 lg:py-14">
          <div className="service-process-intro lg:sticky lg:top-24 self-start">
            <SectionHead
              label=""
              title="How We Approach an Agentic AI Engagement"
              subtitle="Agentic AI projects require more upfront boundary-setting and evaluation work than typical software or even standard LLM projects - because the system is taking actions, not just producing outputs."
            />
            <div className="service-process-timeline-card">
              <p className="service-process-timeline-label">Typical pilot timeline</p>
              <div className="service-process-timeline-value">
                6–10 <span className="service-process-timeline-unit">weeks</span>
              </div>
              <p className="service-process-timeline-desc">
                for a single, well-bounded agent with guardrails and human oversight
              </p>
            </div>
          </div>

          <ServiceProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="section-padding py-16 bg-page-bg-alt">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="The Frameworks and Platforms We Work With"
            subtitle="Agentic AI tooling is evolving quickly. We work across the leading frameworks and choose based on your specific orchestration, reliability, and integration requirements."
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

      <section className="section-padding py-16 bg-page-bg">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="The People You Need, Ready When You Need Them"
            subtitle="Building agentic AI systems well requires people who understand both the capabilities and the failure modes of autonomous AI - not just standard software engineers applying an LLM API."
          />
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "48h", label: "Average onboarding time" },
              { value: "Agent-Native", label: "Specialists, not generalists" },
              { value: "Safety-First", label: "Guardrails on every build" },
              { value: "IST · GST · EST", label: "Time zones covered" },
            ].map((stat) => (
              <div key={stat.label} className="capability-card-surface rounded-2xl p-5 text-center">
                <div className="text-2xl font-extrabold text-toadster-green md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-page-fg-muted">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {teamRoles.map((role) => {
              const Icon = role.icon
              return (
                <div
                  key={role.title}
                  className="capability-card-surface group relative rounded-2xl p-6 transition-all duration-300"
                >
                  <span className="relative z-10 mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <div className="capability-card-header relative z-10">
                    <h3 className="font-bold text-toadster-green">{role.title}</h3>
                    <span className="capability-card-heading-rule" aria-hidden="true" />
                  </div>
                  <p className="capability-card-copy relative z-10 text-sm leading-relaxed">{role.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding py-16 bg-page-bg-alt">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="What Well-Built Agentic AI Actually Delivers"
            subtitle="Agentic AI is justified by what it lets your business do that it couldn't do before - not by the sophistication of the technology."
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

      <section id="engagement" className="section-padding py-16 bg-page-bg">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="Work With Us the Way That Fits Your Situation"
            subtitle="Agentic AI engagements range from a focused feasibility assessment to ongoing management of a fleet of production agents. We structure the work to match where you are."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className={`capability-card-surface relative rounded-2xl p-7 transition-all duration-300 ${
                  model.featured ? "ring-2 ring-toadster-green/30" : ""
                }`}
              >
                {model.featured ? (
                  <span className="relative z-10 mb-4 inline-block rounded-full bg-toadster-green px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Recommended starting point
                  </span>
                ) : null}
                <div className="capability-card-header relative z-10">
                  <h3 className="text-lg font-bold text-toadster-green">{model.title}</h3>
                  <span className="capability-card-heading-rule" aria-hidden="true" />
                </div>
                <p className="relative z-10 mb-2 text-sm font-semibold text-page-fg-muted">{model.timeline}</p>
                <p className="capability-card-copy relative z-10 mb-5 text-sm leading-relaxed">{model.desc}</p>
                <p className="capability-card-copy relative z-10 mb-3 text-[11px] font-bold uppercase tracking-wider">
                  What&apos;s included
                </p>
                <ul className="relative z-10 space-y-2">
                  {model.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-page-fg-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-toadster-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding py-16 bg-page-bg-alt">
        <div className="service-page-container px-4">
          <SectionHead
            label=""
            title="How much does agentic AI development cost?"
            subtitle="Pricing depends on the number of agents, integration complexity, and autonomy level. Here's a realistic breakdown - we'll give you a detailed estimate after understanding your specific use case."
          />
          <div className="overflow-x-auto rounded-2xl border border-page-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-page-border bg-page-bg">
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

      <FAQSection
        faqs={faqs}
        title="Questions We Hear Before Every Agentic AI Project"
        subtitle="Straight answers about safety, cost, scope, and what to expect before you commit to building."
      />

      <ServicePageCta
        title="Let's Talk About What You Want an AI Agent to Actually Do"
        ctaLabel="Talk to an Agentic AI Specialist"
        footnote="We respond within one business day and can have a technical discovery call scheduled within the week."
      >
        <p>
          Tell us the process or task you&apos;re considering automating with an agent - the steps involved, the systems
          it would need to touch, and what decisions it would need to make - and we&apos;ll have a direct, technically
          grounded conversation about whether agentic AI is the right approach and what it would take to build well.
        </p>
      </ServicePageCta>
    </main>
  )
}

import Link from "next/link"
import { ArrowRight, Users, type LucideIcon } from "lucide-react"
import { SplitSectionHeading } from "@/components/SplitSectionHeading"
import { cn } from "@/lib/utils"
import { FaqItem } from "./FaqItem"
import { TechnologyCapabilityCard, TechnologyCapabilityGrid } from "./TechnologyCapabilityCard"
import type { ExploreCard } from "./technology-explore-utils"

export type TechnologyExploreSectionConfig = {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
  cards: ExploreCard[]
}

export type TechnologyBentoItem = {
  variant: "dark" | "green" | "white" | "outline"
  badge?: string
  title: string
  desc: string
  href?: string
  icon?: LucideIcon
}

type ProcessStep = {
  num: number
  title: string
  desc: string
}

type Faq = {
  question: string
  answer: string
}

export function TechnologyServicesSection({
  title,
  intro,
  bentoItems,
}: {
  title: string
  intro: string
  bentoItems: TechnologyBentoItem[]
}) {
  return (
    <section id="services" className="my-14 da-section da-section-muted">
      <div className="da-container da-section-head pb-6">
        <SplitSectionHeading as="h2" title={title} className="da-section-title" />
        <p className="da-section-subtitle">{intro}</p>
      </div>
      <div className="da-container da-bento-grid">
        {bentoItems.map((item) => {
          if (item.variant === "dark") {
            return (
              <article key={item.title} className="da-bento-card da-bento-card--dark da-bento-card--featured">
                <span className="da-bento-badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link href={item.href ?? "/contact"} className="da-bento-link">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
                <div className="da-bento-dark-visual" aria-hidden />
              </article>
            )
          }

          if (item.variant === "green") {
            return (
              <article key={item.title} className="da-bento-card da-bento-card--green">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="da-bento-green-icon">
                  <Users size={28} strokeWidth={1.75} />
                </span>
              </article>
            )
          }

          const Icon = item.icon
          return (
            <article
              key={item.title}
              className={`da-bento-card da-bento-card--white${item.variant === "outline" ? " da-bento-card--outline" : ""}`}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {Icon ? (
                <span className="da-bento-white-icon">
                  <Icon size={24} strokeWidth={2} />
                </span>
              ) : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export function TechnologyProcessSection({
  title,
  intro,
  steps,
}: {
  title: string
  intro: string
  steps: ProcessStep[]
}) {
  return (
    <section className="py-14 da-section da-process-section">
      <div className="da-container da-section-head pb-6">
        <SplitSectionHeading as="h2" title={title} className="da-section-title" />
        <p className="da-section-subtitle">{intro}</p>
      </div>
      <div
        className={cn(
          "da-container da-process-grid",
          steps.length >= 5 && "da-process-grid--5",
        )}
      >
        {steps.map((step) => (
          <article key={step.title} className="da-process-step">
            <span className={`da-process-num ${step.num % 2 === 0 ? "da-process-num--alt" : ""}`}>{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function TechnologyExploreSections({
  services,
  hire,
}: {
  services: TechnologyExploreSectionConfig
  hire: TechnologyExploreSectionConfig
}) {
  return (
    <>
      <section className="da-section da-section-light da-explore-section">
        <div className="da-container da-section-head">
          <SplitSectionHeading as="h2" title={services.title} className="da-section-title" />
          <p className="da-section-subtitle">{services.subtitle}</p>
        </div>
        <TechnologyCapabilityGrid className="da-explore-cards-grid">
          {services.cards.map((card) => (
            <TechnologyCapabilityCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              href={card.href}
              ctaAnchor={card.ctaAnchor}
              compact
            />
          ))}
        </TechnologyCapabilityGrid>
        <div className="da-container da-explore-actions">
          <Link href={services.ctaHref} className="da-btn da-btn-explore" title={services.ctaLabel}>
            {services.ctaLabel}
          </Link>
        </div>
      </section>

      <section className="da-section da-explore-section">
        <div className="da-container da-section-head">
          <SplitSectionHeading as="h2" title={hire.title} className="da-section-title" />
          <p className="da-section-subtitle">{hire.subtitle}</p>
        </div>
        <TechnologyCapabilityGrid className="da-explore-cards-grid">
          {hire.cards.map((card) => (
            <TechnologyCapabilityCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              href={card.href}
              ctaAnchor={card.ctaAnchor}
              compact
            />
          ))}
        </TechnologyCapabilityGrid>
        <div className="da-container da-explore-actions">
          <Link href={hire.ctaHref} className="da-btn da-btn-explore" title={hire.ctaLabel}>
            {hire.ctaLabel}
          </Link>
        </div>
      </section>
    </>
  )
}

export function TechnologyFaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="da-section da-faq-section">
      <div className="faq-section-layout da-faq-wrap">
        <div className="da-faq-heading">
          <SplitSectionHeading
            as="h2"
            titleBefore="Frequently Asked "
            titleAccent="Questions"
            className="da-section-title"
          />
        </div>
        <div className="da-faq-list">
          {faqs.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function TechnologyCtaSection({
  title,
  subtitle,
  primaryLabel,
  footnote,
}: {
  title: string
  subtitle: string
  primaryLabel: string
  footnote: string
}) {
  return (
    <section className="da-section da-cta-section">
      <div className="da-container">
        <div className="hire-resources-cta da-cta-card text-center">
          <SplitSectionHeading as="h2" title={title} inverted className="da-cta-title" />
          <p className="da-cta-subtitle">{subtitle}</p>
          <div className="da-cta-actions">
            <Link href="/contact" className="da-cta-btn da-cta-btn-primary" title={primaryLabel}>
              {primaryLabel}
            </Link>
          </div>
          <p className="da-cta-footnote">{footnote}</p>
        </div>
      </div>
    </section>
  )
}

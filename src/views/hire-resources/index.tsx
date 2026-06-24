"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  Brain,
  ChevronDown,
  ChevronUp,
  Clock,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  MessageSquare,
  Monitor,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TabletSmartphone,
  TrendingUp,
  UserCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react"
import { HireHubCard } from "@/components/hire/HireHubCard"
import { HomepageFaqItem } from "@/components/homepage/HomepageFaqItem"
import { ScrollReveal } from "@/components/ScrollReveal"
import { cn } from "@/lib/utils"
import {
  ctaSection,
  faqs,
  heroContent,
  resourceTypesSection,
  whyHireSection,
  whyToadsterection,
} from "./data"

const WHY_HIRE_ICONS = [Clock, Wallet, TrendingUp] as const
const WHY_TOADSTER_ICONS = [UserCheck, MessageSquare, Globe, ShieldCheck] as const

const RESOURCE_ICONS: LucideIcon[] = [
  Smartphone,
  Server,
  Layers,
  Database,
  Sparkles,
  Brain,
  Monitor,
  Cloud,
  TabletSmartphone,
  Smartphone,
  Monitor,
]

const STAGGER_STEP = 0.08
const RESOURCE_TYPES_INITIAL_COUNT = 9
const FAQ_INITIAL_COUNT = 5
const REVEAL_COLLAPSE_MS = 420

const EXPERT_CTA_CLASS =
  "inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-toadster-green transition-all hover:-translate-y-0.5 hover:bg-white/90"

const HERO_EXPERT_CTA_CLASS =
  "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-hover"

function SectionHeading({
  titleBefore,
  titleAccent,
  intro,
  delay = 0,
  titleClassName,
}: {
  titleBefore: string
  titleAccent: string
  intro?: string
  delay?: number
  titleClassName?: string
}) {
  return (
    <ScrollReveal className="mb-7 w-full text-center md:mb-9" delay={delay}>
      <h2
        className={`text-3xl font-extrabold leading-[1.08] sm:text-4xl md:text-5xl${titleClassName ? ` ${titleClassName}` : ""}`}
      >
        <span className="text-page-fg">{titleBefore}</span>
        <span className="text-toadster-green">{titleAccent}</span>
      </h2>
      {intro ? (
        <p className="hire-hub-section-intro mx-auto mt-4 w-full text-sm leading-relaxed sm:text-base md:text-lg">
          {intro}
        </p>
      ) : null}
    </ScrollReveal>
  )
}

function useInViewOnce(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: "0px 0px -4% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible, threshold])

  return { ref, visible }
}

function SeeMoreToggle({
  expanded,
  collapsing = false,
  onSeeMore,
  onSeeLess,
}: {
  expanded: boolean
  collapsing?: boolean
  onSeeMore: () => void
  onSeeLess: () => void
}) {
  return (
    <ScrollReveal className="mt-6 flex justify-center md:mt-8" delay={0.1}>
      {!expanded ? (
        <button type="button" onClick={onSeeMore} className="hire-hub-toggle-btn hire-hub-toggle-btn--more">
          See more
          <ChevronDown className="h-4 w-4" aria-hidden />
        </button>
      ) : (
        <button
          type="button"
          onClick={onSeeLess}
          disabled={collapsing}
          className="hire-hub-toggle-btn hire-hub-toggle-btn--less"
        >
          See less
          <ChevronUp className="h-4 w-4" aria-hidden />
        </button>
      )}
    </ScrollReveal>
  )
}

function FaqList() {
  const { ref, visible } = useInViewOnce()
  const [expanded, setExpanded] = useState(false)
  const [collapsing, setCollapsing] = useState(false)
  const hasMore = faqs.length > FAQ_INITIAL_COUNT
  const showExtra = expanded || collapsing
  const visibleFaqs = showExtra ? faqs : faqs.slice(0, FAQ_INITIAL_COUNT)

  function handleSeeMore() {
    setCollapsing(false)
    setExpanded(true)
  }

  function handleSeeLess() {
    setCollapsing(true)
    window.setTimeout(() => {
      setExpanded(false)
      setCollapsing(false)
      document.getElementById("hire-hub-faq")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, REVEAL_COLLAPSE_MS)
  }

  return (
    <>
      <div ref={ref} className="flex w-full flex-col gap-3">
        {visibleFaqs.map((faq, index) => {
          const isExtra = index >= FAQ_INITIAL_COUNT

          return (
            <div
              key={faq.question}
              className={cn(
                "hire-hub-faq-item",
                !isExtra && visible && "hire-hub-faq-item--visible",
                isExtra && expanded && !collapsing && "hire-hub-faq-item--enter",
                isExtra && collapsing && "hire-hub-faq-item--exit",
              )}
              style={{
                ["--faq-index" as string]: isExtra ? index - FAQ_INITIAL_COUNT : index,
                ...(isExtra
                  ? { ["--resource-reveal-delay" as string]: `${(index - FAQ_INITIAL_COUNT) * 0.06}s` }
                  : {}),
              }}
            >
              <HomepageFaqItem question={faq.question} answer={faq.answer} />
            </div>
          )
        })}
      </div>

      {hasMore ? (
        <SeeMoreToggle
          expanded={expanded}
          collapsing={collapsing}
          onSeeMore={handleSeeMore}
          onSeeLess={handleSeeLess}
        />
      ) : null}
    </>
  )
}

function ResourceTypesGrid() {
  const items = resourceTypesSection.items
  const hasMore = items.length > RESOURCE_TYPES_INITIAL_COUNT
  const [expanded, setExpanded] = useState(false)
  const [collapsing, setCollapsing] = useState(false)

  const showExtra = expanded || collapsing
  const visibleItems = showExtra ? items : items.slice(0, RESOURCE_TYPES_INITIAL_COUNT)

  function handleSeeMore() {
    setCollapsing(false)
    setExpanded(true)
  }

  function handleSeeLess() {
    setCollapsing(true)
    window.setTimeout(() => {
      setExpanded(false)
      setCollapsing(false)
      document.getElementById("resource-types")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, REVEAL_COLLAPSE_MS)
  }

  return (
    <>
      <div className="hire-hub-cards-grid hire-hub-cards-grid--3">
        {visibleItems.map((item, index) => {
          const isExtra = index >= RESOURCE_TYPES_INITIAL_COUNT
          const card = (
            <HireHubCard
              title={item.title}
              description={item.description}
              icon={RESOURCE_ICONS[index] ?? Code2}
              href={item.href}
              variant="resource"
            />
          )

          return (
            <div
              key={`${item.href}-${index}`}
              className={cn(
                "hire-hub-resource-card-slot h-full",
                isExtra && expanded && !collapsing && "hire-hub-resource-card-slot--enter",
                isExtra && collapsing && "hire-hub-resource-card-slot--exit",
              )}
              style={
                isExtra
                  ? { ["--resource-reveal-delay" as string]: `${(index - RESOURCE_TYPES_INITIAL_COUNT) * 0.07}s` }
                  : undefined
              }
            >
              {isExtra ? card : (
                <ScrollReveal delay={index * STAGGER_STEP} className="h-full">
                  {card}
                </ScrollReveal>
              )}
            </div>
          )
        })}
      </div>

      {hasMore ? (
        <SeeMoreToggle
          expanded={expanded}
          collapsing={collapsing}
          onSeeMore={handleSeeMore}
          onSeeLess={handleSeeLess}
        />
      ) : null}
    </>
  )
}

function CtaPanel() {
  const { ref, visible } = useInViewOnce(0.2)

  return (
    <div ref={ref} className="hire-page-container w-full">
      <div
        className={cn(
          "hire-resources-cta hire-hub-cta-panel relative overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14",
          visible && "hire-hub-cta-panel--visible",
        )}
      >
        <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
          {ctaSection.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          {ctaSection.description}
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/contact" title={ctaSection.expertCta} className={EXPERT_CTA_CLASS}>
            {ctaSection.expertCta}
            <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-6 text-xs text-white/70">{ctaSection.footer}</p>
      </div>
    </div>
  )
}

export default function HireResourcesHubPage() {
  return (
    <main className="hire-resources-hub homepage-content relative min-h-screen font-sans text-page-fg">
      {/* Hero - background extends behind fixed navbar */}
      <section className="hire-hub-hero-section section-full-bleed homepage-hero-viewport--image relative isolate overflow-hidden pt-28">
        <div className="homepage-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="homepage-hero-bg-image absolute inset-0">
            <Image
              src="/hire-resources-hero-light.webp"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={90}
              sizes="100vw"
              className="object-cover object-center dark:hidden"
            />
            <Image
              src="/hire-resources-hero-dark.webp"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={90}
              sizes="100vw"
              className="hidden object-cover object-center dark:block"
            />
          </div>
          <div className="homepage-hero-bg-overlay absolute inset-0" />
          <div className="hire-hub-hero-bg-overlay absolute inset-0" />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#065606]/22 via-[#065606]/14 to-[#044404]/26 dark:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-white/20 to-white/30 dark:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 hidden bg-black/45 dark:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-[#022802]/80 via-[#065606]/72 to-black/78 dark:block"
            aria-hidden
          />
        </div>

        <div className="hire-page-container relative z-10 w-full">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center py-10 text-center sm:py-12 lg:py-14">
            <h1 className="hero-enter-delay-1 w-full text-3xl font-extrabold leading-[1.08] dark:drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              <span className="text-black dark:text-white">Hire Dedicated Developers & </span>
              <span className="text-toadster-green dark:text-green-400">Technology Resources</span>
            </h1>
            {heroContent.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={cn(
                  "mt-4 w-full text-sm font-medium leading-relaxed text-black dark:text-white dark:drop-shadow-[0_1px_10px_rgba(0,0,0,0.85)] sm:text-base md:text-lg",
                  index === 0 ? "hero-enter-delay-2" : "hero-enter-delay-3",
                )}
              >
                {paragraph}
              </p>
            ))}

            <div className="hero-enter-delay-3 mt-8 flex w-full justify-center">
              <Link href="/contact" title={heroContent.expertCta} className={HERO_EXPERT_CTA_CLASS}>
                {heroContent.expertCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="hire-hub-hero-badges hero-enter-delay-4 mt-8 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-black dark:!text-white dark:drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] sm:text-sm">
              {heroContent.badges.map((badge, index) => (
                <span
                  key={badge}
                  className="flex items-center gap-4 dark:!text-white"
                  style={{ ["--badge-index" as string]: index }}
                >
                  {index > 0 ? (
                    <span className="hidden text-page-border dark:text-white/35 sm:inline" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Dedicated Resources */}
      <section className="hire-hub-section relative">
        <div className="hire-page-container w-full">
          <SectionHeading
            titleBefore="Why Hire "
            titleAccent="Dedicated Resources"
            intro={whyHireSection.intro}
          />
          <div className="hire-hub-cards-grid hire-hub-cards-grid--3">
            {whyHireSection.benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * STAGGER_STEP} className="h-full">
                <HireHubCard
                  title={benefit.title}
                  description={benefit.body}
                  icon={WHY_HIRE_ICONS[index] ?? Clock}
                  variant="benefit"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Types Available */}
      <section id="resource-types" className="hire-hub-section relative scroll-mt-28">
        <div className="hire-page-container w-full">
          <SectionHeading
            titleBefore="Resource Types "
            titleAccent="Available"
            intro={resourceTypesSection.intro}
          />
          <ResourceTypesGrid />
        </div>
      </section>

      {/* Why Choose Toadster */}
      <section className="hire-hub-section relative">
        <div className="hire-page-container w-full">
          <SectionHeading
            titleBefore="Why Choose "
            titleAccent="Toadster Technologies"
            intro={whyToadsterection.intro}
          />
          <div className="hire-hub-cards-grid hire-hub-cards-grid--2">
            {whyToadsterection.items.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * STAGGER_STEP} className="h-full">
                <HireHubCard
                  title={item.title}
                  description={item.body}
                  icon={WHY_TOADSTER_ICONS[index] ?? ShieldCheck}
                  variant="feature"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="hire-hub-cta" className="hire-hub-section scroll-mt-28">
        <CtaPanel />
      </section>

      {/* FAQs */}
      <section id="hire-hub-faq" className="hire-hub-section scroll-mt-28">
        <div className="hire-page-container w-full">
          <div className="hire-hub-faq-wrap">
            <SectionHeading
              titleBefore="Frequently Asked "
              titleAccent="Questions"
              titleClassName="hire-faq-title"
            />
            <FaqList />
          </div>
        </div>
      </section>
    </main>
  )
}

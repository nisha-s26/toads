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
import { HireRoleCard } from "@/components/homepage/HireRoleCard"
import { HomepageFaqItem } from "@/components/homepage/HomepageFaqItem"
import { PageSectionHeading } from "@/components/PageSectionHeading"
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

const CARD_GRID_CLASS = "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
const FEATURE_GRID_CLASS = "grid gap-5 sm:grid-cols-2"

const EXPERT_CTA_CLASS =
  "inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-toadster-green shadow-md transition-all hover:-translate-y-0.5 hover:bg-white/90 dark:bg-primary dark:text-white dark:shadow-md dark:ring-1 dark:ring-white/15 dark:hover:bg-primary-hover"

const HERO_EXPERT_CTA_CLASS =
  "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-hover"

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
        <button
          type="button"
          onClick={onSeeMore}
          className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
        >
          See more
          <ChevronDown className="h-4 w-4" aria-hidden />
        </button>
      ) : (
        <button
          type="button"
          onClick={onSeeLess}
          disabled={collapsing}
          className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md disabled:opacity-60"
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
      <div ref={ref} className="flex w-full flex-col gap-2.5">
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
      <div className={CARD_GRID_CLASS}>
        {visibleItems.map((item, index) => {
          const isExtra = index >= RESOURCE_TYPES_INITIAL_COUNT
          const card = (
            <HireRoleCard
              title={item.title}
              description={item.description}
              icon={RESOURCE_ICONS[index] ?? Code2}
              href={item.href}
              index={index}
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
    <div ref={ref} className="hire-page-container">
      <div
        className={cn(
          "hire-resources-cta hire-hub-cta-panel relative overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14",
          visible && "hire-hub-cta-panel--visible",
        )}
      >
        <h3 className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-white md:text-3xl">
          {ctaSection.title}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
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
      <section className="hire-hub-hero-section section-full-bleed homepage-hero-viewport homepage-hero-viewport--image relative flex flex-col overflow-hidden">
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
          <div className="services-hub-hero-blur absolute inset-0" aria-hidden />
          <div className="homepage-hero-bg-overlay absolute inset-0" />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-white/20 to-white/30 dark:hidden"
            aria-hidden
          />
          <div className="services-hub-hero-dark-tint pointer-events-none absolute inset-0 hidden dark:block" aria-hidden />
        </div>

        <div className="relative z-10 flex w-full flex-1 flex-col items-start justify-center pb-4 pt-[calc(5.75rem+env(safe-area-inset-top,0px))] sm:pb-[calc(var(--hero-bottom-offset,3.5rem)+0.25rem)] sm:pt-[calc(4.75rem+env(safe-area-inset-top,0px))]">
          <div className="hire-page-container">
            <div className="flex w-full flex-col items-start py-6 text-left sm:py-8 lg:py-10">
            <h1 className="hero-enter-delay-1 w-full text-3xl font-extrabold leading-[1.08] text-[var(--page-hero-fg)] sm:text-4xl md:text-5xl lg:text-[3.25rem] dark:drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
              <span className="text-black dark:text-white">Hire Dedicated Developers & </span>
              <span className="text-toadster-green dark:text-[var(--page-hero-accent)]">Technology Resources</span>
            </h1>
            {heroContent.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={cn(
                  "mt-4 w-full text-sm font-medium leading-relaxed text-black dark:text-[var(--page-hero-fg-muted)] dark:drop-shadow-[0_1px_10px_rgba(0,0,0,0.85)] sm:text-base md:text-lg",
                  index === 0 ? "hero-enter-delay-2" : "hero-enter-delay-3",
                )}
              >
                {paragraph}
              </p>
            ))}

            <div className="hero-enter-delay-3 mt-8 flex w-full justify-start">
              <Link href="/contact" title={heroContent.expertCta} className={HERO_EXPERT_CTA_CLASS}>
                {heroContent.expertCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="hire-hub-hero-badges hero-enter-delay-4 mt-8 flex w-full flex-wrap items-center justify-start gap-x-4 gap-y-2 text-xs font-semibold text-black dark:text-[var(--page-hero-fg-muted)] dark:drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] sm:text-sm">
              {heroContent.badges.map((badge, index) => (
                <span
                  key={badge}
                  className="flex items-center gap-4"
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
        </div>
      </section>

      {/* Why Hire Dedicated Resources */}
      <section className="hire-hub-section homepage-snap-section relative px-4 sm:px-0">
        <div className="hire-page-container">
          <PageSectionHeading
            titleBefore="Why Hire "
            titleAccent="Dedicated Resources"
            intro={whyHireSection.intro}
            introClassName="max-w-none"
            headingClassName="mb-4"
          />
          <div className={CARD_GRID_CLASS}>
            {whyHireSection.benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * STAGGER_STEP} className="h-full">
                <HireRoleCard
                  title={benefit.title}
                  description={benefit.body}
                  icon={WHY_HIRE_ICONS[index] ?? Clock}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Types Available */}
      <section id="resource-types" className="hire-hub-section homepage-snap-section relative scroll-mt-28 px-4 sm:px-0">
        <div className="hire-page-container">
          <PageSectionHeading
            titleBefore="Resource Types "
            titleAccent="Available"
            intro={resourceTypesSection.intro}
            introClassName="max-w-none"
            headingClassName="mb-4"
          />
          <ResourceTypesGrid />
        </div>
      </section>

      {/* Why Choose Toadster */}
      <section className="hire-hub-section homepage-snap-section relative px-4 sm:px-0">
        <div className="hire-page-container">
          <PageSectionHeading
            titleBefore="Why Choose "
            titleAccent="Toadster Technologies"
            intro={whyToadsterection.intro}
            introClassName="max-w-none"
            headingClassName="mb-4"
          />
          <div className={FEATURE_GRID_CLASS}>
            {whyToadsterection.items.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * STAGGER_STEP} className="h-full">
                <HireRoleCard
                  title={item.title}
                  description={item.body}
                  icon={WHY_TOADSTER_ICONS[index] ?? ShieldCheck}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="hire-hub-cta" className="hire-hub-section homepage-snap-section scroll-mt-28 px-4 sm:px-0">
        <CtaPanel />
      </section>

      {/* FAQs */}
      <section id="hire-hub-faq" className="hire-hub-section homepage-snap-section scroll-mt-28 px-4 sm:px-0">
        <div className="hire-page-container">
          <PageSectionHeading
            titleBefore="Frequently Asked "
            titleAccent="Questions"
            headingClassName="mb-4"
          />
          <FaqList />
        </div>
      </section>
    </main>
  )
}

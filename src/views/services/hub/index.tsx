"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  Brain,
  Bot,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Code2,
  Cpu,
  Eye,
  GitBranch,
  Layers,
  LifeBuoy,
  Lock,
  Monitor,
  Scan,
  Server,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react"
import { HubFeatureCard, HubSectionHeader, HubTable } from "@/components/hire/HireHubUi"
import { HireHubCard } from "@/components/hire/HireHubCard"
import { HomepageFaqItem } from "@/components/homepage/HomepageFaqItem"
import { ScrollReveal } from "@/components/ScrollReveal"
import { LazyTrustedBy } from "@/components/service-page/LazyTrustedBy"
import { useTheme } from "@/hooks/theme"
import { cn } from "@/lib/utils"
import { SERVICES_NAV, type ServiceNavIcon } from "@/config/services-nav"
import {
  allServicesSection,
  ctaSection,
  deliveryProcess,
  engagementModels,
  faqs,
  heroContent,
  practiceAreas,
  togetherSection,
  whyToadster,
} from "./data"

const PRACTICE_ICONS = practiceAreas.map((area) => area.icon)

const STAGGER_STEP = 0.08
const FAQ_INITIAL_COUNT = 5
const SERVICES_INITIAL_COUNT = 9
const REVEAL_COLLAPSE_MS = 420

const SERVICE_NAV_ICON_MAP: Record<ServiceNavIcon, LucideIcon> = {
  Brain,
  Bot,
  GitBranch,
  Code2,
  Smartphone,
  Server,
  Cpu,
  Eye,
  Scan,
  ClipboardList,
  ShieldCheck,
  Lock,
  LifeBuoy,
  Layers,
  Monitor,
}

function scrollToAllServices() {
  document.getElementById("all-services")?.scrollIntoView({ behavior: "smooth", block: "start" })
}

function SectionHeading({
  titleBefore,
  titleAccent,
  intro,
  delay = 0,
}: {
  titleBefore: string
  titleAccent: string
  intro?: string
  delay?: number
}) {
  return (
    <ScrollReveal className="mb-8 w-full text-center md:mb-10" delay={delay}>
      <h2 className="text-3xl font-extrabold leading-[1.08] sm:text-4xl md:text-5xl">
        <span className="text-page-fg">{titleBefore}</span>
        <span className="text-toadster-green">{titleAccent}</span>
      </h2>
      {intro ? (
        <p className="mx-auto mt-4 w-full max-w-3xl text-sm leading-relaxed text-page-fg-muted sm:text-base md:text-lg">
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
    <ScrollReveal className="mt-8 flex justify-center" delay={0.1}>
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

function ServicesGrid() {
  const items = SERVICES_NAV
  const hasMore = items.length > SERVICES_INITIAL_COUNT
  const [expanded, setExpanded] = useState(false)
  const [collapsing, setCollapsing] = useState(false)

  const showExtra = expanded || collapsing
  const visibleItems = showExtra ? items : items.slice(0, SERVICES_INITIAL_COUNT)

  function handleSeeMore() {
    setCollapsing(false)
    setExpanded(true)
  }

  function handleSeeLess() {
    setCollapsing(true)
    window.setTimeout(() => {
      setExpanded(false)
      setCollapsing(false)
      document.getElementById("all-services")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, REVEAL_COLLAPSE_MS)
  }

  return (
    <>
      <div className="hire-hub-cards-grid hire-hub-cards-grid--3">
        {visibleItems.map((item, index) => {
          const isExtra = index >= SERVICES_INITIAL_COUNT
          const Icon = SERVICE_NAV_ICON_MAP[item.icon]
          const card = (
            <HireHubCard
              title={item.title}
              description={item.description}
              icon={Icon}
              href={item.href}
              variant="resource"
              exploreLabel="Explore service"
            />
          )

          return (
            <div
              key={item.href}
              className={cn(
                "hire-hub-resource-card-slot h-full",
                isExtra && expanded && !collapsing && "hire-hub-resource-card-slot--enter",
                isExtra && collapsing && "hire-hub-resource-card-slot--exit",
              )}
              style={
                isExtra
                  ? { ["--resource-reveal-delay" as string]: `${(index - SERVICES_INITIAL_COUNT) * 0.07}s` }
                  : undefined
              }
            >
              {isExtra ? (
                card
              ) : (
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

function FaqList() {
  const { ref, visible } = useInViewOnce()
  const [expanded, setExpanded] = useState(false)
  const [collapsing, setCollapsing] = useState(false)
  const hasMore = faqs.length > FAQ_INITIAL_COUNT
  const showExtra = expanded || collapsing
  const visibleFaqs = showExtra ? faqs : faqs.slice(0, FAQ_INITIAL_COUNT)

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
          onSeeMore={() => setExpanded(true)}
          onSeeLess={() => {
            setCollapsing(true)
            window.setTimeout(() => {
              setExpanded(false)
              setCollapsing(false)
              document.getElementById("services-hub-faq")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }, REVEAL_COLLAPSE_MS)
          }}
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-toadster-green transition-all hover:-translate-y-0.5 hover:bg-white/90"
          >
            {ctaSection.primaryCta}
            <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            onClick={scrollToAllServices}
            className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full border border-white/90 px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            {ctaSection.secondaryCta}
          </button>
        </div>
        <p className="mt-6 text-xs text-white/70">{ctaSection.footer}</p>
      </div>
    </div>
  )
}

export default function ServicesHubPage() {
  const { theme } = useTheme()
  const heroOnDarkBackground = theme === "dark"

  return (
    <main className="services-hub hire-resources-hub homepage-content relative min-h-screen font-sans text-page-fg">
      <section className="homepage-hero-viewport homepage-hero-viewport--image relative flex flex-col overflow-hidden">
        <div className="homepage-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="homepage-hero-bg-image absolute inset-0">
            <Image
              src="/services light mode.png"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={95}
              sizes="100vw"
              className="object-cover object-center dark:hidden"
            />
            <Image
              src="/services dark mode.png"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={95}
              sizes="100vw"
              className="hidden object-cover object-center dark:block"
            />
          </div>
          <div className="homepage-hero-bg-overlay absolute inset-0" />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-white/20 to-white/30 dark:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 hidden bg-black/45 dark:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-black/80 via-black/72 to-black/78 dark:block"
            aria-hidden
          />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center px-4 pb-4 pt-[calc(5.75rem+env(safe-area-inset-top,0px))] sm:min-h-0 sm:flex-1 sm:justify-center sm:pb-[calc(var(--hero-bottom-offset,3.5rem)+0.25rem)] sm:px-6 sm:pt-[calc(4.75rem+env(safe-area-inset-top,0px))]">
          <div className="hire-page-container w-full">
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center py-10 text-center sm:py-12 lg:py-14">
              <h1 className="hero-enter-delay-1 w-full text-3xl font-extrabold leading-[1.08] text-black dark:text-white dark:drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                {heroContent.title}
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

              <div className="hero-enter-delay-3 mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={scrollToAllServices}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  {heroContent.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-page-border-strong px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:-translate-y-0.5 hover:bg-page-fg/5 dark:border-white/45 dark:text-white dark:hover:bg-white/10"
                >
                  {heroContent.secondaryCta}
                </Link>
              </div>

              <div className="hire-hub-hero-badges hero-enter-delay-4 mt-8 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-black dark:!text-white dark:drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] sm:text-sm">
                {heroContent.badges.map((badge, index) => (
                  <span key={badge} className="flex items-center gap-4 dark:!text-white">
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

        <LazyTrustedBy compact onDarkBackground={heroOnDarkBackground} />
      </section>

      <section className="hire-hub-section relative">
        <div className="hire-page-container w-full">
          <SectionHeading titleBefore="What We " titleAccent="Do" />
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-page-fg-muted sm:text-base">
            Our services fall into five practice areas, each staffed by engineers who specialise in that domain rather
            than generalists spread thin across every technology we offer.
          </p>
          <div className="hire-hub-cards-grid hire-hub-cards-grid--2">
            {practiceAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * STAGGER_STEP} className="h-full">
                <HireHubCard
                  title={area.title}
                  description={area.description}
                  icon={PRACTICE_ICONS[index] ?? area.icon}
                  variant="feature"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="all-services" className="hire-hub-section relative scroll-mt-28">
        <div className="hire-page-container w-full">
          <SectionHeading
            titleBefore="All "
            titleAccent="Services"
            intro={allServicesSection.intro}
          />
          <ServicesGrid />
        </div>
      </section>

      <section className="hire-hub-section relative">
        <div className="hire-page-container w-full">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <HubSectionHeader
                eyebrow="Integrated delivery"
                title={togetherSection.title}
                intro={togetherSection.paragraphs[0]}
              />
              <p className="text-sm leading-relaxed text-page-fg-muted md:text-base">{togetherSection.paragraphs[1]}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-2">
                {practiceAreas.map((area, index) => (
                  <div key={area.title} className="hire-hub-feature-card">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-toadster-green/12 text-toadster-green">
                      {(() => {
                        const Icon = PRACTICE_ICONS[index] ?? area.icon
                        return <Icon className="h-5 w-5" strokeWidth={1.75} />
                      })()}
                    </span>
                    <h3 className="mt-4 text-base font-bold text-slate-900">{area.title}</h3>
                    <div className="mt-4 h-0.5 w-10 rounded-full bg-toadster-green" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="service-process-section section-padding py-16">
        <div className="service-process-panel mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <HubSectionHeader
            eyebrow="How we work"
            title={deliveryProcess.title}
            intro={deliveryProcess.intro}
            centered
            inverted
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryProcess.steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-white/14 bg-white/8 p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-extrabold text-emerald-300">{step.num}</div>
                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/76">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hire-hub-section relative">
        <div className="hire-page-container w-full">
          <SectionHeading
            titleBefore="Engagement "
            titleAccent="Models"
            intro="How you engage us depends on how well-defined your scope already is. A fixed-scope project suits a clearly bounded deliverable; a dedicated team suits ongoing product development where requirements will keep evolving."
          />
          <ScrollReveal delay={0.1}>
            <HubTable headers={engagementModels.headers} rows={engagementModels.rows} />
          </ScrollReveal>
        </div>
      </section>

      <section className="hire-hub-section relative">
        <div className="hire-page-container w-full">
          <SectionHeading
            titleBefore="Why Choose "
            titleAccent="Toadster Technologies"
            intro="Choosing a technology partner usually comes down to trust in their judgment as much as their technical ability. Here's what that looks like in practice."
          />
          <div className="hire-hub-cards-grid hire-hub-cards-grid--2">
            {whyToadster.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * STAGGER_STEP} className="h-full">
                <HubFeatureCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services-hub-cta" className="hire-hub-section scroll-mt-28">
        <CtaPanel />
      </section>

      <section id="services-hub-faq" className="hire-hub-section scroll-mt-28 pb-16">
        <div className="hire-page-container w-full">
          <div className="hire-hub-faq-wrap">
            <SectionHeading titleBefore="Frequently Asked " titleAccent="Questions" />
            <FaqList />
          </div>
        </div>
      </section>
    </main>
  )
}

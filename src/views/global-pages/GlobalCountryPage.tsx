"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Brain,
  Check,
  ChevronRight,
  Cog,
  GitBranch,
  Layers,
  MapPin,
  Server,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { HomepageFaqItem } from "@/components/homepage/HomepageFaqItem"
import { GlobalExploreCities } from "@/components/global-pages/GlobalExploreCities"
import { GlobalCountryProcessTrack } from "@/components/global-pages/GlobalCountryProcessTrack"
import { getCitiesForCountry } from "@/views/global-pages/city-registry"
import { GLOBAL_COUNTRY_PAGES } from "@/views/global-pages/registry"
import type { GlobalCountryPageData } from "./types"

const WHY_ICONS = [Shield, MapPin, Cog] as const

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "Generative AI Development": Sparkles,
  "AI Agent Development": Bot,
  "RAG Development (Retrieval-Augmented Generation)": GitBranch,
  "RAG Development & Enterprise Knowledge Base AI": GitBranch,
  "LLM Development": Brain,
  "Machine Learning Development": Layers,
  "Enterprise AI Integration": Server,
}

function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max)
  const lastSpace = cut.lastIndexOf(" ")
  return `${(lastSpace > max * 0.55 ? cut.slice(0, lastSpace) : cut).trim()}…`
}

function firstParagraph(text: string): string {
  const parts = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean)
  if (parts.length <= 1) return text.replace(/\n+/g, " ")
  return `${parts[0]} ${parts[1]}`
}

function cardTitleFromPoint(point: string): { title: string; body: string } {
  const bold = point.match(/^\*\*(.+?)\*\*\s*([\s\S]*)/)
  if (bold) return { title: bold[1], body: bold[2].trim() }
  const dot = point.indexOf(". ")
  if (dot > 0 && dot < 100) {
    return { title: point.slice(0, dot), body: point.slice(dot + 2).trim() }
  }
  return { title: truncate(point, 48), body: point }
}

function extractChallengeBullets(text: string): { title: string; body: string }[] {
  const boldItems = [...text.matchAll(/\*\*(.+?)\*\*\s*([^*]+?)(?=\*\*|$)/g)]
  if (boldItems.length >= 3) {
    return boldItems.slice(0, 3).map((m) => ({
      title: m[1].replace(/\.$/, ""),
      body: m[2].trim(),
    }))
  }
  const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => s.length > 20)
  return sentences.slice(0, 3).map((s, i) => ({
    title: `Challenge ${i + 1}`,
    body: s,
  }))
}

function serviceIcon(title: string): LucideIcon {
  for (const [key, icon] of Object.entries(SERVICE_ICONS)) {
    if (title.includes(key.split(" ")[0]) || title.startsWith(key.slice(0, 12))) return icon
  }
  return Sparkles
}

type ServiceVariant = "featured" | "light" | "lavender" | "mint" | "white"

function serviceVariant(index: number): ServiceVariant {
  if (index === 0) return "featured"
  if (index === 2) return "lavender"
  if (index === 4) return "mint"
  if (index === 1) return "light"
  return "white"
}

function SectionContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`global-country-container ${className ?? ""}`.trim()}>{children}</div>
}

export function GlobalCountryPage({ data }: { data: GlobalCountryPageData }) {
  const isCityPage = Boolean(data.parentCountryKey)
  const parentCountry = data.parentCountryKey ? GLOBAL_COUNTRY_PAGES[data.parentCountryKey] : undefined
  const exploreCountryKey = data.parentCountryKey ?? data.key
  const exploreCountryLabel = parentCountry?.country ?? data.country
  const exploreCities = getCitiesForCountry(exploreCountryKey)
  const heroText = firstParagraph(data.heroIntro)
  const whyCards = data.whyChoosePoints.slice(0, 3)
  const services = data.services.slice(0, 5)
  const challenges = extractChallengeBullets(data.trends)
  const processSteps = data.processSteps.slice(0, 7)
  const faqs = data.faqs.slice(0, 8)

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]

  return (
    <main className="global-country-page font-sans min-h-screen bg-[#eef1f8] text-page-fg dark:bg-page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero */}
      <section className="global-country-section global-country-hero relative overflow-hidden">
        <div className="global-country-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="global-country-hero-bg-image absolute inset-0">
            <Image
              src="/global-country-hero-light.webp"
              alt={`Toadster software development and AI services in ${data.country}`}
              title={`Toadster software development and AI services in ${data.country}`}
              fill
              priority
              fetchPriority="high"
              quality={90}
              sizes="100vw"
              className="object-cover object-center dark:hidden"
            />
            <Image
              src="/global-country-hero-dark.webp"
              alt={`Toadster software development and AI services in ${data.country}`}
              title={`Toadster software development and AI services in ${data.country}`}
              fill
              priority
              fetchPriority="high"
              quality={90}
              sizes="100vw"
              className="hidden object-cover object-center dark:block"
            />
          </div>
          <div className="global-country-hero-bg-overlay absolute inset-0" />
        </div>

        <SectionContainer className="global-country-hero-content relative z-10">
          <div className="w-full max-w-7xl">
            <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-page-fg-muted dark:text-white/75">
              {parentCountry ? (
                <>
                  <Link href={parentCountry.slug} title={parentCountry.country} className="hover:text-toadster-green">
                    {parentCountry.country}
                  </Link>
                  <ChevronRight className="h-3 w-3" aria-hidden />
                </>
              ) : null}
              <span>{data.country}</span>
            </nav>
            <h1 className="mt-4 text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-[#0a2f1f] drop-shadow-[0_1px_12px_rgba(255,255,255,0.65)] dark:text-white dark:drop-shadow-[0_2px_16px_rgba(0,0,0,0.75)] sm:text-3xl md:text-4xl lg:text-6xl">
              {data.heroTitle}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-black dark:text-white/85 md:text-lg">{heroText}</p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" title="Book a strategy call" className="global-country-btn-primary">
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              
            </div>
          </div>

          {/* <ScrollReveal delay={0.08} y={20} className="relative pb-6 sm:pb-0">
            <div className="global-country-hero-media relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/60 shadow-lg sm:aspect-[16/11] lg:aspect-auto lg:h-[340px]">
              <Image src={heroImage} alt={data.heroTitle} fill className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" priority />
              <div className="absolute inset-0 bg-linear-to-tr from-[#0a2f1f]/30 to-transparent" />
            </div>
            <div className="global-country-stat-float relative mt-4 max-w-[280px] rounded-xl border border-page-border bg-white p-4 shadow-lg dark:bg-page-card sm:absolute sm:-bottom-4 sm:left-4 sm:mt-0">
              <p className="text-xl font-extrabold text-toadster-green">91%</p>
              <p className="text-sm leading-snug text-page-fg-muted">
                Average increase in operational efficiency for our {data.country} clients.
              </p>
            </div>
          </ScrollReveal> */}
        </SectionContainer>
      </section>

      {/* Why Choose */}
      {whyCards.length > 0 && (
        <section className="global-country-section global-country-why-section" style={{ padding: "2rem 2rem"}}>
          <SectionContainer>
            <ScrollReveal className="global-country-section-header text-center">
              <h2 className="text-2xl font-extrabold text-[#0a2f1f] dark:text-page-fg text-3xl md:text-4xl lg:text-5xl">
                Why Businesses in {data.country} Choose Toadster
              </h2>
              {data.whyChooseIntro ? (
                <p className="mx-auto mt-4 max-w-9xl text-base text-page-fg-muted md:text-lg">{data.whyChooseIntro}</p>
              ) : null}
            </ScrollReveal>
            <div className="global-country-card-grid">
              {whyCards.map((point, index) => {
                const { title, body } = cardTitleFromPoint(point)
                const Icon = WHY_ICONS[index % WHY_ICONS.length]
                return (
                  <ScrollReveal key={`${data.key}-why-${index}-${title}`} delay={index * 0.07} y={18}>
                    <article className="global-country-why-card group h-full">
                      <Icon className="h-6 w-6 text-toadster-green" strokeWidth={2} />
                      <div className="global-country-card-header mt-4">
                        <h3 className="text-base font-bold text-page-fg md:text-lg">{title}</h3>
                        <span className="global-country-title-rule" aria-hidden />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-page-fg-muted md:text-base">{body}</p>
                    </article>
                  </ScrollReveal>
                )
              })}
            </div>
          </SectionContainer>
        </section>
      )}

      {/* Services bento */}
      {services.length > 0 && (
        <section className="global-country-section global-country-services-wrap" style={{ padding: "2rem 2rem"}}>
          <SectionContainer>
            <ScrollReveal className="global-country-section-header">
              <h2 className="text-2xl font-extrabold text-white text-3xl md:text-4xl lg:text-5xl">Enterprise AI Development Services</h2>
              <p className="mt-3 max-w-xl text-base text-white/80 md:text-lg">
                Production-grade AI built for {data.country} - compliance, scale, and measurable ROI.
              </p>
            </ScrollReveal>
            <div className="global-country-bento">
              {services.map((service, index) => {
                const variant = serviceVariant(index)
                const Icon = serviceIcon(service.title)
                const isFeatured = index === 0
                return (
                  <ScrollReveal
                    key={`${data.key}-service-${index}-${service.title}`}
                    delay={index * 0.06}
                    y={16}
                    className={isFeatured ? "global-country-bento-featured" : undefined}
                  >
                    <article className={`global-country-service-card global-country-service-card--${variant} group h-full`}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="global-country-card-header min-w-0 flex-1">
                          <h3 className="text-base font-bold leading-snug md:text-lg">{service.title}</h3>
                          <span className="global-country-title-rule global-country-title-rule--on-dark" aria-hidden />
                        </div>
                        <span className="global-country-service-icon shrink-0">
                          <Icon size={20} strokeWidth={2} />
                        </span>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed opacity-90 md:text-base">{service.description}</p>
                      {isFeatured ? (
                        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                          <Link href="/contact" title="Get a quote" className="underline-offset-2 hover:underline">
                            Get a Quote
                          </Link>
                          <Link href="/contact" title="Contact sales" className="underline-offset-2 hover:underline">
                            Contact Sales
                          </Link>
                        </div>
                      ) : null}
                    </article>
                  </ScrollReveal>
                )
              })}
            </div>
          </SectionContainer>
        </section>
      )}

      {/* Challenges */}
      {challenges.length > 0 && (
        <section className="global-country-section global-country-challenges" style={{ padding: "2rem 2rem"}}>
          <SectionContainer className="global-country-split-grid">
            <ScrollReveal y={18}>
              <h2 className="text-2xl font-extrabold text-[#0a2f1f] dark:text-page-fg text-3xl md:text-4xl lg:text-5xl">
                Navigating {data.country}&apos;s AI Adoption Challenges
              </h2>
              <ul className="global-country-challenge-list">
                {challenges.map((item, index) => (
                  <li key={`${data.key}-challenge-${index}-${item.title}`} className="global-country-challenge-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="global-country-check">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="text-base font-bold text-page-fg md:text-lg">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-page-fg-muted md:text-base">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1} y={18}>
              <div className="global-country-stat-panel rounded-2xl">
                <p className="text-4xl font-extrabold leading-none text-toadster-green md:text-5xl">86%</p>
                <p className="mt-3 text-base leading-relaxed text-white/90 md:text-lg">
                  of enterprise AI initiatives fail to reach production without the right architecture and delivery partner.
                </p>
                <blockquote className="mt-5 border-l-2 border-toadster-green pl-4 text-sm italic leading-relaxed text-white/80 md:text-base">
                  &ldquo;We build AI that survives compliance review, real data volume, and the six-month mark after launch.&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>
          </SectionContainer>
        </section>
      )}

      {/* Process */}
      {processSteps.length > 0 && (
        <section className="global-country-section global-country-process-section">
          <SectionContainer>
            <ScrollReveal className="global-country-section-header text-center">
              <h2 className="text-2xl font-extrabold text-[#0a2f1f] dark:text-page-fg text-3xl md:text-4xl lg:text-5xl">
                Our {processSteps.length}-Step AI Development Process
              </h2>
            </ScrollReveal>
            <GlobalCountryProcessTrack
              steps={processSteps}
              renderDescription={(step) => truncate(step.description, 100)}
            />
          </SectionContainer>
        </section>
      )}

      {exploreCities.length > 0 ? (
        <GlobalExploreCities
          countryKey={exploreCountryKey}
          countryLabel={exploreCountryLabel}
          cities={exploreCities}
          activeCityKey={isCityPage ? data.key : undefined}
        />
      ) : null}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section id="faq" className="max-w-7xl mx-auto">
          <SectionContainer className="max-w-4xl">
            <ScrollReveal className="global-country-section-header text-center">
              <h2 className="text-2xl font-extrabold md:text-5xl">Frequently Asked Questions</h2>
            </ScrollReveal>
            <div className="global-country-faq-list">
              {faqs.map((faq, index) => (
                <ScrollReveal key={`${data.key}-faq-${index}-${faq.question}`} delay={index * 0.04} y={10}>
                  <HomepageFaqItem question={faq.question} answer={truncate(faq.answer, 320)} />
                </ScrollReveal>
              ))}
            </div>
          </SectionContainer>
        </section>
      )}

      {/* CTA */}
      <section className="global-country-section">
        <SectionContainer>
          <ScrollReveal>
            <div className="hire-resources-cta relative overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14">
              <h2 className="mx-auto max-w-7xl text-2xl font-bold leading-tight text-white md:text-3xl lg:text-5xl">
                {data.ctaTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-7xl text-base leading-relaxed text-white/80 md:text-lg">{data.ctaBody}</p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/contact"
                  title="Book a strategy call"
                  className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-toadster-green transition-all hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Book a Strategy Call
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </SectionContainer>
      </section>
    </main>
  )
}

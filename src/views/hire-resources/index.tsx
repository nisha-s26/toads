"use client"

import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Globe,
  MessageSquare,
  Rocket,
  Search,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Wallet,
} from "lucide-react"
import {
  HubBenefitCard,
  HubChallengeCard,
  HubFeatureCard,
  HubSectionHeader,
  HubTable,
  HubTechCard,
  HubWorkflowPanel,
} from "@/components/hire/HireHubUi"
import { HomepageFaqItem } from "@/components/homepage/HomepageFaqItem"
import { ProcessSteps } from "@/components/homepage/ProcessSteps"
import { ScrollReveal } from "@/components/ScrollReveal"
import {
  challengesSection,
  comparisonSection,
  costSection,
  ctaSection,
  engagementModelsSection,
  faqs,
  faqsSection,
  heroContent,
  managementSection,
  onboardingSection,
  resourceTypesSection,
  technologySection,
  whyHireSection,
  whyToadsterSection,
} from "./data"

const WHY_HIRE_ICONS = [Clock, Wallet, TrendingUp] as const
const WHY_TOADSTER_ICONS = [UserCheck, MessageSquare, Globe, ShieldCheck] as const
const PROCESS_ICONS = [Search, UserCheck, Rocket] as const

function scrollToCta() {
  document.getElementById("hire-hub-cta")?.scrollIntoView({ behavior: "smooth", block: "center" })
}

function scrollToResourceTypes() {
  document.getElementById("resource-types")?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function HireResourcesHubPage() {
  const processSteps = onboardingSection.steps.map((step, index) => ({
    id: step.id,
    title: step.title,
    description: step.description,
    Icon: PROCESS_ICONS[index] ?? Search,
  }))

  return (
    <main className="hire-resources-hub min-h-screen bg-page-bg pt-28 font-sans text-page-fg">
      {/* Section 1 — Hero */}
      <section className="hire-hub-hero relative overflow-hidden px-4 py-10 lg:px-20 lg:py-14">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-toadster-green/8 via-transparent to-transparent" />
        <div className="absolute -right-24 top-8 -z-10 h-64 w-64 rounded-full bg-toadster-green/10 blur-3xl" />

        <ScrollReveal>
          <div className="mx-auto flex w-full max-w-9xl flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-toadster-green">{heroContent.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl text-3xl font-extrabold leading-tight md:text-5xl lg:text-[3.25rem]">
              {heroContent.title}
            </h1>
            {heroContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-4xl text-base leading-relaxed text-page-fg-subtle md:text-lg">
                {paragraph}
              </p>
            ))}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={scrollToCta}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {heroContent.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={scrollToResourceTypes}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-page-border-strong px-6 text-sm font-semibold text-page-fg transition-colors hover:bg-page-fg/5"
              >
                {heroContent.secondaryCta}
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs font-semibold text-page-fg-muted">
              {heroContent.badges.map((badge, index) => (
                <span key={badge} className="flex items-center gap-3">
                  {index > 0 ? <span className="text-page-border" aria-hidden="true">|</span> : null}
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 2 — Why Hire Dedicated Resources */}
      <section className="hire-hub-panel relative px-4 py-10 lg:px-20 lg:py-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-b from-toadster-green/8 via-transparent to-toadster-green/5" />
        <div className="relative mx-auto max-w-9xl">
          <HubSectionHeader
            eyebrow={whyHireSection.eyebrow}
            title={whyHireSection.title}
            intro={whyHireSection.intro}
            centered
          />
          <div className="grid gap-4 md:grid-cols-3">
            {whyHireSection.benefits.map((benefit, index) => (
              <HubBenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.body}
                icon={WHY_HIRE_ICONS[index] ?? Clock}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Common Business Challenges */}
      <section className="hire-challenges-section px-4 py-10 lg:px-20">
        <div className="mx-auto grid max-w-9xl grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-toadster-green">{challengesSection.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-bold text-page-fg md:text-3xl">{challengesSection.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-page-fg-muted sm:text-base">{challengesSection.intro}</p>
          </div>
          <div className="hire-challenges-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {challengesSection.items.map((item) => (
              <HubChallengeCard key={item.title} title={item.title} description={item.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Resource Types Available */}
      <section id="resource-types" className="hire-hub-panel relative scroll-mt-28 px-4 py-10 lg:px-20 lg:py-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-b from-toadster-green/8 via-transparent to-toadster-green/5" />
        <div className="relative mx-auto max-w-9xl">
          <HubSectionHeader
            eyebrow={resourceTypesSection.eyebrow}
            title={resourceTypesSection.title}
            intro={resourceTypesSection.intro}
            centered
          />
          <HubTable
            headers={resourceTypesSection.headers}
            rows={resourceTypesSection.items.map((item) => [item.title, item.description])}
            linkFirstColumn={{ hrefs: resourceTypesSection.items.map((item) => item.href) }}
          />
        </div>
      </section>

      {/* Section 5 — Flexible Engagement Models */}
      <section className="px-4 py-10 lg:px-20">
        <div className="mx-auto max-w-9xl">
          <HubSectionHeader
            eyebrow={engagementModelsSection.eyebrow}
            title={engagementModelsSection.title}
            intro={engagementModelsSection.intro}
            centered
          />
          <HubTable headers={engagementModelsSection.headers} rows={engagementModelsSection.rows} />
        </div>
      </section>

      {/* Section 6 — Resource Onboarding Process */}
      <section className="px-4 py-10 lg:px-20">
        <div className="mx-auto max-w-9xl overflow-hidden rounded-3xl bg-[#065606] px-6 py-12 sm:px-10 sm:py-14">
          <HubSectionHeader
            eyebrow={onboardingSection.eyebrow}
            title={onboardingSection.title}
            intro={onboardingSection.intro}
            centered
            inverted
          />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Section 8 — Why Choose Toadster Technologies */}
      <section className="hire-hub-panel relative px-4 py-10 lg:px-20 lg:py-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-b from-toadster-green/8 via-transparent to-toadster-green/5" />
        <div className="relative mx-auto max-w-9xl">
          <HubSectionHeader
            eyebrow={whyToadsterSection.eyebrow}
            title={whyToadsterSection.title}
            intro={whyToadsterSection.intro}
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyToadsterSection.items.map((item, index) => (
              <HubFeatureCard
                key={item.title}
                title={item.title}
                description={item.body}
                icon={WHY_TOADSTER_ICONS[index] ?? ShieldCheck}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 — Resource Management & Communication */}
      <section className="px-4 py-10 lg:px-20">
        <div className="mx-auto grid max-w-9xl grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-toadster-green">{managementSection.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-bold text-page-fg md:text-3xl">{managementSection.title}</h2>
            <div className="mt-5 flex flex-col gap-4">
              {managementSection.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-page-fg-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <HubWorkflowPanel items={managementSection.workflowItems} />
          </div>
        </div>
      </section>

      {/* Section 10 — Technology Expertise */}
      <section className="px-4 py-10 lg:px-20">
        <div className="mx-auto max-w-9xl">
          <HubSectionHeader
            eyebrow={technologySection.eyebrow}
            title={technologySection.title}
            intro={technologySection.intro}
            centered
          />
          <div className="grid gap-4 md:grid-cols-2">
            {technologySection.groups.map((group) => (
              <HubTechCard key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 11 — Hiring Models Comparison */}
      <section className="hire-hub-panel relative px-4 py-10 lg:px-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-b from-toadster-green/8 via-transparent to-toadster-green/5" />
        <div className="relative mx-auto max-w-9xl">
          <HubSectionHeader
            eyebrow={comparisonSection.eyebrow}
            title={comparisonSection.title}
            intro={comparisonSection.intro}
            centered
          />
          <HubTable headers={comparisonSection.headers} rows={comparisonSection.rows} />
        </div>
      </section>

      {/* Section 12 — Cost Considerations */}
      <section className="px-4 py-10 lg:px-20">
        <div className="mx-auto grid max-w-9xl grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-toadster-green">{costSection.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-bold text-page-fg md:text-3xl">{costSection.title}</h2>
            <div className="mt-5 flex flex-col gap-4">
              {costSection.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-page-fg-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-toadster-green/20 bg-toadster-green/8 p-6 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-toadster-green">{costSection.factorsTitle}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-page-fg-muted">
              {costSection.factors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 13 — CTA */}
      <section id="hire-hub-cta" className="scroll-mt-28 px-4 py-10 lg:px-20">
        <div className="mx-auto max-w-9xl">
          <div className="hire-resources-cta relative overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14">
            <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              {ctaSection.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {ctaSection.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={scrollToCta}
                className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-toadster-green transition-colors hover:bg-white/90"
              >
                {ctaSection.primaryCta}
                <ArrowRight size={16} />
              </button>
              <Link
                href="/contact"
                title={ctaSection.secondaryCta}
                className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full border border-white/90 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {ctaSection.secondaryCta}
              </Link>
            </div>
            <p className="mt-6 text-xs text-white/70">{ctaSection.footer}</p>
          </div>
        </div>
      </section>

      {/* Section 15 — FAQs */}
      <section className="px-4 py-10 pb-16 lg:px-20">
        <div className="mx-auto max-w-9xl">
          <HubSectionHeader eyebrow={faqsSection.eyebrow} title={faqsSection.title} centered />
          <div className="mx-auto flex max-w-4xl flex-col gap-3">
            {faqs.map((faq) => (
              <HomepageFaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CountrySectionCard } from "@/components/CountrySectionCard"
import { CountryHero } from "@/components/CountryHero"
import { CountryServicesPanel } from "@/components/CountryServicesPanel"
import { IndiaLocationSwitcher } from "@/components/IndiaLocationSwitcher"
import { COUNTRY_PAGES, INDIA_LOCAL_PAGES } from "./countryPageData"

export function CountryPage({ country }: { country: "india" | "uae" }) {
  const page = COUNTRY_PAGES[country]
  const structuredData = [
    page.schema,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ].filter(Boolean)

  return (
    <main className="min-h-screen bg-page-bg pt-28 text-page-fg">
      {structuredData.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <CountryHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        office={page.office}
        heroImage={page.heroImage}
        heroImageAlt={page.title}
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-11 rounded-xl px-6 text-sm font-semibold">
              <Link href="/contact">
                {page.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Link
              href="/services/ai-development"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-page-border-strong px-6 text-sm font-semibold text-page-fg transition-colors hover:bg-page-fg/5"
            >
              Explore AI Services
            </Link>
          </div>
        }
      />

      <section className="px-4 py-6 lg:px-20">
        <div className="mx-auto grid max-w-9xl gap-5 lg:grid-cols-2">
          {page.sections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.06}>
              <CountrySectionCard
                title={section.title}
                paragraphs={section.body}
                image={section.image}
                imageAlt={section.title}
                index={index}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CountryServicesPanel
        title={page.servicesTitle}
        services={page.services}
        sectorsTitle={page.sectorsTitle}
        sectors={page.sectors}
      />

      {country === "india" && (
        <IndiaLocationSwitcher
          title="Explore AI development pages by city"
          description="Choose a local page for Noida, Delhi, Bangalore, Mumbai, or Hyderabad based on where your team operates."
          locations={INDIA_LOCAL_PAGES}
        />
      )}

      <div className="pb-10" />
    </main>
  )
}

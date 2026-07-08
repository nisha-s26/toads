"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CITY_CARD_IMAGES, COUNTRY_HERO_IMAGES } from "@/constants/countryTechImages"
import type { GlobalCityPageData } from "@/views/global-pages/types"

const EXPLORE_CITIES_INTROS: Record<string, string> = {
  india:
    "Discover the unique pulse of India's most iconic urban centers, where ancient monuments stand as silent guardians over bustling modern metropolises.",
  australia:
    "Explore AI development across Australia's leading business hubs - from harbour-side enterprise to national innovation corridors.",
  canada:
    "From Pacific tech corridors to Canada's largest financial centre - explore AI development where your business operates.",
  uk: "Explore AI development across the UK's most dynamic cities, from global finance to northern innovation hubs.",
  usa: "From coast to coast - explore AI development in America's most competitive business markets.",
}

type GlobalExploreCitiesProps = {
  countryKey: string
  countryLabel: string
  cities: GlobalCityPageData[]
  activeCityKey?: string
}

export function GlobalExploreCities({ countryKey, countryLabel, cities, activeCityKey }: GlobalExploreCitiesProps) {
  if (cities.length === 0) return null

  const intro =
    EXPLORE_CITIES_INTROS[countryKey] ??
    `Explore AI development across ${countryLabel}'s leading cities and business hubs.`

  const title = activeCityKey ? `Explore More Cities in ${countryLabel}` : "Explore Our Cities"

  return (
    <section className="global-country-section global-country-explore-cities-section">
      <div className="global-country-container global-country-explore-cities">
        <ScrollReveal>
          <div className="global-country-explore-cities-header text-center">
            <h2 className="global-country-explore-cities-title text-2xl font-extrabold text-[#0a2f1f] dark:text-page-fg text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-page-fg-muted md:text-lg">{intro}</p>
          </div>
        </ScrollReveal>

        <div className="global-country-explore-cities-track">
          {cities.map((city, index) => {
            const isActive = city.key === activeCityKey
            const image =
              CITY_CARD_IMAGES[city.key] ??
              (city.parentCountryKey ? COUNTRY_HERO_IMAGES[city.parentCountryKey] : undefined) ??
              COUNTRY_HERO_IMAGES.sydney
            const description = (city.exploreCardDescription ?? city.metaDescription).slice(0, 100).trim()
            const descriptionText = description.length >= 100 ? `${description}…` : description

            return (
              <ScrollReveal key={`${countryKey}-city-${index}-${city.key}`} delay={index * 0.06} y={16} className="global-country-city-card-wrap">
                <Link
                  href={city.slug}
                  title={`Explore Toadster services in ${city.country}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`global-country-city-card group ${isActive ? "global-country-city-card--active" : ""}`}
                >
                  <div className="global-country-city-card-media">
                    <Image
                      src={image}
                      alt={`${city.country} landmark`}
                      title={`${city.country} landmark`}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc((100vw - 1rem) / 2), 260px"
                    />
                    <div className="global-country-city-card-overlay" />
                  </div>
                  <div className="global-country-city-card-content">
                    <h3 className="global-country-city-card-title text-lg font-bold text-white md:text-xl">
                      {city.country}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/85 md:text-sm">{descriptionText}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white md:text-sm">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

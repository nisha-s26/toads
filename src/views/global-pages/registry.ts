import { GERMANY_PAGE } from './data/germany'
import { UAE_PAGE } from './data/uae'
import { SAUDI_ARABIA_PAGE } from './data/saudi-arabia'
import { AUSTRALIA_PAGE } from './data/australia'
import { USA_PAGE } from './data/usa'
import { UK_PAGE } from './data/uk'
import { CANADA_PAGE } from './data/canada'
import { INDIA_PAGE } from './data/india'
import { SINGAPORE_PAGE } from './data/singapore'
import type { GlobalCountryPageData } from './types'

export const GLOBAL_COUNTRY_PAGES: Record<string, GlobalCountryPageData> = {
  "germany": GERMANY_PAGE,
  "uae": UAE_PAGE,
  "saudi-arabia": SAUDI_ARABIA_PAGE,
  "australia": AUSTRALIA_PAGE,
  "usa": USA_PAGE,
  "uk": UK_PAGE,
  "canada": CANADA_PAGE,
  "india": INDIA_PAGE,
  "singapore": SINGAPORE_PAGE,
}

export const GLOBAL_COUNTRY_FLAGS: Record<string, string> = {
  germany: "🇩🇪",
  uae: "🇦🇪",
  "saudi-arabia": "🇸🇦",
  australia: "🇦🇺",
  usa: "🇺🇸",
  uk: "🇬🇧",
  canada: "🇨🇦",
  india: "🇮🇳",
  singapore: "🇸🇬",
}

/** Short labels and display order for the globe menu */
export const GLOBAL_COUNTRY_NAV_ORDER: string[] = [
  "india",
  "usa",
  "uae",
  "saudi-arabia",
  "germany",
  "australia",
  "uk",
  "canada",
  "singapore",
]

export const GLOBAL_COUNTRY_NAV_LABELS: Record<string, string> = {
  india: "IN",
  usa: "USA",
  uae: "UAE",
  "saudi-arabia": "SA",
  germany: "DE",
  australia: "AU",
  uk: "UK",
  canada: "CA",
  singapore: "SG",
}

export const GLOBAL_COUNTRY_NAV = GLOBAL_COUNTRY_NAV_ORDER
  .filter((key) => GLOBAL_COUNTRY_PAGES[key])
  .map((key) => {
    const page = GLOBAL_COUNTRY_PAGES[key]
    return {
      key: page.key,
      label: GLOBAL_COUNTRY_NAV_LABELS[key] ?? page.country,
      href: page.slug,
      description: page.metaDescription,
      flag: GLOBAL_COUNTRY_FLAGS[page.key] ?? "🌐",
    }
  })

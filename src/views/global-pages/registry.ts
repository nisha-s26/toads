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

export const GLOBAL_COUNTRY_NAV = Object.values(GLOBAL_COUNTRY_PAGES).map((page) => ({
  key: page.key,
  label: page.country,
  href: page.slug,
  description: page.metaDescription,
  flag: GLOBAL_COUNTRY_FLAGS[page.key] ?? "🌐",
}))

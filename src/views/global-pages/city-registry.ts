import { SYDNEY_PAGE } from './data/cities/sydney'
import { VANCOUVER_PAGE } from './data/cities/vancouver'
import { LONDON_PAGE } from './data/cities/london'
import { SEATTLE_PAGE } from './data/cities/seattle'
import { BANGALORE_PAGE } from './data/cities/bangalore'
import { TORONTO_PAGE } from './data/cities/toronto'
import { MANCHESTER_PAGE } from './data/cities/manchester'
import { NEW_YORK_PAGE } from './data/cities/new-york'
import { HYDERABAD_PAGE } from './data/cities/hyderabad'
import { MUMBAI_PAGE } from './data/cities/mumbai'
import { DELHI_PAGE } from './data/cities/delhi'
import { MONTREAL_PAGE } from './data/cities/montreal'
import { MELBOURNE_PAGE } from './data/cities/melbourne'
import { DUBAI_PAGE } from './data/cities/dubai'
import { ABU_DHABI_PAGE } from './data/cities/abu-dhabi'
import { JEDDAH_PAGE } from './data/cities/jeddah'
import { RIYADH_PAGE } from './data/cities/riyadh'
import { FRANKFURT_PAGE } from './data/cities/frankfurt'
import { MUNICH_PAGE } from './data/cities/munich'
import { BERLIN_PAGE } from './data/cities/berlin'
import type { GlobalCityPageData } from './types'

export const GLOBAL_CITY_PAGES: Record<string, GlobalCityPageData> = {
  "sydney": SYDNEY_PAGE,
  "vancouver": VANCOUVER_PAGE,
  "london": LONDON_PAGE,
  "seattle": SEATTLE_PAGE,
  "bangalore": BANGALORE_PAGE,
  "toronto": TORONTO_PAGE,
  "manchester": MANCHESTER_PAGE,
  "new-york": NEW_YORK_PAGE,
  "hyderabad": HYDERABAD_PAGE,
  "mumbai": MUMBAI_PAGE,
  "delhi": DELHI_PAGE,
  "montreal": MONTREAL_PAGE,
  "melbourne": MELBOURNE_PAGE,
  "dubai": DUBAI_PAGE,
  "abu-dhabi": ABU_DHABI_PAGE,
  "jeddah": JEDDAH_PAGE,
  "riyadh": RIYADH_PAGE,
  "frankfurt": FRANKFURT_PAGE,
  "munich": MUNICH_PAGE,
  "berlin": BERLIN_PAGE,
}

export const GLOBAL_CITY_SLUGS = Object.keys(GLOBAL_CITY_PAGES)

export const CITIES_BY_COUNTRY: Record<string, string[]> = {
  "australia": ["sydney", "melbourne"],
  "canada": ["vancouver", "toronto", "montreal"],
  "india": ["bangalore", "hyderabad", "mumbai", "delhi"],
  "uk": ["london", "manchester"],
  "usa": ["seattle", "new-york"],
  "uae": ["dubai", "abu-dhabi"],
  "saudi-arabia": ["jeddah", "riyadh"],
  "germany": ["frankfurt", "munich", "berlin"],
}

export function getCitiesForCountry(countryKey: string): GlobalCityPageData[] {
  const keys = CITIES_BY_COUNTRY[countryKey] ?? []
  return keys.map((key) => GLOBAL_CITY_PAGES[key]).filter(Boolean)
}

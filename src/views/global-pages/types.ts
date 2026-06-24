export type GlobalCountryService = {
  title: string
  description: string
}

export type GlobalCountryIndustry = {
  title: string
  description: string
}

export type GlobalCountryProcessStep = {
  num: string
  title: string
  description: string
}

export type GlobalCountryFaq = {
  question: string
  answer: string
}

export type GlobalCountryPageData = {
  key: string
  seoTitle: string
  metaDescription: string
  slug: string
  country: string
  heroTitle: string
  heroSubtitle?: string
  heroIntro: string
  whyChooseIntro?: string
  whyChoosePoints: string[]
  services: GlobalCountryService[]
  industries: GlobalCountryIndustry[]
  trends: string
  processSteps: GlobalCountryProcessStep[]
  whyToadster?: string
  faqs: GlobalCountryFaq[]
  ctaTitle: string
  ctaBody: string
  ctaPrimary: string
  ctaSecondary?: string
  /** Set on city/state landing pages */
  parentCountryKey?: string
  exploreCardDescription?: string
}

export type GlobalCityPageData = GlobalCountryPageData & {
  parentCountryKey: string
  exploreCardDescription: string
}

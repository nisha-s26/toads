import { HIRE_RESOURCES_DATA } from "./hire-resources-data"

export interface HireResourceSection {
  heading: string
  body?: string
  items?: { title: string; body: string }[]
}

export interface HireResourceFaq {
  question: string
  answer: string
}

export interface HireResourceSchema {
  name: string
  description: string
  serviceType?: string
  areaServed?: string[]
  url?: string
}

export interface HireResource {
  slug: string
  navTitle: string
  navDescription: string
  icon: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  subheading: string
  bullets: string[]
  ctaText: string
  sections: HireResourceSection[]
  faqs: HireResourceFaq[]
  geoSignals: string[]
  schema: HireResourceSchema
}

export const HIRE_RESOURCES: HireResource[] = HIRE_RESOURCES_DATA

export const HIRE_RESOURCE_SLUGS = HIRE_RESOURCES.map((resource) => resource.slug)

export type HireResourceSlug = (typeof HIRE_RESOURCE_SLUGS)[number]

export const HIRE_RESOURCE_BY_SLUG: Record<string, HireResource> = Object.fromEntries(
  HIRE_RESOURCES.map((resource) => [resource.slug, resource]),
)

export function getHireResourcePath(slug: string): string {
  return `/hire/${slug}`
}

export const HIRE_RESOURCES_NAV = HIRE_RESOURCES.map(({ slug, navTitle, navDescription, icon }) => ({
  navTitle,
  href: getHireResourcePath(slug),
  navDescription,
  icon,
}))

export function getHireResourceMetadata(path: string): { title: string; description: string } | null {
  const slug = path.replace(/^\/hire\//, "")
  const resource = HIRE_RESOURCE_BY_SLUG[slug]
  if (!resource) return null
  return { title: resource.metaTitle, description: resource.metaDescription }
}

export function buildHireResourceJsonLd(resource: HireResource): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: resource.schema.name,
    provider: { "@type": "Organization", name: "Toadster", url: "https://toadsters.com" },
    serviceType: resource.schema.serviceType ?? "Staff Augmentation",
    description: resource.schema.description,
    ...(resource.schema.areaServed ? { areaServed: resource.schema.areaServed } : {}),
    url: resource.schema.url ?? `https://toadsters.com/hire/${resource.slug}`,
  }
  return JSON.stringify(schema)
}

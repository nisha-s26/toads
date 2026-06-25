import { HIRE_RESOURCE_BY_SLUG } from "@/config/hire-resources"
import { Users, type LucideIcon } from "lucide-react"
import { HIRE_RESOURCE_ICON_MAP } from "./hire-resource-icons"

export type ExploreCard = {
  icon: LucideIcon
  title: string
  desc: string
  href: string
  ctaAnchor?: string
}

function shortenExploreDescription(desc: string): string {
  const firstSentence = desc.split(/(?<=[.!?])\s+/)[0]?.trim() ?? desc
  if (firstSentence.length <= 120) return firstSentence
  return `${firstSentence.slice(0, 117).trim()}…`
}

export function buildServiceExploreCards(
  capabilities: { icon: LucideIcon; title: string; desc: string; ctaAnchor?: string }[],
  defaultHref: string,
): ExploreCard[] {
  return capabilities.slice(0, 6).map((capability) => ({
    icon: capability.icon,
    title: capability.title,
    desc: shortenExploreDescription(capability.desc),
    href: defaultHref,
    ctaAnchor: capability.ctaAnchor ?? "Learn More",
  }))
}

export function buildHireExploreCards(slugs: string[]): ExploreCard[] {
  return slugs.map((slug) => {
    const resource = HIRE_RESOURCE_BY_SLUG[slug]
    if (!resource) {
      throw new Error(`Unknown hire resource slug: ${slug}`)
    }

    const icon = (HIRE_RESOURCE_ICON_MAP[resource.icon] ?? Users) as LucideIcon

    return {
      icon,
      title: resource.navTitle,
      desc: resource.navDescription,
      href: `/hire/${slug}`,
      ctaAnchor: "Learn More",
    }
  })
}

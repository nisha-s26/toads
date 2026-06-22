import { notFound } from "next/navigation"
import {
  HIRE_RESOURCE_BY_SLUG,
  buildHireResourceJsonLd,
} from "@/config/hire-resources"
import { buildCanonicalUrl } from "@/config/metadata"
import type { Metadata } from "next"

export const dynamic = "force-static"

export async function generateMetadata(): Promise<Metadata> {
  const resource = HIRE_RESOURCE_BY_SLUG["android-developers"]
  if (!resource) return {}

  const path = `/hire/android-developers`
  const canonical = buildCanonicalUrl(path)

  return {
    title: resource.metaTitle,
    description: resource.metaDescription,
    alternates: {
      canonical,
      languages: { en: canonical, "x-default": canonical },
    },
    openGraph: {
      title: resource.metaTitle,
      description: resource.metaDescription,
      url: canonical,
      siteName: "Toadster",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@toadsters",
      title: resource.metaTitle,
      description: resource.metaDescription,
    },
  }
}

export default async function Page() {
  const resource = HIRE_RESOURCE_BY_SLUG["android-developers"]
  if (!resource) notFound()

  const jsonLd = buildHireResourceJsonLd(resource)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <HireResourceDetail resource={resource} />
    </>
  )
}

import { notFound, redirect } from "next/navigation"
import HireResourceDetail from "@/views/hire/HireResourceDetail"
import {
  HIRE_RESOURCE_BY_SLUG,
  HIRE_RESOURCE_SLUGS,
  buildHireResourceJsonLd,
} from "@/config/hire-resources"
import { buildCanonicalUrl } from "@/config/metadata"
import type { Metadata } from "next"

export const dynamic = "force-static"

export function generateStaticParams() {
  return HIRE_RESOURCE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const resource = HIRE_RESOURCE_BY_SLUG[slug]
  if (!resource) return {}

  const path = `/hire/${slug}`
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
      site: "@toadster",
      title: resource.metaTitle,
      description: resource.metaDescription,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (slug === "fullstack-developers") {
    redirect("/hire/full-stack-developers")
  }
  const resource = HIRE_RESOURCE_BY_SLUG[slug]
  if (!resource) notFound()

  const jsonLd = buildHireResourceJsonLd(resource)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <HireResourceDetail resource={resource} />
    </>
  )
}

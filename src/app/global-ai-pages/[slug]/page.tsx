import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { GLOBAL_CITY_PAGES } from "@/views/global-pages/city-registry"
import { GLOBAL_COUNTRY_PAGES } from "@/views/global-pages/registry"
import type { GlobalCountryPageData } from "@/views/global-pages/types"
import { buildCanonicalUrl } from "@/config/metadata"

export const dynamic = "force-static"

const ALL_GLOBAL_PAGES: Record<string, GlobalCountryPageData> = {
  ...GLOBAL_COUNTRY_PAGES,
  ...GLOBAL_CITY_PAGES,
}

const ALL_GLOBAL_SLUGS = Object.keys(ALL_GLOBAL_PAGES)

export function generateStaticParams() {
  return ALL_GLOBAL_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = ALL_GLOBAL_PAGES[slug]
  if (!page) return {}

  const canonical = buildCanonicalUrl(page.slug)

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical,
      languages: { en: canonical, "x-default": canonical },
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: "Toadster",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@toadster",
      title: page.seoTitle,
      description: page.metaDescription,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = ALL_GLOBAL_PAGES[slug]
  if (!page) notFound()

  return <GlobalCountryPage data={page} />
}

import type { Metadata } from "next"
import {
  buildCanonicalUrl,
  getMetadataForPath,
  SITE_OG_IMAGE,
  SITE_OG_IMAGE_ALT,
  SITE_OG_IMAGE_HEIGHT,
  SITE_OG_IMAGE_WIDTH,
  SITE_OG_IMAGE_TYPE,
} from "@/config/metadata"
import { fetchAllBlogs, fetchBlogBySlug } from "@/lib/api"

export function createStaticMetadata(path: string): Metadata {
  const { title, description } = getMetadataForPath(path)
  const canonical = buildCanonicalUrl(path)

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Toadster",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: SITE_OG_IMAGE,
          width: SITE_OG_IMAGE_WIDTH,
          height: SITE_OG_IMAGE_HEIGHT,
          alt: SITE_OG_IMAGE_ALT,
          type: SITE_OG_IMAGE_TYPE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@toadsters",
      title,
      description,
      images: [{ url: SITE_OG_IMAGE, alt: SITE_OG_IMAGE_ALT }],
    },
  }
}

export async function createBlogMetadata(slug: string): Promise<Metadata> {
  const blog = await fetchBlogBySlug(slug)
  const path = `/blogs/${slug}`

  if (!blog) {
    return createStaticMetadata(path)
  }

  const allBlogs = await fetchAllBlogs()
  const { title, description } = getMetadataForPath(path, allBlogs)
  const canonical = buildCanonicalUrl(path)

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Toadster",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: SITE_OG_IMAGE,
          width: SITE_OG_IMAGE_WIDTH,
          height: SITE_OG_IMAGE_HEIGHT,
          alt: SITE_OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@toadsters",
      title,
      description,
      images: [{ url: SITE_OG_IMAGE, alt: SITE_OG_IMAGE_ALT }],
    },
  }
}

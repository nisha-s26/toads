import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import {
  buildCanonicalUrl,
  getMetadataForPath,
  SITE_OG_IMAGE,
  SITE_OG_IMAGE_ALT,
  SITE_OG_IMAGE_HEIGHT,
  SITE_OG_IMAGE_WIDTH,
} from "@/config/metadata"
import type { BlogPost } from "@/pages/blogs/blogData"

type TagKind = "meta" | "link"

interface TagDescriptor {
  selector: string
  kind: TagKind
  attribute: "content" | "href"
  value: string
  identifier: { name: "name" | "property" | "rel"; value: string }
}

function upsertHeadTag({ selector, kind, attribute, value, identifier }: TagDescriptor): void {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)

  if (!element) {
    element = document.createElement(kind) as HTMLMetaElement | HTMLLinkElement
    element.setAttribute(identifier.name, identifier.value)
    document.head.appendChild(element)
  }

  element.setAttribute(attribute, value)
}

export function usePageMetadata(): void {
  const { pathname } = useLocation()
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/public/blogs")
        const data = await response.json()
        setAllBlogs(data.blogs || [])
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
      }
    }
    fetchBlogs()
  }, [])

  useEffect(() => {
    const metadata = getMetadataForPath(pathname, allBlogs)
    const canonicalUrl = buildCanonicalUrl(pathname)

    document.title = metadata.title

    const tags: TagDescriptor[] = [
      {
        selector: 'meta[name="description"]',
        kind: "meta",
        attribute: "content",
        value: metadata.description,
        identifier: { name: "name", value: "description" },
      },
      {
        selector: 'link[rel="canonical"]',
        kind: "link",
        attribute: "href",
        value: canonicalUrl,
        identifier: { name: "rel", value: "canonical" },
      },
      {
        selector: 'meta[property="og:title"]',
        kind: "meta",
        attribute: "content",
        value: metadata.title,
        identifier: { name: "property", value: "og:title" },
      },
      {
        selector: 'meta[property="og:description"]',
        kind: "meta",
        attribute: "content",
        value: metadata.description,
        identifier: { name: "property", value: "og:description" },
      },
      {
        selector: 'meta[property="og:url"]',
        kind: "meta",
        attribute: "content",
        value: canonicalUrl,
        identifier: { name: "property", value: "og:url" },
      },
      {
        selector: 'meta[name="twitter:title"]',
        kind: "meta",
        attribute: "content",
        value: metadata.title,
        identifier: { name: "name", value: "twitter:title" },
      },
      {
        selector: 'meta[name="twitter:description"]',
        kind: "meta",
        attribute: "content",
        value: metadata.description,
        identifier: { name: "name", value: "twitter:description" },
      },
      {
        selector: 'meta[property="og:image"]',
        kind: "meta",
        attribute: "content",
        value: SITE_OG_IMAGE,
        identifier: { name: "property", value: "og:image" },
      },
      {
        selector: 'meta[property="og:image:width"]',
        kind: "meta",
        attribute: "content",
        value: String(SITE_OG_IMAGE_WIDTH),
        identifier: { name: "property", value: "og:image:width" },
      },
      {
        selector: 'meta[property="og:image:height"]',
        kind: "meta",
        attribute: "content",
        value: String(SITE_OG_IMAGE_HEIGHT),
        identifier: { name: "property", value: "og:image:height" },
      },
      {
        selector: 'meta[property="og:image:alt"]',
        kind: "meta",
        attribute: "content",
        value: SITE_OG_IMAGE_ALT,
        identifier: { name: "property", value: "og:image:alt" },
      },
      {
        selector: 'meta[name="twitter:image"]',
        kind: "meta",
        attribute: "content",
        value: SITE_OG_IMAGE,
        identifier: { name: "name", value: "twitter:image" },
      },
      {
        selector: 'meta[name="twitter:image:alt"]',
        kind: "meta",
        attribute: "content",
        value: SITE_OG_IMAGE_ALT,
        identifier: { name: "name", value: "twitter:image:alt" },
      },
    ]

    tags.forEach(upsertHeadTag)
  }, [pathname, allBlogs])
}

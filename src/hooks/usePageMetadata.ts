import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { buildCanonicalUrl, getMetadataForPath } from "@/config/metadata"

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

  useEffect(() => {
    const metadata = getMetadataForPath(pathname)
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
    ]

    tags.forEach(upsertHeadTag)
  }, [pathname])
}

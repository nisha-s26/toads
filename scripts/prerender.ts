import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import {
  buildBlogJsonLd,
  buildCanonicalUrl,
  DEFAULT_METADATA,
  getAllPrerenderRoutes,
  getMetadataForPath,
  SITE_OG_IMAGE,
  SITE_OG_IMAGE_ALT,
  SITE_OG_IMAGE_HEIGHT,
  SITE_OG_IMAGE_TYPE,
  SITE_OG_IMAGE_WIDTH,
  SITE_URL,
  STATIC_PAGE_METADATA,
} from "../src/config/metadata"
import { allBlogs } from "../src/pages/blogs/blogData"

const HERE = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = resolve(HERE, "..", "dist")
const SOURCE_HTML = join(DIST_DIR, "index.html")

function escapeHtmlAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function escapeHtmlText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function escapeJsonForScript(value: string): string {
  return value.replace(/<\/script/gi, "<\\/script")
}

function replaceTitleTag(html: string, title: string): string {
  const replacement = `<title>${escapeHtmlText(title)}</title>`
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title>[\s\S]*?<\/title>/i, replacement)
  }
  return html.replace("</head>", `  ${replacement}\n</head>`)
}

function replaceMeta(
  html: string,
  identifier: { name: "name" | "property"; value: string },
  content: string
): string {
  const safe = escapeHtmlAttribute(content)
  const tag = `<meta ${identifier.name}="${identifier.value}" content="${safe}" />`
  const pattern = new RegExp(
    `<meta\\s+${identifier.name}=["']${identifier.value}["'][^>]*>`,
    "i"
  )
  if (pattern.test(html)) {
    return html.replace(pattern, tag)
  }
  return html.replace("</head>", `  ${tag}\n</head>`)
}

function replaceCanonical(html: string, href: string): string {
  const safe = escapeHtmlAttribute(href)
  const tag = `<link rel="canonical" href="${safe}" />`
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    return html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, tag)
  }
  return html.replace("</head>", `  ${tag}\n</head>`)
}

function replaceHreflang(html: string, href: string): string {
  const safe = escapeHtmlAttribute(href)
  const stripped = html.replace(
    /\s*<link\s+rel=["']alternate["']\s+hreflang=["'][^"']+["']\s+href=["'][^"']+["'][^>]*>/gi,
    ""
  )
  const tags = `  <link rel="alternate" hreflang="en" href="${safe}" />\n  <link rel="alternate" hreflang="x-default" href="${safe}" />\n`
  return stripped.replace("</head>", `${tags}</head>`)
}

function injectBlogJsonLd(html: string, jsonLdBlob: string | null): string {
  if (!jsonLdBlob) return html
  const scripts = jsonLdBlob
    .split("\n")
    .filter((chunk) => chunk.trim().length > 0)
    .map(
      (chunk) =>
        `  <script type="application/ld+json">${escapeJsonForScript(chunk)}</script>`
    )
    .join("\n")
  return html.replace("</head>", `${scripts}\n</head>`)
}

const KNOWN_ROUTES = new Set<string>([
  "/",
  ...Object.keys(STATIC_PAGE_METADATA),
  ...allBlogs.map((blog) => `/blogs/${blog.slug}`),
])

const ACRONYMS = new Set([
  "ai",
  "nlp",
  "llm",
  "ml",
  "a2a",
  "api",
  "saas",
  "iot",
  "ux",
  "ui",
  "kpi",
])

function injectBreadcrumbJsonLd(html: string, pathname: string): string {
  if (pathname === "/") return html

  const crumbs = buildBreadcrumbTrail(pathname)
  if (crumbs.length === 0) return html

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    ...crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: crumb.name,
      item: crumb.url,
    })),
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  }

  const script = `  <script type="application/ld+json">${escapeJsonForScript(
    JSON.stringify(jsonLd)
  )}</script>\n`
  return html.replace("</head>", `${script}</head>`)
}

interface Crumb {
  name: string
  url: string
}

function buildBreadcrumbTrail(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean)
  const trail: Crumb[] = []

  segments.forEach((segment, index) => {
    const cumulative = `/${segments.slice(0, index + 1).join("/")}`
    const isLast = index === segments.length - 1
    if (!isLast && !KNOWN_ROUTES.has(cumulative)) return

    const name = resolveSegmentName(cumulative, segment)
    trail.push({ name, url: buildCanonicalUrl(cumulative) })
  })

  return trail
}

function resolveSegmentName(cumulative: string, segment: string): string {
  const meta = STATIC_PAGE_METADATA[cumulative]
  if (meta) return shortenMetaTitle(meta.title)

  if (cumulative.startsWith("/blogs/")) {
    const slug = cumulative.slice("/blogs/".length)
    const blog = allBlogs.find((b) => b.slug === slug)
    if (blog) return blog.title
  }

  return humanizeSegment(segment)
}

function shortenMetaTitle(title: string): string {
  return title.split("|")[0].trim()
}

function humanizeSegment(segment: string): string {
  return segment
    .split(/[-_]/g)
    .filter(Boolean)
    .map((word) =>
      ACRONYMS.has(word.toLowerCase())
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ")
}

function applyMetadataForRoute(baseHtml: string, pathname: string): string {
  const metadata = getMetadataForPath(pathname)
  const canonical = buildCanonicalUrl(pathname)

  let html = baseHtml
  html = replaceTitleTag(html, metadata.title)
  html = replaceMeta(html, { name: "name", value: "description" }, metadata.description)
  html = replaceMeta(html, { name: "property", value: "og:title" }, metadata.title)
  html = replaceMeta(html, { name: "property", value: "og:description" }, metadata.description)
  html = replaceMeta(html, { name: "property", value: "og:url" }, canonical)
  html = replaceMeta(html, { name: "property", value: "og:image" }, SITE_OG_IMAGE)
  html = replaceMeta(html, { name: "property", value: "og:image:secure_url" }, SITE_OG_IMAGE)
  html = replaceMeta(html, { name: "property", value: "og:image:type" }, SITE_OG_IMAGE_TYPE)
  html = replaceMeta(html, { name: "property", value: "og:image:width" }, String(SITE_OG_IMAGE_WIDTH))
  html = replaceMeta(html, { name: "property", value: "og:image:height" }, String(SITE_OG_IMAGE_HEIGHT))
  html = replaceMeta(html, { name: "property", value: "og:image:alt" }, SITE_OG_IMAGE_ALT)
  html = replaceMeta(html, { name: "name", value: "twitter:title" }, metadata.title)
  html = replaceMeta(html, { name: "name", value: "twitter:description" }, metadata.description)
  html = replaceMeta(html, { name: "name", value: "twitter:image" }, SITE_OG_IMAGE)
  html = replaceMeta(html, { name: "name", value: "twitter:image:alt" }, SITE_OG_IMAGE_ALT)
  html = replaceCanonical(html, canonical)
  html = replaceHreflang(html, canonical)
  html = injectBreadcrumbJsonLd(html, pathname)
  html = injectBlogJsonLd(html, buildBlogJsonLd(pathname))

  return html
}

function pathnameToOutputFile(pathname: string): string {
  if (pathname === "/") return join(DIST_DIR, "index.html")
  const cleaned = pathname.replace(/^\/+|\/+$/g, "")
  return join(DIST_DIR, cleaned, "index.html")
}

async function prerender(): Promise<void> {
  const baseHtml = await readFile(SOURCE_HTML, "utf8")
  const routes = getAllPrerenderRoutes()

  console.log(
    `[prerender] rendering ${routes.length} routes (home metadata fallback: "${DEFAULT_METADATA.title}")`
  )

  let count = 0
  for (const pathname of routes) {
    const html = applyMetadataForRoute(baseHtml, pathname)
    const outFile = pathnameToOutputFile(pathname)
    await mkdir(dirname(outFile), { recursive: true })
    await writeFile(outFile, html, "utf8")
    count += 1
    console.log(`[prerender] wrote ${pathname} -> ${outFile.replace(DIST_DIR, "dist")}`)
  }

  console.log(`[prerender] done, ${count} files written`)
}

prerender().catch((err: unknown) => {
  console.error("[prerender] failed:", err)
  process.exitCode = 1
})

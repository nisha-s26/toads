import type { NextConfig } from "next"
import path from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const apiBaseUrl = process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? ""

const legacyHireRedirects: { source: string; destination: string }[] = [
  { source: "/hire/llm-application-developers", destination: "/hire/llm-developers" },
  { source: "/hire/backend-developers", destination: "/hire/nodejs-developers" },
  { source: "/hire/rpa-developers", destination: "/services/intelligent-automation" },
  { source: "/hire/qa-evaluation-engineers", destination: "/hire/ai-ml-engineers" },
  { source: "/hire/shopify-developers", destination: "/contact" },
  { source: "/hire/wordpress-developers", destination: "/contact" },
  { source: "/hire-resources/llm-application-developers", destination: "/hire/llm-developers" },
  { source: "/hire-resources/backend-developers", destination: "/hire/nodejs-developers" },
  { source: "/hire-resources/rpa-developers", destination: "/services/intelligent-automation" },
  { source: "/hire-resources/qa-evaluation-engineers", destination: "/hire/ai-ml-engineers" },
  { source: "/hire-resources/shopify-developers", destination: "/contact" },
  { source: "/hire-resources/wordpress-developers", destination: "/contact" },
]

const nextConfig: NextConfig = {
  // Parent folder also has a package-lock.json; pin tracing/bundling to this app.
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "react-icons"],
  },
  webpack: (config, { dev }) => {
    // Windows dev cache under .next frequently corrupts and breaks CSS/JS chunks.
    if (dev) {
      config.cache = false
    }
    return config
  },
  images: {
    qualities: [75, 80, 90],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "dey5irgcg4c8.cloudfront.net" },
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "www.gstatic.com" },
    ],
  },
  async rewrites() {
    if (!apiBaseUrl) return []
    return [
      {
        source: "/api/public/:path*",
        destination: `${apiBaseUrl.replace(/\/$/, "")}/api/public/:path*`,
      },
    ]
  },
  async redirects() {
    const redirects = [
      { source: "/hire-resources/:slug", destination: "/hire/:slug", permanent: true },
      { source: "/dedicated-resources/:slug", destination: "/hire/:slug", permanent: true },
      ...legacyHireRedirects.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
    ]

    return redirects
  },
}

export default nextConfig

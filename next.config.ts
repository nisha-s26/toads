import type { NextConfig } from "next"
import path from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const apiBaseUrl = process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? ""

const legacyHireRedirects: { source: string; destination: string }[] = [
  { source: "/hire/fullstack-developers", destination: "/hire/full-stack-developers" },
  { source: "/hire-flutter-developers", destination: "/hire/flutter-developers" },
  { source: "/hire/llm-application-developers", destination: "/hire/ai-ml-developers" },
  { source: "/hire/backend-developers", destination: "/hire/nodejs-developers" },
  { source: "/hire/rpa-developers", destination: "/services/agentic-ai" },
  { source: "/hire/qa-evaluation-engineers", destination: "/hire/ai-ml-developers" },
  { source: "/hire/shopify-developers", destination: "/contact" },
  { source: "/hire/wordpress-developers", destination: "/contact" },
  { source: "/hire-resources/llm-application-developers", destination: "/hire/ai-ml-developers" },
  { source: "/hire-resources/backend-developers", destination: "/hire/nodejs-developers" },
  { source: "/hire-resources/rpa-developers", destination: "/services/agentic-ai" },
  { source: "/hire-resources/qa-evaluation-engineers", destination: "/hire/ai-ml-developers" },
  { source: "/hire-resources/shopify-developers", destination: "/contact" },
  { source: "/hire-resources/wordpress-developers", destination: "/contact" },
]

const removedHireRedirects: { source: string; destination: string }[] = [
  { source: "/hire/llm-developers", destination: "/hire/ai-ml-developers" },
  { source: "/hire/ai-ml-engineers", destination: "/hire/ai-ml-developers" },
  { source: "/hire/mlops-engineers", destination: "/hire/devops-engineers" },
  { source: "/hire/data-engineers", destination: "/hire/ai-ml-developers" },
  { source: "/hire/python-developers", destination: "/hire/software-developers" },
  { source: "/hire/dedicated-resources", destination: "/hire-resources" },
  { source: "/hire/agentic-ai-engineers", destination: "/hire/ai-ml-developers" },
]

const removedGlobalPageRedirects: { source: string; destination: string }[] = []

const removedServiceRedirects: { source: string; destination: string }[] = [
  { source: "/services/generative-ai", destination: "/services/ai-development" },
  { source: "/services/nlp-services", destination: "/services/ai-development" },
  { source: "/services/machine-learning", destination: "/services/ai-development" },
  { source: "/services/custom-ai-solutions", destination: "/services/ai-development" },
  { source: "/services/ai-integration", destination: "/services/software-development" },
  { source: "/services/ai-chatbots", destination: "/services/agentic-ai" },
  { source: "/services/llm-development", destination: "/services/rag-development" },
  { source: "/services/computer-vision", destination: "/services/ai-development" },
  { source: "/services/ai-data-analytics", destination: "/services/ai-development" },
  { source: "/services/industry-solutions", destination: "/services/ai-development" },
  { source: "/services/ai-consultation", destination: "/services/product-management" },
  { source: "/services/agent-2-agent", destination: "/services/agentic-ai" },
  { source: "/services/advanced-ai-tech", destination: "/services/ai-development" },
  { source: "/services/conversational-ai", destination: "/services/agentic-ai" },
  { source: "/services/ai-automation", destination: "/services/agentic-ai" },
  { source: "/services/intelligent-automation", destination: "/services/agentic-ai" },
  { source: "/services/ar-vr-development", destination: "/services/vr-development" },
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
    qualities: [75, 80, 90, 95],
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
    const rewrites = [
      {
        source: "/ai-development-company-:slug",
        destination: "/global-ai-pages/:slug",
      },
    ]

    if (apiBaseUrl) {
      rewrites.push({
        source: "/api/public/:path*",
        destination: `${apiBaseUrl.replace(/\/$/, "")}/api/public/:path*`,
      })
    }

    return rewrites
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
      ...removedHireRedirects.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
      ...removedGlobalPageRedirects.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
      ...removedServiceRedirects.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
    ]

    return redirects
  },
}

export default nextConfig

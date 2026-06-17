import type { NextConfig } from "next"

const apiBaseUrl = process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? ""

const legacyHireRedirects: { source: string; destination: string }[] = [
  { source: "/hire/mern-stack-developers", destination: "/hire/fullstack-developers" },
  { source: "/hire/llm-application-developers", destination: "/hire/llm-developers" },
  { source: "/hire/software-developers", destination: "/hire/python-developers" },
  { source: "/hire/backend-developers", destination: "/hire/nodejs-developers" },
  { source: "/hire/rpa-developers", destination: "/services/intelligent-automation" },
  { source: "/hire/qa-evaluation-engineers", destination: "/hire/ai-ml-engineers" },
  { source: "/hire/android-developers", destination: "/hire/react-native-developers" },
  { source: "/hire/ios-developers", destination: "/hire/flutter-developers" },
  { source: "/hire/shopify-developers", destination: "/contact" },
  { source: "/hire/wordpress-developers", destination: "/contact" },
  { source: "/hire-resources/mern-stack-developers", destination: "/hire/fullstack-developers" },
  { source: "/hire-resources/llm-application-developers", destination: "/hire/llm-developers" },
  { source: "/hire-resources/software-developers", destination: "/hire/python-developers" },
  { source: "/hire-resources/backend-developers", destination: "/hire/nodejs-developers" },
  { source: "/hire-resources/rpa-developers", destination: "/services/intelligent-automation" },
  { source: "/hire-resources/qa-evaluation-engineers", destination: "/hire/ai-ml-engineers" },
  { source: "/hire-resources/android-developers", destination: "/hire/react-native-developers" },
  { source: "/hire-resources/ios-developers", destination: "/hire/flutter-developers" },
  { source: "/hire-resources/shopify-developers", destination: "/contact" },
  { source: "/hire-resources/wordpress-developers", destination: "/contact" },
]

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "react-icons"],
  },
  images: {
    qualities: [75, 80, 90],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
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

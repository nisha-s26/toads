import type { NextConfig } from "next"

const apiBaseUrl = process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? ""

const nextConfig: NextConfig = {
  images: {
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
}

export default nextConfig

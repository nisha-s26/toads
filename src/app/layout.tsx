import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "@/index.css"
import { ThemeProvider } from "@/hooks/ThemeProvider"
import { ClientShell } from "@/components/ClientShell"
import { createStaticMetadata } from "@/lib/next-metadata"
import { SITE_URL } from "@/config/metadata"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  ...createStaticMetadata("/"),
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/logo.svg" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Toadster",
  alternateName: "Toadster Technologies",
  url: "https://toadsters.com/",
  logo: "https://toadsters.com/toadster-logo.svg",
  description:
    "Toadster delivers AI software development, MLOps, data engineering & custom software solutions for global enterprises, startups, and SMBs.",
  email: "business@toadsters.com",
  telephone: "+91-92205-17988",
  sameAs: [
    "https://in.linkedin.com/company/toadster-technologies-private-limited",
    "https://www.instagram.com/toadster_technologies",
    "https://www.youtube.com/@toadster-technologies",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "A-83, Sector 63",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "DIFC",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Toadster",
  url: "https://toadsters.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://toadsters.com/blogs?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://plus.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://dey5irgcg4c8.cloudfront.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://plus.unsplash.com" />
        <link rel="dns-prefetch" href="https://dey5irgcg4c8.cloudfront.net" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("toadster-theme");var d=s==="dark";var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",d?"#000000":"#ECF0F1");}catch(e){document.documentElement.style.colorScheme="light";document.documentElement.classList.remove("dark");}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={plusJakartaSans.className}>
        <ThemeProvider>
          <ClientShell>{children}</ClientShell>
        </ThemeProvider>
      </body>
    </html>
  )
}

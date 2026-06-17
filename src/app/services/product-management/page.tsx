import PageComponent from "@/views/services/product-management"
import { faqs } from "@/views/services/product-management/data"
import { createStaticMetadata } from "@/lib/next-metadata"
import { buildCanonicalUrl, SITE_URL, STATIC_PAGE_METADATA } from "@/config/metadata"

export const metadata = createStaticMetadata("/services/product-management")
export const dynamic = "force-static"

const SERVICE_PATH = "/services/product-management"

function buildServiceJsonLd() {
  const meta = STATIC_PAGE_METADATA[SERVICE_PATH]
  const url = buildCanonicalUrl(SERVICE_PATH)

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: meta.title,
    description: meta.description,
    provider: {
      "@type": "Organization",
      name: "Toadster",
      url: SITE_URL,
      logo: `${SITE_URL}/green-logo.svg`,
    },
    areaServed: "Worldwide",
    serviceType: "Product Management",
    url,
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return `${JSON.stringify(serviceLd)}\n${JSON.stringify(faqLd)}`
}

export default function Page() {
  const jsonLd = buildServiceJsonLd()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PageComponent />
    </>
  )
}

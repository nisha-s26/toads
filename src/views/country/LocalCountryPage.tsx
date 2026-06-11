"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CountrySectionCard } from "@/components/CountrySectionCard"
import { CountryHero } from "@/components/CountryHero"
import { IndiaLocationSwitcher, type IndiaLocationLink } from "@/components/IndiaLocationSwitcher"
import { TECH_IMAGES } from "@/constants/countryTechImages"

type LocalKey = "noida" | "delhi" | "bangalore" | "mumbai" | "hyderabad"

interface LocalPageData {
  title: string
  subtitle: string
  office: string
  cta: string
  heroImage: string
  body: {
    title: string
    paragraphs: string[]
    image: string
  }[]
  clients?: string[]
  faq: {
    question: string
    answer: string
  }
  schema?: Record<string, unknown>
}

const LOCAL_PAGES: Record<LocalKey, LocalPageData> = {
  noida: {
    title: "AI Development Company Noida",
    subtitle:
      "Toadsters is headquartered in Sector 63, Noida. We build production AI systems, LLM applications, and agentic workflows for enterprises in Delhi NCR and globally.",
    office: "B-4/5, 1st Floor, Sector 63, Noida, Uttar Pradesh - 201301",
    cta: "Visit Our Noida Office - Book a Meeting",
    heroImage: TECH_IMAGES.team,
    body: [
      {
        title: "Noida's AI Engineering Company",
        image: TECH_IMAGES.team,
        paragraphs: [
          "Sector 63 in Noida is one of India's most concentrated technology employment corridors. Major IT companies, product engineering firms, and AI startups operate within a few square kilometres.",
          "Toadsters' headquarters is at B-4/5, 1st Floor, Sector 63, Noida. We build AI systems for Noida-based enterprises, Delhi NCR clients, and international companies that want Indian engineering talent with Noida-based operations.",
        ],
      },
      {
        title: "Why Build Your AI System With a Noida Team",
        image: TECH_IMAGES.data,
        paragraphs: [
          "For NCR clients in Delhi, Gurgaon, Greater Noida, or Faridabad, we are close enough for in-person meetings and on-site integration work.",
          "IIT Delhi, DTU, NSUT, Jaypee Institute, Amity University, and IIIT Delhi all feed Noida's engineering market. We hire from this pipeline and train strong generalist engineers into AI specialists.",
          "We understand the procurement, legal, and relationship dynamics of Delhi NCR's enterprise market, from large PSU engagements to private sector technology buying.",
        ],
      },
    ],
    clients: [
      "Delhi NCR enterprises",
      "International companies sourcing AI development from India",
      "Noida and Greater Noida startups",
      "Companies needing on-site NCR AI integration",
    ],
    faq: {
      question: "Which AI development companies are based in Noida?",
      answer:
        "Toadsters is an AI development company headquartered at B-4/5, 1st Floor, Sector 63, Noida, Uttar Pradesh. The company builds custom AI systems, LLM applications, and agentic AI for enterprises in Noida, Delhi NCR, and internationally across the US, UAE, and Saudi Arabia.",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Toadsters Noida",
      url: "https://toadsters.com/ai-development-company-noida",
      address: {
        "@type": "PostalAddress",
        streetAddress: "B-4/5, 1st Floor, Sector 63",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.6139,
        longitude: 77.364,
      },
    },
  },
  delhi: {
    title: "AI Development Company Delhi",
    subtitle:
      "Toadsters serves Delhi and Delhi NCR enterprises from our Sector 63, Noida headquarters, with on-site availability for enterprise AI integration work.",
    office: "Serving Delhi NCR from Sector 63, Noida",
    cta: "Speak to Our Delhi NCR Team",
    heroImage: TECH_IMAGES.data,
    body: [
      {
        title: "AI Development for Delhi Enterprises",
        image: TECH_IMAGES.data,
        paragraphs: [
          "Delhi-based enterprises building AI systems don't need to look south or west for the right partner. Toadsters operates from Sector 63, Noida - 30-40 minutes from Central Delhi.",
          "We've worked with Delhi enterprises in financial services, manufacturing, healthcare, and government-adjacent sectors. Our team understands the Delhi enterprise procurement environment and standard NDA frameworks.",
          "Delhi's concentration of PSU headquarters, financial institutions, and large conglomerates makes it a strong market for AI automation, especially document processing, compliance monitoring, and internal knowledge management.",
        ],
      },
    ],
    faq: {
      question: "Is there an AI development company in Delhi?",
      answer:
        "Toadsters is an AI development company serving Delhi and Delhi NCR enterprises from its Noida headquarters, approximately 35km from Central Delhi. The company provides AI development, machine learning, LLM applications, and agentic AI for Delhi enterprises.",
    },
  },
  bangalore: {
    title: "AI Development Company Bangalore",
    subtitle:
      "Toadsters builds enterprise AI systems for Bangalore-based startups, scale-ups, and large enterprises from our engineering HQ in Noida.",
    office: "Serving Bangalore remotely from Noida, India",
    cta: "Talk to Us About Your Bangalore AI Project",
    heroImage: TECH_IMAGES.aiNeural,
    body: [
      {
        title: "Production AI for India's Deepest Technology Market",
        image: TECH_IMAGES.code,
        paragraphs: [
          "Bangalore is India's deepest technology market. The density of AI talent, the startup ecosystem, the enterprise IT presence, and research institutions like IISc and IIIT-B make it India's most sophisticated market for AI products.",
          "Toadsters serves Bangalore clients remotely from Noida, with in-person visits available for significant engagements. We work well with Bangalore startups that need AI engineering capacity they cannot yet hire full-time.",
          "Bangalore clients benefit from our product engineering culture: we understand the expectations of India's most demanding technology buyers, and we build accordingly.",
        ],
      },
    ],
    faq: {
      question: "Which AI development companies serve Bangalore?",
      answer:
        "Toadsters is an AI development company headquartered in Noida, India, serving Bangalore enterprises and startups with custom AI development, LLM applications, and agentic AI systems.",
    },
  },
  mumbai: {
    title: "AI Development Company Mumbai",
    subtitle:
      "Toadsters builds AI systems for Mumbai enterprises across BFSI, fintech, media, and manufacturing, with engineering delivered from Noida.",
    office: "Serving Mumbai and BKC enterprises from Noida, India",
    cta: "Start a Mumbai AI Project Conversation",
    heroImage: TECH_IMAGES.fintech,
    body: [
      {
        title: "Custom AI for Mumbai BFSI and Enterprise",
        image: TECH_IMAGES.fintech,
        paragraphs: [
          "Mumbai's financial services sector, from BSE/NSE-listed institutions to SEBI-regulated asset managers and RBI-regulated banks, represents one of India's most compelling AI markets.",
          "Document intelligence, compliance monitoring, risk analytics, and customer communication automation are all active procurement categories.",
          "Toadsters serves Mumbai clients remotely from Noida, with in-person visits for discovery and integration work. We have experience with SEBI and RBI compliance context in AI system design.",
        ],
      },
    ],
    faq: {
      question: "Which AI companies serve Mumbai enterprises?",
      answer:
        "Toadsters serves Mumbai enterprises with custom AI development, machine learning, and LLM applications from its Noida headquarters, including AI systems designed for SEBI and RBI compliance contexts.",
    },
  },
  hyderabad: {
    title: "AI Development Company Hyderabad",
    subtitle:
      "Toadsters provides AI development services to Hyderabad enterprises in pharma, enterprise tech, and manufacturing from Noida, India.",
    office: "Serving HITEC City and Cyberabad from Noida, India",
    cta: "Get in Touch for Hyderabad Projects",
    heroImage: TECH_IMAGES.server,
    body: [
      {
        title: "AI Development for Hyderabad Enterprise",
        image: TECH_IMAGES.server,
        paragraphs: [
          "Hyderabad's HITEC City and Cyberabad corridor is home to major pharma companies, global IT delivery centres, and a growing startup ecosystem.",
          "AI use cases here are particularly strong in pharma, manufacturing, and enterprise SaaS - including clinical data, regulatory compliance, drug discovery analytics, quality inspection, and predictive maintenance.",
          "Toadsters serves Hyderabad clients from its Noida headquarters, remotely for most engagements and in-person for significant discovery workshops and integration projects.",
        ],
      },
    ],
    faq: {
      question: "Is there an AI development company in Hyderabad?",
      answer:
        "Toadsters provides AI development services to Hyderabad enterprises from its Noida headquarters, serving clients in pharma, enterprise technology, and manufacturing sectors in HITEC City and the Cyberabad corridor.",
    },
  },
}

const INDIA_LOCATION_LINKS: IndiaLocationLink[] = [
  { label: "India", href: "/ai-development-company-india", key: "india" },
  { label: "Noida", href: "/ai-development-company-noida", key: "noida" },
  { label: "Delhi", href: "/ai-development-company-delhi", key: "delhi" },
  { label: "Bangalore", href: "/ai-development-company-bangalore", key: "bangalore" },
  { label: "Mumbai", href: "/ai-development-company-mumbai", key: "mumbai" },
  { label: "Hyderabad", href: "/ai-development-company-hyderabad", key: "hyderabad" },
]

export function LocalCountryPage({ city }: { city: LocalKey }) {
  const page = LOCAL_PAGES[city]
  const structuredData = [
    page.schema,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: page.faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: page.faq.answer,
          },
        },
      ],
    },
  ].filter(Boolean)

  return (
    <main className="min-h-screen bg-page-bg pt-28 text-page-fg">
      {structuredData.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <CountryHero
        eyebrow="India Local Page"
        title={page.title}
        subtitle={page.subtitle}
        office={page.office}
        heroImage={page.heroImage}
        heroImageAlt={page.title}
        actions={
          <Button asChild className="h-11 rounded-xl px-6 text-sm font-semibold">
            <Link href="/contact">
              {page.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="px-4 py-6 lg:px-20">
        <div
          className={`mx-auto grid max-w-9xl gap-5 ${
            page.body.length > 1 ? "lg:grid-cols-2" : "max-w-3xl"
          }`}
        >
          {page.body.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.06}>
              <CountrySectionCard
                title={section.title}
                paragraphs={section.paragraphs}
                image={section.image}
                imageAlt={section.title}
                index={index}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {page.clients && (
        <ScrollReveal>
          <section className="px-4 py-6 lg:px-20">
            <div className="relative mx-auto max-w-9xl overflow-hidden rounded-2xl border border-page-border bg-page-card/70 p-5 dark:bg-white/10 md:p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-toadster-green/10 blur-3xl"
              />
              <h2 className="relative text-lg font-bold md:text-xl">Clients We Serve from Noida</h2>
              <div className="relative mt-4 grid gap-2.5 sm:grid-cols-2">
                {page.clients.map((client) => (
                  <div
                    key={client}
                    className="flex items-center gap-2.5 rounded-xl border border-page-border bg-white/10 px-3.5 py-3 text-sm transition-colors hover:border-toadster-green/30 hover:bg-toadster-green/5"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-toadster-green" />
                    <span className="font-medium leading-snug">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      <IndiaLocationSwitcher
        title="Switch to another India AI development page"
        description="Browse our India hub or city-specific pages for Noida, Delhi, Bangalore, Mumbai, and Hyderabad."
        locations={INDIA_LOCATION_LINKS}
        activeKey={city}
      />

      <div className="pb-10" />
    </main>
  )
}

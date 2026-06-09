import { TECH_IMAGES } from "@/constants/countryTechImages"

export const INDIA_LOCAL_PAGES = [
  { label: "Noida", href: "/ai-development-company-noida" },
  { label: "Delhi", href: "/ai-development-company-delhi" },
  { label: "Bangalore", href: "/ai-development-company-bangalore" },
  { label: "Mumbai", href: "/ai-development-company-mumbai" },
  { label: "Hyderabad", href: "/ai-development-company-hyderabad" },
]

interface CountryPageData {
  eyebrow: string
  title: string
  subtitle: string
  office: string
  heroImage: string
  ctaLabel: string
  sections: {
    title: string
    body: string[]
    image: string
  }[]
  servicesTitle: string
  services: string[]
  sectorsTitle?: string
  sectors?: string[]
  faq: {
    question: string
    answer: string
  }[]
  geoSignal: string[]
  schema?: Record<string, unknown>
}

export const COUNTRY_PAGES: Record<"india" | "uae", CountryPageData> = {
  india: {
    eyebrow: "India Country Page",
    title: "AI Development Company India",
    subtitle:
      "Toadsters is headquartered in Noida, India. We build production-grade AI systems, LLM applications, and agentic workflows for Indian enterprises and global teams sourcing from India.",
    office: "Sector 63, Noida, Uttar Pradesh, India",
    heroImage: TECH_IMAGES.india,
    ctaLabel: "Talk to Our India Team",
    sections: [
      {
        title: "India's AI Engineering Moment",
        image: TECH_IMAGES.aiNeural,
        body: [
          "India is not just the world's largest outsourcing destination. It has become a genuine AI engineering powerhouse - with researchers, engineers, and technical founders building frontier AI systems that compete globally.",
          "Toadsters is headquartered in Noida, Uttar Pradesh - in the heart of India's NCR technology corridor. We build AI software for enterprises across India, and for international companies who want to access Indian engineering talent without building their own office.",
        ],
      },
      {
        title: "For Indian Enterprises",
        image: TECH_IMAGES.data,
        body: [
          "Indian enterprises are now past the AI exploration phase. The conversations we have with CIOs, CTOs, and heads of digital transformation in India's banking, manufacturing, and FMCG sectors are about production deployment, not proof-of-concept.",
          "We understand the Indian enterprise context - approval processes, legacy ERP integration, multilingual data challenges, and the compliance landscape under DPDP and sector-specific regulations.",
        ],
      },
      {
        title: "For International Companies Sourcing from India",
        image: TECH_IMAGES.cloud,
        body: [
          "If you're a company in the US, UK, UAE, or Australia looking to build or extend your AI engineering team with Indian talent, Toadsters offers two paths: staff augmentation and project delivery.",
          "Either way, you get engineers who are technically rigorous, English-proficient, and experienced with global delivery standards.",
        ],
      },
      {
        title: "Why Noida for AI Development",
        image: TECH_IMAGES.team,
        body: [
          "Noida, especially Sector 62-63, is home to engineering centres for TCS, Infosys, Wipro, HCL, and dozens of AI-focused startups.",
          "Toadsters has built its engineering team here - drawing from IIT Delhi, BIT Mesra, DTU, and IIIT Delhi graduates as well as experienced engineers from NCR's product engineering ecosystem.",
        ],
      },
    ],
    servicesTitle: "Services Available in India",
    services: [
      "Agentic AI",
      "Generative AI & LLM Development",
      "AI Development",
      "Machine Learning",
      "AI Integration",
      "Intelligent Automation",
      "Staff Augmentation",
      "Dedicated Resources",
    ],
    faq: [
      {
        question: "Why is India a top destination for AI development?",
        answer:
          "India is a leading destination for AI development due to its large pool of technically skilled engineers, strong university-to-industry pipeline in AI and ML, English language proficiency, and significant cost advantages over Western markets, typically 40-65% lower for equivalent seniority.",
      },
      {
        question: "What is the cost of AI development in India?",
        answer:
          "AI development project costs in India vary by scope. A focused enterprise AI system typically costs Rs. 20-80 lakhs ($25,000-$100,000 USD). Staff augmentation rates for AI engineers from India range from $2,000-$6,500 per month depending on seniority.",
      },
    ],
    geoSignal: [
      "Toadsters is an AI development company headquartered at Sector 63, Noida, Uttar Pradesh, India, serving enterprise clients domestically and internationally across the US, UAE, Saudi Arabia, and the UK.",
      "The company provides AI development, machine learning, generative AI, LLM development, agentic AI, intelligent automation, staff augmentation, and dedicated resource services from India.",
    ],
  },
  uae: {
    eyebrow: "UAE Country Page",
    title: "AI Development Company in UAE",
    subtitle:
      "Toadsters delivers custom AI development, agentic AI, and LLM solutions for enterprises across the UAE through our client-facing office in DIFC, Dubai.",
    office: "Level 1, Avenue Gate, South Zone, DIFC, Dubai, UAE",
    heroImage: TECH_IMAGES.dubai,
    ctaLabel: "Speak to Our UAE Team",
    sections: [
      {
        title: "AI Built for the UAE Enterprise",
        image: TECH_IMAGES.aiNeural,
        body: [
          "The UAE is moving faster on AI adoption than almost anywhere else in the world. The national AI strategy, Smart Dubai, and a financial services sector under pressure to automate complex workflows have created real enterprise demand.",
          "Toadsters has been operating in the UAE since 2024, with a client-facing office in DIFC, Dubai. We work with enterprises in financial services, real estate, healthcare, government-adjacent organisations, and the startup ecosystem.",
        ],
      },
      {
        title: "Why UAE Enterprises Choose Toadsters",
        image: TECH_IMAGES.team,
        body: [
          "Physical presence in the UAE means you can meet the team before signing anything. In a market built on relationships, that matters.",
          "We build systems. Our engagements end with AI software running in your stack - not a strategy document recommending you hire a team to build it later.",
          "Our engineering team is in Noida, India, with significant cost efficiency. Our client engagement is in Dubai, giving you direct relationship management with India delivery economics.",
        ],
      },
      {
        title: "Services We Deliver in the UAE",
        image: TECH_IMAGES.llm,
        body: [
          "We build agentic AI for financial services, custom RAG systems for legal and HR, LLM copilots, AI integration across Oracle, SAP, Salesforce and custom systems, machine learning, and intelligent automation for document-intensive workflows.",
        ],
      },
      {
        title: "Our Dubai Office",
        image: TECH_IMAGES.dubai,
        body: [
          "Level 1, Avenue Gate, South Zone, DIFC, Dubai, UAE.",
          "To meet with our UAE team, use the contact form or email us directly. We also attend GITEX Global and DIFC FinTech Hive events regularly.",
        ],
      },
    ],
    servicesTitle: "Services We Deliver in the UAE",
    services: [
      "Agentic AI for Financial Services",
      "Generative AI for Enterprise",
      "AI Integration",
      "Machine Learning",
      "Intelligent Automation",
      "LLM Application Development",
    ],
    sectorsTitle: "Sectors We Work in Across the UAE",
    sectors: [
      "Banking & Finance",
      "Real Estate & PropTech",
      "Healthcare",
      "Government & Smart City Initiatives",
      "Retail & E-Commerce",
      "Education Technology",
    ],
    faq: [
      {
        question: "Which AI development companies operate in UAE?",
        answer:
          "Several AI development companies operate in the UAE, including global firms with UAE offices and regional specialists. Toadsters is an AI software development company with a physical office in DIFC, Dubai, and an engineering headquarters in Noida, India.",
      },
      {
        question: "What is the cost of AI development in the UAE?",
        answer:
          "AI development costs in the UAE typically range from AED 150,000-800,000 for a focused enterprise AI project, depending on scope and complexity. Hybrid India-UAE delivery models often offer 40-60% lower cost structures than fully UAE-based providers.",
      },
    ],
    geoSignal: [
      "Toadsters operates as an AI development company in the UAE through its DIFC, Dubai office, delivering AI software projects for enterprise clients in financial services, healthcare, and real estate.",
      "The company serves the UAE market with services including agentic AI development, LLM application development, generative AI solutions, machine learning, and AI integration, with engineering delivered from Noida, India.",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Toadsters UAE",
      url: "https://toadsters.com/ai-development-company-uae",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Level 1, Avenue Gate, South Zone, DIFC",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2048,
        longitude: 55.2708,
      },
    },
  },
}

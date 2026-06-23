import { type BlogPost } from "../views/blogs/blogData"
import { getHireResourceMetadata } from "./hire-resources"

export interface PageMetadata {
  title: string
  description: string
}

export const SITE_URL = "https://toadsters.com"

export const SITE_OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const SITE_OG_IMAGE_TYPE = "image/jpeg"
export const SITE_OG_IMAGE_WIDTH = 1200
export const SITE_OG_IMAGE_HEIGHT = 630
export const SITE_OG_IMAGE_ALT = "Toadster - AI-Powered Digital Transformation"

export const DEFAULT_METADATA: PageMetadata = {
  title: "Toadster | Scalable AI Solutions & Enterprise Web Development",
  description:
    "Toadster delivers AI software development, MLOps, data engineering & custom software solutions for global enterprises, startups, and SMBs.",
}

const SERVICE_DESCRIPTIONS_BASE =
  "Discover Toadster's specialized capabilities. We design scalable AI systems, high-throughput ETL data pipelines, and intelligent enterprise ML platforms."

export const STATIC_PAGE_METADATA: Record<string, PageMetadata> = {
  "/": DEFAULT_METADATA,
  "/about": {
    title: "About Toadster | AI & Software Engineering",
    description:
      "Learn how Toadster helps businesses scale using production-ready AI systems. We bridge the gap between complex data pipelines and automated intelligence.",
  },
  "/blogs": {
    title: "Toadster Blog | AI, MLOps & Data Engineering Guides",
    description:
      "Toadster blog for deep technical guides on deploying production-grade ML platforms, managing feature stores, and optimizing data engineering.",
  },
  "/careers": {
    title: "Careers at Toadster | Join Our AI Team",
    description:
      "Join Toadster's next-generation AI infrastructure team. Work on global projects with enterprise clients, learn new technologies, and grow your career.",
  },
  "/contact": {
    title: "Contact Toadster | Get in Touch With Us",
    description:
      "Get in touch with Toadster's team. Let's architect your next scalable AI system, continuous training pipeline, or enterprise data platform together.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Toadster Technologies",
    description:
      "Toadster Technologies Privacy Policy — how we collect, use, protect, and retain personal data, your privacy rights, cookies, and contact information.",
  },
  "/terms-and-conditions": {
    title: "Terms and Conditions | Toadster Technologies",
    description:
      "Toadster Technologies Terms and Conditions — website use, services, intellectual property, disclaimers, liability, privacy, governing law, and contact information.",
  },
  "/hire-resources": {
    title: "Hire Dedicated Developers | IT Staff Augmentation Services — Toadster Technologies",
    description:
      "Hire dedicated developers and technology resources from Toadster Technologies. Flexible staff augmentation across software, mobile, AI/ML, DevOps, and more — onboarded in 5–7 days. Serving India, UAE, Saudi Arabia & the US.",
  },
  "/services": {
    title: "Software & AI Development Services | Toadster Technologies",
    description:
      "Explore Toadster Technologies' full range of services — AI development, agentic AI, RAG systems, software, mobile, DevOps, cybersecurity, and more. Serving India, UAE, Saudi Arabia & the US.",
  },
  "/ai-development-company-india": {
    title: "AI Development Company India | Custom AI, LLM & Agentic Systems | Toadster Noida",
    description:
      "Toadster is an AI development company headquartered in Noida, India. We build production-grade AI systems, LLM applications, and agentic workflows for enterprises across India and globally.",
  },
  "/ai-development-company-uae": {
    title: "AI Development Company in UAE | Custom AI & LLM Solutions | Toadster",
    description:
      "Toadster delivers custom AI development, agentic AI, and LLM solutions for enterprises across the UAE. Office in DIFC, Dubai. Trusted by UAE enterprises.",
  },
  "/ai-development-company-noida": {
    title: "AI Development Company Noida | Custom AI, LLM & Agentic Systems | Toadster Sector 63",
    description:
      "Toadster is an AI development company based in Sector 63, Noida. We build production AI systems, LLM applications, and agentic workflows for enterprises across India and globally.",
  },
  "/ai-development-company-delhi": {
    title: "AI Development Company Delhi | Custom AI & Machine Learning | Toadster NCR",
    description:
      "Toadster is a Delhi NCR AI development company (HQ: Sector 63, Noida). We build AI systems, LLM applications, and agentic workflows for Delhi enterprises.",
  },
  "/ai-development-company-bangalore": {
    title: "AI Development Company Bangalore | Custom AI, LLM & Agentic AI | Toadster India",
    description:
      "Toadster builds enterprise AI systems for Bangalore-based companies - startups, scale-ups, and large enterprises. Engineering HQ in Noida. Delivery standard: production-grade.",
  },
  "/ai-development-company-mumbai": {
    title: "AI Development Company Mumbai | Custom AI for BFSI & Enterprise | Toadster India",
    description:
      "Toadster builds AI systems for Mumbai enterprises - BFSI, fintech, media, and manufacturing. Engineering from Noida. Delivery that meets Mumbai's SEBI and RBI compliance context.",
  },
  "/ai-development-company-hyderabad": {
    title: "AI Development Company Hyderabad | Custom AI & Machine Learning | Toadster India",
    description:
      "Toadster provides AI development services to Hyderabad enterprises in pharma, enterprise tech, and manufacturing. Engineering from Noida, India.",
  },
  "/services/agentic-ai": {
    title: "Agentic AI Development Services | Autonomous AI Agents | Toadster Technologies",
    description:
      "Agentic AI development services — autonomous agents, multi-agent orchestration, tool-use integration, and AI safety guardrails. Built for real operational workflows. Talk to Toadster Technologies.",
  },
  "/services/generative-ai": {
    title: "Generative AI Services | Toadster",
    description:
      "Toadster's generative AI services deliver enterprise-grade content, code, and creative workflows powered by production-ready AI systems.",
  },
  "/services/nlp-services": {
    title: "NLP Services | Toadster AI Solutions",
    description:
      "Toadster's NLP services power language intelligence, document automation, semantic search, and scalable enterprise AI platforms.",
  },
  "/services/ai-development": {
    title: "AI Development Services | Artificial Intelligence Solutions | Toadster",
    description:
      "Practical AI development for startups, SMEs, and enterprises - custom ML, generative AI, chatbots, computer vision, MLOps, and AI consulting. Built for measurable ROI.",
  },
  "/services/machine-learning": {
    title: "Machine Learning Services | Toadster",
    description:
      "Toadster's machine learning services build production models, training pipelines, MLOps platforms, and continuous training systems for the enterprise.",
  },
  "/services/custom-ai-solutions": {
    title: "Custom AI Solutions | Toadster",
    description:
      "Toadster's custom AI solutions tailor scalable AI systems, high-throughput data pipelines, and ML platforms to unique business challenges.",
  },
  "/services/ai-integration": {
    title: "AI Integration Services | Toadster",
    description:
      "Toadster's AI integration services connect enterprise systems, automate workflows, and deploy production-ready intelligence at scale.",
  },
  "/services/ai-chatbots": {
    title: "AI Chatbot Development | Toadster",
    description:
      "Toadster's AI chatbot development delivers intelligent conversational systems, enterprise assistants, and scalable automation platforms.",
  },
  "/services/llm-development": {
    title: "LLM Development Services | Toadster",
    description:
      "Toadster's LLM development services build enterprise copilots, retrieval systems, and production-grade AI platforms backed by MLOps.",
  },
  "/services/computer-vision": {
    title: "Computer Vision Services | Toadster",
    description:
      "Toadster's computer vision services deliver visual intelligence, automated inspection, image analytics, and enterprise-grade ML systems.",
  },
  "/services/ai-data-analytics": {
    title: "AI Data Analytics Services | Toadster",
    description:
      "Toadster's AI data analytics services design scalable analytics platforms, high-throughput data pipelines, and intelligent ML systems.",
  },
  "/technologies/data-analytics": {
    title: "Data Analytics Services | Toadster Technologies",
    description:
      "Enterprise data analytics consulting from Toadster — data engineering, warehouse architecture, BI dashboards, predictive analytics, and governance built for measurable ROI.",
  },
  "/technologies/artificial-intelligence": {
    title: "Artificial Intelligence Services | Toadster Technologies",
    description:
      "Enterprise AI services from Toadster — custom LLM and RAG integration, autonomous agents, predictive ML models, MLOps, and governance built for production-grade outcomes.",
  },
  "/technologies/iot": {
    title: "IoT Services | Toadster Technologies",
    description:
      "Enterprise IoT services from Toadster — device architecture, connectivity design, edge computing, platform integration, predictive maintenance, and analytics for connected operations.",
  },
  "/technologies/augmented-reality": {
    title: "Augmented Reality Services | Toadster Technologies",
    description:
      "Enterprise AR services from Toadster — AR application development, head-mounted display integration, 3D content, remote assistance, and analytics for spatial computing deployments.",
  },
  "/technologies/penetration-testing": {
    title: "Penetration Testing Services | Toadster Technologies",
    description:
      "Enterprise penetration testing from Toadster — network, web application, API, and cloud security assessments aligned to OWASP, PTES, and NIST SP 800-115 with risk-prioritized reporting.",
  },
  "/technologies/devops": {
    title: "DevOps Services | Toadster Technologies",
    description:
      "Enterprise DevOps from Toadster — CI/CD pipeline design, infrastructure as code, Kubernetes, observability, and SRE built for faster, more reliable software delivery.",
  },
  "/technologies/saas-app-development": {
    title: "SaaS App Development Services | Toadster Technologies",
    description:
      "Enterprise SaaS app development from Toadster — multi-tenant architecture, subscription billing, authentication, scaling infrastructure, and compliance built for growth from first customer to millions.",
  },
  "/services/industry-solutions": {
    title: "AI Industry Solutions | Toadster",
    description:
      "Toadster's industry AI solutions deliver scalable data platforms, automated intelligence, and production-ready ML systems across sectors.",
  },
  "/services/ai-consultation": {
    title: "AI Consultation Services | Toadster",
    description:
      "Toadster's AI consultation services guide strategy, architecture, scalable AI systems, continuous training pipelines, and MLOps adoption.",
  },
  "/services/software-development": {
    title: "Software Development Services | Toadster",
    description:
      "Toadster builds scalable software products for startups, SMEs, and enterprises with transparent process, strategic thinking, and long-term partnership.",
  },
  "/services/mobile-app-development": {
    title: "Mobile App Development Services | iOS & Android Apps | Toadster",
    description:
      "We build iOS, Android, and cross-platform mobile apps for startups, SMEs, and enterprises. From MVP to full product - design, development, QA, and launch.",
  },
  "/services/devops": {
    title: "DevOps Services | CI/CD, Cloud Infrastructure & Automation | Toadster",
    description:
      "DevOps services for engineering teams - CI/CD pipelines, Kubernetes, cloud infrastructure, cost optimisation, and SRE. Ship faster, break less, and scale confidently.",
  },
  "/services/iot-development": {
    title: "IoT Development Services | Connected Devices & Smart Systems | Toadster",
    description:
      "End-to-end IoT development services - firmware, cloud platforms, edge computing, data pipelines, and dashboards. From PoC to production deployment.",
  },
  "/services/vr-development": {
    title: "VR Development Services | Virtual Reality Solutions | Toadster",
    description:
      "VR development for enterprise training, virtual showrooms, healthcare simulation, and multi-user environments. Meta Quest, PC VR, and Vision Pro - built for measurable business outcomes.",
  },
  "/services/augmented-reality": {
    title: "Augmented Reality Development Services | AR Apps & Enterprise Solutions | Toadster Technologies",
    description:
      "Custom AR development services — mobile AR, WebAR, HoloLens, AR training, product visualisation, and remote assistance. Built for real users in real environments. Talk to Toadster Technologies.",
  },
  "/services/application-support-and-maintenance": {
    title: "Application Support & Maintenance Services | Toadster Technologies",
    description:
      "Proactive application support and maintenance — 24/7 monitoring, incident response, security patching, performance optimisation, and SLA-based helpdesk. Keep your applications running and your business moving.",
  },
  "/services/product-management": {
    title: "Product Management Services | Roadmaps, Discovery & Delivery | Toadster",
    description:
      "Embedded product management for startups and enterprises - product strategy, roadmaps, discovery, requirements, backlog prioritisation, agile delivery, and fractional CPO services.",
  },
  "/services/penetration-testing": {
    title: "Penetration Testing Services | Security Assessments & Red Team | Toadster",
    description:
      "Penetration testing services for web apps, networks, APIs, mobile, and cloud. Manual testing, red team operations, compliance-driven assessments, and retesting included.",
  },
  "/services/cybersecurity": {
    title: "Cybersecurity Services | Penetration Testing & Security Consulting | Toadster Technologies",
    description:
      "Toadster Technologies delivers enterprise cybersecurity services — penetration testing, vulnerability assessments, cloud security audits, compliance consulting (ISO 27001, SOC 2, GDPR), and managed security. Protect your business before attackers find you.",
  },
  "/services/saas-app-development": {
    title: "SaaS App Development Services | Toadster Technologies",
    description:
      "Toadster Technologies builds scalable SaaS products end-to-end. From MVP to enterprise-grade platform - custom SaaS development for startups, SMEs, and growing businesses.",
  },
  "/services/web-development": {
    title: "Web Development Services | Custom Web Solutions | Toadster",
    description:
      "Toadster builds custom websites, web applications, and digital platforms that drive real business outcomes. From marketing sites to enterprise web platforms.",
  },
  "/services/rag-development": {
    title: "RAG Development Services | Retrieval-Augmented Generation | Toadster",
    description:
      "Production-grade RAG development - custom pipelines, enterprise knowledge bases, multi-source retrieval, hybrid SQL+vector systems, and agentic RAG. Connect LLMs to your proprietary data for accurate, grounded AI.",
  },
  "/services/agent-2-agent": {
    title: "Agent2Agent AI Solutions | Toadster",
    description:
      "Toadster's Agent2Agent solutions enable secure AI agent communication, enterprise workflows, and scalable intelligent automation.",
  },
  "/services/advanced-ai-tech": {
    title: "Advanced AI Technology Services | Toadster",
    description:
      "Toadster's advanced AI technology services power complex automation, enterprise ML platforms, and high-throughput pipelines for applied intelligence.",
  },
  "/services/conversational-ai": {
    title: "Conversational AI Services | Toadster",
    description:
      "Toadster's conversational AI services design enterprise assistants, natural language systems, and scalable automation platforms.",
  },
  "/services/ai-automation": {
    title: "AI Automation Services | Toadster",
    description:
      "Toadster's AI automation services deliver intelligent workflows, scalable enterprise systems, data pipelines, and production-ready ML platforms.",
  },
  "/services/intelligent-automation": {
    title: "Intelligent Automation Services | Toadster",
    description:
      "Toadster's intelligent automation services power enterprise workflows, scalable AI systems, and high-throughput data platforms.",
  },
}

const BLOG_PREFIX = "/blogs/"

export function getMetadataForPath(pathname: string, allBlogs: BlogPost[] = []): PageMetadata {
  if (pathname.startsWith(BLOG_PREFIX) && pathname !== "/blogs") {
    const slug = pathname.slice(BLOG_PREFIX.length)
    const blog = allBlogs.find((post) => post.slug === slug)
    if (blog) {
      return {
        title: blog.metaTitle ?? `${blog.title} | Toadster Blog`,
        description: blog.metaDescription ?? blog.description,
      }
    }
  }

  if (pathname.startsWith("/hire/")) {
    const hireMeta = getHireResourceMetadata(pathname)
    if (hireMeta) return hireMeta
  }

  return STATIC_PAGE_METADATA[pathname] ?? {
    title: DEFAULT_METADATA.title,
    description:
      pathname.startsWith("/services/") ? SERVICE_DESCRIPTIONS_BASE : DEFAULT_METADATA.description,
  }
}

export function buildCanonicalUrl(pathname: string): string {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "")
  return `${SITE_URL}${normalized}`
}

export function getAllPrerenderRoutes(allBlogs: BlogPost[] = []): string[] {
  const staticRoutes = Object.keys(STATIC_PAGE_METADATA)
  const blogRoutes = allBlogs.map((post) => `${BLOG_PREFIX}${post.slug}`)
  return Array.from(new Set([...staticRoutes, ...blogRoutes]))
}

export function buildBlogJsonLd(pathname: string, allBlogs: BlogPost[] = []): string | null {
  if (!pathname.startsWith(BLOG_PREFIX) || pathname === "/blogs") return null
  const slug = pathname.slice(BLOG_PREFIX.length)
  const blog = allBlogs.find((post) => post.slug === slug)
  if (!blog) return null

  const canonical = buildCanonicalUrl(pathname)
  const datePublishedIso = toIsoDate(blog.date)
  const imageUrl = absolutizeUrl(blog.image)

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    headline: blog.title,
    description: blog.description,
    image: [imageUrl],
    author: {
      "@type": "Person",
      name: blog.author,
      ...(blog.authorRole ? { jobTitle: blog.authorRole } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "Toadster",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/green-logo.svg` },
    },
    ...(datePublishedIso ? { datePublished: datePublishedIso, dateModified: datePublishedIso } : {}),
    ...(blog.tags && blog.tags.length > 0 ? { keywords: blog.tags.join(", ") } : {}),
    ...(blog.category ? { articleSection: blog.category } : {}),
    url: canonical,
  }

  if (blog.faqs && blog.faqs.length > 0) {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blog.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    }
    return `${JSON.stringify(jsonLd)}\n${JSON.stringify(faqJsonLd)}`
  }

  return JSON.stringify(jsonLd)
}

function absolutizeUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith("/")) return `${SITE_URL}${url}`
  return `${SITE_URL}/${url}`
}

function toIsoDate(input: string): string | null {
  const parsed = new Date(input)
  if (Number.isNaN(parsed.getTime())) return null
  const year = parsed.getFullYear()
  const month = String(parsed.getMonth() + 1).padStart(2, "0")
  const day = String(parsed.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

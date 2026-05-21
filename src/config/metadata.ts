import { allBlogs } from "@/pages/blogs/blogData"

export interface PageMetadata {
  title: string
  description: string
}

export const SITE_URL = "https://toadsters.com"

export const DEFAULT_METADATA: PageMetadata = {
  title: "Toadster | AI Solutions & Web Development",
  description:
    "Toadster is a global IT company engineering enterprise-grade software. We build scalable AI solutions, high-throughput data pipelines, and MLOps platforms.",
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
  "/services/agentic-ai": {
    title: "Agentic AI Services | Toadster",
    description:
      "Toadster's agentic AI services build autonomous reasoning systems, scalable AI platforms, and high-throughput data pipelines for the enterprise.",
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
    title: "AI Development Services | Toadster",
    description:
      "Toadster's AI development services engineer scalable AI systems, high-throughput ETL data pipelines, and intelligent enterprise ML platforms.",
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

export function getMetadataForPath(pathname: string): PageMetadata {
  if (pathname.startsWith(BLOG_PREFIX) && pathname !== "/blogs") {
    const slug = pathname.slice(BLOG_PREFIX.length)
    const blog = allBlogs.find((post) => post.slug === slug)
    if (blog) {
      return {
        title: `${blog.title} | Toadster Blog`,
        description: blog.description,
      }
    }
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

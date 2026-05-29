import {
  Activity,
  BarChart,
  Bot,
  Brain,
  Building,
  Code2,
  Cpu,
  Database,
  Eye,
  Flame,
  GitBranch,
  Link2,
  type LucideIcon,
  MessageSquare,
  Settings2,
  Sparkles,
  Text,
  UserCog,
  Zap,
} from "lucide-react"
import { allBlogs, type BlogPost } from "@/pages/blogs/blogData"

export interface ServiceMeta {
  slug: string
  path: string
  title: string
  shortTitle: string
  description: string
  icon: LucideIcon
  relatedSlugs: string[]
}

export const SERVICE_CATALOG: ServiceMeta[] = [
  {
    slug: "agentic-ai",
    path: "/services/agentic-ai",
    title: "Agentic AI Services",
    shortTitle: "Agentic AI",
    description: "Autonomous AI agents that plan, execute, and adapt at enterprise scale.",
    icon: Brain,
    relatedSlugs: ["llm-development", "ai-automation", "agent-2-agent"],
  },
  {
    slug: "generative-ai",
    path: "/services/generative-ai",
    title: "Generative AI Services",
    shortTitle: "Generative AI",
    description: "AI systems that create content, copy, code, and creative workflows at scale.",
    icon: Sparkles,
    relatedSlugs: ["llm-development", "conversational-ai", "ai-chatbots"],
  },
  {
    slug: "nlp-services",
    path: "/services/nlp-services",
    title: "NLP Services",
    shortTitle: "NLP Services",
    description: "Language intelligence for document automation, semantic search, and analytics.",
    icon: Text,
    relatedSlugs: ["conversational-ai", "ai-chatbots", "llm-development"],
  },
  {
    slug: "ai-development",
    path: "/services/ai-development",
    title: "AI Development Services",
    shortTitle: "AI Development",
    description: "End-to-end AI product engineering with scalable architecture and MLOps.",
    icon: Code2,
    relatedSlugs: ["custom-ai-solutions", "machine-learning", "llm-development"],
  },
  {
    slug: "machine-learning",
    path: "/services/machine-learning",
    title: "Machine Learning Services",
    shortTitle: "Machine Learning",
    description: "Production ML models, training pipelines, and continuous-training systems.",
    icon: Zap,
    relatedSlugs: ["ai-data-analytics", "ai-development", "computer-vision"],
  },
  {
    slug: "custom-ai-solutions",
    path: "/services/custom-ai-solutions",
    title: "Custom AI Solutions",
    shortTitle: "Custom AI Solutions",
    description: "Tailor-made AI systems and data pipelines for unique business challenges.",
    icon: Flame,
    relatedSlugs: ["ai-development", "ai-integration", "advanced-ai-tech"],
  },
  {
    slug: "ai-integration",
    path: "/services/ai-integration",
    title: "AI Integration Services",
    shortTitle: "AI Integration",
    description: "Connect enterprise systems and deploy intelligence into existing workflows.",
    icon: Link2,
    relatedSlugs: ["ai-automation", "custom-ai-solutions", "intelligent-automation"],
  },
  {
    slug: "ai-chatbots",
    path: "/services/ai-chatbots",
    title: "AI Chatbot Development",
    shortTitle: "AI Chatbots",
    description: "Intelligent conversational interfaces and enterprise assistants.",
    icon: Bot,
    relatedSlugs: ["conversational-ai", "nlp-services", "generative-ai"],
  },
  {
    slug: "llm-development",
    path: "/services/llm-development",
    title: "LLM Development Services",
    shortTitle: "LLM Development",
    description: "Enterprise copilots, retrieval systems, and production-grade LLM platforms.",
    icon: Database,
    relatedSlugs: ["generative-ai", "agentic-ai", "nlp-services"],
  },
  {
    slug: "computer-vision",
    path: "/services/computer-vision",
    title: "Computer Vision Services",
    shortTitle: "Computer Vision",
    description: "Visual intelligence, automated inspection, and image analytics at scale.",
    icon: Eye,
    relatedSlugs: ["machine-learning", "ai-data-analytics", "industry-solutions"],
  },
  {
    slug: "ai-data-analytics",
    path: "/services/ai-data-analytics",
    title: "AI Data Analytics Services",
    shortTitle: "AI Data Analytics",
    description: "Scalable analytics platforms and high-throughput data pipelines.",
    icon: BarChart,
    relatedSlugs: ["machine-learning", "computer-vision", "industry-solutions"],
  },
  {
    slug: "industry-solutions",
    path: "/services/industry-solutions",
    title: "AI Industry Solutions",
    shortTitle: "Industry Solutions",
    description: "Sector-specific AI platforms for fintech, healthcare, retail, and more.",
    icon: Building,
    relatedSlugs: ["custom-ai-solutions", "ai-consultation", "ai-development"],
  },
  {
    slug: "ai-consultation",
    path: "/services/ai-consultation",
    title: "AI Consultation Services",
    shortTitle: "AI Consultation",
    description: "Strategy, architecture, and MLOps adoption for enterprise AI programs.",
    icon: UserCog,
    relatedSlugs: ["ai-development", "industry-solutions", "custom-ai-solutions"],
  },
  {
    slug: "agent-2-agent",
    path: "/services/agent-2-agent",
    title: "Agent2Agent AI Solutions",
    shortTitle: "Agent2Agent (A2A)",
    description: "Secure agent communication protocols for enterprise workflows.",
    icon: GitBranch,
    relatedSlugs: ["agentic-ai", "ai-integration", "advanced-ai-tech"],
  },
  {
    slug: "advanced-ai-tech",
    path: "/services/advanced-ai-tech",
    title: "Advanced AI Technology Services",
    shortTitle: "Advanced AI Tech",
    description: "Cutting-edge AI capabilities for complex automation and applied intelligence.",
    icon: Cpu,
    relatedSlugs: ["agentic-ai", "custom-ai-solutions", "llm-development"],
  },
  {
    slug: "conversational-ai",
    path: "/services/conversational-ai",
    title: "Conversational AI Services",
    shortTitle: "Conversational AI",
    description: "Natural, contextual conversational experiences and enterprise assistants.",
    icon: MessageSquare,
    relatedSlugs: ["ai-chatbots", "nlp-services", "generative-ai"],
  },
  {
    slug: "ai-automation",
    path: "/services/ai-automation",
    title: "AI Automation Services",
    shortTitle: "AI Automation",
    description: "Intelligent workflows that automate complex decision-making.",
    icon: Activity,
    relatedSlugs: ["intelligent-automation", "ai-integration", "agentic-ai"],
  },
  {
    slug: "intelligent-automation",
    path: "/services/intelligent-automation",
    title: "Intelligent Automation Services",
    shortTitle: "Intelligent Automation",
    description: "AI-powered automation across enterprise workflows and data platforms.",
    icon: Settings2,
    relatedSlugs: ["ai-automation", "ai-integration", "agentic-ai"],
  },
]

const SLUG_TO_SERVICE: Map<string, ServiceMeta> = new Map(
  SERVICE_CATALOG.map((service) => [service.slug, service])
)

const PATH_TO_SERVICE: Map<string, ServiceMeta> = new Map(
  SERVICE_CATALOG.map((service) => [service.path, service])
)

const BLOG_CATEGORY_TO_SERVICE_SLUGS: Record<string, string[]> = {
  "App Development": ["ai-development", "custom-ai-solutions", "ai-consultation"],
  "AI Development": ["ai-development", "agentic-ai", "llm-development"],
  "AI Automation": ["ai-automation", "intelligent-automation", "agentic-ai"],
  "Generative AI": ["generative-ai", "llm-development", "ai-chatbots"],
  "Digital Transformation": ["ai-consultation", "intelligent-automation", "custom-ai-solutions"],
  "Machine Learning": ["machine-learning", "ai-data-analytics", "ai-development"],
  "AI Ethics": ["ai-consultation", "custom-ai-solutions", "industry-solutions"],
  NLP: ["nlp-services", "conversational-ai", "ai-chatbots"],
  "Computer Vision": ["computer-vision", "machine-learning", "industry-solutions"],
  Robotics: ["machine-learning", "computer-vision", "ai-automation"],
  "Healthcare AI": ["industry-solutions", "ai-consultation", "ai-development"],
  "Edge Computing": ["ai-integration", "advanced-ai-tech", "custom-ai-solutions"],
  "Finance AI": ["industry-solutions", "ai-data-analytics", "ai-consultation"],
}

const SERVICE_TO_BLOG_CATEGORIES: Record<string, string[]> = (() => {
  const map: Record<string, string[]> = {}
  for (const [category, slugs] of Object.entries(BLOG_CATEGORY_TO_SERVICE_SLUGS)) {
    for (const slug of slugs) {
      if (!map[slug]) map[slug] = []
      map[slug].push(category)
    }
  }
  return map
})()

export function getServiceByPath(pathname: string): ServiceMeta | undefined {
  return PATH_TO_SERVICE.get(pathname)
}

export function getServiceBySlug(slug: string): ServiceMeta | undefined {
  return SLUG_TO_SERVICE.get(slug)
}

export function getRelatedServices(service: ServiceMeta): ServiceMeta[] {
  return service.relatedSlugs
    .map((slug) => SLUG_TO_SERVICE.get(slug))
    .filter((s): s is ServiceMeta => Boolean(s))
}

const FALLBACK_BLOG_SERVICE_SLUGS = [
  "ai-development",
  "agentic-ai",
  "custom-ai-solutions",
]

export function getRelatedServicesForBlog(blog: BlogPost): ServiceMeta[] {
  const mapped = blog.category ? BLOG_CATEGORY_TO_SERVICE_SLUGS[blog.category] : undefined
  const slugs = mapped && mapped.length > 0 ? mapped : FALLBACK_BLOG_SERVICE_SLUGS
  return slugs
    .map((slug) => SLUG_TO_SERVICE.get(slug))
    .filter((s): s is ServiceMeta => Boolean(s))
}

export function getRelatedBlogsForService(serviceSlug: string, limit = 3): BlogPost[] {
  const categories = SERVICE_TO_BLOG_CATEGORIES[serviceSlug] ?? []
  const matches: BlogPost[] = []
  const seenSlugs = new Set<string>()

  for (const blog of allBlogs) {
    if (matches.length >= limit) break
    if (!blog.category || !categories.includes(blog.category)) continue
    if (seenSlugs.has(blog.slug)) continue
    matches.push(blog)
    seenSlugs.add(blog.slug)
  }

  if (matches.length < limit) {
    for (const blog of allBlogs) {
      if (matches.length >= limit) break
      if (seenSlugs.has(blog.slug)) continue
      matches.push(blog)
      seenSlugs.add(blog.slug)
    }
  }

  return matches
}

export function getRelatedBlogsForBlog(currentSlug: string, limit = 3): BlogPost[] {
  return allBlogs.filter((blog) => blog.slug !== currentSlug).slice(0, limit)
}

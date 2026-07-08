import {
  Bot,
  Brain,
  ClipboardList,
  Code2,
  Cpu,
  Eye,
  GitBranch,
  Layers,
  LifeBuoy,
  Lock,
  type LucideIcon,
  Monitor,
  Scan,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react"
import { type BlogPost } from "@/views/blogs/blogData"

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
    slug: "ai-development",
    path: "/services/ai-development",
    title: "AI Development Services",
    shortTitle: "AI Development",
    description: "End-to-end AI product engineering - custom ML, GenAI, NLP, computer vision, MLOps, and consulting.",
    icon: Brain,
    relatedSlugs: ["agentic-ai", "rag-development", "software-development"],
  },
  {
    slug: "agentic-ai",
    path: "/services/agentic-ai",
    title: "Agentic AI Services",
    shortTitle: "Agentic AI",
    description: "Autonomous AI agents that plan, execute, and adapt at enterprise scale.",
    icon: Bot,
    relatedSlugs: ["rag-development", "ai-development", "software-development"],
  },
  {
    slug: "rag-development",
    path: "/services/rag-development",
    title: "RAG Development Services",
    shortTitle: "RAG Development",
    description: "Retrieval-augmented generation - connect LLMs to your documents, databases, and knowledge bases.",
    icon: GitBranch,
    relatedSlugs: ["agentic-ai", "ai-development", "software-development"],
  },
  {
    slug: "software-development",
    path: "/services/software-development",
    title: "Software Development Services",
    shortTitle: "Software Development",
    description: "Custom web apps, mobile products, SaaS platforms, and scalable software engineering.",
    icon: Code2,
    relatedSlugs: ["mobile-app-development", "web-development", "saas-app-development"],
  },
  {
    slug: "mobile-app-development",
    path: "/services/mobile-app-development",
    title: "Mobile App Development Services",
    shortTitle: "Mobile App Development",
    description: "iOS, Android, and cross-platform mobile apps - from MVP to full product, design through launch.",
    icon: Smartphone,
    relatedSlugs: ["software-development", "devops", "web-development"],
  },
  {
    slug: "devops",
    path: "/services/devops",
    title: "DevOps Services",
    shortTitle: "DevOps",
    description: "CI/CD pipelines, Kubernetes, cloud infrastructure, cost optimisation, SRE, and managed DevOps.",
    icon: Settings2,
    relatedSlugs: ["software-development", "cybersecurity", "penetration-testing"],
  },
  {
    slug: "penetration-testing",
    path: "/services/penetration-testing",
    title: "Penetration Testing Services",
    shortTitle: "Penetration Testing",
    description: "Manual security testing for web apps, networks, APIs, mobile, and cloud with retesting included.",
    icon: ShieldCheck,
    relatedSlugs: ["cybersecurity", "devops", "software-development"],
  },
  {
    slug: "cybersecurity",
    path: "/services/cybersecurity",
    title: "Cybersecurity Services",
    shortTitle: "Cybersecurity",
    description: "Penetration testing, vulnerability management, cloud security, compliance, AppSec, and SOC-as-a-Service.",
    icon: Lock,
    relatedSlugs: ["penetration-testing", "devops", "software-development"],
  },
  {
    slug: "application-support-and-maintenance",
    path: "/services/application-support-and-maintenance",
    title: "Application Support & Maintenance Services",
    shortTitle: "Application Support",
    description: "Proactive monitoring, L1-L3 support, patching, performance optimisation, and SLA-based application maintenance.",
    icon: LifeBuoy,
    relatedSlugs: ["software-development", "devops", "saas-app-development"],
  },
  {
    slug: "saas-app-development",
    path: "/services/saas-app-development",
    title: "SaaS App Development Services",
    shortTitle: "SaaS App Development",
    description: "End-to-end SaaS product development from MVP to enterprise-grade multi-tenant platforms.",
    icon: Layers,
    relatedSlugs: ["software-development", "web-development", "mobile-app-development"],
  },
  {
    slug: "web-development",
    path: "/services/web-development",
    title: "Web Development Services",
    shortTitle: "Web Development",
    description: "Custom websites, web applications, e-commerce, and digital platforms built for business outcomes.",
    icon: Monitor,
    relatedSlugs: ["software-development", "saas-app-development", "mobile-app-development"],
  },
  {
    slug: "iot-development",
    path: "/services/iot-development",
    title: "IoT Development Services",
    shortTitle: "IoT Development",
    description: "End-to-end IoT - firmware, cloud platforms, edge computing, data pipelines, and dashboards.",
    icon: Cpu,
    relatedSlugs: ["software-development", "devops", "ai-development"],
  },
  {
    slug: "vr-development",
    path: "/services/vr-development",
    title: "VR Development Services",
    shortTitle: "VR Development",
    description: "Custom VR apps for training, simulation, virtual showrooms, and enterprise deployment.",
    icon: Eye,
    relatedSlugs: ["augmented-reality", "software-development", "mobile-app-development"],
  },
  {
    slug: "augmented-reality",
    path: "/services/augmented-reality",
    title: "Augmented Reality Development Services",
    shortTitle: "AR Development",
    description: "Mobile AR, WebAR, HoloLens, product visualisation, AR training, and remote assistance for enterprise.",
    icon: Scan,
    relatedSlugs: ["vr-development", "software-development", "iot-development"],
  },
  {
    slug: "product-management",
    path: "/services/product-management",
    title: "Product Management Services",
    shortTitle: "Product Management",
    description: "Embedded PMs, roadmaps, discovery, requirements, backlog prioritisation, agile delivery, and fractional CPO.",
    icon: ClipboardList,
    relatedSlugs: ["software-development", "mobile-app-development", "ai-development"],
  },
]

const SLUG_TO_SERVICE: Map<string, ServiceMeta> = new Map(
  SERVICE_CATALOG.map((service) => [service.slug, service])
)

const PATH_TO_SERVICE: Map<string, ServiceMeta> = new Map(
  SERVICE_CATALOG.map((service) => [service.path, service])
)

const BLOG_CATEGORY_TO_SERVICE_SLUGS: Record<string, string[]> = {
  "App Development": ["software-development", "mobile-app-development", "web-development"],
  "AI Development": ["ai-development", "agentic-ai", "rag-development"],
  "AI Automation": ["agentic-ai", "ai-development", "software-development"],
  "Generative AI": ["agentic-ai", "rag-development", "ai-development"],
  "Digital Transformation": ["ai-development", "software-development", "product-management"],
  "Machine Learning": ["ai-development", "rag-development", "software-development"],
  "AI Ethics": ["ai-development", "product-management", "cybersecurity"],
  NLP: ["ai-development", "agentic-ai", "rag-development"],
  "Computer Vision": ["ai-development", "software-development", "iot-development"],
  Robotics: ["ai-development", "iot-development", "software-development"],
  "Healthcare AI": ["ai-development", "software-development", "product-management"],
  "Edge Computing": ["iot-development", "ai-development", "devops"],
  "Finance AI": ["ai-development", "cybersecurity", "software-development"],
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
  "software-development",
]

export function getRelatedServicesForBlog(blog: BlogPost): ServiceMeta[] {
  const mapped = blog.category ? BLOG_CATEGORY_TO_SERVICE_SLUGS[blog.category] : undefined
  const slugs = mapped && mapped.length > 0 ? mapped : FALLBACK_BLOG_SERVICE_SLUGS
  return slugs
    .map((slug) => SLUG_TO_SERVICE.get(slug))
    .filter((s): s is ServiceMeta => Boolean(s))
}

export function getRelatedBlogsForService(serviceSlug: string, allBlogs: BlogPost[], limit = 3): BlogPost[] {
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

export function getRelatedBlogsForBlog(currentSlug: string, allBlogs: BlogPost[], limit = 3): BlogPost[] {
  return allBlogs.filter((blog) => blog.slug !== currentSlug).slice(0, limit)
}

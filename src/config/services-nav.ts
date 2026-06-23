export const SERVICES_NAV = [
  {
    icon: "Brain",
    title: "AI Development",
    description: "Practical AI solutions - ML, GenAI, NLP, vision, and MLOps for real business outcomes",
    href: "/services/ai-development",
  },
  {
    icon: "Bot",
    title: "Agentic AI",
    description: "Autonomous agents, multi-agent orchestration, tool-use integration, and AI safety guardrails",
    href: "/services/agentic-ai",
  },
  {
    icon: "GitBranch",
    title: "RAG Development",
    description: "Retrieval-augmented generation and knowledge systems",
    href: "/services/rag-development",
  },
  {
    icon: "Code2",
    title: "Software Development",
    description: "Custom software, web apps, and scalable product engineering",
    href: "/services/software-development",
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "iOS, Android, and cross-platform apps from MVP to launch",
    href: "/services/mobile-app-development",
  },
  {
    icon: "Server",
    title: "DevOps",
    description: "CI/CD pipelines, cloud infrastructure, Kubernetes, and SRE",
    href: "/services/devops",
  },
  {
    icon: "Cpu",
    title: "IoT Development",
    description: "End-to-end IoT - firmware, cloud, edge computing, and dashboards",
    href: "/services/iot-development",
  },
  {
    icon: "Eye",
    title: "VR Development",
    description: "Custom VR apps for training, simulation, virtual showrooms, and enterprise deployment",
    href: "/services/vr-development",
  },
  {
    icon: "Scan",
    title: "AR Development",
    description: "Mobile AR, WebAR, HoloLens, product visualisation, and enterprise AR solutions",
    href: "/services/augmented-reality",
  },
  {
    icon: "ClipboardList",
    title: "Product Management",
    description: "Embedded PMs, roadmaps, discovery, requirements, and fractional CPO leadership",
    href: "/services/product-management",
  },
  {
    icon: "ShieldCheck",
    title: "Penetration Testing",
    description: "Manual security testing, red team operations, and compliance-driven assessments",
    href: "/services/penetration-testing",
  },
  {
    icon: "Lock",
    title: "Cybersecurity Services",
    description: "Penetration testing, cloud security, compliance, AppSec, and managed SOC",
    href: "/services/cybersecurity",
  },
  {
    icon: "LifeBuoy",
    title: "Application Support",
    description: "Proactive monitoring, incident response, patching, and SLA-based maintenance",
    href: "/services/application-support-and-maintenance",
  },
  {
    icon: "Layers",
    title: "SaaS App Development",
    description: "End-to-end SaaS products from MVP to enterprise-grade multi-tenant platforms",
    href: "/services/saas-app-development",
  },
  {
    icon: "Monitor",
    title: "Web Development",
    description: "Custom websites, web applications, and digital platforms that drive business outcomes",
    href: "/services/web-development",
  },
] as const

export type ServiceNavItem = (typeof SERVICES_NAV)[number]
export type ServiceNavIcon = ServiceNavItem["icon"]

export const SERVICE_ROUTES: Record<string, string> = Object.fromEntries(
  SERVICES_NAV.map((service) => [service.title, service.href]),
)

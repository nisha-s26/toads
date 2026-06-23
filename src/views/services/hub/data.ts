import type { LucideIcon } from "lucide-react"
import {
  Brain,
  ClipboardList,
  Code2,
  Globe,
  Layers,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react"

export const SERVICES_HUB_META = {
  title: "Software & AI Development Services | Toadster Technologies",
  description:
    "Explore Toadster Technologies' full range of services — AI development, agentic AI, RAG systems, software, mobile, DevOps, cybersecurity, and more. Serving India, UAE, Saudi Arabia & the US.",
}

export const heroContent = {
  title: "Software, AI & Digital Engineering Services",
  paragraphs: [
    "Most technology partners are good at one or two things and stretch to cover the rest. Toadster Technologies was built differently — as a single team spanning AI development, full-stack engineering, infrastructure, security, and immersive technology, so a product roadmap doesn't have to be split across five different vendors who don't talk to each other.",
    "Whether you're building a generative AI feature, modernising legacy infrastructure, or shipping a mobile app from scratch, the same engineering discipline and delivery process applies across every service below.",
  ],
  primaryCta: "Explore Our Services",
  secondaryCta: "Talk to Our Team",
  badges: ["⭐ 4.9/5 on Clutch", "150+ projects delivered", "8 countries served"],
}

export const practiceAreas: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Brain,
    title: "AI & Intelligence",
    description:
      "AI development, agentic AI systems, and retrieval-augmented generation — built for production use, not just a proof of concept that stalls after the demo.",
  },
  {
    icon: Code2,
    title: "Engineering",
    description:
      "Software, mobile, SaaS, and web development covering the full product lifecycle from initial architecture to post-launch scaling.",
  },
  {
    icon: Network,
    title: "Infrastructure & Immersive Tech",
    description:
      "DevOps and IoT for the systems running underneath your product, plus VR and AR development for the experiences that go beyond a flat screen.",
  },
  {
    icon: ShieldCheck,
    title: "Security, Operations & Strategy",
    description:
      "Cybersecurity services, penetration testing, ongoing application support, and embedded product management for teams that need senior strategic input, not just execution.",
  },
]

export const allServicesSection = {
  title: "All Services",
  intro:
    "Each service below links to its own dedicated page covering deliverables, technology stack, process, and pricing considerations specific to that service.",
}

export const togetherSection = {
  title: "Why These Services Work Together",
  paragraphs: [
    "Most of our clients don't come in needing exactly one service in isolation. A SaaS platform usually needs software development, DevOps to deploy it, and eventually AI features to stay competitive. A mobile app launch often needs penetration testing before release and application support after it. Because all of these practice areas sit inside one team, the handoffs between them don't involve re-explaining your product to a new vendor every time the scope shifts.",
    "This also means recommendations are grounded in what's actually feasible to build and maintain — not shaped by which service a separate, siloed team happens to be trying to sell that quarter.",
  ],
}

export const deliveryProcess = {
  title: "Our Delivery Process",
  intro:
    "Regardless of which service you engage us for, the underlying delivery process follows the same structure — because consistency in process is what keeps a multi-service engagement from feeling disjointed.",
  steps: [
    {
      num: "01",
      title: "Discovery & Scoping",
      desc: "We assess your existing systems, constraints, and goals to define a scope that's realistic — not an inflated estimate designed to look impressive in a proposal.",
    },
    {
      num: "02",
      title: "Architecture & Planning",
      desc: "Before writing production code, we map the technical architecture, identify risk areas, and agree on milestones you can actually track progress against.",
    },
    {
      num: "03",
      title: "Build & Iterate",
      desc: "Development happens in visible sprints with regular demos — so you're seeing working software throughout the engagement, not just at the very end.",
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "Post-launch, we hand over full documentation and offer ongoing application support, so the system doesn't become unmaintainable the moment the initial team rotates off.",
    },
  ],
}

export const engagementModels = {
  headers: ["Model", "Best For", "Typical Duration", "Billing"],
  rows: [
    ["Fixed-Scope Project", "Well-defined deliverables", "8–16 Weeks", "Milestone-Based"],
    ["Dedicated Team", "Ongoing product development", "3+ Months", "Fixed Monthly"],
    ["Time & Materials", "Evolving or exploratory scope", "Flexible", "Hourly / Monthly"],
    ["Managed Service", "Continuous support & operations", "Ongoing", "SLA-Based Retainer"],
  ],
}

export const whyToadster: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Layers,
    title: "One Team Across the Full Stack",
    description:
      "AI, engineering, infrastructure, and security sit under one roof — so a recommendation in one area accounts for its impact on the others, instead of optimising a single service in isolation.",
  },
  {
    icon: Users,
    title: "Senior-Led Delivery",
    description:
      "Engagements are staffed and reviewed by engineers with real production experience in that specific domain, not generalists rotating across unrelated service lines.",
  },
  {
    icon: ClipboardList,
    title: "Transparent, Milestone-Based Progress",
    description:
      "You see working software at every sprint demo, with clear documentation of what's been built and what's still in progress — no black-box development cycles.",
  },
  {
    icon: Globe,
    title: "Global Delivery Across Key Markets",
    description:
      "With teams across India, the UAE, Saudi Arabia, and the US, we align to your timezone and regional compliance requirements rather than forcing a single delivery model on every client.",
  },
]

export const ctaSection = {
  title: "Not Sure Which Service You Need?",
  description:
    "Most projects touch more than one service area. Tell us what you're trying to build, and we'll map out the right combination of services and engagement model — no obligation, no generic sales pitch.",
  primaryCta: "Get a Free Consultation",
  secondaryCta: "View All Services",
  footer: "+91 92205 17988 | business@toadsters.com | Sector 63, Noida, India",
}

export const faqs = [
  {
    question: "What services does Toadster Technologies offer?",
    answer:
      "Toadster Technologies offers fifteen core services across five practice areas: AI & Intelligence (AI development, agentic AI, RAG development), Engineering (software, mobile, SaaS, and web development), Infrastructure & Immersive Tech (DevOps, IoT, VR, AR), Security & Operations (cybersecurity services, penetration testing, application support), and Strategy (product management).",
  },
  {
    question: "What is the difference between AI development and agentic AI development?",
    answer:
      "AI development covers building machine learning models, generative AI features, and intelligent automation for specific tasks. Agentic AI development goes further, building autonomous systems that can plan multi-step actions, use tools, and make decisions with limited human intervention — suited to workflows that require ongoing reasoning rather than a single prediction or output.",
  },
  {
    question: "How do I know which service my project needs?",
    answer:
      "Most projects need a combination of services rather than just one — a SaaS platform typically needs software development, DevOps for deployment, and security review before launch. The fastest way to determine the right combination is a scoping conversation, where we map your goals against the services that actually apply.",
  },
  {
    question: "Can Toadster Technologies handle a project that spans multiple services?",
    answer:
      "Yes — this is the most common type of engagement. Because all practice areas operate as one team, a project spanning AI development, web development, and cybersecurity is coordinated internally rather than handed off between separate vendors.",
  },
  {
    question: "What engagement models are available for these services?",
    answer:
      "We offer four primary models: fixed-scope projects for well-defined deliverables, dedicated teams for ongoing product development, time-and-materials for evolving scope, and managed service retainers for continuous support and operations.",
  },
  {
    question: "Do you provide ongoing support after a project is delivered?",
    answer:
      "Yes. Our application support service covers proactive monitoring, incident response, patching, and SLA-based maintenance after launch, so systems remain stable and maintainable as your product evolves.",
  },
  {
    question: "What industries does Toadster Technologies work with?",
    answer:
      "We've delivered projects across fintech, healthtech, retail and e-commerce, logistics, manufacturing, education, government, and SaaS — adapting our technical approach to the compliance and operational requirements specific to each sector.",
  },
  {
    question: "How does Toadster Technologies price its services?",
    answer:
      "Pricing depends on the engagement model, project scope, and required specialisation. Fixed-scope projects are milestone-based, dedicated teams use fixed monthly retainers, and managed services are typically SLA-based. Contact us for a quote specific to your requirements.",
  },
]

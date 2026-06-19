import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Bot,
  Brain,
  ClipboardList,
  Cloud,
  Code2,
  Database,
  GitBranch,
  LayoutDashboard,
  LayoutTemplate,
  Layers,
  LifeBuoy,
  Link2,
  Lock,
  MessageSquare,
  Palette,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  Unlock,
  Users,
  Workflow,
} from "lucide-react"

export const heroTrustItems = [
  "No long-term lock-in",
  "Transparent pricing",
  "Weekly delivery cycles",
  "Post-launch support included",
]

export const trustStats = [
  { number: "150+", label: "Software projects delivered" },
  // { number: "8+", label: "Years of experience" },
  { number: "40+", label: "Technology experts" },
  // { number: "18", label: "Industries served" },
  { number: "92%", label: "Client retention rate" },
]

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: LayoutDashboard,
    title: "Custom Web Application Development",
    desc: "Purpose-built web applications that do exactly what your business requires - from internal tools and dashboards to customer-facing platforms. No off-the-shelf compromises.",
    value: "Reduces reliance on manual processes and disconnected tools",
    tags: ["Operations portals", "CRM systems", "Admin dashboards", "Booking platforms"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native iOS and Android apps, or cross-platform solutions with React Native and Flutter. Built for real users - fast, reliable, and designed to retain engagement.",
    value: "Extends your product reach to mobile-first audiences",
    tags: ["Consumer apps", "Field service tools", "On-demand marketplaces"],
  },
  {
    icon: Rocket,
    title: "SaaS Product Development",
    desc: "Full-cycle SaaS development from concept to launch - multi-tenant architecture, subscription billing, onboarding flows, and the infrastructure to grow from 10 users to 10,000.",
    value: "Monetizable software built for recurring revenue from day one",
    tags: ["B2B SaaS", "Vertical SaaS", "Marketplace platforms"],
  },
  {
    icon: Link2,
    title: "API Development & System Integration",
    desc: "Well-designed APIs are the backbone of modern software. We build robust REST and GraphQL APIs, and connect your software with third-party platforms like Salesforce, Stripe, or your ERP.",
    value: "Eliminates data silos and enables systems to work together",
    tags: ["ERP integration", "Payment gateways", "Legacy modernization"],
  },
  {
    icon: Cloud,
    title: "Cloud-Native Development",
    desc: "Software designed and built for the cloud from the ground up - containerized, auto-scaling, and cost-efficient. We work primarily on AWS, Azure, and Google Cloud.",
    value: "Reduces infrastructure costs while improving availability and performance",
    tags: ["Microservices", "Serverless apps", "High-traffic platforms"],
  },
  {
    icon: RefreshCw,
    title: "Software Modernization & Rescue",
    desc: "Legacy codebases and abandoned projects don't have to be a dead end. We audit, refactor, and rebuild software to bring it up to modern standards - with minimal disruption to your operations.",
    value: "Extends the life of existing investments without starting from scratch",
    tags: ["Tech debt reduction", "Migration projects", "Codebase audits"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Continuous Delivery",
    desc: "Automated pipelines, infrastructure as code, and monitoring systems that make your software releases predictable and your uptime reliable. Fewer surprises, faster iterations.",
    value: "Shortens release cycles from weeks to days without increasing risk",
    tags: ["CI/CD pipelines", "Kubernetes orchestration", "Observability setup"],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    desc: "Testing built into every stage of development - automated unit tests, integration tests, end-to-end testing, and performance testing before anything goes live.",
    value: "Catches problems before your customers do",
    tags: ["Regression testing", "Load testing", "Security testing"],
  },
  {
    icon: Sparkles,
    title: "AI-Powered Software Features",
    desc: "Adding intelligent capabilities to your software - from recommendations and search to automation and predictive analytics - using proven AI and ML frameworks, not hype.",
    value: "Makes your software smarter without adding operational complexity",
    tags: ["Smart search", "Recommendation engines", "Process automation"],
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: MessageSquare,
    title: "You always know what's happening",
    desc: "Weekly status updates, a shared project dashboard, and a dedicated point of contact. No chasing for updates. No vague status reports. If something changes - scope, timeline, budget - you hear about it from us before it becomes a problem.",
  },
  {
    icon: Target,
    title: "We push back when we need to",
    desc: "Most agencies build whatever you ask for. We ask why. If a feature won't serve your users, adds unnecessary complexity, or delays launch without meaningful benefit - we'll say so. Our job is to help you build the right product, not the longest feature list.",
  },
  {
    icon: Layers,
    title: "Technical decisions you can understand",
    desc: "We explain our technology choices in business terms. You'll understand why we chose a particular stack, what the trade-offs are, and what it means for your costs, timeline, and future flexibility. No black boxes.",
  },
  {
    icon: TrendingUp,
    title: "Built to grow with your business",
    desc: "We think about scale from the start - not as an afterthought. The software we build today is designed to handle 10x your current volume without a complete rebuild. That means fewer costly surprises as your business grows.",
  },
  {
    icon: LifeBuoy,
    title: "We stay after launch",
    desc: "Shipping software is the beginning, not the end. We include post-launch support in all engagements, monitor performance proactively, and most of our clients continue working with us for ongoing improvements after the initial project is complete.",
  },
  {
    icon: Unlock,
    title: "You own everything, completely",
    desc: "All code, documentation, and infrastructure belong to you from day one. No proprietary frameworks that lock you in. No licensing fees down the road. If you ever move on, you take everything with you - and our documentation makes it straightforward to hand off to another team.",
  },
]

export const industries = [
  {
    icon: "🏥",
    name: "Healthcare & MedTech",
    challenge: "Complex compliance requirements (HIPAA, HL7, FHIR), patient data sensitivity, and integrations with clinical systems like EHRs.",
    outcome: "Patient portals, telemedicine platforms, and clinical workflow tools that meet regulatory standards without sacrificing usability.",
  },
  {
    icon: "💰",
    name: "Fintech & Financial Services",
    challenge: "High security requirements, real-time transaction processing, regulatory compliance (PCI-DSS, SOC 2), and the need for extreme reliability.",
    outcome: "Payment platforms, lending software, and financial dashboards built to handle sensitive data and audit requirements.",
  },
  {
    icon: "🛒",
    name: "E-Commerce & Retail",
    challenge: "Seasonal traffic spikes, complex inventory management, multi-channel selling, and the constant pressure to improve conversion rates.",
    outcome: "Scalable commerce platforms, custom order management systems, and integrations that connect your online and offline operations.",
  },
  {
    icon: "🏭",
    name: "Manufacturing & Logistics",
    challenge: "Legacy ERP systems, supply chain visibility gaps, and manual processes that create bottlenecks across production and distribution.",
    outcome: "Warehouse management systems, production tracking dashboards, and supply chain software that gives operations teams real-time visibility.",
  },
  {
    icon: "🎓",
    name: "EdTech & Learning Platforms",
    challenge: "Engagement retention, content delivery at scale, learner progress tracking, and building for diverse device types and connectivity.",
    outcome: "LMS platforms, learner analytics dashboards, and adaptive learning systems that keep users engaged and administrators informed.",
  },
  {
    icon: "🏗️",
    name: "Real Estate & PropTech",
    challenge: "Complex property data, multi-stakeholder workflows, and the need to connect buyers, sellers, agents, and property managers in one system.",
    outcome: "Property management platforms, listing portals, and transaction management tools that reduce administrative overhead and improve client experience.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Problem Mapping",
    desc: "Before we think about technology, we think about your business. We map your processes, identify the root problems, understand your users, and define what success actually looks like. This phase prevents the most common and costly mistakes.",
    deliverables: ["Problem statement", "User research findings", "Success metrics"],
  },
  {
    num: "02",
    title: "Solution Architecture & Planning",
    desc: "We design the technical architecture, select the right technology stack, define integrations, and create a realistic project plan. You'll see a clear breakdown of what gets built, in what order, and why.",
    deliverables: ["Technical specification", "Architecture diagram", "Project roadmap"],
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "We design interfaces that users actually understand and enjoy using. Wireframes and prototypes come first so you can see the product before a single line of code is written - and change things without the cost of changing code.",
    deliverables: ["Wireframes", "Interactive prototype", "Design system"],
  },
  {
    num: "04",
    title: "Agile Development",
    desc: "Development happens in two-week sprints. At the end of each sprint you see working software - not just progress reports. You can give feedback, reprioritize, and stay fully in control of where the product is headed.",
    deliverables: ["Sprint demos", "Working builds", "Progress dashboard"],
  },
  {
    num: "05",
    title: "Testing & Quality Assurance",
    desc: "Testing happens alongside development, not just at the end. Automated tests, manual QA, performance testing, and security checks are built into the process - not bolted on.",
    deliverables: ["Test reports", "Performance benchmarks", "Security audit"],
  },
  {
    num: "06",
    title: "Launch & Deployment",
    desc: "We manage deployment to production, configure monitoring and alerts, and stay available through the launch period. No hand-off and disappear - we're with you through go-live.",
    deliverables: ["Deployment runbook", "Monitoring setup", "Launch support"],
  },
  {
    num: "07",
    title: "Growth & Continuous Improvement",
    desc: "After launch, we analyze user behavior, gather feedback, and iterate. Most lasting software products improve continuously based on real usage data - we help you build that habit from the start.",
    deliverables: ["Usage analytics", "Improvement backlog", "Ongoing roadmap"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    why: "Fast, accessible user interfaces that work across browsers and devices. We choose between React, Next.js, and Vue depending on project complexity and rendering requirements.",
    pills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    why: "Reliable, scalable server-side systems. Python works well for data-heavy applications; Node.js for real-time systems; Go for high-performance services.",
    pills: ["Node.js", "Python", "Go", "Django", "FastAPI", "Express"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    why: "For most business apps, cross-platform development with React Native delivers native-quality performance at a lower cost. Native Swift or Kotlin when performance demands it.",
    pills: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    why: "Cloud infrastructure built for reliability and cost efficiency. Docker and Kubernetes for consistency across environments; Terraform for reproducible infrastructure.",
    pills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: Database,
    title: "Databases",
    why: "Relational databases for structured business data; NoSQL for flexible, high-volume data. Redis for caching and session management. The choice depends on your access patterns.",
    pills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Tooling",
    why: "Automated pipelines reduce human error and speed up delivery. Monitoring and alerting mean we know about issues before your users do.",
    pills: ["GitHub Actions", "GitLab CI", "Datadog", "Prometheus", "Grafana"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: Brain,
    title: "AI & Machine Learning Engineers",
    desc: "From fine-tuning LLMs and building RAG pipelines to deploying models in production - engineers who understand the full ML lifecycle.",
    tags: ["LangChain", "PyTorch", "Hugging Face"],
  },
  {
    icon: Bot,
    title: "Agentic AI Developers",
    desc: "Specialists in building AI agents that take actions, execute code, and manage multi-step workflows without constant human input.",
    tags: ["CrewAI", "AutoGen", "LangChain"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Developers",
    desc: "Native iOS and Android developers plus React Native and Flutter engineers who build polished customer-facing apps.",
    tags: ["Swift", "Kotlin", "React Native"],
  },
  {
    icon: Code2,
    title: "Full-Stack Engineers",
    desc: "Developers who own both sides of the stack - building APIs, managing databases, and delivering polished frontends.",
    tags: ["Node.js", "React", "PostgreSQL"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Engineers",
    desc: "Infrastructure engineers who build CI/CD pipelines, manage Kubernetes, and keep your cloud environments reliable.",
    tags: ["Terraform", "Docker", "Kubernetes"],
  },
  {
    icon: Database,
    title: "Data Engineers & Architects",
    desc: "People who build the pipelines, warehouses, and dashboards your business decisions run on.",
    tags: ["Snowflake", "dbt", "Airflow"],
  },
  {
    icon: Palette,
    title: "UI/UX Designers",
    desc: "Designers who think in systems - wireframes, prototypes, and design systems that make complex software feel obvious.",
    tags: ["Figma", "Framer", "Design Systems"],
  },
  {
    icon: ShieldCheck,
    title: "QA & Security Engineers",
    desc: "Test engineers and security specialists who find issues before users do - from automation to compliance testing.",
    tags: ["Selenium", "Cypress", "OWASP"],
  },
  {
    icon: ClipboardList,
    title: "Product Managers & BAs",
    desc: "Experienced PMs and analysts who translate messy requirements into clear sprint-ready work.",
    tags: ["Agile", "BPMN", "Jira"],
  },
]

export const caseStudies = [
  {
    industry: "Healthcare Technology",
    title: "Clinic operations platform for a regional healthcare network",
    challenge:
      "A healthcare network with 12 clinics was managing appointments, patient records, and billing across four separate systems. Staff were manually copying data between platforms, leading to errors and consuming 3+ hours per day per location.",
    approach:
      "We built a unified clinic management platform with HIPAA-compliant data architecture, EHR integration, and automated billing workflows. The design was validated with clinical staff before development began.",
    results: [
      { num: "73%", label: "Reduction in admin time per clinic" },
      { num: "4 mo", label: "From kick-off to full deployment" },
      { num: "99.8%", label: "System uptime since launch" },
      { num: "3 apps", label: "Replaced with one platform" },
    ],
  },
  {
    industry: "B2B SaaS / Logistics",
    title: "Route optimization SaaS for a last-mile delivery startup",
    challenge:
      "A logistics startup had a validated product concept but lacked the technical team to build it. Their MVP needed to handle real-time route optimization, driver mobile apps, and a customer tracking portal - within a 5-month fundraising deadline.",
    approach:
      "We acted as the founding engineering team. Built an MVP using a microservices architecture with a React Native driver app, a React customer portal, and a Python optimization engine on AWS.",
    results: [
      { num: "22%", label: "Delivery cost reduction for pilot clients" },
      { num: "18 wks", label: "From first meeting to MVP launch" },
      { num: "Series A", label: "Raised within 3 months of MVP" },
      { num: "4.7★", label: "Driver app rating on launch" },
    ],
  },
  {
    industry: "Manufacturing",
    title: "Production floor management system for a mid-size manufacturer",
    challenge:
      "A manufacturer with 400 employees was tracking production output on paper-based shift reports. Management had no real-time visibility into floor performance, machine utilization, or quality metrics - decisions were being made on data that was days old.",
    approach:
      "We built a real-time production monitoring system with tablet interfaces on the factory floor, automated OEE reporting, and a management dashboard integrated with their existing ERP system.",
    results: [
      { num: "31%", label: "Improvement in OEE within 6 months" },
      { num: "Real-time", label: "Data latency vs. previous 48-hr lag" },
      { num: "14%", label: "Reduction in production waste" },
      { num: "6 wks", label: "Staff training and adoption time" },
    ],
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Workflow,
    title: "Operational efficiency",
    desc: "When software handles the repetitive parts of your operations - data entry, reporting, approvals - your team spends less time on administration and more time on work that matters.",
  },
  {
    icon: BarChart3,
    title: "Better business decisions",
    desc: "Custom software gives you accurate, real-time data about your business. When dashboards and reports reflect what's actually happening, decisions improve - and so do the outcomes.",
  },
  {
    icon: Lock,
    title: "Reduced security and compliance risk",
    desc: "Custom software built to your compliance requirements - with proper access controls, audit logging, and encryption - reduces the risk of breaches and regulatory issues that generic tools create.",
  },
  {
    icon: TrendingDown,
    title: "Lower long-term costs",
    desc: "Stacking SaaS subscriptions gets expensive. Custom software eliminates per-seat fees, removes unnecessary third-party dependencies, and reduces the cost of maintenance as your team scales.",
  },
  {
    icon: Users,
    title: "Better customer experience",
    desc: "Customer-facing software built specifically for your users converts better, retains longer, and generates fewer support tickets than off-the-shelf platforms stretched beyond their design intent.",
  },
  {
    icon: Trophy,
    title: "Competitive differentiation",
    desc: "Your competitors are using the same tools you can buy on the market. Custom software built around your processes and customers is something they can't replicate - it becomes a durable advantage.",
  },
]

export const engagementModels = [
  {
    featured: true,
    title: "Dedicated Product Team",
    who: "Best for: scaling startups and product companies",
    desc: "A dedicated team of developers, a designer, and a product lead who work exclusively on your product. You get the output of a full-time engineering team without the cost and complexity of hiring one.",
    benefits: [
      "Full ownership of your product roadmap",
      "Team scales up or down with your needs",
      "Integrated into your planning and sprint cycles",
      "Consistent team - not rotated freelancers",
      "Monthly retainer with no long-term lock-in",
    ],
  },
  {
    featured: false,
    title: "Team Augmentation",
    who: "Best for: companies with existing engineering teams",
    desc: "Add experienced specialists to your existing team when you need extra capacity or specific expertise. Our engineers work directly in your workflow, your tools, and your processes.",
    benefits: [
      "Bring in exactly the skills you're missing",
      "No onboarding overhead - we adapt to your stack",
      "Easy to scale down once the need passes",
      "Daily standups with your existing team",
      "Minimum 3-month commitment",
    ],
  },
  {
    featured: false,
    title: "Fixed-Scope Project",
    who: "Best for: defined projects with clear requirements",
    desc: "For well-scoped projects - a specific feature, a new product module, or a system integration - we define exactly what gets built, in what time, and at what cost. No ambiguity.",
    benefits: [
      "Fixed budget and delivery date",
      "Detailed specification before work begins",
      "Clear milestone-based payment schedule",
      "60-day post-launch support included",
      "Full documentation and code handover",
    ],
  },
  {
    featured: false,
    title: "Managed Software Services",
    who: "Best for: businesses that need ongoing technical support",
    desc: "We take responsibility for keeping your software running, secure, and up to date. Proactive monitoring, regular updates, and a reliable point of contact when something needs attention.",
    benefits: [
      "Proactive monitoring and alerting",
      "Security patches and dependency updates",
      "Defined SLA response times",
      "Monthly health reports",
      "Capacity for small improvements each month",
    ],
  },
]

export const faqs = [
  {
    question: "How long does a custom software project typically take?",
    answer:
      "It depends on the scope. A focused MVP or a specific internal tool can take 8-16 weeks. A more complex product with multiple integrations and user roles typically runs 4-8 months. In our first conversation, we'll give you a realistic timeline based on your requirements - not an optimistic estimate that shifts later.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "Pricing varies significantly by scope, team size, and complexity. Smaller fixed-scope projects often start around $25,000-$60,000. Larger product builds or dedicated team engagements are typically on a monthly retainer. We provide detailed estimates after a discovery session - we don't publish fixed rates because no two projects are the same.",
  },
  {
    question: "What if I don't have a technical specification?",
    answer:
      "Most of our clients don't. That's what our discovery phase is for. We help you translate business requirements into a clear technical specification. You don't need to know what technology to use or how to architect it - that's our job.",
  },
  {
    question: "Do you work with startups that don't have development experience?",
    answer:
      "Yes, and it's one of our most common engagements. We've worked with many first-time founders and non-technical CEOs who needed a technical partner, not just a vendor. We explain decisions in business terms and involve you in the right level of detail for your background.",
  },
  {
    question: "Can you take over a project that another team started?",
    answer:
      "Yes. We do technical rescue projects regularly. We start with a code audit to understand the current state, identify issues, and recommend a path forward. Sometimes that's a targeted refactor; sometimes it's a rebuild. We'll tell you honestly which approach makes sense before any work begins.",
  },
  {
    question: "Who owns the code and intellectual property?",
    answer:
      "You do. All code, documentation, database schemas, and infrastructure configuration belong entirely to your business from day one. We don't use proprietary frameworks or maintain licensing control over anything we build for you.",
  },
  {
    question: "What happens after the software launches?",
    answer:
      "All our projects include a post-launch support period. We monitor performance, resolve any issues that emerge from real-world use, and remain available for urgent fixes. Many clients continue with us on a managed services or retainer basis after the initial launch.",
  },
  {
    question: "What's your approach to project communication?",
    answer:
      "You'll have a dedicated project manager, access to our project management dashboard, and weekly progress updates. We run bi-weekly sprint reviews where you see working software, not slide decks. If something changes - scope, timeline, a technical blocker - you hear about it immediately.",
  },
  {
    question: "Can you work with our existing internal IT or development team?",
    answer:
      "Absolutely. Our team augmentation model is designed for exactly this situation. We embed our engineers into your workflow, use your tools and processes, and work alongside your team without creating silos or communication gaps.",
  },
  {
    question: "How do you handle changes to requirements during the project?",
    answer:
      "Requirements change - that's a reality of software development. We use agile development with clearly defined sprint scopes. For changes that affect the overall project scope or timeline, we go through a straightforward change order process so there are no surprise costs. Small adjustments within a sprint are handled without additional process.",
  },
  {
    question: "Do you sign NDAs before discussing project details?",
    answer:
      "Yes, without exception. We're happy to sign a mutual NDA before the first discovery conversation if your project involves sensitive information. Just ask.",
  },
  {
    question: "What makes custom software better than buying an off-the-shelf solution?",
    answer:
      "Off-the-shelf software is built for the average use case. Custom software is built for your specific business, your specific workflows, and your specific users. It doesn't have features you'll never use, it integrates with your systems, and it grows with your business without per-seat pricing that compounds at scale. That said, custom software isn't always the right answer - if an existing product solves your problem well, we'll tell you that too.",
  },
  {
    question: "Which industries do you have experience in?",
    answer:
      "We've built software across healthcare, fintech, logistics, e-commerce, manufacturing, edtech, and real estate. Domain experience matters because compliance requirements, user expectations, and integration landscapes are different in each industry. We bring relevant context to every project.",
  },
  {
    question: "How do you ensure software security?",
    answer:
      "Security is built into the development process, not added at the end. That includes threat modeling, input validation, proper authentication and authorization architecture, encrypted data storage and transmission, dependency vulnerability scanning, and for regulated industries, compliance-specific controls like audit logging and access reviews.",
  },
  {
    question: "What's your policy on software documentation?",
    answer:
      "We document as we build - not as an afterthought before handover. You'll receive code documentation, API documentation, architecture diagrams, deployment guides, and user documentation as standard deliverables. This ensures you're not dependent on us for institutional knowledge about your own system.",
  },
  {
    question: "Can you help if we need to scale our existing software?",
    answer:
      "Yes. Scaling problems are a common reason businesses come to us. We conduct a performance and architecture audit to identify where the bottlenecks are, then recommend targeted changes - which might include database optimization, caching strategy, refactoring specific services, or cloud infrastructure changes. We prioritize improvements that give you the most headroom for the least disruption.",
  },
]

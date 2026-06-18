import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Brain,
  ClipboardList,
  Cloud,
  Code2,
  Container,
  Layers,
  Link2,
  Lock,
  MessageSquare,
  Monitor,
  Palette,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react"

export const heroTrustItems = [
  "End-to-end from MVP to scale",
  "Multi-tenant architecture expertise",
  "Full code ownership at handover",
  "IST, GST, and EST timezone availability",
]

export const trustStats = [
  { number: "150+", label: "SaaS products built" },
  { number: "40+", label: "Engineers on-demand" },
  { number: "92%", label: "Client retention rate" },
]

export const teamStats = [
  { number: "48h", label: "Average team assembly time" },
  { number: "40+", label: "Active SaaS developers on roster" },
  { number: "4.8★", label: "Clutch rating (verified reviews)" },
]

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: Rocket,
    title: "MVP & Product Development",
    desc: "Go from idea to a working, investable product. We help founders and product teams scope, design, and build MVPs that validate assumptions quickly without overbuilding. Ideal for startups raising their first round or testing a new vertical.",
    value: "Validate your idea with real software, not slide decks",
    tags: ["Founder MVPs", "Investor-ready demos", "Rapid validation", "Lean scope"],
  },
  {
    icon: Layers,
    title: "Multi-Tenant SaaS Architecture",
    desc: "Build SaaS platforms that can serve thousands of customers on a single codebase. We design scalable multi-tenancy models - isolated, pooled, or hybrid - depending on your security requirements and growth targets.",
    value: "Scale customers without scaling engineering chaos",
    tags: ["Isolated tenancy", "Pooled tenancy", "Hybrid models", "Tenant isolation"],
  },
  {
    icon: Code2,
    title: "SaaS Product Engineering",
    desc: "Full-cycle product engineering from backend APIs to frontend experiences. We build the features your customers actually use: authentication, billing, dashboards, notifications, integrations, and user management.",
    value: "Ship the features users pay for, not just the roadmap",
    tags: ["Auth & billing", "Dashboards", "Notifications", "User management"],
  },
  {
    icon: Link2,
    title: "API Development & Platform Integrations",
    desc: "SaaS products live or die by their integrations. We build clean RESTful and GraphQL APIs and connect your platform to payment gateways, CRMs, ERPs, marketing tools, and third-party data sources.",
    value: "Connect your product to the tools your customers already use",
    tags: ["REST & GraphQL", "Payment gateways", "CRM & ERP", "Marketing tools"],
  },
  {
    icon: Monitor,
    title: "Visual / Frontend Development",
    desc: "Clean, responsive, accessible interfaces that make complex workflows feel simple. We use React, Next.js, and Vue to build SaaS frontends that users enjoy opening every day.",
    value: "Interfaces that reduce friction and increase retention",
    tags: ["React", "Next.js", "Vue.js", "Accessible UI"],
  },
  {
    icon: RefreshCw,
    title: "SaaS Modernization & Re-platform",
    desc: "Outgrown your current stack? We help legacy SaaS products migrate to modern architectures - microservices, cloud-native infrastructure, updated databases - without disrupting live customers.",
    value: "Modernize without breaking production for existing users",
    tags: ["Legacy migration", "Microservices", "Database migration", "Zero-downtime cutover"],
  },
  {
    icon: Container,
    title: "DevOps & Continuous Delivery",
    desc: "Reliable releases, zero-downtime deployments, and infrastructure that scales with your user base. We set up CI/CD pipelines, containerized environments, and monitoring from day one.",
    value: "Release confidently as your user base grows",
    tags: ["CI/CD", "Kubernetes", "Zero-downtime deploys", "Monitoring"],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    desc: "Automated testing, performance benchmarking, and security audits built into every sprint. We catch problems before your customers do.",
    value: "Ship stable releases without slowing down delivery",
    tags: ["Automated testing", "Load testing", "Security audits", "UAT"],
  },
  {
    icon: Sparkles,
    title: "AI-Powered Software Features",
    desc: "Embed AI directly into your SaaS product - intelligent search, predictive recommendations, workflow automation, and generative features that increase product stickiness and user value.",
    value: "Add intelligence that increases stickiness and ARR",
    tags: ["Intelligent search", "Recommendations", "Workflow automation", "Generative features"],
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    title: "We think in products, not just features",
    desc: "Most development shops build what you ask for. We push back when something doesn't serve your users or your business model. Every decision we make is filtered through one question: does this make the product better?",
  },
  {
    icon: Users,
    title: "Shared risk from the start",
    desc: "We don't just show up for the build. We help you prioritize the right features, validate assumptions early, and avoid the architecture decisions that become expensive later. Your success determines ours.",
  },
  {
    icon: ShieldCheck,
    title: "EEAT-grade engineering standards",
    desc: "Our engineers hold themselves to standards that hold up under scrutiny - documentation, code reviews, test coverage, and architectural transparency. You'll never be locked out of your own product.",
  },
  {
    icon: MessageSquare,
    title: "IST, GST, and EST timezone availability",
    desc: "Distributed teams across India and availability for US/EU time zones. Standups happen at your convenience. Slack channels stay active. Communication doesn't slow down your project.",
  },
  {
    icon: Rocket,
    title: "Working software over project theater",
    desc: "We ship. Not slide decks, not status updates, not Figma frames that never get built. Real, tested, deployed software on a cadence you can rely on.",
  },
  {
    icon: Lock,
    title: "No outsourcing surprises",
    desc: "The team you meet is the team that builds your product. No handoffs to junior developers or offshore contractors you didn't agree to. Senior ownership from sprint one to launch.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Problem Mapping",
    desc: "We meet your stakeholders, map your workflows, and define the problem precisely before writing a line of code. This phase prevents the most expensive mistakes.",
    deliverables: ["Problem statement", "Workflow mapping", "Success criteria"],
  },
  {
    num: "02",
    title: "Solution Architecture & Planning",
    desc: "We design the system that fits your scale - database models, API contracts, infrastructure choices, and a phased delivery roadmap.",
    deliverables: ["Architecture diagrams", "API contracts", "Phased roadmap"],
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Wireframes, high-fidelity mockups, and a working prototype. Users test it before we build it.",
    deliverables: ["Wireframes", "High-fidelity mockups", "Interactive prototype"],
  },
  {
    num: "04",
    title: "Agile Development",
    desc: "Two-week sprints. Working software reviewed at the end of every sprint. You stay informed without needing to micromanage.",
    deliverables: ["Sprint demos", "Working increments", "Shared backlog"],
  },
  {
    num: "05",
    title: "Testing & Quality Assurance",
    desc: "Automated regression testing, load testing, security scanning, and UAT before any release reaches production.",
    deliverables: ["Test suites", "Performance benchmarks", "Security scan results"],
  },
  {
    num: "06",
    title: "Launch & Hypercare",
    desc: "Monitored deployment, real-time error tracking, and a dedicated support window so your launch goes smoothly.",
    deliverables: ["Production deployment", "Error monitoring", "Hypercare support"],
  },
  {
    num: "07",
    title: "Scale & Iterate",
    desc: "After launch, we help you analyze usage data, prioritize the next release, and scale infrastructure as your user base grows.",
    deliverables: ["Usage analytics", "Roadmap prioritisation", "Infrastructure scaling"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: Monitor,
    title: "Frontend",
    why: "Modern, responsive SaaS interfaces built with proven frameworks your team can maintain long-term.",
    pills: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    icon: Code2,
    title: "Backend",
    why: "Scalable server-side architectures chosen for your workload, team skills, and long-term maintenance reality.",
    pills: ["Node.js", "Python", "Django", "FastAPI", "Ruby on Rails", "Go"],
  },
  {
    icon: Layers,
    title: "Databases",
    why: "Data stores selected for your access patterns, consistency requirements, and growth trajectory.",
    pills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    why: "Cloud-native infrastructure with automated delivery pipelines and observability from day one.",
    pills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    icon: Link2,
    title: "SaaS Infrastructure",
    why: "The billing, auth, and communication services every SaaS product depends on - integrated cleanly.",
    pills: ["Stripe", "Paddle", "Auth0", "Clerk", "Twilio", "SendGrid", "Segment"],
  },
  {
    icon: Brain,
    title: "AI / ML Integration",
    why: "Intelligent features embedded directly into your product using production-ready AI tooling.",
    pills: ["OpenAI API", "LangChain", "Pinecone", "HuggingFace", "Custom ML pipelines"],
  },
  {
    icon: BarChart3,
    title: "Monitoring & Observability",
    why: "Know what's happening in production before your customers tell you something is wrong.",
    pills: ["Datadog", "Sentry", "Grafana", "LogRocket", "New Relic"],
  },
  {
    icon: ShieldCheck,
    title: "Collaboration & QA",
    why: "Tools and practices that keep delivery transparent and quality consistent across every sprint.",
    pills: ["GitHub", "Linear", "Notion", "Playwright", "Jest", "Cypress"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: Layers,
    title: "SaaS Product Architects",
    desc: "Design the system end-to-end. They decide how it scales, where the data lives, and how components talk to each other.",
    tags: ["System design", "Multi-tenancy", "Scalability", "Architecture reviews"],
  },
  {
    icon: Code2,
    title: "Full-Stack Engineers",
    desc: "Experienced in building complete SaaS products from scratch. React/Next.js on the front, Node.js or Python on the back.",
    tags: ["React/Next.js", "Node.js", "Python", "Full product builds"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Developers",
    desc: "iOS and Android engineering if your SaaS needs a companion mobile app or you're building mobile-first.",
    tags: ["iOS", "Android", "React Native", "Companion apps"],
  },
  {
    icon: Link2,
    title: "Backend & API Engineers",
    desc: "Microservices, REST, GraphQL, message queues, and real-time data pipelines built to handle production load.",
    tags: ["REST", "GraphQL", "Microservices", "Message queues"],
  },
  {
    icon: Container,
    title: "DevOps & Cloud Engineers",
    desc: "Container orchestration, IaC, CI/CD pipelines, and 99.9% uptime SLAs for infrastructure that never sleeps.",
    tags: ["CI/CD", "Kubernetes", "IaC", "Uptime SLAs"],
  },
  {
    icon: Cloud,
    title: "Cloud Architects",
    desc: "Multi-cloud strategy, cost optimization, and infrastructure that grows without surprising your finance team.",
    tags: ["AWS", "GCP", "Azure", "Cost optimisation"],
  },
  {
    icon: Palette,
    title: "UI/UX Designers",
    desc: "Product designers who understand SaaS UX patterns - onboarding flows, dashboards, empty states, and upgrade prompts.",
    tags: ["Onboarding flows", "Dashboards", "Empty states", "Upgrade UX"],
  },
  {
    icon: ShieldCheck,
    title: "QA & Test Engineers",
    desc: "Automated test suites, manual exploratory testing, and security audits before anything reaches production.",
    tags: ["Automated testing", "Exploratory QA", "Security audits", "UAT"],
  },
  {
    icon: ClipboardList,
    title: "Product Managers & BAs",
    desc: "Optional embedded PMs and business analysts who own backlog grooming, sprint planning, and stakeholder communication.",
    tags: ["Backlog grooming", "Sprint planning", "Stakeholder comms", "Fractional PM"],
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
    desc: "Manual workflows replaced by automated processes. Hours saved per week across your operations, customer success, and finance teams.",
  },
  {
    icon: TrendingUp,
    title: "Active recurring revenue",
    desc: "A subscription product that people pay for, keep paying for, and recommend. Built on pricing logic that your billing infrastructure can actually enforce.",
  },
  {
    icon: Rocket,
    title: "Reduced customer acquisition cost",
    desc: "A well-built SaaS product drives organic growth - trial signups, word-of-mouth, and product-led growth loops that lower your CAC over time.",
  },
  {
    icon: Layers,
    title: "Investor-ready scalability",
    desc: "Architecture reviewed for scale before you hit it. Handles 10x traffic growth without emergency re-engineering at Series A.",
  },
  {
    icon: Target,
    title: "Accelerated time-to-market",
    desc: "Faster go-to-market than building in-house. Our processes, tooling, and templates cut weeks off every standard sprint.",
  },
  {
    icon: BarChart3,
    title: "Measurable user engagement",
    desc: "Analytics baked in from day one. You'll know which features users love, where they drop off, and what to build next.",
  },
]

export const engagementModels = [
  {
    featured: true,
    badge: "Recommended",
    title: "Product / Team",
    who: "Best for: most SaaS builds",
    desc: "We act as your complete product team. Discovery, design, engineering, QA, and DevOps under one roof. Best for founders and companies without an existing dev team.",
    benefits: [
      "Dedicated product and engineering team",
      "Sprint-based delivery with weekly demos",
      "Full ownership transfer at end of engagement",
      "Post-launch hypercare and iteration support",
    ],
  },
  {
    featured: false,
    title: "Team Augmentation",
    who: "Best for: scaling your existing team",
    desc: "You have a team but need specific skills or more capacity. We embed our engineers directly into your workflow, tools, and standups.",
    benefits: [
      "Senior engineers placed within 48 hours",
      "Integrates with your existing tools (Jira, Linear, Slack)",
      "No management overhead on your side",
      "Flexible ramp-up and ramp-down",
    ],
  },
  {
    featured: false,
    title: "Fixed Scope Project",
    who: "Best for: well-defined deliverables",
    desc: "You know exactly what you need built. We scope it, price it, build it, and hand it over. Predictable cost and timeline.",
    benefits: [
      "Fixed price, fixed timeline",
      "Detailed scope document and milestones",
      "Regular progress updates",
      "Defined acceptance criteria",
    ],
  },
  {
    featured: false,
    title: "Managed Software Services",
    who: "Best for: ongoing product maintenance",
    desc: "Your SaaS is live. You need a reliable team to handle updates, bug fixes, performance monitoring, and incremental feature releases.",
    benefits: [
      "Monthly retainer model",
      "SLA-backed response times",
      "Proactive monitoring and maintenance",
      "Quarterly roadmap review",
    ],
  },
]

export const faqs = [
  {
    question: "How long does SaaS app development take?",
    answer:
      "A focused MVP takes 10-16 weeks. A full-featured enterprise SaaS product takes 4-9 months depending on complexity, integrations, and the number of user roles. We scope every project before committing to a timeline.",
  },
  {
    question: "How much does SaaS app development cost?",
    answer:
      "Most SaaS MVPs built at Toadster range from $30,000 to $100,000 USD. Full product builds run $100,000 to $300,000+. Cost depends on complexity, team size, and timeline. We provide a detailed estimate after the discovery call.",
  },
  {
    question: "Do you help with idea validation before building?",
    answer:
      "Yes. We run product discovery workshops to stress-test your idea, define your ICP, map user journeys, and agree on a minimal feature set that's worth building. This is often the most valuable service we offer.",
  },
  {
    question: "Who owns the code at the end?",
    answer:
      "You do. Completely. All source code, design assets, database schemas, infrastructure configuration, and documentation are transferred to you at the end of the engagement. No lock-in.",
  },
  {
    question: "Can you work with our existing development team?",
    answer:
      "Absolutely. Our team augmentation model is built for this. We embed into your team's workflow, tools, and culture without friction.",
  },
  {
    question: "What happens after the product launches?",
    answer:
      "We offer a hypercare period (2-4 weeks) after launch during which we monitor performance and fix anything that surfaces. After that, we offer managed services retainers or can help you build and transition to an in-house team.",
  },
  {
    question: "Do you build mobile apps alongside the SaaS platform?",
    answer:
      "Yes. Many SaaS products need a companion iOS or Android app. We handle this within the same engagement so design, APIs, and product logic stay consistent.",
  },
  {
    question: "Is SaaS development right for my business?",
    answer:
      "If you have a recurring workflow problem shared by many customers, SaaS is a strong model. If you're not sure, our discovery process will tell you whether building a SaaS product is the right move before you commit budget to it.",
  },
  {
    question: "What tech stack will you use for my project?",
    answer:
      "We recommend the stack after understanding your requirements. We won't force a technology because it's trendy. We pick what fits your scale, your team's long-term maintenance reality, and your timeline.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "Dedicated Slack channel, weekly sprint demos, bi-weekly stakeholder calls, and a shared project management board. You always know what's happening.",
  },
  {
    question: "Can you modernize our existing SaaS product?",
    answer:
      "Yes. We take on legacy SaaS modernization, re-platforming, database migrations, and feature overhauls. We start with a codebase audit to assess risk before proposing a migration plan.",
  },
  {
    question: "What industries do you build SaaS products for?",
    answer:
      "FinTech, HealthTech, EdTech, HR Tech, Logistics, PropTech, Legal, E-commerce, Productivity, and B2B vertical SaaS across dozens of categories.",
  },
]

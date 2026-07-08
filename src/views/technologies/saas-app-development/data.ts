import {
  Cloud,
  CreditCard,
  Layers,
  Lock,
  Rocket,
  Server,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react"

export const whatIsSaas = {
  directAnswer:
    "SaaS (Software-as-a-Service) app development is the process of building cloud-hosted, subscription-based software that customers access remotely rather than installing locally. Enterprise SaaS development differs from standard web app development in that it must support multi-tenancy, usage-based or subscription billing, role-based access across customer organizations, and infrastructure that scales horizontally as customer count grows.",
  enterpriseDiff:
    "SaaS applications are built on architecture decisions that compound as the product scales:",
  decisionChain: "Architecture Decisions → Scalable Product → Customer Retention → Recurring Revenue",
  decisionChainDesc:
    "Each stage compounds. Sound architecture decisions made early avoid expensive re-platforming later; a scalable product supports growth without performance degradation; reliable performance and fast onboarding drive retention; retention compounds into predictable recurring revenue. Toadster builds the entire chain, not just the initial MVP.",
}

export const saasArchitecturePillars = [
  {
    icon: Layers,
    title: "Tenancy Model",
    desc: "How customer data and resources are isolated (single-tenant, multi-tenant, or hybrid).",
  },
  {
    icon: CreditCard,
    title: "Billing Model",
    desc: "How revenue is captured (flat subscription, usage-based, seat-based, or hybrid).",
  },
  {
    icon: Server,
    title: "Infrastructure Model",
    desc: "How the application scales (monolith, microservices, or modular monolith).",
  },
  {
    icon: Rocket,
    title: "Onboarding & Activation",
    desc: "How new customers get from signup to value with minimal friction.",
  },
]

export const servicesIntro =
  "Toadster's SaaS development services span the full product lifecycle - architecture strategy, multi-tenant application development, billing integration, and scaling infrastructure - delivered as a full build, an MVP-to-production engagement, or a re-architecture of an existing SaaS product hitting scaling limits."

export const coreCapabilitiesBento = [
  {
    variant: "dark" as const,
    badge: "FLAGSHIP SERVICE",
    title: "SaaS Architecture & Tenancy Strategy",
    desc: "Multi-tenant data and infrastructure models matched to security, compliance, and cost at projected scale.",
    href: "/contact",
  },
  {
    variant: "green" as const,
    title: "MVP & Core Product Development",
    desc: "Production-grade MVPs in React, Next.js, and Node.js that prove product-market fit without scaling debt.",
    icon: Rocket,
  },
  {
    variant: "white" as const,
    title: "Subscription Billing & Payments Integration",
    desc: "Stripe, Chargebee, and Paddle with usage-based, seat-based, and hybrid pricing plus dunning and proration.",
    icon: CreditCard,
  },
  {
    variant: "outline" as const,
    title: "Authentication, Authorization & Security",
    desc: "Auth0, Okta, SSO, RBAC, and SCIM provisioning built for enterprise customer requirements.",
    icon: Lock,
  },
]

export const capabilities: { icon: LucideIcon; title: string; desc: string; ctaAnchor: string }[] = [
  {
    icon: Layers,
    title: "SaaS Architecture & Tenancy Strategy",
    desc: "We design the multi-tenant data and infrastructure model - shared database with tenant isolation, database-per-tenant, or hybrid - based on your security, compliance, and cost requirements at projected scale.",
    ctaAnchor: "Explore Architecture",
  },
  {
    icon: Rocket,
    title: "MVP & Core Product Development",
    desc: "We build production-grade MVPs using modern frameworks such as React, Next.js, Node.js, and Ruby on Rails, prioritizing the minimum feature set that proves product-market fit without accumulating technical debt that blocks later scaling.",
    ctaAnchor: "Explore MVP Development",
  },
  {
    icon: Server,
    title: "Multi-Tenant Backend & API Development",
    desc: "We build backend services and APIs using Node.js, Python (Django/FastAPI), and Go, with tenant-aware data access patterns, rate limiting, and API versioning designed in from the start.",
    ctaAnchor: "Explore Backend",
  },
  {
    icon: CreditCard,
    title: "Subscription Billing & Payments Integration",
    desc: "We integrate billing and payments using Stripe, Chargebee, and Paddle, supporting flat-rate, usage-based, seat-based, and hybrid pricing models, including dunning, proration, and plan-upgrade logic.",
    ctaAnchor: "Explore Billing",
  },
  {
    icon: Lock,
    title: "Authentication, Authorization & Security",
    desc: "We implement enterprise-grade authentication and access control using Auth0, Okta, and OAuth 2.0/OIDC standards, including single sign-on (SSO), role-based access control (RBAC), and SCIM provisioning for enterprise customers.",
    ctaAnchor: "Explore Security",
  },
  {
    icon: Cloud,
    title: "Scaling, Infrastructure & DevOps Integration",
    desc: "We architect cloud infrastructure on AWS, Azure, and Google Cloud, with containerization (Kubernetes, Docker) and CI/CD pipelines - built in coordination with the same DevOps practices used across Toadster's broader engineering work - so the product scales without manual infrastructure firefighting.",
    ctaAnchor: "Explore Infrastructure",
  },
]

export const architectureIntro =
  "A modern enterprise SaaS architecture has five layers: (1) frontend application, (2) API/backend services layer, (3) multi-tenant data layer, (4) infrastructure layer (compute, scaling, networking), and (5) cross-cutting services (auth, billing, observability). Toadster designs each layer for your tenancy model, compliance requirements, and growth trajectory rather than defaulting to a single framework or hosting pattern."

export const architectureSteps = [
  {
    step: "01",
    title: "Frontend Application",
    desc: "React or Next.js client delivering the customer-facing product experience",
  },
  {
    step: "02",
    title: "API/Backend Layer",
    desc: "Node.js, Python, or Go services exposing tenant-aware, versioned APIs",
  },
  {
    step: "03",
    title: "Multi-Tenant Data Layer",
    desc: "PostgreSQL or similar, with tenant isolation enforced at the schema or row level",
  },
  {
    step: "04",
    title: "Infrastructure Layer",
    desc: "Kubernetes-orchestrated containers on AWS, Azure, or GCP with autoscaling",
  },
  {
    step: "05",
    title: "Cross-Cutting Services",
    desc: "Auth0/Okta for identity, Stripe/Chargebee for billing, Datadog/Prometheus for observability",
  },
]

export const singleVsMultiTenantComparison = {
  headers: ["Dimension", "Single-Tenant", "Multi-Tenant"],
  rows: [
    ["Data Isolation", "Complete - separate database per customer", "Shared infrastructure with logical isolation"],
    ["Infrastructure Cost", "Higher - scales linearly with customer count", "Lower - shared resources amortize cost"],
    ["Customization", "Easier per-customer customization", "More constrained, standardized product"],
    ["Best For", "Enterprise customers with strict compliance needs", "Mid-market and high-volume customer bases"],
    ["Operational Complexity", "Higher - many environments to manage", "Lower - one environment, many tenants"],
  ],
}

export const monolithVsMicroservicesComparison = {
  headers: ["Dimension", "Monolith / Modular Monolith", "Microservices"],
  rows: [
    ["Development Speed (Early Stage)", "Faster - single codebase, simpler deployment", "Slower initially - more moving parts"],
    ["Scaling Granularity", "Scales as one unit", "Scales individual services independently"],
    ["Operational Overhead", "Lower", "Higher - requires service mesh, orchestration"],
    ["Best For", "Pre-product-market-fit, smaller engineering teams", "Mature products with distinct, independently-scaling domains"],
  ],
}

export const platformIntro =
  "There is no single \"best\" SaaS stack - the right choice depends on team size, expected scale, and time-to-market pressure. Next.js and Node.js favor fast-moving teams needing a unified JavaScript stack; Django/FastAPI favor teams prioritizing rapid backend development with strong typing and built-in admin tooling; Go favors performance-critical services at high scale."

export const platformQuote =
  "The SaaS products that struggle to scale almost never fail because of the framework choice - they fail because tenancy and billing were treated as afterthoughts bolted onto a single-customer architecture. We design the tenant model and the pricing model at the same time as the data model, because retrofitting either one after a few hundred customers is far more expensive than building it correctly the first time."

export const platformComparison = {
  headers: ["Category", "Common Tools", "Strongest For"],
  rows: [
    ["Frontend", "React, Next.js, Vue.js", "Fast iteration, server-side rendering, SEO-friendly marketing pages"],
    ["Backend", "Node.js, Python (Django/FastAPI), Go, Ruby on Rails", "API development, rapid MVP build, high-performance services"],
    ["Billing & Payments", "Stripe, Chargebee, Paddle", "Subscription billing, usage metering, global payments compliance"],
    ["Auth & Identity", "Auth0, Okta, OAuth 2.0/OIDC", "Enterprise SSO, RBAC, SCIM provisioning"],
    ["Infrastructure", "AWS, Azure, Google Cloud, Kubernetes", "Scalable hosting, containerized deployment"],
  ],
}

export const billingModelsIntro =
  "SaaS billing models fall into four common patterns: flat-rate subscription (fixed monthly/annual fee), seat-based (price scales with number of users), usage-based (price scales with consumption, e.g., API calls or data volume), and hybrid models combining a base fee with usage overages. The right model depends on how customer value correlates with usage and how predictable revenue needs to be."

export const billingModels = [
  {
    icon: CreditCard,
    title: "Flat-Rate Subscription",
    desc: "Fixed price regardless of usage; simplest to forecast, but doesn't capture expansion revenue from high-usage customers.",
  },
  {
    icon: Users,
    title: "Seat-Based Pricing",
    desc: "Price scales with number of users; aligns cost with team size, common in collaboration tools.",
  },
  {
    icon: TrendingUp,
    title: "Usage-Based Pricing",
    desc: "Price scales with consumption (API calls, data processed, transactions); aligns cost directly with value delivered.",
  },
  {
    icon: Layers,
    title: "Hybrid Pricing",
    desc: "Base subscription fee plus usage overages; balances revenue predictability with expansion potential.",
  },
]

export const securityIntro =
  "Enterprise SaaS buyers expect SOC 2 compliance, data encryption at rest and in transit, role-based access control, and audit logging as baseline requirements before procurement - not as a roadmap item. Toadster builds these controls into the architecture from the first release rather than retrofitting them when the first enterprise deal requires a security review."

export const securityComponents = [
  "Tenant Data Isolation - Enforced at the database or schema level to prevent cross-tenant data exposure",
  "Encryption - TLS in transit and AES-256 at rest for all customer data",
  "Role-Based Access Control (RBAC) - Granular permissions configurable per customer organization",
  "SSO & SCIM Provisioning - Enterprise identity integration for automated user provisioning/deprovisioning",
  "Audit Logging - Traceable records of data access and configuration changes for compliance review",
  "SOC 2 Readiness - Architecture and process documentation aligned to SOC 2 Type I/II audit requirements",
]

export const industryUseCasesIntro =
  "SaaS application development delivers measurable outcomes when tied to specific growth or retention metrics: faster onboarding, lower infrastructure cost per customer, or reduced churn from performance issues. Below are representative engagement patterns and the metrics they typically move."

export const industryUseCases = [
  {
    title: "B2B Software - Multi-Tenant Re-Architecture",
    desc: "Migrating a single-tenant SaaS product to a multi-tenant architecture reduced infrastructure cost per customer significantly while maintaining the data isolation guarantees enterprise customers required for renewal.",
  },
  {
    title: "Fintech - Usage-Based Billing Implementation",
    desc: "Replacing flat-rate pricing with usage-based billing tied to actual transaction volume increased expansion revenue from existing accounts without requiring new customer acquisition.",
  },
  {
    title: "Healthcare SaaS - Compliance-Driven Security Build",
    desc: "Building SOC 2-aligned access controls and audit logging into the core architecture shortened enterprise sales-cycle security review time, removing a recurring deal-blocking step.",
  },
  {
    title: "Across Engagements - Onboarding Time",
    desc: "SaaS products rebuilt with Toadster's onboarding-first architecture approach have reduced time-to-first-value for new customers, directly correlating with improved trial-to-paid conversion rates.",
  },
]

export const processIntro =
  "Toadster's process follows four phases: Strategy (defining tenancy, pricing, and core feature scope), Architecture (designing the data, billing, and infrastructure model), Development (building and testing the MVP or feature set), and Scaling (optimizing infrastructure and onboarding based on real customer usage data)."

export const processStepsLanding = [
  {
    num: 1,
    title: "Strategy",
    desc: "Define tenancy model, pricing strategy, and minimum feature scope required to validate product-market fit.",
  },
  {
    num: 2,
    title: "Architecture",
    desc: "Design multi-tenant data model, billing integration, and infrastructure scaling approach.",
  },
  {
    num: 3,
    title: "Development",
    desc: "Build and test the MVP or feature set, with CI/CD pipelines in place from the first release.",
  },
  {
    num: 4,
    title: "Scaling",
    desc: "Monitor onboarding conversion, infrastructure cost per customer, and performance; iterate based on real usage data.",
  },
]

export const whyToadster = [
  {
    icon: Layers,
    title: "Architecture-first approach",
    desc: "Tenancy, billing, and security models are designed together, not bolted on after initial launch.",
  },
  {
    icon: Server,
    title: "Stack-agnostic expertise",
    desc: "Across React, Next.js, Node.js, Python, and Go - we recommend based on team and scale requirements, not a fixed toolchain.",
  },
  {
    icon: Cloud,
    title: "Full-lifecycle capability",
    desc: "From MVP to enterprise-ready, compliance-aligned platform, under one engineering team.",
  },
  {
    icon: TrendingUp,
    title: "Proven scaling outcomes",
    desc: "Measurable reductions in infrastructure cost per customer and improvements in onboarding conversion.",
  },
]

export const faqs = [
  {
    question: "What is SaaS app development?",
    answer:
      "SaaS (Software-as-a-Service) app development is the process of building cloud-hosted software delivered to customers on a subscription basis, accessed through a browser or API rather than installed locally. It requires architecture for multi-tenancy, billing, and scalable infrastructure that standard web applications typically don't need.",
  },
  {
    question: "What is the difference between SaaS development and regular web app development?",
    answer:
      "Regular web app development typically serves a single organization or use case. SaaS development must additionally support multiple customer organizations (tenants) on shared infrastructure, subscription or usage-based billing, and role-based access control across customer accounts - all while scaling cost-efficiently as the customer base grows.",
  },
  {
    question: "How much does SaaS app development cost?",
    answer:
      "Costs vary by scope: a validated MVP can range from tens of thousands of dollars, while a full enterprise-ready platform with multi-tenancy, SSO, and SOC 2-aligned security typically ranges into the hundreds of thousands, depending on feature complexity and compliance requirements.",
  },
  {
    question: "How long does it take to build a SaaS MVP?",
    answer:
      "A focused SaaS MVP, covering core functionality and basic billing, typically takes 8-14 weeks. A full enterprise-ready platform, including multi-tenancy, SSO, advanced billing, and compliance controls, generally takes 5-9 months depending on feature scope.",
  },
  {
    question: "Should I build single-tenant or multi-tenant architecture?",
    answer:
      "Multi-tenant architecture is generally more cost-efficient and easier to scale for mid-market and high-volume customer bases. Single-tenant architecture is worth the additional infrastructure cost when customers - often large enterprise or regulated-industry buyers - require complete data isolation as a procurement requirement.",
  },
  {
    question: "What billing model should my SaaS product use?",
    answer:
      "The right billing model depends on how customer value correlates with usage. Flat-rate subscriptions work well when usage is predictable and similar across customers. Usage-based or hybrid pricing works better when value scales with consumption, such as API calls or data volume, and captures expansion revenue from growing accounts.",
  },
  {
    question: "Do I need SOC 2 compliance to sell to enterprise customers?",
    answer:
      "Most enterprise buyers will require SOC 2 Type I or II compliance, or at minimum a security questionnaire covering equivalent controls, before completing procurement. Building these controls into the architecture early avoids a costly, sales-blocking retrofit once the first enterprise deal reaches security review.",
  },
]

export const exploreServicesSection = {
  title: "Expert Solutions Tailored for Your Growth",
  subtitle:
    "From multi-tenant architecture to billing integration and scaling, explore our full suite of SaaS services designed to take your product from MVP to enterprise.",
  ctaLabel: "Explore All Services",
  ctaHref: "/services",
  serviceCardHref: "/services/saas-app-development",
}

export const exploreHireSection = {
  title: "Build Your Dream SaaS Team",
  subtitle:
    "Scale your product with top-tier full-stack developers, backend engineers, and DevOps specialists. Our resources integrate seamlessly into your workflow.",
  ctaLabel: "Hire Expert Resources",
  ctaHref: "/hire-resources",
}

export const exploreHireSlugs = [
  "full-stack-developers",
  "mern-developers",
  "nodejs-developers",
  "software-developers",
  "reactjs-developers",
  "devops-engineers",
] as const

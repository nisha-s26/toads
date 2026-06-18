import type { LucideIcon } from "lucide-react"
import {
  ClipboardList,
  Cloud,
  Code2,
  Container,
  Database,
  Globe,
  Layers,
  Link2,
  Lock,
  MessageSquare,
  Monitor,
  Palette,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react"

export const heroTrustItems = [
  "Business goals before code",
  "You own everything we build",
  "Honest timelines and estimates",
  "Security and scalability built in",
]

export const trustStats = [
  { number: "150+", label: "Web projects delivered" },
  { number: "40+", label: "Industries served" },
  { number: "94%", label: "Client retention rate" },
]

export const teamStats = [
  { number: "48h", label: "Average response time" },
  { number: "40+", label: "Web specialists" },
  { number: "3 Yrs+", label: "Average experience" },
]

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: Globe,
    title: "Custom Website Development",
    desc: "Professionally designed, conversion-focused websites built to your brand standards. From landing pages to multi-page corporate sites - we build for performance, not just aesthetics.",
    value: "Turn visitors into leads with a site built to convert",
    tags: ["Landing pages", "Corporate sites", "Brand standards", "Performance-first"],
  },
  {
    icon: Monitor,
    title: "Web Application Development",
    desc: "We design and develop web apps that handle real workflows - dashboards, portals, booking systems, SaaS tools. Built to be fast, secure, and maintainable as your team grows.",
    value: "Replace manual workflows with software your team relies on",
    tags: ["Dashboards", "Portals", "Booking systems", "Internal tools"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Custom online stores and marketplaces built on platforms that fit your business - Shopify, WooCommerce, or fully bespoke solutions. Optimized for conversions, not just transactions.",
    value: "Sell online with a store built for conversion and scale",
    tags: ["Shopify", "WooCommerce", "Custom checkout", "Marketplaces"],
  },
  {
    icon: Layers,
    title: "SaaS Product Development",
    desc: "If you're building a product to sell, we can take your idea from architecture to deployment. We help founders and product teams build SaaS products that are technically sound and ready to scale.",
    value: "Launch a subscription product built for recurring revenue",
    tags: ["Multi-tenant", "Billing", "Onboarding", "Product engineering"],
  },
  {
    icon: Link2,
    title: "API Development & Integrations",
    desc: "We connect your web platforms to the tools you already use - payment gateways, CRMs, ERPs, third-party APIs, and internal systems. Reliable, well-documented, and built to last.",
    value: "Eliminate data silos between your web platform and business tools",
    tags: ["REST APIs", "CRMs & ERPs", "Payment gateways", "Third-party APIs"],
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps (PWA)",
    desc: "Give your users an app-like experience without requiring them to download anything. PWAs are fast, offline-capable, and work across devices - ideal for customer-facing platforms.",
    value: "Deliver app-like experiences without app store friction",
    tags: ["Offline-capable", "Cross-device", "Fast load times", "Installable"],
  },
  {
    icon: Code2,
    title: "CMS Development & Integration",
    desc: "From headless CMS to WordPress, we build content management setups that your team can actually use - without needing a developer for every update.",
    value: "Let your team manage content without developer dependency",
    tags: ["WordPress", "Headless CMS", "Contentful", "Sanity"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign & Modernization",
    desc: "If your current website is outdated, slow, or underperforming, we help you rebuild it the right way - with better architecture, better UX, and better results.",
    value: "Fix underperforming sites without starting from zero blindly",
    tags: ["UX overhaul", "Performance rebuild", "Brand refresh", "Conversion uplift"],
  },
  {
    icon: Container,
    title: "Legacy Web Application Modernization",
    desc: "Old web applications built on outdated stacks create security risks, performance problems, and developer headaches. We help you migrate, rebuild, or re-platform without disrupting your operations.",
    value: "Modernize legacy apps without breaking live operations",
    tags: ["Re-platforming", "Stack migration", "Security uplift", "Minimal disruption"],
  },
  {
    icon: Zap,
    title: "Performance Optimization & Audits",
    desc: "We audit and optimize existing websites and web apps for speed, Core Web Vitals, SEO readiness, and user experience. Faster websites convert better - that's a business outcome, not a technical detail.",
    value: "Improve speed, SEO, and conversion with targeted fixes",
    tags: ["Core Web Vitals", "SEO readiness", "Speed audits", "UX improvements"],
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    title: "We start with your business goals",
    desc: "Before we touch a design tool or write a line of code, we spend time understanding what success looks like for you. Revenue, traffic, conversion, retention - we build toward outcomes, not deliverables.",
  },
  {
    icon: Users,
    title: "No handoff, no disappearing act",
    desc: "Once we build something, we stay involved. We offer ongoing support, performance reviews, and iteration cycles because real products evolve.",
  },
  {
    icon: MessageSquare,
    title: "Honest timelines, realistic estimates",
    desc: "We don't tell you what you want to hear. If a project will take 12 weeks, we'll say 12 weeks. If your budget isn't aligned with your scope, we'll have that conversation early.",
  },
  {
    icon: Lock,
    title: "You own everything",
    desc: "Every piece of code, design, and documentation we produce belongs to you. No lock-in, no proprietary platforms you can't exit.",
  },
  {
    icon: Code2,
    title: "Developers who communicate",
    desc: "You won't be chasing updates through a project manager chain. Our developers communicate directly, flag issues early, and document their work properly.",
  },
  {
    icon: ShieldCheck,
    title: "Security and scalability built in",
    desc: "We don't treat security as an afterthought. Authentication, data protection, and infrastructure planning are part of our standard development process - not add-ons.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Problem Mapping",
    desc: "We begin by understanding your business, your users, and the problem you're actually trying to solve - not just the features you want built. This shapes everything that follows.",
    deliverables: ["Problem statement", "User mapping", "Success criteria"],
  },
  {
    num: "02",
    title: "Solution Architecture & Planning",
    desc: "We define the technical approach - technology stack, system design, third-party integrations, and infrastructure plan. You receive a clear project blueprint before development starts.",
    deliverables: ["Architecture blueprint", "Stack recommendation", "Integration plan"],
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Our designers create wireframes, prototypes, and high-fidelity designs that reflect your brand and guide your users toward the actions that matter. You review and approve before we build.",
    deliverables: ["Wireframes", "High-fidelity designs", "Approved prototype"],
  },
  {
    num: "04",
    title: "Agile Development",
    desc: "Development happens in structured sprints with working deliverables at each stage. You have full visibility into progress, can request adjustments, and never wait until the end to see what's being built.",
    deliverables: ["Sprint demos", "Working increments", "Shared backlog"],
  },
  {
    num: "05",
    title: "Testing & Quality Assurance",
    desc: "Every feature is tested across devices, browsers, and user scenarios before it reaches your users. We run functional testing, performance testing, and security checks as standard.",
    deliverables: ["Cross-browser testing", "Performance checks", "Security validation"],
  },
  {
    num: "06",
    title: "Launch & Ongoing Support",
    desc: "We handle deployment, monitor performance post-launch, and stay available for support, updates, and iterative improvements. The relationship doesn't end at go-live.",
    deliverables: ["Production deployment", "Post-launch monitoring", "Support & iteration"],
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
    title: "Frontend Development",
    why: "Modern, responsive interfaces built with frameworks your team can maintain and extend over time.",
    pills: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Code2,
    title: "Backend Development",
    why: "Server-side logic, APIs, and data layers chosen for your workload, team skills, and growth plans.",
    pills: ["Node.js", "Python", "Django", "FastAPI", "Laravel", "Ruby on Rails", "Go"],
  },
  {
    icon: Database,
    title: "Databases",
    why: "Data stores matched to your access patterns, consistency needs, and scaling requirements.",
    pills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    why: "Reliable hosting, containerization, and CI/CD pipelines that keep releases predictable.",
    pills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: Layers,
    title: "CMS Platforms",
    why: "Content management setups your marketing and operations teams can update without developer help.",
    pills: ["WordPress", "Webflow", "Contentful", "Sanity", "Strapi", "Prismic"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Payments",
    why: "Checkout flows and payment integrations built for conversion, compliance, and operational reliability.",
    pills: ["Shopify", "WooCommerce", "Stripe", "Razorpay", "PayPal"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: Monitor,
    title: "Frontend Engineers",
    desc: "React, Next.js, Vue, Angular - they make your interfaces fast, accessible, and polished across devices.",
    tags: ["React", "Next.js", "Vue", "Accessibility"],
  },
  {
    icon: Code2,
    title: "Backend Engineers",
    desc: "API design, database optimization, server logic, and system integration built for production load.",
    tags: ["APIs", "Databases", "Server logic", "Integrations"],
  },
  {
    icon: Layers,
    title: "Full Stack Engineers",
    desc: "End-to-end developers who own features from database to browser without handoff gaps.",
    tags: ["Full product builds", "Feature ownership", "End-to-end delivery"],
  },
  {
    icon: Palette,
    title: "UI/UX Designers",
    desc: "User research, wireframing, and interface design that reduces churn and increases conversion.",
    tags: ["Wireframes", "UX research", "Conversion design", "Prototyping"],
  },
  {
    icon: ShieldCheck,
    title: "QA / Test Engineers",
    desc: "Functional, regression, performance, and cross-browser testing before anything goes live.",
    tags: ["Cross-browser QA", "Regression testing", "Performance testing", "UAT"],
  },
  {
    icon: Container,
    title: "DevOps & Cloud Engineers",
    desc: "Infrastructure, deployment pipelines, monitoring, and cost-efficient cloud architecture.",
    tags: ["CI/CD", "Cloud infra", "Monitoring", "Cost optimisation"],
  },
  {
    icon: ClipboardList,
    title: "Product Managers & BAs",
    desc: "Requirement gathering, project planning, stakeholder communication, and backlog management.",
    tags: ["Discovery", "Backlog grooming", "Stakeholder comms", "Sprint planning"],
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: TrendingUp,
    title: "More qualified traffic",
    desc: "Websites built with SEO architecture, fast load times, and structured content rank higher and attract better-fit visitors - not just more of them.",
  },
  {
    icon: Target,
    title: "Better conversion rates",
    desc: "Thoughtful UX, clear calls-to-action, and conversion-focused design turn more visitors into leads, sign-ups, or customers.",
  },
  {
    icon: Workflow,
    title: "Reduced operational load",
    desc: "Web applications that automate manual processes - order management, customer onboarding, reporting - reduce the load on your team and the cost of running your business.",
  },
  {
    icon: Layers,
    title: "A platform that scales",
    desc: "Built on the right architecture, your web product can handle 10x the users, add new features without rewrites, and integrate with the tools you adopt in the future.",
  },
  {
    icon: Rocket,
    title: "Faster time to market",
    desc: "Structured development, clear milestone reviews, and experienced engineers mean fewer surprises and faster delivery - without sacrificing quality.",
  },
  {
    icon: ShieldCheck,
    title: "A digital asset, not a liability",
    desc: "A well-built web product appreciates over time. Poor-quality development creates technical debt that costs more to fix than it would have cost to build properly from the start.",
  },
]

export const engagementModels = [
  {
    featured: true,
    badge: "Recommended",
    title: "Product / Project Team",
    who: "Best for: founders and new platform builds",
    desc: "A complete team assembled for your project - from design through deployment. Ideal for founders building their first digital product, companies launching a new web platform, or businesses rebuilding a legacy site.",
    benefits: [
      "Dedicated design and engineering team",
      "Sprint-based delivery with weekly demos",
      "Full ownership transfer at handover",
      "Post-launch support and iteration",
    ],
  },
  {
    featured: false,
    title: "Team Augmentation",
    who: "Best for: scaling your existing team",
    desc: "Add experienced web developers to your existing team. Integrates with your workflow, tools, and standups without friction.",
    benefits: [
      "Senior engineers placed within 48 hours",
      "Works with your existing tools and process",
      "No management overhead on your side",
      "Flexible ramp-up and ramp-down",
    ],
  },
  {
    featured: false,
    title: "Fixed Scope Project",
    who: "Best for: defined requirements and budgets",
    desc: "Defined requirements, fixed timeline, fixed price. Ideal for website redesigns, feature additions, or projects with clear scope.",
    benefits: [
      "Fixed price and timeline",
      "Detailed scope document and milestones",
      "Regular progress updates",
      "Defined acceptance criteria",
    ],
  },
  {
    featured: false,
    title: "Managed Web Services",
    who: "Best for: ongoing growth and maintenance",
    desc: "Ongoing development, maintenance, and optimization under a monthly retainer. For businesses that need continuous support as their web product evolves.",
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
    question: "How much does web development cost?",
    answer:
      "There's no universal answer - it depends on scope, complexity, and what you're building. A marketing website typically starts at a different price point than a custom web application or SaaS platform. We provide detailed estimates after a brief discovery session, so you're never guessing.",
  },
  {
    question: "How long does a web development project take?",
    answer:
      "Simple websites take 4-6 weeks. Complex web applications, SaaS products, or e-commerce platforms typically take 10-20 weeks. Projects with undefined scope take longer. We'll give you a realistic timeline after understanding what you need.",
  },
  {
    question: "Do you only work with large enterprises?",
    answer:
      "No. We work with startups, SMEs, and growing businesses alongside enterprise clients. What matters is whether we're a good fit for the problem you're trying to solve - not your company size.",
  },
  {
    question: "Will I be able to update the website myself after launch?",
    answer:
      "Yes, if that's what you need. We build CMS-powered websites that your team can manage independently. For more complex web apps, we can create admin panels or dashboards that make routine updates easy without developer access.",
  },
  {
    question: "What if I don't know exactly what I want to build?",
    answer:
      "That's more common than you'd think. Our discovery process is designed to help you clarify requirements, prioritize features, and make informed decisions before development starts. You don't need a perfect brief to start the conversation.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work across React, Next.js, Vue, Node.js, Python, Laravel, and a range of cloud and database platforms. We recommend a stack based on your project requirements - not based on what's trending or what's easiest for us.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes. We offer support and maintenance packages that include bug fixes, performance monitoring, security updates, and ongoing development. You won't be left managing a complex web product without support.",
  },
  {
    question: "Is web development right for my business right now?",
    answer:
      "If your current digital presence is costing you customers, limiting your operations, or can't keep up with your growth - then yes, it's the right time. If you're unsure, we're happy to do an honest assessment of what makes sense.",
  },
  {
    question: "What's the difference between a website and a web application?",
    answer:
      "A website primarily delivers information - about your business, services, or products. A web application allows users to do something - log in, place orders, submit forms, manage accounts. Many businesses need both, and the line between them is increasingly blurred.",
  },
  {
    question: "How do I choose the right web development partner?",
    answer:
      "Look for a company that asks more questions than it answers in the first conversation. A good partner understands your business before recommending a solution. Be cautious of anyone who gives you a quote before understanding what you actually need.",
  },
]

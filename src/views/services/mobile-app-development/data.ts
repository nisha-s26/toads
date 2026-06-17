import type { LucideIcon } from "lucide-react"
import {
  Apple,
  Brain,
  ClipboardList,
  Cloud,
  Code2,
  Database,
  Layers,
  LifeBuoy,
  Lock,
  Palette,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Target,
  TestTube2,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users,
  Workflow,
} from "lucide-react"

export const heroTrustItems = [
  "iOS, Android & cross-platform",
  "Design through App Store launch",
  "Realistic timelines upfront",
  "Post-launch support included",
]

export const trustStats = [
  { number: "50+", label: "Mobile apps delivered" },
  { number: "iOS & Android", label: "Native + cross-platform" },
  { number: "4-16", label: "Weeks MVP to full app" },
]

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: Apple,
    title: "iOS App Development",
    desc: "Native Swift and Objective-C development for iPhone and iPad. Optimised for performance, App Store guidelines, and Apple's design standards.",
    value: "Delivers a polished native experience Apple users expect",
    tags: ["Swift", "SwiftUI", "TestFlight", "App Store"],
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    desc: "Native Kotlin and Java development for phones, tablets, and enterprise Android devices across the full range of screen sizes and OS versions.",
    value: "Covers the full Android device ecosystem reliably",
    tags: ["Kotlin", "Jetpack Compose", "Google Play", "Firebase"],
  },
  {
    icon: Layers,
    title: "Cross-Platform App Development",
    desc: "React Native and Flutter development for teams that need a single codebase to ship on both iOS and Android without sacrificing feel or performance.",
    value: "Ships faster with one codebase and lower maintenance cost",
    tags: ["React Native", "Flutter", "Expo", "Shared UI"],
  },
  {
    icon: Rocket,
    title: "SaaS Mobile Apps",
    desc: "Extend your SaaS product to mobile with feature-complete apps that sync with your web platform, support offline use, and handle complex authentication flows.",
    value: "Extends your product to mobile-first users",
    tags: ["Offline sync", "Subscription billing", "Multi-tenant", "SSO"],
  },
  {
    icon: Sparkles,
    title: "AI-Powered Mobile Apps",
    desc: "Integrate LLMs, computer vision, voice recognition, or recommendation engines directly into your app - on-device or via API, depending on your latency and privacy needs.",
    value: "Adds intelligent features users actually notice",
    tags: ["On-device ML", "Voice", "Computer vision", "Recommendations"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Mobile Applications",
    desc: "Secure, scalable apps for internal teams - field workforce tools, approval workflows, inventory systems, and enterprise resource apps with SSO and MDM support.",
    value: "Gives field teams real-time access to core systems",
    tags: ["SSO", "MDM", "Field service", "Workflow apps"],
  },
  {
    icon: Palette,
    title: "Mobile App UI/UX Design",
    desc: "User research, information architecture, interactive prototypes, and pixel-perfect design systems - before a single line of code is written.",
    value: "Validates the experience before development spend",
    tags: ["Wireframes", "Prototypes", "Design systems", "User testing"],
  },
  {
    icon: RefreshCw,
    title: "App Modernisation & Re-engineering",
    desc: "Replace outdated apps with modern architecture. We migrate legacy codebases, redesign for current OS versions, and improve performance without losing user data.",
    value: "Extends the life of existing mobile investments",
    tags: ["Legacy migration", "Performance tuning", "OS updates", "Redesign"],
  },
  {
    icon: Server,
    title: "API & Backend Development",
    desc: "We build the server-side infrastructure your app depends on - REST and GraphQL APIs, authentication systems, data pipelines, and third-party integrations.",
    value: "Full-stack delivery without a separate backend vendor",
    tags: ["REST", "GraphQL", "Auth", "Integrations"],
  },
  {
    icon: Store,
    title: "QA Testing & App Store Submission",
    desc: "Manual and automated testing across real devices, OS versions, and network conditions. Full App Store and Google Play submission support included.",
    value: "Catches issues before users and stores do",
    tags: ["Device testing", "Automation", "App Store", "Google Play"],
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    title: "We get the full picture, not just the brief",
    desc: "Before writing code, we ask about your business model, your users, your revenue goals, and your technical constraints. Most problems that surface during development are actually product strategy problems that weren't caught early enough. We catch them early.",
  },
  {
    icon: ClipboardList,
    title: "You get real timelines, not optimistic estimates",
    desc: "We don't tell you what you want to hear. If a feature will take three weeks, we say three weeks. If your MVP scope is too large to ship in your budget, we'll say that too - and help you prioritise intelligently.",
  },
  {
    icon: Code2,
    title: "Technical decisions that age well",
    desc: "The frameworks, architectures, and infrastructure choices we make are designed to still make sense two years from now. We avoid trendy stacks for their own sake and build systems your future dev team can actually work in.",
  },
  {
    icon: Users,
    title: "Consistent communication, not radio silence",
    desc: "Weekly progress updates, a shared project board, and a dedicated point of contact throughout the engagement. You always know where your project stands - without having to chase us.",
  },
  {
    icon: LifeBuoy,
    title: "We don't hand you off after launch",
    desc: "The work doesn't stop at App Store approval. We offer post-launch support, monitoring, performance tuning, and iterative feature development. Your app is a product, not a project.",
  },
  {
    icon: Lock,
    title: "Enterprise-grade security from day one",
    desc: "Secure by default - not as an afterthought. We implement data encryption, certificate pinning, secure token storage, and compliance-ready architecture from the first sprint.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Product Planning",
    desc: "We start by understanding your business context, user personas, competitive landscape, and success metrics. We map out the full app scope, define the MVP, and create a realistic project plan with milestones.",
    deliverables: ["Product requirements document", "User flows", "Project timeline"],
  },
  {
    num: "02",
    title: "UX Design & Prototyping",
    desc: "Our designers create wireframes and interactive prototypes that you can test with real users before development begins. We validate navigation, content hierarchy, and key user journeys.",
    deliverables: ["Wireframes", "Clickable prototype", "Design system foundation"],
  },
  {
    num: "03",
    title: "UI Design",
    desc: "High-fidelity screens built to your brand identity, with a component library your development team can implement efficiently. Covers all states - empty, loading, error, and success.",
    deliverables: ["Complete UI design file", "Component library", "Design handoff"],
  },
  {
    num: "04",
    title: "App Development",
    desc: "Front-end and back-end development in parallel sprints, with weekly demos so you can see progress and give feedback. We integrate third-party services, build APIs, and handle platform-specific requirements throughout.",
    deliverables: ["Working app builds", "API documentation", "Sprint demos"],
  },
  {
    num: "05",
    title: "QA Testing & Optimisation",
    desc: "We test across real iOS and Android devices, simulate poor network conditions, check accessibility compliance, and stress test under load. Performance profiling and crash testing are standard.",
    deliverables: ["QA report", "Resolved bug log", "Performance benchmarks"],
  },
  {
    num: "06",
    title: "Launch & Post-Launch Support",
    desc: "We handle App Store and Google Play submissions, release notes, and metadata. After launch, we monitor for crashes, track performance metrics, and help you plan the next iteration.",
    deliverables: ["Live app in stores", "Monitoring setup", "Post-launch review"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: Apple,
    title: "Native iOS",
    why: "Swift, SwiftUI, and Objective-C for performance-critical iOS apps with deep platform integration and App Store-ready delivery.",
    pills: ["Swift", "SwiftUI", "Objective-C", "TestFlight", "Xcode Cloud"],
  },
  {
    icon: Smartphone,
    title: "Native Android",
    why: "Kotlin, Java, and Jetpack Compose for apps that need to perform well across the full Android device and OS landscape.",
    pills: ["Kotlin", "Java", "Jetpack Compose", "Firebase", "Android Studio"],
  },
  {
    icon: Layers,
    title: "Cross-Platform",
    why: "React Native, Flutter, and Expo when you need one codebase, faster delivery, and native-quality performance for most business apps.",
    pills: ["React Native", "Flutter", "Expo", "Shared codebase"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    why: "Node.js, Python, and Go backends with REST, GraphQL, and WebSockets - the server infrastructure your mobile app depends on.",
    pills: ["Node.js", "FastAPI", "Django", "Go", "GraphQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    why: "AWS, GCP, and Azure with CI/CD pipelines, containerisation, and auto-scaling for reliable mobile backend infrastructure.",
    pills: ["AWS", "GCP", "Azure", "CI/CD", "Auto-scaling"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    why: "OpenAI, Gemini, Claude, TensorFlow Lite, and Core ML for intelligent features - on-device or via API depending on latency and privacy needs.",
    pills: ["OpenAI API", "Gemini", "Claude", "TensorFlow Lite", "Core ML"],
  },
  {
    icon: Database,
    title: "Databases",
    why: "PostgreSQL, MongoDB, Firebase, Redis, and on-device SQLite - chosen based on sync requirements, offline needs, and data volume.",
    pills: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "SQLite"],
  },
  {
    icon: ShieldCheck,
    title: "Auth & Security",
    why: "OAuth 2.0, JWT, biometrics, certificate pinning, and AES encryption built in from the first sprint - not bolted on before launch.",
    pills: ["OAuth 2.0", "JWT", "Biometrics", "Certificate pinning", "AES"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: Apple,
    title: "iOS Engineers",
    desc: "Swift and SwiftUI specialists with App Store experience and a track record of performance-optimised native apps.",
    tags: ["Swift", "SwiftUI", "App Store"],
  },
  {
    icon: Smartphone,
    title: "Android Engineers",
    desc: "Kotlin and Jetpack Compose developers who know the Android device ecosystem - including low-end hardware.",
    tags: ["Kotlin", "Jetpack Compose", "Google Play"],
  },
  {
    icon: Layers,
    title: "React Native / Flutter Developers",
    desc: "Cross-platform specialists who know where shared code works and where you need platform-specific overrides.",
    tags: ["React Native", "Flutter", "Expo"],
  },
  {
    icon: Palette,
    title: "Mobile UI/UX Designers",
    desc: "Designers who understand gesture-based navigation, thumb zones, platform conventions, and mobile accessibility.",
    tags: ["Figma", "Prototypes", "Design systems"],
  },
  {
    icon: Server,
    title: "Backend & API Engineers",
    desc: "Engineers who build the server infrastructure your app depends on - scalable, documented, and monitored.",
    tags: ["Node.js", "GraphQL", "REST"],
  },
  {
    icon: TestTube2,
    title: "QA & Test Automation Engineers",
    desc: "Mobile QA specialists who test on real devices, write automated test suites, and catch issues before your users do.",
    tags: ["Device testing", "Automation", "Regression"],
  },
  {
    icon: Cloud,
    title: "DevOps Engineers",
    desc: "CI/CD pipeline setup, automated builds, crash monitoring, and app distribution via TestFlight and Firebase App Distribution.",
    tags: ["CI/CD", "TestFlight", "Crash monitoring"],
  },
  {
    icon: ClipboardList,
    title: "Project Managers & Scrum Leads",
    desc: "Experienced PMs who keep delivery on track, manage stakeholder communication, and run efficient sprint ceremonies.",
    tags: ["Agile", "Scrum", "Stakeholder mgmt"],
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Users,
    title: "Higher customer retention",
    desc: "Mobile apps with push notifications, personalised experiences, and offline functionality keep users engaged far longer than mobile web. Retention rates for app users consistently outperform browser-based equivalents.",
  },
  {
    icon: TrendingUp,
    title: "New revenue streams",
    desc: "In-app purchases, subscription tiers, premium features, and mobile-exclusive offers all become possible once you control the native experience.",
  },
  {
    icon: Workflow,
    title: "Faster internal operations",
    desc: "Enterprise and internal apps eliminate manual processes, reduce data entry errors, and give field teams real-time access to systems they previously had to wait until desktop hours for.",
  },
  {
    icon: Sparkles,
    title: "Better customer experience",
    desc: "Biometric login, intelligent notifications, offline mode, and platform-native interactions add up to an experience your customers actually prefer - and come back to.",
  },
  {
    icon: TrendingDown,
    title: "Reduced operational costs",
    desc: "Automating workflows through mobile - approval processes, reporting, inventory management, field service - reduces reliance on manual coordination and paper-based systems.",
  },
  {
    icon: Trophy,
    title: "Competitive differentiation",
    desc: "In markets where your competitors are still sending users to mobile-optimised websites, a polished native app is a meaningful differentiator that signals investment and seriousness.",
  },
]

export const engagementModels = [
  {
    featured: true,
    badge: "Most Popular",
    title: "Dedicated Product Team",
    who: "Best for: startups and product companies",
    desc: "A fully dedicated cross-functional team - engineers, designer, QA, and PM - working exclusively on your product. Best for sustained, focused delivery over months.",
    benefits: [
      "iOS, Android, or cross-platform engineers",
      "UI/UX designer embedded in the team",
      "QA testing and release management",
      "Dedicated project manager",
      "Weekly demos and sprint planning",
      "Flexible month-to-month scaling",
    ],
  },
  {
    featured: false,
    title: "Team Augmentation",
    who: "Best for: companies with existing teams",
    desc: "One or more specialists join your existing team, working in your workflow, using your tools, and reporting into your structure. Best when you need specific mobile skills.",
    benefits: [
      "Pre-vetted mobile specialists",
      "48-hour onboarding into your stack",
      "Direct integration with your team's tools and rituals",
      "Full-time or part-time availability",
      "Replace or scale down with 30 days notice",
    ],
  },
  {
    featured: false,
    title: "Fixed-Scope Project",
    who: "Best for: well-defined apps and feature builds",
    desc: "A defined scope, fixed timeline, and agreed cost for teams who know exactly what they need built. Best for version 2 builds with clear requirements.",
    benefits: [
      "Discovery and scoping workshop included",
      "Fixed price with agreed milestones",
      "Change control process for out-of-scope requests",
      "App Store / Play Store submission included",
      "30-day post-launch support included",
    ],
  },
  {
    featured: false,
    title: "Managed Mobile Services",
    who: "Best for: apps already in production",
    desc: "Ongoing support, maintenance, and iterative improvement for apps already in production. Best when you want continuous improvement without maintaining an internal team.",
    benefits: [
      "OS update compatibility and regression testing",
      "Performance monitoring and crash reporting",
      "Monthly feature release cycles",
      "Priority support SLA",
      "Strategic roadmap reviews quarterly",
    ],
  },
]

export const faqs = [
  {
    question: "How much does mobile app development cost?",
    answer:
      "A well-built MVP typically costs between $25,000 and $80,000 USD depending on complexity, platform choice (iOS, Android, or both), and whether you need a custom backend. A full-featured consumer or enterprise app with multiple integrations is usually $80,000 to $250,000+. We'll give you a detailed estimate after a scoping conversation - we don't publish fixed price lists because every project is genuinely different.",
  },
  {
    question: "How long does it take to build a mobile app?",
    answer:
      "A focused MVP with clear scope takes 4 to 8 weeks. A complete product with custom design, backend, third-party integrations, and thorough QA typically runs 12 to 20 weeks. Timeline depends heavily on how quickly decisions get made and how stable the requirements are.",
  },
  {
    question: "Should I build native iOS and Android apps or a cross-platform app?",
    answer:
      "Cross-platform (React Native or Flutter) is the right choice for most startups and SMEs - you get a single codebase, faster delivery, and lower maintenance cost, with performance that's good enough for most use cases. Native is worth the extra cost when you're building something that pushes hardware limits, needs deep OS integration, or has very high performance requirements. We'll recommend the right approach based on your specific product.",
  },
  {
    question: "Can you build the backend and API, or do we need a separate vendor for that?",
    answer:
      "We handle the full stack. Our backend engineers build and maintain the APIs, databases, authentication systems, and cloud infrastructure your app runs on. You don't need a separate vendor for server-side work.",
  },
  {
    question: "What happens after the app launches?",
    answer:
      "We offer post-launch support packages that include crash monitoring, OS compatibility updates, performance improvements, and iterative feature development. App Store and Play Store policies change regularly, and operating systems update twice a year - your app needs ongoing care to stay stable and compliant.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "Both. We've helped first-time founders ship their MVP and we've built enterprise apps for teams with thousands of daily users. The engagement model and scope change, but the quality of work doesn't.",
  },
  {
    question: "What industries do you have experience in?",
    answer:
      "We've built mobile apps across fintech, healthcare, logistics and field services, retail and e-commerce, EdTech, SaaS, real estate, and enterprise internal tools. We're not industry-locked - what matters more is the type of problem you're solving.",
  },
  {
    question: "What information do you need from us to get started?",
    answer:
      "At minimum: a description of what the app should do, who will use it, and what success looks like for you. If you have wireframes, a competitor example, or a technical specification, even better - but not required. We can work from a napkin sketch and turn it into a structured scope.",
  },
]

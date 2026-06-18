"use client"

import {
  ArrowUpRight,
  Layers,
  Cpu,
  Database,
  Brain,
  GitBranch,
  ShieldCheck,
  Network,
  Code2,
  Terminal,
  Settings2,
  AlertCircle,
  Cloud,
  Shield,
  Search,
  UserCheck,
  Rocket,
  Briefcase,
} from "lucide-react"
import { HireResourceRfpForm } from "@/components/hire/HireResourceRfpForm"
import { HireRoleCard } from "@/components/homepage/HireRoleCard"
import { ProcessSteps } from "@/components/homepage/ProcessSteps"
import { HomepageFaqItem } from "@/components/homepage/HomepageFaqItem"
import { type HireResource, HIRE_RESOURCE_BY_SLUG } from "@/config/hire-resources"
import type { LucideIcon } from "lucide-react"
import type { ProcessStepItem } from "@/components/homepage/ProcessSteps"
import Image from "next/image"
import { HomepageMeshBg } from "@/components/HomepageMeshBg"
import { useTheme } from "@/hooks/theme"

// Scroll to form function
function scrollToForm() {
  document.getElementById("hire-rfp-form")?.scrollIntoView({ behavior: "smooth", block: "center" })
}

function getSection(resource: HireResource, heading: string) {
  return resource.sections.find((section) => section.heading === heading)
}

const INTEGRATION_STEP_ICONS = [Search, UserCheck, Rocket] as const

const FLUTTER_HERO_STATS = [
  { value: "150+", label: "Flutter Apps Delivered" },
  { value: "50+", label: "Vetted Flutter Developers" },
  { value: "4.9/5", label: "Client Satisfaction" },
  { value: "5–7 Days", label: "Average Onboarding" },
]

const FLUTTER_COMPARISON_ROWS = [
  { feature: "Team Control", dedicated: "Full", staffAug: "Full", outsourcing: "Limited" },
  { feature: "Integration", dedicated: "Deep", staffAug: "Moderate", outsourcing: "Low" },
  { feature: "Flexibility", dedicated: "High", staffAug: "High", outsourcing: "Low" },
  { feature: "Cost Predictability", dedicated: "High", staffAug: "Moderate", outsourcing: "Variable" },
  { feature: "Onboarding Speed", dedicated: "Fast (1–2 wks)", staffAug: "Fast (1–2 wks)", outsourcing: "Slow (4–6 wks)" },
  { feature: "IP Ownership", dedicated: "100% Client", staffAug: "100% Client", outsourcing: "Negotiated" },
  { feature: "Scalability", dedicated: "Easy", staffAug: "Easy", outsourcing: "Complex" },
  { feature: "Ideal For", dedicated: "Long-term builds", staffAug: "Skill gaps", outsourcing: "Fixed-scope projects" },
]

const DEFAULT_COMPARISON_ROWS = [
  { feature: "Team Control", dedicated: "Direct Control", staffAug: "Staff Control", outsourcing: "Less Control" },
  { feature: "Communication", dedicated: "Direct Communication", staffAug: "Direct and Constant", outsourcing: "Project Manager Only" },
  { feature: "Fixed Shadowing", dedicated: "Free Shadowing", staffAug: "Paid Shadowing", outsourcing: "If needed only" },
  { feature: "Knowledge Retention", dedicated: "High (IP Retained)", staffAug: "Medium", outsourcing: "Lost to end of project" },
]

// Interfaces for custom layout data mapping
interface SkillMatrixColumn {
  title: string
  icon: LucideIcon
  items: string[]
  isBadge?: boolean
  description?: string
}

interface DeliverableCard {
  title: string
  description: string
  graphicType: "radar" | "loss-curve" | "node-graph" | "shield"
}

function parseTitleInfo(heroTitle: string) {
  let prefix = "Hire Expert "
  let highlight = heroTitle
  let suffix = " Developers"

  const lower = highlight.toLowerCase()
  if (lower.startsWith("hire expert ")) {
    prefix = highlight.substring(0, 12)
    highlight = highlight.substring(12)
  } else if (lower.startsWith("hire dedicated ")) {
    prefix = highlight.substring(0, 15)
    highlight = highlight.substring(15)
  } else if (lower.startsWith("hire ")) {
    prefix = highlight.substring(0, 5)
    highlight = highlight.substring(5)
  }

  const newLower = highlight.toLowerCase()
  if (newLower.endsWith(" developers")) {
    suffix = highlight.substring(highlight.length - 11)
    highlight = highlight.substring(0, highlight.length - 11)
  } else if (newLower.endsWith(" engineers")) {
    suffix = highlight.substring(highlight.length - 10)
    highlight = highlight.substring(0, highlight.length - 10)
  } else if (newLower.endsWith(" experts")) {
    suffix = highlight.substring(highlight.length - 8)
    highlight = highlight.substring(0, highlight.length - 8)
  }

  return { prefix, highlight, suffix }
}

// Hero subheadings for exact matching
const SUBHEADINGS: Record<string, string> = {
  "flutter-developers": "Build beautiful, high-performance cross-platform apps. Deploy state-of-the-art Flutter talent. Scale your mobile engineering team with pre-vetted, senior Flutter developers who integrate directly into your workflow - from day one.",
  "llm-developers": "Deploy state-of-the-art model architectures, we place fine-tuned internet-scale model developers & engineers. Bridge the gap between raw foundation model and production-ready app systems.",
  "ai-ml-engineers": "Bring production-ready AI and machine learning engineers onto your team. Toadster places vetted AI/ML developers who have shipped real systems - not just run Jupyter notebooks.",
}

// Custom Skill Matrices for all roles
const SKILL_MATRICES: Record<string, SkillMatrixColumn[]> = {
  "flutter-developers": [
    {
      title: "Orchestration / State Management",
      icon: GitBranch,
      items: ["Provider / Riverpod", "Bloc / Cubit", "GetX", "MobX"]
    },
    {
      title: "Models & Integration",
      icon: Cpu,
      items: ["Firebase / Supabase", "REST APIs / GraphQL", "WebSockets", "Hive / SQLite / Isar"]
    },
    {
      title: "Storage & DevOps",
      icon: Database,
      items: ["Google Play / App Store", "Fastlane / Codemagic", "AWS Amplify", "Docker / CI-CD"]
    }
  ],
  "llm-developers": [
    {
      title: "Orchestration",
      icon: GitBranch,
      items: ["LangChain / LlamaIndex", "LangGraph / AutoGen", "Semantic Kernel"]
    },
    {
      title: "Models",
      icon: Cpu,
      items: ["GPT-4o / Claude 3.5", "Llama 3 / Mistral Large", "Fine-tuning Paradigms"]
    },
    {
      title: "Storage",
      icon: Database,
      items: ["Pinecone / Qdrant", "Milvus / pgvector", "FAISS Indexes"]
    }
  ],
  "ai-ml-engineers": [
    {
      title: "Frameworks & Tools",
      icon: Layers,
      items: ["PyTorch / TensorFlow", "Keras / Scikit-Learn", "JAX Foundations"]
    },
    {
      title: "Models",
      icon: Brain,
      items: ["ResNet & ViT", "BERT & GPT Models", "Diffusion / CNNs"]
    },
    {
      title: "Data & Inference",
      icon: Database,
      items: ["Apache Spark", "MLflow / ONNX Runtime", "TensorRT / Docker"]
    }
  ],
  "agentic-ai-engineers": [
    {
      title: "Agent Frameworks",
      icon: Network,
      items: ["LangGraph / CrewAI", "AutoGen Orchestration", "Semantic Kernel"]
    },
    {
      title: "Core Capabilities",
      icon: Brain,
      items: ["Hierarchical Planning", "Dynamic Tool Use", "Memory & Reflection"]
    },
    {
      title: "Safety & Guardrails",
      icon: ShieldCheck,
      items: ["Llama Guard", "NeMo Guardrails", "Human-in-the-Loop"]
    }
  ],
  "mlops-engineers": [
    {
      title: "CI/CD & Registries",
      icon: Settings2,
      items: ["GitHub Actions / MLflow", "DVC / Kubeflow", "Apache Airflow"]
    },
    {
      title: "Inference & Serving",
      icon: Cpu,
      items: ["Triton Server", "TensorRT Engine", "TorchServe / Seldon"]
    },
    {
      title: "ML Infrastructure",
      icon: Database,
      items: ["Kubernetes / EKS", "AWS SageMaker / Vertex AI", "Prometheus & Grafana"]
    }
  ],
  "data-engineers": [
    {
      title: "Data Processing",
      icon: Layers,
      items: ["Apache Spark", "Apache Flink", "Polars / Pandas"]
    },
    {
      title: "Ingestion & Stream",
      icon: GitBranch,
      items: ["Apache Kafka", "RabbitMQ Message Bus", "Fivetran / Airbyte"]
    },
    {
      title: "Storage & Warehouses",
      icon: Database,
      items: ["Snowflake / Databricks", "Google BigQuery / Redshift", "PostgreSQL / pgvector"]
    }
  ],
  "python-developers": [
    {
      title: "Web Backends",
      icon: Code2,
      items: ["FastAPI / Django", "Flask Framework", "Asyncio Async Backends"]
    },
    {
      title: "Data & ML Stack",
      icon: Brain,
      items: ["NumPy / Pandas", "SciPy Math Stack", "Scikit-Learn ML"]
    },
    {
      title: "Core & Tooling",
      icon: Terminal,
      items: ["Redis / Celery", "Docker Containers", "Poetry Dependency"]
    }
  ],
  "reactjs-developers": [
    {
      title: "Core & Frameworks",
      icon: Code2,
      items: ["React.js Core", "Next.js (App Router)", "TypeScript / Tailwind CSS"]
    },
    {
      title: "State Management",
      icon: Brain,
      items: ["Redux Toolkit", "Zustand Core Store", "React Context API"]
    },
    {
      title: "UI & Animation",
      icon: Database,
      items: ["Framer Motion", "Radix UI Primitives", "CSS Modules"]
    }
  ],
  "react-native-developers": [
    {
      title: "Core Frameworks",
      icon: Code2,
      items: ["React Native Core", "Expo SDK Core", "React Navigation"]
    },
    {
      title: "Native Bridges",
      icon: Brain,
      items: ["Swift Bridge", "Kotlin Bridge", "JSI Native Bridge"]
    },
    {
      title: "Performance & UI",
      icon: Database,
      items: ["Reanimated 3", "Hermes Engine", "Zustand State"]
    }
  ],
  "nodejs-developers": [
    {
      title: "Core Frameworks",
      icon: Code2,
      items: ["NestJS / Express.js", "Fastify / TypeScript", "GraphQL Servers"]
    },
    {
      title: "Database Layers",
      icon: Database,
      items: ["Prisma ORM", "Mongoose / MongoDB", "TypeORM / SQL"]
    },
    {
      title: "Real-Time Systems",
      icon: GitBranch,
      items: ["WebSockets / Socket.io", "gRPC Communication", "Redis Cache / RabbitMQ"]
    }
  ],
  "fullstack-developers": [
    {
      title: "Frontend Stack",
      icon: Layers,
      items: ["React.js / Next.js", "TypeScript / Tailwind CSS", "Zustand / Framer Motion"]
    },
    {
      title: "Backend Stack",
      icon: Cpu,
      items: ["Node.js / NestJS", "Python / FastAPI", "REST & GraphQL APIs"]
    },
    {
      title: "Database & Ops",
      icon: Database,
      items: ["PostgreSQL / MongoDB", "Redis Cache System", "Docker / AWS / GCP"]
    }
  ]
}

// Deliverables mapping for all roles
const DELIVERABLES: Record<string, DeliverableCard[]> = {
  "flutter-developers": [
    { title: "Cross-Platform Mobile Apps", description: "Pixel-perfect Flutter apps for iOS and Android from a single, maintainable codebase.", graphicType: "radar" },
    { title: "Advanced State Management", description: "Scalable architectures using Bloc, Riverpod, or GetX - structured for long-term maintainability.", graphicType: "loss-curve" },
    { title: "Backend & API Integration", description: "Seamless REST, GraphQL, and Firebase integrations, authentication, and real-time data layers.", graphicType: "node-graph" },
    { title: "Custom Widgets & Animations", description: "Bespoke UI components, fluid animations, and branded design systems built natively in Flutter.", graphicType: "shield" },
    { title: "App Store Deployment", description: "End-to-end release management for Google Play and Apple App Store, including CI/CD pipeline setup.", graphicType: "shield" },
    { title: "Performance Optimization", description: "App profiling, rendering optimization, and memory management for production-grade performance.", graphicType: "shield" }
  ],
  "llm-developers": [
    { title: "Advanced RAG Pipelines", description: "Hyper-focused retrieval system, semantic search, query optimization, metadata indexing.", graphicType: "radar" },
    { title: "Fine Tuning Graphs", description: "Continuous learning loops, parameter-efficient fine-tuning (PEFT), evaluation datasets.", graphicType: "loss-curve" },
    { title: "Agentic Workflows", description: "Autonomous agents capable of tool use, planning, and self-reflection.", graphicType: "node-graph" },
    { title: "Safety Guardrails", description: "Implementation of LLM guardrails, prompt injection protection, PII filtering.", graphicType: "shield" }
  ],
  "ai-ml-engineers": [
    { title: "Computer Vision", description: "Real-time object detection, instance segmentation, and spatial classification pipelines.", graphicType: "radar" },
    { title: "Predictive Modeling", description: "High-accuracy time-series forecasting, regression networks, and multi-variable anomalies.", graphicType: "loss-curve" },
    { title: "NLP & GenAI", description: "Domain-adapted language models, custom text representations, and semantic lookup systems.", graphicType: "node-graph" },
    { title: "Deployment & MLOps", description: "Low-latency inference, model registries, Dockerized microservices, and metrics monitoring.", graphicType: "shield" }
  ],
  "agentic-ai-engineers": [
    { title: "Multi-Agent Systems", description: "Coordinated networks of independent agents exchanging messages to handle workflows.", graphicType: "radar" },
    { title: "Self-Correction Loops", description: "Run-time tracking models that evaluate output accuracy and self-heal operations.", graphicType: "loss-curve" },
    { title: "Tool Integrations", description: "Exposing secure API endpoints, web browser agents, and sandboxed execution tools.", graphicType: "node-graph" },
    { title: "Constitutional Safety", description: "Defining rigid behavioral constraints, compliance monitoring, and audit logging.", graphicType: "shield" }
  ],
  "mlops-engineers": [
    { title: "Automated ML CI/CD", description: "Continuous training pipelines, model integration testing, and automatic registry pushes.", graphicType: "radar" },
    { title: "Drift Monitoring", description: "Detecting prediction shift and statistical data changes, with auto-retrain triggers.", graphicType: "loss-curve" },
    { title: "Feature Feature Repositories", description: "Synchronized offline and online feature stores to eliminate training-serving skew.", graphicType: "node-graph" },
    { title: "Inference Efficiency", description: "GPU quantization, pruning parameters, and low-latency scaling on cloud clusters.", graphicType: "shield" }
  ],
  "data-engineers": [
    { title: "Batch & Streaming", description: "Ultra-low-latency message processing and high-throughput data sync pipelines.", graphicType: "radar" },
    { title: "Pipeline Quality", description: "End-to-end data lineage tracking, automated schema sanity, and row checks.", graphicType: "loss-curve" },
    { title: "Lakehouse Architecture", description: "Unified structures with Databricks Delta Lake or Apache Iceberg for query speed.", graphicType: "node-graph" },
    { title: "Data Governance", description: "Granular access management, field-level encryption, and automated privacy redaction.", graphicType: "shield" }
  ],
  "python-developers": [
    { title: "Async Web Backends", description: "Highly parallel REST and GraphQL APIs using ASGI servers and non-blocking code.", graphicType: "radar" },
    { title: "Structured Aggregation", description: "High-performance data pipelines with Polars, Pandas, and numpy matrix calculations.", graphicType: "loss-curve" },
    { title: "Task Queuing", description: "Distributed background job workers using Celery and Redis broker.", graphicType: "node-graph" },
    { title: "Production Tooling", description: "Strict static typing with mypy, test coverage with pytest, and Docker settings.", graphicType: "shield" }
  ],
  "reactjs-developers": [
    { title: "Interactive Dashboards", description: "Complex UI rendering, real-time widgets, and streaming conversation panels.", graphicType: "radar" },
    { title: "Next.js Architecture", description: "React Server Components, dynamic page generation, and edge middleware.", graphicType: "loss-curve" },
    { title: "Performance tuning", description: "Bundle splitting, virtualization of long lists, and rendering optimization.", graphicType: "node-graph" },
    { title: "Access & Security", description: "Protected routing, OAuth client logic, and WCAG accessibility conformance.", graphicType: "shield" }
  ],
  "react-native-developers": [
    { title: "Cross-Platform Apps", description: "Sleek iOS and Android applications utilizing a shared codebase.", graphicType: "radar" },
    { title: "On-Device Storage", description: "Offline database caching, local ML inference, and sensor logging.", graphicType: "loss-curve" },
    { title: "Native Capabilities", description: "Camera access, biometrics, background sync, and Bluetooth interfaces.", graphicType: "node-graph" },
    { title: "Store Submission", description: "Automated Fastlane deployment pipelines and store compliance review.", graphicType: "shield" }
  ],
  "nodejs-developers": [
    { title: "High-Concurrency APIs", description: "Handling thousands of requests per second using non-blocking event loops.", graphicType: "radar" },
    { title: "Real-Time Streaming", description: "Server-Sent Events (SSE) and WebSockets for live chat or dashboard feeds.", graphicType: "loss-curve" },
    { title: "Microservices", description: "Decoupled backend service layers sharing event buses and caching.", graphicType: "node-graph" },
    { title: "API Gateways", description: "Rate-limiting, JWT authentication, and centralized request logging.", graphicType: "shield" }
  ],
  "fullstack-developers": [
    { title: "End-to-End Features", description: "Owning a feature from database migrations to frontend state components.", graphicType: "radar" },
    { title: "Serverless & Edge", description: "Optimizing Next.js edge functions and serverless backend handlers.", graphicType: "loss-curve" },
    { title: "AI Integration", description: "Orchestrating backend model endpoints and rendering streaming frontend interfaces.", graphicType: "node-graph" },
    { title: "Security & Testing", description: "JWT session management, encryption, and comprehensive Cypress/Playwright E2E tests.", graphicType: "shield" }
  ]
}

export default function HireResourceDetail({ resource }: { resource: HireResource }) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const slug = resource.slug
  const isFlutter = slug === "flutter-developers"
  const titleInfo = parseTitleInfo(resource.heroTitle)
  const customSubheading = SUBHEADINGS[slug] || resource.subheading
  const skillColumns = SKILL_MATRICES[slug] || SKILL_MATRICES["flutter-developers"]
  const deliverables = DELIVERABLES[slug] || DELIVERABLES["flutter-developers"]
  const comparisonRows = isFlutter ? FLUTTER_COMPARISON_ROWS : DEFAULT_COMPARISON_ROWS

  const whyHireSection = isFlutter ? getSection(resource, "Why Hire Dedicated Flutter Developers?") : null
  const deliverablesSection = isFlutter ? getSection(resource, "What Your Dedicated Flutter Developers Will Deliver") : null
  const integrationSection = isFlutter ? getSection(resource, "Seamless 3-Step Integration") : null
  const rolesSection = isFlutter ? getSection(resource, "Flutter Roles You Can Hire") : null
  const engagementSection = isFlutter ? getSection(resource, "Flexible Engagement Models") : null
  const comparisonSection = isFlutter ? getSection(resource, "How Dedicated Flutter Developers Compare") : null
  const whyToadsterSection = isFlutter ? getSection(resource, "Why Toadster Technologies?") : null
  const pricingSection = isFlutter ? getSection(resource, "How Much Does It Cost to Hire Dedicated Flutter Developers?") : null
  const skillMatrixSection = isFlutter ? getSection(resource, "Tech Stack & Skill Matrix") : null

  const categoryEyebrow = isFlutter
    ? "Hire Resources / Flutter Developers"
    : `HOME / HIRE RESOURCES / ${resource.heroTitle.toUpperCase()}`

  const heroStats = isFlutter
    ? FLUTTER_HERO_STATS
    : [
      { value: "150+", label: "Apps Delivered" },
      { value: "50+", label: "Vetted Developers" },
      { value: "Top 1%", label: "Global Talent" },
    ]

  const bottleneckCards = isFlutter && whyHireSection?.items
    ? whyHireSection.items
    : [
      { title: "Slow Hiring Cycles", body: "Traditional search takes 45-60 days. Our dedicated model reduces this to 48 hours for immediate start." },
      { title: "Talent Shortages", body: `Stop competing for local talent. Access our global pool of senior ${titleInfo.highlight} architects and developers.` },
      { title: "Delivery Delays", body: "Incomplete teams result in delayed features. Our dedicated resource model keeps sprints on schedule." },
      { title: "Hidden Overhead", body: "Eliminate benefits, infrastructure, and training costs. Pay only for the productive engineering hours." },
    ]

  const integrationSteps = isFlutter && integrationSection?.items
    ? integrationSection.items
    : [
      { title: "Technical Scoping", body: `Share your project requirements, tech stack, timelines, and skill expectations. We map the right ${titleInfo.highlight} talent to your needs.` },
      { title: "Vetting & Matching", body: `We shortlist pre-vetted senior ${titleInfo.highlight} developers. You interview, assess, and select your preferred candidate - no obligation.` },
      { title: "Dedicated Onboarding", body: "Your developer joins your team, your tools (Jira, Slack, GitHub), and your sprints - fully productive within 48 hours of onboarding." },
    ]

  const processSteps: ProcessStepItem[] = integrationSteps.map((step, index) => ({
    id: String(index + 1).padStart(2, "0"),
    title: step.title,
    description: step.body,
    Icon: INTEGRATION_STEP_ICONS[index] ?? Search,
  }))

  return (
    <div className={`hire-page-shell relative isolate text-page-fg font-sans min-h-screen pt-28 pb-16 ${isDark ? 'homepage-mesh-shell' : ''}`}>
      {isDark && <HomepageMeshBg />}

      {/* ── SECTION 1: HERO SECTION ── */}
      <section className="relative px-6 lg:px-16 max-w-7xl mx-auto mb-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left pt-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-toadster-green uppercase">
              {categoryEyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-page-fg leading-[1.15]">
              {isFlutter ? (
                <>
                  Hire Expert{" "}
                  <span className="text-[#004d2d]">Flutter Developers</span>
                </>
              ) : (
                <>
                  {titleInfo.prefix}
                  <span className="text-toadster-green block">{titleInfo.highlight}{titleInfo.suffix}</span>
                </>
              )}
            </h1>

            {isFlutter && (
              <p className="text-xl sm:text-2xl font-bold text-page-fg leading-snug max-w-2xl">
                Build Beautiful, High-Performance Cross-Platform Apps
              </p>
            )}

            {isFlutter ? (
              <div className="flex flex-col gap-4 max-w-2xl">
                <p className="text-lg text-page-fg-muted leading-relaxed">
                  Deploy state-of-the-art Flutter talent. Scale your mobile engineering team with pre-vetted, senior Flutter developers who integrate directly into your workflow - from day one.
                </p>
                <p className="text-lg text-page-fg-muted leading-relaxed">
                  Toadster Technologies provides dedicated Flutter developers who work exclusively on your product, aligned to your sprints, your stack, and your business goals.
                </p>
              </div>
            ) : (
              <p className="text-lg text-page-fg-muted leading-relaxed max-w-2xl">
                {customSubheading}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-toadster-green hover:bg-[var(--primary-hover)] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all"
              >
                {isFlutter ? "Hire Flutter Experts" : `Hire ${titleInfo.highlight} Experts`}
                <ArrowUpRight size={16} />
              </button>


            </div>

            {/* Stat Row */}
            <div className={`grid gap-6 pt-10 border-t border-page-border mt-4 ${isFlutter ? "grid-cols-2 sm:grid-cols-4 max-w-3xl" : "grid-cols-3 max-w-xl"}`}>
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-page-fg">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-page-fg-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Form Panel) */}
          <div id="hire-rfp-form" className="lg:col-span-5 w-full">
            <HireResourceRfpForm
              roleTitle={resource.heroTitle}
              formSubtext={
                isFlutter
                  ? "Tell us about your Flutter project and we'll connect you with the right developer within 24 hours."
                  : undefined
              }
              submitFooterText={
                isFlutter ? "No commitment required. We'll reach out within 24 hours." : undefined
              }
              engagementOptions={
                isFlutter
                  ? [
                    { value: "Full-Time", label: "Full-Time" },
                    { value: "Part-Time", label: "Part-Time" },
                    { value: "Team", label: "Team" },
                  ]
                  : undefined
              }
            />
          </div>

        </div>
      </section>

      {/* ── SECTION 2: TECH STACK & SKILL MATRIX ── */}
      <section className="py-20 px-6 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto text-center flex flex-col gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-page-fg-muted">

          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
            {isFlutter ? "Tech Stack & Skill Matrix" : `Advanced ${titleInfo.highlight} Skill Matrix`}
          </h2>
          <p className="text-page-fg-muted max-w-2xl mx-auto leading-relaxed text-sm sm:text-base font-medium">
            {skillMatrixSection?.body ??
              `Our ${titleInfo.highlight} developers are proficient across the complete cross-platform mobile ecosystem - from UI to backend integrations.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto items-stretch">
          {skillColumns.map((col, index) => {
            const IconComponent = col.icon
            return (
              <HireRoleCard
                key={col.title}
                title={col.title}
                icon={IconComponent}
                tags={col.items}
                index={index}
              />
            )
          })}
        </div>
      </section>

      {/* ── SECTION 3: SOLVE CRITICAL DELIVERY BOTTLENECKS ── */}
      <section className="py-20 px-6 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Info & Graphic Column */}
            <div className="lg:col-span-5 flex flex-col gap-5 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-page-fg-muted">
                WHY HIRE DEDICATED
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight leading-tight">
                {isFlutter ? "Why Hire Dedicated Flutter Developers?" : "Solve Critical Delivery Bottlenecks"}
              </h2>
              <p className="text-page-fg-muted leading-relaxed text-sm sm:text-base">
                {whyHireSection?.body ??
                  `Businesses building software products face a common set of challenges. Dedicated ${titleInfo.highlight} developers solve them.`}
              </p>

              {/* Desktop graphic framed */}
              <div className="mt-4 border border-page-border bg-page-bg-alt rounded-2xl overflow-hidden p-2 shadow-sm">
                <Image
                  src="/monitor_code_graphic.png"
                  alt="Monitor code visual"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Bottlenecks Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {bottleneckCards.map((card, index) => (
                <HireRoleCard
                  key={card.title}
                  title={card.title}
                  icon={AlertCircle}
                  description={card.body}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ENTERPRISE GRADE DELIVERABLES ── */}
      <section className="py-20 px-6 lg:px-16 relative z-10 max-w-7xl mx-auto">
        <div className="bg-[#003820] dark:bg-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col gap-12">

          {/* Header */}
          <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-black">
              {isFlutter ? "What Your Dedicated Flutter Developers Will Deliver" : "Enterprise Grade Deliverables"}
            </h2>
            <p className="text-[#a0c5b3] dark:text-gray-600 text-sm sm:text-base leading-relaxed">
              {deliverablesSection?.body ??
                `Vetted ${titleInfo.highlight} developers deliver rigorous engineering standards for robust, scalable mobile applications.`}
            </p>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column: Cross-Platform (Tall Card) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#004d2d] dark:bg-gray-50 dark:border dark:border-gray-200 rounded-2xl p-7 border border-emerald-900/40 dark:border-gray-200 relative overflow-hidden min-h-[380px] lg:min-h-0">
              <div className="flex flex-col gap-4 z-10 text-left">
                <h3 className="font-extrabold text-2xl leading-snug text-white dark:text-black">{deliverables[0].title}</h3>
                <p className="text-[#a0c5b3] dark:text-gray-600 text-sm leading-relaxed">
                  {deliverables[0].description}
                </p>
              </div>

              {/* Dual phone image graphic absolute placed */}
              <div className="mt-8 flex justify-center -mb-7">
                <Image
                  src="/phones_app_graphic.png"
                  alt="Phones visualization"
                  width={340}
                  height={260}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column (Stacked Cards) */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Top Card: Advanced State Management */}
              <div className="bg-[#004d2d] dark:bg-gray-50 dark:border dark:border-gray-200 rounded-2xl p-7 border border-emerald-900/40 flex flex-col gap-5 text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="font-extrabold text-xl leading-snug text-white dark:text-black">{deliverables[1].title}</h3>
                  <p className="text-[#a0c5b3] dark:text-gray-600 text-sm leading-relaxed">
                    {deliverables[1].description}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["BLOC/CUBIT", "RIVERPOD", "GETX"].map((badge) => (
                    <span key={badge} className="px-3 py-1 rounded bg-[#003820] dark:bg-green-100 text-xs font-bold text-emerald-400 dark:text-green-800">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row (2 Equal Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">

                {/* Bottom Left Card */}
                <div className="bg-[#004d2d] dark:bg-gray-50 dark:border dark:border-gray-200 rounded-2xl p-6 border border-emerald-900/40 flex flex-col justify-between items-start text-left min-h-[180px]">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#003820] dark:bg-green-100 text-emerald-400 dark:text-green-700">
                    <Cloud size={18} />
                  </span>
                  <div className="mt-4">
                    <h4 className="font-bold text-base text-white dark:text-black">{deliverables[2].title}</h4>
                    <p className="text-[#a0c5b3] dark:text-gray-600 text-xs leading-relaxed mt-1.5">
                      {deliverables[2].description}
                    </p>
                  </div>
                </div>

                {/* Bottom Right Card */}
                <div className="bg-[#004d2d] dark:bg-gray-50 dark:border dark:border-gray-200 rounded-2xl p-6 border border-emerald-900/40 flex flex-col justify-between items-start text-left min-h-[180px]">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#003820] dark:bg-green-100 text-emerald-400 dark:text-green-700">
                    <Shield size={18} />
                  </span>
                  <div className="mt-4">
                    <h4 className="font-bold text-base text-white dark:text-black">{deliverables[3].title}</h4>
                    <p className="text-[#a0c5b3] dark:text-gray-600 text-xs leading-relaxed mt-1.5">
                      {deliverables[3].description}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {isFlutter && deliverables.length > 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {deliverables.slice(4).map((item) => (
                <div
                  key={item.title}
                  className="bg-[#004d2d] dark:bg-gray-50 dark:border dark:border-gray-200 rounded-2xl p-6 border border-emerald-900/40 flex flex-col gap-3 text-left"
                >
                  <h4 className="font-extrabold text-lg text-white dark:text-black">{item.title}</h4>
                  <p className="text-[#a0c5b3] dark:text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ── SECTION 5: SEAMLESS 3-STEP INTEGRATION ── */}
      <section className="py-20 px-6 lg:px-16 relative z-10 max-w-7xl mx-auto">
        <div className="text-center flex flex-col gap-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
            Seamless 3-Step Integration
          </h2>
          <p className="text-page-fg-muted max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            From brief to building - your dedicated {titleInfo.highlight} developer is live in under a week.
          </p>
        </div>

        <div className="mt-12 md:mt-14">
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* ── SECTION 6: FLUTTER ROLES YOU CAN HIRE ── */}
      {isFlutter && rolesSection?.items && (
        <section className="py-20 px-6 lg:px-16 relative z-10 max-w-7xl mx-auto">
          <div className="text-center flex flex-col gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
              {rolesSection.heading}
            </h2>
            <p className="text-page-fg-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
              {rolesSection.body}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-page-border shadow-[0_10px_35px_rgba(0,0,0,0.03)] bg-page-card">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-toadster-green text-white">
                  <th className="px-6 py-4.5 font-bold text-sm">Resource Type</th>
                  <th className="px-6 py-4.5 font-bold text-sm">What They Do For You</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-page-border text-page-fg-muted text-sm">
                {rolesSection.items.map((item) => (
                  <tr key={item.title} className="hover:bg-page-bg-alt">
                    <td className="px-6 py-4 font-semibold text-page-fg bg-page-bg-alt/50">{item.title}</td>
                    <td className="px-6 py-4">{item.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ── SECTION 7: FLEXIBLE ENGAGEMENT MODELS ── */}
      {isFlutter && engagementSection?.items && (
        <section className="py-20 px-6 lg:px-16 relative z-10 max-w-7xl mx-auto">
          <div className="text-center flex flex-col gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
              {engagementSection.heading}
            </h2>
            <p className="text-page-fg-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
              {engagementSection.body}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engagementSection.items.map((item, index) => {
              const badgeMatch = item.title.match(/\(([^)]+)\)/)
              const badge = badgeMatch?.[1]
              const cleanTitle = item.title.replace(/\s*\([^)]+\)/, "")
              const bodyParts = item.body.split(". ")
              const hoursLine = bodyParts[0] ?? ""
              const description = bodyParts[1] ?? ""
              const bullets = bodyParts[2] ? bodyParts[2].split(", ") : []

              return (
                <HireRoleCard
                  key={item.title}
                  title={cleanTitle}
                  icon={Briefcase}
                  badge={badge}
                  description={[hoursLine, description].filter(Boolean).join(". ")}
                  tags={bullets}
                  index={index}
                />
              )
            })}
          </div>
        </section>
      )}

      {/* ── SECTION 6: THE TOADSTER ADVANTAGE TABLE ── */}
      <section className="py-20 px-6 lg:px-16 relative z-10 max-w-7xl mx-auto">
        <div className="text-center flex flex-col gap-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
            {isFlutter ? "How Dedicated Flutter Developers Compare" : "The Toadster Advantage"}
          </h2>
          <p className="text-page-fg-muted max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            {comparisonSection?.body ??
              "Understand exactly how dedicated resourcing differs from other common hiring approaches."}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-page-border shadow-[0_10px_35px_rgba(0,0,0,0.03)] bg-page-card max-w-5xl mx-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-toadster-green text-white">
                <th className="px-6 py-4.5 font-bold text-sm">Feature</th>
                <th className="px-6 py-4.5 font-bold text-sm">Dedicated Developer</th>
                <th className="px-6 py-4.5 font-bold text-sm">{isFlutter ? "Staff Augmentation" : "Staffing / Agency"}</th>
                <th className="px-6 py-4.5 font-bold text-sm">Project Outsourcing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-page-border text-page-fg-muted text-sm">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-page-bg-alt">
                  <td className="px-6 py-4 font-semibold text-page-fg bg-page-bg-alt/50">{row.feature}</td>
                  <td className="px-6 py-4 font-medium text-page-fg">{row.dedicated}</td>
                  <td className="px-6 py-4">{row.staffAug}</td>
                  <td className="px-6 py-4">{row.outsourcing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 10: WHY TOADSTER ── */}
      {isFlutter && whyToadsterSection?.items && (
        <section className="py-20 px-6 lg:px-16 relative z-10 max-w-7xl mx-auto">
          <div className="text-center flex flex-col gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
              {whyToadsterSection.heading}
            </h2>
            <p className="text-page-fg-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
              {whyToadsterSection.body}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyToadsterSection.items.map((item, index) => (
              <HireRoleCard
                key={item.title}
                title={item.title}
                icon={ShieldCheck}
                description={item.body}
                index={index}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── SECTION 11: PRICING ── */}
      {isFlutter && pricingSection?.items && (
        <section className="py-20 px-6 lg:px-16 relative z-10 max-w-7xl mx-auto">
          <div className="text-center flex flex-col gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
              {pricingSection.heading}
            </h2>
            <p className="text-page-fg-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
              {pricingSection.body}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {pricingSection.items.map((item, index) => {
              const [experiencePart, bestForPart] = item.body.split(". Best for: ")
              return (
                <HireRoleCard
                  key={item.title}
                  title={item.title}
                  icon={Layers}
                  description={`Experience: ${experiencePart}${bestForPart ? `. Best for: ${bestForPart}` : ""}`}
                  index={index}
                />
              )
            })}
          </div>

          <p className="text-center text-page-fg-muted text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Contact Toadster Technologies for a customized quote based on your specific engagement model, seniority
            requirements, and team size. We offer competitive rates with full transparency - no retainer fees, no hidden
            charges.
          </p>
        </section>
      )}

      {/* ── SECTION 12: FAQ ── */}
      {isFlutter && resource.faqs.length > 0 && (
        <section className="py-20 px-6 lg:px-16 relative z-10 max-w-4xl mx-auto">
          <div className="text-center flex flex-col gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-page-fg-muted text-sm sm:text-base leading-relaxed font-medium">
              Everything you need to know about hiring dedicated Flutter developers through Toadster Technologies.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {resource.faqs.map((faq) => (
              <HomepageFaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      )}

      {/* ── SECTION 13: BOTTOM CONVERSION BANNER ── */}
      <section className="py-20 px-6 lg:px-16 relative z-10 max-w-7xl mx-auto">
        <div className="bg-[#003820] text-white rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col gap-8 items-center text-center relative overflow-hidden">

          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Hire Expert {isFlutter ? "Flutter" : titleInfo.highlight}{titleInfo.suffix}?
            </h2>
            {isFlutter ? (
              <div className="flex flex-col gap-2">
                <p className="text-[#a0c5b3] text-sm sm:text-base leading-relaxed">
                  Stop waiting months to hire. Your dedicated Flutter developer can be onboarding within the week.
                </p>
                <p className="text-[#a0c5b3] text-sm sm:text-base leading-relaxed">
                  No recruitment overhead. No hidden fees. Just world-class Flutter talent, ready to build.
                </p>
              </div>
            ) : (
              <p className="text-[#a0c5b3] text-sm sm:text-base leading-relaxed">
                We&apos;ve professionally balanced this Toadster team. Start your {titleInfo.highlight} journey with Toadster today.
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 z-10 w-full sm:w-auto mt-2">
            {isFlutter ? (
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-50 px-10 py-5 text-base font-bold text-[#003820] shadow-sm transition-all"
              >
                Talk to an Expert
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-50 px-8 py-4 text-sm font-bold text-[#003820] shadow-sm transition-all"
                >
                  Get a Quote
                </button>

                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent hover:bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all"
                >
                  Speak to an Expert
                </button>
              </>
            )}
          </div>

          {isFlutter && (
            <p className="text-[#a0c5b3]/80 text-sm">
              Or reach us directly:{" "}
              <a href="mailto:hire@toadster.tech" className="text-white hover:underline">
                hire@toadster.tech
              </a>{" "}
              |{" "}
              <a href="https://www.toadster.tech" className="text-white hover:underline">
                www.toadster.tech
              </a>
            </p>
          )}
        </div>
      </section>

    </div>
  )
}

export function HireResourceDetailBySlug({ slug }: { slug: string }) {
  const resource = HIRE_RESOURCE_BY_SLUG[slug]
  if (!resource) return null
  return <HireResourceDetail resource={resource} />
}


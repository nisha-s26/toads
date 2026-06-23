"use client"

import {
  ArrowUpRight,
  ArrowRight,
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


const REACT_NATIVE_COMPARISON_ROWS = [
  { feature: "Time to Start", dedicated: "5–7 Days", staffAug: "1–3 Days", outsourcing: "30–90 Days" },
  { feature: "Cost Predictability", dedicated: "Fixed Monthly", staffAug: "Variable", outsourcing: "High Fixed Cost" },
  { feature: "Skill Depth", dedicated: "Senior Vetted", staffAug: "Mixed", outsourcing: "Varies" },
  { feature: "Cross-Platform Coverage", dedicated: "Single Codebase", staffAug: "Variable", outsourcing: "Single Codebase" },
  { feature: "Scalability", dedicated: "Instant", staffAug: "Limited", outsourcing: "Slow" },
  { feature: "Management Overhead", dedicated: "Low", staffAug: "High", outsourcing: "High" },
  { feature: "Contractual Flexibility", dedicated: "Flexible", staffAug: "Per-Project", outsourcing: "Long-Term Only" },
]

const DEVOPS_COMPARISON_ROWS = [
  { feature: "Time to Start", dedicated: "5–7 Days", staffAug: "1–3 Days", outsourcing: "45–90 Days" },
  { feature: "Cost Predictability", dedicated: "Fixed Monthly", staffAug: "Variable", outsourcing: "High Fixed Cost" },
  { feature: "Skill Depth", dedicated: "Senior Vetted", staffAug: "Mixed", outsourcing: "Hard to Retain" },
  { feature: "Infrastructure Ownership", dedicated: "Full Client Control", staffAug: "Shared Risk", outsourcing: "Full Client Control" },
  { feature: "Scalability", dedicated: "Instant", staffAug: "Limited", outsourcing: "Slow" },
  { feature: "On-Call & Incident Cover", dedicated: "Structured SLA", staffAug: "Unreliable", outsourcing: "Expensive" },
  { feature: "Contractual Flexibility", dedicated: "Flexible", staffAug: "Per-Project", outsourcing: "Long-Term Only" },
]

const IOS_COMPARISON_ROWS = [
  { feature: "Time to Start", dedicated: "5–7 Days", staffAug: "1–3 Days", outsourcing: "30–90 Days" },
  { feature: "Cost Predictability", dedicated: "Fixed Monthly", staffAug: "Variable", outsourcing: "High Fixed Cost" },
  { feature: "Skill Depth", dedicated: "Senior Vetted", staffAug: "Mixed", outsourcing: "Varies" },
  { feature: "App Store Compliance Knowledge", dedicated: "High", staffAug: "Variable", outsourcing: "Varies" },
  { feature: "Scalability", dedicated: "Instant", staffAug: "Limited", outsourcing: "Slow" },
  { feature: "Management Overhead", dedicated: "Low", staffAug: "High", outsourcing: "High" },
  { feature: "Contractual Flexibility", dedicated: "Flexible", staffAug: "Per-Project", outsourcing: "Long-Term Only" },
]

const ANDROID_COMPARISON_ROWS = [
  { feature: "Time to Start", dedicated: "5–7 Days", staffAug: "1–3 Days", outsourcing: "30–90 Days" },
  { feature: "Cost Predictability", dedicated: "Fixed Monthly", staffAug: "Variable", outsourcing: "High Fixed Cost" },
  { feature: "Skill Depth", dedicated: "Senior Vetted", staffAug: "Mixed", outsourcing: "Varies" },
  { feature: "Device Fragmentation Handling", dedicated: "High", staffAug: "Variable", outsourcing: "Varies" },
  { feature: "Scalability", dedicated: "Instant", staffAug: "Limited", outsourcing: "Slow" },
  { feature: "Management Overhead", dedicated: "Low", staffAug: "High", outsourcing: "High" },
  { feature: "Contractual Flexibility", dedicated: "Flexible", staffAug: "Per-Project", outsourcing: "Long-Term Only" },
]

const REACT_COMPARISON_ROWS = [
  { feature: "Time to Start", dedicated: "5–7 Days", staffAug: "1–3 Days", outsourcing: "30–90 Days" },
  { feature: "Cost Predictability", dedicated: "Fixed Monthly", staffAug: "Variable", outsourcing: "High Fixed Cost" },
  { feature: "Skill Depth", dedicated: "Senior Vetted", staffAug: "Mixed", outsourcing: "Varies" },
  { feature: "UI/UX Consistency", dedicated: "High", staffAug: "Variable", outsourcing: "High" },
  { feature: "Scalability", dedicated: "Instant", staffAug: "Limited", outsourcing: "Slow" },
  { feature: "Management Overhead", dedicated: "Low", staffAug: "High", outsourcing: "High" },
  { feature: "Contractual Flexibility", dedicated: "Flexible", staffAug: "Per-Project", outsourcing: "Long-Term Only" },
]

const FULL_STACK_COMPARISON_ROWS = [
  { feature: "Time to Start", dedicated: "5–7 Days", staffAug: "1–3 Days", outsourcing: "30–90 Days" },
  { feature: "Cost Predictability", dedicated: "Fixed Monthly", staffAug: "Variable", outsourcing: "High Fixed Cost" },
  { feature: "Skill Depth", dedicated: "Senior Vetted", staffAug: "Mixed", outsourcing: "Varies" },
  { feature: "Frontend + Backend Coverage", dedicated: "Single Engineer/Team", staffAug: "Variable", outsourcing: "Often Split Roles" },
  { feature: "Scalability", dedicated: "Instant", staffAug: "Limited", outsourcing: "Slow" },
  { feature: "Management Overhead", dedicated: "Low", staffAug: "High", outsourcing: "High" },
  { feature: "Contractual Flexibility", dedicated: "Flexible", staffAug: "Per-Project", outsourcing: "Long-Term Only" },
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
      title: "Core React & Architecture",
      icon: Code2,
      items: [
        "React 18+ (Hooks, Suspense, Server Components)",
        "Next.js for SSR, SSG, and ISR",
        "Component-driven architecture & design systems",
        "TypeScript across components, hooks, and utilities"
      ],
      description: "Architecture decisions made upfront — not patched in later — so your codebase stays maintainable as your team and feature set grow."
    },
    {
      title: "State Management & Data Layer",
      icon: Brain,
      items: [
        "Redux Toolkit / Zustand / Jotai / Recoil",
        "React Query / TanStack Query / SWR",
        "GraphQL clients — Apollo, Relay, urql",
        "Context API for scoped state needs"
      ],
      description: "The right state management tool for the actual problem — not Redux by default for every app, regardless of complexity."
    },
    {
      title: "Styling, Testing & Build Tooling",
      icon: Settings2,
      items: [
        "Tailwind CSS / Styled Components / CSS Modules",
        "Jest, React Testing Library, Cypress for E2E",
        "Vite / Webpack configuration & bundle optimisation",
        "Storybook for component documentation"
      ],
      description: "Fast build pipelines, meaningful test coverage, and styling systems that scale across design tokens and themes."
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
  "devops-engineers": [
    {
      title: "Orchestration & Automation",
      icon: Layers,
      items: ["Kubernetes (EKS / GKE / AKS) & Helm", "Docker & container lifecycle management", "Terraform / Pulumi / Ansible / Chef", "Infrastructure as Code (IaC)"],
      description: "We automate everything that can be automated — provisioning, scaling, patching, and recovery — so your engineers spend time building products, not babysitting servers."
    },
    {
      title: "CI/CD & Developer Pipelines",
      icon: Terminal,
      items: ["GitHub Actions / GitLab CI / Jenkins", "ArgoCD / Flux for GitOps", "Testing gates & rollback strategies", "Secrets management (Vault, SOPS)"],
      description: "Deployment pipelines built for speed and safety — so every release is a non-event, not a fire drill."
    },
    {
      title: "Cloud, Security & Observability",
      icon: ShieldCheck,
      items: ["AWS / GCP / Azure", "Prometheus / Grafana / Datadog", "CIS benchmarks, SOC 2, RBAC", "Cost optimisation & FinOps"],
      description: "Cloud environments designed for resilience, observability, and compliance — with cost kept firmly in check."
    }
  ],
  "fullstack-developers": [
    {
      title: "Frontend Engineering",
      icon: Layers,
      items: [
        "React, Next.js, Vue, Angular",
        "TypeScript across components and shared types",
        "Tailwind CSS, Styled Components, design system integration",
        "State management — Redux Toolkit, Zustand, React Query",
      ],
      description: "Our developers know when a server-rendered Next.js app is the right call and when a pure SPA fits the product better.",
    },
    {
      title: "Backend & Database Architecture",
      icon: Cpu,
      items: [
        "Node.js (Express, NestJS), Python (Django, FastAPI), Java (Spring Boot)",
        "PostgreSQL, MySQL, MongoDB, Redis",
        "REST & GraphQL API design, authentication, authorization",
        "Microservices, message queues (Kafka, RabbitMQ)",
      ],
      description: "Deep backend expertise for the systems that hold your product together — data modeling, scalability, and security.",
    },
    {
      title: "DevOps, Testing & Deployment",
      icon: Database,
      items: [
        "Docker, Kubernetes, CI/CD pipelines (GitHub Actions, Jenkins)",
        "AWS, GCP, Azure cloud infrastructure",
        "Jest, Cypress, Playwright for end-to-end testing",
        "Monitoring & observability (Datadog, Sentry, Grafana)",
      ],
      description: "Production-grade pipelines that get your application deployed reliably and stay observable once it's live.",
    },
  ],
  "full-stack-developers": [
    {
      title: "Frontend Engineering",
      icon: Layers,
      items: [
        "React, Next.js, Vue, Angular",
        "TypeScript across components and shared types",
        "Tailwind CSS, Styled Components, design system integration",
        "State management — Redux Toolkit, Zustand, React Query",
      ],
      description: "Our developers know when a server-rendered Next.js app is the right call and when a pure SPA fits the product better.",
    },
    {
      title: "Backend & Database Architecture",
      icon: Cpu,
      items: [
        "Node.js (Express, NestJS), Python (Django, FastAPI), Java (Spring Boot)",
        "PostgreSQL, MySQL, MongoDB, Redis",
        "REST & GraphQL API design, authentication, authorization",
        "Microservices, message queues (Kafka, RabbitMQ)",
      ],
      description: "Deep backend expertise for the systems that hold your product together — data modeling, scalability, and security.",
    },
    {
      title: "DevOps, Testing & Deployment",
      icon: Database,
      items: [
        "Docker, Kubernetes, CI/CD pipelines (GitHub Actions, Jenkins)",
        "AWS, GCP, Azure cloud infrastructure",
        "Jest, Cypress, Playwright for end-to-end testing",
        "Monitoring & observability (Datadog, Sentry, Grafana)",
      ],
      description: "Production-grade pipelines that get your application deployed reliably and stay observable once it's live.",
    },
  ],
  "ios-developers": [
    {
      title: "Core Language & UI Frameworks",
      icon: Code2,
      items: [
        "Swift 5+ / SwiftUI / UIKit",
        "Combine & async/await for concurrency",
        "MVVM / Clean Architecture / Coordinator pattern",
        "Human Interface Guidelines (HIG) compliance"
      ],
      description: "Our developers build interfaces that feel native to iOS — not web views wrapped in a native shell, and not Android patterns ported over without adaptation."
    },
    {
      title: "Data, Networking & Native Integrations",
      icon: Cpu,
      items: [
        "Core Data / SwiftData / Realm",
        "URLSession / Alamofire for networking",
        "Push Notifications (APNs), HealthKit, ARKit, CoreML",
        "Sign in with Apple, Apple Pay, Face ID / Touch ID"
      ],
      description: "Deep integration with Apple's native frameworks — the features that make an app feel like it belongs on iOS, not just compiled for it."
    },
    {
      title: "Testing, CI/CD & App Store Deployment",
      icon: Settings2,
      items: [
        "XCTest / XCUITest for unit and UI testing",
        "Fastlane for automated builds and releases",
        "TestFlight beta distribution management",
        "App Store Connect submission & compliance review"
      ],
      description: "Production pipelines that minimise App Store rejection risk and get your releases into users' hands on schedule."
    }
  ],
  "android-developers": [
    {
      title: "Core Language & UI Frameworks",
      icon: Code2,
      items: [
        "Kotlin / Jetpack Compose / XML Views",
        "Coroutines & Flow for asynchronous programming",
        "MVVM / MVI / Clean Architecture",
        "Material Design 3 compliance"
      ],
      description: "Our developers build with Compose-first thinking while maintaining legacy View-based code where migration isn't yet justified."
    },
    {
      title: "Data, Networking & Native Integrations",
      icon: Cpu,
      items: [
        "Room / DataStore for local persistence",
        "Retrofit / OkHttp / Ktor for networking",
        "Firebase (FCM, Crashlytics, Remote Config, Analytics)",
        "CameraX, Biometric API, Google Pay, Maps SDK"
      ],
      description: "Deep integration with Google's native frameworks and Play Services — the features that make an app feel purpose-built for Android, not ported."
    },
    {
      title: "Testing, CI/CD & Play Store Deployment",
      icon: Settings2,
      items: [
        "JUnit / Espresso / Compose Testing for UI tests",
        "Gradle build optimisation & flavors",
        "GitHub Actions / Bitrise for CI/CD",
        "Play Console release tracks & staged rollouts"
      ],
      description: "Production pipelines built for device fragmentation testing and controlled rollouts that catch issues before they reach your full user base."
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
    { title: "Custom Web Application Frontends", description: "SaaS dashboards, admin panels, customer portals, and marketing sites built with React and Next.js — optimised for Core Web Vitals and SEO from the first commit, not retrofitted before launch.", graphicType: "radar" },
    { title: "Design System & Component Library Development", description: "Scalable, themeable component libraries with documented props, accessibility built in (WCAG-compliant), and Storybook coverage — so design and engineering stop reinventing the same button.", graphicType: "loss-curve" },
    { title: "AI-Integrated Frontend Experiences", description: "React interfaces wired to AI backends — chat UIs, streaming responses, RAG-powered search bars, and agent status dashboards — built for the latency and UX patterns AI features actually need.", graphicType: "node-graph" },
    { title: "Performance Optimisation & Testing", description: "Bundle size audits, code-splitting strategy, lazy loading, and comprehensive test suites — so your React app stays fast and stable as it scales past its first thousand users.", graphicType: "shield" }
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
  "devops-engineers": [
    { title: "Cloud Infrastructure Setup", description: "Greenfield cloud environments built from scratch, or legacy cloud setups migrated with zero-downtime.", graphicType: "radar" },
    { title: "CI/CD Pipeline Engineering", description: "End-to-end deployment pipelines that take code from commit to production safely with automated testing.", graphicType: "node-graph" },
    { title: "Kubernetes & Containers", description: "Production-grade Kubernetes clusters with multi-tenant namespace design and autoscaling policies.", graphicType: "shield" },
    { title: "Observability & SRE", description: "Logging pipelines, metric dashboards, alerting rules, and post-incident review frameworks.", graphicType: "loss-curve" }
  ],
  "fullstack-developers": [
    { title: "End-to-End Application Development", description: "A single developer or team owns the full request lifecycle — from UI component to API endpoint to database query — eliminating the handoff gaps that slow down feature delivery.", graphicType: "radar" },
    { title: "API & Third-Party Integration", description: "Custom REST and GraphQL APIs, payment gateways (Stripe, Razorpay), authentication providers (Auth0, Firebase Auth), and any SDK your product needs to connect to.", graphicType: "loss-curve" },
    { title: "AI-Powered Web Experiences", description: "Full stack applications wired to AI backends — LLM-powered features, RAG pipelines, AI chat interfaces, and real-time AI feature delivery built with production-grade rate limiting and caching.", graphicType: "node-graph" },
    { title: "Performance Optimisation & QA", description: "Query optimisation, caching strategy, bundle size audits, and end-to-end test suites — so your application stays fast and stable as usage grows.", graphicType: "shield" },
  ],
  "full-stack-developers": [
    { title: "End-to-End Application Development", description: "A single developer or team owns the full request lifecycle — from UI component to API endpoint to database query — eliminating the handoff gaps that slow down feature delivery.", graphicType: "radar" },
    { title: "API & Third-Party Integration", description: "Custom REST and GraphQL APIs, payment gateways (Stripe, Razorpay), authentication providers (Auth0, Firebase Auth), and any SDK your product needs to connect to.", graphicType: "loss-curve" },
    { title: "AI-Powered Web Experiences", description: "Full stack applications wired to AI backends — LLM-powered features, RAG pipelines, AI chat interfaces, and real-time AI feature delivery built with production-grade rate limiting and caching.", graphicType: "node-graph" },
    { title: "Performance Optimisation & QA", description: "Query optimisation, caching strategy, bundle size audits, and end-to-end test suites — so your application stays fast and stable as usage grows.", graphicType: "shield" },
  ],
  "ios-developers": [
    { title: "Native iOS App Development", description: "SwiftUI and UIKit applications built from the ground up — consumer apps, enterprise tools, and SaaS companion apps — architected for maintainability as your feature set grows.", graphicType: "radar" },
    { title: "Apple Ecosystem & SDK Integrations", description: "HealthKit, ARKit, CoreML, Apple Pay, Sign in with Apple, and Watch app companion development — the integrations that differentiate a good iOS app from a merely functional one.", graphicType: "loss-curve" },
    { title: "On-Device AI & ML Features", description: "CoreML model integration for on-device inference, AI-powered camera features, and intelligent text/image processing — built for the privacy and performance expectations iOS users have.", graphicType: "node-graph" },
    { title: "Performance Optimisation & App Store Readiness", description: "Instruments profiling for memory and battery usage, crash-free session targets, accessibility (VoiceOver) compliance, and App Store guideline review before every submission.", graphicType: "shield" }
  ],
  "android-developers": [
    { title: "Native Android App Development", description: "Kotlin and Jetpack Compose applications built from the ground up — consumer apps, enterprise tools, and SaaS companion apps — architected to handle the device and OS-version fragmentation unique to Android.", graphicType: "radar" },
    { title: "Google Ecosystem & Play Services Integration", description: "Firebase, Google Pay, Maps SDK, CameraX, and Wear OS companion development — the integrations that connect your app meaningfully into the broader Android and Google ecosystem.", graphicType: "loss-curve" },
    { title: "On-Device AI & ML Features", description: "ML Kit and TensorFlow Lite model integration for on-device inference, AI-powered camera features, and intelligent text processing — optimised for the wide range of hardware capabilities across Android devices.", graphicType: "node-graph" },
    { title: "Performance Optimisation & Device Compatibility", description: "Android Profiler analysis for memory and battery usage, ANR (App Not Responding) prevention, accessibility (TalkBack) compliance, and compatibility testing across manufacturer-specific Android skins.", graphicType: "shield" }
  ]
}

const BOTTOM_BANNERS: Record<string, {
  headline: string
  description: string
  primaryCta: string
  secondaryCta: string
  footer?: string
}> = {
  "ios-developers": {
    headline: "Ready to Ship on the App Store?",
    description: "Stop wrestling with App Store rejections and HIG compliance issues. Get a dedicated iOS developer who builds apps that feel native and pass review the first time.",
    primaryCta: "Get a Quote for iOS Experts",
    secondaryCta: "Talk to an iOS Strategist",
  },
  "android-developers": {
    headline: "Ready to Ship on the Play Store?",
    description: "Stop debugging device-specific crashes after launch. Get a dedicated Android developer who builds for fragmentation from day one and ships apps that hold up across real-world devices.",
    primaryCta: "Get a Quote for Android Experts",
    secondaryCta: "Talk to an Android Strategist",
  },
  "reactjs-developers": {
    headline: "Ready to Build an Interface That Scales?",
    description: "Stop accumulating UI debt with every new feature. Get a dedicated React developer who architects components your team can build on for years, not just for the next sprint.",
    primaryCta: "Get a Quote for React.js Experts",
    secondaryCta: "Talk to a Frontend Strategist",
  },
  "react-native-developers": {
    headline: "Ready to Ship to Both App Stores?",
    description: "Stop wrestling with platform-specific bugs and slow releases. Get a dedicated React Native developer who builds apps that feel native on both iOS and Android.",
    primaryCta: "Get a Quote for React Native Experts",
    secondaryCta: "Talk to a Mobile Strategist",
  },
  "devops-engineers": {
    headline: "Ready to Scale Your Infrastructure?",
    description: "Stop wrestling with deployment failures and downtime. Get a dedicated DevOps engineer who builds systems that work so you can focus on building your product.",
    primaryCta: "Get a Quote for DevOps Engineers",
    secondaryCta: "Talk to an Infrastructure Strategist",
  },
  "flutter-developers": {
    headline: "Ready to Launch a Beautiful Mobile App?",
    description: "Stop maintaining two native codebases. Get a dedicated Flutter developer who builds responsive, pixel-perfect iOS and Android apps from a single codebase.",
    primaryCta: "Get a Quote for Flutter Experts",
    secondaryCta: "Talk to a Flutter Strategist",
  },
  "nodejs-developers": {
    headline: "Ready to Scale Your API Infrastructure?",
    description: "Stop debugging API latency and server bottlenecks under load. Get a dedicated Node.js developer who builds fast, reliable backend systems that scale.",
    primaryCta: "Get a Quote for Node.js Experts",
    secondaryCta: "Talk to a Backend Strategist",
  },
  "fullstack-developers": {
    headline: "Ready to Ship Faster, End to End?",
    description: "Stop splitting your roadmap across separate frontend and backend hires. Get a dedicated full stack developer who owns the entire feature, from interface to infrastructure.",
    primaryCta: "Get a Quote for Full Stack Experts",
    secondaryCta: "Talk to a Technical Strategist",
  },
  "full-stack-developers": {
    headline: "Ready to Ship Faster, End to End?",
    description: "Stop splitting your roadmap across separate frontend and backend hires. Get a dedicated full stack developer who owns the entire feature, from interface to infrastructure.",
    primaryCta: "Get a Quote for Full Stack Experts",
    secondaryCta: "Talk to a Technical Strategist",
  },
  "mern-developers": {
    headline: "Ready to Build with Battle-Tested MERN Talent?",
    description: "Stop losing months in slow recruitment cycles. Get a dedicated MERN stack developer embedded in your team within days to build scalable JavaScript web apps.",
    primaryCta: "Get a Quote for MERN Experts",
    secondaryCta: "Talk to a MERN Strategist",
  },
  "ai-ml-developers": {
    headline: "Ready to Put Production-Grade Models to Work?",
    description: "Stop stalling your AI features in staging notebooks. Get a dedicated AI/ML engineer who integrates intelligent models, RAG pipelines, and low-latency inference.",
    primaryCta: "Get a Quote for AI/ML Experts",
    secondaryCta: "Talk to an AI Strategist",
  },
  "software-developers": {
    headline: "Ready to Scale Your Engineering Team?",
    description: "Stop compromising on code quality. Get a dedicated software developer who hits the ground running, writes clean code, and embeds seamlessly into your sprints.",
    primaryCta: "Get a Quote for Software Experts",
    secondaryCta: "Talk to an Engineering Strategist",
  }
}

export default function HireResourceDetail({ resource }: { resource: HireResource }) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const slug = resource.slug
  const isFlutter = slug === "flutter-developers"
  const isReactNative = slug === "react-native-developers"
  const isDevOps = slug === "devops-engineers"
  const isIos = slug === "ios-developers"
  const isAndroid = slug === "android-developers"
  const isReact = slug === "reactjs-developers"
  const isFullStack = slug === "full-stack-developers"
  const titleInfo = parseTitleInfo(resource.heroTitle)
  const customSubheading = SUBHEADINGS[slug] || resource.subheading
  const skillColumns = SKILL_MATRICES[slug] || SKILL_MATRICES["flutter-developers"]
  const deliverables = DELIVERABLES[slug] || DELIVERABLES["flutter-developers"]
  const comparisonRows = isFlutter
    ? FLUTTER_COMPARISON_ROWS
    : isReactNative
      ? REACT_NATIVE_COMPARISON_ROWS
      : isDevOps
        ? DEVOPS_COMPARISON_ROWS
        : isIos
          ? IOS_COMPARISON_ROWS
          : isAndroid
            ? ANDROID_COMPARISON_ROWS
            : isReact
              ? REACT_COMPARISON_ROWS
              : isFullStack
                ? FULL_STACK_COMPARISON_ROWS
                : DEFAULT_COMPARISON_ROWS

  const whyHireSection = isFlutter ? getSection(resource, "Why Hire Dedicated Flutter Developers?") : null
  const deliverablesSection = isFlutter ? getSection(resource, "What Your Dedicated Flutter Developers Will Deliver") : ((isReactNative || isDevOps || isIos || isAndroid || isReact || isFullStack) ? getSection(resource, "Production Deliverables") : null)
  const integrationSection = isFlutter ? getSection(resource, "Seamless 3-Step Integration") : ((isReactNative || isDevOps || isIos || isAndroid || isReact || isFullStack) ? getSection(resource, "Seamless 3-Step Integration") : null)
  const rolesSection = isFlutter ? getSection(resource, "Flutter Roles You Can Hire") : null
  const engagementSection = isFlutter ? getSection(resource, "Flexible Engagement Models") : null
  const comparisonSection = isFlutter
    ? getSection(resource, "How Dedicated Flutter Developers Compare")
    : isReactNative
      ? getSection(resource, "Why Dedicated Beats Every Other Option for React Native Talent")
      : isDevOps
        ? getSection(resource, "Why Dedicated Beats Every Other Option for DevOps Talent")
        : isIos
          ? getSection(resource, "Why Dedicated Beats Every Other Option for iOS Talent")
          : isAndroid
            ? getSection(resource, "Why Dedicated Beats Every Other Option for Android Talent")
            : isReact
              ? getSection(resource, "Why Dedicated Beats Every Other Option for React Talent")
              : isFullStack
                ? getSection(resource, "Why Dedicated Beats Every Other Option for Full Stack Talent")
                : null
  const whyToadsterSection = isFlutter ? getSection(resource, "Why Toadster Technologies?") : null
  const pricingSection = isFlutter ? getSection(resource, "How Much Does It Cost to Hire Dedicated Flutter Developers?") : null
  const skillMatrixSection = isFlutter
    ? getSection(resource, "Tech Stack & Skill Matrix")
    : isReactNative
      ? getSection(resource, "Tech Stack & Capabilities")
      : (isDevOps || isIos || isAndroid || isReact || isFullStack)
        ? getSection(resource, "Tech Stack & Skill Matrix")
        : null

  const heroCtaData = isIos
    ? {
      primary: "Hire iOS Experts →",
      secondary: "View Portfolio",
      badges: ["⭐ 4.9/5 on Clutch", "50+ iOS apps shipped", "8 countries served"]
    }
    : isDevOps
      ? {
        primary: "Hire DevOps Engineers →",
        secondary: "View Portfolio",
        badges: ["⭐ 4.9/5 on Clutch", "70+ infrastructure projects delivered", "8 countries served"]
      }
      : isReactNative
        ? {
          primary: "Hire React Native Experts →",
          secondary: "View Portfolio",
          badges: ["⭐ 4.9/5 on Clutch", "60+ apps shipped", "8 countries served"]
        }
        : isAndroid
          ? {
            primary: "Hire Android Experts →",
            secondary: "View Portfolio",
            badges: ["⭐ 4.9/5 on Clutch", "55+ Android apps shipped", "8 countries served"]
          }
          : isReact
            ? {
              primary: "Hire React.js Experts →",
              secondary: "View Portfolio",
              badges: ["⭐ 4.9/5 on Clutch", "100+ React projects delivered", "8 countries served"]
            }
            : isFullStack
              ? {
                primary: "Hire Full Stack Experts →",
                secondary: "View Portfolio",
                badges: ["⭐ 4.9/5 on Clutch", "70+ full stack products shipped", "8 countries served"]
              }
              : null

  const bottomBanner = BOTTOM_BANNERS[slug] || BOTTOM_BANNERS["software-developers"]

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

  const integrationSteps = integrationSection?.items
    ? integrationSection.items
    : [
      { title: "Technical Scoping", body: `Share your project requirements, tech stack, timelines, and skill expectations. We map the right ${titleInfo.highlight} talent to your needs.` },
      { title: "Vetting & Matching", body: `We shortlist pre-vetted senior ${titleInfo.highlight} developers. You interview, assess, and select your preferred candidate - no obligation.` },
      { title: "Dedicated Onboarding", body: "Your developer joins your team, your tools (Jira, Slack, GitHub), and your sprints - fully productive within 48 hours of onboarding." },
    ]

  const processSteps: ProcessStepItem[] = integrationSteps.map((step, index) => ({
    id: String(index + 1).padStart(2, "0"),
    title: step.title.replace(/^\d+\s*(?:—|-)\s*/, ""),
    description: step.body,
    Icon: INTEGRATION_STEP_ICONS[index] ?? Search,
  }))

  return (
    <div className={`hire-page-shell relative isolate w-full max-w-full overflow-x-clip text-page-fg font-sans min-h-screen pt-24 sm:pt-28 ${isDark ? 'homepage-mesh-shell' : ''}`}>
      {isDark && <HomepageMeshBg />}

      <div className="hire-page-container min-w-0">
        {/* ── SECTION 1: HERO SECTION ── */}
        <section className="relative z-10 mx-auto mb-12 max-w-9xl px-3 sm:mb-16 sm:px-6 lg:mb-20 lg:px-16">
          <div className="grid min-w-0 grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">

            {/* Left Column (Hero Content) */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left pt-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-toadster-green uppercase">
                {categoryEyebrow}
              </span>

              <h1 className="text-[1.875rem] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-page-fg leading-[1.15]">
                {isFlutter ? (
                  <>
                    Hire Expert{" "}
                    <span className="text-toadster-green">Flutter Developers</span>
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
                <p className="text-base sm:text-lg text-page-fg-muted leading-relaxed max-w-2xl">
                  {customSubheading}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-2">
                {heroCtaData ? (
                  <>
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-toadster-green hover:bg-[var(--primary-hover)] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all"
                    >
                      {heroCtaData.primary}
                    </button>
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-page-border hover:bg-page-accent-soft px-7 py-3.5 text-sm font-bold text-page-fg transition-all"
                    >
                      {heroCtaData.secondary}
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-toadster-green hover:bg-[var(--primary-hover)] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all"
                  >
                    {isFlutter ? "Hire Flutter Experts" : `Hire ${titleInfo.highlight} Experts`}
                    <ArrowUpRight size={16} />
                  </button>
                )}
              </div>

              {/* Trust Badges */}
              {heroCtaData && (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-semibold text-page-fg-muted mt-2">
                  {heroCtaData.badges.map((badge, idx) => (
                    <span key={badge} className="flex items-center gap-3">
                      {idx > 0 && <span className="text-page-border" aria-hidden="true">|</span>}
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Stat Row */}
              {!heroCtaData && (
              <div className={`grid gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-page-border mt-4 ${isFlutter ? "grid-cols-2 sm:grid-cols-4 max-w-3xl" : "grid-cols-3 max-w-xl"}`}>
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-page-fg">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-page-fg-muted mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              )}
            </div>

            {/* Right Column (Form Panel) */}
            <div id="hire-rfp-form" className="lg:col-span-5">
              <HireResourceRfpForm
                roleTitle={resource.heroTitle}
                formSubtext={
                  isFullStack
                    ? "Tell us your project requirements and we'll match you with the right full stack developer within 24 hours."
                    : isAndroid
                      ? "Tell us your project requirements and we'll match you with the right Android developer within 24 hours."
                      : isReact
                        ? "Tell us your project requirements and we'll match you with the right React developer within 24 hours."
                        : isFlutter
                          ? "Tell us about your Flutter project and we'll connect you with the right developer within 24 hours."
                          : undefined
                }
                submitFooterText={
                  (isFullStack || isAndroid || isReact) ? (
                    <span>
                      We&apos;ll review your CV details.{" "}
                      <a href="/contact" className="text-toadster-green hover:underline">
                        Schedule a call instead
                      </a>
                    </span>
                  ) : isFlutter ? (
                    "No commitment required. We'll reach out within 24 hours."
                  ) : undefined
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
                projectBriefLabel={(isFullStack || isAndroid || isReact) ? "Tell us about your project" : undefined}
              />
            </div>

          </div>
        </section>

        {/* ── SECTION 2: TECH STACK & SKILL MATRIX ── */}
        <section className="relative z-10 px-3 py-2 sm:px-6 lg:px-16">
          <div className="mx-auto mb-16 flex max-w-7xl min-w-0 flex-col gap-3 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-page-fg-muted">

            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
              {(isFlutter || isAndroid || isReact || isFullStack) ? "Tech Stack & Skill Matrix" : `Advanced ${titleInfo.highlight} Skill Matrix`}
            </h2>
            <p className="text-page-fg-muted max-w-2xl mx-auto leading-relaxed text-sm sm:text-base font-medium">
              {skillMatrixSection?.body ??
                `Our ${titleInfo.highlight} developers are proficient across the complete cross-platform mobile ecosystem - from UI to backend integrations.`}
            </p>
          </div>

          <div className="grid w-full min-w-0 grid-cols-1 items-stretch gap-5 md:grid-cols-3">
            {skillColumns.map((col, index) => {
              const IconComponent = col.icon
              return (
                <HireRoleCard
                  key={col.title}
                  title={col.title}
                  icon={IconComponent}
                  tags={col.items}
                  description={col.description}
                  index={index}
                />
              )
            })}
          </div>
        </section>

        <section className="relative z-10 px-3 py-10 sm:px-6 lg:px-16">
          <div className="mx-auto min-w-0 max-w-7xl">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight leading-tight text-center">
                {isFlutter ? "Why Hire Dedicated Flutter Developers?" : "Solve Critical Delivery Bottlenecks"}
              </h2>
              <p className="text-page-fg-muted leading-relaxed text-sm sm:text-base text-center">
                {whyHireSection?.body ??
                  `Businesses building software products face a common set of challenges. Dedicated ${titleInfo.highlight} developers solve them.`}
              </p>
            </div>
            <div className="mt-8 grid min-w-0 grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">

              {/* Left Info & Graphic Column */}
              <div className="flex min-w-0 flex-col gap-5 text-left lg:col-span-5">
                {/* Desktop graphic – no border/background, just the green computer */}
                <div className="mt-4 flex justify-center lg:justify-start">
                  <Image
                    src="/monitor_code_graphic.png"
                    alt="Monitor code visual"
                    width={520}
                    height={360}
                    className="w-full max-w-[420px] lg:max-w-full h-auto drop-shadow-xl"
                    unoptimized
                  />
                </div>
              </div>

              {/* Right Bottlenecks Grid */}
              <div className="hire-challenges-grid grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
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
        <section className="relative z-10 mx-auto min-w-0 max-w-7xl px-3 py-10 sm:px-6 lg:px-16">
          <div className="bg-[#003820] dark:bg-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col gap-12">

            {/* Header */}
            <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-black">
                {isFlutter ? "What Your Dedicated Flutter Developers Will Deliver" : ((isReactNative || isDevOps || isIos || isAndroid || isReact || isFullStack) ? "Production Deliverables" : "Enterprise Grade Deliverables")}
              </h2>
              <p className="text-[#a0c5b3] dark:text-gray-600 text-sm sm:text-base leading-relaxed">
                {deliverablesSection?.body ??
                  `Vetted ${titleInfo.highlight} developers deliver rigorous engineering standards for robust, scalable mobile applications.`}
              </p>
            </div>

            {/* Asymmetric Grid */}
            <div className="grid min-w-0 grid-cols-1 items-stretch gap-8 lg:grid-cols-12">

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
                  {isFlutter && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["BLOC/CUBIT", "RIVERPOD", "GETX"].map((badge) => (
                        <span key={badge} className="px-3 py-1 rounded bg-[#003820] dark:bg-green-100 text-xs font-bold text-emerald-400 dark:text-green-800">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Row (2 Equal Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">

                  {/* Bottom Left Card */}
                  <div className="bg-[#004d2d] dark:bg-gray-50 dark:border dark:border-gray-200 rounded-2xl p-7 border border-emerald-900/40 flex flex-col gap-5 text-left">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-extrabold text-xl leading-snug text-white dark:text-black">{deliverables[2].title}</h3>
                      <p className="text-[#a0c5b3] dark:text-gray-600 text-sm leading-relaxed">
                        {deliverables[2].description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Right Card */}
                  <div className="bg-[#004d2d] dark:bg-gray-50 dark:border dark:border-gray-200 rounded-2xl p-7 border border-emerald-900/40 flex flex-col gap-5 text-left">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-extrabold text-xl leading-snug text-white dark:text-black">{deliverables[3].title}</h3>
                      <p className="text-[#a0c5b3] dark:text-gray-600 text-sm leading-relaxed">
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
        <section className="relative z-10 mx-auto min-w-0 max-w-7xl px-3 py-10 sm:px-6 lg:px-16">
          <div className="text-center flex flex-col gap-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
              Seamless 3-Step Integration
            </h2>
            <p className="text-page-fg-muted max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
              {integrationSection?.body ?? `From brief to building - your dedicated ${titleInfo.highlight} developer is live in under a week.`}
            </p>
          </div>

          <div className="mt-12 md:mt-14">
            <ProcessSteps steps={processSteps} />
          </div>
        </section>

        {/* ── SECTION 6: FLUTTER ROLES YOU CAN HIRE ── */}
        {isFlutter && rolesSection?.items && (
          <section className="relative z-10 mx-auto min-w-0 max-w-7xl px-3 py-10 sm:px-6 lg:px-16">
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
          <section className="relative z-10 mx-auto min-w-0 max-w-7xl px-3 py-10 sm:px-6 lg:px-16">
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
        <section className="relative z-10 mx-auto min-w-0 max-w-7xl px-3 py-10 sm:px-6 lg:px-16">
          <div className="text-center flex flex-col gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-page-fg tracking-tight">
              {isFlutter ? "How Dedicated Flutter Developers Compare" : (isReactNative ? "Why Dedicated Beats Every Other Option for React Native Talent" : (isDevOps ? "Why Dedicated Beats Every Other Option for DevOps Talent" : (isIos ? "Why Dedicated Beats Every Other Option for iOS Talent" : (isAndroid ? "Why Dedicated Beats Every Other Option for Android Talent" : (isReact ? "Why Dedicated Beats Every Other Option for React Talent" : (isFullStack ? "Why Dedicated Beats Every Other Option for Full Stack Talent" : "The Toadster Advantage"))))))}
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
                  <th className="px-6 py-4.5 font-bold text-sm">{(isAndroid || isReact || isFullStack) ? "Criteria" : "Feature"}</th>
                  <th className="px-6 py-4.5 font-bold text-sm">{isIos ? "Dedicated iOS Team" : (isAndroid ? "Dedicated Android Team" : (isReact ? "Dedicated React Team" : (isFullStack ? "Dedicated Full Stack Team" : "Dedicated Developer")))}</th>
                  <th className="px-6 py-4.5 font-bold text-sm">{isFlutter ? "Staff Augmentation" : ((isReactNative || isDevOps || isIos || isAndroid || isReact || isFullStack) ? "Freelancers" : "Staffing / Agency")}</th>
                  <th className="px-6 py-4.5 font-bold text-sm">{(isReactNative || isDevOps || isIos || isAndroid || isReact || isFullStack) ? "In-House Hiring" : "Project Outsourcing"}</th>
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
          <section className="relative z-10 mx-auto min-w-0 max-w-7xl px-3 py-10 sm:px-6 lg:px-16">
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
          <section className="relative z-10 mx-auto min-w-0 max-w-7xl px-3 py-10 sm:px-6 lg:px-16">
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
        {(isFlutter || isReactNative || isDevOps || isIos || isAndroid || isReact || isFullStack) && resource.faqs.length > 0 && (
          <section className="relative z-10 mx-auto min-w-0 max-w-4xl px-3 py-10 sm:px-6 lg:px-16">
            <div className="text-center flex flex-col gap-3 mb-12">
              <h2 className="text-3xl sm:text-6xl font-extrabold text-page-fg tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-page-fg-muted text-sm sm:text-base leading-relaxed font-medium">
                Everything you need to know about hiring dedicated {isFlutter ? "Flutter" : (isReactNative ? "React Native" : (isDevOps ? "DevOps" : (isIos ? "iOS" : (isAndroid ? "Android" : (isReact ? "React.js" : (isFullStack ? "full stack" : ""))))))} developers through Toadster Technologies.
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
        <section className="relative z-10 mx-auto min-w-0 max-w-7xl px-3 py-10 sm:px-6 lg:px-16">
          <div className={isDark
            ? "bg-white text-black rounded-[1.75rem] p-8 sm:p-14 flex flex-col gap-8 items-center text-center relative overflow-hidden border border-slate-200 shadow-2xl"
            : "hire-resources-cta relative overflow-hidden rounded-[1.75rem] p-8 sm:p-14 flex flex-col gap-8 items-center text-center"
          }>

            <div className="flex flex-col gap-3 max-w-2xl">
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-slate-900' : 'text-white'}`}>
                {bottomBanner.headline}
              </h2>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-600' : 'text-white/80'}`}>
                {bottomBanner.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 z-10 w-full sm:w-auto mt-2">
              <button
                type="button"
                onClick={scrollToForm}
                className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold shadow-sm transition-all ${isDark
                  ? 'bg-[#004d2d] hover:bg-[#003820] text-white'
                  : 'bg-[#003820]/90 hover:bg-[#003820] text-white border border-white/20'
                  }`}
              >
                {bottomBanner.secondaryCta}
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>

            {bottomBanner.footer && (
              <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-500' : 'text-white/60'}`}>
                {bottomBanner.footer}
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export function HireResourceDetailBySlug({ slug }: { slug: string }) {
  const resource = HIRE_RESOURCE_BY_SLUG[slug]
  if (!resource) return null
  return <HireResourceDetail resource={resource} />
}


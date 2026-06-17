import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  Database,
  FileSearch,
  GitBranch,
  Globe,
  HeartPulse,
  Layers,
  LineChart,
  MessageSquare,
  RefreshCw,
  Scale,
  Search,
  Server,
  Shield,
  ShoppingCart,
  Sparkles,
  Target,
  TestTube2,
  Users,
  Wrench,
  Zap,
} from "lucide-react"

export const heroTrustItems = [
  "Production-grade RAG - not demos that break under load",
  "Retrieval-first architecture with systematic evaluation",
  "Multi-source ingestion from docs, APIs, and databases",
  "Full documentation and handover built in",
]

export const trustStats = [
  { number: "48h", label: "Average onboarding time" },
  { number: "40+", label: "Developers on demand" },
  { number: "3", label: "Time zones - IST · EST · GST" },
  { number: "92%", label: "Client retention rate" },
]

export const whatIsRag = {
  title: "Retrieval-Augmented Generation - Explained Simply",
  intro:
    "RAG is an AI architecture that combines the language capabilities of large language models (LLMs) with real-time retrieval from a knowledge source you control. Instead of relying solely on pre-trained knowledge, a RAG system retrieves relevant content from your documents, databases, or APIs at query time - and uses that content to generate accurate, grounded responses.",
  summary: "In simple terms: the AI looks something up before it answers.",
  outcome:
    "That means fewer hallucinations, more relevant responses, and outputs that actually reflect your business context.",
  components: [
    {
      title: "A knowledge base",
      desc: "Your documents, data, or structured content",
    },
    {
      title: "A retrieval engine",
      desc: "Vector or semantic search that finds relevant content",
    },
    {
      title: "A generation layer",
      desc: "An LLM that reads retrieved content and composes a response",
    },
  ],
}

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: GitBranch,
    title: "Custom RAG Pipeline Development",
    desc: "End-to-end design and development of RAG systems tailored to your data structure, query patterns, and business workflows. We handle ingestion, chunking, embedding, retrieval, and generation - all tuned for your use case.",
    value: "A RAG system built for how your business actually works",
    tags: ["Ingestion", "Chunking", "Embedding", "Retrieval", "Generation"],
  },
  {
    icon: BookOpen,
    title: "Enterprise Knowledge Base AI",
    desc: "Connect an LLM to your internal documentation, wikis, SOPs, and knowledge repositories. Give every employee instant, accurate answers from your company's collective knowledge - without manual search.",
    value: "Institutional knowledge available in seconds",
    tags: ["Internal docs", "Wikis", "SOPs", "Employee Q&A"],
  },
  {
    icon: MessageSquare,
    title: "RAG-Powered Customer Support",
    desc: "Build AI support systems that answer customer questions using your actual product documentation, FAQs, and support history - not generic responses. Reduce ticket volume while improving resolution quality.",
    value: "Support answers grounded in your real product knowledge",
    tags: ["Product docs", "FAQs", "Ticket deflection", "Resolution quality"],
  },
  {
    icon: FileSearch,
    title: "Document Intelligence & Research AI",
    desc: "Enable teams to query large document sets - contracts, research papers, reports, regulatory filings - through natural language. Get structured answers instead of spending hours reading PDFs.",
    value: "Hours of reading replaced by precise answers",
    tags: ["Contracts", "Research", "Regulatory filings", "Natural language query"],
  },
  {
    icon: Layers,
    title: "Multi-Source RAG Systems",
    desc: "Integrate multiple data sources into a unified retrieval layer - databases, file systems, APIs, and third-party tools - so your AI draws from the full breadth of your business data in a single query.",
    value: "One query surface across your entire data estate",
    tags: ["Databases", "APIs", "File systems", "Unified retrieval"],
  },
  {
    icon: Wrench,
    title: "RAG System Auditing & Optimization",
    desc: "If you already have a RAG system that isn't performing, we audit your retrieval quality, chunking strategies, embedding models, and prompting approaches - then rebuild for better accuracy and speed.",
    value: "Fix the RAG system you already invested in",
    tags: ["Retrieval audit", "Chunking", "Embedding tuning", "Prompt optimization"],
  },
  {
    icon: Bot,
    title: "Agentic RAG Development",
    desc: "Combine RAG with AI agents that can take actions - querying data, running calculations, triggering workflows - based on retrieved context. Ideal for complex, multi-step business processes.",
    value: "Retrieval plus action for multi-step workflows",
    tags: ["AI agents", "Workflows", "Tool use", "Multi-step processes"],
  },
  {
    icon: Database,
    title: "RAG on Structured Data (SQL + Vector Hybrid)",
    desc: "Not all business knowledge lives in documents. We build hybrid RAG systems that retrieve from both structured databases and unstructured content, giving your AI complete business context.",
    value: "Documents and databases in one retrieval layer",
    tags: ["SQL + vector", "Hybrid retrieval", "Structured data", "Warehouses"],
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    title: "Your AI gives inaccurate or outdated answers",
    desc: "Standard LLMs are trained on historical data. RAG connects them to your current knowledge, so answers reflect what's actually true today inside your business.",
  },
  {
    icon: BookOpen,
    title: "You have large volumes of internal documentation",
    desc: "When teams spend hours searching manuals, policies, reports, or contracts, RAG can surface the right content in seconds - without anyone needing to remember where it lives.",
  },
  {
    icon: Brain,
    title: "Generic AI can't answer business-specific questions",
    desc: "If your use case requires knowledge of your products, processes, clients, or industry specifics - RAG gives the model access to that context without retraining the model.",
  },
  {
    icon: CheckCircle2,
    title: "You need AI outputs you can trust and verify",
    desc: "RAG systems can cite their sources. Unlike black-box LLM outputs, a well-built RAG system can show exactly where an answer came from - which matters in regulated industries.",
  },
  {
    icon: LineChart,
    title: "Fine-tuning is too expensive or too slow",
    desc: "Fine-tuning an LLM requires significant compute, time, and labeled data. RAG achieves similar accuracy improvements for domain-specific queries at a fraction of the cost.",
  },
  {
    icon: RefreshCw,
    title: "Your data changes frequently",
    desc: "Fine-tuned models can't update without retraining. RAG retrieves fresh data at query time - so your AI knowledge base stays current as your data evolves.",
  },
]

export const industries: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Scale,
    title: "Legal & Compliance",
    desc: "Query contracts, case law, regulatory filings, and internal policies. Surface relevant precedents and clauses without manual document review.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    desc: "Enable clinical teams to query research literature, treatment protocols, and patient documentation. Improve decision support while maintaining data governance.",
  },
  {
    icon: Shield,
    title: "Financial Services",
    desc: "Build AI that understands financial reports, investment memos, market research, and risk documentation - answering analyst queries with cited, accurate outputs.",
  },
  {
    icon: Sparkles,
    title: "Technology & SaaS",
    desc: "Power developer documentation search, internal knowledge bases, product support AI, and engineering workflow tools that understand your codebase and product history.",
  },
  {
    icon: Building2,
    title: "Manufacturing & Operations",
    desc: "Give operations teams instant access to equipment manuals, maintenance records, SOPs, and quality documentation - reducing downtime and training costs.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    desc: "Build AI assistants that know your full product catalog, pricing history, and customer data - enabling personalized support and smarter merchandising decisions.",
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Search,
    title: "We start with the retrieval problem, not the LLM",
    desc: "The most common RAG failure isn't the model - it's poor retrieval. We invest heavily in data quality, chunking strategy, and retrieval evaluation before touching the generation layer.",
  },
  {
    icon: TestTube2,
    title: "We evaluate systematically, not anecdotally",
    desc: "Every RAG system we build is tested against structured evaluation frameworks. You get documented accuracy metrics, not just 'it seems to work' feedback before launch.",
  },
  {
    icon: Target,
    title: "We don't push unnecessary complexity",
    desc: "Not every RAG use case needs agents, multi-hop retrieval, or complex orchestration. We recommend the architecture that fits your actual requirements - not the most technically impressive one.",
  },
  {
    icon: BookOpen,
    title: "We document everything",
    desc: "You'll have full technical documentation of your RAG architecture, data pipeline, retrieval logic, and evaluation results - so your team can maintain, extend, or hand it off without depending on us.",
  },
  {
    icon: Server,
    title: "We work across your stack",
    desc: "Whether you're on AWS, GCP, Azure, or on-prem - and whether you're using open-source LLMs or commercial APIs - we build for your environment, not ours.",
  },
  {
    icon: Users,
    title: "Long-term partnership over single projects",
    desc: "RAG systems evolve as your data grows and use cases expand. We're structured to be a long-term technical partner - not a vendor who delivers and disappears.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Data Assessment",
    desc: "We start by understanding your use case, data sources, query types, and success criteria. We assess your data quality, volume, and structure - because what you retrieve is only as good as what's in your knowledge base.",
    deliverables: ["Use case mapping", "Data quality audit", "Success criteria"],
  },
  {
    num: "02",
    title: "Data Ingestion & Preprocessing Pipeline",
    desc: "We design and build pipelines to extract, clean, chunk, and structure your data for retrieval. This includes handling multiple file formats, removing noise, and ensuring chunks carry sufficient context for accurate retrieval.",
    deliverables: ["Ingestion pipeline", "Chunking strategy", "Data preprocessing"],
  },
  {
    num: "03",
    title: "Embedding Model Selection & Vector Store Setup",
    desc: "We select the appropriate embedding model for your content type and domain, and configure a vector database optimized for your query volume and latency requirements.",
    deliverables: ["Embedding model selection", "Vector DB setup", "Latency tuning"],
  },
  {
    num: "04",
    title: "Retrieval Architecture Design",
    desc: "We implement and test retrieval strategies - semantic search, hybrid search, re-ranking, metadata filtering, and contextual compression - evaluating each against your actual query patterns to maximize retrieval accuracy.",
    deliverables: ["Hybrid search", "Re-ranking", "Metadata filtering"],
  },
  {
    num: "05",
    title: "LLM Integration & Prompt Engineering",
    desc: "We integrate the selected LLM and engineer prompts that use retrieved context effectively - minimizing hallucinations while producing structured, actionable outputs.",
    deliverables: ["LLM integration", "Prompt engineering", "Output structuring"],
  },
  {
    num: "06",
    title: "Evaluation & Accuracy Testing",
    desc: "We run systematic RAG evaluation using metrics including faithfulness, answer relevancy, context precision, and context recall. We iterate until performance meets agreed benchmarks before any deployment.",
    deliverables: ["RAGAS evaluation", "Accuracy benchmarks", "Iteration cycles"],
  },
  {
    num: "07",
    title: "Integration & Deployment",
    desc: "We integrate the RAG system into your existing applications, APIs, or UI - and deploy to your preferred infrastructure. We handle observability, logging, and monitoring setup so you can track system performance post-launch.",
    deliverables: ["API integration", "Deployment", "Observability setup"],
  },
  {
    num: "08",
    title: "Ongoing Optimization & Support",
    desc: "RAG systems improve over time. We offer ongoing support to update your knowledge base, refine retrieval pipelines, update embedding models, and extend the system as your data and use cases grow.",
    deliverables: ["Knowledge base updates", "Pipeline refinement", "Ongoing support"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: Brain,
    title: "LLMs",
    why: "OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini, Meta LLaMA 3, Mistral, Cohere, and Falcon - selected based on your privacy, cost, and performance requirements.",
    pills: ["GPT-4o", "Claude 3.5", "Gemini", "LLaMA 3", "Mistral"],
  },
  {
    icon: Zap,
    title: "Embedding Models",
    why: "OpenAI text-embedding-3, Cohere Embed, BGE, sentence-transformers, and domain-specific fine-tuned models matched to your content type.",
    pills: ["text-embedding-3", "Cohere Embed", "BGE", "sentence-transformers"],
  },
  {
    icon: Database,
    title: "Vector Databases",
    why: "Pinecone, Weaviate, Qdrant, Chroma, Milvus, pgvector, and OpenSearch - configured for your query volume and latency targets.",
    pills: ["Pinecone", "Weaviate", "Qdrant", "pgvector", "Milvus"],
  },
  {
    icon: GitBranch,
    title: "Orchestration Frameworks",
    why: "LangChain, LlamaIndex, Haystack, and custom Python pipelines - chosen for maintainability and fit with your team's stack.",
    pills: ["LangChain", "LlamaIndex", "Haystack", "Custom pipelines"],
  },
  {
    icon: BarChart3,
    title: "Evaluation Frameworks",
    why: "RAGAS, DeepEval, TruLens, and custom benchmark suites for systematic accuracy measurement before and after deployment.",
    pills: ["RAGAS", "DeepEval", "TruLens", "Custom benchmarks"],
  },
  {
    icon: Server,
    title: "Data Ingestion & Deployment",
    why: "Apache Kafka, Airflow, LlamaParse, Unstructured.io, and deployment on AWS, GCP, Azure, Docker, Kubernetes, or serverless APIs.",
    pills: ["Airflow", "LlamaParse", "Unstructured.io", "Kubernetes"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: GitBranch,
    title: "RAG & LLM Engineers",
    desc: "Specialists in RAG architecture, embedding pipelines, retrieval optimization, and LLM integration. They know where RAG breaks and how to fix it.",
    tags: ["RAG architecture", "Embeddings", "Retrieval", "LLM integration"],
  },
  {
    icon: Server,
    title: "ML Infrastructure Engineers",
    desc: "Experts in vector databases, model serving, scalable inference, and the infrastructure that keeps RAG systems fast and reliable under real load.",
    tags: ["Vector DBs", "Model serving", "Inference", "Scalability"],
  },
  {
    icon: Database,
    title: "Data Engineers",
    desc: "Responsible for building the ingestion pipelines, preprocessing flows, and data quality processes that RAG accuracy depends on.",
    tags: ["Ingestion", "ETL", "Data quality", "Preprocessing"],
  },
  {
    icon: Layers,
    title: "Backend & API Developers",
    desc: "Integrate RAG systems into your existing applications, APIs, and platforms - ensuring seamless deployment without disrupting current workflows.",
    tags: ["API integration", "Backend", "Deployment", "Workflows"],
  },
  {
    icon: TestTube2,
    title: "QA & Evaluation Specialists",
    desc: "Test retrieval accuracy, answer quality, latency, and edge cases systematically. They define evaluation criteria and iterate until the system meets them.",
    tags: ["RAGAS", "Accuracy testing", "Latency", "Edge cases"],
  },
  {
    icon: Globe,
    title: "Solution Architects",
    desc: "Design the overall RAG system architecture - from data flow to LLM selection - balancing performance, cost, and maintainability for your specific context.",
    tags: ["Architecture", "LLM selection", "Cost optimization", "System design"],
  },
]

export const costTimelines = [
  { scope: "MVP / Proof of Concept", timeline: "3–6 weeks", investment: "Starting from $8,000" },
  { scope: "Single-Source RAG System", timeline: "6–10 weeks", investment: "$12,000 – $30,000" },
  { scope: "Multi-Source Enterprise RAG", timeline: "10–16 weeks", investment: "$30,000 – $80,000+" },
  { scope: "Agentic RAG + Integrations", timeline: "12–20 weeks", investment: "$50,000 – $120,000+" },
  { scope: "Managed RAG Services", timeline: "Ongoing", investment: "Monthly retainer from $3,000/month" },
]

export const engagementModels = [
  {
    featured: true,
    badge: "Most Popular",
    title: "Embedded Product / Team",
    who: "Best for: co-development with your engineers",
    desc: "We embed with your team to co-develop the RAG system alongside your engineers. Best for organizations that want internal ownership with expert guidance throughout the build.",
    benefits: [
      "Expert RAG guidance without losing internal ownership",
      "Knowledge transfer built into every sprint",
      "Architecture decisions made collaboratively",
      "Flexible engagement duration",
    ],
  },
  {
    featured: false,
    title: "Team Augmentation",
    who: "Best for: adding RAG expertise to your team",
    desc: "Add RAG-specific expertise to your existing team without a full agency engagement. Ideal when you have engineering capacity but lack specialized RAG or LLM infrastructure experience.",
    benefits: [
      "RAG engineers embedded in your tools and workflows",
      "Start within 48–72 hours",
      "Scale seniority up or down as needed",
      "No long-term commitment required",
    ],
  },
  {
    featured: false,
    title: "Fixed Scope Project",
    who: "Best for: well-defined RAG deliverables",
    desc: "A defined RAG development engagement with clear deliverables, timelines, and pricing. Best for well-scoped use cases where requirements are reasonably understood upfront.",
    benefits: [
      "Output-based pricing with clear milestones",
      "Delivered in 6–16 weeks depending on scope",
      "Full documentation and handover",
      "Optional ongoing managed support",
    ],
  },
  {
    featured: false,
    title: "Managed RAG Services",
    who: "Best for: ongoing AI capability without in-house MLOps",
    desc: "We build, deploy, monitor, and continuously improve your RAG system on an ongoing basis. Best for organizations that want a managed AI capability without building an in-house MLOps team.",
    benefits: [
      "Continuous knowledge base updates",
      "Retrieval pipeline monitoring and refinement",
      "Model and embedding updates as needed",
      "Monthly retainer from $3,000/month",
    ],
  },
]

export const faqs = [
  {
    question: "What's the difference between RAG and fine-tuning?",
    answer:
      "Fine-tuning trains the model on your data - changing its weights permanently. RAG retrieves relevant content at query time without modifying the model. RAG is faster to deploy, cheaper to maintain, and better suited for use cases where data changes frequently. Fine-tuning is better for adapting model behavior and tone. Many production systems use both.",
  },
  {
    question: "Can RAG work with structured data, not just documents?",
    answer:
      "Yes. We build hybrid RAG systems that combine vector retrieval from unstructured content with structured database queries. This is common in enterprise settings where some knowledge lives in documents and some in databases or data warehouses.",
  },
  {
    question: "How do you handle hallucinations in RAG systems?",
    answer:
      "RAG reduces hallucinations by grounding model responses in retrieved context. We further reduce them through careful prompt engineering, faithfulness evaluation, confidence scoring, and - where appropriate - source citation in the output. No RAG system eliminates hallucinations entirely, but a well-built one makes them rare and detectable.",
  },
  {
    question: "What data formats can RAG ingest?",
    answer:
      "We've built ingestion pipelines for PDFs, Word documents, Excel files, PowerPoint presentations, HTML, Markdown, JSON, CSV, database exports, Confluence pages, Notion exports, Slack archives, emails, and more. If your data is accessible, we can build a pipeline for it.",
  },
  {
    question: "How do you keep the RAG knowledge base current?",
    answer:
      "We build automated ingestion pipelines that process new or updated content on a schedule or in real time - so your RAG system reflects changes in your data without manual intervention.",
  },
  {
    question: "Do you use open-source LLMs or commercial APIs?",
    answer:
      "Both, depending on your requirements. If data privacy or cost is a concern, we can build on open-source models like LLaMA or Mistral deployed on your own infrastructure. If performance is the priority, commercial APIs like GPT-4o or Claude are often the right choice. We'll recommend based on your specific trade-offs.",
  },
  {
    question: "Is RAG suitable for regulated industries?",
    answer:
      "Yes, and often it's a better fit than other AI approaches - because RAG can cite its sources, making outputs auditable. We have experience building RAG systems for healthcare, legal, and financial services contexts, with appropriate attention to data governance and compliance requirements.",
  },
  {
    question: "How do you measure if the RAG system is working?",
    answer:
      "We define success metrics upfront - typically including answer accuracy, retrieval precision and recall, response latency, and user satisfaction where applicable. We use frameworks like RAGAS and DeepEval to measure these systematically during development and post-deployment.",
  },
]

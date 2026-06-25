import {
  BarChart3,
  Bot,
  Brain,
  Cpu,
  GitBranch,
  Layers,
  LineChart,
  Shield,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export const heroStats = [
  { value: "40%", label: "ER wait time reduction in healthcare triage" },
  { value: "70%", label: "Operational latency cut in supply chain builds" },
  { value: "4x", label: "Time-to-market improvement in logistics" },
  { value: "99.9%", label: "Task execution accuracy in production agentic workflows" },
]

export const whatIsAi = {
  directAnswer:
    "Artificial intelligence is the use of software systems - machine learning models, large language models (LLMs), and autonomous agents - to perform tasks that normally require human reasoning: classification, prediction, generation, and decision-making. Enterprise AI differs from consumer AI in that it must operate on private, governed data, integrate with existing systems via APIs, and meet accuracy, latency, and compliance requirements at scale.",
  enterpriseDiff:
    "Enterprise AI spans a spectrum of capability - from predictive models on structured data to generative LLMs and autonomous agents that plan and execute multi-step workflows.",
  decisionChain: "Data → AI Model → Automated Decision/Action → Business Outcome",
  decisionChainDesc:
    "AI is only as valuable as the decision or action it changes. Toadster builds the full chain - from data pipeline to model to integrated action - rather than delivering a model that never reaches production.",
}

export const aiSpectrum = [
  {
    icon: LineChart,
    title: "Predictive AI",
    desc: "Forecasting and classification using traditional machine learning.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    desc: "Content, code, and synthetic data generation using LLMs.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "Systems that plan, use tools, and execute multi-step tasks with limited human intervention.",
  },
]

export const servicesIntro =
  "Toadster's AI services cover the full lifecycle - from strategy and data readiness to model selection, custom development, and production deployment - delivered as a full build or as targeted engagements such as a single use-case pilot or an existing-model integration."

export const coreCapabilitiesBento = [
  {
    variant: "dark" as const,
    badge: "FLAGSHIP SERVICE",
    title: "AI Strategy & Readiness Assessment",
    desc: "Evaluate data quality, infrastructure, and use cases to identify where AI will produce measurable ROI versus where it will add risk without return - before any model is built.",
    href: "/contact",
  },
  {
    variant: "green" as const,
    title: "Custom LLM & RAG Integration",
    desc: "Retrieval-augmented generation on your proprietary knowledge base with vector databases and private model deployments.",
    icon: Brain,
  },
  {
    variant: "white" as const,
    title: "Autonomous Workflow & Agentic AI",
    desc: "Multi-agent systems that decompose goals into executable steps and complete end-to-end processes without manual handoffs at every stage.",
    icon: Workflow,
  },
  {
    variant: "outline" as const,
    title: "MLOps & Model Governance",
    desc: "CI/CD pipelines for models, drift monitoring, and audit trails aligned to GDPR, HIPAA, and SOC 2.",
    icon: Shield,
  },
]

export const capabilities: { icon: LucideIcon; title: string; desc: string; ctaAnchor: string }[] = [
  {
    icon: Brain,
    title: "AI Strategy & Readiness Assessment",
    desc: "We evaluate your data quality, infrastructure, and use cases to identify where AI will produce measurable ROI versus where it will add risk without return - before any model is built.",
    ctaAnchor: "Explore AI Strategy",
  },
  {
    icon: Layers,
    title: "Custom LLM & RAG Integration",
    desc: "We build retrieval-augmented generation (RAG) systems on your proprietary knowledge base, using vector databases and private model deployments so outputs are grounded in your data, not generic web knowledge.",
    ctaAnchor: "Explore LLM Integration",
  },
  {
    icon: Bot,
    title: "Autonomous Workflow & Agentic AI",
    desc: "We design multi-agent systems that decompose goals into executable steps, call internal and external tools, and complete end-to-end processes - from lead qualification to technical fulfillment - without manual handoffs at every stage.",
    ctaAnchor: "Explore Agentic AI",
  },
  {
    icon: Cpu,
    title: "Predictive & Machine Learning Models",
    desc: "We build forecasting, classification, and anomaly-detection models (churn, fraud, demand, risk scoring) using frameworks such as scikit-learn, XGBoost, PyTorch, and TensorFlow, deployed via MLflow for tracking and versioning.",
    ctaAnchor: "Explore ML Models",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Business Intelligence",
    desc: "We embed predictive and generative AI directly into BI tools like Tableau and Power BI, so forecasts and natural-language query answers appear where decision-makers already work.",
    ctaAnchor: "Explore AI-Powered BI",
  },
  {
    icon: Shield,
    title: "MLOps & Model Governance",
    desc: "We implement CI/CD pipelines for models, monitoring for drift and bias, and audit trails for model decisions - aligned to emerging AI governance frameworks and data compliance standards (GDPR, HIPAA, SOC 2).",
    ctaAnchor: "Explore MLOps",
  },
]

export const architectureIntro =
  "A production AI architecture has five layers: (1) data sources, (2) data/feature pipeline, (3) model layer (foundation model, fine-tuned model, or custom ML model), (4) orchestration layer (agent logic, tool calls, retrieval), and (5) application layer (chat interface, API, embedded BI, automated action). Toadster designs each layer to match your latency, accuracy, and governance requirements rather than defaulting to one vendor's stack."

export const architectureSteps = [
  { step: "01", title: "Data Sources", desc: "CRMs, ERPs, knowledge bases, document repositories, real-time event streams" },
  { step: "02", title: "Data & Feature Pipeline", desc: "Cleaning, embedding generation, vector indexing (built on the same pipeline infrastructure as enterprise data analytics)" },
  { step: "03", title: "Model Layer", desc: "Foundation models (e.g., Claude, GPT-class models), fine-tuned open-source models, or custom-trained ML models" },
  { step: "04", title: "Orchestration Layer", desc: "Agent planning, tool-calling, retrieval-augmented generation, multi-agent coordination" },
  { step: "05", title: "Application Layer", desc: "Chat interfaces, APIs, embedded BI widgets, autonomous workflow triggers" },
]

export const aiTypeComparison = {
  headers: ["Dimension", "Predictive AI", "Generative AI", "Agentic AI"],
  rows: [
    ["Core Function", "Forecasts or classifies based on patterns", "Creates new content/text/code", "Plans and executes multi-step tasks"],
    ["Typical Input", "Structured historical data", "Prompts, documents, context", "Goals, tools, and permissions"],
    ["Example Use Case", "Churn prediction, demand forecasting", "Drafting reports, summarizing documents", "Autonomous lead-to-fulfillment pipelines"],
    ["Output Type", "A score, label, or number", "Text, image, code, or audio", "A completed action or decision"],
    // ["Human Oversight", "Review of model accuracy periodically", "Review of generated content", "Approval gates at key decision points"],
  ],
}

export const approachComparison = {
  headers: ["Approach", "What It Does", "Best For", "Trade-off"],
  rows: [
    ["Prompt Engineering", "Shapes model behavior via instructions only", "Fast, low-cost experimentation", "Limited by model's existing knowledge"],
    ["RAG (Retrieval-Augmented Generation)", "Retrieves relevant private data at query time", "Knowledge-grounded, frequently-changing data", "Requires vector database and retrieval pipeline"],
    ["Fine-Tuning", "Retrains model weights on domain-specific data", "Highly specialized tone, format, or domain tasks", "Higher cost, requires retraining as data evolves"],
  ],
}

export const platformIntro =
  "There is no single \"best\" AI stack - the right choice depends on whether the priority is grounded accuracy (favoring RAG architectures), task automation (favoring agent frameworks), or predictive accuracy on structured data (favoring traditional ML frameworks). Toadster selects tooling per use case rather than standardizing on one vendor."

export const platformQuote =
  "Most AI failures we see in the field aren't model failures - they're integration and data-quality failures. A frontier model connected to messy, ungoverned data will still produce unreliable output. We treat the data pipeline as load-bearing infrastructure, not an afterthought to the model."

export const platformComparison = {
  headers: ["Category", "Common Tools", "Strongest For"],
  rows: [
    ["Foundation Models", "Claude, GPT-class models, open-source LLMs", "Reasoning, generation, conversational interfaces"],
    ["Vector Databases", "Pinecone, Weaviate, pgvector", "RAG retrieval over private knowledge bases"],
    ["ML Frameworks", "scikit-learn, XGBoost, PyTorch, TensorFlow", "Predictive models on structured/tabular data"],
    ["Orchestration", "LangChain, custom agent frameworks", "Multi-step agentic workflows, tool use"],
    ["MLOps", "MLflow, Weights & Biases", "Model versioning, monitoring, drift detection"],
  ],
}

export const agentCapabilitiesIntro =
  "Three architectural capabilities separate a functional AI agent from a simple chatbot: reasoning and planning (breaking a goal into ordered steps without human intervention), tool integration (taking real action through APIs against legacy and modern systems), and memory and context (retaining state across a session and across long-running, multi-day workflows)."

export const agentCapabilities = [
  {
    icon: Brain,
    title: "Reasoning & Planning",
    desc: "Autonomous task decomposition that breaks complex goals into executable steps.",
  },
  {
    icon: Workflow,
    title: "Tool Integration",
    desc: "Direct action through APIs and software suites, enabling the AI to navigate both legacy systems and modern cloud applications.",
  },
  {
    icon: Layers,
    title: "Memory & Context",
    desc: "RAG and long-term state management that let agents remember prior interactions and maintain logic across sessions.",
  },
]

export const governanceIntro =
  "Enterprise AI governance defines how models are validated before deployment, monitored for drift and bias after deployment, and audited when a decision is challenged. Toadster implements governance through model documentation, human-in-the-loop approval gates for high-stakes actions, and audit logging - aligned to GDPR, HIPAA, SOC 2, and sector-specific regulatory frameworks."

export const governanceComponents = [
  "Model Validation - Accuracy, fairness, and bias testing before production release",
  "Human-in-the-Loop Gates - Approval checkpoints for high-risk or high-cost automated actions",
  "Drift Monitoring - Ongoing tracking of model accuracy as real-world data shifts",
  "Audit Logging - Traceable records of model inputs, outputs, and agent actions",
  "Data Privacy Controls - Encryption, access control, and data residency aligned to applicable regulation",
]

export const industryUseCases = [
  {
    title: "Healthcare - AI-Powered Patient Triage",
    desc: "Predictive severity-assessment models, combined with autonomous intake routing, reduced emergency room wait times by 40% by prioritizing patients based on real-time risk scoring.",
  },
  {
    title: "Finance - Autonomous Fraud Detection",
    desc: "Real-time risk models that continuously evolve with emerging threat patterns identified anomalous transactions in milliseconds, saving millions in asset losses annually.",
  },
  {
    title: "Logistics - Dynamic Supply Chain Optimization",
    desc: "Agentic systems monitoring live logistics data enabled self-healing supply routes that adjusted automatically to disruptions, cutting operational latency by 70% and improving time-to-market by 4x.",
  },
  {
    title: "Across Engagements - Execution Accuracy",
    desc: "Production agentic systems deployed through Toadster's architecture process have sustained task execution accuracy of 99.9% in monitored autonomous workflows.",
  },
]

export const processIntro =
  "Toadster's process follows four phases: Strategy (mapping business intent to viable AI use cases), Architecture (defining the RAG, memory, and tool requirements), Deployment (secure scaling across cloud infrastructure), and Optimization (ongoing fine-tuning based on live execution data)."

export const processStepsLanding = [
  {
    num: 1,
    title: "Strategy",
    desc: "Map business intent to agentic and predictive AI architectures, ruling out low-value use cases early.",
  },
  {
    num: 2,
    title: "Architecture",
    desc: "Define the RAG, memory, and tool-integration requirements specific to the workflow.",
  },
  {
    num: 3,
    title: "Deployment",
    desc: "Securely scale the system across your existing cloud infrastructure with monitoring in place.",
  },
  {
    num: 4,
    title: "Optimization",
    desc: "Continuously fine-tune models and agent behavior based on live execution data and outcomes.",
  },
]

export const whyToadster = [
  {
    icon: GitBranch,
    title: "Model-agnostic expertise",
    desc: "Across foundation models, fine-tuning, and RAG - we architect around the use case, not a single vendor relationship.",
  },
  {
    icon: Shield,
    title: "Governance-first deployment",
    desc: "Validation, monitoring, and audit trails are built into every production system.",
  },
  {
    icon: Cpu,
    title: "Full-lifecycle capability",
    desc: "From data pipeline to model to autonomous action, under one engineering team.",
  },
  {
    icon: BarChart3,
    title: "Proven execution accuracy",
    desc: "Production agentic systems sustaining 99.9% task execution accuracy in live environments.",
  },
]

export const faqs = [
  {
    question: "What is enterprise artificial intelligence?",
    answer:
      "Enterprise artificial intelligence refers to AI systems - machine learning models, LLMs, and autonomous agents - built to operate on an organization's private data and integrate with its existing systems, under governance and compliance standards that consumer AI tools don't require.",
  },
  {
    question: "What is the difference between AI and machine learning?",
    answer:
      "Artificial intelligence is the broader field of building systems that perform tasks requiring human-like reasoning. Machine learning is a subset of AI in which models learn patterns from data rather than following explicit rules. Generative AI and agentic AI are further subsets built on top of machine learning and large language models.",
  },
  {
    question: "What is agentic AI?",
    answer:
      "Agentic AI refers to AI systems that can autonomously plan multi-step tasks, call external tools and APIs, and execute actions toward a goal with limited human intervention - as opposed to a chatbot, which only responds to individual prompts without independent planning or action.",
  },
  {
    question: "How much does enterprise AI implementation cost?",
    answer:
      "Costs vary widely by scope: a single-use-case pilot (e.g., one predictive model or one RAG-powered assistant) can range from tens of thousands of dollars, while enterprise-wide agentic systems with full governance typically range into the hundreds of thousands, depending on integration complexity and compliance requirements.",
  },
  {
    question: "How long does an AI implementation take?",
    answer:
      "A focused pilot - one predictive model or one RAG assistant - typically takes 6–12 weeks. A full agentic workflow automation system, including governance and integration with legacy systems, generally takes 4–9 months.",
  },
  {
    question: "What is RAG (retrieval-augmented generation) and why does it matter?",
    answer:
      "RAG is a technique that retrieves relevant information from a private knowledge base at query time and feeds it to a language model, grounding its responses in your actual data instead of only its general training knowledge. It reduces hallucination and keeps answers current without retraining the model.",
  },
  {
    question: "Is AI safe to use for high-stakes business decisions?",
    answer:
      "AI can support high-stakes decisions when deployed with human-in-the-loop approval gates, model validation, drift monitoring, and audit logging. Fully autonomous action without oversight is appropriate only for well-tested, lower-risk, high-frequency tasks - not for decisions with significant financial, legal, or safety consequences.",
  },
]

export const exploreServicesSection = {
  title: "Expert Solutions Tailored for Your Growth",
  subtitle:
    "From custom LLM integration to autonomous agents and predictive models, explore our full suite of AI services designed to solve your most complex enterprise challenges.",
  ctaLabel: "Explore All Services",
  ctaHref: "/services",
  serviceCardHref: "/services/ai-development",
}

export const exploreHireSection = {
  title: "Build Your Dream AI Team",
  subtitle:
    "Scale your AI initiatives with top-tier ML engineers, LLM specialists, and full-stack developers. Our resources integrate seamlessly into your workflow.",
  ctaLabel: "Hire Expert Resources",
  ctaHref: "/hire-resources",
}

export const exploreHireSlugs = [
  "ai-ml-developers",
  "nodejs-developers",
  "full-stack-developers",
  "software-developers",
  "devops-engineers",
  "reactjs-developers",
] as const

import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Bot,
  Brain,
  ClipboardList,
  Cloud,
  Database,
  Eye,
  GitBranch,
  Layers,
  LineChart,
  Link2,
  Lock,
  MessageSquare,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Text,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users,
  Workflow,
  Zap,
} from "lucide-react"

export const heroTrustItems = [
  "Business problem first, not hype",
  "End-to-end from data to deployment",
  "Models you own and can maintain",
  "ROI tied to measurable outcomes",
]

export const trustStats = [
  { number: "190+", label: "AI & ML projects delivered" },
  { number: "40+", label: "Skilled AI engineers & data scientists" },
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
    icon: Brain,
    title: "Custom AI & Machine Learning",
    desc: "End-to-end development of ML models tailored to your data and domain - from regression and classification to deep learning, NLP, and computer vision. Built for production, not just demos.",
    value: "Models trained for your domain and production traffic",
    tags: ["Deep learning", "NLP", "Computer vision", "Classification"],
  },
  {
    icon: Sparkles,
    title: "Generative AI Development",
    desc: "LLM integration, fine-tuning, RAG pipelines, and custom generative workflows. Whether you're building an internal knowledge tool or a customer-facing AI product, we architect it right.",
    value: "Generative AI that fits your data and use case",
    tags: ["LLM fine-tuning", "RAG", "OpenAI", "Claude"],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot & Virtual Agents",
    desc: "Intelligent conversational agents for customer support, internal helpdesks, onboarding, and lead qualification. Context-aware, multi-channel, and connected to your real data.",
    value: "Conversations grounded in your actual systems",
    tags: ["Customer support", "Helpdesk", "Lead qualification", "Multi-channel"],
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    desc: "Autonomous AI agents that reason, plan, and act - handling multi-step workflows, API orchestration, and decision-making without constant human intervention.",
    value: "Automates complex workflows beyond simple chat",
    tags: ["Agents", "API orchestration", "Multi-step workflows", "Tool use"],
  },
  {
    icon: LineChart,
    title: "Predictive Analytics & Forecasting",
    desc: "Turn historical data into forward-looking intelligence. Demand forecasting, churn prediction, revenue modeling, risk scoring - purpose-built for your business context.",
    value: "Forward-looking intelligence from your historical data",
    tags: ["Forecasting", "Churn prediction", "Risk scoring", "Demand planning"],
  },
  {
    icon: Eye,
    title: "Computer Vision Solutions",
    desc: "Image and video analysis for quality control, document processing, facial recognition, defect detection, and visual inspection across manufacturing, logistics, healthcare, and retail.",
    value: "Automates visual inspection at scale",
    tags: ["Defect detection", "Document OCR", "Quality control", "Visual search"],
  },
  {
    icon: Text,
    title: "Natural Language Processing (NLP)",
    desc: "Sentiment analysis, entity extraction, document classification, summarization, and semantic search - helping you extract value from unstructured text at scale.",
    value: "Unlocks value from unstructured text data",
    tags: ["Sentiment analysis", "Entity extraction", "Summarization", "Semantic search"],
  },
  {
    icon: Workflow,
    title: "AI-Powered Process Automation",
    desc: "Intelligent automation that goes beyond RPA. Combine ML models with workflow engines to automate complex, judgment-based tasks that rule-based systems simply can't handle.",
    value: "Automates judgment-based work rules can't touch",
    tags: ["Intelligent automation", "Workflow engines", "Document processing", "Decision automation"],
  },
  {
    icon: Server,
    title: "MLOps & AI Infrastructure",
    desc: "Model monitoring, retraining pipelines, deployment automation, and performance tracking. We build the infrastructure that keeps your AI reliable and accurate over time.",
    value: "Keeps models reliable after launch",
    tags: ["MLflow", "Monitoring", "Retraining", "CI/CD for models"],
  },
  {
    icon: Database,
    title: "Data Engineering & Strategy",
    desc: "Before AI works, your data needs to work. We help you build clean data pipelines, structured feature stores, and governance frameworks that make AI possible at scale.",
    value: "Builds the data foundation AI depends on",
    tags: ["ETL/ELT", "Feature stores", "Data quality", "Governance"],
  },
  {
    icon: Link2,
    title: "AI Integration & API Services",
    desc: "Embed AI capabilities into your existing systems - CRM, ERP, custom platforms. We handle the integration complexity so AI becomes a natural extension of your operations.",
    value: "AI embedded into systems you already use",
    tags: ["CRM integration", "ERP", "APIs", "Custom platforms"],
  },
  {
    icon: ClipboardList,
    title: "AI Consulting & Roadmapping",
    desc: "Not sure where to start? We help leadership teams assess AI readiness, identify high-impact use cases, evaluate build vs. buy decisions, and create an AI strategy with a real business case.",
    value: "Clarity before you commit budget",
    tags: ["AI readiness", "Use case prioritisation", "Build vs. buy", "Roadmapping"],
  },
]

export const industries: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: BarChart3,
    title: "FinTech & Financial Services",
    desc: "Fraud detection, credit scoring, algorithmic trading signals, customer churn prediction, regulatory compliance automation, and document intelligence.",
  },
  {
    icon: ShieldCheck,
    title: "Healthcare & Life Sciences",
    desc: "Clinical decision support, medical image analysis, patient risk stratification, drug discovery acceleration, and healthcare document processing.",
  },
  {
    icon: Trophy,
    title: "Retail & eCommerce",
    desc: "Recommendation engines, demand forecasting, dynamic pricing, inventory optimization, visual search, and customer lifetime value modeling.",
  },
  {
    icon: Layers,
    title: "Manufacturing & Logistics",
    desc: "Predictive maintenance, defect detection via computer vision, supply chain optimization, route planning AI, and warehouse automation intelligence.",
  },
  {
    icon: Cloud,
    title: "SaaS & Technology Companies",
    desc: "AI feature development, NLP-powered search, user behavior modeling, anomaly detection, and generative AI product integration.",
  },
  {
    icon: Users,
    title: "HR & Talent Management",
    desc: "Resume screening, skills gap analysis, attrition prediction, engagement scoring, and AI-powered interview tooling.",
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    title: "We start with the business problem",
    desc: "Before touching a single dataset, we spend time understanding what you're actually trying to fix. The right AI solution only exists if you've correctly defined the business problem first.",
  },
  {
    icon: Lock,
    title: "No black box deliverables",
    desc: "We build AI you can understand, maintain, and trust. Every model comes with clear documentation, explainability reports, and handover support so your team isn't left guessing.",
  },
  {
    icon: Layers,
    title: "End-to-end ownership",
    desc: "From data assessment to deployment and monitoring, we handle the full AI lifecycle. No fragmented vendors. No finger-pointing. One accountable team across the whole stack.",
  },
  {
    icon: MessageSquare,
    title: "Honest about what AI can't do",
    desc: "If AI isn't the right fit for your problem, we'll say so. Our goal is long-term partnership, not oversold projects that underdeliver. We'd rather say no early than fail later.",
  },
  // {
  //   icon: Users,
  //   title: "Built for your team to own",
  //   desc: "We don't build AI systems that only we can maintain. Knowledge transfer, documentation, and training are part of every engagement. Your team should be able to run it independently.",
  // },
  // {
  //   icon: TrendingUp,
  //   title: "ROI-first thinking",
  //   desc: "Every AI solution we build is tied to a measurable business outcome. Reduced processing time. Lower error rates. Higher conversion. Faster cycle times. We track results, not just releases.",
  // },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Problem Mapping",
    desc: "We run structured discovery sessions with your stakeholders to map the actual business problem, existing data landscape, constraints, and success criteria. Most projects fail here - we don't skip it.",
    deliverables: ["Problem statement", "Data landscape assessment", "Success criteria"],
  },
  {
    num: "02",
    title: "Solution Architecture & Planning",
    desc: "We select the right approach - classical ML, deep learning, LLM, or a hybrid - based on your data, timelines, and budget. You get a technical blueprint and project plan before we write a line of code.",
    deliverables: ["Technical blueprint", "Approach recommendation", "Project plan"],
  },
  {
    num: "03",
    title: "UI/UX Design (where needed)",
    desc: "If your AI product needs a user interface - dashboards, chat interfaces, admin panels - we design and prototype it before building. Real feedback before real code.",
    deliverables: ["Wireframes", "Interactive prototype", "Design handoff"],
  },
  {
    num: "04",
    title: "Data Engineering & Model Development",
    desc: "We build the data pipelines, clean and structure your datasets, engineer features, train models, and iterate until performance meets your defined benchmarks - not just arbitrary accuracy scores.",
    deliverables: ["Data pipelines", "Trained models", "Evaluation reports"],
  },
  {
    num: "05",
    title: "Integration & Deployment",
    desc: "The model goes into your environment - whether that's cloud, on-premise, or hybrid. We handle API design, system integration, security, and performance tuning for production traffic.",
    deliverables: ["Production deployment", "API documentation", "Integration testing"],
  },
  {
    num: "06",
    title: "Monitoring, Testing & Continuous Improvement",
    desc: "Post-deployment, we set up drift detection, performance dashboards, retraining triggers, and ongoing QA. AI degrades without maintenance - we make sure yours doesn't.",
    deliverables: ["Monitoring dashboards", "Drift detection", "Retraining plan"],
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
    title: "AI Frameworks",
    why: "TensorFlow, PyTorch, Scikit-learn, Hugging Face, LangChain, LlamaIndex, OpenAI, Claude, and Google Vertex AI for model development and deployment.",
    pills: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "OpenAI API"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    why: "Apache Spark, Airflow, dbt, Kafka, Pandas, Polars, Great Expectations, Delta Lake, Snowflake, and BigQuery for reliable data foundations.",
    pills: ["Spark", "Airflow", "dbt", "Kafka", "Snowflake"],
  },
  {
    icon: GitBranch,
    title: "MLOps & Deployment",
    why: "MLflow, Kubeflow, Weights & Biases, BentoML, FastAPI, Docker, Kubernetes, Seldon, and Triton for production ML operations.",
    pills: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "FastAPI"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    why: "AWS SageMaker, Google Cloud AI Platform, Azure Machine Learning, Lambda, and Cloud Run - plus on-premise GPU environments where needed.",
    pills: ["SageMaker", "Vertex AI", "Azure ML", "Lambda", "Cloud Run"],
  },
  {
    icon: Layers,
    title: "Vector Databases",
    why: "Pinecone, Weaviate, Qdrant, Chroma, and pgvector for semantic search, RAG pipelines, and embedding-based retrieval systems.",
    pills: ["Pinecone", "Weaviate", "Qdrant", "Chroma", "pgvector"],
  },
  {
    icon: Zap,
    title: "Monitoring & Observability",
    why: "Evidently AI, WhyLabs, Grafana, Prometheus, and custom dashboards - keeping your models honest in production.",
    pills: ["Evidently AI", "WhyLabs", "Grafana", "Prometheus", "Custom dashboards"],
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
    title: "ML / AI Engineers",
    desc: "Model architecture, training, evaluation, and productionisation. Specialists in NLP, computer vision, reinforcement learning, and time-series.",
    tags: ["PyTorch", "NLP", "Computer vision", "Time-series"],
  },
  {
    icon: BarChart3,
    title: "Data Scientists",
    desc: "Statistical analysis, feature engineering, experimental design, model validation. Bridge between business problems and technical solutions.",
    tags: ["Statistics", "Feature engineering", "A/B testing", "Validation"],
  },
  {
    icon: Database,
    title: "Data Engineers",
    desc: "Pipeline architecture, ETL/ELT, data quality, lakehouse design, streaming infrastructure. The foundation that makes AI possible.",
    tags: ["ETL/ELT", "dbt", "Spark", "Data quality"],
  },
  {
    icon: Server,
    title: "MLOps Engineers",
    desc: "Deployment automation, CI/CD for models, monitoring, retraining pipelines, infra-as-code. AI that stays reliable in production.",
    tags: ["MLflow", "Kubeflow", "CI/CD", "Monitoring"],
  },
  {
    icon: Sparkles,
    title: "LLM / GenAI Specialists",
    desc: "Prompt engineering, fine-tuning, RAG architecture, agentic systems, and integration with major foundation model APIs.",
    tags: ["RAG", "Fine-tuning", "Agents", "LangChain"],
  },
  {
    icon: ClipboardList,
    title: "AI Product Consultants",
    desc: "Strategy, roadmapping, business case development, vendor evaluation, and AI governance. The bridge between business and engineering.",
    tags: ["Strategy", "Roadmapping", "Governance", "Vendor eval"],
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Workflow,
    title: "Operational efficiency gains",
    desc: "Automating document processing, data extraction, and repetitive decision workflows typically reduces processing time by 60–80%, allowing teams to focus on higher-value work.",
  },
  {
    icon: LineChart,
    title: "Faster, better decision making",
    desc: "Predictive models surface insights that would take analysts days to produce - in seconds. Leadership teams make better decisions with more data, less gut-feel.",
  },
  {
    icon: TrendingUp,
    title: "Revenue enablement",
    desc: "AI-driven personalization, lead scoring, churn prediction, and upsell recommendations directly improve conversion rates, retention, and customer lifetime value.",
  },
  {
    icon: TrendingDown,
    title: "Reduced operational costs",
    desc: "Intelligent automation reduces manual labor requirements, minimizes error rates, and cuts rework - producing measurable cost savings within the first year.",
  },
  {
    icon: Users,
    title: "Scalability without proportional headcount",
    desc: "AI lets you handle more customers, more data, and more transactions without hiring linearly. Your operations scale intelligently, not expensively.",
  },
  {
    icon: Trophy,
    title: "Improved customer experiences",
    desc: "Smarter chatbots, faster response times, personalized recommendations, and proactive service create measurably better customer satisfaction scores.",
  },
]

export const engagementModels = [
  {
    featured: true,
    title: "Dedicated AI Development Team",
    who: "Best for: AI-native products and sustained AI programs",
    desc: "A fully managed, dedicated team - ML engineers, data scientists, and an MLOps specialist - working exclusively on your product. You maintain strategic direction; we handle execution.",
    benefits: [
      "Full team aligned to your product",
      "Sprint-based delivery, weekly reporting",
      "Scale team up or down monthly",
      "Direct Slack/PM tool access",
    ],
  },
  {
    featured: false,
    title: "Team Augmentation",
    who: "Best for: extending your internal AI team",
    desc: "Embed our specialists directly into your existing team - working inside your tools, your processes, and your culture. Fast to start, flexible to scale.",
    benefits: [
      "Engineers embedded in your team",
      "No long-term commitment required",
      "Start within 48–72 hours",
      "Ramp up or down as project demands change",
    ],
  },
  {
    featured: false,
    title: "Fixed Scope Project",
    who: "Best for: well-defined AI solutions",
    desc: "We define the scope, fix the timeline, and deliver to a clear budget. Best for a specific model, integration, or automation workflow where requirements are stable.",
    benefits: [
      "Fixed budget and timeline",
      "Clear deliverables and acceptance criteria",
      "Milestone-based payment structure",
      "Post-launch support included",
    ],
  },
  {
    featured: false,
    title: "Managed AI Services",
    who: "Best for: ongoing model operations",
    desc: "Ongoing model monitoring, maintenance, retraining, and optimisation - handled by us. So your AI keeps performing as your data changes and your business evolves.",
    benefits: [
      "Monthly model health reporting",
      "Proactive drift detection and retraining",
      "Dedicated support SLA",
      "Quarterly strategy reviews",
    ],
  },
]

export const faqs = [
  {
    question: "How much does AI development cost?",
    answer:
      "A focused proof of concept typically starts from $15,000–$30,000. A full production AI system with data pipelines, model development, integration, and MLOps infrastructure typically ranges from $50,000–$250,000+. We scope every project in detail before providing a fixed estimate.",
  },
  {
    question: "How long does an AI project take?",
    answer:
      "A well-scoped AI proof of concept can be delivered in 4–8 weeks. A production-ready system typically takes 3–6 months from discovery to deployment, depending on data readiness and integration complexity. We'll give you a realistic timeline after discovery - not an optimistic one.",
  },
  {
    question: "Is AI right for my business right now?",
    answer:
      "AI is worth investing in when you have a clearly defined problem that data can help solve, sufficient historical data to train or fine-tune a model, business processes that would benefit from automation or prediction, and stakeholders willing to support adoption. If you're unsure, our AI readiness assessment helps you figure that out before committing budget.",
  },
  {
    question: "What data do we need to get started?",
    answer:
      "It depends on the use case. Supervised ML typically needs labeled historical examples. LLM-based solutions can work with much less proprietary data, using pre-trained models. We'll assess your existing data as part of discovery and tell you honestly whether it's sufficient, what's missing, and what it would take to fill the gaps.",
  },
  {
    question: "Will we own the AI models you build for us?",
    answer:
      "Yes - completely. All models, code, data pipelines, and intellectual property developed during your engagement belong entirely to you. We retain no rights over anything we build for your business.",
  },
  {
    question: "How do we choose the right AI development partner?",
    answer:
      "Look for a partner that asks more questions than they answer early on. Evaluate their post-deployment track record, not just their portfolio of launches. Ask how they handle projects where the model underperforms. And make sure they can explain their work without jargon.",
  },
  {
    question: "What if our AI model starts performing poorly after launch?",
    answer:
      "Model drift is a real and expected phenomenon - models degrade as real-world data evolves. Every production AI system we deploy includes monitoring, drift detection, and either automatic or scheduled retraining. We offer ongoing managed services to handle this proactively.",
  },
  {
    question: "Do you offer AI consulting without committing to a full build?",
    answer:
      "Yes. Many clients start with a focused consulting engagement - an AI readiness assessment, use case prioritization, or architecture review - before committing to full development. This is often the smartest way to start if you're early in your AI journey or evaluating multiple vendors.",
  },
]

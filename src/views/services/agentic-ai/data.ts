import type { LucideIcon } from "lucide-react"
import {
  Activity,
  BarChart3,
  Bot,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSearch,
  GitBranch,
  Headphones,
  Layers,
  Lock,
  MessageSquare,
  Network,
  RefreshCw,
  Scale,
  Search,
  Server,
  Shield,
  ShoppingCart,
  Target,
  TestTube2,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react"

export const trustStats = [
  { number: "Multi-Agent", label: "Single agents to orchestrated teams" },
  { number: "Tool-Use", label: "Connected to your real systems" },
  { number: "Guardrails", label: "Human oversight by design" },
  { number: "4 Regions", label: "India · UAE · Saudi Arabia · US" },
]

export const heroSubheading = "AI That Doesn't Just Answer. It Acts."

export const heroCta = {
  label: "Talk to an Agentic AI Specialist",
  href: "#contact-form",
}

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: Brain,
    title: "AI Agent Architecture & Design",
    desc: "Before any code is written, we design the agent's reasoning approach, tool access, decision boundaries, memory strategy, and escalation paths. This is the single most important determinant of whether an agentic system is safe and reliable - and the step most commonly skipped.",
    value: "Safe, reliable agents start with deliberate architecture",
    tags: ["Reasoning design", "Tool access", "Escalation paths", "Memory strategy"],
  },
  {
    icon: Bot,
    title: "Single-Agent Task Automation",
    desc: "Agents that handle a well-defined, repeatable task end-to-end - processing a request, validating data against business rules, taking an action in a system, and reporting the outcome. The right starting point for most businesses new to agentic AI.",
    value: "Prove agentic AI on one bounded task first",
    tags: ["Request processing", "Business rules", "System actions", "Outcome reporting"],
  },
  {
    icon: Network,
    title: "Multi-Agent Orchestration",
    desc: "Systems where multiple specialised agents collaborate - a research agent, a validation agent, an execution agent - coordinated by an orchestrator that manages task handoffs, shared context, and failure recovery. Built using LangGraph, CrewAI, and AutoGen.",
    value: "Specialised agents working as a coordinated team",
    tags: ["LangGraph", "CrewAI", "AutoGen", "Failure recovery"],
  },
  {
    icon: Wrench,
    title: "Tool Use & Function Calling Integration",
    desc: "Agents that can query your databases, call your internal APIs, search the web, read and write documents, and operate your existing software tools - with clearly scoped permissions so an agent can only take actions it's explicitly authorised to take.",
    value: "Agents connected to your real systems, with scoped permissions",
    tags: ["APIs", "Databases", "Documents", "Scoped access"],
  },
  {
    icon: FileSearch,
    title: "Agentic RAG (Research & Retrieval Agents)",
    desc: "Agents that don't just retrieve a single answer but iteratively search, cross-reference multiple sources, evaluate confidence in what they've found, and decide whether they have enough information to act or need to ask a clarifying question.",
    value: "Research and retrieval before action, not guesswork",
    tags: ["Multi-source search", "Confidence scoring", "Clarifying questions", "Cross-reference"],
  },
  {
    icon: Shield,
    title: "AI Agent Guardrails & Safety Engineering",
    desc: "Output validation, action approval workflows, rate limiting, scope restriction, hallucination detection, and human-in-the-loop checkpoints for high-stakes actions. Non-negotiable infrastructure for any agent that takes real-world actions.",
    value: "Safety infrastructure built in from day one",
    tags: ["Output validation", "Approval workflows", "Rate limiting", "Human-in-the-loop"],
  },
  {
    icon: RefreshCw,
    title: "Workflow & Business Process Automation with Agents",
    desc: "Replace multi-step manual workflows - approvals, data entry across systems, document processing chains, customer onboarding sequences - with agents that handle the routine path autonomously and escalate exceptions to a human.",
    value: "Routine paths automated, exceptions escalated",
    tags: ["Approvals", "Data entry", "Document chains", "Onboarding"],
  },
  {
    icon: TestTube2,
    title: "Agent Evaluation & Testing Infrastructure",
    desc: "Systematic evaluation frameworks that test agent behaviour against edge cases, adversarial inputs, and ambiguous instructions before deployment - and ongoing monitoring that catches behavioural drift once the agent is live.",
    value: "Tested against edge cases before production",
    tags: ["Edge cases", "Adversarial testing", "Behavioural drift", "Pre-deployment QA"],
  },
  {
    icon: MessageSquare,
    title: "Conversational Agents with Action-Taking Ability",
    desc: "Beyond chatbots that answer questions - agents embedded in customer or employee-facing conversations that can actually complete the requested task: rebooking a flight, updating a record, processing a refund within policy limits, scheduling a meeting.",
    value: "Conversations that complete tasks, not just answer them",
    tags: ["Customer support", "Record updates", "Policy-bound actions", "Scheduling"],
  },
  {
    icon: Server,
    title: "Agent Infrastructure & MLOps for Agentic Systems",
    desc: "Production infrastructure specific to agentic AI - execution logging, action audit trails, cost and token usage monitoring, agent versioning, and rollback capability. Agentic systems need different observability than traditional software or even standard LLM applications.",
    value: "Production-grade observability for autonomous systems",
    tags: ["Audit trails", "Cost monitoring", "Agent versioning", "Rollback"],
  },
]

export const useCases: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Headphones,
    title: "Customer Support Resolution",
    desc: "Agents that don't just answer FAQ-style questions but actually resolve issues - checking order status across systems, processing eligible refunds, updating account details, and only escalating to a human when the situation falls outside defined policy boundaries.",
  },
  {
    icon: TrendingUp,
    title: "Sales & CRM Automation",
    desc: "Agents that research a prospect across multiple data sources, enrich CRM records automatically, draft personalised outreach, schedule follow-ups, and flag deals that show risk signals - handling the research and data work that consumes sales team time.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Vendor Management",
    desc: "Agents that monitor inventory levels, check vendor pricing and availability across multiple suppliers, generate purchase orders within approval thresholds, and escalate exceptions - reducing the manual coordination overhead in procurement workflows.",
  },
  {
    icon: Scale,
    title: "Financial Operations & Reconciliation",
    desc: "Agents that cross-reference invoices against purchase orders and receipts, flag discrepancies, process routine reconciliations, and prepare exception reports for human review - handling the high-volume, rule-based work in finance operations.",
  },
  {
    icon: Activity,
    title: "IT Operations & Incident Response",
    desc: "Agents that triage incoming alerts, correlate them against known issues and recent changes, attempt defined remediation steps, and escalate to on-call engineers with full context when automated resolution isn't appropriate.",
  },
  {
    icon: Users,
    title: "HR & Employee Onboarding",
    desc: "Agents that handle the administrative sequence of onboarding - provisioning accounts, sending required documentation, scheduling orientation sessions, and tracking completion - freeing HR teams to focus on the parts of onboarding that need a human touch.",
  },
  {
    icon: Search,
    title: "Research & Competitive Intelligence",
    desc: "Agents that continuously monitor defined sources - competitor websites, regulatory filings, industry news, pricing pages - and synthesise structured updates, rather than someone manually checking multiple sources on a schedule.",
  },
  {
    icon: ClipboardCheck,
    title: "Document Processing & Compliance Workflows",
    desc: "Agents that read incoming documents, extract relevant data, validate it against compliance rules, route it to the correct downstream system, and flag anything that doesn't meet defined criteria for human review.",
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    title: "We scope agent autonomy deliberately",
    desc: "Not every action should be autonomous. We work with you to define exactly which decisions an agent can make independently, which require human approval, and which are off-limits entirely. This boundary-setting happens before development, not as a patch after something goes wrong.",
  },
  {
    icon: Shield,
    title: "We design for failure, not just success",
    desc: "What happens when the agent isn't confident in its answer? When a tool call fails? When it encounters a situation outside its training? We build explicit handling for these cases - graceful degradation, clarifying questions, and human escalation - rather than assuming the happy path is what will happen.",
  },
  {
    icon: Lock,
    title: "Every agent action is logged and auditable",
    desc: "When an agent takes an action on your behalf, you need to know what it did, why it decided to do it, and be able to trace that decision after the fact. We build comprehensive audit trails into every agentic system - essential for trust, debugging, and compliance.",
  },
  {
    icon: TestTube2,
    title: "We evaluate rigorously before deployment",
    desc: "We test agents against a structured set of scenarios - including edge cases, ambiguous instructions, and adversarial inputs - before they touch production systems or real customers. A demo that works on the happy path tells you almost nothing about production readiness.",
  },
  {
    icon: GitBranch,
    title: "We start narrow and expand scope deliberately",
    desc: "The right way to deploy agentic AI is to start with a well-bounded task, prove it works reliably with real usage, and then expand scope incrementally. We don't recommend launching a broad, highly autonomous agent on day one - and we'll push back if that's what's being asked for.",
  },
  {
    icon: CheckCircle2,
    title: "We're honest about what agentic AI can't do yet",
    desc: "Current agentic systems are genuinely capable, but they're not magic. They struggle with tasks requiring deep judgment in ambiguous situations, and they can fail in ways that are hard to predict. We'll tell you clearly where the technology's limitations mean a different approach is more appropriate.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Task & Boundary Definition",
    desc: "We work with you to define exactly what task the agent will perform, what tools and systems it needs access to, what decisions it can make autonomously, what requires human approval, and what's explicitly out of scope. This boundary-setting is the foundation everything else is built on.",
    deliverables: ["Task specification", "Autonomy boundary document", "Tool access requirements", "Escalation criteria"],
  },
  {
    num: "02",
    title: "Architecture & Tool Integration Design",
    desc: "We design the agent architecture - single agent or multi-agent, the reasoning approach, memory and context management strategy, and the specific integrations needed to connect the agent to your systems (APIs, databases, internal tools).",
    deliverables: ["Architecture diagram", "Tool integration plan", "Technology selection"],
  },
  {
    num: "03",
    title: "Development & Guardrail Implementation",
    desc: "We build the agent alongside its safety infrastructure simultaneously - output validation, action approval workflows where required, rate limiting, and monitoring hooks. Guardrails are not an afterthought added before launch; they're built in from the first working version.",
    deliverables: ["Working agent system", "Guardrail implementation", "System integrations"],
  },
  {
    num: "04",
    title: "Evaluation & Red-Teaming",
    desc: "Structured testing against a comprehensive scenario set - typical cases, edge cases, ambiguous instructions, and deliberately adversarial inputs designed to find where the agent behaves unpredictably. We don't consider an agent ready based on a handful of successful demo runs.",
    deliverables: ["Evaluation report", "Failure modes & mitigations", "Go/no-go recommendation"],
  },
  {
    num: "05",
    title: "Pilot Deployment with Human Oversight",
    desc: "We deploy to a limited, real-world pilot with active human oversight - reviewing agent decisions, catching issues early, and building confidence before expanding scope. This is where theoretical evaluation meets actual operational reality.",
    deliverables: ["Pilot deployment", "Oversight dashboard", "Pilot performance report"],
  },
  {
    num: "06",
    title: "Scaled Deployment & Ongoing Monitoring",
    desc: "Based on pilot results, we expand scope and autonomy incrementally, with continuous monitoring for behavioural drift, cost tracking, and action audit review. We set up the infrastructure for ongoing evaluation, not just a one-time launch checklist.",
    deliverables: ["Production deployment", "Monitoring dashboards", "Audit trail system"],
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
    title: "Foundation Models",
    why: "OpenAI (GPT-4o, o1, o3), Anthropic Claude (Sonnet, Opus), Google Gemini, Meta Llama, Mistral - selected for reasoning quality, tool-use reliability, and cost per task.",
    pills: ["GPT-4o", "Claude", "Gemini", "Llama", "Mistral"],
  },
  {
    icon: Network,
    title: "Agent Orchestration Frameworks",
    why: "LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, Microsoft Semantic Kernel - for single and multi-agent system design.",
    pills: ["LangGraph", "CrewAI", "AutoGen", "Agents SDK", "Semantic Kernel"],
  },
  {
    icon: Wrench,
    title: "Tool & Function Calling",
    why: "Native function calling APIs, Model Context Protocol (MCP), custom tool integration layers for internal systems and APIs.",
    pills: ["Function calling", "MCP", "Custom tools", "Internal APIs"],
  },
  {
    icon: Database,
    title: "Memory & Context Management",
    why: "Vector databases (Pinecone, Weaviate, Qdrant) for long-term memory, Redis for session state, structured context windows for multi-turn agent reasoning.",
    pills: ["Pinecone", "Weaviate", "Qdrant", "Redis"],
  },
  {
    icon: TestTube2,
    title: "Evaluation & Testing",
    why: "LangSmith, Braintrust, custom evaluation harnesses, adversarial test suites, human-in-the-loop review workflows.",
    pills: ["LangSmith", "Braintrust", "Adversarial tests", "Human review"],
  },
  {
    icon: BarChart3,
    title: "Observability & Monitoring",
    why: "LangSmith, Arize AI, custom logging pipelines for action audit trails, token usage tracking, and behavioural drift detection.",
    pills: ["LangSmith", "Arize AI", "Audit trails", "Drift detection"],
  },
  {
    icon: Shield,
    title: "Guardrail & Safety Tooling",
    why: "Guardrails AI, NeMo Guardrails, custom output validators, rule-based action approval gates, rate limiting infrastructure.",
    pills: ["Guardrails AI", "NeMo Guardrails", "Output validators", "Approval gates"],
  },
  {
    icon: Server,
    title: "Infrastructure",
    why: "AWS Bedrock, Azure OpenAI Service, Google Vertex AI, self-hosted deployment for data privacy requirements.",
    pills: ["AWS Bedrock", "Azure OpenAI", "Vertex AI", "Self-hosted"],
  },
]

export const teamRoles: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Brain,
    title: "Agentic AI Architects",
    desc: "Senior specialists who design the agent's reasoning approach, autonomy boundaries, tool access scope, and overall system architecture before development begins - the most consequential decisions in any agentic project.",
  },
  {
    icon: Bot,
    title: "LLM & Agent Engineers",
    desc: "Engineers who build the agent logic, integrate orchestration frameworks, implement tool-calling, and handle the prompt and context engineering that determines how reliably an agent performs its task.",
  },
  {
    icon: Shield,
    title: "AI Safety & Guardrail Engineers",
    desc: "Specialists focused specifically on output validation, action approval workflows, rate limiting, and failure mode mitigation - the infrastructure that keeps autonomous systems safe in production.",
  },
  {
    icon: Layers,
    title: "Integration Engineers",
    desc: "Engineers who build the connections between agents and your real systems - APIs, databases, internal tools - with carefully scoped permissions so agents can only take explicitly authorised actions.",
  },
  {
    icon: TestTube2,
    title: "Evaluation & QA Engineers",
    desc: "Specialists who design and run structured evaluation frameworks, build adversarial test scenarios, and continuously monitor deployed agents for behavioural drift and emerging failure patterns.",
  },
  {
    icon: Server,
    title: "MLOps Engineers (Agentic Systems)",
    desc: "Engineers who build the production infrastructure specific to agentic AI - audit logging, cost monitoring, agent versioning, rollback capability, and the observability layer that standard application monitoring doesn't cover.",
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: CheckCircle2,
    title: "End-to-End Task Completion, Not Just Information",
    desc: "Unlike a standard chatbot or search tool, agents complete the actual task - updating a record, processing a request, taking an action - removing the step where a human has to read an AI's output and then go do the work manually.",
  },
  {
    icon: Zap,
    title: "Significant Reduction in Multi-Step Process Time",
    desc: "Workflows that require checking multiple systems, cross-referencing data, and making a decision based on combined context - work that previously took a person 20-30 minutes per case - can often be completed by an agent in seconds, with human review only for genuine exceptions.",
  },
  {
    icon: Scale,
    title: "Consistent Application of Business Rules",
    desc: "Agents apply defined policies and rules the same way every time, without the variability that comes from different staff members interpreting guidelines differently - particularly valuable for compliance-sensitive and approval-based processes.",
  },
  {
    icon: Activity,
    title: "Faster Response Times at Scale",
    desc: "Agentic customer service and operational systems can handle volume spikes without the lag that comes from hiring and training additional staff - important for businesses with seasonal demand or rapid growth.",
  },
  {
    icon: Users,
    title: "Freed Capacity for Higher-Value Human Work",
    desc: "When agents handle the routine, well-defined portion of a workflow, your team's time shifts toward the judgment calls, relationship management, and complex problem-solving that actually require a person.",
  },
  {
    icon: GitBranch,
    title: "A Foundation That Scales With Confidence",
    desc: "Because well-built agentic systems include audit trails, evaluation frameworks, and clear autonomy boundaries, you can expand their scope over time with evidence of reliability - rather than hoping a black-box system continues working as you give it more responsibility.",
  },
]

export const engagementModels = [
  {
    featured: false,
    title: "Agentic AI Feasibility Assessment",
    timeline: "2-4 weeks",
    desc: "A focused engagement where we evaluate whether your candidate use case is genuinely suited to an agentic approach, assess what tool access and data the agent would need, define realistic autonomy boundaries, and give you a clear recommendation and cost estimate before you commit to building.",
    benefits: [
      "Use case suitability assessment",
      "Tool access and integration scoping",
      "Autonomy boundary recommendations",
      "Risk assessment for the proposed agent actions",
      "Costed build recommendation",
    ],
  },
  {
    featured: true,
    title: "Pilot Agent Development",
    timeline: "6-10 weeks",
    desc: "A focused build of a single, well-bounded agent deployed to a limited pilot with active human oversight. The right starting point for most organisations - proves the concept works reliably before expanding scope or building multi-agent systems.",
    benefits: [
      "Agent design and guardrail implementation",
      "Tool and system integration",
      "Evaluation and red-teaming before launch",
      "Pilot deployment with oversight dashboard",
      "Performance report and scale-up recommendation",
    ],
  },
  {
    featured: false,
    title: "Full Agentic System Development",
    timeline: "12-20+ weeks",
    desc: "End-to-end development of a multi-agent system or a fleet of task-specific agents, including full orchestration, comprehensive guardrails, evaluation infrastructure, and production MLOps. For organisations that have validated the approach and are ready to deploy at scale.",
    benefits: [
      "Multi-agent architecture and orchestration",
      "Full guardrail and safety infrastructure",
      "Comprehensive evaluation framework",
      "Production deployment with monitoring",
      "Audit trail and compliance reporting",
    ],
  },
  {
    featured: false,
    title: "Embedded Agentic AI Team Augmentation",
    timeline: "Ongoing",
    desc: "Senior agentic AI engineers join your existing team directly - working in your tools, your sprints, and your codebase. Best for product companies building agentic features into their own product who need specialised expertise integrated into their existing engineering org.",
    benefits: [
      "Pre-vetted senior agentic AI specialists",
      "48-hour onboarding into your stack",
      "Full integration with your engineering workflow",
      "Full-time or part-time availability",
      "Flexible scaling with 30 days notice",
    ],
  },
]

export const costTimelines = [
  { scope: "Agentic AI Feasibility Assessment", timeline: "2-4 weeks", investment: "$8,000 - $20,000" },
  { scope: "Pilot Agent (single, well-bounded use case)", timeline: "6-10 weeks", investment: "$30,000 - $80,000" },
  { scope: "Full Multi-Agent System", timeline: "12-20+ weeks", investment: "$100,000 - $350,000+" },
  { scope: "Embedded Team Augmentation", timeline: "Ongoing", investment: "Custom monthly rate" },
]

export const faqs = [
  {
    question: "What's the actual difference between agentic AI and a regular chatbot or LLM feature?",
    answer:
      "A standard LLM feature takes an input and produces an output - answering a question, generating text, classifying a document. An agentic AI system goes further: it can plan a sequence of steps, decide which tools or systems to use, take actions in those systems, evaluate the results, and adjust its approach - often with limited human intervention at each step. The key distinction is autonomy over a multi-step process, not just a single input-output exchange.",
  },
  {
    question: "Is agentic AI safe to use for tasks that involve real business actions?",
    answer:
      "It can be, if it's built with the right safeguards - clearly scoped permissions, action approval workflows for higher-stakes decisions, comprehensive logging, and rigorous evaluation before deployment. It is not safe if it's built without those safeguards, which unfortunately describes a lot of agentic AI projects built quickly with off-the-shelf tooling and no guardrail engineering. The safety comes from how it's built, not from the underlying technology alone.",
  },
  {
    question: "How much does an agentic AI project cost?",
    answer:
      "A feasibility assessment typically costs $8,000-$20,000 USD. A pilot agent - a single, well-bounded use case with guardrails and a limited deployment - usually runs $30,000-$80,000. A full multi-agent system with comprehensive orchestration, evaluation infrastructure, and production deployment ranges from $100,000 to $350,000+ depending on the number of agents, integration complexity, and autonomy level. We give a detailed estimate after understanding your specific use case and requirements.",
  },
  {
    question: "How do you prevent an agent from taking the wrong action?",
    answer:
      "Through several layers working together: scoped permissions that limit what systems and actions an agent can access at all; output validation that checks an agent's proposed action against defined rules before it executes; approval workflows that route higher-stakes or lower-confidence decisions to a human; and rigorous pre-deployment evaluation against edge cases and adversarial scenarios. No single layer is sufficient on its own - we build all of them in combination.",
  },
  {
    question: "Should we start with a single agent or build a multi-agent system?",
    answer:
      "Almost always start with a single, well-bounded agent. Multi-agent systems are more complex to build, harder to evaluate, and introduce coordination failure modes that don't exist in single-agent systems. We recommend proving an agentic approach works reliably on one task before expanding to multi-agent orchestration - and we'll say so even if a multi-agent system sounds more impressive.",
  },
  {
    question: "Can an agent access our internal systems and data securely?",
    answer:
      "Yes, and this is something we design carefully. Agents access only the specific systems and data they need for their defined task, through scoped API credentials or service accounts - not broad access to everything. For sensitive data or systems, we can deploy with private model hosting so data doesn't leave your infrastructure, and we build audit logging so every system access by an agent is traceable.",
  },
  {
    question: "How do you measure whether an agent is actually working well?",
    answer:
      "Beyond standard accuracy metrics, we track task completion rate, the rate at which the agent correctly escalates to a human versus incorrectly taking autonomous action, time-to-resolution compared to the manual process, and ongoing monitoring for behavioural drift over time. We define these metrics during the boundary-definition phase, before development starts, so there's a clear standard the deployed system is measured against.",
  },
  {
    question: "We already use a chatbot or basic AI tool. Is it worth upgrading to an agentic approach?",
    answer:
      "It depends on whether your current tool is limited by what it can say versus what it can do. If your chatbot answers questions well but customers or staff still have to go do the actual task manually afterward, an agentic upgrade that completes the task end-to-end is usually a meaningful improvement. If the limitation is more about answer quality or coverage, agentic capability may not be the right next investment. We'll assess this honestly during a feasibility conversation.",
  },
]

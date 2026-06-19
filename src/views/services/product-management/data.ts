import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  ClipboardList,
  Compass,
  FileText,
  GitBranch,
  HeartPulse,
  Kanban,
  Layers,
  LineChart,
  MessageSquare,
  Monitor,
  RefreshCw,
  Rocket,
  Search,
  Settings,
  Shield,
  ShoppingCart,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users,
  Workflow,
} from "lucide-react"

export const heroTrustItems = [
  "Embedded PMs, not slide-deck advisors",
  "Roadmaps, discovery & delivery ownership",
  "Works in your tools - Jira, Linear, Notion",
  "Handover built into every engagement",
]

export const trustStats = [
  { number: "150+", label: "Products managed end-to-end" },
  { number: "40+", label: "Product managers & strategists" },
  { number: "8+", label: "Years of PM delivery" },
  { number: "92%", label: "On-time release rate" },
]

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: Compass,
    title: "Product Strategy & Vision",
    desc: "Define where your product is going and why. We help leadership teams develop product vision, articulate value propositions, frame positioning, and build a strategic narrative that aligns executives, investors, and engineering.",
    value: "A direction everyone can rally behind",
    tags: ["Vision", "Positioning", "Value proposition", "Strategy"],
  },
  {
    icon: GitBranch,
    title: "Product Roadmap Development",
    desc: "Build roadmaps that reflect business priorities, technical constraints, and user needs - not just a wishlist of features. Defensible, time-bound, and useful in stakeholder conversations.",
    value: "Roadmaps that drive decisions, not debates",
    tags: ["Prioritisation", "Timeline planning", "Stakeholder alignment", "Now/Next/Later"],
  },
  {
    icon: Search,
    title: "Discovery & User Research",
    desc: "Talk to users before building for them. Structured discovery - user interviews, usability testing, competitive analysis, and job-to-be-done mapping - to validate assumptions before they become expensive commitments.",
    value: "Build confidence before you build software",
    tags: ["User interviews", "Usability testing", "JTBD", "Competitive analysis"],
  },
  {
    icon: FileText,
    title: "Requirements & Specification Writing",
    desc: "Clear, actionable product requirements that development teams can actually build from. PRDs, user stories, acceptance criteria, edge cases, and API contracts - written by people who understand business and engineering.",
    value: "Specs that reduce rework in sprint three",
    tags: ["PRDs", "User stories", "Acceptance criteria", "API contracts"],
  },
  {
    icon: Kanban,
    title: "Backlog Management & Prioritisation",
    desc: "Implement and run prioritisation frameworks - RICE, MoSCoW, Kano, opportunity scoring - that keep your team focused on work that moves the needle, not just the work requested loudest.",
    value: "A backlog that reflects real priorities",
    tags: ["RICE", "MoSCoW", "Kano", "Opportunity scoring"],
  },
  {
    icon: Workflow,
    title: "Agile & Sprint Management",
    desc: "Ceremony facilitation, sprint planning, velocity tracking, retrospectives, and dependency management - run for sustainable delivery pace and genuine team improvement, not process theatre.",
    value: "Predictable delivery without burnout",
    tags: ["Sprint planning", "Retrospectives", "Velocity", "Dependencies"],
  },
  {
    icon: Rocket,
    title: "Go-to-Market Planning",
    desc: "Product launches that land. We coordinate across product, marketing, sales, and customer success to define launch strategy, rollout sequencing, enablement materials, and success metrics.",
    value: "Launches that sales and customers understand",
    tags: ["Launch strategy", "Enablement", "Rollout", "Success metrics"],
  },
  {
    icon: Users,
    title: "Stakeholder Management & Alignment",
    desc: "Communication structures, reporting cadences, and escalation paths that keep executives informed, engaged, and aligned - without slowing down delivery.",
    value: "Less alignment fire-fighting for leadership",
    tags: ["Executive updates", "Reporting cadence", "Escalation paths", "Alignment"],
  },
  {
    icon: LineChart,
    title: "Data & Analytics Strategy",
    desc: "Define the metrics that actually matter. Establish product KPIs, instrument analytics, build dashboards, and create the data culture that enables evidence-based decisions.",
    value: "Decisions backed by data, not opinions",
    tags: ["KPIs", "Instrumentation", "Dashboards", "Funnel analysis"],
  },
  {
    icon: Settings,
    title: "Product Operations",
    desc: "Design and implement the tooling, processes, documentation standards, and cross-functional workflows that make your product organisation run smoothly as it scales.",
    value: "Operational foundation for scaling PM teams",
    tags: ["Tooling", "Process design", "Documentation", "Workflows"],
  },
  {
    icon: RefreshCw,
    title: "Legacy Product Modernisation",
    desc: "Assess, rationalise, and rebuild product strategies for products with technical debt, feature bloat, and declining user satisfaction that need a second act.",
    value: "A clear path forward for mature products",
    tags: ["Product audit", "Rationalisation", "Modernisation", "Second act"],
  },
  {
    icon: Trophy,
    title: "Fractional CPO Services",
    desc: "C-suite product leadership without the full-time executive cost. Strategic decisions, investor conversations, and team building - on a part-time basis for startups and growth-stage companies.",
    value: "Executive PM leadership without full-time cost",
    tags: ["Fractional CPO", "Investor narrative", "Org design", "Hiring guidance"],
  },
]

export const industries: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Monitor,
    title: "SaaS & B2B Software",
    desc: "Subscription product strategy, pricing model evolution, enterprise feature development, integration ecosystems, and B2B retention dynamics.",
  },
  {
    icon: Shield,
    title: "FinTech & Financial Services",
    desc: "Regulated product development, compliance-aware feature delivery, fraud and risk product management, and trust-first UX requirements.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & HealthTech",
    desc: "Clinical workflow products, patient-facing applications, regulatory considerations, interoperability challenges, and care-quality sensitivity.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce & Retail Tech",
    desc: "Conversion optimisation, personalisation product strategy, marketplace platform management, and the fast iteration cycles retail tech demands.",
  },
  {
    icon: Layers,
    title: "Enterprise Software & Platforms",
    desc: "Complex stakeholder landscapes, long release cycles, customer advisory boards, platform API strategy, and customisation vs. coherence balance.",
  },
  {
    icon: TrendingUp,
    title: "Consumer Apps & Mobile",
    desc: "Growth loops, engagement mechanics, monetisation strategy, App Store optimisation, and rigorous A/B testing culture.",
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    title: "We think like operators, not advisors",
    desc: "We don't produce slide decks and hand them off. We take accountability for outcomes - roadmap delivery, team velocity, stakeholder satisfaction, and product performance - the same way an embedded PM lead would.",
  },
  {
    icon: GitBranch,
    title: "Engineering credibility",
    desc: "Our PMs know when something is technically risky, when a timeline is unrealistic, and when a requirement is ambiguous in ways that will cause problems in sprint three. That credibility makes cross-functional alignment significantly easier.",
  },
  {
    icon: MessageSquare,
    title: "We say no to the right things",
    desc: "A good PM's most valuable skill is helping a business build fewer, better things. We're comfortable pushing back on feature requests, stakeholder pressure, and scope creep - because unfocused roadmaps damage product teams.",
  },
  {
    icon: Layers,
    title: "Startup and enterprise experience",
    desc: "We've managed products where the runway is 8 months and where the enterprise sales cycle is 18 months. The PM approach required in each context is completely different. We calibrate to your actual situation.",
  },
  {
    icon: Search,
    title: "User obsession without user worship",
    desc: "We take user research seriously and build it into every engagement. But we also know users don't always know what they want, and product decisions require balancing user input with business viability.",
  },
  {
    icon: ClipboardList,
    title: "Handover built in",
    desc: "Our goal is to leave your product organisation stronger than we found it. Every engagement includes documentation, process handover, and knowledge transfer so your team can operate independently when we step back.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Audit (Week 1–2)",
    desc: "We understand your product, team, current processes, and the problems you're actually trying to solve. We audit documentation, interview stakeholders, and assess the roadmap, backlog, and delivery cadence.",
    deliverables: ["Current state audit", "Stakeholder interviews", "Gap analysis"],
  },
  {
    num: "02",
    title: "Alignment & Planning (Week 2–3)",
    desc: "We present findings, agree on engagement scope and priorities, establish communication rhythms, and set up tooling and process infrastructure. Everything is explicit and agreed upfront.",
    deliverables: ["Engagement scope", "Communication plan", "Tooling setup"],
  },
  {
    num: "03",
    title: "Roadmap & Backlog Work (Ongoing)",
    desc: "We build or rebuild the roadmap, clean and prioritise the backlog, and establish the prioritisation framework your team will use going forward. Structure starts to replace chaos.",
    deliverables: ["Prioritised roadmap", "Clean backlog", "Prioritisation framework"],
  },
  {
    num: "04",
    title: "Embedded Delivery Management (Ongoing)",
    desc: "We run sprint ceremonies, manage dependencies, unblock engineering, communicate with stakeholders, and keep delivery moving. We're in your Slack, Jira, and standups - a full team member.",
    deliverables: ["Sprint facilitation", "Dependency management", "Stakeholder updates"],
  },
  {
    num: "05",
    title: "Launch & Go-to-Market Coordination (Per Release)",
    desc: "For every significant release, we coordinate the launch plan across product, engineering, marketing, and sales - ensuring the right people know the right things at the right time.",
    deliverables: ["Launch plan", "Enablement materials", "Release coordination"],
  },
  {
    num: "06",
    title: "Measurement, Retrospective & Iteration (Monthly)",
    desc: "We track product KPIs against defined targets, run monthly retrospectives on delivery and product outcomes, and adjust strategy based on what the data tells us.",
    deliverables: ["KPI reporting", "Monthly retrospective", "Strategy adjustments"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: Kanban,
    title: "Project & Backlog Management",
    why: "Jira, Linear, Notion, Asana, Monday.com, Shortcut, ClickUp, Trello, and Azure DevOps - fluent in all and opinionated about when to use which.",
    pills: ["Jira", "Linear", "Notion", "Asana", "Azure DevOps"],
  },
  {
    icon: GitBranch,
    title: "Roadmapping Tools",
    why: "Productboard, Aha!, Roadmunk, Craft.io, Miro, and FigJam for strategy visualisation and stakeholder communication.",
    pills: ["Productboard", "Aha!", "Roadmunk", "Miro", "FigJam"],
  },
  {
    icon: Search,
    title: "User Research & Testing",
    why: "Maze, UserTesting, Hotjar, FullStory, Dovetail, and Lookback for structured discovery and usability testing at scale.",
    pills: ["Maze", "UserTesting", "Hotjar", "Dovetail", "Lookback"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Data",
    why: "Mixpanel, Amplitude, Google Analytics, Heap, Segment, Metabase, Tableau, and Looker for instrumentation and product performance dashboards.",
    pills: ["Mixpanel", "Amplitude", "Heap", "Segment", "Looker"],
  },
  {
    icon: FileText,
    title: "Documentation & Specs",
    why: "Confluence, Notion, and Google Docs for PRDs, user stories, decision logs, release notes, and operational documentation.",
    pills: ["Confluence", "Notion", "Google Docs", "PRDs", "Decision logs"],
  },
  {
    icon: MessageSquare,
    title: "Communication & Collaboration",
    why: "Slack, Microsoft Teams, Loom, and Figma for async communication, stakeholder updates, and design handoff.",
    pills: ["Slack", "Teams", "Loom", "Figma", "Async updates"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: ClipboardList,
    title: "Senior Product Managers",
    desc: "End-to-end ownership of product areas, roadmap management, sprint facilitation, and stakeholder communication. Typically lead individual product lines or squads.",
    tags: ["Roadmap", "Sprints", "Stakeholders", "Delivery"],
  },
  {
    icon: Trophy,
    title: "Principal / Lead PMs",
    desc: "Cross-squad coordination, product strategy ownership, and team-level leadership for organisations with multiple product streams that need structure and alignment.",
    tags: ["Strategy", "Multi-squad", "Leadership", "Alignment"],
  },
  {
    icon: Compass,
    title: "Fractional CPOs",
    desc: "Executive-level product leadership for startups and growth-stage companies. Strategic input, investor communication, hiring guidance, and organisational design.",
    tags: ["CPO", "Investor comms", "Org design", "Hiring"],
  },
  {
    icon: LineChart,
    title: "Product Analysts",
    desc: "Instrumentation, dashboard building, funnel analysis, cohort reporting, and A/B test design. The data layer that makes product decisions defensible.",
    tags: ["Analytics", "Dashboards", "A/B tests", "Cohorts"],
  },
  {
    icon: Search,
    title: "UX Researchers",
    desc: "User interview design, usability testing, synthesis, and insight communication. Embedded alongside PMs to ensure user evidence informs prioritisation.",
    tags: ["Interviews", "Usability", "Synthesis", "Discovery"],
  },
  {
    icon: Settings,
    title: "Product Operations Specialists",
    desc: "Process design, tooling setup, documentation standards, and cross-functional workflow optimisation. The operational infrastructure that scales product organisations.",
    tags: ["ProdOps", "Tooling", "Process", "Documentation"],
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: TrendingDown,
    title: "Fewer wasted development cycles",
    desc: "The average software team spends 30–40% of engineering capacity on features that are never used or quickly deprecated. Rigorous discovery, prioritisation, and requirements discipline dramatically reduces that waste.",
  },
  {
    icon: Rocket,
    title: "Faster, more predictable delivery",
    desc: "Teams with clear requirements, managed backlogs, and well-run sprints deliver more predictably - because they spend less time on rework, clarification, and mid-sprint scope changes.",
  },
  {
    icon: Users,
    title: "Products that retain users",
    desc: "Products built on real user research and iterative validation have significantly higher retention than those built on assumptions. Lower churn, higher NPS, and stronger word-of-mouth.",
  },
  {
    icon: MessageSquare,
    title: "Better stakeholder relationships",
    desc: "Structured communication, transparent roadmaps, and clear decision-making frameworks reduce friction between product, engineering, and executive teams.",
  },
  {
    icon: Layers,
    title: "Scalable product organisations",
    desc: "Documented processes, clear roles, consistent tooling, and shared decision-making frameworks let your PM function scale from 2 to 20 people without chaos.",
  },
  {
    icon: TrendingUp,
    title: "Stronger go-to-market execution",
    desc: "Product launches that are coordinated, enablement materials that exist, and sales teams that understand what was built - made systematic, not accidental.",
  },
]

export const engagementModels = [
  {
    featured: true,
    title: "Embedded Product Management",
    who: "Best for: ongoing product ownership",
    desc: "A dedicated PM or PM team embedded directly in your organisation - owning roadmap, running delivery, and managing stakeholders. Full-time hire experience with external flexibility.",
    benefits: [
      "Full PM accountability, not advisory input",
      "Sprint-based delivery, weekly stakeholder updates",
      "Scale seniority and team size as needed",
      "Minimum 3-month engagement, rolling monthly after",
    ],
  },
  {
    featured: false,
    title: "Fractional CPO / Product Leadership",
    who: "Best for: startups pre-Series B",
    desc: "Senior product leadership on a part-time basis - typically 2–3 days per week. Strategic input, executive stakeholder management, and investor-level product narrative.",
    benefits: [
      "C-suite calibre thinking without full-time cost",
      "Investor and board-level communication support",
      "Product org design and hiring guidance",
      "Flexible hours and engagement duration",
    ],
  },
  {
    featured: false,
    title: "Product Sprint (Fixed Scope)",
    who: "Best for: defined deliverables",
    desc: "A focused, time-boxed engagement with a defined output - product strategy, roadmap, discovery sprint, backlog rebuild, or go-to-market plan. Clear brief, fixed deliverable, defined timeline.",
    benefits: [
      "Output-based, not time-based pricing",
      "Delivered in 2–6 weeks depending on scope",
      "Full documentation and handover",
      "Optional follow-on embedded support",
    ],
  },
  {
    featured: false,
    title: "PM Team Augmentation",
    who: "Best for: extending your PM team",
    desc: "Extend your existing product team with specific expertise - a senior PM for a new product area, a product analyst, or a UX researcher. No hiring lag.",
    benefits: [
      "Right seniority for the specific need",
      "Embedded in your tools and processes",
      "Start within 48–72 hours",
      "No long-term commitment required",
    ],
  },
]

export const faqs = [
  {
    question: "How much does product management consulting cost?",
    answer:
      "Embedded PM engagements typically start from $8,000–$15,000 per month depending on seniority, hours, and scope. Fractional CPO engagements range from $5,000–$12,000 per month. Fixed-scope sprints are quoted per deliverable, typically $10,000–$40,000 depending on complexity. We provide a detailed scope and cost estimate after an initial discovery call.",
  },
  {
    question: "How quickly can a PM embed with our team?",
    answer:
      "In most cases, we can have a PM embedded and productive within 48–72 hours of agreement. We interview key stakeholders, review existing documentation, and join your tools before the first working day.",
  },
  {
    question: "Do we really need external PM support if we already have developers?",
    answer:
      "Developers are excellent at building things. Product management is a separate discipline - focused on deciding what to build, in what order, and why. Without that function, engineering teams often build the wrong things efficiently. The cost of wasted development cycles typically far exceeds the cost of product management.",
  },
  {
    question: "What's the difference between a Product Manager and a Project Manager?",
    answer:
      "A Project Manager focuses on delivery: timelines, resources, risk, and process. A Product Manager focuses on outcomes: what to build, why it matters, how it serves users, and whether it achieves business goals. Both roles are valuable - they're solving different problems.",
  },
  {
    question: "How do you handle situations where stakeholders disagree on product direction?",
    answer:
      "Stakeholder conflict is almost always a symptom of unclear strategy, undefined success criteria, or broken communication structures. We address the root cause through alignment sessions, prioritisation frameworks, and communication rhythms that make decision-making transparent and consistent.",
  },
  {
    question: "Can you work with an existing engineering team we don't manage?",
    answer:
      "Yes. A significant portion of our PM engagements involve working with engineering teams that are either in-house or managed by a separate agency. We adapt ceremony design, communication style, and backlog management to what works for the people doing the building.",
  },
  {
    question: "How do you measure success in a product management engagement?",
    answer:
      "We agree on measurable success criteria upfront - typically delivery metrics (sprint velocity, release predictability, backlog health), product metrics (activation, retention, feature adoption), and process metrics (stakeholder satisfaction, requirement rework rate). We report against these monthly.",
  },
  {
    question: "What happens at the end of an engagement - do we lose everything you built?",
    answer:
      "No. Handover is built into every engagement. We document all processes, maintain clean backlogs and roadmaps, and run knowledge transfer sessions throughout - not just at the end. When we step back, your team should be fully capable of running independently.",
  },
]

import type { LucideIcon } from "lucide-react"
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Clock,
  Cloud,
  Code2,
  Database,
  FileText,
  Gauge,
  Headphones,
  Layers,
  LifeBuoy,
  Lock,
  MessageSquare,
  Monitor,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react"

export const trustStats = [
  { number: "99.5%", label: "Average uptime SLA across supported applications" },
  { number: "<4h", label: "Critical incident response time" },
  { number: "120+", label: "Applications under active support" },
  { number: "24/7", label: "Monitoring and on-call coverage available" },
]

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Activity,
    title: "24/7 Application Monitoring & Alerting",
    desc: "Proactive monitoring of application health, uptime, error rates, response times, and infrastructure metrics — with intelligent alerting that reaches the right people at the right time. We configure dashboards, set meaningful thresholds, and reduce alert noise so your team responds to real problems, not false positives.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response & Bug Resolution",
    desc: "Structured incident management from detection through resolution and post-mortem. Critical issues triaged and assigned within minutes, with clear communication to stakeholders, root cause analysis, and permanent fixes — not just workarounds that create technical debt.",
  },
  {
    icon: RefreshCw,
    title: "Preventive Maintenance & Health Checks",
    desc: "Scheduled maintenance windows, dependency updates, log rotation, database housekeeping, certificate renewals, and proactive health audits that catch problems before they become outages. Prevention is cheaper than recovery — and your users notice the difference.",
  },
  {
    icon: ShieldCheck,
    title: "Security Patching & Vulnerability Management",
    desc: "Timely application of security patches, dependency vulnerability scanning, CVE remediation, and compliance-aligned update schedules. We track what's running in production, assess risk severity, and patch or mitigate without breaking functionality.",
  },
  {
    icon: Gauge,
    title: "Performance Optimisation & Scaling",
    desc: "Identify and resolve performance bottlenecks — slow queries, memory leaks, inefficient API calls, caching gaps, and infrastructure constraints. We optimise for the workloads you actually have, not theoretical peak loads, and scale infrastructure when growth demands it.",
  },
  {
    icon: Database,
    title: "Database Administration & Optimisation",
    desc: "Database health monitoring, query optimisation, index management, backup verification, replication checks, and capacity planning for PostgreSQL, MySQL, MongoDB, SQL Server, and cloud-managed databases. Your data layer is often the first thing to fail under load — we keep it healthy.",
  },
  {
    icon: Rocket,
    title: "Release Management & Deployment Support",
    desc: "Managed deployment pipelines, release coordination, rollback procedures, smoke testing, and post-deployment verification. Whether you release weekly or monthly, we ensure deployments are predictable, documented, and reversible when something goes wrong.",
  },
  {
    icon: Wrench,
    title: "Legacy Application Support & Stabilisation",
    desc: "Ongoing support for applications built on older frameworks, undocumented codebases, or systems where the original developers are no longer available. We stabilise, document, and incrementally improve legacy systems without forcing a full rewrite before you're ready.",
  },
  {
    icon: Headphones,
    title: "SLA-Based Helpdesk & User Support",
    desc: "Tiered support for end users and internal teams — ticket triage, issue reproduction, workaround documentation, and escalation to engineering when needed. Defined response and resolution SLAs so your business knows what to expect when something breaks.",
  },
  {
    icon: FileText,
    title: "Documentation & Knowledge Base Management",
    desc: "Runbooks, architecture diagrams, troubleshooting guides, and knowledge base articles that capture what we learn while supporting your applications. Support shouldn't depend on one person's memory — we build documentation that outlasts any individual engagement.",
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    title: "We fix root causes, not just symptoms",
    desc: "Many support vendors close tickets fast and leave the underlying problem intact. We investigate properly, document what we find, and implement fixes that prevent the same issue from recurring. A support relationship should reduce incident volume over time — not maintain it.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication during incidents",
    desc: "When something is down, you need to know what's happening, what's being done, and when to expect resolution — without chasing updates. We provide structured incident communication with regular status updates, impact assessments, and honest timelines.",
  },
  {
    icon: Code2,
    title: "Engineers who can actually read your code",
    desc: "Application support requires real development skills — not just ticket routing. Our support engineers can debug production issues, write fixes, review pull requests, and work directly in your codebase across modern and legacy stacks.",
  },
  {
    icon: Lock,
    title: "Security and compliance are built into maintenance",
    desc: "Patching, access control reviews, dependency audits, and compliance-aligned change management aren't optional add-ons — they're part of how we maintain applications. Especially important for teams in regulated industries or handling sensitive data.",
  },
  {
    icon: FileText,
    title: "Documentation improves with every incident",
    desc: "Every significant issue we resolve becomes a runbook entry, a knowledge base article, or an architecture note. Your application's support knowledge grows over time, reducing mean time to resolution and making your internal team more self-sufficient.",
  },
  {
    icon: TrendingUp,
    title: "We measure what matters",
    desc: "Uptime, mean time to detect, mean time to resolve, incident frequency, and SLA compliance — tracked and reported monthly so you can see whether support is actually improving application reliability. Support without metrics is just hope.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Application Assessment & Onboarding",
    desc: "We review your application architecture, tech stack, deployment environment, monitoring setup, known issues, and support history. We identify gaps in observability, documentation, and incident response before we take ownership of production support.",
    deliverables: ["Application inventory", "Architecture review", "Support gap analysis", "Onboarding plan"],
  },
  {
    num: "02",
    title: "Monitoring & Alerting Setup",
    desc: "Configure or improve monitoring for application health, infrastructure metrics, error tracking, and business-critical workflows. Set alert thresholds, escalation paths, and on-call rotations aligned with your SLA requirements.",
    deliverables: ["Monitoring dashboards", "Alert configuration", "Escalation matrix", "On-call schedule"],
  },
  {
    num: "03",
    title: "Documentation & Runbook Creation",
    desc: "Build or update runbooks, deployment procedures, rollback steps, and troubleshooting guides for your most critical applications and common failure scenarios. Documentation is created from what we learn during onboarding and early support cycles.",
    deliverables: ["Runbook library", "Deployment procedures", "Architecture diagrams", "Known issues register"],
  },
  {
    num: "04",
    title: "Steady-State Support & Maintenance",
    desc: "Ongoing incident response, bug fixes, preventive maintenance, security patching, and performance monitoring according to your agreed SLA. Regular health checks, dependency updates, and proactive optimisation based on what monitoring reveals.",
    deliverables: ["Incident resolution", "Patch management", "Health check reports", "Monthly SLA report"],
  },
  {
    num: "05",
    title: "Release & Change Management",
    desc: "Coordinate deployments, manage release windows, execute smoke tests, and handle rollbacks when needed. Change management processes that balance speed with stability — especially important for applications with strict uptime requirements.",
    deliverables: ["Release coordination", "Deployment verification", "Change log", "Rollback procedures"],
  },
  {
    num: "06",
    title: "Continuous Improvement & Review",
    desc: "Monthly reviews of incident trends, SLA performance, recurring issues, and improvement opportunities. Quarterly roadmap discussions for technical debt reduction, modernisation, and support process refinement based on what the data shows.",
    deliverables: ["Monthly review report", "Improvement recommendations", "Quarterly roadmap session", "Updated documentation"],
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
    title: "Web & Frontend Applications",
    why: "React, Next.js, Vue, Angular, and legacy JavaScript frameworks — SPA and SSR applications with complex state management and third-party integrations",
    pills: ["React", "Next.js", "Vue", "Angular"],
  },
  {
    icon: Server,
    title: "Backend & API Services",
    why: "Node.js, Python, Java, .NET, Go, and PHP backends — REST, GraphQL, and microservice architectures running on-premises or in the cloud",
    pills: ["Node.js", "Python", "Java", ".NET", "Go"],
  },
  {
    icon: Cloud,
    title: "Cloud Platforms & Infrastructure",
    why: "AWS, GCP, Azure, and hybrid environments — EC2, Lambda, ECS, Kubernetes, App Service, Cloud Functions, and managed infrastructure",
    pills: ["AWS", "GCP", "Azure", "Kubernetes"],
  },
  {
    icon: Database,
    title: "Databases & Data Stores",
    why: "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, SQL Server, and cloud-managed databases — query optimisation, backup management, and replication monitoring",
    pills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    icon: Layers,
    title: "Mobile & Cross-Platform Apps",
    why: "iOS, Android, React Native, and Flutter applications — crash monitoring, OS compatibility updates, app store compliance, and backend integration support",
    pills: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    icon: Bell,
    title: "Monitoring & Observability",
    why: "Datadog, New Relic, Prometheus, Grafana, Sentry, PagerDuty, and CloudWatch — unified visibility into application and infrastructure health",
    pills: ["Datadog", "Sentry", "Prometheus", "PagerDuty"],
  },
  {
    icon: BarChart3,
    title: "DevOps & CI/CD Tools",
    why: "GitHub Actions, GitLab CI, Jenkins, Terraform, and Docker — pipeline maintenance, deployment automation, and infrastructure-as-code support",
    pills: ["GitHub Actions", "Jenkins", "Terraform", "Docker"],
  },
]

export const teamStats = [
  { value: "48h", label: "Average onboarding time" },
  { value: "24/7", label: "Monitoring & on-call available" },
  { value: "Multi-Stack", label: "Web · Mobile · Cloud · Legacy" },
  { value: "IST · GST · EST", label: "Time zones covered" },
]

export const teamRoles = [
  {
    title: "Application Support Engineers",
    desc: "Senior engineers who diagnose production issues, implement fixes, manage deployments, and maintain application health across your full tech stack — not just triage tickets.",
  },
  {
    title: "Site Reliability Engineers (SRE)",
    desc: "Specialists in uptime, incident response, monitoring architecture, and reliability engineering — defining SLOs, managing on-call rotations, and driving down mean time to resolution.",
  },
  {
    title: "Database Administrators",
    desc: "DBAs who monitor database health, optimise queries, manage backups and replication, plan capacity, and resolve data-layer issues that cause application slowdowns or outages.",
  },
  {
    title: "DevOps & Release Engineers",
    desc: "Engineers who maintain CI/CD pipelines, coordinate releases, manage infrastructure changes, and ensure deployments are safe, repeatable, and reversible.",
  },
  {
    title: "Security & Compliance Specialists",
    desc: "Engineers who manage vulnerability scanning, patch schedules, access reviews, and compliance-aligned change management for applications handling sensitive or regulated data.",
  },
  {
    title: "Support Coordinators & Technical Account Managers",
    desc: "Dedicated points of contact who manage SLA reporting, stakeholder communication, escalation coordination, and monthly review sessions — so support stays transparent and accountable.",
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: TrendingUp,
    title: "Higher Application Uptime & Reliability",
    desc: "Proactive monitoring, preventive maintenance, and structured incident response reduce unplanned downtime significantly. Clients on managed support plans typically see uptime improve from the mid-90s to 99.5%+ within the first quarter as recurring issues get resolved permanently.",
  },
  {
    icon: Clock,
    title: "Faster Incident Resolution",
    desc: "Dedicated support engineers who know your applications resolve critical issues in hours, not days. Clear escalation paths, documented runbooks, and 24/7 coverage mean problems get fixed while your internal team focuses on building new features.",
  },
  {
    icon: TrendingDown,
    title: "Lower Total Cost of Ownership",
    desc: "Outsourced application support is typically 40–60% less expensive than maintaining an equivalent in-house team — without sacrificing coverage quality. You pay for the support capacity you need, scaled up or down as your application portfolio changes.",
  },
  {
    icon: Users,
    title: "Your Internal Team Stays Focused on Product",
    desc: "When your developers aren't pulled into production firefighting, feature delivery accelerates. Support handles the operational burden — patching, monitoring, incident response, and maintenance — so your product team can stay in build mode.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Security & Compliance Risk",
    desc: "Timely patching, vulnerability management, and documented change control reduce the risk of security incidents and audit findings. Applications that aren't actively maintained become liabilities — support keeps them current and compliant.",
  },
  {
    icon: LifeBuoy,
    title: "Continuity When Key People Leave",
    desc: "When the developer who built your application moves on, support knowledge shouldn't leave with them. We maintain documentation, runbooks, and institutional knowledge that survives team changes — so your applications don't become orphaned.",
  },
]

export const engagementModels = [
  {
    title: "Essential Support Plan",
    desc: "Business-hours support with monitoring, incident response, and monthly maintenance for applications with moderate uptime requirements. Best for internal tools, staging environments, and applications where same-day response is acceptable.",
    includes: [
      "Business-hours monitoring and alerting (Mon–Fri)",
      "Incident response within agreed SLA windows",
      "Monthly preventive maintenance and health checks",
      "Security patch management on a scheduled cadence",
      "Monthly SLA and uptime report",
    ],
    bestFor: [
      "Internal business applications",
      "Applications with moderate traffic",
      "Teams with some in-house technical capacity",
      "Budget-conscious support requirements",
    ],
  },
  {
    title: "Professional Support Plan",
    desc: "Extended-hours support with 24/7 monitoring, faster response SLAs, and proactive performance optimisation. Best for customer-facing applications where downtime directly impacts revenue or user trust.",
    includes: [
      "24/7 monitoring and alerting",
      "Critical incident response within 4 hours",
      "Weekly health checks and dependency updates",
      "Performance monitoring and optimisation",
      "Release management and deployment support",
      "Dedicated technical account manager",
    ],
    bestFor: [
      "Customer-facing web and mobile applications",
      "SaaS products with paying subscribers",
      "E-commerce and transaction-heavy platforms",
      "Teams without dedicated DevOps or SRE capacity",
    ],
  },
  {
    title: "Enterprise Support Plan",
    desc: "Full-spectrum support for mission-critical applications with the strictest uptime and compliance requirements. Dedicated support team, custom SLAs, and quarterly strategic reviews.",
    includes: [
      "24/7 monitoring, on-call, and incident response",
      "Custom SLA with guaranteed uptime targets",
      "Dedicated support engineering team",
      "Security and compliance-aligned patch management",
      "Database administration and capacity planning",
      "Quarterly reliability and roadmap reviews",
    ],
    bestFor: [
      "Mission-critical enterprise applications",
      "Regulated industries (healthcare, finance, government)",
      "Large application portfolios requiring dedicated capacity",
      "Organisations with strict audit and compliance requirements",
    ],
  },
  {
    title: "Project-Based Support & Stabilisation",
    desc: "A focused engagement to stabilise a problematic application, document a legacy codebase, or establish support infrastructure before transitioning to an ongoing plan. Best when you need to get an application support-ready before committing to a retainer.",
    includes: [
      "Full application assessment and gap analysis",
      "Monitoring and alerting setup from scratch",
      "Runbook and documentation creation",
      "Critical bug fixes and stabilisation work",
      "Support plan recommendation and handover",
    ],
    bestFor: [
      "Legacy applications with no current support",
      "Post-launch applications with recurring issues",
      "Applications inherited from another vendor or team",
      "Teams evaluating ongoing support before committing",
    ],
  },
]

export const faqs = [
  {
    question: "What's included in application support and maintenance?",
    answer:
      "Our support covers monitoring and alerting, incident response and bug fixes, preventive maintenance, security patching, performance optimisation, database administration, release management, documentation, and SLA-based reporting. The specific scope depends on your support plan — Essential covers business-hours maintenance for moderate-priority applications, while Professional and Enterprise plans add 24/7 coverage, faster response times, and dedicated engineering capacity.",
  },
  {
    question: "How quickly do you respond to critical incidents?",
    answer:
      "Response times depend on your support plan and SLA agreement. On our Professional plan, critical incidents are acknowledged within 30 minutes and actively worked within 4 hours, 24/7. Enterprise plans include custom SLAs with guaranteed response and resolution targets. We define 'critical' clearly during onboarding — typically complete application unavailability, data loss risk, or security breaches.",
  },
  {
    question: "Can you support applications you didn't build?",
    answer:
      "Yes — supporting applications built by other teams or vendors is one of our most common engagements. We start with an assessment phase to understand the architecture, identify documentation gaps, and stabilise known issues before taking on ongoing support. Legacy and undocumented codebases take longer to onboard, but we've supported applications where the original developers were unavailable for years.",
  },
  {
    question: "What tech stacks do you support?",
    answer:
      "We support web applications (React, Next.js, Vue, Angular), backend services (Node.js, Python, Java, .NET, Go, PHP), mobile apps (iOS, Android, React Native, Flutter), cloud infrastructure (AWS, GCP, Azure, Kubernetes), and common databases (PostgreSQL, MySQL, MongoDB, Redis, SQL Server). If your stack isn't listed, ask — we regularly onboard applications on less common frameworks during the assessment phase.",
  },
  {
    question: "How is application support priced?",
    answer:
      "Support is typically priced as a monthly retainer based on application complexity, number of applications, required SLA tier, and tech stack. Essential plans start from approximately $2,500–$5,000 USD per month for a single application. Professional plans for customer-facing applications typically run $5,000–$15,000 per month. Enterprise plans with dedicated teams and custom SLAs are scoped individually. Project-based stabilisation engagements are quoted as fixed-price projects.",
  },
  {
    question: "Do we need to give you full access to our codebase and infrastructure?",
    answer:
      "For effective support, we need appropriate access — typically read/write access to repositories, monitoring dashboards, deployment pipelines, and production environments (with appropriate security controls). We work within your existing access management policies, use dedicated service accounts, and follow least-privilege principles. Access scope is agreed during onboarding and can be adjusted as the relationship develops.",
  },
  {
    question: "What happens during the onboarding period?",
    answer:
      "Onboarding typically takes 1–2 weeks depending on application complexity. We review architecture and documentation, set up or improve monitoring, create initial runbooks, identify known issues, establish communication channels and escalation paths, and agree SLAs. During onboarding, we're learning your systems — response times may be slightly longer until knowledge transfer is complete. We aim for 48-hour functional onboarding for straightforward applications.",
  },
  {
    question: "Can you support multiple applications under one plan?",
    answer:
      "Yes. Most clients have us support multiple applications under a single plan, with pricing scaled based on total application count and combined complexity. We maintain an application inventory with priority tiers so critical applications get appropriate response times even when multiple issues occur simultaneously.",
  },
  {
    question: "How do you handle security patches without breaking production?",
    answer:
      "We follow a structured patch management process: vulnerability assessment, impact analysis, testing in staging environments, scheduled deployment windows, post-patch verification, and rollback procedures if issues arise. Critical security patches (active exploits, zero-days) are fast-tracked with appropriate risk assessment. Non-critical patches are batched into scheduled maintenance windows to minimise disruption.",
  },
  {
    question: "What if we want to eventually bring support in-house?",
    answer:
      "We design our support engagements to make that transition possible. Documentation, runbooks, and knowledge base articles are maintained throughout the engagement so your internal team can take over when ready. We offer structured handover processes and can reduce support scope incrementally rather than requiring an abrupt transition. Many clients use us as a bridge while hiring internal SRE or platform engineering capacity.",
  },
]

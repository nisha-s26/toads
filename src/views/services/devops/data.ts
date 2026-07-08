import type { LucideIcon } from "lucide-react"
import {
  Activity,
  Cloud,
  Code2,
  Container,
  Database,
  FileText,
  GitBranch,
  Layers,
  Lock,
  MessageSquare,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Target,
  TrendingDown,
  Users,
  Workflow,
  Zap,
} from "lucide-react"

export const heroTrustItems = [
  "CI/CD, cloud & Kubernetes",
  "Security built into pipelines",
  "Documentation & handover included",
  "Ongoing support available",
]

export const trustStats = [
  { number: "CI/CD", label: "Automated pipelines and faster releases" },
  { number: "Cloud Native", label: "AWS · Azure · GCP · Kubernetes" },
  { number: "DevSecOps", label: "Security built into every pipeline stage" },
  { number: "4 Regions", label: "India · UAE · Saudi Arabia · US" },
]

export const heroSubheading = "Ship Faster. Break Less. Sleep Better."

export const heroCta = {
  label: "Talk to a DevOps Engineer",
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
    icon: GitBranch,
    title: "CI/CD Pipeline Design & Implementation",
    desc: "Automated build, test, and deployment pipelines using GitHub Actions, GitLab CI, Jenkins, or CircleCI. Faster releases, fewer manual errors, and consistent deployments across every environment.",
    value: "Removes manual handoffs and deployment bottlenecks",
    tags: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Setup & Management",
    desc: "Provision, configure, and manage cloud environments on AWS, GCP, or Azure. Infrastructure as Code using Terraform and Pulumi so your environments are reproducible, version-controlled, and auditable.",
    value: "Reproducible environments you can trust in production",
    tags: ["AWS", "GCP", "Azure", "Terraform", "Pulumi"],
  },
  {
    icon: Container,
    title: "Container Orchestration (Kubernetes)",
    desc: "Kubernetes cluster setup, configuration, scaling policies, and ongoing management. Helm chart development, namespace strategy, RBAC, and monitoring - for teams moving to containers or already running them.",
    value: "Scales workloads reliably without hero operations",
    tags: ["Kubernetes", "Helm", "EKS", "GKE", "AKS"],
  },
  {
    icon: TrendingDown,
    title: "Cloud Cost Optimisation",
    desc: "Audit your existing cloud spend, identify waste, and implement rightsizing, reserved instance planning, spot instance strategies, and automated resource scheduling. Most clients recover 30-50% of cloud cost within the first quarter.",
    value: "Cuts cloud waste without sacrificing performance",
    tags: ["Rightsizing", "Reserved instances", "Spot instances", "Scheduling"],
  },
  {
    icon: Code2,
    title: "Infrastructure as Code (IaC)",
    desc: "Rewrite manual, undocumented infrastructure into version-controlled, repeatable Terraform or Pulumi code. Eliminates the 'only Dave knows how this works' problem and makes environment provisioning predictable.",
    value: "Makes infrastructure repeatable and auditable",
    tags: ["Terraform", "Pulumi", "AWS CDK", "CloudFormation"],
  },
  {
    icon: Activity,
    title: "Site Reliability Engineering (SRE)",
    desc: "Define and implement SLOs, SLIs, and error budgets. Build runbooks, on-call rotations, incident response playbooks, and post-mortem processes that actually improve reliability over time.",
    value: "Improves reliability with measurable targets",
    tags: ["SLOs", "Error budgets", "Runbooks", "Incident response"],
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps & Security Automation",
    desc: "Shift security left with automated vulnerability scanning in your pipelines, secrets management (HashiCorp Vault, AWS Secrets Manager), container image scanning, dependency auditing, and compliance-as-code.",
    value: "Catches security issues before production",
    tags: ["Vault", "Trivy", "Snyk", "Compliance-as-code"],
  },
  {
    icon: Zap,
    title: "Monitoring, Logging & Observability",
    desc: "End-to-end observability stacks using Prometheus, Grafana, Datadog, or the ELK stack. Alerting that actually tells you something useful, dashboards your team will look at, and log pipelines that don't break the bank.",
    value: "Gives your team context when things break",
    tags: ["Prometheus", "Grafana", "Datadog", "ELK"],
  },
  {
    icon: Rocket,
    title: "Cloud Migration & Modernisation",
    desc: "Move from on-premises or legacy cloud environments to modern, well-architected cloud infrastructure. Lift-and-shift, re-platforming, or full re-architecture - depending on your timeline and risk tolerance.",
    value: "Modernises infrastructure without unnecessary risk",
    tags: ["Lift-and-shift", "Re-platforming", "Re-architecture", "DR planning"],
  },
  {
    icon: Layers,
    title: "Platform Engineering & Developer Experience",
    desc: "Build internal developer platforms that reduce toil, standardise deployments, and let your engineers self-serve infrastructure without needing to open a ticket. Backstage, custom CLIs, and golden path tooling.",
    value: "Reduces toil and speeds up developer onboarding",
    tags: ["Backstage", "Golden paths", "Self-service", "Internal platforms"],
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Users,
    title: "We don't build things your team can't maintain",
    desc: "Every tool, every abstraction, and every automation we introduce is chosen with your team's skill set in mind. If your engineers don't know Kubernetes deeply, we either train them or choose a managed service that doesn't require them to. No hero infrastructure.",
  },
  {
    icon: Target,
    title: "We fix the root cause, not just the symptom",
    desc: "If deployments are slow, there's usually a reason beyond 'the pipeline is slow'. We look at your branching strategy, testing approach, environment parity, and deployment frequency together. Fast pipelines built on bad practices just break faster.",
  },
  {
    icon: FileText,
    title: "Documentation is part of the deliverable",
    desc: "Every system we build comes with runbooks, architecture diagrams, and handover documentation written for the people who will maintain it - not just the people who built it. Your team shouldn't need us to explain what we built.",
  },
  {
    icon: MessageSquare,
    title: "We speak both engineering and business",
    desc: "We can talk to your CTOs and VPs about reliability targets, release frequency, and compliance requirements - and then turn around and work directly with your engineers in GitHub pull requests. No translation layer required.",
  },
  {
    icon: Lock,
    title: "Security isn't bolted on at the end",
    desc: "Security controls, secrets management, network policies, and compliance checks are built into the pipeline from day one - not added as an afterthought when an audit finds a gap. This is especially important for regulated industries.",
  },
  {
    icon: TrendingDown,
    title: "We optimise for your costs, not your complexity",
    desc: "More tooling is not always better. We recommend the simplest infrastructure that reliably meets your requirements, and we actively push back on over-engineering. Complexity is a hidden cost that compounds over time.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Infrastructure & Pipeline Audit",
    desc: "We start by understanding what you have. We review your existing CI/CD setup, infrastructure configuration, cloud spend, deployment process, incident history, and monitoring coverage. We map what's working, what's broken, and what's missing.",
    deliverables: ["Audit report", "Prioritised recommendations", "Risk register"],
  },
  {
    num: "02",
    title: "Architecture Planning",
    desc: "Based on the audit, we design the target state - the infrastructure, tooling, and processes you need. We present options at different investment levels so you can make an informed decision, not just accept whatever we recommend.",
    deliverables: ["Architecture diagrams", "Tooling recommendations", "Implementation roadmap"],
  },
  {
    num: "03",
    title: "Implementation (Phased)",
    desc: "We implement in prioritised phases, typically starting with the highest-pain or highest-risk areas. Every change is tested, peer-reviewed, and deployed incrementally. We don't do big bang cutovers unless there's no alternative.",
    deliverables: ["Infrastructure as Code", "CI/CD pipelines", "Deployed changes per roadmap"],
  },
  {
    num: "04",
    title: "Observability & Alerting Setup",
    desc: "Before we hand anything over, we ensure there's comprehensive monitoring, alerting, and logging in place. If something breaks at 2am, your team should know about it before your customers do - and have the context to fix it quickly.",
    deliverables: ["Monitoring dashboards", "Alert policies", "On-call runbooks"],
  },
  {
    num: "05",
    title: "Knowledge Transfer & Documentation",
    desc: "We document everything - not in jargon-heavy tech specs, but in practical runbooks and architecture guides your team can follow under pressure. We run handover sessions, pair with your engineers, and don't consider a project complete until your team is confident.",
    deliverables: ["Runbooks", "Architecture docs", "Handover sessions"],
  },
  {
    num: "06",
    title: "Ongoing Support & Optimisation",
    desc: "Infrastructure needs ongoing attention - cost optimisation, security patching, capacity planning, and tooling upgrades. We offer retainer-based ongoing support for teams that want a DevOps partner rather than a one-time project vendor.",
    deliverables: ["Monthly reviews", "Proactive optimisation", "Incident support"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    why: "AWS, GCP, Azure, DigitalOcean, and OVHcloud - chosen based on your workload, team familiarity, and compliance requirements.",
    pills: ["AWS", "GCP", "Azure", "DigitalOcean", "OVHcloud"],
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    why: "GitHub Actions, GitLab CI, Jenkins, CircleCI, Bitbucket Pipelines, ArgoCD, and Flux for reliable automated delivery.",
    pills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Flux"],
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    why: "Docker, Kubernetes on EKS/GKE/AKS, Helm, Kustomize, Rancher, and OpenShift for containerised workloads at scale.",
    pills: ["Docker", "Kubernetes", "Helm", "Kustomize", "OpenShift"],
  },
  {
    icon: Code2,
    title: "Infrastructure as Code",
    why: "Terraform, Pulumi, AWS CDK, Ansible, and CloudFormation for version-controlled, repeatable infrastructure.",
    pills: ["Terraform", "Pulumi", "AWS CDK", "Ansible", "CloudFormation"],
  },
  {
    icon: Activity,
    title: "Observability",
    why: "Prometheus, Grafana, Datadog, New Relic, ELK, Jaeger, and OpenTelemetry for end-to-end visibility.",
    pills: ["Prometheus", "Grafana", "Datadog", "ELK", "OpenTelemetry"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Secrets",
    why: "HashiCorp Vault, AWS Secrets Manager, Trivy, Snyk, OPA, Falco, and Checkov for security built into delivery.",
    pills: ["Vault", "Secrets Manager", "Trivy", "Snyk", "OPA"],
  },
  {
    icon: Network,
    title: "Networking & Service Mesh",
    why: "Nginx, Traefik, Istio, Linkerd, AWS ALB/NLB, and Cloudflare for traffic management and service communication.",
    pills: ["Nginx", "Traefik", "Istio", "Linkerd", "Cloudflare"],
  },
  {
    icon: Database,
    title: "Databases & Storage",
    why: "RDS, Cloud SQL, MongoDB Atlas, Redis, S3, GCS, and Azure Blob - with backup and DR automation.",
    pills: ["RDS", "Cloud SQL", "MongoDB Atlas", "Redis", "S3"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: Cloud,
    title: "Cloud Architects",
    desc: "Design cloud-native architectures that are secure, cost-efficient, and built for your actual workload - not a generic reference architecture.",
    tags: ["AWS", "GCP", "Azure", "Well-architected"],
  },
  {
    icon: Server,
    title: "DevOps Engineers",
    desc: "Pipeline builders, automation engineers, and infrastructure specialists who do the hands-on implementation work across your stack.",
    tags: ["CI/CD", "IaC", "Automation", "Pipelines"],
  },
  {
    icon: Activity,
    title: "Site Reliability Engineers (SREs)",
    desc: "Define reliability targets, build incident response processes, and reduce toil through automation for teams running production systems at scale.",
    tags: ["SLOs", "On-call", "Incident mgmt", "Toil reduction"],
  },
  {
    icon: Layers,
    title: "Platform Engineers",
    desc: "Build internal developer platforms, golden paths, and self-service infrastructure tooling that reduces cognitive load on your product engineers.",
    tags: ["Backstage", "Golden paths", "Self-service", "DX"],
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps Engineers",
    desc: "Security specialists who embed compliance, vulnerability management, and secrets handling into your development and deployment workflows.",
    tags: ["DevSecOps", "Compliance", "Secrets", "Scanning"],
  },
  {
    icon: Container,
    title: "Kubernetes Specialists",
    desc: "Container and orchestration engineers who handle cluster design, networking, storage, scaling policies, and day-2 operations.",
    tags: ["Kubernetes", "Helm", "Networking", "Day-2 ops"],
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Rocket,
    title: "Faster time to market",
    desc: "Automated pipelines remove manual handoffs, approval bottlenecks, and error-prone deployment steps. Teams that deploy once a week start deploying daily. Teams that deploy daily start deploying on demand.",
  },
  {
    icon: ShieldCheck,
    title: "Fewer production incidents",
    desc: "Proper testing gates, environment parity, progressive delivery (canary and blue/green deployments), and observability catch problems before they reach users - and cut mean time to recovery when they do.",
  },
  {
    icon: TrendingDown,
    title: "Lower infrastructure costs",
    desc: "Cloud environments without governance tend to accumulate waste. Rightsized instances, auto-scaling policies, reserved capacity planning, and scheduled shutdowns of non-production environments typically reduce cloud spend by 30-50%.",
  },
  {
    icon: Workflow,
    title: "Reduced engineering toil",
    desc: "When deployments are automated and infrastructure is self-service, your senior engineers stop spending half their time on operational work and start spending it on the product. That's a significant productivity gain.",
  },
  {
    icon: Users,
    title: "Faster, safer onboarding",
    desc: "Reproducible infrastructure as code means new developers can get a fully working local environment and be deploying to staging within hours - not days of manual setup and Slack messages asking 'how do I get this to work'.",
  },
  {
    icon: Lock,
    title: "Audit-ready compliance",
    desc: "Automated compliance checks, immutable audit trails, and policy-as-code mean you're not scrambling when SOC 2, ISO 27001, or a customer security questionnaire asks how your deployments are controlled.",
  },
]

export const engagementModels = [
  {
    featured: false,
    title: "DevOps Assessment & Roadmap",
    who: "Best for: teams needing clarity before investing",
    desc: "A structured 2-4 week engagement where we audit your current state, identify the highest-priority gaps, and produce a concrete, costed implementation roadmap.",
    benefits: [
      "CI/CD, infrastructure, and security audit",
      "Cloud cost analysis",
      "Risk-ranked improvement roadmap",
      "Tooling recommendations with rationale",
      "Presentation to technical leadership",
    ],
  },
  {
    featured: true,
    title: "Project-Based Implementation",
    who: "Best for: defined DevOps work",
    desc: "Fixed-scope engagements for defined work - building a CI/CD pipeline, migrating to Kubernetes, implementing IaC, or standing up an observability stack. Clear deliverables, timeline, and cost.",
    benefits: [
      "Scoping workshop and architecture planning",
      "Full implementation with peer review",
      "Testing and validation",
      "Documentation and runbooks",
      "Handover and knowledge transfer",
    ],
  },
  {
    featured: false,
    title: "Embedded DevOps Engineers",
    who: "Best for: scaling engineering teams",
    desc: "One or more senior DevOps engineers join your team directly - working in your tools, attending your standups, and operating as an extension of your engineering team.",
    benefits: [
      "Pre-vetted senior specialists",
      "48-hour onboarding into your stack",
      "Full-time or part-time availability",
      "Direct integration with your engineering workflow",
      "Scale up or down with 30 days notice",
    ],
  },
  {
    featured: false,
    title: "Managed DevOps Retainer",
    who: "Best for: ongoing infrastructure management",
    desc: "Ongoing management of your CI/CD pipelines, cloud infrastructure, security posture, and monitoring - with a dedicated team on call.",
    benefits: [
      "24/7 infrastructure monitoring",
      "Incident response and on-call support",
      "Monthly cost optimisation reviews",
      "Security patching and compliance updates",
      "Quarterly architecture reviews and roadmap sessions",
    ],
  },
]

export const faqs = [
  {
    question: "What exactly is DevOps, and do we actually need it?",
    answer:
      "DevOps is the combination of practices, automation, and culture that lets engineering teams deliver software reliably and frequently. If your team struggles with slow deployments, unpredictable releases, production incidents that take hours to diagnose, or cloud bills that keep climbing - you need it. It's not a tool you buy; it's a set of capabilities you build. We help you build them faster.",
  },
  {
    question: "How much do DevOps services cost?",
    answer:
      "A DevOps assessment typically runs $5,000-$15,000 USD. A project-based implementation - building a CI/CD pipeline, migrating to Kubernetes, or standing up an observability stack - usually costs $20,000-$80,000 depending on complexity. Embedded engineers are typically $4,000-$8,000 per month per person. Managed retainers vary based on environment size and SLA requirements. We provide a detailed quote after understanding your specific situation.",
  },
  {
    question: "We already have some DevOps practices in place. Can you improve what we have rather than rebuild it?",
    answer:
      "Yes - and this is the more common scenario. Very few teams are starting from zero. We assess what you have, identify what's causing the most pain or risk, and improve incrementally. We don't throw away working infrastructure to replace it with our preferred stack.",
  },
  {
    question: "Which cloud provider do you recommend - AWS, GCP, or Azure?",
    answer:
      "It depends on your workload, your team's familiarity, your existing software agreements, and your geographic requirements. AWS has the broadest service catalogue and is the default choice for most startups and SMEs. GCP has strong advantages for data and ML workloads. Azure is typically the best fit for enterprises with existing Microsoft infrastructure. We're certified across all three and will recommend what fits, not what we happen to prefer.",
  },
  {
    question: "How long does a typical DevOps engagement take?",
    answer:
      "An assessment is 2-4 weeks. A focused implementation project (e.g. building a CI/CD pipeline or migrating to Kubernetes) typically takes 6-12 weeks. A cloud migration or full DevOps transformation is usually a 3-6 month engagement. Embedded and managed engagements are ongoing. We'll give you a realistic timeline after a scoping conversation.",
  },
  {
    question: "Will our engineers be able to maintain what you build?",
    answer:
      "This is a question we're glad you're asking - because a lot of DevOps consultants build things only they can maintain. Our approach explicitly avoids this. We document everything, run handover sessions, pair with your engineers during implementation, and make tooling choices with your team's skill set in mind. If something requires expertise your team doesn't have, we'll either train them or choose a managed service that doesn't require it.",
  },
  {
    question: "Can you help us pass a SOC 2 or ISO 27001 audit?",
    answer:
      "We help teams build the technical controls that compliance frameworks require - automated access management, audit logging, secrets handling, network segmentation, vulnerability scanning, and deployment controls. We're not a certified auditor, but we work alongside your compliance team or auditor to implement the infrastructure and process controls that map to your chosen framework.",
  },
  {
    question: "What industries do you work in?",
    answer:
      "We've worked across fintech, healthtech, SaaS, logistics, e-commerce, and enterprise software. DevOps practices are largely industry-agnostic at the technical level, though regulated industries (finance, healthcare) have specific compliance requirements we're experienced with.",
  },
]

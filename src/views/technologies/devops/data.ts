import {
  Activity,
  Cloud,
  Container,
  GitBranch,
  Layers,
  Server,
  Shield,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export const whatIsDevOps = {
  directAnswer:
    "DevOps is a set of practices and tooling that unifies software development and IT operations to shorten the software delivery lifecycle. It combines continuous integration/continuous delivery (CI/CD), infrastructure as code (IaC), automated testing, and monitoring to enable frequent, reliable releases. Enterprise DevOps differs from basic automation in that it must operate across multiple teams, environments, and compliance boundaries at scale.",
  enterpriseDiff:
    "DevOps maturity typically progresses through four stages - from manual operations to self-healing systems.",
  decisionChain: "Code Commit → Automated Pipeline → Reliable Release → Business Velocity",
  decisionChainDesc:
    "Each stage compounds. Automated pipelines reduce release friction; reliable releases reduce downtime and rework; reduced downtime and faster releases compound into shipping speed that becomes a competitive advantage, not just an engineering metric. Toadster builds the entire chain, not just the pipeline configuration.",
}

export const devopsMaturityStages = [
  {
    icon: Server,
    title: "Manual Operations",
    desc: "Deployments and infrastructure changes done by hand.",
  },
  {
    icon: GitBranch,
    title: "Automated CI/CD",
    desc: "Build, test, and deploy pipelines run automatically on code changes.",
  },
  {
    icon: Layers,
    title: "Infrastructure as Code",
    desc: "Environments are defined, versioned, and reproducible via code.",
  },
  {
    icon: Activity,
    title: "Self-Healing Systems",
    desc: "Automated rollback, scaling, and incident response with minimal human intervention.",
  },
]

export const servicesIntro =
  "Toadster's DevOps services span the full delivery lifecycle - CI/CD pipeline design, infrastructure as code, container orchestration, observability, and incident response - delivered as a full platform build or as targeted engagements such as a CI/CD modernization or a Kubernetes migration."

export const coreCapabilitiesBento = [
  {
    variant: "dark" as const,
    badge: "FLAGSHIP SERVICE",
    title: "CI/CD Pipeline Design & Implementation",
    desc: "Automated build, test, and deploy pipelines with staged environments, rollback, and approval gates matched to your release risk.",
    href: "/contact",
  },
  {
    variant: "green" as const,
    title: "Infrastructure as Code (IaC)",
    desc: "Terraform, Pulumi, and CloudFormation so environments are reproducible, auditable, and recoverable.",
    icon: Layers,
  },
  {
    variant: "white" as const,
    title: "Container Orchestration & Kubernetes",
    desc: "Design, migrate, and operate workloads on EKS, GKE, and Kubernetes with autoscaling and service mesh.",
    icon: Container,
  },
  {
    variant: "outline" as const,
    title: "Observability & Monitoring",
    desc: "Prometheus, Grafana, Datadog, and ELK so teams detect issues before customers and diagnose root cause in minutes.",
    icon: Activity,
  },
]

export const capabilities: { icon: LucideIcon; title: string; desc: string; ctaAnchor: string }[] = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Design & Implementation",
    desc: "We build automated build, test, and deployment pipelines using GitHub Actions, GitLab CI, Jenkins, and CircleCI, with staged environments, automated rollback, and approval gates matched to your release risk tolerance.",
    ctaAnchor: "Explore CI/CD",
  },
  {
    icon: Layers,
    title: "Infrastructure as Code (IaC)",
    desc: "We define and version your cloud infrastructure using Terraform, Pulumi, and AWS CloudFormation, so environments are reproducible, auditable, and recoverable rather than manually configured and undocumented.",
    ctaAnchor: "Explore IaC",
  },
  {
    icon: Container,
    title: "Container Orchestration & Kubernetes",
    desc: "We design, migrate, and operate containerized workloads on Kubernetes, Docker, Amazon EKS, and Google GKE, including autoscaling, service mesh, and multi-cluster strategies for high-availability systems.",
    ctaAnchor: "Explore Kubernetes",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Platform Engineering",
    desc: "We architect cloud-native infrastructure on AWS, Azure, and Google Cloud, building internal developer platforms that give engineering teams self-service access to compliant, pre-approved infrastructure patterns.",
    ctaAnchor: "Explore Platform Engineering",
  },
  {
    icon: Activity,
    title: "Observability & Monitoring",
    desc: "We implement monitoring, logging, and tracing using Prometheus, Grafana, Datadog, and the ELK stack, so teams detect issues before customers do and diagnose root cause in minutes, not hours.",
    ctaAnchor: "Explore Observability",
  },
  {
    icon: Workflow,
    title: "Site Reliability Engineering & Incident Response",
    desc: "We define SLOs/SLIs, build automated alerting and on-call workflows, and run incident postmortems that turn outages into permanent process improvements rather than recurring fire drills.",
    ctaAnchor: "Explore SRE",
  },
]

export const architectureIntro =
  "A modern enterprise DevOps architecture has five layers: (1) source control and version management, (2) CI/CD pipeline (build, test, deploy), (3) infrastructure layer (IaC-provisioned compute, networking, storage), (4) orchestration layer (containers, service mesh, scaling), and (5) observability layer (metrics, logs, traces, alerting). Toadster designs each layer for your deployment frequency, compliance requirements, and team structure rather than defaulting to a single toolchain."

export const architectureSteps = [
  { step: "01", title: "Source Control", desc: "Git-based repositories with branching strategy aligned to release cadence" },
  { step: "02", title: "CI/CD Pipeline", desc: "Automated build, test, security scanning, and deployment (GitHub Actions, Jenkins, GitLab CI)" },
  { step: "03", title: "Infrastructure Layer", desc: "Terraform/Pulumi-provisioned cloud resources, version-controlled and peer-reviewed" },
  { step: "04", title: "Orchestration Layer", desc: "Kubernetes-managed containers with autoscaling and service mesh routing" },
  { step: "05", title: "Observability Layer", desc: "Prometheus/Grafana metrics, centralized logging, distributed tracing, and alerting" },
]

export const cicdVsTraditionalComparison = {
  headers: ["Dimension", "Traditional Release Management", "CI/CD"],
  rows: [
    ["Release Frequency", "Weekly, monthly, or quarterly", "Multiple times per day"],
    ["Testing", "Manual QA cycles before release", "Automated tests run on every commit"],
    ["Rollback", "Manual, often slow", "Automated, typically under minutes"],
    ["Risk Profile", "Large, infrequent changes (higher blast radius)", "Small, frequent changes (lower blast radius)"],
    ["Tooling", "Manual deployment scripts, change tickets", "GitHub Actions, Jenkins, GitLab CI, ArgoCD"],
  ],
}

export const iacVsManualComparison = {
  headers: ["Dimension", "Manual Provisioning", "Infrastructure as Code"],
  rows: [
    ["Reproducibility", "Inconsistent; depends on individual operators", "Identical environments every time"],
    ["Auditability", "Limited; changes often undocumented", "Full version history via Git"],
    ["Recovery Time", "Hours to days to rebuild", "Minutes, via re-applying code"],
    ["Tooling", "Console clicks, ad hoc scripts", "Terraform, Pulumi, CloudFormation"],
  ],
}

export const platformIntro =
  "There is no single \"best\" DevOps stack - the right choice depends on existing cloud commitments, team size, and workload type. GitHub Actions and GitLab CI favor teams already on those platforms; Jenkins favors teams needing deep customization on legacy infrastructure; Kubernetes favors workloads needing portability and fine-grained scaling control over simpler container hosting."

export const platformQuote =
  "Most DevOps failures we see aren't tooling failures - they're process failures wearing tooling as a disguise. A team can run Kubernetes and still take an hour to roll back a bad deploy if the pipeline, alerting, and ownership model aren't designed together. We treat the pipeline and the org process as one system, not two separate projects."

export const platformComparison = {
  headers: ["Category", "Common Tools", "Strongest For"],
  rows: [
    ["CI/CD", "GitHub Actions, GitLab CI, Jenkins, CircleCI", "Automated build/test/deploy pipelines"],
    ["Infrastructure as Code", "Terraform, Pulumi, AWS CloudFormation", "Reproducible, version-controlled infrastructure"],
    ["Container Orchestration", "Kubernetes, Docker, Amazon EKS, Google GKE", "Scalable, portable containerized workloads"],
    ["Observability", "Prometheus, Grafana, Datadog, ELK Stack", "Metrics, logging, tracing, and alerting"],
    ["GitOps / Deployment", "ArgoCD, Flux", "Declarative, Git-driven Kubernetes deployments"],
  ],
}

export const ciCdMaturityIntro =
  "Continuous integration (CI) automatically builds and tests code on every commit to catch issues early. Continuous delivery extends CI by automatically preparing every change for release, with a manual approval gate before production. Continuous deployment goes one step further and releases every passing change to production automatically, with no manual gate at all."

export const ciCdMaturityLevels = [
  {
    icon: GitBranch,
    title: "Continuous Integration",
    desc: "Every commit triggers automated build and test.",
  },
  {
    icon: Workflow,
    title: "Continuous Delivery",
    desc: "Every passing build is automatically packaged and release-ready, pending human approval.",
  },
  {
    icon: Activity,
    title: "Continuous Deployment",
    desc: "Every passing build is automatically released to production with no manual gate.",
  },
]

export const devSecOpsIntro =
  "DevSecOps embeds security scanning and compliance checks directly into the CI/CD pipeline rather than treating security as a separate, end-of-cycle review. Toadster implements automated dependency scanning, secrets detection, container image scanning, and infrastructure policy checks at the pipeline level, aligned to SOC 2, HIPAA, and ISO 27001 requirements where applicable."

export const devSecOpsComponents = [
  "Static & Dependency Scanning - Automated code and library vulnerability checks on every commit",
  "Secrets Detection - Prevents credentials and keys from being committed to source control",
  "Container Image Scanning - Identifies vulnerabilities in base images before deployment",
  "Policy as Code - Automated enforcement of infrastructure and access policies (e.g., via Open Policy Agent)",
  "Audit Logging - Full traceability of who deployed what, when, and through which approval gate",
]

export const industryUseCasesIntro =
  "DevOps delivers measurable outcomes when tied to a specific bottleneck: slow releases, frequent outages, or manual infrastructure overhead. Below are representative engagement patterns and the metrics they typically move."

export const industryUseCases = [
  {
    title: "Finance - CI/CD Modernization for Compliance-Heavy Releases",
    desc: "Migrating from quarterly manual releases to an automated CI/CD pipeline with built-in compliance gates reduced release cycle time from weeks to under 48 hours, without reducing audit coverage.",
  },
  {
    title: "Logistics - Kubernetes Migration for Autoscaling Workloads",
    desc: "Migrating from fixed-capacity VMs to Kubernetes-based autoscaling reduced infrastructure costs by 35% during off-peak periods while maintaining performance during demand spikes.",
  },
  {
    title: "Healthcare - Observability Overhaul for Incident Response",
    desc: "Implementing centralized logging and distributed tracing across microservices reduced mean time to resolution (MTTR) for production incidents by 60%.",
  },
  {
    title: "Across Engagements - Deployment Frequency",
    desc: "Teams onboarded onto Toadster-built CI/CD pipelines have sustained deployment frequencies of multiple releases per day, up from a pre-engagement baseline typically measured in weeks.",
  },
]

export const processIntro =
  "Toadster's process follows four phases: Assessment (mapping current release and infrastructure bottlenecks), Architecture (designing pipeline, IaC, and observability requirements), Implementation (building and validating pipelines and infrastructure), and Optimization (tuning based on deployment and incident data)."

export const processStepsLanding = [
  {
    num: 1,
    title: "Assessment",
    desc: "Map current deployment frequency, failure rate, and infrastructure bottlenecks against business goals.",
  },
  {
    num: 2,
    title: "Architecture",
    desc: "Design CI/CD pipeline, infrastructure-as-code structure, and observability stack matched to team workflow.",
  },
  {
    num: 3,
    title: "Implementation",
    desc: "Build and validate pipelines, IaC modules, and monitoring; run controlled rollout with rollback testing.",
  },
  {
    num: 4,
    title: "Optimization",
    desc: "Monitor deployment frequency, incident rate, and recovery time; iterate based on real operational data.",
  },
]

export const whyToadster = [
  {
    icon: GitBranch,
    title: "Toolchain-agnostic expertise",
    desc: "Across GitHub Actions, Jenkins, Kubernetes, and major cloud providers - we architect around your existing investments, not a fixed vendor stack.",
  },
  {
    icon: Shield,
    title: "Security-integrated delivery",
    desc: "Scanning, secrets detection, and policy enforcement are built into the pipeline, not added after incidents occur.",
  },
  {
    icon: Server,
    title: "Full-lifecycle capability",
    desc: "From source control to production observability, under one engineering team.",
  },
  {
    icon: Activity,
    title: "Proven reliability outcomes",
    desc: "Measurable reductions in release cycle time, infrastructure cost, and incident resolution time.",
  },
]

export const faqs = [
  {
    question: "What is DevOps?",
    answer:
      "DevOps is a set of practices that combines software development and IT operations to enable faster, more reliable software releases. It relies on automation - CI/CD pipelines, infrastructure as code, and monitoring - to reduce the manual work and coordination overhead between development and operations teams.",
  },
  {
    question: "What is the difference between DevOps and SRE?",
    answer:
      "DevOps is a broad set of cultural and technical practices for unifying development and operations. Site Reliability Engineering (SRE) is a specific discipline within DevOps focused on defining reliability targets (SLOs/SLIs), automating incident response, and treating operations problems with software engineering rigor.",
  },
  {
    question: "What is the difference between CI/CD and DevOps?",
    answer:
      "CI/CD (continuous integration/continuous delivery) is a specific practice and set of tools for automating build, test, and deployment. DevOps is the broader organizational and cultural approach that CI/CD is typically built within, alongside infrastructure as code, monitoring, and collaborative team practices.",
  },
  {
    question: "How much does DevOps consulting cost?",
    answer:
      "Costs vary by scope: a focused CI/CD pipeline modernization can range from tens of thousands of dollars, while a full platform engineering build - including Kubernetes migration, IaC, and observability - typically ranges into the hundreds of thousands, depending on infrastructure complexity and compliance requirements.",
  },
  {
    question: "How long does a DevOps implementation take?",
    answer:
      "A focused CI/CD pipeline build typically takes 4-8 weeks. A full infrastructure-as-code and Kubernetes migration, including observability and security integration, generally takes 3-6 months depending on the number of services and existing infrastructure complexity.",
  },
  {
    question: "What is infrastructure as code and why does it matter?",
    answer:
      "Infrastructure as code (IaC) means defining cloud infrastructure - servers, networks, storage - in version-controlled code rather than configuring it manually through a console. It makes environments reproducible, auditable, and quickly recoverable, which reduces both human error and disaster-recovery time.",
  },
  {
    question: "Do I need Kubernetes for my application?",
    answer:
      "Kubernetes is most valuable when you have multiple services that need independent scaling, frequent deployments, or portability across cloud environments. For simpler applications with stable, predictable load, a managed container service or traditional VM-based deployment is often more cost-effective and easier to maintain.",
  },
]

export const exploreServicesSection = {
  title: "Expert Solutions Tailored for Your Growth",
  subtitle:
    "From CI/CD pipelines to cloud infrastructure and SRE, explore our full suite of DevOps services designed to accelerate delivery and improve reliability.",
  ctaLabel: "Explore All Services",
  ctaHref: "/services",
  serviceCardHref: "/services/devops",
}

export const exploreHireSection = {
  title: "Build Your Dream DevOps Team",
  subtitle:
    "Scale your platform with top-tier DevOps engineers, cloud architects, and SRE specialists. Our resources integrate seamlessly into your workflow.",
  ctaLabel: "Hire Expert Resources",
  ctaHref: "/hire-resources",
}

export const exploreHireSlugs = [
  "devops-engineers",
  "full-stack-developers",
  "software-developers",
  "nodejs-developers",
  "ai-ml-developers",
  "mern-developers",
] as const

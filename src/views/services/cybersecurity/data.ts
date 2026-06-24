import type { LucideIcon } from "lucide-react"
import {
  Award,
  BarChart3,
  Building2,
  Cloud,
  Code2,
  Eye,
  Factory,
  FileCheck,
  GraduationCap,
  Handshake,
  KeyRound,
  Lock,
  MessageSquare,
  Monitor,
  Network,
  Radar,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  Target,
  Users,
  Rocket,
} from "lucide-react"

export const trustStats = [
  { number: "200+", label: "Security assessments completed" },
  { number: "98%", label: "Client satisfaction rate" },
  { number: "Zero", label: "Breaches post-engagement for retained clients" },
  { number: "3 TZ", label: "IST · GST · EST coverage" },
]

export const capabilities: {
  icon: LucideIcon
  tag: string
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    tag: "Offensive Security",
    title: "Penetration Testing",
    desc: "Structured, real-world attack simulations across web applications, networks, APIs, mobile apps, and cloud environments. Manual testing goes beyond scanners to find logic flaws, chained vulnerabilities, and business-context risks that automated tools miss. Retesting included after remediation.",
  },
  {
    icon: Radar,
    tag: "Risk Identification",
    title: "Vulnerability Assessment",
    desc: "Systematic identification and prioritisation of security weaknesses across your infrastructure, applications, and endpoints. We combine automated scanning with expert triage to produce a risk-ranked inventory your team can act on - not a raw export of thousands of false positives.",
  },
  {
    icon: Code2,
    tag: "Secure SDLC",
    title: "Secure Code Review",
    desc: "Manual and tool-assisted review of your source code to identify injection flaws, authentication bypasses, insecure cryptography, hardcoded secrets, and architectural weaknesses before they reach production. Findings include specific file references, reproduction steps, and remediation guidance your developers can implement directly.",
  },
  {
    icon: Cloud,
    tag: "Cloud Posture",
    title: "Cloud Security",
    desc: "Assessment and hardening of AWS, Azure, and GCP environments - IAM misconfigurations, publicly exposed storage, weak access controls, insecure serverless functions, and privilege escalation paths. We review your cloud architecture against the CIS benchmarks and your actual threat model, not a generic checklist.",
  },
  {
    icon: FileCheck,
    tag: "GRC & Audit",
    title: "Compliance & GRC",
    desc: "Gap assessments, control implementation, and audit preparation for ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, and India's DPDP Act. We map your existing controls to framework requirements, identify gaps, and help you build the evidence pack auditors and enterprise customers actually accept.",
  },
  {
    icon: Smartphone,
    tag: "Application Layer",
    title: "Application Security (AppSec)",
    desc: "End-to-end application security covering threat modelling, secure architecture review, SAST/DAST integration, API security testing, and security requirements for your SDLC. We embed security into how your team builds software - not as a gate at the end that slows releases down.",
  },
  {
    icon: Monitor,
    tag: "Managed Detection",
    title: "SOC-as-a-Service",
    desc: "24/7 security monitoring, alert triage, and incident response without building an in-house Security Operations Centre. We integrate with your existing SIEM and log sources, tune detection rules to reduce noise, and provide escalation paths when something genuinely requires your attention.",
  },
  {
    icon: KeyRound,
    tag: "Access Control",
    title: "Identity & Access Management (IAM)",
    desc: "Review and redesign of identity architecture - SSO, MFA enforcement, role-based access control, privileged access management, and service account hygiene. Weak IAM is one of the most common root causes of breaches. We help you get access controls right across cloud, on-premises, and SaaS applications.",
  },
  {
    icon: GraduationCap,
    tag: "Human Layer",
    title: "Security Awareness Training",
    desc: "Phishing simulations, role-specific security training, and measurable culture change programmes that turn your employees from the weakest link into an active part of your security posture. Training is tailored to your industry, your threat profile, and the specific mistakes your people actually make.",
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Target,
    title: "Manual testing, not just scanners",
    desc: "Automated tools catch known patterns. Our security team finds logic flaws, chained vulnerabilities, and contextual risks that no scanner will surface. Every assessment includes hands-on testing by certified professionals - not a report generated from a commercial platform and handed to you unchanged.",
  },
  {
    icon: BarChart3,
    title: "Business context built into every report",
    desc: "We understand what you're protecting and why it matters. Our reports speak in business terms - not just CVSS scores. You'll know which findings pose actual risk to your operations, your customers, and your compliance obligations, not just theoretical threats on a spreadsheet.",
  },
  {
    icon: MessageSquare,
    title: "Reports your developers can act on",
    desc: "We write findings in plain language with clear reproduction steps, severity context, and specific remediation guidance. No vague recommendations like 'implement proper input validation'. Your engineering team should know exactly what to fix, where to fix it, and how.",
  },
  {
    icon: ShieldCheck,
    title: "Retesting and validation included",
    desc: "Fixing vulnerabilities is only half the job. We include retesting after remediation to confirm fixes are effective and that changes haven't introduced new issues. For compliance engagements, we provide sign-off documentation your auditors can use.",
  },
  {
    icon: Lock,
    title: "Scoped to your actual threat model",
    desc: "A SaaS startup has different risk priorities than a financial services firm handling payment data. We scope every engagement around your actual environment, compliance requirements, and threat profile - not a one-size-fits-all methodology that wastes time on irrelevant checks.",
  },
  {
    icon: Handshake,
    title: "Transparent communication throughout",
    desc: "You won't wait until the end of an engagement to hear what we found. Critical issues are flagged in real time so your team can start triaging before the final report is delivered. We stay available during remediation and answer developer questions without charging for every follow-up call.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Scoping",
    desc: "We start with a detailed kickoff to understand your environment, business context, compliance requirements, data sensitivity, and what you're most concerned about. This shapes the entire engagement - what's in scope, what's out, and what success looks like for your organisation.",
    deliverables: ["Scope document", "Asset inventory", "Compliance mapping", "Threat context brief"],
  },
  {
    num: "02",
    title: "Threat Modelling & Risk Assessment",
    desc: "Before testing begins, we model the threats most relevant to your business - who would attack you, what they'd target, and what the impact would be. This ensures we focus effort on the areas that matter most rather than running generic tests against everything equally.",
    deliverables: ["Threat model", "Risk register", "Priority matrix", "Testing plan"],
  },
  {
    num: "03",
    title: "Security Assessment & Testing",
    desc: "Our team runs manual and tool-assisted testing across the agreed scope - penetration testing, vulnerability scanning, code review, cloud configuration review, or compliance gap analysis depending on the engagement. Critical findings are flagged to you in real time as they're discovered.",
    deliverables: ["Real-time critical alerts", "Test evidence", "Finding documentation", "Interim updates"],
  },
  {
    num: "04",
    title: "Analysis, Prioritisation & Reporting",
    desc: "You receive an executive summary for leadership and a detailed technical report for your engineering and security teams - with severity ratings, business impact context, reproduction steps, and specific remediation guidance. Findings are prioritised by actual risk, not just CVSS score.",
    deliverables: ["Executive summary", "Technical report", "Prioritised remediation list", "CVSS ratings"],
  },
  {
    num: "05",
    title: "Remediation Support",
    desc: "We stay available to answer questions from your developers and security team as they work through fixes. For complex findings, we provide guidance calls and can help your team understand the root cause - not just the symptom - so similar issues don't recur in future releases.",
    deliverables: ["Developer Q&A support", "Guidance calls", "Remediation workshops", "Fix validation criteria"],
  },
  {
    num: "06",
    title: "Retest & Compliance Documentation",
    desc: "Once you've addressed the findings, we retest to confirm remediation is effective and issue clean sign-off documentation. For compliance engagements, we produce the evidence pack and control mapping your auditors, enterprise customers, or regulators require.",
    deliverables: ["Retest validation", "Sign-off letter", "Compliance evidence pack", "Control mapping"],
  },
  {
    num: "07",
    title: "Continuous Improvement & Monitoring",
    desc: "Security is not a one-time event. For ongoing engagements, we establish continuous monitoring, periodic reassessment schedules, and security metrics tracking so you can demonstrate improving posture over time - to your board, your customers, and your auditors.",
    deliverables: ["Monitoring recommendations", "Reassessment schedule", "Security metrics dashboard", "Quarterly review"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: Radar,
    title: "Vulnerability Management",
    why: "Automated and manual scanning to identify, prioritise, and track vulnerabilities across networks, applications, and cloud infrastructure.",
    pills: ["Nessus", "Qualys", "OpenVAS", "Nuclei", "Trivy"],
  },
  {
    icon: Target,
    title: "Penetration Testing",
    why: "Industry-standard exploitation frameworks combined with custom scripts and manual techniques for real-world attack simulation.",
    pills: ["Burp Suite Pro", "Metasploit", "Cobalt Strike", "SQLMap", "Custom exploits"],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    why: "Configuration review, posture management, and privilege escalation testing across major cloud platforms.",
    pills: ["Prowler", "ScoutSuite", "Pacu", "CloudSploit", "Wiz"],
  },
  {
    icon: Code2,
    title: "Application Security",
    why: "Static, dynamic, and interactive analysis to find vulnerabilities in source code and running applications throughout the SDLC.",
    pills: ["SonarQube", "Checkmarx", "Snyk", "OWASP ZAP", "Semgrep"],
  },
  {
    icon: Monitor,
    title: "SIEM & SOC",
    why: "Security information and event management for 24/7 monitoring, threat detection, and incident response.",
    pills: ["Splunk", "Microsoft Sentinel", "Elastic SIEM", "CrowdStrike", "Datadog Security"],
  },
  {
    icon: KeyRound,
    title: "Identity & Access",
    why: "Identity governance, privileged access management, and authentication security across cloud and on-premises environments.",
    pills: ["Okta", "Azure AD", "HashiCorp Vault", "CyberArk", "Duo MFA"],
  },
  {
    icon: Network,
    title: "Network Security",
    why: "Perimeter testing, network segmentation validation, and infrastructure security assessment.",
    pills: ["Nmap", "Wireshark", "Nessus Network", "Firewall review", "VPN assessment"],
  },
  {
    icon: Scale,
    title: "Compliance & GRC",
    why: "Governance, risk, and compliance tooling to map controls, manage evidence, and prepare for audits.",
    pills: ["Vanta", "Drata", "OneTrust", "ServiceNow GRC", "Custom frameworks"],
  },
]

export const complianceFrameworks: {
  title: string
  desc: string
}[] = [
  {
    title: "ISO 27001",
    desc: "International standard for information security management systems. We help you implement the technical and organisational controls required for certification - from access management and encryption to incident response and supplier security.",
  },
  {
    title: "SOC 2",
    desc: "Trust Services Criteria audit for SaaS and technology companies. We structure security testing and control documentation to support Type I readiness assessments and Type II ongoing compliance - particularly for companies selling to enterprise customers.",
  },
  {
    title: "GDPR",
    desc: "EU data protection regulation covering personal data processing, consent, breach notification, and data subject rights. We assess your technical controls for data protection by design, encryption, access logging, and breach detection capabilities.",
  },
  {
    title: "HIPAA",
    desc: "US healthcare data protection requirements for covered entities and business associates. We assess technical safeguards for PHI - access controls, audit trails, encryption, and transmission security - for healthtech platforms and medical device companies.",
  },
  {
    title: "PCI DSS",
    desc: "Payment card industry data security standard for organisations handling cardholder data. We assess network segmentation, encryption, access controls, and vulnerability management for e-commerce platforms, payment processors, and fintech applications.",
  },
  {
    title: "DPDP Act (India)",
    desc: "India's Digital Personal Data Protection Act requirements for consent management, data localisation, breach notification, and data fiduciary obligations. We help Indian enterprises and global companies operating in India build the technical controls DPDP requires.",
  },
]

export const teamStats = [
  { value: "40+", label: "Active security professionals" },
  { value: "48hr", label: "Typical initial report delivery" },
  { value: "3 Years", label: "Average client relationship" },
  { value: "OSCP · CEH · CREST", label: "Certified team credentials" },
]

export const teamRoles = [
  {
    title: "Security Architects",
    desc: "Senior professionals who design your overall security posture - threat models, security architecture, control frameworks, and the roadmap to get from where you are to where you need to be. They work at the strategic level before tactical testing begins.",
  },
  {
    title: "Offensive Security Engineers",
    desc: "OSCP, CEH, and CRTE-certified penetration testers who think like attackers. They run manual exploitation, red team operations, and adversarial simulations - finding the vulnerabilities that matter because they've seen how real attacks actually work.",
  },
  {
    title: "Application Security Specialists",
    desc: "Deep expertise in secure code review, threat modelling, and application-layer vulnerabilities across web, mobile, and API environments. They integrate security into your SDLC rather than treating it as a separate testing phase.",
  },
  {
    title: "Cloud Security Engineers",
    desc: "Hands-on experience securing AWS, Azure, and GCP environments across startups and enterprise clients. They understand cloud-native attack paths - misconfigured IAM, exposed storage, serverless vulnerabilities, and container escape scenarios.",
  },
  {
    title: "Compliance & GRC Consultants",
    desc: "Specialists who understand what auditors are looking for and how to structure controls and evidence to support ISO 27001, SOC 2, PCI DSS, HIPAA, and DPDP compliance. They bridge the gap between technical security and regulatory requirements.",
  },
  {
    title: "SOC Analysts & Incident Responders",
    desc: "Security operations professionals who monitor, triage, and respond to security events around the clock. They tune detection rules, investigate alerts, and coordinate incident response when something genuinely requires escalation.",
  },
]

export const industries: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: BarChart3,
    title: "Fintech & Banking",
    desc: "Payment platforms, lending apps, digital wallets, and banking portals - where a single vulnerability can affect thousands of transactions and trigger regulatory scrutiny from RBI, SEBI, or international financial authorities.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Medtech",
    desc: "Patient data systems, telemedicine platforms, and connected medical devices where data sensitivity, HIPAA obligations, and patient safety requirements all demand rigorous security controls.",
  },
  {
    icon: Cloud,
    title: "SaaS & B2B Software",
    desc: "Multi-tenant applications where one customer's data must be strictly isolated from another's - and where enterprise buyers increasingly require evidence of security testing before signing contracts.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    desc: "Checkout flows, loyalty systems, and customer data environments where PCI DSS compliance and fraud prevention are business-critical - not optional security nice-to-haves.",
  },
  {
    icon: Building2,
    title: "Enterprise Technology",
    desc: "Large-scale internal networks, Active Directory environments, ERP systems, and complex integrations that require deep infrastructure expertise and understanding of enterprise threat models.",
  },
  {
    icon: Award,
    title: "Government & Public Sector",
    desc: "Regulated environments with strict compliance mandates, data sovereignty requirements, and zero tolerance for data exposure - including India's DPDP Act and sector-specific security frameworks.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    desc: "OT/IT convergence environments, industrial control systems, and supply chain platforms where security failures can disrupt production, compromise IP, or create physical safety risks.",
  },
  {
    icon: GraduationCap,
    title: "EdTech & Online Platforms",
    desc: "Platforms handling student data, payment information, and user-generated content - where privacy regulations, content security, and scalable access controls all need to work together.",
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: ShieldCheck,
    title: "Reduced breach likelihood",
    desc: "Identified and fixed vulnerabilities cannot be exploited. The cost of a thorough security assessment is a fraction of the cost of a breach - in direct financial impact, regulatory fines, customer trust, and recovery time.",
  },
  {
    icon: FileCheck,
    title: "Audit-ready compliance evidence",
    desc: "Documented testing results, control mappings, and sign-off letters that satisfy auditors, enterprise customers, and regulatory bodies. Security becomes a sales enabler rather than a blocker.",
  },
  {
    icon: Rocket,
    title: "Confidence before launch",
    desc: "Know your product is ready to face real users and real attackers - not after something goes wrong in production. Ship with confidence that your security posture matches your ambitions.",
  },
  {
    icon: Users,
    title: "Stronger security culture",
    desc: "When your team understands the risks in your environment and how to fix them, they write better code, make better architecture decisions, and become part of your security posture rather than a liability.",
  },
  {
    icon: Award,
    title: "Competitive differentiation",
    desc: "Security-conscious buyers increasingly ask vendors for evidence of testing and compliance. A clean security report and recognised certifications are genuine sales assets in enterprise procurement.",
  },
  {
    icon: Eye,
    title: "Board-level visibility",
    desc: "Our executive summaries give leadership a clear, honest picture of security posture without requiring technical background - so security risk gets the attention and investment it deserves at the decision-making level.",
  },
]

export const engagementModels = [
  {
    title: "Security Assessment & Roadmap",
    desc: "A focused 1–3 week engagement to understand your current security posture, identify the highest-priority gaps, and produce a concrete, costed remediation roadmap. Best for teams who know they need to improve security but aren't sure where to start or what to prioritise.",
    includes: [
      "Environment and asset discovery",
      "Threat modelling and risk assessment",
      "Vulnerability scanning and manual review",
      "Prioritised remediation roadmap",
      "Executive presentation to leadership",
    ],
  },
  {
    title: "Point-in-Time Security Testing",
    desc: "Scoped penetration testing, code review, or cloud security assessment for a specific product, environment, or compliance requirement. Ideal for product launches, pre-audit validation, or responding to a customer security questionnaire.",
    includes: [
      "Scoped testing plan aligned to your risk profile",
      "Manual and tool-assisted testing",
      "Executive and technical reports",
      "Remediation guidance and developer support",
      "Retest round after fixes",
    ],
  },
  {
    title: "Continuous Security Programme",
    desc: "Ongoing security testing aligned to your release cycles, with periodic reassessments, remediation tracking, and progress reporting. Best for teams that ship code regularly and need security to keep pace with development velocity.",
    includes: [
      "Testing aligned to release cycles",
      "Trend tracking and posture reporting",
      "Priority-based finding management",
      "Developer remediation support",
      "Quarterly executive security reviews",
    ],
  },
  {
    title: "Managed Security & SOC",
    desc: "Fully managed security operations - 24/7 monitoring, alert triage, incident response, and periodic testing - without building an in-house security team. For organisations that need enterprise-grade security capabilities at a fraction of the cost of a full internal SOC.",
    includes: [
      "24/7 SIEM monitoring and alert triage",
      "Incident response and escalation",
      "Scheduled penetration testing cycles",
      "Compliance documentation and reporting",
      "Dedicated security programme manager",
    ],
  },
]

export const faqs = [
  {
    question: "What's the difference between cybersecurity services and penetration testing?",
    answer:
      "Penetration testing is one component of a broader cybersecurity programme - it simulates attacks to find exploitable vulnerabilities. Cybersecurity services cover the full spectrum: vulnerability management, secure code review, cloud security, compliance, IAM, SOC monitoring, and security awareness. Most organisations need a combination depending on their maturity, industry, and compliance requirements. We'll help you identify what you actually need rather than selling you everything.",
  },
  {
    question: "How much do cybersecurity services cost?",
    answer:
      "A focused security assessment typically runs $8,000–$25,000 USD depending on scope. A comprehensive penetration test for a web application or cloud environment is usually $15,000–$45,000. Ongoing managed security programmes and SOC-as-a-Service start from $5,000–$15,000 per month. Compliance readiness engagements (ISO 27001, SOC 2) vary significantly based on your current state. We provide a detailed quote after understanding your specific environment and requirements - no generic pricing pages.",
  },
  {
    question: "How long does a typical security engagement take?",
    answer:
      "A security assessment and roadmap runs 1–3 weeks. A targeted penetration test typically takes 1–2 weeks. A comprehensive security programme covering multiple environments may run 4–6 weeks initially, with ongoing periodic testing thereafter. Compliance readiness projects vary from 8 weeks to several months depending on your starting point. We'll give you a clear timeline during scoping.",
  },
  {
    question: "Will security testing disrupt our production systems?",
    answer:
      "We work with you to define testing windows, environments, and rules of engagement before any active testing begins. Many assessments can run against staging environments. When production testing is required, we coordinate closely with your team, confirm critical exploitation steps before execution, and have rollback procedures agreed upfront. No surprises - for either side.",
  },
  {
    question: "Do you help us fix the issues you find?",
    answer:
      "We provide detailed remediation guidance that your development and IT teams can act on directly - specific fixes, not vague recommendations. We stay available during the remediation phase to answer questions, and we include a retest to confirm fixes are effective. For complex findings, we can provide remediation workshops with your engineering team.",
  },
  {
    question: "Can you help us achieve ISO 27001 or SOC 2 certification?",
    answer:
      "Yes. We help you implement the technical and organisational controls these frameworks require - access management, encryption, logging, incident response, vulnerability management, and supplier security. We produce the evidence pack and control documentation your auditor needs. We're not a certification body ourselves, but we work alongside your chosen auditor throughout the process.",
  },
  {
    question: "We already have some security tools in place. Do we need your services?",
    answer:
      "Tools are necessary but not sufficient. A SIEM without tuned detection rules generates noise, not security. A vulnerability scanner without expert triage produces thousands of findings your team can't prioritise. We help you get actual value from your existing investments - and identify where gaps remain that tools alone can't fill.",
  },
  {
    question: "What certifications does your security team hold?",
    answer:
      "Our team includes professionals certified in OSCP, CEH, CRTE, CREST, CISSP, and cloud security certifications across AWS, Azure, and GCP. More importantly, they have hands-on experience across fintech, healthcare, SaaS, and enterprise environments - not just certification credentials without practical delivery experience.",
  },
  {
    question: "How do you handle sensitive data during an engagement?",
    answer:
      "We operate under strict confidentiality agreements, follow data minimisation principles, and never retain client data beyond what's required for the engagement deliverables. Findings and evidence are shared through encrypted channels. We can work within your existing security policies and data handling requirements, including on-premises testing where data cannot leave your environment.",
  },
  {
    question: "What's the difference between a vulnerability scan and a penetration test?",
    answer:
      "A vulnerability scan identifies known weaknesses using automated tools - useful for baseline visibility but limited in depth. A penetration test goes further: testers manually exploit weaknesses, chain multiple vulnerabilities together, and demonstrate the actual business impact of a successful attack. Scans tell you what might be wrong. Penetration tests tell you what an attacker could actually do.",
  },
  {
    question: "Do you offer security services for startups and SMEs?",
    answer:
      "Yes - and we think about scope differently for smaller organisations. A startup preparing for an enterprise sales cycle needs different security evidence than a mature enterprise managing a complex hybrid environment. We right-size engagements to your stage, your budget, and what your customers and regulators actually require - not what a generic enterprise security programme looks like.",
  },
  {
    question: "What happens after the engagement ends?",
    answer:
      "You receive an executive summary, a full technical report, and a prioritised remediation list. We stay available during your remediation cycle and run a retest to validate fixes. For ongoing programme clients, we establish a reassessment schedule and security metrics tracking. If you need a sign-off letter for compliance or customer due diligence, we provide that after remediation is confirmed.",
  },
]

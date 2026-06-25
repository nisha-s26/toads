import {
  Cloud,
  FileSearch,
  GitBranch,
  Globe,
  Network,
  Shield,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react"

export const whatIsPenetrationTesting = {
  directAnswer:
    "Penetration testing is an authorized, simulated cyberattack against an organization's systems - applications, networks, APIs, or cloud infrastructure - performed to identify exploitable security vulnerabilities before real attackers find them. Unlike automated vulnerability scanning, penetration testing involves manual exploitation by security professionals who chain together weaknesses the way a real adversary would.",
  enterpriseDiff:
    "Penetration testing engagements generally fall into four categories: network, web application, API, and cloud & infrastructure testing.",
  decisionChain: "Vulnerability → Exploitation Risk → Business Impact → Security Investment Priority",
  decisionChainDesc:
    "Each stage compounds. Not every vulnerability is equally exploitable; not every exploitable vulnerability carries equal business impact; understanding real impact - not just CVSS score - is what determines where security investment should actually go. Toadster delivers the full chain of analysis, not just a vulnerability list.",
}

export const testingCategories = [
  {
    icon: Network,
    title: "Network Penetration Testing",
    desc: "Testing internal and external network infrastructure for exploitable misconfigurations and vulnerabilities.",
  },
  {
    icon: Globe,
    title: "Web Application Penetration Testing",
    desc: "Testing custom applications for injection flaws, broken authentication, and access control issues.",
  },
  {
    icon: GitBranch,
    title: "API Penetration Testing",
    desc: "Testing REST/GraphQL APIs for authentication bypass, data exposure, and rate-limiting gaps.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Penetration Testing",
    desc: "Testing cloud configurations (AWS, Azure, GCP) for privilege escalation and misconfiguration risks.",
  },
]

export const servicesIntro =
  "Toadster's penetration testing services span network, application, API, cloud, and social engineering assessments - delivered as point-in-time engagements, recurring annual testing programs, or continuous testing integrated into your development lifecycle."

export const coreCapabilitiesBento = [
  {
    variant: "dark" as const,
    badge: "FLAGSHIP SERVICE",
    title: "Web Application Penetration Testing",
    desc: "Manual testing against OWASP Top 10 and ASVS - chaining vulnerabilities the way a real attacker would.",
    href: "/contact",
  },
  {
    variant: "green" as const,
    title: "Cloud Penetration Testing",
    desc: "AWS, Azure, and GCP assessments for IAM misconfigurations, exposed storage, and privilege escalation paths.",
    icon: Cloud,
  },
  {
    variant: "white" as const,
    title: "API Penetration Testing",
    desc: "REST and GraphQL testing against OWASP API Security Top 10 - gaps automated scanners frequently miss.",
    icon: GitBranch,
  },
  {
    variant: "outline" as const,
    title: "Red Team Engagements",
    desc: "Goal-oriented campaigns across network, application, cloud, and human layers to test detection and response.",
    icon: Target,
  },
]

export const capabilities: { icon: LucideIcon; title: string; desc: string; ctaAnchor: string }[] = [
  {
    icon: Network,
    title: "Network Penetration Testing",
    desc: "We test internal and external network infrastructure using methodologies aligned to OWASP, NIST SP 800-115, and PTES (Penetration Testing Execution Standard), identifying misconfigurations, unpatched systems, and lateral movement paths.",
    ctaAnchor: "Explore Network Testing",
  },
  {
    icon: Globe,
    title: "Web Application Penetration Testing",
    desc: "We manually test web applications against the OWASP Top 10 and OWASP Application Security Verification Standard (ASVS), going beyond automated scanning to chain vulnerabilities the way a real attacker would.",
    ctaAnchor: "Explore Web App Testing",
  },
  {
    icon: GitBranch,
    title: "API Penetration Testing",
    desc: "We test REST and GraphQL APIs against the OWASP API Security Top 10, covering broken object-level authorization, excessive data exposure, and improper rate limiting - gaps automated scanners frequently miss.",
    ctaAnchor: "Explore API Testing",
  },
  {
    icon: Cloud,
    title: "Cloud Penetration Testing",
    desc: "We assess AWS, Azure, and Google Cloud environments for IAM misconfigurations, overly permissive roles, exposed storage, and privilege escalation paths, using cloud-native attack frameworks aligned to the MITRE ATT&CK Cloud Matrix.",
    ctaAnchor: "Explore Cloud Testing",
  },
  {
    icon: Users,
    title: "Social Engineering & Phishing Simulation",
    desc: "We run authorized phishing, vishing, and physical security assessments to test human-layer defenses, often the highest-yield attack vector in real-world breaches.",
    ctaAnchor: "Explore Social Engineering",
  },
  {
    icon: Target,
    title: "Red Team Engagements",
    desc: "We run goal-oriented, multi-vector campaigns simulating a sophisticated adversary across network, application, cloud, and human layers simultaneously - testing detection and response capability, not just individual vulnerabilities.",
    ctaAnchor: "Explore Red Team",
  },
]

export const methodologyIntro =
  "A structured penetration testing engagement has five phases: (1) scoping and reconnaissance, (2) vulnerability identification, (3) exploitation, (4) post-exploitation and lateral movement analysis, and (5) reporting and remediation guidance. Toadster follows industry-recognized frameworks (PTES, OWASP, NIST SP 800-115) rather than an ad hoc scan-and-report process."

export const methodologySteps = [
  {
    step: "01",
    title: "Scoping & Reconnaissance",
    desc: "Defining test boundaries, rules of engagement, and gathering open-source intelligence on the target.",
  },
  {
    step: "02",
    title: "Vulnerability Identification",
    desc: "Combining automated scanning with manual analysis to identify candidate weaknesses.",
  },
  {
    step: "03",
    title: "Exploitation",
    desc: "Manually attempting to exploit identified vulnerabilities to confirm real-world impact, not just theoretical risk.",
  },
  {
    step: "04",
    title: "Post-Exploitation & Lateral Movement",
    desc: "Assessing how far an attacker could move and what data or systems would be exposed.",
  },
  {
    step: "05",
    title: "Reporting & Remediation Guidance",
    desc: "Delivering prioritized findings with reproduction steps and specific remediation recommendations.",
  },
]

export const testingApproachComparison = {
  headers: ["Dimension", "Black Box", "Gray Box", "White Box"],
  rows: [
    ["Tester Knowledge", "No prior knowledge of internal systems", "Partial knowledge (e.g., user credentials)", "Full knowledge, including source code and architecture"],
    ["Realism", "Closest to an external attacker's perspective", "Simulates an insider or compromised-account attacker", "Most thorough; not representative of an external attacker"],
    ["Time Required", "Longest - more reconnaissance needed", "Moderate", "Shortest - no reconnaissance phase needed"],
    ["Best For", "External attack-surface validation", "Realistic insider-threat or compromised-credential scenarios", "Deep code-level and architectural review"],
  ],
}

export const scanVsPentestComparison = {
  headers: ["Dimension", "Vulnerability Scanning", "Penetration Testing"],
  rows: [
    ["Method", "Automated tools identify known vulnerability signatures", "Manual exploitation by security professionals"],
    ["Depth", "Identifies what might be vulnerable", "Confirms what is actually exploitable and its real impact"],
    ["False Positive Rate", "Higher", "Lower - findings are manually validated"],
    ["Best For", "Continuous, frequent baseline coverage", "Point-in-time validation of real-world exploitability"],
    ["Typical Cadence", "Weekly to monthly", "Annually, or after major system changes"],
  ],
}

export const standardsIntro =
  "Toadster aligns penetration testing methodology to recognized industry standards rather than proprietary checklists, ensuring findings are defensible in audits and comparable across engagements. Core frameworks include OWASP Top 10 and ASVS for applications, OWASP API Security Top 10 for APIs, PTES and NIST SP 800-115 for overall methodology, and MITRE ATT&CK for adversary technique mapping."

export const standardsQuote =
  "A clean scan report is not the same thing as a secure system. We've seen organizations pass automated scans with zero critical findings and still have a direct path from an unauthenticated API endpoint to full database access - because scanners look for known signatures, not exploitable logic flaws. That gap is exactly what manual penetration testing exists to close."

export const standardsComparison = {
  headers: ["Framework", "Scope", "Used For"],
  rows: [
    ["OWASP Top 10 / ASVS", "Web applications", "Identifying and verifying common and critical application vulnerabilities"],
    ["OWASP API Security Top 10", "APIs (REST/GraphQL)", "Authorization, data exposure, and rate-limiting weaknesses"],
    ["PTES", "Overall methodology", "End-to-end engagement structure, from scoping to reporting"],
    ["NIST SP 800-115", "Overall methodology", "Technical guide to information security testing and assessment"],
    ["MITRE ATT&CK", "Adversary technique mapping", "Structuring red team and cloud attack scenarios around real adversary behavior"],
  ],
}

export const complianceIntro =
  "Many regulatory and contractual frameworks require periodic penetration testing as a condition of compliance, including PCI DSS (payment card data), SOC 2 (service organization controls), HIPAA (healthcare data), and ISO 27001 (information security management). Toadster scopes and documents engagements to satisfy the specific evidentiary requirements of each framework."

export const complianceFrameworks = [
  "PCI DSS - Requires annual penetration testing and testing after significant infrastructure changes for organizations handling payment card data",
  "SOC 2 - Often requires penetration testing evidence as part of the security trust services criteria during audit",
  "HIPAA - Requires risk assessments that commonly include penetration testing for organizations handling protected health information",
  "ISO 27001 - Requires regular security testing as part of its continuous risk management and control validation requirements",
]

export const riskPrioritizationIntro =
  "A vulnerability's CVSS (Common Vulnerability Scoring System) score reflects theoretical severity but not actual business risk. Toadster prioritizes findings using exploitability in your specific environment, the sensitivity of data or systems exposed, and the realistic likelihood of an attacker reaching that vulnerability - so remediation effort goes toward what matters most, not just what scores highest in isolation."

export const riskPrioritizationFactors = [
  "Exploitability - Whether the vulnerability was actually exploited during testing, not just flagged as theoretically present",
  "Business Impact - What data, system, or process would be compromised if the vulnerability were exploited",
  "Attack Path Position - Whether the vulnerability sits on a realistic path to critical assets or is isolated",
  "Compensating Controls - Whether existing monitoring or segmentation would limit real-world impact",
  "Remediation Effort vs. Risk Reduction - Prioritizing fixes that reduce the most risk for the least implementation cost",
]

export const industryUseCasesIntro =
  "Penetration testing delivers measurable outcomes when tied to a specific risk driver: compliance certification, pre-acquisition due diligence, or post-incident validation. Below are representative engagement patterns and the metrics they typically move."

export const industryUseCases = [
  {
    title: "Finance - PCI DSS-Aligned Application Testing",
    desc: "Annual web application and API testing aligned to PCI DSS requirements identified and enabled remediation of critical authorization flaws before they appeared in a compliance audit, preserving payment processing certification.",
  },
  {
    title: "Healthcare - HIPAA Risk Assessment Support",
    desc: "Network and application testing supporting a HIPAA risk assessment identified unsegmented network paths between administrative and clinical systems, leading to a segmentation project that reduced breach blast radius.",
  },
  {
    title: "SaaS - Pre-Funding Security Due Diligence",
    desc: "A comprehensive penetration test commissioned ahead of a funding round identified and resolved critical findings prior to investor security review, removing a deal-risk item from due diligence.",
  },
  {
    title: "Across Engagements - Critical Finding Remediation",
    desc: "Organizations engaging Toadster for recurring annual testing have shown measurable reduction in critical and high-severity finding recurrence year-over-year, reflecting improved baseline security posture.",
  },
]

export const processIntro =
  "Toadster's process follows five phases: Scoping (defining rules of engagement and test boundaries), Testing (executing reconnaissance, vulnerability identification, and exploitation), Validation (confirming real-world impact of findings), Reporting (delivering prioritized, business-risk-ranked findings), and Retesting (validating that remediations actually closed the identified gaps)."

export const processStepsLanding = [
  {
    num: 1,
    title: "Scoping",
    desc: "Define test type, boundaries, and rules of engagement aligned to your risk and compliance goals.",
  },
  {
    num: 2,
    title: "Testing",
    desc: "Execute reconnaissance, vulnerability identification, and manual exploitation against the agreed scope.",
  },
  {
    num: 3,
    title: "Validation",
    desc: "Confirm real-world exploitability and business impact of each finding before reporting.",
  },
  {
    num: 4,
    title: "Reporting",
    desc: "Deliver a prioritized findings report with reproduction steps and specific remediation guidance.",
  },
  {
    num: 5,
    title: "Retesting",
    desc: "Validate that implemented fixes actually close the identified vulnerabilities, not just suppress symptoms.",
  },
]

export const whyToadster = [
  {
    icon: ShieldCheck,
    title: "Framework-aligned methodology",
    desc: "Testing follows OWASP, PTES, and NIST SP 800-115 standards, producing audit-defensible documentation.",
  },
  {
    icon: Target,
    title: "Manual exploitation, not just scanning",
    desc: "Findings are validated for real-world impact, not reported as theoretical CVSS scores alone.",
  },
  {
    icon: FileSearch,
    title: "Compliance-aware scoping",
    desc: "Engagements are structured to satisfy PCI DSS, SOC 2, HIPAA, and ISO 27001 evidentiary requirements.",
  },
  {
    icon: Shield,
    title: "Risk-prioritized reporting",
    desc: "Remediation guidance is ranked by actual business impact, not just severity labels.",
  },
]

export const faqs = [
  {
    question: "What is penetration testing?",
    answer:
      "Penetration testing is an authorized, simulated cyberattack against an organization's systems, performed by security professionals to identify exploitable vulnerabilities before real attackers do. It involves manual exploitation, not just automated scanning, to confirm what an attacker could actually achieve.",
  },
  {
    question: "What is the difference between penetration testing and vulnerability scanning?",
    answer:
      "Vulnerability scanning uses automated tools to identify known vulnerability signatures and is typically run frequently as a baseline check. Penetration testing involves manual exploitation by security professionals to confirm which vulnerabilities are actually exploitable and what real-world business impact they would have, typically run periodically or after major changes.",
  },
  {
    question: "How much does a penetration test cost?",
    answer:
      "Costs vary by scope: a focused web application or API test can range from a few thousand to tens of thousands of dollars, while a comprehensive engagement covering network, application, cloud, and social engineering testing typically ranges higher, depending on environment size and complexity.",
  },
  {
    question: "How often should we conduct penetration testing?",
    answer:
      "Most organizations should conduct penetration testing at least annually, and additionally after major infrastructure or application changes. Organizations subject to PCI DSS or similar regulatory frameworks are typically required to test annually and after significant changes as a condition of compliance.",
  },
  {
    question: "What is the difference between black box, gray box, and white box testing?",
    answer:
      "Black box testing simulates an external attacker with no prior system knowledge. Gray box testing gives the tester partial knowledge, such as a standard user account, simulating an insider or compromised-credential scenario. White box testing gives the tester full access to source code and architecture for the most thorough, code-level review.",
  },
  {
    question: "Is penetration testing required for compliance?",
    answer:
      "Several compliance frameworks require or strongly recommend periodic penetration testing, including PCI DSS (required annually for payment card data environments), SOC 2 (commonly required as audit evidence), HIPAA (as part of required risk assessments), and ISO 27001 (as part of continuous security testing requirements).",
  },
  {
    question: "What is the difference between penetration testing and a red team engagement?",
    answer:
      "Penetration testing typically focuses on identifying and validating vulnerabilities within a defined scope, such as one application or network segment. A red team engagement is broader and goal-oriented, simulating a sophisticated adversary across multiple attack vectors simultaneously to test an organization's overall detection and response capability, not just individual vulnerabilities.",
  },
]

export const exploreServicesSection = {
  title: "Expert Solutions Tailored for Your Growth",
  subtitle:
    "From web application testing to cloud security and red team operations, explore our full suite of penetration testing services designed to strengthen your security posture.",
  ctaLabel: "Explore All Services",
  ctaHref: "/services",
  serviceCardHref: "/services/penetration-testing",
}

export const exploreHireSection = {
  title: "Build Your Dream Security Team",
  subtitle:
    "Scale your security operations with top-tier software engineers, DevOps specialists, and full-stack developers. Our resources integrate seamlessly into your workflow.",
  ctaLabel: "Hire Expert Resources",
  ctaHref: "/hire-resources",
}

export const exploreHireSlugs = [
  "software-developers",
  "full-stack-developers",
  "devops-engineers",
  "nodejs-developers",
  "ai-ml-developers",
  "reactjs-developers",
] as const

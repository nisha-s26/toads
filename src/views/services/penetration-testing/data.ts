import type { LucideIcon } from "lucide-react"
import {
  Award,
  BarChart3,
  Building2,
  Cloud,
  FileCheck,
  Globe,
  Handshake,
  Link2,
  Lock,
  MessageSquare,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  Target,
  Users,
  Zap,
} from "lucide-react"

export const heroTrustItems = [
  "Manual testing, not just scanners",
  "Business context built into every report",
  "Retesting included after remediation",
  "Real-time critical finding alerts",
]

export const trustStats = [
  { number: "Manual Testing", label: "Real attackers, not just automated scans" },
  { number: "Actionable Reports", label: "Prioritised findings with remediation steps" },
  { number: "Re-Test Included", label: "Verify fixes before you close the engagement" },
  { number: "4 Regions", label: "India · UAE · Saudi Arabia · US" },
]

export const heroSubheading = "Find What Attackers Would — Before They Do."

export const heroCta = {
  label: "Talk to a Penetration Testing Specialist",
  href: "#contact-form",
}

export const teamStats = [
  { number: "48hr", label: "Typical report delivery" },
  { number: "40+", label: "Active security professionals" },
  { number: "3 Years", label: "Average client relationship" },
]

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: Globe,
    title: "Web Application Penetration Testing",
    desc: "Your web applications are the most visible attack surface you have. We test authentication flows, session management, input validation, API endpoints, and business logic - going well beyond automated scanners. We follow OWASP Top 10 and include manual exploitation to confirm real risk.",
    value: "Find exploitable flaws before attackers do",
    tags: ["OWASP Top 10", "Auth flows", "Session management", "Business logic"],
  },
  {
    icon: Network,
    title: "Network Penetration Testing",
    desc: "Internal and external network testing that maps your perimeter, identifies misconfigurations, checks for unpatched services, and tests lateral movement paths attackers could use once inside. Covers firewalls, VPNs, routers, servers, and endpoints.",
    value: "Map real attack paths across your infrastructure",
    tags: ["Perimeter testing", "Lateral movement", "Firewalls & VPNs", "Endpoint security"],
  },
  {
    icon: Link2,
    title: "API Security Testing",
    desc: "APIs are increasingly the primary target for attackers. We test REST, GraphQL, and SOAP APIs for broken authentication, excessive data exposure, rate limiting failures, injection vulnerabilities, and authorisation bypass - issues that standard web testing often misses.",
    value: "Catch API-specific vulnerabilities others miss",
    tags: ["REST & GraphQL", "Auth bypass", "Rate limiting", "Data exposure"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Penetration Testing",
    desc: "iOS and Android app testing covering local data storage, binary analysis, traffic interception, insecure communication, and backend API security. We assess both the app and how it interacts with your server-side infrastructure.",
    value: "Secure the full mobile attack surface",
    tags: ["iOS & Android", "Binary analysis", "Traffic interception", "Backend APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud Security Assessment",
    desc: "Cloud misconfiguration is now one of the leading causes of data exposure. We assess AWS, Azure, and GCP environments for IAM misconfigurations, publicly exposed storage, weak access controls, insecure serverless functions, and privilege escalation paths.",
    value: "Identify cloud misconfigurations before they leak data",
    tags: ["AWS", "Azure", "GCP", "IAM & privilege escalation"],
  },
  {
    icon: Users,
    title: "Social Engineering & Phishing Simulations",
    desc: "Technical controls only go so far. We run controlled phishing campaigns, pretexting scenarios, and email-based attack simulations to test how your people respond - and help you build a culture where employees are part of your security posture, not a liability.",
    value: "Test the human layer of your security",
    tags: ["Phishing campaigns", "Pretexting", "Email simulations", "Security awareness"],
  },
  {
    icon: Target,
    title: "Red Team Operations",
    desc: "For mature organisations that want a full-scope adversarial simulation. Red team engagements combine multiple attack vectors - physical, digital, and human - to test whether your detection and response capabilities hold up under realistic attack conditions.",
    value: "Simulate real-world adversaries at full scope",
    tags: ["Adversarial simulation", "Multi-vector attacks", "Detection testing", "Response validation"],
  },
  {
    icon: FileCheck,
    title: "Compliance-Driven Penetration Testing",
    desc: "If your organisation needs to meet ISO 27001, SOC 2, PCI DSS, HIPAA, or RBI/SEBI security requirements, we structure engagements to align with the specific testing mandates of each framework and provide documentation your auditors will accept.",
    value: "Testing structured for audit acceptance",
    tags: ["ISO 27001", "SOC 2", "PCI DSS", "HIPAA", "RBI/SEBI"],
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
    desc: "Automated tools catch known patterns. Manual testers find logic flaws, chained vulnerabilities, and contextual risks that no scanner will surface. Every engagement includes hands-on testing by our security team.",
  },
  {
    icon: BarChart3,
    title: "Business context built in",
    desc: "We understand what you are protecting and why it matters. Our reports speak in business terms - not just CVE scores. You will know which findings pose actual risk to your operations, not just theoretical threats.",
  },
  {
    icon: MessageSquare,
    title: "Reports your developers can act on",
    desc: "We write findings in plain language with clear reproduction steps, severity context, and specific remediation guidance. No vague recommendations. Your engineering team should know exactly what to fix and how.",
  },
  {
    icon: ShieldCheck,
    title: "Retesting included",
    desc: "Fixing vulnerabilities is only half the job. We include a retest round after remediation to confirm the fixes are effective and that the changes have not introduced new issues.",
  },
  {
    icon: Lock,
    title: "Engagement scoped to your risk profile",
    desc: "A SaaS startup has different risk priorities than a financial services firm. We scope every engagement around your actual threat model, not a one-size-fits-all methodology.",
  },
  {
    icon: Handshake,
    title: "Transparent communication throughout",
    desc: "You will not wait until the end of the engagement to hear what we found. We flag critical issues as we discover them so your team can start triaging before the report is even delivered.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Scoping & Discovery",
    desc: "We start with a detailed kickoff to understand your environment, business context, compliance requirements, and what you are most concerned about. This shapes the entire engagement.",
    deliverables: ["Scope document", "Threat model", "Compliance mapping"],
  },
  {
    num: "02",
    title: "Rules of Engagement",
    desc: "We agree on testing windows, systems in scope, notification procedures, and escalation paths. No surprises - for either side.",
    deliverables: ["Rules of engagement", "Testing windows", "Escalation procedures"],
  },
  {
    num: "03",
    title: "Active Testing",
    desc: "Our team runs manual and tool-assisted testing across the agreed scope. Critical findings are flagged to you in real time. We document everything as we go.",
    deliverables: ["Real-time critical alerts", "Test documentation", "Evidence collection"],
  },
  {
    num: "04",
    title: "Reporting",
    desc: "You receive an executive summary for leadership and a detailed technical report for your engineering team - with severity ratings, evidence, reproduction steps, and remediation guidance.",
    deliverables: ["Executive summary", "Technical report", "CVSS severity ratings"],
  },
  {
    num: "05",
    title: "Remediation Support",
    desc: "We stay available to answer questions from your developers as they work through fixes. We can also provide guidance calls if specific findings need deeper explanation.",
    deliverables: ["Developer Q&A support", "Guidance calls", "Remediation prioritisation"],
  },
  {
    num: "06",
    title: "Retest & Sign-off",
    desc: "Once you have addressed the findings, we retest to confirm remediation is effective and issue a clean sign-off letter - useful for auditors, customers, and partners.",
    deliverables: ["Retest validation", "Sign-off letter", "Compliance documentation"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: Globe,
    title: "Reconnaissance",
    why: "Open-source intelligence and attack surface mapping to understand what is exposed before active testing begins.",
    pills: ["Shodan", "Amass", "Subfinder", "theHarvester", "OSINT Framework"],
  },
  {
    icon: Zap,
    title: "Vulnerability Assessment",
    why: "Automated and manual scanning to identify known weaknesses across networks, applications, and infrastructure.",
    pills: ["Nessus", "OpenVAS", "Nikto", "Nmap", "Masscan"],
  },
  {
    icon: Target,
    title: "Exploitation",
    why: "Manual exploitation and chaining to confirm real-world impact beyond what scanners report.",
    pills: ["Metasploit", "Burp Suite Pro", "SQLMap", "Custom exploits"],
  },
  {
    icon: Smartphone,
    title: "Mobile Testing",
    why: "Static and dynamic analysis of iOS and Android applications, including runtime manipulation and backend API testing.",
    pills: ["MobSF", "Frida", "jadx", "objection"],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    why: "Configuration review and privilege escalation testing across major cloud platforms.",
    pills: ["ScoutSuite", "Prowler", "Pacu", "CloudSploit"],
  },
  {
    icon: FileCheck,
    title: "Reporting Standards",
    why: "Every report includes CVSS scores, CWE references, OWASP mapping, and business impact context your teams can act on.",
    pills: ["CVSS scoring", "CWE references", "OWASP mapping", "Executive summaries"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: Target,
    title: "Offensive Security Engineers",
    desc: "CEH, OSCP, and CRTE-certified professionals who think like attackers. Many have backgrounds in CTF competitions and independent security research.",
    tags: ["OSCP", "CEH", "CRTE", "CTF experience"],
  },
  {
    icon: Lock,
    title: "Application Security Specialists",
    desc: "Deep expertise in secure code review, threat modelling, and application-layer vulnerabilities across web, mobile, and API environments.",
    tags: ["Secure code review", "Threat modelling", "Web & mobile", "API security"],
  },
  {
    icon: Cloud,
    title: "Cloud Security Architects",
    desc: "Hands-on experience securing AWS, Azure, and GCP environments across startups and enterprise clients, including regulated industries.",
    tags: ["AWS", "Azure", "GCP", "Regulated industries"],
  },
  {
    icon: FileCheck,
    title: "Compliance & GRC Consultants",
    desc: "Specialists who understand what auditors are looking for and how to structure testing to support ISO 27001, SOC 2, PCI DSS, and DPDP compliance.",
    tags: ["ISO 27001", "SOC 2", "PCI DSS", "DPDP"],
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
    desc: "Payment platforms, lending apps, digital wallets, and banking portals - where a single vulnerability can affect thousands of transactions.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Medtech",
    desc: "Patient data systems, telemedicine platforms, and connected medical devices where data sensitivity and regulatory obligations are both high.",
  },
  {
    icon: Cloud,
    title: "SaaS & B2B Software",
    desc: "Multi-tenant applications where one customer's data must be strictly isolated from another's - a common and critical testing area.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    desc: "Checkout flows, loyalty systems, and customer data environments where cart abandonment is the least of your problems if security fails.",
  },
  {
    icon: Building2,
    title: "Enterprise Technology",
    desc: "Large-scale internal networks, Active Directory environments, ERP systems, and complex integrations that require deep infrastructure expertise.",
  },
  {
    icon: Award,
    title: "Government & Public Sector",
    desc: "Regulated environments with strict compliance mandates and zero tolerance for data exposure.",
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Rocket,
    title: "Confidence before launch",
    desc: "Know your product is ready to face real users and real attackers - not after something goes wrong.",
  },
  {
    icon: Users,
    title: "Faster developer onboarding",
    desc: "When your team understands the security risks in your codebase, they write better code going forward.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced breach likelihood",
    desc: "Identified and fixed vulnerabilities cannot be exploited. The cost of a test is a fraction of the cost of a breach.",
  },
  {
    icon: FileCheck,
    title: "Compliance evidence",
    desc: "Documented testing results that satisfy auditors, enterprise customers, and regulatory bodies.",
  },
  {
    icon: Award,
    title: "Competitive differentiation",
    desc: "Security-conscious buyers increasingly ask vendors for evidence of testing. A clean report is a sales asset.",
  },
  {
    icon: BarChart3,
    title: "Board-level visibility",
    desc: "Our executive summaries give leadership a clear picture of security posture without requiring technical background.",
  },
]

export const engagementModels = [
  {
    featured: false,
    title: "One-Time Penetration Test",
    who: "Best for: product launches, compliance audits, or targeted assessments",
    desc: "We scope the engagement, test thoroughly, and deliver a full report with remediation guidance. Ideal when you need a point-in-time security validation.",
    benefits: [
      "Scoped to your environment and risk profile",
      "Manual and tool-assisted testing",
      "Executive and technical reports",
      "Remediation guidance included",
      "Retest round after fixes",
    ],
  },
  {
    featured: true,
    title: "Continuous Security Testing",
    who: "Best for: teams that ship code regularly",
    desc: "Periodic assessments aligned to your release cycles, tracking security posture over time as your product and infrastructure evolve.",
    benefits: [
      "Testing aligned to release cycles",
      "Trend tracking over time",
      "Priority-based finding management",
      "Developer remediation support",
      "Flexible scope adjustments",
    ],
  },
  {
    featured: false,
    title: "Dedicated Security Resource",
    who: "Best for: embedded security expertise",
    desc: "A senior security professional embedded in your team on a part-time or full-time basis. Covers testing, code review, threat modelling, and security advisory.",
    benefits: [
      "Embedded senior security professional",
      "Code review and threat modelling",
      "Ongoing security advisory",
      "Full-time or part-time availability",
      "Direct integration with your engineering team",
    ],
  },
  {
    featured: false,
    title: "Managed Security Testing Programme",
    who: "Best for: ongoing security as a business function",
    desc: "A fully managed annual programme with scheduled testing cycles, remediation tracking, progress reporting, and compliance documentation.",
    benefits: [
      "Scheduled annual testing cycles",
      "Remediation tracking and reporting",
      "Compliance documentation",
      "Executive progress reviews",
      "Dedicated programme manager",
    ],
  },
]

export const faqs = [
  {
    question: "How much does a penetration test cost?",
    answer:
      "Pricing depends on scope, complexity, and testing duration. A focused web application test for a small SaaS product might run for two to three weeks. A comprehensive red team engagement for a large enterprise could span several months. We scope every engagement before pricing - contact us and we will give you an honest estimate based on your actual requirements.",
  },
  {
    question: "How long does a penetration test take?",
    answer:
      "A targeted web application test typically takes five to ten business days. Network assessments vary based on the number of hosts and complexity of the environment. Red team engagements are typically scoped in weeks. We will give you a clear timeline during scoping.",
  },
  {
    question: "Will penetration testing disrupt our production systems?",
    answer:
      "We work with you to define testing windows and can conduct assessments against staging environments if production disruption is a concern. Critical exploitation steps are confirmed with you before execution during active testing.",
  },
  {
    question: "Is penetration testing right for my business?",
    answer:
      "If you handle customer data, process payments, run a SaaS product, or operate in a regulated industry, the answer is almost certainly yes. Even if you are not yet required to test by compliance frameworks, understanding your real exposure is basic risk management.",
  },
  {
    question: "What is the difference between a vulnerability scan and a penetration test?",
    answer:
      "A vulnerability scan identifies known weaknesses using automated tools. A penetration test goes further - testers manually exploit those weaknesses, chain multiple vulnerabilities together, and demonstrate the actual business impact of a successful attack. Scans tell you what might be wrong. Penetration tests tell you what an attacker could actually do.",
  },
  {
    question: "How do I choose a penetration testing partner?",
    answer:
      "Look for certifications (OSCP, CEH, CREST), evidence of manual testing rather than pure automation, clear reporting standards, and a willingness to explain their methodology before you engage. Ask to see a sample report. Be cautious of firms that jump straight to pricing before understanding your environment.",
  },
  {
    question: "Do you help us fix the issues you find?",
    answer:
      "We do not handle remediation directly, but we provide detailed guidance that your development or IT team can act on. We are available for questions during the remediation phase and include a retest to confirm fixes once you have addressed the findings.",
  },
  {
    question: "What happens after the test?",
    answer:
      "You receive an executive summary, a full technical report, and a prioritised remediation list. We stay available during your remediation cycle, and we run a retest to validate fixes. If you need a sign-off letter for compliance purposes, we provide that after remediation is confirmed.",
  },
]

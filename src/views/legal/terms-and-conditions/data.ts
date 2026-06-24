import {
  Briefcase,
  Copyright,
  FileCheck,
  FileText,
  Globe,
  Link2,
  Lock,
  Mail,
  RefreshCw,
  Scale,
  Shield,
  ShieldAlert,
  Split,
  type LucideIcon,
} from "lucide-react"

export const TERMS_LAST_UPDATED = "June 22, 2026"

export type TermsListItem = {
  label?: string
  text: string
}

export type TermsSubsection = {
  title: string
  items?: TermsListItem[]
  paragraphs?: string[]
}

export type TermsSection = {
  id: string
  number: number
  title: string
  icon: LucideIcon
  paragraphs?: string[]
  paragraphsAfter?: string[]
  list?: TermsListItem[]
  orderedList?: string[]
  subsections?: TermsSubsection[]
  highlightBox?: {
    title?: string
    text: string
  }
  linkParagraph?: {
    before: string
    linkText: string
    href: string
    after: string
  }
  contactDetails?: {
    company: string
    email: string
    contactHref: string
  }
}

export const termsIntroduction = {
  paragraphs: [
    'These Terms and Conditions ("Terms") govern your access to and use of the Toadster Technologies website and the services described on it (collectively, the "Services"), provided by Toadster Technologies ("Toadster," "we," "us," or "our"). By accessing our website or engaging our Services, you agree to be bound by these Terms. If you do not agree, please do not use our website or Services.',
    "These Terms apply to general use of our website and services information. Specific client engagements, statements of work, or master service agreements may include additional or different terms, which will govern in the event of a conflict with this page.",
  ],
}

export const termsSections: TermsSection[] = [
  {
    id: "use-of-website",
    number: 1,
    title: "Use of Our Website",
    icon: Globe,
    paragraphs: ["You may use our website for lawful purposes only. You agree not to:"],
    orderedList: [
      "Use the website in any way that violates applicable local, state, national, or international law",
      "Attempt to gain unauthorized access to any portion of the website, related systems, or networks",
      "Interfere with or disrupt the website's security features or normal operation",
      "Use automated systems (bots, scrapers) to access the website without our prior written consent",
      "Transmit any viruses, malware, or other harmful code through the website",
      "Misrepresent your identity or affiliation when interacting with the website or our team",
    ],
    paragraphsAfter: [
      "We reserve the right to restrict or terminate your access to the website at our discretion if we believe these Terms have been violated.",
    ],
  },
  {
    id: "services-description",
    number: 2,
    title: "Services Description",
    icon: Briefcase,
    paragraphs: [
      "Toadster Technologies provides enterprise technology consulting and implementation services, including but not limited to data analytics, artificial intelligence, DevOps, IoT, augmented reality, SaaS application development, SAP migration, and penetration testing, as further described elsewhere on our website.",
      "Descriptions of our Services on this website are for general informational purposes and do not constitute a binding offer. Specific scope, deliverables, timelines, and pricing for any engagement will be governed by a separate, mutually executed agreement (such as a statement of work or master service agreement) between Toadster and the client.",
    ],
  },
  {
    id: "engagements",
    number: 3,
    title: "Engagements and Client Agreements",
    icon: FileText,
    paragraphs: [
      "Any consulting, development, or implementation engagement with Toadster is governed by a separate written agreement executed between Toadster and the client, which may include:",
    ],
    list: [
      {
        label: "Statement of Work (SOW)",
        text: "defining specific project scope, deliverables, and timelines",
      },
      {
        label: "Master Service Agreement (MSA)",
        text: "defining the overarching legal and commercial terms of the relationship",
      },
      {
        label: "Data Processing Agreement (DPA)",
        text: "where applicable, governing the handling of personal or client data during the engagement",
      },
    ],
    paragraphsAfter: [
      "In the event of any conflict between these Terms and a separately executed client agreement, the terms of the specific client agreement will govern with respect to that engagement.",
    ],
  },
  {
    id: "intellectual-property",
    number: 4,
    title: "Intellectual Property",
    icon: Copyright,
    subsections: [
      {
        title: "4.1 Our Website Content",
        paragraphs: [
          "All content on this website - including text, graphics, logos, designs, and software - is the property of Toadster Technologies or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our website content without our prior written consent, except as necessary for normal personal or internal business use of the website (e.g., printing a page for reference).",
        ],
      },
      {
        title: "4.2 Client Engagement Intellectual Property",
        paragraphs: [
          "Ownership of work product, deliverables, and intellectual property created during a specific client engagement is governed by the applicable statement of work or master service agreement, not by these general Terms. Absent a specific agreement stating otherwise, pre-existing Toadster methodologies, frameworks, tools, and know-how remain the property of Toadster.",
        ],
      },
      {
        title: "4.3 Trademarks",
        paragraphs: [
          '"Toadster Technologies" and associated logos are trademarks of Toadster Technologies. Use of our trademarks without prior written permission is prohibited.',
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    number: 5,
    title: "Confidentiality",
    icon: Lock,
    paragraphs: [
      "In the course of a client engagement, both parties may share confidential or proprietary information. Confidentiality obligations for specific engagements are governed by the applicable client agreement or a separately executed non-disclosure agreement (NDA). Absent a specific agreement, you should not share confidential business information through general website contact forms or unencrypted channels.",
    ],
  },
  {
    id: "disclaimers",
    number: 6,
    title: "Disclaimers",
    icon: ShieldAlert,
    subsections: [
      {
        title: '6.1 Website Provided "As Is"',
        paragraphs: [
          'This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
        ],
      },
      {
        title: "6.2 No Guarantee of Outcomes",
        paragraphs: [
          "Descriptions of past client outcomes, case studies, or performance metrics on this website are illustrative of prior engagements and do not constitute a guarantee of similar results for any future engagement. Actual outcomes depend on factors specific to each client's environment, data, and implementation choices.",
        ],
      },
      {
        title: "6.3 Third-Party Tools and Platforms",
        paragraphs: [
          "References to third-party technologies, platforms, or tools (such as cloud providers, software platforms, or frameworks) on this website are for informational purposes only. Toadster does not warrant the performance, availability, or security of third-party products and is not responsible for changes made to them by their respective providers.",
        ],
      },
    ],
  },
  {
    id: "limitation-of-liability",
    number: 7,
    title: "Limitation of Liability",
    icon: Scale,
    paragraphs: [
      "To the fullest extent permitted by applicable law, Toadster Technologies and its officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website, including but not limited to loss of profits, data, or business opportunity, even if advised of the possibility of such damages.",
      "Liability arising from a specific client engagement is governed by the limitation of liability provisions contained in the applicable client agreement, which will take precedence over this section for that engagement.",
    ],
    highlightBox: {
      text: "Nothing in this section limits liability that cannot be excluded or limited under applicable law.",
    },
  },
  {
    id: "indemnification",
    number: 8,
    title: "Indemnification",
    icon: Shield,
    paragraphs: [
      "You agree to indemnify and hold harmless Toadster Technologies, its officers, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your violation of these Terms or your misuse of the website.",
    ],
  },
  {
    id: "third-party-links",
    number: 9,
    title: "Third-Party Links",
    icon: Link2,
    paragraphs: [
      "Our website may contain links to third-party websites or resources not operated or controlled by Toadster. We are not responsible for the content, accuracy, or practices of any third-party site. Inclusion of a link does not imply endorsement by Toadster.",
    ],
  },
  {
    id: "privacy",
    number: 10,
    title: "Privacy",
    icon: Lock,
    linkParagraph: {
      before: "Your use of our website is also governed by our ",
      linkText: "Privacy Policy",
      href: "/privacy-policy",
      after: ", which describes how we collect, use, and protect information collected through the website. By using our website, you also agree to the practices described in our Privacy Policy.",
    },
  },
  {
    id: "governing-law",
    number: 11,
    title: "Governing Law and Dispute Resolution",
    icon: Scale,
    paragraphs: [
      "These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Toadster Technologies is incorporated, without regard to its conflict-of-law principles. Any dispute arising from these Terms or your use of the website will be subject to the exclusive jurisdiction of the courts located in that jurisdiction, unless a separately executed client agreement specifies a different dispute resolution mechanism (such as arbitration) for a specific engagement.",
    ],
  },
  {
    id: "changes",
    number: 12,
    title: "Changes to These Terms",
    icon: RefreshCw,
    paragraphs: [
      'We may update these Terms from time to time to reflect changes in our practices, services, or legal requirements. The "Last Updated" date at the top of this page indicates when these Terms were most recently revised. Continued use of our website after changes are posted constitutes acceptance of the revised Terms. Material changes affecting active client engagements will be addressed through the applicable client agreement rather than this general page.',
    ],
  },
  {
    id: "severability",
    number: 13,
    title: "Severability",
    icon: Split,
    paragraphs: [
      "If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.",
    ],
  },
  {
    id: "entire-agreement",
    number: 14,
    title: "Entire Agreement",
    icon: FileCheck,
    paragraphs: [
      "These Terms, together with our Privacy Policy and any separately executed client agreements, constitute the entire agreement between you and Toadster Technologies regarding your use of the website and Services, and supersede any prior agreements or understandings regarding the same subject matter, except as otherwise specified in a client agreement.",
    ],
  },
  {
    id: "contact-us",
    number: 15,
    title: "Contact Us",
    icon: Mail,
    paragraphs: ["If you have questions about these Terms and Conditions, please contact us:"],
    contactDetails: {
      company: "Toadster Technologies",
      email: "business@toadsters.com",
      contactHref: "/contact",
    },
  },
]

export const termsFootnote = "Toadster Technologies - Precision Engineering for Data, AI, and Enterprise Systems."

import {
  Baby,
  Clock,
  Cookie,
  Database,
  FileText,
  Globe,
  Link2,
  Lock,
  Mail,
  Scale,
  Settings,
  Share2,
  UserCheck,
  type LucideIcon,
} from "lucide-react"

export const PRIVACY_LAST_UPDATED = "June 22, 2026"

export type PrivacyListItem = {
  label?: string
  text: string
}

export type PrivacySubsection = {
  title: string
  items: PrivacyListItem[]
}

export type PrivacyTable = {
  headers: string[]
  rows: string[][]
}

export type PrivacySection = {
  id: string
  number: number
  title: string
  icon: LucideIcon
  paragraphs?: string[]
  paragraphsAfter?: string[]
  list?: PrivacyListItem[]
  orderedList?: string[]
  subsections?: PrivacySubsection[]
  table?: PrivacyTable
  highlightBox?: {
    title?: string
    text: string
  }
  contactDetails?: {
    company: string
    email: string
    contactHref: string
  }
}

export const privacyIntroduction = {
  paragraphs: [
    'Toadster Technologies ("Toadster," "we," "us," or "our") respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains what information we collect, how we use it, how we protect it, and what rights you have regarding your data when you visit our website, engage our services, or otherwise interact with us.',
    "By using our website or services, you agree to the practices described in this Privacy Policy. If you do not agree with this policy, please discontinue use of our website and services.",
  ],
}

export const privacySections: PrivacySection[] = [
  {
    id: "information-we-collect",
    number: 1,
    title: "Information We Collect",
    icon: Database,
    paragraphs: ["We collect information in the following categories:"],
    subsections: [
      {
        title: "1.1 Information You Provide Directly",
        items: [
          { label: "Contact information", text: "name, email address, phone number, company name, job title" },
          {
            label: "Communications",
            text: "messages, inquiries, or requests submitted through contact forms, consultation requests, or email",
          },
          {
            label: "Account information",
            text: "if you create an account or client portal access, including login credentials",
          },
          {
            label: "Project and engagement data",
            text: "information shared in the course of a consulting or development engagement, which may include business, technical, or operational data relevant to the project scope",
          },
        ],
      },
      {
        title: "1.2 Information Collected Automatically",
        items: [
          { label: "Usage data", text: "pages visited, time spent on pages, click patterns, referring URLs" },
          { label: "Device and browser information", text: "IP address, browser type, operating system, device identifiers" },
          { label: "Cookies and tracking technologies", text: "as described in Section 5 below" },
        ],
      },
      {
        title: "1.3 Information From Third Parties",
        items: [
          {
            text: "Information from business partners, integration providers, or publicly available sources, where relevant to evaluating or delivering services",
          },
          {
            text: "Information from analytics and advertising providers (e.g., aggregated usage statistics)",
          },
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    number: 2,
    title: "How We Use Your Information",
    icon: Settings,
    paragraphs: ["We use the information we collect to:"],
    orderedList: [
      "Respond to inquiries and provide requested information about our services",
      "Deliver and manage engagements, including project communication, billing, and support",
      "Improve our website and services through analytics and user experience research",
      "Send communications, including service updates, newsletters, or marketing materials (where you have opted in or as otherwise permitted by law)",
      "Maintain security, including fraud prevention, system monitoring, and access control",
      "Comply with legal obligations, including recordkeeping, audit, and regulatory requirements",
    ],
  },
  {
    id: "legal-basis",
    number: 3,
    title: "Legal Basis for Processing (For Users in Applicable Jurisdictions)",
    icon: Scale,
    paragraphs: ["We rely on the following legal bases, as applicable:"],
    list: [
      { label: "Consent", text: "where you have explicitly agreed to a specific use, such as marketing communications" },
      {
        label: "Contractual necessity",
        text: "where processing is required to deliver a service you have requested or engaged us for",
      },
      {
        label: "Legitimate interests",
        text: "where processing supports our business operations in a way that does not override your rights (e.g., website analytics, security monitoring)",
      },
      {
        label: "Legal obligation",
        text: "where processing is required to comply with applicable law or regulation",
      },
    ],
  },
  {
    id: "how-we-share",
    number: 4,
    title: "How We Share Your Information",
    icon: Share2,
    paragraphs: ["We may share information with:"],
    orderedList: [
      "Service providers and subprocessors - including cloud hosting providers, analytics platforms, billing and payment processors, and communication tools, under contractual confidentiality and data protection obligations",
      "Professional advisors - including legal, accounting, and audit professionals, where necessary",
      "Business transfers - in connection with a merger, acquisition, financing, or sale of assets, subject to appropriate confidentiality protections",
      "Legal and regulatory authorities - where required to comply with applicable law, legal process, or to protect our rights, property, or safety, or that of others",
    ],
    highlightBox: {
      text: "We do not sell personal information to third parties for their own marketing or advertising purposes.",
    },
  },
  {
    id: "cookies",
    number: 5,
    title: "Cookies and Tracking Technologies",
    icon: Cookie,
    subsections: [{ title: "Types of Cookies We Use", items: [] }],
    table: {
      headers: ["Cookie Type", "Purpose", "Can Be Disabled?"],
      rows: [
        [
          "Essential / Strictly Necessary",
          "Required for core website functionality (e.g., navigation, forms)",
          "No - required for site to function",
        ],
        ["Analytics", "Understand visitor behavior to improve site experience", "Yes, via browser or cookie settings"],
        ["Functional", "Remember preferences (e.g., language, region)", "Yes"],
        ["Advertising / Marketing", "Measure marketing campaign effectiveness", "Yes, via browser or cookie settings"],
      ],
    },
    paragraphs: [
      "You may manage cookie preferences through your browser settings or, where available, through a cookie consent tool on our website. Disabling certain cookies may limit some website functionality.",
    ],
  },
  {
    id: "data-retention",
    number: 6,
    title: "Data Retention",
    icon: Clock,
    paragraphs: ["We generally retain:"],
    list: [
      {
        label: "Inquiry and prospect data",
        text: "for a limited period after the last interaction, unless you request earlier deletion",
      },
      {
        label: "Client and engagement data",
        text: "for the duration of the engagement and a period afterward consistent with legal, tax, and contractual recordkeeping requirements",
      },
      {
        label: "Website usage data",
        text: "for a limited period as determined by our analytics tools and providers",
      },
    ],
    highlightBox: {
      title: "Post-Retention Handling",
      text: "When information is no longer needed, we take reasonable steps to securely delete or anonymize it.",
    },
  },
  {
    id: "data-security",
    number: 7,
    title: "Data Security",
    icon: Lock,
    paragraphs: ["Our security measures include, where applicable:"],
    orderedList: [
      "Encryption of data in transit and at rest for sensitive information",
      "Access controls limiting data access to personnel who need it to perform their role",
      "Network and infrastructure security monitoring, aligned to the same DevSecOps and governance practices we implement for clients",
      "Vendor security review for third-party service providers handling personal data on our behalf",
    ],
    highlightBox: {
      text: "No method of transmission or storage is completely secure. While we work to protect your information, we cannot guarantee absolute security.",
    },
  },
  {
    id: "privacy-rights",
    number: 8,
    title: "Your Privacy Rights",
    icon: UserCheck,
    paragraphs: [
      "Depending on applicable law (such as GDPR, CCPA/CPRA, or similar frameworks), you may have the right to:",
    ],
    list: [
      { label: "Access", text: "the personal information we hold about you" },
      { label: "Correct", text: "inaccurate or incomplete personal information" },
      { label: "Delete", text: "personal information, subject to certain legal exceptions" },
      { label: "Restrict or object to", text: "certain processing activities" },
      { label: "Data portability", text: "receive your data in a structured, commonly used format" },
      { label: "Withdraw consent", text: "at any time where processing is based on consent" },
      {
        label: "Opt out",
        text: "of the sale or sharing of personal information (we do not currently sell personal information)",
      },
    ],
    paragraphsAfter: [
      "To exercise any of these rights, please contact us using the information in Section 12. We may need to verify your identity before processing certain requests.",
    ],
  },
  {
    id: "international-transfers",
    number: 9,
    title: "International Data Transfers",
    icon: Globe,
    paragraphs: [
      "If you are located outside the country where our servers or service providers operate, your information may be transferred internationally. We take steps to ensure such transfers comply with applicable data protection laws, including the use of contractual safeguards where required.",
    ],
  },
  {
    id: "childrens-privacy",
    number: 10,
    title: "Children's Privacy",
    icon: Baby,
    paragraphs: [
      "Our website and services are directed at businesses and professionals and are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child, we will take reasonable steps to delete it.",
    ],
  },
  {
    id: "third-party-links",
    number: 11,
    title: "Third-Party Links",
    icon: Link2,
    paragraphs: [
      "Our website may contain links to third-party websites or services not operated by Toadster. We are not responsible for the privacy practices or content of those third parties. We encourage you to review the privacy policies of any third-party site you visit.",
    ],
  },
  {
    id: "contact-us",
    number: 12,
    title: "Contact Us",
    icon: Mail,
    paragraphs: [
      "If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about how we handle your personal information, please contact us:",
    ],
    contactDetails: {
      company: "Toadster Technologies",
      email: "business@toadsters.com",
      contactHref: "/contact",
    },
  },
  {
    id: "changes",
    number: 13,
    title: "Changes to This Privacy Policy",
    icon: FileText,
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The "Last Updated" date at the top of this page indicates when this policy was most recently revised. We encourage you to review this page periodically. Material changes will be communicated through a notice on our website or, where appropriate, directly to affected users.',
    ],
  },
]

export const privacyFootnote = "Toadster Technologies - Precision Engineering for Data, AI, and Enterprise Systems."

"use client"

import type { ComponentType, ReactNode } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ToadsterLogo } from "@/components/ToadsterLogo"
import { cn } from "@/lib/utils"

interface InternalLink {
  to: string
  label: string
}

const AI_SERVICE_LINKS: InternalLink[] = [
  { to: "/services/agentic-ai", label: "Agentic AI" },
  { to: "/services/generative-ai", label: "Generative AI" },
  { to: "/services/llm-development", label: "LLM Development" },
  { to: "/services/ai-development", label: "AI Development" },
  { to: "/services/machine-learning", label: "Machine Learning" },
  { to: "/services/custom-ai-solutions", label: "Custom AI Solutions" },
  { to: "/services/ai-chatbots", label: "AI Chatbots" },
  { to: "/services/conversational-ai", label: "Conversational AI" },
  { to: "/services/nlp-services", label: "NLP Services" },
  { to: "/services/computer-vision", label: "Computer Vision" },
  { to: "/services/ai-data-analytics", label: "AI Data Analytics" },
  { to: "/services/intelligent-automation", label: "Intelligent Automation" },
  { to: "/services/ai-automation", label: "AI Automation" },
  { to: "/services/ai-integration", label: "AI Integration" },
  { to: "/services/industry-solutions", label: "Industry Solutions" },
  { to: "/services/ai-consultation", label: "AI Consultation" },
]

const DEVELOPMENT_SERVICE_LINKS: InternalLink[] = [
  { to: "/services/custom-ai-solutions", label: "Mobile App Development" },
  { to: "/services/ai-development", label: "Software Development" },
  { to: "/services/custom-ai-solutions", label: "Web App Development" },
  { to: "/services/custom-ai-solutions", label: "Cross-Platform App Development" },
  { to: "/contact", label: "Product Design (UX/UI)" },
  { to: "/services/ai-integration", label: "Application Support & Maintenance" },
  { to: "/services/conversational-ai", label: "Voice (Alexa / Google Home)" },
  { to: "/services/ai-consultation", label: "Business Analysis" },
  { to: "/services/ai-consultation", label: "Consulting Services" },
  { to: "/contact", label: "Crowd Twist Services" },
  { to: "/services/industry-solutions", label: "Cybersecurity" },
]

const SERVICE_LINKS: InternalLink[] = [...AI_SERVICE_LINKS, ...DEVELOPMENT_SERVICE_LINKS]

const AI_TECHNOLOGY_LINKS: InternalLink[] = [
  { to: "/services/advanced-ai-tech", label: "Advanced AI Tech" },
  { to: "/services/agent-2-agent", label: "Agent2Agent (A2A)" },
  { to: "/services/machine-learning", label: "Machine Learning" },
  { to: "/services/generative-ai", label: "Generative AI" },
  { to: "/services/llm-development", label: "LLM & RAG Systems" },
  { to: "/services/computer-vision", label: "Computer Vision" },
  { to: "/services/nlp-services", label: "Natural Language Processing" },
  { to: "/services/ai-data-analytics", label: "Data Engineering & Analytics" },
]

const PLATFORM_TECHNOLOGY_LINKS: InternalLink[] = [
  { to: "/services/ai-data-analytics", label: "Data Analytics" },
  { to: "/services/ai-data-analytics", label: "Microsoft Power BI Consulting" },
  { to: "/services/ai-development", label: "Artificial Intelligence (AI)" },
  { to: "/services/advanced-ai-tech", label: "Internet of Things (IoT)" },
  { to: "/services/ai-integration", label: "SAP Migration" },
  { to: "/services/custom-ai-solutions", label: "SaaS App Development" },
  { to: "/services/ai-integration", label: "DevOps Services" },
  { to: "/services/computer-vision", label: "Augmented Reality" },
  { to: "/contact", label: "Penetration Testing" },
]

const TECHNOLOGY_LINKS: InternalLink[] = [
  ...AI_TECHNOLOGY_LINKS,
  ...PLATFORM_TECHNOLOGY_LINKS,
]

import { HIRE_RESOURCES, getHireResourcePath } from "@/config/hire-resources"

const HIRE_RESOURCE_LINKS: InternalLink[] = HIRE_RESOURCES.map((resource) => ({
  to: getHireResourcePath(resource.slug),
  label: resource.navTitle,
}))

const COMPANY_LINKS: InternalLink[] = [
  { to: "/about", label: "About Us" },
  { to: "/careers", label: "Careers" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
]

interface SocialLink {
  href: string
  icon: ComponentType<{ size?: number }>
  label: string
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://in.linkedin.com/company/toadster-technologies-private-limited",
    icon: Linkedin,
    label: "Toadster on LinkedIn",
  },
  {
    href: "https://x.com/technologi62401",
    icon: Twitter,
    label: "Toadster on X",
  },
  {
    href: "https://www.instagram.com/toadster_technologies",
    icon: Instagram,
    label: "Toadster on Instagram",
  },
  {
    href: "https://www.youtube.com/@toadster-technologies",
    icon: Youtube,
    label: "Toadster on YouTube",
  },
]

const linkClassName =
  "relative inline-block text-sm leading-snug text-page-fg-muted transition-colors hover:text-page-fg after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 xl:whitespace-nowrap"

function FooterLinkList({
  links,
  columns = 1,
  splitColumns = false,
}: {
  links: InternalLink[]
  columns?: 1 | 2 | 3
  splitColumns?: boolean
}) {
  if (splitColumns && links.length > 1) {
    const mid = Math.ceil(links.length / 2)
    const left = links.slice(0, mid)
    const right = links.slice(mid)

    return (
      <div className="grid min-w-0 grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2 sm:gap-x-12 xl:gap-x-16">
        {[left, right].map((group, index) => (
          <ul key={index} className="min-w-0 flex flex-col gap-y-3.5">
            {group.map((link) => (
              <li key={`${link.to}-${link.label}`} className="min-w-0">
                <Link href={link.to} title={link.label} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    )
  }

  return (
    <ul
      className={cn(
        "grid gap-x-12 gap-y-3.5",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
      )}
    >
      {links.map((link) => (
        <li key={`${link.to}-${link.label}`} className="min-w-0">
          <Link href={link.to} title={link.label} className={linkClassName}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function FooterExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} title={label} className={linkClassName}>
      {label}
    </a>
  )
}

function ContactDetails() {
  return (
    <ul className="flex flex-col gap-5">
      <li className="flex items-start gap-3.5">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-page-accent-soft text-page-fg-muted">
          <Mail size={16} />
        </span>
        <FooterExternalLink href="mailto:business@toadsters.com" label="business@toadsters.com" />
      </li>
      <li className="flex items-start gap-3.5">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-page-accent-soft text-page-fg-muted">
          <Phone size={16} />
        </span>
        <FooterExternalLink href="tel:+919220517988" label="+91 92205 17988" />
      </li>
      <li className="flex items-start gap-3.5">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-page-accent-soft text-page-fg-muted">
          <MapPin size={16} />
        </span>
        <span className="text-sm leading-relaxed text-page-fg-muted">
          JAV Tower, H17, H Block, Sector 63, Noida, UP 201309
        </span>
      </li>
      <li className="flex items-start gap-3.5">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-page-accent-soft text-page-fg-muted">
          <MapPin size={16} />
        </span>
        <span className="text-sm leading-relaxed text-page-fg-muted">
          Level 1, Avenue Gate, South Zone, DIFC, Dubai, UAE
        </span>
      </li>
    </ul>
  )
}

function FooterSectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-page-fg section-eyebrow">
        {children}
      </h3>
      <span
        className="mt-3 block h-0.5 w-10 rounded-full bg-toadster-green/80"
        aria-hidden
      />
    </div>
  )
}

function FooterAccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  return (
    <div className="min-w-0">
      <details
        className="group border-b border-page-border py-5 last:border-b-0 lg:hidden"
        open={defaultOpen}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
          <FooterSectionTitle>{title}</FooterSectionTitle>
          <ChevronDown
            size={18}
            className="shrink-0 text-page-fg-muted transition-transform duration-200 group-open:rotate-180"
          />
        </summary>
        <div className="pb-2 pt-1">{children}</div>
      </details>

      <div className="hidden lg:block">
        <FooterSectionTitle>{title}</FooterSectionTitle>
        {children}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="section-full-bleed relative z-10 border-t border-page-border bg-page-card">
      <div className="mx-auto max-w-9xl px-4 py-14 sm:px-6 md:py-16 lg:px-12 lg:py-20 xl:px-20">
        <div className="grid grid-cols-1 gap-14 lg:gap-16 xl:grid-cols-12 xl:gap-x-20">
          {/* Brand - full width on lg/xl tablets, sidebar from 2xl+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="xl:col-span-3"
          >
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <Link href="/" aria-label="Toadster home" title="Toadster Home">
                <ToadsterLogo height={40} width={180} />
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-page-fg-muted">
                AI-powered digital engineering for enterprises and startups. Building the
                intelligent future, one system at a time.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:justify-start">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={href}
                    aria-label={label}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-page-border bg-page-bg/40 text-page-fg-muted transition-colors hover:border-toadster-green/35 hover:text-toadster-green"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Link sections */}
          <div className="flex min-w-0 flex-col gap-14 xl:col-span-9 xl:gap-16">
            {/* Mobile accordions */}
            <div className="divide-y divide-page-border rounded-2xl border border-page-border bg-page-bg/30 px-5 sm:px-6 lg:hidden">
              <FooterAccordionSection title="Services" defaultOpen>
                <FooterLinkList links={SERVICE_LINKS} columns={2} />
              </FooterAccordionSection>
              <FooterAccordionSection title="Technologies">
                <FooterLinkList links={TECHNOLOGY_LINKS} columns={2} />
              </FooterAccordionSection>
              <FooterAccordionSection title="Hire Resources">
                <FooterLinkList links={HIRE_RESOURCE_LINKS} />
              </FooterAccordionSection>
              <FooterAccordionSection title="Company">
                <FooterLinkList links={COMPANY_LINKS} />
              </FooterAccordionSection>
              <FooterAccordionSection title="Get in Touch">
                <ContactDetails />
              </FooterAccordionSection>
            </div>

            {/* Desktop - row 1: stacked until 2xl, then Services | Technologies */}
            <div className="hidden min-w-0 lg:grid lg:grid-cols-1 lg:gap-y-14 2xl:grid-cols-2 2xl:gap-x-20 2xl:gap-y-0">
              <div className="min-w-0">
                <FooterSectionTitle>Services</FooterSectionTitle>
                <FooterLinkList links={SERVICE_LINKS} splitColumns />
              </div>
              <div className="min-w-0">
                <FooterSectionTitle>Technologies</FooterSectionTitle>
                <FooterLinkList links={TECHNOLOGY_LINKS} splitColumns />
              </div>
            </div>

            {/* Desktop - row 2: stacked on lg/xl tablets, inline from 2xl */}
            <div className="hidden min-w-0 lg:flex lg:flex-col lg:gap-12 lg:border-t lg:border-page-border/70 lg:pt-14 xl:gap-14 2xl:grid 2xl:grid-cols-12 2xl:gap-x-16">
              <div className="grid min-w-0 grid-cols-1 gap-12 sm:grid-cols-2 2xl:contents">
                <div className="min-w-0 2xl:col-span-3">
                  <FooterSectionTitle>Hire Resources</FooterSectionTitle>
                  <FooterLinkList links={HIRE_RESOURCE_LINKS} />
                </div>
                <div className="min-w-0 2xl:col-span-2">
                  <FooterSectionTitle>Company</FooterSectionTitle>
                  <FooterLinkList links={COMPANY_LINKS} />
                </div>
              </div>
              <div className="min-w-0 2xl:col-span-7">
                <FooterSectionTitle>Get in Touch</FooterSectionTitle>
                <ContactDetails />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-page-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-page-fg-muted">
            © {new Date().getFullYear()} Toadster Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
            <Link href="/about" className="text-page-fg-muted transition-colors hover:text-page-fg">
              About
            </Link>
            <Link href="/contact" className="text-page-fg-muted transition-colors hover:text-page-fg">
              Contact
            </Link>
            <Link href="/careers" className="text-page-fg-muted transition-colors hover:text-page-fg">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

"use client"

import type { ComponentType, ReactNode } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { ToadsterLogo } from "@/components/ToadsterLogo"
import { ClutchBadge } from "@/components/ClutchBadge"
import { cn } from "@/lib/utils"

interface InternalLink {
  to: string
  label: string
}

const AI_SERVICE_LINKS: InternalLink[] = [
  { to: "/services/software-development", label: "Software Development" },
  { to: "/services/ai-development", label: "AI Development" },
  { to: "/services/agentic-ai", label: "Agentic AI" },
  { to: "/services/rag-development", label: "RAG Development" },
  { to: "/services/mobile-app-development", label: "Mobile App Development" },
  { to: "/services/devops", label: "DevOps Services" },
  { to: "/services/iot-development", label: "IoT Development" },
  { to: "/services/vr-development", label: "VR Development" },
  { to: "/services/augmented-reality", label: "AR Development" },
  { to: "/services/product-management", label: "Product Management" },
  { to: "/services/penetration-testing", label: "Penetration Testing" },
  { to: "/services/cybersecurity", label: "Cybersecurity Services" },
  { to: "/services/application-support-and-maintenance", label: "Application Support" },
  { to: "/services/saas-app-development", label: "SaaS App Development" },
  { to: "/services/web-development", label: "Web Development" },
]

const DEVELOPMENT_SERVICE_LINKS: InternalLink[] = [

]

const SERVICE_LINKS: InternalLink[] = [...AI_SERVICE_LINKS, ...DEVELOPMENT_SERVICE_LINKS]

const TECHNOLOGY_LINKS: InternalLink[] = [
  { to: "/technologies/data-analytics", label: "Data Analytics" },
  { to: "/technologies/artificial-intelligence", label: "Artificial Intelligence" },
  { to: "/technologies/iot", label: "IoT" },
  { to: "/technologies/augmented-reality", label: "Augmented Reality" },
  { to: "/technologies/penetration-testing", label: "Penetration Testing" },
  { to: "/technologies/devops", label: "DevOps" },
  { to: "/technologies/saas-app-development", label: "SaaS App Development" },
]

import { HIRE_RESOURCES, getHireResourcePath } from "@/config/hire-resources"

const HIRE_RESOURCE_LINKS: InternalLink[] = HIRE_RESOURCES.map((resource) => ({
  to: getHireResourcePath(resource.slug),
  label: resource.navTitle,
}))

const FOOTER_LINK_LIMIT = 6

const FOOTER_SERVICE_LINKS = SERVICE_LINKS.slice(0, FOOTER_LINK_LIMIT)
const FOOTER_HIRE_RESOURCE_LINKS = HIRE_RESOURCE_LINKS.slice(0, FOOTER_LINK_LIMIT)

const SERVICES_VIEW_MORE: InternalLink = { to: "/services", label: "View More" }
const HIRE_RESOURCES_VIEW_MORE: InternalLink = { to: "/hire-resources", label: "View More" }

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

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://in.linkedin.com/company/toadster-technologies-private-limited",
    icon: Linkedin,
    label: "Toadster on LinkedIn",
  },
  {
    href: "https://x.com/technologi62401",
    icon: XIcon,
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
  "relative inline-block min-w-0 text-sm leading-snug text-white/75 transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 break-words lg:text-[0.8125rem] lg:leading-snug xl:text-sm"

function FooterLinkList({
  links,
  columns = 1,
  viewMore,
}: {
  links: InternalLink[]
  columns?: 1 | 2 | 3
  viewMore?: InternalLink
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-12 gap-y-3 lg:gap-y-3",
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
      {viewMore ? (
        <li key={`${viewMore.to}-${viewMore.label}`} className="min-w-0">
          <Link
            href={viewMore.to}
            title={viewMore.label}
            className={cn(linkClassName, "font-semibold text-white hover:text-white")}
          >
            {viewMore.label}
          </Link>
        </li>
      ) : null}
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

function ContactDetails({ compact = false }: { compact?: boolean }) {
  const iconBox = compact
    ? "h-8 w-8"
    : "h-9 w-9"
  const iconSize = compact ? 14 : 16
  const rowGap = compact ? "gap-3" : "gap-3.5"
  const listGap = compact ? "gap-3.5" : "gap-5"
  const textClass = compact
    ? "text-xs leading-relaxed text-white/75"
    : "text-sm leading-relaxed text-white/75"

  return (
    <ul className={cn("flex flex-col", listGap)}>
      <li className={cn("flex items-start", rowGap)}>
        <span
          className={cn(
            "mt-0.5 flex shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/80",
            iconBox,
          )}
        >
          <Mail size={iconSize} />
        </span>
        <FooterExternalLink href="mailto:business@toadsters.com" label="business@toadsters.com" />
      </li>
      <li className={cn("flex items-start", rowGap)}>
        <span
          className={cn(
            "mt-0.5 flex shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/80",
            iconBox,
          )}
        >
          <Phone size={iconSize} />
        </span>
        <FooterExternalLink href="tel:+919220517988" label="+91 92205 17988" />
      </li>
      <li className={cn("flex items-start", rowGap)}>
        <span
          className={cn(
            "mt-0.5 flex shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/80",
            iconBox,
          )}
        >
          <MapPin size={iconSize} />
        </span>
        <span className={textClass}>
          JAV Tower, H17, H Block, Sector 63, Noida, UP 201309
        </span>
      </li>
      <li className={cn("flex items-start", rowGap)}>
        <span
          className={cn(
            "mt-0.5 flex shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/80",
            iconBox,
          )}
        >
          <MapPin size={iconSize} />
        </span>
        <span className={textClass}>
          Level 1, Avenue Gate, South Zone, DIFC, Dubai, UAE
        </span>
      </li>
    </ul>
  )
}

function FooterSectionTitle({
  children,
  compact = false,
}: {
  children: ReactNode
  compact?: boolean
}) {
  return (
    <div className={cn(compact ? "mb-4 lg:mb-5 xl:mb-6" : "mb-6")}>
      <h3 className="text-sm tracking-[0.16em] text-white lg:text-xs lg:tracking-[0.14em] xl:text-lg xl:tracking-[0.16em]">
        {children}
      </h3>
      <span
        className="mt-3 block h-0.5 w-10 rounded-full bg-white"
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
        className="group border-b border-white/10 py-5 last:border-b-0 lg:hidden"
        open={defaultOpen}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
          <FooterSectionTitle>{title}</FooterSectionTitle>
          <ChevronDown
            size={18}
            className="shrink-0 text-white/60 transition-transform duration-200 group-open:rotate-180"
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

function FooterColumn({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "min-w-0 lg:pr-3 xl:pr-5 2xl:pr-6 last:lg:border-r-0 last:lg:pr-0",
        className,
      )}
    >
      {children}
    </div>
  )
}



const Footer = () => {
  return (
    <footer className="section-full-bleed relative z-10 border-t border-white/10 bg-[#0a101f] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 md:py-10 lg:px-10 lg:py-14 xl:px-12">
        {/* Mobile & tablet */}
        <div className="lg:hidden">
          <div
            className="mx-auto flex max-w-md flex-col items-center text-center"
          >
            <Link href="/" aria-label="Toadster home" title="Toadster Home">
              <ToadsterLogo height={40} width={180} onDarkBackground />
            </Link>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-toadster-green/50 hover:text-toadster-green"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              AI-powered digital engineering for enterprises and startups. Building the
              intelligent future, one system at a time.
            </p>
            <ClutchBadge className="mt-5" onDarkBackground />
          </div>

          <div className="mx-auto mt-10 max-w-lg divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 px-5 sm:px-6">
            <FooterAccordionSection title="Services" defaultOpen>
              <FooterLinkList links={FOOTER_SERVICE_LINKS} viewMore={SERVICES_VIEW_MORE} />
            </FooterAccordionSection>
            <FooterAccordionSection title="Hire Resources">
              <FooterLinkList links={FOOTER_HIRE_RESOURCE_LINKS} viewMore={HIRE_RESOURCES_VIEW_MORE} />
            </FooterAccordionSection>
            <FooterAccordionSection title="Technologies">
              <FooterLinkList links={TECHNOLOGY_LINKS} />
            </FooterAccordionSection>
            <FooterAccordionSection title="Company">
              <FooterLinkList links={COMPANY_LINKS} />
            </FooterAccordionSection>
            <FooterAccordionSection title="Get in Touch">
              <ContactDetails />
            </FooterAccordionSection>
          </div>
        </div>

        {/* Desktop - centered 5-column row */}
        <div className="mx-auto hidden w-full lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-x-6 xl:gap-x-10">
          <div className="min-w-0">
            <div className="flex flex-col items-start text-left">
              <Link href="/" aria-label="Toadster home" title="Toadster Home">
                <ToadsterLogo height={40} width={180} onDarkBackground />
              </Link>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={href}
                    aria-label={label}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-toadster-green/50 hover:text-toadster-green"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
                AI-powered digital engineering for enterprises and startups. Building the
                intelligent future, one system at a time.
              </p>
              <ClutchBadge className="mt-5" onDarkBackground />
            </div>
          </div>

          <FooterColumn>
            <FooterSectionTitle compact>Services</FooterSectionTitle>
            <FooterLinkList links={FOOTER_SERVICE_LINKS} viewMore={SERVICES_VIEW_MORE} />
          </FooterColumn>
          <FooterColumn>
            <FooterSectionTitle compact>Hire Resources</FooterSectionTitle>
            <FooterLinkList links={FOOTER_HIRE_RESOURCE_LINKS} viewMore={HIRE_RESOURCES_VIEW_MORE} />
          </FooterColumn>
          <FooterColumn>
            <FooterSectionTitle compact>Technologies</FooterSectionTitle>
            <FooterLinkList links={TECHNOLOGY_LINKS} />
          </FooterColumn>
          <FooterColumn>
            <FooterSectionTitle compact>Get in Touch</FooterSectionTitle>
            <ContactDetails compact />
          </FooterColumn>
        </div>

      </div>
      {/* Bottom bar */}
      <div className="bg-black mx-auto py-5 flex w-full items-center justify-center gap-4 border-t border-white/10 pt-8 text-center">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Toadster Technologies Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
          <Link
            href="/privacy-policy"
            title="Privacy Policy"
            className="text-white/60 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            title="Terms and Conditions"
            className="text-white/60 transition-colors hover:text-white"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
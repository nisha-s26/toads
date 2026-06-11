"use client"

import type { ComponentType, ReactNode } from "react"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ToadsterLogo } from "@/components/ToadsterLogo"

interface InternalLink {
    to: string
    label: string
}

const SERVICE_LINKS: InternalLink[] = [
    { to: "/services/agentic-ai", label: "Agentic AI" },
    { to: "/services/generative-ai", label: "Generative AI" },
    { to: "/services/llm-development", label: "LLM Development" },
    { to: "/services/ai-chatbots", label: "AI Chatbots" },
    { to: "/services/nlp-services", label: "NLP Services" },
    { to: "/services/intelligent-automation", label: "Intelligent Automation" },
]

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
    "relative inline-block text-page-fg-muted hover:text-page-fg text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"

function FooterInternalLink({ to, label }: InternalLink) {
    return (
        <li>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="inline-block">
                <Link href={to} title={label} className={linkClassName}>
                    {label}
                </Link>
            </motion.div>
        </li>
    )
}

function FooterExternalLink({ href, label }: { href: string; label: string }) {
    return (
        <motion.a
            href={href}
            title={label}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            className={linkClassName}
        >
            {label}
        </motion.a>
    )
}

interface FooterColumnProps {
    title: string
    delay: number
    className?: string
    children: ReactNode
}

function FooterColumn({ title, delay, className, children }: FooterColumnProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            viewport={{ once: true }}
            className={className}
        >
            <h3 className="font-semibold text-page-fg mb-4">{title}</h3>
            {children}
        </motion.div>
    )
}

const Footer = () => {
    return (
        <footer className="section-full-bleed bg-page-card border-t border-page-border">
            <div className="border-t border-page-border" />

            <div className="max-w-9xl mx-20 px-4 py-16">
                <div className="flex flex-col justify-between md:flex-row gap-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:w-[30%] w-full md:w-[22rem] md:flex-none"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <Link href="/" aria-label="Toadster home" title="Toadster Home">
                                <ToadsterLogo height={40} width={180} />
                            </Link>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-page-fg-muted text-sm leading-relaxed mb-6"
                        >
                            AI-powered digital engineering for enterprises and startups. Building the intelligent future, one system at a time.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex gap-4"
                        >
                            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                                <motion.a
                                    key={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={href}
                                    aria-label={label}
                                    title={label}
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-page-fg-muted hover:text-page-fg transition-colors"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <div className="w-full lg:justify-end md:flex-1 md:min-w-0 flex flex-col sm:flex-row sm:flex-wrap gap-12">
                        <FooterColumn
                            title="Services"
                            delay={0.2}
                            className="max-w-[20rem] sm:flex-1 sm:min-w-[14rem]"
                        >
                            <ul className="space-y-3">
                                {SERVICE_LINKS.map((link) => (
                                    <FooterInternalLink key={link.to} {...link} />
                                ))}
                            </ul>
                        </FooterColumn>

                        <FooterColumn
                            title="Company"
                            delay={0.4}
                            className="max-w-[10rem] sm:flex-1 sm:min-w-[8rem]"
                        >
                            <ul className="space-y-3">
                                {COMPANY_LINKS.map((link) => (
                                    <FooterInternalLink key={link.to} {...link} />
                                ))}
                            </ul>
                        </FooterColumn>

                        <FooterColumn
                            title="Get in Touch"
                            delay={0.6}
                            className="max-w-[20rem] sm:flex-1 sm:min-w-[8rem]"
                        >
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Mail size={18} className="text-page-fg-muted mt-0.5 flex-shrink-0" />
                                    <FooterExternalLink
                                        href="mailto:business@toadsters.com"
                                        label="business@toadsters.com"
                                    />
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone size={18} className="text-page-fg-muted mt-0.5 flex-shrink-0" />
                                    <FooterExternalLink href="tel:+919220517988" label="+91 92205 17988" />
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="text-page-fg-muted mt-0.5 flex-shrink-0" />
                                    <span className="text-page-fg-muted text-sm">
                                        JAV Tower, H17, H Block, Sector 63,
                                        <br />
                                        Noida, Uttar Pradesh 201309
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="text-page-fg-muted mt-0.5 flex-shrink-0" />
                                    <span className="text-page-fg-muted text-sm">
                                        Level 1, Avenue Gate, South Zone, DIFC, Dubai, UAE
                                    </span>
                                </li>
                            </ul>
                        </FooterColumn>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

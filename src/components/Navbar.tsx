"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { GlobeIcon } from "@/components/GlobeIcon"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { ToadsterLogo } from "@/components/ToadsterLogo"
import {
  Brain,
  Code2,
  Building,
  MessageSquare,
  Text,
  Bot,
  Sparkles,
  Flame,
  Cpu,
  Activity,
  Eye,
  UserCog,
  BarChart,
  Database,
  Zap,
  Settings2,
  Link2,
  GitBranch,
  Smartphone,
  Monitor,
  Layers,
  Server,
  FileCode,
  Users,
} from "lucide-react"
import { HIRE_RESOURCES_NAV } from "@/config/hire-resources"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


const services = [
  { icon: "Brain", title: "AI Agent Development", description: "Autonomous agents that plan, execute, and adapt at scale" },
  { icon: "Flame", title: "Custom AI Solutions", description: "Tailor-made AI systems for unique business challenges" },
  { icon: "Settings2", title: "AI Workflow Automation", description: "Intelligent workflows that automate complex decisions" },
  { icon: "Bot", title: "AI Chatbot Development", description: "Enterprise chatbots and conversational assistants" },
  { icon: "Sparkles", title: "Generative AI Development", description: "AI that creates content, code, and creative output" },
  { icon: "Database", title: "LLM Development", description: "Production-grade large language model platforms" },
  { icon: "GitBranch", title: "RAG Development Services", description: "Retrieval-augmented generation and knowledge systems" },
  { icon: "Link2", title: "AI Integration Services", description: "Connect AI into your existing tools and workflows" },
  { icon: "Building", title: "Enterprise AI Solutions", description: "Sector-specific AI platforms for large organizations" },
  { icon: "MessageSquare", title: "AI Copilot Development", description: "Enterprise copilots for teams and knowledge work" },
  { icon: "Eye", title: "Computer Vision Development", description: "Visual intelligence and image analytics at scale" },
  { icon: "UserCog", title: "AI Consulting Services", description: "Strategy, architecture, and AI program guidance" },
  { icon: "Code2", title: "Software Development", description: "Custom software, web apps, and scalable product engineering" },
]

const navLinks = [
  { label: "Home", href: "#", section: "home" },
  { label: "About Us", href: "#about", section: "about" },
  { label: "Services", href: "#services", dropdown: true, section: "services" },
  { label: "Hire Resources", href: "#hire-resources", dropdown: true, section: "hire-resources" },
  { label: "Blogs", href: "#blogs", section: "blogs" },
  { label: "Careers", href: "#careers", section: "careers" },
  { label: "Contact Us", href: "#contact", section: "contact" },
]

const countries = [
  {
    flag: "🇮🇳",
    label: "India",
    description: "AI development from our Noida HQ",
    href: "/ai-development-company-india",
  },
  {
    flag: "🇦🇪",
    label: "UAE",
    description: "Enterprise AI delivery through DIFC, Dubai",
    href: "/ai-development-company-uae",
  },
]

const SERVICE_ROUTES: Record<string, string> = {
  "AI Agent Development": "/services/agentic-ai",
  "Custom AI Solutions": "/services/custom-ai-solutions",
  "AI Workflow Automation": "/services/intelligent-automation",
  "AI Chatbot Development": "/services/ai-chatbots",
  "Generative AI Development": "/services/generative-ai",
  "LLM Development": "/services/llm-development",
  "RAG Development Services": "/services/llm-development",
  "AI Integration Services": "/services/ai-integration",
  "Enterprise AI Solutions": "/services/industry-solutions",
  "AI Copilot Development": "/services/llm-development",
  "Computer Vision Development": "/services/computer-vision",
  "AI Consulting Services": "/services/ai-consultation",
  "Software Development": "/services/software-development",
}

const NAV_ICON_MAP = {
  Brain,
  Code2,
  Building,
  MessageSquare,
  Text,
  Bot,
  Sparkles,
  Flame,
  Cpu,
  Activity,
  Eye,
  UserCog,
  BarChart,
  Database,
  Zap,
  Settings2,
  Link2,
  GitBranch,
  Smartphone,
  Monitor,
  Layers,
  Server,
  FileCode,
  Users,
}

export function Navbar({ activeSection }: { activeSection: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileDedicatedOpen, setMobileDedicatedOpen] = useState(false)
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false)
  const [desktopCountriesOpen, setDesktopCountriesOpen] = useState(false)
  const router = useRouter();

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setMobileDedicatedOpen(false)
    setMobileCountriesOpen(false)
    setDesktopCountriesOpen(false)
  }

  return (
    <>
      {/* ── Blur Backdrop ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ── Mobile Right-Side Drawer ── */}
      <div
        className={`fixed top-0 right-0 z-[60] flex h-full w-72 max-w-[85vw] transform flex-col bg-page-card shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-page-border shrink-0">
          <Link href="/" onClick={closeMobile} title="Toadster Home" className="flex items-center">
            <ToadsterLogo className="h-5 w-auto" />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle size="sm" />
            <button
              className="p-1.5 rounded-lg text-page-fg-muted hover:bg-page-accent-soft transition-colors"
              onClick={closeMobile}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 rounded-xl overflow-y-auto px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map((link) => {
            if (link.dropdown) {
              if (link.label === "Services") {
                return (
                  <div key={link.label}>
                    <button
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === "services"
                        ? "text-brand-green font-semibold bg-page-accent-soft"
                        : "text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft"
                        }`}
                      onClick={() => setMobileServicesOpen((p) => !p)}
                    >
                      Services
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-1 ml-3 pl-3 border-l-2 border-page-border flex flex-col gap-0.5">
                        {services.map((s) => (
                          <a
                            key={s.title}
                            href="#"
                            title={s.title}
                            className="px-3 py-2 rounded-lg text-sm text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft transition-colors"
                            onClick={(e) => {
                              e.preventDefault()
                              closeMobile()
                              router.push(SERVICE_ROUTES[s.title] || "/services")
                            }}
                          >
                            {s.title}
                          </a>
                        ))}
                      </div>
                    )}
                        {/* Country Switcher Accordion */}
          <div>
            <button
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === "country"
                  ? "text-brand-green font-semibold bg-page-accent-soft"
                  : "text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft"
              }`}
              onClick={() => setMobileCountriesOpen((p) => !p)}
            >
              <span className="flex items-center gap-2">
                <GlobeIcon size={16} />
                Country
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileCountriesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileCountriesOpen && (
              <div className="mt-1 ml-3 pl-3 border-l-2 border-page-border flex flex-col gap-0.5">
                {countries.map((country) => (
                  <a
                    key={country.label}
                    href={country.href}
                    title={`Toadster ${country.label}`}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-page-fg-muted transition-colors hover:bg-page-accent-soft hover:text-page-fg"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMobile()
                      router.push(country.href)
                    }}
                  >
                    <span aria-hidden className="text-base leading-none">{country.flag}</span>
                    {country.label}
                  </a>
                ))}
              </div>
            )}
          </div>
                  </div>
                )
              } else if (link.label === "Hire Resources") {
                return (
                  <div key={link.label}>
                    <button
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === "hire-resources"
                        ? "text-brand-green font-semibold bg-page-accent-soft"
                        : "text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft"
                        }`}
                      onClick={() => setMobileDedicatedOpen((p) => !p)}
                    >
                      Hire Resources
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileDedicatedOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileDedicatedOpen && (
                      <div className="mt-1 ml-3 pl-3 border-l-2 border-page-border flex flex-col gap-0.5 max-h-72 overflow-y-auto">
                        {HIRE_RESOURCES_NAV.map((s) => (
                          <a
                            key={s.href}
                            href={s.href}
                            title={s.navTitle}
                            className="px-3 py-2 rounded-lg text-sm text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft transition-colors"
                            onClick={(e) => {
                              e.preventDefault()
                              closeMobile()
                              router.push(s.href)
                            }}
                          >
                            {s.navTitle}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
            } else {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  title={link.label}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === link.section
                    ? "text-brand-green font-semibold bg-page-accent-soft"
                    : "text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft"
                    }`}
                  onClick={(e) => {
                    e.preventDefault()
                    closeMobile()
                    if (link.label === "Home") router.push("/")
                    else if (link.label === "Contact Us") router.push("/contact")
                    else if (link.label === "About Us") router.push("/about")
                    else if (link.label === "Blogs") router.push("/blogs")
                    else if (link.label === "Careers") router.push("/careers")
                  }}
                >
                  {link.label}
                </a>
              )
            }
            return null
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="px-5 py-4 border-t border-page-border shrink-0">
          <Button asChild className="w-full rounded-xl text-sm font-semibold">
            <a
              href={"/contact"}
              title="Email us to schedule a call"
              onClick={closeMobile}
            >
              Schedule a Call
            </a>
          </Button>
        </div>
      </div>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center bg-transparent px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
        <nav
          className="pointer-events-auto flex w-full max-w-7xl min-w-0 items-center justify-between gap-3 rounded-2xl border border-page-border/70 bg-page-nav/85 px-4 py-2.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:gap-4 sm:px-5 sm:py-3 lg:max-w-[88rem] lg:px-8"
          style={{ boxShadow: "var(--page-nav-shadow)" }}
        >
          {/* ── Logo ── */}
          <Link href="/" title="Toadster Home" className="flex shrink-0 items-center gap-2.5 min-w-0">
            <ToadsterLogo
              width={132}
              height={34}
              className="h-7 w-auto sm:h-8 md:h-9"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex min-w-0 flex-1 items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {navLinks.map((link) => (
                  link.dropdown ? (
                    <NavigationMenuItem className="relative" key={link.label}>
                      <NavigationMenuTrigger
                        className={`px-4 py-2 text-sm font-medium bg-transparent rounded-full transition-colors hover:bg-page-accent-soft data-[state=open]:bg-page-accent-soft data-[state=open]:text-page-fg ${activeSection === link.section ? 'text-brand-green font-semibold' : 'text-page-fg-muted hover:text-page-fg'}`}
                      >
                        <span className="relative">
                          {link.label}
                          {activeSection === link.section && (
                            <span className="block mx-auto h-0.5 rounded-full bg-primary" style={{ width: "100%", marginTop: 0 }} />
                          )}
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="left-auto! top-auto! w-auto!">
                        {link.label === "Services" ? (
                          <div className="bg-page-card rounded-2xl shadow-2xl p-5 w-260 border border-page-border">
                            <ul className="grid grid-cols-4 gap-1">
                              {services.map((s) => {
                                const icons = {
                                  Brain,
                                  Code2,
                                  Building,
                                  MessageSquare,
                                  Text,
                                  Bot,
                                  Sparkles,
                                  Flame,
                                  Cpu,
                                  Activity,
                                  Eye,
                                  UserCog,
                                  BarChart,
                                  Database,
                                  Zap,
                                  Settings2,
                                  Link2,
                                  GitBranch
                                };
                                const Icon = icons[s.icon as keyof typeof icons];
                                return (
                                  <li key={s.title}>
                                    <NavigationMenuLink
                                      href={SERVICE_ROUTES[s.title] || "/services"}
                                      title={s.title}
                                      className="flex items-start gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-page-accent-soft cursor-pointer"
                                    >
                                      <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-page-accent-soft text-brand-green">
                                        {Icon && <Icon size={18} />}
                                      </span>
                                      <div>
                                        <div className="text-sm font-semibold text-page-fg leading-tight mb-0.5">{s.title}</div>
                                        <div className="text-xs text-page-fg-muted leading-snug">{s.description}</div>
                                      </div>
                                    </NavigationMenuLink>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        ) : (
                          <div className="bg-page-card rounded-2xl shadow-2xl p-5 w-260 max-h-[70vh] overflow-y-auto border border-page-border">
                            <ul className="grid grid-cols-4 gap-1">
                              {HIRE_RESOURCES_NAV.map((s) => {
                                const Icon = NAV_ICON_MAP[s.icon as keyof typeof NAV_ICON_MAP]
                                return (
                                  <li key={s.href}>
                                    <NavigationMenuLink
                                      href={s.href}
                                      title={s.navTitle}
                                      className="flex items-start gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-page-accent-soft cursor-pointer"
                                    >
                                      <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-page-accent-soft text-brand-green">
                                        {Icon && <Icon size={18} />}
                                      </span>
                                      <div>
                                        <div className="text-sm font-semibold text-page-fg leading-tight mb-0.5">{s.navTitle}</div>
                                        <div className="text-xs text-page-fg-muted leading-snug">{s.navDescription}</div>
                                      </div>
                                    </NavigationMenuLink>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuLink
                        href={link.href}
                        title={link.label}
                        onClick={e => {
                          e.preventDefault();
                          if (link.label === "Home") router.push("/");
                          else if (link.label === "Contact Us") router.push("/contact");
                          else if (link.label === "About Us") router.push("/about");
                          else if (link.label === "Blogs") router.push("/blogs");
                          else if (link.label === "Careers") router.push("/careers");
                        }}
                        className={`
                        relative px-4 py-2 text-sm font-medium rounded-full transition-colors
                        ${activeSection === link.section
                            ? "text-brand-green font-semibold"
                            : "text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft"
                          }
                        ${activeSection === link.section ? "relative" : ""}
                      `}
                      >
                        <span className="relative">
                          {link.label}
                          {activeSection === link.section && (
                            <span
                              className="block mx-auto h-0.5 rounded-full bg-primary"
                              style={{ width: "100%", marginTop: 0 }}
                            />
                          )}
                        </span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

        {/* ── CTA + Theme ── */}
        <div className="hidden shrink-0 items-center gap-1.5 lg:flex lg:gap-2">
          <div className="relative">
            <button
              type="button"
              aria-label="Select country"
              title="Select country"
              className={`relative flex h-9 items-center gap-1 rounded-full px-2.5 transition-colors hover:bg-page-accent-soft ${
                activeSection === "country" ? "text-brand-green" : "text-page-fg-muted hover:text-page-fg"
              }`}
              onClick={() => setDesktopCountriesOpen((p) => !p)}
            >
              <GlobeIcon size={18} />
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${desktopCountriesOpen ? "rotate-180" : ""}`}
              />
              {activeSection === "country" && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </button>

            {desktopCountriesOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-86 rounded-2xl border border-page-border bg-page-card p-3 shadow-2xl">
                <div className="grid gap-1">
                  {countries.map((country) => (
                    <div key={country.label} className="rounded-xl">
                      <button
                        type="button"
                        className="flex w-full items-start gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-page-accent-soft"
                        onClick={() => {
                          setDesktopCountriesOpen(false)
                          router.push(country.href)
                        }}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-page-accent-soft text-lg leading-none">
                          {country.flag}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold leading-tight text-page-fg">
                            {country.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-page-fg-muted">
                            {country.description}
                          </span>
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <ThemeToggle />
          <Button asChild className="rounded-xl px-5 py-5 text-sm font-semibold">
            <a href={"/contact"} title="Email us to schedule a call">
              Schedule a Call
            </a>
          </Button>
        </div>

          {/* ── Mobile Controls ── */}
          <div className="flex shrink-0 items-center gap-1 lg:hidden">
            <ThemeToggle size="sm" />
            <button
              className="p-2 rounded-lg text-page-fg-muted hover:bg-page-accent-soft transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

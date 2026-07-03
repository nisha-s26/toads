"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { GlobalPagesMenu } from "@/components/GlobalPagesMenu"
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
  ClipboardList,
  Scan,
  ShieldCheck,
  Lock,
  LifeBuoy,
  Cloud,
} from "lucide-react"
import { HIRE_RESOURCES_NAV } from "@/config/hire-resources"
import { SERVICES_NAV } from "@/config/services-nav"
import { cn } from "@/lib/utils"
import {
  FaReact,
  FaNodeJs,
  FaLayerGroup,
  FaBrain,
  FaCode,
  FaCloud,
  FaApple,
  FaAndroid,
} from "react-icons/fa"
import { SiFlutter, SiMongodb } from "react-icons/si"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"



type NavLink = {
  label: string
  href: string
  section: string
  dropdown?: boolean
  desktop?: boolean
  shortLabel?: string
}

const globalNavLinks: NavLink[] = [
  { label: "Home", href: "#", section: "home", desktop: false },
  { label: "About Us", href: "#about", section: "about", shortLabel: "About" },
  { label: "Services", href: "/services", dropdown: true, section: "services" },
  { label: "Hire Resources", href: "/hire-resources", dropdown: true, section: "hire-resources", shortLabel: "Hire" },
  { label: "Blogs", href: "#blogs", section: "blogs" },
  { label: "Careers", href: "#careers", section: "careers" },
  { label: "Contact Us", href: "#contact", section: "contact", shortLabel: "Contact" },
]

const desktopNavLinkClass =
  "whitespace-nowrap px-2 py-2 text-xs font-medium lg:px-2.5 xl:px-3 xl:text-sm 2xl:px-4"

const navDropdownPanelClass =
  "navbar-mega-menu-panel rounded-2xl border border-page-border bg-page-card p-2 font-sans shadow-[0_10px_40px_rgba(0,0,0,0.08)]"

const navDropdownGridClass = "navbar-mega-menu-grid grid gap-1"

const navDropdownItemClass =
  "navbar-mega-menu-item flex min-w-0 items-start gap-2 rounded-xl px-3 py-2.5 font-sans transition-colors hover:bg-page-accent-soft cursor-pointer xl:gap-3 xl:px-4 xl:py-3"

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
  ClipboardList,
  ShieldCheck,
  Scan,
  Lock,
  LifeBuoy,
  Cloud,
  ReactNative: FaReact,
  Nodejs: FaNodeJs,
  FullStack: FaLayerGroup,
  Mern: SiMongodb,
  Flutter: SiFlutter,
  AiMl: FaBrain,
  Software: FaCode,
  DevOps: FaCloud,
  Ios: FaApple,
  Android: FaAndroid,
  Reactjs: FaReact,
}

export function Navbar({ activeSection: incomingActiveSection }: { activeSection: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileDedicatedOpen, setMobileDedicatedOpen] = useState(false)
  const router = useRouter();
  const pathname = usePathname();
  const isHirePage = pathname?.startsWith("/hire") || pathname === "/hire-resources";

  const activeSection = isHirePage ? "hire-resources" : incomingActiveSection;
  const navLinks = globalNavLinks
  const desktopNavLinks = navLinks.filter((link) => link.desktop !== false)

  const getDesktopNavLabel = (link: NavLink) =>
    link.shortLabel ? (
      <>
        <span className="2xl:hidden">{link.shortLabel}</span>
        <span className="hidden 2xl:inline">{link.label}</span>
      </>
    ) : (
      link.label
    )

  const hireNavText = "text-black dark:text-white"
  const hireNavInactive = `${hireNavText} hover:bg-page-accent-soft`
  const hireNavActive = `${hireNavText} font-semibold bg-page-accent-soft`

  const mobileNavClass = (section: string) =>
    isHirePage
      ? activeSection === section
        ? hireNavActive
        : hireNavInactive
      : activeSection === section
        ? "text-brand-green font-semibold bg-page-accent-soft"
        : "text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft"

  const desktopNavClass = (section: string) =>
    isHirePage
      ? activeSection === section
        ? `${hireNavText} font-semibold`
        : `${hireNavText} hover:bg-page-accent-soft`
      : activeSection === section
        ? "text-brand-green font-semibold"
        : "text-page-fg-muted hover:text-page-fg"

  const desktopNavUnderlineClass = isHirePage ? "bg-black dark:bg-white" : "bg-primary"

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setMobileDedicatedOpen(false)
  }

  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

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
        aria-hidden={!mobileOpen}
        className={`navbar-mobile-drawer fixed top-0 right-0 z-[60] box-border flex h-full w-[min(85vw,100%)] max-w-full min-w-0 flex-col overflow-x-hidden overflow-y-auto bg-page-card font-sans transition-[transform,box-shadow,visibility] duration-300 ease-in-out will-change-transform lg:hidden ${mobileOpen
          ? "translate-x-0 visible shadow-2xl"
          : "translate-x-full invisible shadow-none pointer-events-none"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex min-w-0 items-center justify-between gap-2 px-3 py-4 border-b border-page-border shrink-0 sm:px-5">
          <Link href="/" onClick={closeMobile} title="Toadster Home" className="flex items-center">
            <ToadsterLogo className="h-5 w-auto" />
          </Link>
          <div className="navbar-utilities flex items-center">
            <GlobalPagesMenu size="sm" />
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
        <nav className="flex min-w-0 w-full max-w-full flex-1 flex-col gap-0.5 overflow-y-auto overflow-x-hidden rounded-xl px-3 py-3 sm:px-4">
          {navLinks.map((link) => {
            if (link.dropdown) {
              if (link.label === "Services") {
                return (
                  <div key={link.label}>
                    <div className={`flex w-full items-center rounded-lg ${mobileNavClass("services")}`}>
                      <Link
                        href="/services"
                        title="Services"
                        className="min-w-0 flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                        onClick={closeMobile}
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        aria-label="Toggle services menu"
                        className="shrink-0 px-3 py-2.5 transition-colors"
                        onClick={() => setMobileServicesOpen((p) => !p)}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <div className="navbar-mobile-submenu mt-1 ml-2 flex min-w-0 w-full max-w-full flex-col gap-0.5 border-l-2 border-page-border pl-2 sm:ml-3 sm:pl-3">
                        <Link
                          href="/services"
                          title="All Services"
                          className={`block min-w-0 max-w-full whitespace-normal break-words px-2 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-page-accent-soft sm:px-3 ${isHirePage ? `${hireNavText} hover:opacity-80` : "text-page-fg hover:text-page-fg"}`}
                          onClick={closeMobile}
                        >
                          All Services
                        </Link>
                        {SERVICES_NAV.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            title={s.title}
                            className={`block min-w-0 max-w-full whitespace-normal break-words px-2 py-2 rounded-lg text-sm transition-colors hover:bg-page-accent-soft sm:px-3 ${isHirePage ? `${hireNavText} hover:opacity-80` : "text-page-fg-muted hover:text-page-fg"}`}
                            onClick={closeMobile}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              } else if (link.label === "Hire Resources") {
                return (
                  <div key={link.label}>
                    <div className={`flex w-full items-center rounded-lg ${mobileNavClass("hire-resources")}`}>
                      <Link
                        href="/hire-resources"
                        title="Hire Resources"
                        className="min-w-0 flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                        onClick={closeMobile}
                      >
                        Hire Resources
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileDedicatedOpen}
                        aria-label="Toggle hire resources menu"
                        className="shrink-0 px-3 py-2.5 transition-colors"
                        onClick={() => setMobileDedicatedOpen((p) => !p)}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileDedicatedOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {mobileDedicatedOpen && (
                      <div className="navbar-mobile-submenu mt-1 ml-2 flex min-w-0 w-full max-w-full flex-col gap-0.5 border-l-2 border-page-border pl-2 max-h-72 overflow-y-auto overflow-x-hidden sm:ml-3 sm:pl-3">
                        <Link
                          href="/hire-resources"
                          title="All Hire Resources"
                          className={`block min-w-0 max-w-full whitespace-normal break-words px-2 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-page-accent-soft sm:px-3 ${isHirePage ? `${hireNavText} hover:opacity-80` : "text-page-fg hover:text-page-fg"}`}
                          onClick={closeMobile}
                        >
                          All Hire Resources
                        </Link>
                        {HIRE_RESOURCES_NAV.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            title={s.navTitle}
                            className={`block min-w-0 max-w-full whitespace-normal break-words px-2 py-2 rounded-lg text-sm transition-colors hover:bg-page-accent-soft sm:px-3 ${isHirePage ? `${hireNavText} hover:opacity-80` : "text-page-fg-muted hover:text-page-fg"}`}
                            onClick={closeMobile}
                          >
                            {s.navTitle}
                          </Link>
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
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${mobileNavClass(link.section ?? "")}`}
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
        <div className="min-w-0 px-3 py-4 border-t border-page-border shrink-0 sm:px-5">
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

      <header
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex max-w-[100vw] justify-center bg-transparent px-2 pt-2 sm:px-3 sm:pt-3 lg:px-4 lg:pt-3 xl:px-6 xl:pt-4${isHirePage ? " navbar-hire-route" : ""}`}
      >
        <nav
          className="pointer-events-auto relative flex w-full max-w-7xl min-w-0 items-center justify-between gap-1 overflow-visible rounded-2xl border border-page-border/70 bg-page-nav/85 px-2.5 py-2 font-sans shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:gap-2 sm:px-4 sm:py-2.5 lg:gap-2 lg:px-4 lg:py-2.5 xl:max-w-[88rem] xl:gap-3 xl:px-6 xl:py-3 2xl:px-8"
          style={{ boxShadow: "var(--page-nav-shadow)" }}
        >
          {/* ── Logo ── */}
          <Link href="/" title="Toadster Home" className="flex min-w-0 shrink-0 items-center gap-2.5">
            <ToadsterLogo
              width={132}
              height={34}
              className="h-6 w-auto max-w-[6.75rem] sm:h-7 sm:max-w-[7.25rem] md:h-8 xl:h-9 xl:max-w-none"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="navbar-desktop-nav hidden min-w-0 flex-1 basis-0 items-center justify-center lg:flex">
            <NavigationMenu className="navbar-mega-menu static min-w-0 max-w-full flex-1 justify-center">
              <NavigationMenuList className="min-w-0 flex-nowrap gap-0">
                {desktopNavLinks.map((link) => (
                  link.dropdown ? (
                    <NavigationMenuItem className="relative shrink-0" key={link.label}>
                      <NavigationMenuTrigger
                        className={`${desktopNavLinkClass} bg-transparent rounded-full transition-colors hover:bg-page-accent-soft data-[state=open]:bg-page-accent-soft ${isHirePage ? "data-[state=open]:text-black dark:data-[state=open]:text-white" : "data-[state=open]:text-page-fg"} ${desktopNavClass(link.section ?? "")}`}
                        onClick={() => {
                          router.push(link.href)
                        }}
                      >
                        <span className="relative">
                          {getDesktopNavLabel(link)}
                          {activeSection === link.section && (
                            <span className={`block mx-auto h-0.5 rounded-full ${desktopNavUnderlineClass}`} style={{ width: "100%", marginTop: 0 }} />
                          )}
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="left-auto! top-auto! w-auto! p-0">
                        {link.label === "Services" ? (
                          <div className={navDropdownPanelClass}>
                            <ul className={navDropdownGridClass}>
                              {SERVICES_NAV.map((s) => {
                                const Icon = NAV_ICON_MAP[s.icon as keyof typeof NAV_ICON_MAP]
                                return (
                                  <li key={s.title}>
                                    <NavigationMenuLink asChild>
                                      <Link href={s.href} title={s.title} className={navDropdownItemClass}>
                                        <span className="navbar-mega-menu-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-brand-green xl:h-12 xl:w-12">
                                          {Icon && <Icon className="size-6 xl:size-8" />}
                                        </span>
                                        <div className="min-w-0">
                                          <div className="navbar-mega-menu-title mb-0.5 text-sm font-semibold leading-tight text-page-fg xl:text-base">{s.title}</div>
                                          <div className="navbar-mega-menu-desc text-xs leading-snug text-page-fg-muted xl:text-sm">{s.description}</div>
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        ) : (
                          <div className={cn(navDropdownPanelClass, "max-h-[70vh] overflow-y-auto")}>
                            <ul className={navDropdownGridClass}>
                              {HIRE_RESOURCES_NAV.map((s) => {
                                const Icon = NAV_ICON_MAP[s.icon as keyof typeof NAV_ICON_MAP]
                                return (
                                  <li key={s.href}>
                                    <NavigationMenuLink asChild>
                                      <Link href={s.href} title={s.navTitle} className={navDropdownItemClass}>
                                        <span className="navbar-mega-menu-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-brand-green xl:h-12 xl:w-12">
                                          {Icon && <Icon className="size-6 xl:size-8" />}
                                        </span>
                                        <div className="min-w-0">
                                          <div className="navbar-mega-menu-title mb-0.5 text-xs font-semibold leading-tight text-page-fg xl:text-sm">{s.navTitle}</div>
                                          <div className="navbar-mega-menu-desc text-[0.6875rem] leading-snug text-page-fg-muted xl:text-xs">{s.navDescription}</div>
                                        </div>
                                      </Link>
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
                    <NavigationMenuItem className="shrink-0" key={link.label}>
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
                        relative ${desktopNavLinkClass} rounded-full transition-colors
                        ${desktopNavClass(link.section ?? "")}
                        hover:bg-page-accent-soft
                        ${activeSection === link.section ? "relative" : ""}
                      `}
                      >
                        <span className="relative">
                          {getDesktopNavLabel(link)}
                          {activeSection === link.section && (
                            <span
                              className={`block mx-auto h-0.5 rounded-full ${desktopNavUnderlineClass}`}
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
          <div className="navbar-utilities relative z-10 hidden shrink-0 items-center pl-1 lg:flex xl:pl-2">
            <GlobalPagesMenu />
            <ThemeToggle />
            <Button asChild className="rounded-xl px-3 py-4 text-xs font-semibold xl:px-4 xl:py-4 xl:text-sm 2xl:px-5 2xl:py-5">
              <a href={"/contact"} title="Email us to schedule a call">
                <span className="xl:hidden">Schedule Call</span>
                <span className="hidden xl:inline">Schedule a Call</span>
              </a>
            </Button>
          </div>

          {/* ── Mobile Controls ── */}
          <div className="navbar-utilities flex shrink-0 items-center lg:hidden">
            <GlobalPagesMenu size="sm" />
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

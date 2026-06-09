import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
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
  GitBranch
} from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const services = [
  { icon: "Brain", title: "Agentic AI", description: "Autonomous AI systems with reasoning capabilities" },
  { icon: "Code2", title: "AI Development", description: "End-to-end AI development services" },
  { icon: "Building", title: "Industry Solutions", description: "Specialized AI for key industry sectors" },
  { icon: "MessageSquare", title: "Conversational AI", description: "Build natural, contextual conversational experiences" },
  { icon: "Text", title: "NLP Services", description: "Advanced text analysis and language understanding" },
  { icon: "Bot", title: "AI Chatbots", description: "Intelligent conversational interfaces" },
  { icon: "Sparkles", title: "Generative AI", description: "AI systems that create content and solutions" },
  { icon: "Flame", title: "Custom AI Solutions", description: "Tailor-made AI for unique business challenges" },
  { icon: "Cpu", title: "Advanced AI Tech", description: "Cutting-edge AI capabilities for complex problems" },
  { icon: "Activity", title: "AI Automation", description: "Automate complex decision-making processes" },
  { icon: "Eye", title: "Computer Vision", description: "Sophisticated image and video analysis" },
  { icon: "UserCog", title: "AI Consultation", description: "Strategic guidance for AI adoption" },
  { icon: "BarChart", title: "AI Data Analytics", description: "Transform data into actionable insights" },
  { icon: "Database", title: "LLM Development", description: "Leverage large language models for development" },
  { icon: "Zap", title: "Machine Learning", description: "Custom ML models for specific business needs" },
  { icon: "Settings2", title: "Intelligent Automation", description: "AI-powered automation for businesses" },
  { icon: "Link2", title: "AI Integration", description: "Seamlessly integrate AI into your existing systems" },
  { icon: "GitBranch", title: "Agent2Agent (A2A)", description: "Decentralized secure agent communication protocol" },
]

const navLinks = [
  { label: "Home", href: "#", section: "home" },
  { label: "About Us", href: "#about", section: "about" },
  { label: "Services", href: "#services", dropdown: true, section: "services" },
  { label: "Dedicated Resources", href: "#dedicated-resources", dropdown: true, section: "dedicated-resources" },
  { label: "Blogs", href: "#blogs", section: "blogs" },
  { label: "Careers", href: "#careers", section: "careers" },
  { label: "Contact Us", href: "#contact", section: "contact" },
]

const SERVICE_ROUTES: Record<string, string> = {
  "Agentic AI": "/services/agentic-ai",
  "Generative AI": "/services/generative-ai",
  "NLP Services": "/services/nlp-services",
  "AI Development": "/services/ai-development",
  "Machine Learning": "/services/machine-learning",
  "Custom AI Solutions": "/services/custom-ai-solutions",
  "AI Integration": "/services/ai-integration",
  "AI Chatbots": "/services/ai-chatbots",
  "LLM Development": "/services/llm-development",
  "Computer Vision": "/services/computer-vision",
  "AI Data Analytics": "/services/ai-data-analytics",
  "Industry Solutions": "/services/industry-solutions",
  "AI Consultation": "/services/ai-consultation",
  "Agent2Agent (A2A)": "/services/agent-2-agent",
  "Advanced AI Tech": "/services/advanced-ai-tech",
  "Conversational AI": "/services/conversational-ai",
  "AI Automation": "/services/ai-automation",
  "Intelligent Automation": "/services/intelligent-automation",
}

const dedicatedResources = [
  { icon: "Brain", title: "AI / ML Engineers", description: "Model training, fine-tuning, experiment tracking, production deployment" },
  { icon: "MessageSquare", title: "LLM Application Developers", description: "RAG systems, enterprise copilots, LLM APIs, prompt engineering" },
  { icon: "Bot", title: "Agentic AI Engineers", description: "Agent orchestration, tool integration, multi-agent system design" },
  { icon: "Database", title: "Data Engineers", description: "Pipeline architecture, ETL, data quality, feature stores" },
  { icon: "Activity", title: "MLOps Engineers", description: "CI/CD for models, monitoring, drift detection, inference infrastructure" },
  { icon: "Code2", title: "Backend Developers (AI-adjacent)", description: "API development for AI services, microservice architecture" },
  { icon: "Eye", title: "QA / AI Evaluation Engineers", description: "Testing AI systems, evaluation suite design, red-teaming" },
]

const DEDICATED_RESOURCES_ROUTES: Record<string, string> = {
  "AI / ML Engineers": "/dedicated-resources/ai-ml-engineers",
  "LLM Application Developers": "/dedicated-resources/llm-application-developers",
  "Agentic AI Engineers": "/dedicated-resources/agentic-ai-engineers",
  "Data Engineers": "/dedicated-resources/data-engineers",
  "MLOps Engineers": "/dedicated-resources/mlops-engineers",
  "Backend Developers (AI-adjacent)": "/dedicated-resources/backend-developers",
  "QA / AI Evaluation Engineers": "/dedicated-resources/qa-evaluation-engineers",
}

export function Navbar({ activeSection }: { activeSection: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileDedicatedOpen, setMobileDedicatedOpen] = useState(false)
  const navigate = useNavigate();

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setMobileDedicatedOpen(false)
  }

  return (
    <>
      {/* ── Blur Backdrop ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ── Mobile Right-Side Drawer ── */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-page-card z-50 shadow-2xl flex flex-col md:hidden transform transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-page-border shrink-0">
          <a href="/" onClick={closeMobile} title="Toadster Home" className="flex items-center">
            <ToadsterLogo className="h-5 w-auto" />
          </a>
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
                              navigate(SERVICE_ROUTES[s.title] || "/services")
                            }}
                          >
                            {s.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              } else if (link.label === "Dedicated Resources") {
                return (
                  <div key={link.label}>
                    <button
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === "dedicated-resources"
                        ? "text-brand-green font-semibold bg-page-accent-soft"
                        : "text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft"
                        }`}
                      onClick={() => setMobileDedicatedOpen((p) => !p)}
                    >
                      Dedicated Resources
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileDedicatedOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileDedicatedOpen && (
                      <div className="mt-1 ml-3 pl-3 border-l-2 border-page-border flex flex-col gap-0.5">
                        {dedicatedResources.map((s) => (
                          <a
                            key={s.title}
                            href="#"
                            title={s.title}
                            className="px-3 py-2 rounded-lg text-sm text-page-fg-muted hover:text-page-fg hover:bg-page-accent-soft transition-colors"
                            onClick={(e) => {
                              e.preventDefault()
                              closeMobile()
                              navigate(DEDICATED_RESOURCES_ROUTES[s.title] || "/dedicated-resources")
                            }}
                          >
                            {s.title}
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
                    if (link.label === "Home") navigate("/")
                    else if (link.label === "Contact Us") navigate("/contact")
                    else if (link.label === "About Us") navigate("/about")
                    else if (link.label === "Blogs") navigate("/blogs")
                    else if (link.label === "Careers") navigate("/careers")
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
          <Button
            onClick={() => { navigate("/contact"); closeMobile() }}
            className="w-full rounded-xl text-sm font-semibold"
          >
            Schedule a Call
          </Button>
        </div>
      </div>

      <header className="absolute top-0 left-0 right-0 w-full flex justify-center px-3 sm:px-4 pt-3">
        {/* Floating pill container */}
        <nav
          className="w-full max-w-9xl rounded-2xl px-6 mx-20 sm:px-8 py-3 flex items-center justify-between min-w-0 bg-page-nav backdrop-blur-md border border-page-border"
          style={{ boxShadow: "var(--page-nav-shadow)" }}
        >
          {/* ── Logo ── */}
          <a href="/" title="Toadster Home" className="flex items-center gap-2.5 shrink-0 min-w-0">
            <ToadsterLogo width={160} height={40} />
          </a>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center">
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
                          <div className="bg-page-card rounded-2xl shadow-2xl p-5 w-195 border border-page-border">
                            <ul className="grid grid-cols-3 gap-1">
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
                          <div className="bg-page-card rounded-2xl shadow-2xl p-5 w-195 border border-page-border">
                            <ul className="grid grid-cols-3 gap-1">
                              {dedicatedResources.map((s) => {
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
                                      href={DEDICATED_RESOURCES_ROUTES[s.title] || "/dedicated-resources"}
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
                          if (link.label === "Home") navigate("/");
                          else if (link.label === "Contact Us") navigate("/contact");
                          else if (link.label === "About Us") navigate("/about");
                          else if (link.label === "Blogs") navigate("/blogs");
                          else if (link.label === "Dedicated Resources") navigate("/dedicated-resources");
                          else if (link.label === "Careers") navigate("/careers");
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
          <div className="hidden md:flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={() => navigate("/contact")}
              className="rounded-xl px-5 py-5 text-sm font-semibold"
            >
              Schedule a Call
            </Button>
          </div>

          {/* ── Mobile Controls ── */}
          <div className="md:hidden flex items-center gap-1">
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

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
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

const BRAND_GREEN = "#1C3829"

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

export function Navbar({ activeSection }: { activeSection: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const navigate = useNavigate();

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <>
      {/* ── Blur Backdrop ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ── Mobile Right-Side Drawer ── */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <a href="/" onClick={closeMobile} className="flex items-center">
            <img src="/toadster-logo.svg" alt="Toadster" className="h-7 w-auto select-none" />
          </a>
          <button
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-0.5">
          {navLinks.filter((l) => !l.dropdown).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.section
                  ? "text-[#1C3829] font-semibold bg-[#f0f7f3]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
          ))}

          {/* Services Accordion */}
          <div>
            <button
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === "services"
                  ? "text-[#1C3829] font-semibold bg-[#f0f7f3]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
              <div className="mt-1 ml-3 pl-3 border-l-2 border-[#e8f0ec] flex flex-col gap-0.5">
                {services.map((s) => (
                  <a
                    key={s.title}
                    href="#"
                    className="px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
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
        </nav>

        {/* Drawer Footer */}
        <div className="px-5 py-4 border-t border-gray-100 shrink-0">
          <Button
            onClick={() => { navigate("/contact"); closeMobile() }}
            className="w-full rounded-xl text-sm font-semibold text-white"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            Book a Call
          </Button>
        </div>
      </div>

      <header className="absolute top-0 left-0 right-0 w-full flex justify-center px-3 sm:px-4 pt-3">
      {/* Floating pill container */}
      <nav
        className="w-full bg-white/90 max-w-7xl rounded-2xl shadow-xl px-3 sm:px-6 py-3 flex items-center justify-between min-w-0"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
      >
        {/* ── Logo ── */}
        <a href="/" className="flex items-center gap-2.5 shrink-0 min-w-0">
          <img
            src="/toadster-logo.svg"
            alt="Toadster"
            className="h-7 sm:h-8 w-auto max-w-30 select-none"
          />
        </a>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <NavigationMenuItem className="relative" key={link.label}>
                    <NavigationMenuTrigger
                      className={`px-4 py-2 text-sm font-medium bg-transparent rounded-full transition-colors hover:bg-gray-50 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 ${activeSection === 'services' ? 'text-[#1C3829] font-semibold' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      <span className="relative">
                        {link.label}
                        {activeSection === 'services' && (
                          <span className="block mx-auto h-0.5 rounded-full" style={{ backgroundColor: BRAND_GREEN, width: "100%", marginTop: 0 }} />
                        )}
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-auto! top-auto! w-auto!">
                      <div className="bg-white rounded-2xl shadow-2xl p-5 w-195">
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
                                  className="flex items-start gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-gray-50 cursor-pointer"
                                >
                                  <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-[#e8f0ec] text-[#1C3829]">
                                    {Icon && <Icon size={18} />}
                                  </span>
                                  <div>
                                    <div className="text-sm font-semibold text-black leading-tight mb-0.5">{s.title}</div>
                                    <div className="text-xs text-gray-400 leading-snug">{s.description}</div>
                                  </div>
                                </NavigationMenuLink>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink
                      href={link.href}
                      onClick={e => {
                        e.preventDefault();
                        if (link.label === "Home") navigate("/");
                        else if (link.label === "Contact Us") navigate("/contact");
                        else if (link.label === "About Us") navigate("/about");
                        else if (link.label === "Blogs") navigate("/blogs");
                        else if (link.label === "Careers") navigate("/careers");
                      }}
                      className={`
                        relative px-4 py-2 text-sm font-medium rounded-full transition-colors
                        ${activeSection === link.section
                          ? "text-[#1C3829] font-semibold"
                          : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        }
                        ${activeSection === link.section ? "relative" : ""}
                      `}
                    >
                      <span className="relative">
                        {link.label}
                        {activeSection === link.section && (
                          <span
                            className="block mx-auto h-0.5 rounded-full"
                            style={{ backgroundColor: BRAND_GREEN, width: "100%", marginTop: 0 }}
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

        {/* ── CTA Button ── */}
        <div className="hidden md:flex shrink-0">
          <Button
            onClick={() => navigate("/contact")}
            className="rounded-xl px-5 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            Book a Call
          </Button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
    </>
  )
}

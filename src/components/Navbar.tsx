import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
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
  GitBranch,
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

interface ServiceItem {
  icon: keyof typeof SERVICE_ICONS
  title: string
  description: string
  to: string
}

const SERVICE_ICONS = {
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
} as const

const services: ServiceItem[] = [
  { icon: "Brain", title: "Agentic AI", description: "Autonomous AI systems with reasoning capabilities", to: "/services/agentic-ai" },
  { icon: "Code2", title: "AI Development", description: "End-to-end AI development services", to: "/services/ai-development" },
  { icon: "Building", title: "Industry Solutions", description: "Specialized AI for key industry sectors", to: "/services/industry-solutions" },
  { icon: "MessageSquare", title: "Conversational AI", description: "Build natural, contextual conversational experiences", to: "/services/conversational-ai" },
  { icon: "Text", title: "NLP Services", description: "Advanced text analysis and language understanding", to: "/services/nlp-services" },
  { icon: "Bot", title: "AI Chatbots", description: "Intelligent conversational interfaces", to: "/services/ai-chatbots" },
  { icon: "Sparkles", title: "Generative AI", description: "AI systems that create content and solutions", to: "/services/generative-ai" },
  { icon: "Flame", title: "Custom AI Solutions", description: "Tailor-made AI for unique business challenges", to: "/services/custom-ai-solutions" },
  { icon: "Cpu", title: "Advanced AI Tech", description: "Cutting-edge AI capabilities for complex problems", to: "/services/advanced-ai-tech" },
  { icon: "Activity", title: "AI Automation", description: "Automate complex decision-making processes", to: "/services/ai-automation" },
  { icon: "Eye", title: "Computer Vision", description: "Sophisticated image and video analysis", to: "/services/computer-vision" },
  { icon: "UserCog", title: "AI Consultation", description: "Strategic guidance for AI adoption", to: "/services/ai-consultation" },
  { icon: "BarChart", title: "AI Data Analytics", description: "Transform data into actionable insights", to: "/services/ai-data-analytics" },
  { icon: "Database", title: "LLM Development", description: "Leverage large language models for development", to: "/services/llm-development" },
  { icon: "Zap", title: "Machine Learning", description: "Custom ML models for specific business needs", to: "/services/machine-learning" },
  { icon: "Settings2", title: "Intelligent Automation", description: "AI-powered automation for businesses", to: "/services/intelligent-automation" },
  { icon: "Link2", title: "AI Integration", description: "Seamlessly integrate AI into your existing systems", to: "/services/ai-integration" },
  { icon: "GitBranch", title: "Agent2Agent (A2A)", description: "Decentralized secure agent communication protocol", to: "/services/agent-2-agent" },
]

interface PrimaryNavLink {
  label: string
  to: string
  section: string
}

const primaryNavLinks: PrimaryNavLink[] = [
  { label: "Home", to: "/", section: "home" },
  { label: "About Us", to: "/about", section: "about" },
  { label: "Blogs", to: "/blogs", section: "blogs" },
  { label: "Careers", to: "/careers", section: "careers" },
  { label: "Contact Us", to: "/contact", section: "contact" },
]

export function Navbar({ activeSection }: { activeSection: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const navigate = useNavigate()

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <>
      {/* Blur Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile Right-Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <Link to="/" onClick={closeMobile} className="flex items-center" aria-label="Toadster home" title="Toadster Home">
            <img src="/toadster-logo.svg" alt="Toadster" title="Toadster Logo" width={120} height={28} className="h-7 w-auto select-none" />
          </Link>
          <button
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-0.5" aria-label="Mobile primary">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              title={link.label}
              onClick={closeMobile}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.section
                  ? "text-[#1C3829] font-semibold bg-[#f0f7f3]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div>
            <button
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === "services"
                  ? "text-[#1C3829] font-semibold bg-[#f0f7f3]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setMobileServicesOpen((p) => !p)}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-panel"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div
                id="mobile-services-panel"
                className="mt-1 ml-3 pl-3 border-l-2 border-[#e8f0ec] flex flex-col gap-0.5"
              >
                {services.map((s) => (
                  <Link
                    key={s.title}
                    to={s.to}
                    title={s.title}
                    onClick={closeMobile}
                    className="px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

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
        <nav
          className="w-full bg-white/90 max-w-7xl rounded-2xl shadow-xl px-3 sm:px-6 py-3 flex items-center justify-between min-w-0"
          style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
          aria-label="Primary"
        >
          <Link to="/" className="flex items-center gap-2.5 shrink-0 min-w-0" aria-label="Toadster home" title="Toadster Home">
            <img
              src="/toadster-logo.svg"
              alt="Toadster"
              title="Toadster Logo"
              width={120}
              height={32}
              className="h-7 sm:h-8 w-auto max-w-30 select-none"
            />
          </Link>

          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {primaryNavLinks.slice(0, 2).map((link) => (
                  <DesktopNavItem key={link.label} link={link} activeSection={activeSection} />
                ))}

                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger
                    className={`px-4 py-2 text-sm font-medium bg-transparent rounded-full transition-colors hover:bg-gray-50 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 ${
                      activeSection === "services" ? "text-[#1C3829] font-semibold" : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    <span className="relative">
                      Services
                      {activeSection === "services" && (
                        <span
                          className="block mx-auto h-0.5 rounded-full"
                          style={{ backgroundColor: BRAND_GREEN, width: "100%", marginTop: 0 }}
                        />
                      )}
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-auto! top-auto! w-auto!">
                    <div className="bg-white rounded-2xl shadow-2xl p-5 w-195">
                      <ul className="grid grid-cols-3 gap-1">
                        {services.map((s) => {
                          const Icon = SERVICE_ICONS[s.icon]
                          return (
                            <li key={s.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={s.to}
                                  title={s.title}
                                  className="flex items-start gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-gray-50 cursor-pointer"
                                >
                                  <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-[#e8f0ec] text-[#1C3829]">
                                    {Icon && <Icon size={18} />}
                                  </span>
                                  <div>
                                    <div className="text-sm font-semibold text-black leading-tight mb-0.5">{s.title}</div>
                                    <div className="text-xs text-gray-400 leading-snug">{s.description}</div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {primaryNavLinks.slice(2).map((link) => (
                  <DesktopNavItem key={link.label} link={link} activeSection={activeSection} />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex shrink-0">
            <Button asChild className="rounded-xl px-5 py-2 text-sm font-semibold text-white py-5" style={{ backgroundColor: BRAND_GREEN }}>
              <Link to="/contact" title="Book a Call">Book a Call</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>
    </>
  )
}

interface DesktopNavItemProps {
  link: PrimaryNavLink
  activeSection: string
}

function DesktopNavItem({ link, activeSection }: DesktopNavItemProps) {
  const isActive = activeSection === link.section
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          to={link.to}
          title={link.label}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            isActive ? "text-[#1C3829] font-semibold" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          <span className="relative">
            {link.label}
            {isActive && (
              <span
                className="block mx-auto h-0.5 rounded-full"
                style={{ backgroundColor: BRAND_GREEN, width: "100%", marginTop: 0 }}
              />
            )}
          </span>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

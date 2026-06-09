import { lazy, type ComponentType, type LazyExoticComponent } from "react"

const HomePage = lazy(() => import("@/pages/homepage"))
const AboutPage = lazy(() => import("@/pages/about"))
const Careers = lazy(() => import("@/pages/careers"))
const Blogs = lazy(() => import("@/pages/blogs"))
const BlogDetail = lazy(() => import("@/pages/blogs/BlogDetail"))
const Contact = lazy(() => import("@/pages/contact"))
const DedicatedResourceDetail = lazy(() => import("@/pages/dedicated-resources/DedicatedResourceDetail"))

const AgenticAIPage = lazy(() => import("@/pages/services/agentic-ai"))
const GenerativeAIPage = lazy(() => import("@/pages/services/generative-ai"))
const NLPServicesPage = lazy(() => import("@/pages/services/nlp-services"))
const AIDevelopmentPage = lazy(() => import("@/pages/services/ai-development"))
const MachineLearningPage = lazy(() => import("@/pages/services/machine-learning"))
const CustomAISolutionsPage = lazy(() => import("@/pages/services/custom-ai-solutions"))
const AIIntegrationPage = lazy(() => import("@/pages/services/ai-integration"))
const AIChatbotsPage = lazy(() => import("@/pages/services/ai-chatbots"))
const LLMDevelopmentPage = lazy(() => import("@/pages/services/llm-development"))
const ComputerVisionPage = lazy(() => import("@/pages/services/computer-vision"))
const AIDataAnalyticsPage = lazy(() => import("@/pages/services/ai-data-analytics"))
const IndustrySolutionsPage = lazy(() => import("@/pages/services/industry-solutions"))
const AIConsultationPage = lazy(() => import("@/pages/services/ai-consultation"))
const Agent2AgentPage = lazy(() => import("@/pages/services/agent-2-agent"))
const AdvancedAITechPage = lazy(() => import("@/pages/services/advanced-ai-tech"))
const ConversationalAIPage = lazy(() => import("@/pages/services/conversational-ai"))
const AIAutomationPage = lazy(() => import("@/pages/services/ai-automation"))
const IntelligentAutomationPage = lazy(() => import("@/pages/services/intelligent-automation"))

export interface AppRoute {
  path: string
  component: LazyExoticComponent<ComponentType>
  section: string
}

export const APP_ROUTES: AppRoute[] = [
  { path: "/", component: HomePage, section: "home" },
  { path: "/about", component: AboutPage, section: "about" },
  { path: "/blogs", component: Blogs, section: "blogs" },
  { path: "/blogs/:slug", component: BlogDetail, section: "blogs" },
  { path: "/careers", component: Careers, section: "careers" },
  { path: "/contact", component: Contact, section: "contact" },
  { path: "/dedicated-resources/:slug", component: DedicatedResourceDetail, section: "dedicated-resources" },
  { path: "/services/agentic-ai", component: AgenticAIPage, section: "services" },
  { path: "/services/generative-ai", component: GenerativeAIPage, section: "services" },
  { path: "/services/nlp-services", component: NLPServicesPage, section: "services" },
  { path: "/services/ai-development", component: AIDevelopmentPage, section: "services" },
  { path: "/services/machine-learning", component: MachineLearningPage, section: "services" },
  { path: "/services/custom-ai-solutions", component: CustomAISolutionsPage, section: "services" },
  { path: "/services/ai-integration", component: AIIntegrationPage, section: "services" },
  { path: "/services/ai-chatbots", component: AIChatbotsPage, section: "services" },
  { path: "/services/llm-development", component: LLMDevelopmentPage, section: "services" },
  { path: "/services/computer-vision", component: ComputerVisionPage, section: "services" },
  { path: "/services/ai-data-analytics", component: AIDataAnalyticsPage, section: "services" },
  { path: "/services/industry-solutions", component: IndustrySolutionsPage, section: "services" },
  { path: "/services/ai-consultation", component: AIConsultationPage, section: "services" },
  { path: "/services/agent-2-agent", component: Agent2AgentPage, section: "services" },
  { path: "/services/advanced-ai-tech", component: AdvancedAITechPage, section: "services" },
  { path: "/services/conversational-ai", component: ConversationalAIPage, section: "services" },
  { path: "/services/ai-automation", component: AIAutomationPage, section: "services" },
  { path: "/services/intelligent-automation", component: IntelligentAutomationPage, section: "services" },
]

export function resolveActiveSection(pathname: string): string {
  if (pathname.startsWith("/blogs")) return "blogs"
  if (pathname.startsWith("/services")) return "services"
  if (pathname.startsWith("/dedicated-resources")) return "dedicated-resources"

  const exact = APP_ROUTES.find((r) => r.path === pathname)
  return exact?.section ?? "home"
}

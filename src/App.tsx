
import { Navbar } from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Contact from "./pages/contact"
import HomePage from "./pages/homepage"
import AboutPage from "./pages/about"
import Careers from "./pages/careers"
import Blogs from "./pages/blogs"
import BlogDetail from "./pages/blogs/BlogDetail"

import AgenticAIPage from "./pages/services/agentic-ai"
import GenerativeAIPage from "./pages/services/generative-ai"
import NLPServicesPage from "./pages/services/nlp-services"
import AIDevelopmentPage from "./pages/services/ai-development"
import MachineLearningPage from "./pages/services/machine-learning"
import CustomAISolutionsPage from "./pages/services/custom-ai-solutions"
import AIIntegrationPage from "./pages/services/ai-integration"
import AIChatbotsPage from "./pages/services/ai-chatbots"
import LLMDevelopmentPage from "./pages/services/llm-development"
import ComputerVisionPage from "./pages/services/computer-vision"
import AIDataAnalyticsPage from "./pages/services/ai-data-analytics"
import IndustrySolutionsPage from "./pages/services/industry-solutions"
import AIConsultationPage from "./pages/services/ai-consultation"
import Agent2AgentPage from "./pages/services/agent-2-agent"
import AdvancedAITechPage from "./pages/services/advanced-ai-tech"
import ConversationalAIPage from "./pages/services/conversational-ai"
import AIAutomationPage from "./pages/services/ai-automation"
import IntelligentAutomationPage from "./pages/services/intelligent-automation"
import Footer from "./components/Footer"

function AppInner() {
  const location = useLocation()
  const sectionMap: Record<string, string> = {
    "/": "home",
    "/contact": "contact",
    "/case-studies": "case-studies",
    "/about": "about",
    "/services": "services",
    "/blogs": "blogs",
    "/careers": "careers",
  }
  
  // Check if the current path is a blog detail page
  const isBlogDetailPage = location.pathname.startsWith('/blogs/') && location.pathname !== '/blogs'
  const isServicePage = location.pathname.startsWith('/services')
  const activeSection = isBlogDetailPage ? "blogs" : isServicePage ? "services" : (sectionMap[location.pathname] ?? "home")

  return (
    <div className="">
      <div className="sticky top-6 z-30 w-full">
        <Navbar activeSection={activeSection} />
      </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/agentic-ai" element={<AgenticAIPage />} />
          <Route path="/services/generative-ai" element={<GenerativeAIPage />} />
          <Route path="/services/nlp-services" element={<NLPServicesPage />} />
          <Route path="/services/ai-development" element={<AIDevelopmentPage />} />
          <Route path="/services/machine-learning" element={<MachineLearningPage />} />
          <Route path="/services/custom-ai-solutions" element={<CustomAISolutionsPage />} />
          <Route path="/services/ai-integration" element={<AIIntegrationPage />} />
          <Route path="/services/ai-chatbots" element={<AIChatbotsPage />} />
          <Route path="/services/llm-development" element={<LLMDevelopmentPage />} />
          <Route path="/services/computer-vision" element={<ComputerVisionPage />} />
          <Route path="/services/ai-data-analytics" element={<AIDataAnalyticsPage />} />
          <Route path="/services/industry-solutions" element={<IndustrySolutionsPage />} />
          <Route path="/services/ai-consultation" element={<AIConsultationPage />} />
          <Route path="/services/agent-2-agent" element={<Agent2AgentPage />} />
          <Route path="/services/advanced-ai-tech" element={<AdvancedAITechPage />} />
          <Route path="/services/conversational-ai" element={<ConversationalAIPage />} />
          <Route path="/services/ai-automation" element={<AIAutomationPage />} />
          <Route path="/services/intelligent-automation" element={<IntelligentAutomationPage />} />
        </Routes>
        <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  )
}

export default App
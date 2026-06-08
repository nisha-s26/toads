import { useState, useEffect } from "react"
import { X } from "lucide-react"
import {
  Brain,
  Cpu,
  Sparkles,
  BarChart2,
  Database,
  Bot,
  MessageSquare,
  Eye,
} from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

interface Service {
  icon: React.ReactNode
  title: string
  shortDesc: string
  description: string
  useCases: string[]
  technologies: string[]
  exampleProjects: string[]
  to: string
}

const services: Service[] = [
  {
    icon: <Brain size={28} strokeWidth={1.5} />,
    title: "Artificial Intelligence Solutions",
    shortDesc: "Enterprise-grade AI systems tailored by an AI development company.",
    description:
      "We build custom AI solutions that automate decision-making, optimize operations, and unlock new revenue streams. From natural language processing to recommendation engines, our AI systems are designed for production scale.",
    useCases: [
      "Intelligent document processing",
      "Fraud detection",
      "Predictive maintenance",
      "Supply chain optimization",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    exampleProjects: [
      "AI-powered claims processing for insurance",
      "Smart inventory management system",
    ],
    to: "/services/ai-development",
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "Machine Learning Models",
    shortDesc: "Production-ready ML models for pattern recognition and prediction.",
    description:
      "We develop and deploy machine learning models that solve real business problems — from classification and regression to deep learning and time-series forecasting, all optimized for production environments.",
    useCases: [
      "Customer churn prediction",
      "Demand forecasting",
      "Anomaly detection",
      "Recommendation engines",
    ],
    technologies: ["Scikit-learn", "XGBoost", "TensorFlow", "MLflow"],
    exampleProjects: [
      "Churn prediction for a SaaS platform",
      "Demand forecasting for retail",
    ],
    to: "/services/machine-learning",
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    title: "Generative AI Applications",
    shortDesc: "Build creative AI systems that generate content and code.",
    description:
      "Harness the power of generative AI to create text, images, code, and more. We help you integrate large language models and diffusion models into products that delight users and drive efficiency.",
    useCases: [
      "AI content generation",
      "Code generation assistants",
      "Image synthesis",
      "Automated reporting",
    ],
    technologies: ["GPT-4", "Claude", "Stable Diffusion", "LangChain"],
    exampleProjects: [
      "AI writing assistant for marketing teams",
      "Automated code review bot",
    ],
    to: "/services/generative-ai",
  },
  {
    icon: <BarChart2 size={28} strokeWidth={1.5} />,
    title: "Data Science & Analytics",
    shortDesc: "Turn raw data into strategic business intelligence.",
    description:
      "We turn complex datasets into clear, actionable insights. Our data science team designs dashboards, builds analytical pipelines, and uncovers patterns that drive smarter business decisions.",
    useCases: [
      "Business KPI dashboards",
      "Customer segmentation",
      "Sales funnel analysis",
      "Operational reporting",
    ],
    technologies: ["Python", "Tableau", "Power BI", "Spark"],
    exampleProjects: [
      "Real-time analytics dashboard for e-commerce",
      "Customer segmentation for fintech",
    ],
    to: "/services/ai-data-analytics",
  },
  {
    icon: <Database size={28} strokeWidth={1.5} />,
    title: "Big Data Processing",
    shortDesc: "Process and analyze massive datasets at scale.",
    description:
      "We architect and implement big data solutions that can handle billions of records with ease. From ingestion pipelines to distributed computing, we ensure your data infrastructure is robust and scalable.",
    useCases: [
      "Real-time event streaming",
      "Log aggregation & analysis",
      "Data lake architecture",
      "ETL pipelines",
    ],
    technologies: ["Apache Spark", "Kafka", "Hadoop", "Flink"],
    exampleProjects: [
      "Real-time log processing for cybersecurity",
      "Data lake migration for enterprise",
    ],
    to: "/services/ai-data-analytics",
  },
  {
    icon: <Bot size={28} strokeWidth={1.5} />,
    title: "Custom AI Bots",
    shortDesc: "Intelligent conversational agents for any platform.",
    description:
      "We build intelligent bots that go beyond scripted responses. Our AI bots understand context, remember conversations, and integrate with your existing tools to automate workflows and support customers 24/7.",
    useCases: [
      "Customer support automation",
      "Internal helpdesk bots",
      "Lead qualification bots",
      "Onboarding assistants",
    ],
    technologies: ["Rasa", "Dialogflow", "OpenAI", "Slack API"],
    exampleProjects: [
      "HR onboarding bot for enterprise",
      "24/7 customer support bot for e-commerce",
    ],
    to: "/services/ai-chatbots",
  },
  {
    icon: <MessageSquare size={28} strokeWidth={1.5} />,
    title: "Conversational AI",
    shortDesc: "Natural language interfaces that understand intent.",
    description:
      "We design and deploy conversational AI systems that engage users naturally. Whether it's voice assistants, chat interfaces, or multi-modal AI, we build experiences that feel human and work flawlessly.",
    useCases: [
      "Voice-enabled applications",
      "Multi-turn dialog systems",
      "Sentiment analysis",
      "FAQ automation",
    ],
    technologies: ["Whisper", "GPT-4", "Twilio", "Azure Cognitive Services"],
    exampleProjects: [
      "Voice assistant for healthcare appointments",
      "Conversational IVR for banking",
    ],
    to: "/services/conversational-ai",
  },
  {
    icon: <Eye size={28} strokeWidth={1.5} />,
    title: "Computer Vision",
    shortDesc: "Visual intelligence for images and video analysis.",
    description:
      "We build computer vision systems that see and understand the world. From object detection and facial recognition to video surveillance and quality control, our solutions bring sight to your applications.",
    useCases: [
      "Defect detection in manufacturing",
      "Facial recognition",
      "Object tracking",
      "Medical image analysis",
    ],
    technologies: ["OpenCV", "YOLO", "PyTorch", "TensorFlow"],
    exampleProjects: [
      "Automated defect detection for manufacturing",
      "Real-time crowd monitoring system",
    ],
    to: "/services/computer-vision",
  },
]

export default function AiCap() {
  const [selected, setSelected] = useState<Service | null>(null)

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selected])

  return (
    <section className="w-full bg-page-bg px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-lg tracking-[0.35em] section-eyebrow font-bold">
          AI CAPABILITIES
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          <span className="text-page-fg">Intelligent </span>
          <span className="text-toadster-green">Solutions</span>
        </h2>
        <p className="text-page-fg-muted text-lg max-w-xl mx-auto">
          Comprehensive AI and ML capabilities to transform every aspect of your business.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-9xl mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <motion.button
            key={service.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1
            }}
            viewport={{ once: true }}
            onClick={() => setSelected(service)}
            className="feature-card group p-6 text-left"
          >
            <span className="feature-icon w-11 h-11 mb-4">
              {service.icon}
            </span>
            <h3 className="text-base font-bold text-page-fg mb-2 leading-snug transition-colors group-hover:text-toadster-green">
              {service.title}
            </h3>
            <p className="text-page-fg-muted text-sm leading-relaxed">{service.shortDesc}</p>
          </motion.button>
        ))}
      </div>

      {/* Bottom CTA Row */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/services/agentic-ai"
          title="Explore agentic AI services"
          className="inline-flex items-center gap-2 rounded-xl bg-[#1C3829] px-7 py-3 text-white font-semibold transition-colors hover:bg-green-800"
        >
          Explore Agentic AI
          <span>→</span>
        </Link>
        <Link
          to="/blogs"
          title="Read AI insights and case studies"
          className="inline-flex items-center gap-2 rounded-xl border border-page-border-strong px-7 py-3 text-page-fg font-semibold transition-colors hover:bg-page-fg/5"
        >
          Read AI Insights
        </Link>
      </div>

      {/* Modal Overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.35)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="theme-card rounded-2xl shadow-2xl w-full max-w-xl p-8 relative max-h-[90vh] overflow-y-auto border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-page-accent-soft hover:bg-page-bg-deep text-page-fg-muted hover:text-page-fg transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-5">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-page-accent-soft text-brand-green shrink-0">
                {selected.icon}
              </span>
              <h3 className="text-xl font-bold text-page-fg leading-tight">{selected.title}</h3>
            </div>

            {/* Description */}
            <p className="text-page-fg-muted text-sm leading-relaxed mb-6">{selected.description}</p>

            {/* Use Cases */}
            <div className="mb-5">
              <h4 className="text-sm font-bold text-page-fg mb-2">Use Cases</h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                {selected.useCases.map((uc) => (
                  <li key={uc} className="flex items-center gap-1.5 text-sm text-page-fg-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-toadster-green shrink-0" />
                    {uc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="mb-5">
              <h4 className="text-sm font-bold text-page-fg mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selected.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-page-border text-xs text-page-fg-muted font-medium bg-page-accent-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Example Projects */}
            <div className="mb-7">
              <h4 className="text-sm font-bold text-page-fg mb-2">Example Projects</h4>
              <ul className="flex flex-col gap-1.5">
                {selected.exampleProjects.map((proj) => (
                  <li key={proj} className="flex items-start gap-2 text-sm text-page-fg-muted">
                    <span className="mt-0.5 text-page-fg-muted">→</span>
                    {proj}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                title="Talk to our AI experts"
                onClick={() => setSelected(null)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
              >
                Talk to Experts
                <span>→</span>
              </Link>
              <Link
                to={selected.to}
                title={`Explore ${selected.title}`}
                onClick={() => setSelected(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-page-border-strong text-page-fg hover:bg-page-accent-soft transition-colors"
              >
                Explore Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { ArrowRight, X } from "lucide-react"
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
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Service {
  icon: LucideIcon
  title: string
  shortDesc: string
  description: string
  useCases: string[]
  technologies: string[]
  exampleProjects: string[]
  to: string
  tag: string
}

const CARD_STYLES = {
  accent: "text-toadster-green",
  iconGradient: "from-[#006600] to-[#1C3829] dark:from-[#2ECC71] dark:to-[#006600]",
  iconText: "text-white dark:text-black",
  dot: "bg-toadster-green",
  badge: "bg-toadster-green/10 text-toadster-green border-toadster-green/25",
  capabilityCard:
    "capability-card-surface rounded-2xl p-8 text-left transition-all duration-300 hover:-translate-y-1",
  capabilityTitle: "relative z-10 text-lg font-bold leading-snug text-slate-900",
  capabilityBody: "relative z-10 mt-4 flex-1 text-sm leading-relaxed text-slate-600",
  capabilityCta:
    "relative z-10 mt-8 inline-flex items-center gap-1 font-mono text-sm text-slate-800 transition-colors group-hover:text-toadster-green",
  focusRing:
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toadster-green/35 dark:focus-visible:ring-slate-400/50",
}

const services: Service[] = [
  {
    icon: Brain,
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
    tag: "01",
  },
  {
    icon: Cpu,
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
    tag: "02",
  },
  {
    icon: Sparkles,
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
    tag: "03",
  },
  {
    icon: BarChart2,
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
    tag: "04",
  },
  {
    icon: Database,
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
    tag: "05",
  },
  {
    icon: Bot,
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
    tag: "06",
  },
  {
    icon: MessageSquare,
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
    tag: "07",
  },
  {
    icon: Eye,
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
    tag: "08",
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
    <section className="w-full px-4 mt-5">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-lg tracking-[0.35em] section-eyebrow font-bold">
          AI CAPABILITIES
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          <span className="text-page-fg">Intelligent </span>
          <span className="text-toadster-green">Solutions</span>
        </h2>
        <p className="text-page-fg-muted text-xl max-w-xl mx-auto">
          Comprehensive AI and ML capabilities to transform every aspect of your business.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto grid max-w-9xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {services.map((service, index) => (
          <motion.button
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.07,
            }}
            viewport={{ once: true }}
            onClick={() => setSelected(service)}
            className={cn(
              "group flex h-full min-h-[260px] flex-col",
              CARD_STYLES.capabilityCard,
              CARD_STYLES.focusRing,
            )}
          >
            <h3 className={CARD_STYLES.capabilityTitle}>{service.title}</h3>
            <p className={CARD_STYLES.capabilityBody}>{service.shortDesc}</p>
            <span className={CARD_STYLES.capabilityCta}>
              Learn More <span aria-hidden="true">→</span>
            </span>
          </motion.button>
        ))}
      </div>

      {/* Bottom CTA Row */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/services/agentic-ai"
          title="Explore agentic AI services"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary-hover hover:-translate-y-0.5"
        >
          Explore More 
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        {/* <Link
          href="/blogs"
          title="Read AI insights and case studies"
          className="inline-flex items-center gap-2 rounded-xl border border-page-border-strong px-7 py-3 text-page-fg font-semibold transition-colors hover:bg-page-fg/5"
        >
          Read AI Insights
        </Link> */}
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
              <span
                className={cn(
                  "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br shadow-md",
                  CARD_STYLES.iconGradient,
                  CARD_STYLES.iconText,
                )}
              >
                <selected.icon size={26} strokeWidth={2} />
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
                    <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", CARD_STYLES.dot)} />
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
                    className={cn("rounded-full border px-3 py-1 text-xs font-medium", CARD_STYLES.badge)}
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
                href="/contact"
                title="Talk to our AI experts"
                onClick={() => setSelected(null)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
              >
                Talk to Experts
                <span>→</span>
              </Link>
              <Link
                href={selected.to}
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

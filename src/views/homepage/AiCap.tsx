"use client"

import { ArrowRight} from "lucide-react"
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
import { ScrollReveal } from "@/components/ScrollReveal"

interface Service {
  icon: LucideIcon
  title: string
  shortDesc: string
  ctaAnchor: string
  description: string
  useCases: string[]
  technologies: string[]
  exampleProjects: string[]
  to: string
  tag: string
}

const CARD_STYLES = {
  accent: "text-toadster-green",
  iconGradient: "from-toadster-green to-toadster-green-deep",
  iconText: "text-white",
  dot: "bg-toadster-green",
  badge: "bg-toadster-green/10 text-toadster-green border-toadster-green/25",
  capabilityCard:
    "capability-card-surface rounded-2xl p-8 text-left transition-all duration-300 hover:-translate-y-1",
  capabilityTitle: "relative z-10 text-xl font-bold leading-snug text-slate-900",
  capabilityBody: "relative z-10 flex-1 text-sm leading-relaxed text-slate-600",
  capabilityCta:
    "relative z-10 mt-8 inline-flex items-center gap-1 text-sm font-bold text-black",
  focusRing:
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toadster-green/35 dark:focus-visible:ring-slate-400/50",
}

const services: Service[] = [
  {
    icon: Brain,
    title: "Artificial Intelligence Solutions",
    shortDesc:
      "Purpose-built AI systems for enterprises - from autonomous agents to intelligent automation. Delivered by a custom AI development company with hands-on engineering depth.",
    ctaAnchor: "Explore AI Solutions",
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
    shortDesc:
      "We build and deploy production-grade machine learning models - covering supervised learning, anomaly detection, recommendation engines, and predictive analytics for real business outcomes.",
    ctaAnchor: "View ML Services",
    description:
      "We develop and deploy machine learning models that solve real business problems - from classification and regression to deep learning and time-series forecasting, all optimized for production environments.",
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
    shortDesc:
      "Design and launch generative AI applications powered by LLMs - from content generation tools and AI copilots to code automation platforms. We handle architecture, fine-tuning, and deployment.",
    ctaAnchor: "Explore GenAI",
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
    shortDesc:
      "Transform unstructured data into actionable intelligence. Our data science consulting team builds dashboards, predictive models, and analytics pipelines that inform faster, smarter business decisions.",
    ctaAnchor: "See Data Services",
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
    shortDesc:
      "Ingest, process, and analyse datasets at petabyte scale. We build robust big data pipelines using cloud-native architectures - enabling real-time insights, data lakes, and high-throughput processing for data-heavy industries.",
    ctaAnchor: "Learn More",
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
    shortDesc:
      "Deploy intelligent AI chatbots built for your specific workflows - customer support, internal knowledge bases, sales qualification, or operations. We develop custom AI chatbots for web, mobile, WhatsApp, Slack, and more.",
    ctaAnchor: "Build Your AI Bot",
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
    shortDesc:
      "Build voice and text interfaces that actually understand what users mean. Our conversational AI development services cover NLU, dialogue management, and multi-turn reasoning - creating experiences that feel human, not robotic.",
    ctaAnchor: "Explore Conversational AI",
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
    shortDesc:
      "Embed real-world visual intelligence into your products. From object detection and facial recognition to medical imaging and quality inspection - our computer vision development services deliver models trained for accuracy in production environments.",
    ctaAnchor: "See Computer Vision",
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
  // const [selected, setSelected] = useState<Service | null>(null)

  // // Disable body scroll when modal is open
  // useEffect(() => {
  //   if (selected) {
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = ""
  //   }
  //   return () => {
  //     document.body.style.overflow = ""
  //   }
  // }, [selected])

  return (
    <section className="homepage-snap-section flex w-full flex-col justify-center px-4 mt-10">
      {/* Header */}
      <ScrollReveal className="mb-12 text-center">
        {/* <p className="section-eyebrow-heading text-2xl font-normal tracking-[0.35em]">
          OUR <span className="font-extrabold">AI CAPABILITIES</span>
        </p> */}
        <h2 className="mb-4 text-5xl font-extrabold md:text-6xl mt-4">
          <span className="text-page-fg">AI  </span>
          <span className="text-toadster-green">Capabilities</span>
        </h2>
        <p className="mx-auto max-w-7xl text-xl text-page-fg-muted">
          From AI strategy to deployment - comprehensive machine learning, generative AI, and data
          engineering capabilities that turn your business vision into production-grade intelligent software.
        </p>
      </ScrollReveal>

      {/* Cards Grid */}
      <div className="mx-auto grid w-full max-w-9xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5 lg:px-8 [grid-auto-rows:1fr]">
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
            // onClick={() => setSelected(service)}
            className={cn(
              "group flex h-full min-h-[220px] w-full flex-col sm:min-h-[250px] lg:min-h-[280px] xl:min-h-[300px]",
              CARD_STYLES.capabilityCard,
              CARD_STYLES.focusRing,
            )}
          >
            <div className="relative z-10 mb-4 flex min-h-11 items-center justify-between gap-3">
              <h3 className={cn(CARD_STYLES.capabilityTitle, "min-w-0 flex-1 pr-1")}>
                {service.title}
              </h3>
              <span
                className={cn(
                  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green shadow-md",
                  CARD_STYLES.iconText,
                )}
              >
                <service.icon size={22} strokeWidth={2} />
              </span>
            </div>
            <p className={CARD_STYLES.capabilityBody}>{service.shortDesc}</p>
            <span className={CARD_STYLES.capabilityCta}>
              {service.ctaAnchor} <span aria-hidden="true">→</span>
            </span>
          </motion.button>
        ))}
      </div>

      {/* Bottom CTA Row */}
      <ScrollReveal className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-center gap-4 sm:flex-row" delay={0.1}>
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
      </ScrollReveal>

      {/* Modal Overlay */}
      {/* {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.35)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="theme-card rounded-2xl shadow-2xl w-full max-w-xl p-8 relative max-h-[90vh] overflow-y-auto border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-page-accent-soft hover:bg-page-bg-deep text-page-fg-muted hover:text-page-fg transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

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

            <p className="text-page-fg-muted text-sm leading-relaxed mb-6">{selected.description}</p>

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
      )} */}
    </section>
  )
}

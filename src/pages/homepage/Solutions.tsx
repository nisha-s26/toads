import {
  Brain,
  Code2,
  Layers,
  Database,
  Cloud,
  Sparkles,
  Bot,
  LayoutGrid,
  ArrowUpRight
} from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const solutions = [
  {
    icon: Brain,
    title: "AI / ML Solutions",
    desc: "Custom machine learning models, NLP systems, and intelligent automation for enterprise.",
    to: "/services/machine-learning"
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Modern web applications built with React, Next.js, Node.js, and scalable cloud infrastructure.",
    to: "/services/ai-development"
  },
  {
    icon: Layers,
    title: "MERN Development",
    desc: "MongoDB, Express, React, Node.js — complete JavaScript ecosystem for rapid development.",
    to: "/services/ai-development"
  },
  {
    icon: LayoutGrid,
    title: "CRM Systems",
    desc: "Custom CRM solutions that streamline customer relationships and boost sales efficiency.",
    to: "/services/custom-ai-solutions"
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Large-scale data pipelines, ETL processes, and analytics platforms built for real-time insights.",
    to: "/services/ai-data-analytics"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Cloud-native architecture, CI/CD pipelines, and infrastructure automation across AWS, GCP, and Azure.",
    to: "/services/ai-integration"
  },
  {
    icon: Sparkles,
    title: "SaaS Development",
    desc: "Multi-tenant SaaS platforms with subscription management, analytics, and scalable architecture.",
    to: "/services/custom-ai-solutions"
  },
  {
    icon: Bot,
    title: "Automation Systems",
    desc: "Intelligent process automation that reduces costs and eliminates repetitive manual workflows.",
    to: "/services/intelligent-automation"
  }
]

export default function Solutions() {
  return (
    <section className="pt-10 pb-20 bg-page-bg">

      <div className="max-w-9xl mx-20 px-4">

        {/* Section Header */}

        <div className="text-center mb-16">
          <p className="text-lg tracking-[0.35em] section-eyebrow font-bold">
            SOLUTIONS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-page-fg mt-3">
            What We <span className="text-toadster-green">Deliver</span>
          </h2>

          <p className="mt-4 text-page-fg-subtle text-lg">
            Comprehensive technology solutions from concept to scale.
          </p>
        </div>

        {/* Cards Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {solutions.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
              >
                <Link
                  to={item.to}
                  title={item.title}
                  className="feature-card group block p-6 h-full"
                >

                  {/* Icon */}

                  <div className="feature-icon w-11 h-11 mb-4">
                    <Icon size={20} />
                  </div>

                  {/* Title */}

                  <h3 className="font-semibold text-page-fg text-base mb-2 transition-colors group-hover:text-toadster-green">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="text-page-fg-muted text-sm leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 -translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-toadster-green rounded-full flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-4 h-4 text-toadster-green-foreground" />
                    </div>
                  </div>
                </Link>

              </motion.div>
            )
          })}

        </div>

        {/* Explore all services CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services/ai-development"
            title="Explore all AI development services"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1C3829] px-7 py-3 text-white font-semibold transition-colors hover:bg-green-800"
          >
            Explore All Services
            <ArrowUpRight size={18} />
          </Link>
          <Link
            to="/contact"
            title="Talk to our team about your project"
            className="inline-flex items-center gap-2 rounded-xl border border-page-border-strong px-7 py-3 text-page-fg font-semibold transition-colors hover:bg-page-fg/5"
          >
            Talk to Our Team
          </Link>
        </div>

      </div>
    </section>
  )
}
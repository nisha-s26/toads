import {
  Brain,
  Code2,
  Layers,
  Database,
  Cloud,
  Sparkles,
  Bot,
  LayoutGrid
} from "lucide-react"
import { motion } from "framer-motion"

const solutions = [
  {
    icon: Brain,
    title: "AI / ML Solutions",
    desc: "Custom machine learning models, NLP systems, and intelligent automation for enterprise."
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Modern web applications built with React, Next.js, Node.js, and scalable cloud infrastructure."
  },
  {
    icon: Layers,
    title: "MERN Development",
    desc: "MongoDB, Express, React, Node.js — complete JavaScript ecosystem for rapid development."
  },
  {
    icon: LayoutGrid,
    title: "CRM Systems",
    desc: "Custom CRM solutions that streamline customer relationships and boost sales efficiency."
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Large-scale data pipelines, ETL processes, and analytics platforms built for real-time insights."
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Cloud-native architecture, CI/CD pipelines, and infrastructure automation across AWS, GCP, and Azure."
  },
  {
    icon: Sparkles,
    title: "SaaS Development",
    desc: "Multi-tenant SaaS platforms with subscription management, analytics, and scalable architecture."
  },
  {
    icon: Bot,
    title: "Automation Systems",
    desc: "Intelligent process automation that reduces costs and eliminates repetitive manual workflows."
  }
]

export default function Solutions() {
  return (
    <section className="py-20 bg-[#050d18]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="text-center mb-16">
          <p className="text-base tracking-widest text-toadster-green font-medium">
            SOLUTIONS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            What We <span className="text-toadster-green">Deliver</span>
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
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
                className="group bg-[#0d1b2e] border border-white/5 rounded-2xl p-6 hover:border-green-800/50 transition-colors"
              >

                {/* Icon */}

                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                  <Icon size={20} />
                </div>

                {/* Title */}

                <h3 className="font-semibold text-white text-base mb-2">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.desc}
                </p>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-toadster-green rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
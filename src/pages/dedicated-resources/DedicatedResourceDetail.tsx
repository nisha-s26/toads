import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpRight, Code, Sparkles, Cpu, Layers } from "lucide-react"

interface ResourceInfo {
  title: string
  description: string
  bullets: string[]
  techStack: string[]
  highlights: { title: string; desc: string }[]
}

const RESOURCES_MAP: Record<string, ResourceInfo> = {
  "ai-ml-engineers": {
    title: "AI / ML Engineers",
    description: "Build top-notch machine learning models, custom neural networks, and AI training pipelines for your business enterprise.",
    bullets: [
      "Vetted and top AI / ML engineers",
      "Exercise complete control over the team",
      "Dedicated communication channels"
    ],
    techStack: ["PyTorch", "TensorFlow", "Scikit-Learn", "HuggingFace", "CUDA", "MLflow", "Python"],
    highlights: [
      { title: "Model Training", desc: "Custom training for proprietary datasets with optimized hyperparameters." },
      { title: "Fine-Tuning", desc: "Adapting foundational models to specific enterprise domains and styles." },
      { title: "MLOps Pipelines", desc: "Automated pipelines from data preparation to deployment." }
    ]
  },
  "llm-application-developers": {
    title: "LLM Application Developers",
    description: "Develop custom retrieval-augmented generation (RAG) systems, enterprise copilots, and LLM APIs for your business enterprise.",
    bullets: [
      "Vetted and top LLM application developers",
      "Exercise complete control over the team",
      "Dedicated communication channels"
    ],
    techStack: ["LangChain", "LlamaIndex", "Vector DBs", "OpenAI APIs", "Anthropic", "Python", "Node.js"],
    highlights: [
      { title: "RAG Systems", desc: "Semantic search and context injection over proprietary knowledge bases." },
      { title: "Enterprise Copilots", desc: "Intelligent developer, support, and business analysis assistants." },
      { title: "Prompt Engineering", desc: "Contextual instruction mapping and structured output formats." }
    ]
  },
  "agentic-ai-engineers": {
    title: "Agentic AI Engineers",
    description: "Architect multi-agent orchestration frameworks, autonomous workflow loops, and tool integrations for your business enterprise.",
    bullets: [
      "Vetted and top Agentic AI engineers",
      "Exercise complete control over the team",
      "Dedicated communication channels"
    ],
    techStack: ["LangGraph", "CrewAI", "AutoGen", "Tool Integration", "Semantic Kernel", "Python"],
    highlights: [
      { title: "Agent Orchestration", desc: "Coordinate multiple specialized agents for complex multi-step tasks." },
      { title: "Self-Correction", desc: "Loops that analyze outputs, catch errors, and try again automatically." },
      { title: "Tool Integration", desc: "Empower agents with secure access to calculators, databases, and APIs." }
    ]
  },
  "data-engineers": {
    title: "Data Engineers",
    description: "Design high-performance data pipelines, real-time ETL architectures, quality guards, and feature stores for your business enterprise.",
    bullets: [
      "Vetted and top data engineers",
      "Exercise complete control over the team",
      "Dedicated communication channels"
    ],
    techStack: ["Apache Spark", "Kafka", "Snowflake", "Airflow", "dbt", "SQL", "Python", "AWS/GCP"],
    highlights: [
      { title: "Data Pipelines", desc: "Robust data orchestration pipelines built for high throughput." },
      { title: "ETL / ELT", desc: "Transform complex data streams into queryable structured stores." },
      { title: "Feature Stores", desc: "Centralized repositories for storing and serving ML model features." }
    ]
  },
  "mlops-engineers": {
    title: "MLOps Engineers",
    description: "Establish continuous deployment, monitoring, model governance, drift detection, and inference infrastructure for your business enterprise.",
    bullets: [
      "Vetted and top MLOps engineers",
      "Exercise complete control over the team",
      "Dedicated communication channels"
    ],
    techStack: ["Kubernetes", "Triton Server", "Kubeflow", "MLflow", "CI/CD", "AWS", "GCP"],
    highlights: [
      { title: "CI/CD for Models", desc: "Automate model updates and safety validation tests on release." },
      { title: "Drift Detection", desc: "Identify model degradation and data drift in live production." },
      { title: "Inference Infrastructure", desc: "Deploy ultra-low latency inference endpoints globally." }
    ]
  },
  "backend-developers": {
    title: "Backend Developers (AI-adjacent)",
    description: "Scale high-throughput APIs, microservice mesh networks, and integrations with downstream model services for your business enterprise.",
    bullets: [
      "Vetted and top backend developers",
      "Exercise complete control over the team",
      "Dedicated communication channels"
    ],
    techStack: ["FastAPI", "Node.js", "Go", "PostgreSQL", "Redis", "Docker", "GraphQL"],
    highlights: [
      { title: "AI Integration", desc: "Seamlessly glue front-end clients to complex backend ML models." },
      { title: "Microservices", desc: "Scalable backend nodes built using modern containerized networks." },
      { title: "Performance Tuning", desc: "Optimizing database queries, caching, and stream responses." }
    ]
  },
  "qa-evaluation-engineers": {
    title: "QA / AI Evaluation Engineers",
    description: "Implement automated evaluation suites, red-teaming scripts, safety guards, and accuracy metrics for your business enterprise.",
    bullets: [
      "Vetted and top QA / AI evaluation engineers",
      "Exercise complete control over the team",
      "Dedicated communication channels"
    ],
    techStack: ["Promptfoo", "Ragas", "PyTest", "Adversarial Testing", "Playwright", "CI/CD"],
    highlights: [
      { title: "Red Teaming", desc: "Stress test LLM safety, context leaks, and boundary vulnerabilities." },
      { title: "Evaluation Suites", desc: "Design benchmark tests to track accuracy and drift changes." },
      { title: "Automated Checks", desc: "Automate model security checks inside CI deployment builds." }
    ]
  }
}

export default function DedicatedResourceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const info = RESOURCES_MAP[slug || ""] || RESOURCES_MAP["ai-ml-engineers"]

  // Interactive Design switcher: split, tabs, grid, storyteller
  const [selectedDesign, setSelectedDesign] = useState<"split" | "tabs" | "grid" | "storyteller">("storyteller")

  // Tabs Layout Left-side State
  const [activeTab, setActiveTab] = useState<"overview" | "tech" | "highlights">("overview")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: ""
  })

  const [captchaChecked, setCaptchaChecked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaChecked) {
      alert("Please confirm you are not a robot.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const res = await fetch("/api/send-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          fromEmail: formData.email,
          company: `Dedicated Resource Request (${info.title})` + (formData.phone ? ` - Phone: ${formData.phone}` : ""),
          message: formData.details
        })
      })

      if (!res.ok) throw new Error("Failed")

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", details: "" })
      setCaptchaChecked(false)
      setTimeout(() => setSubmitStatus("idle"), 4000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-page-bg pt-24 pb-20 overflow-x-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-28">

        {/* Design Switcher Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-page-border pb-6 mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-toadster-green">LIVE PREVIEW THEMES</span>
            <h2 className="text-sm text-page-fg-muted">Choose your preferred design layout below:</h2>
          </div>
          <div className="inline-flex rounded-xl p-1 bg-white/5 border border-page-border gap-1 text-sm font-semibold shadow-lg">

            <button
              onClick={() => setSelectedDesign("tabs")}
              className={`px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${selectedDesign === "tabs" ? "bg-toadster-green text-white shadow-md" : "text-page-fg-muted hover:text-page-fg hover:bg-white/5"}`}
            >
              Interactive Tabs
            </button>

            <button
              onClick={() => setSelectedDesign("storyteller")}
              className={`px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${selectedDesign === "storyteller" ? "bg-toadster-green text-white shadow-md" : "text-page-fg-muted hover:text-page-fg hover:bg-white/5"}`}
            >
              Vertical Storyteller
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESIGN 5: VERTICAL STORYTELLER LAYOUT (FULL-WIDTH)                       */}
        {/* ========================================================================= */}
        {selectedDesign === "storyteller" ? (
          <div className="flex flex-col gap-24 pt-4">

            {/* Section 1: Hero Section with pulsing abstract gradient background + RFP form card */}
            <section className="relative w-full rounded-3xl py-16 px-8 sm:px-12 overflow-hidden bg-gradient-to-br from-[#F4F9F6] via-[#FCFDFD] to-[#F4F9F6] dark:from-[#08100C] dark:via-[#0E1712] dark:to-[#08100C] border border-toadster-green/20 dark:border-toadster-green/30 shadow-[0_20px_50px_rgba(0,102,0,0.04)] dark:shadow-[0_20px_60px_rgba(42,168,7,0.1)] transition-all duration-300">
              
              {/* Pulsing glow spheres simulating abstract AI animation */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-radial from-toadster-green/22 via-toadster-green/6 to-transparent blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.1, 0.9, 1.1],
                    x: [0, -60, 0],
                    y: [0, 40, 0],
                    opacity: [0.35, 0.5, 0.35]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-24 -right-16 w-[450px] h-[450px] rounded-full bg-radial from-toadster-green/18 via-transparent to-transparent blur-3xl"
                />
              </div>

              {/* Hero content & RFP split */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Column: Title & Info */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-bold uppercase tracking-[0.35em] text-toadster-green bg-toadster-green/10 py-1.5 px-4 rounded-full border border-toadster-green/20 w-fit"
                  >
                    Dedicated Resource Solution
                  </motion.span>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-page-fg tracking-tight leading-tight"
                  >
                    Hire <br />
                    <span className="text-toadster-green">{info.title}</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-page-fg-subtle text-lg sm:text-xl leading-relaxed max-w-xl"
                  >
                    {info.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col gap-3.5 text-page-fg-muted mt-2 font-semibold"
                  >
                    {info.bullets.map((bullet, index) => (
                      <span key={index} className="flex items-center gap-3 text-base">
                        <span className="w-5 h-5 shrink-0 rounded-full bg-toadster-green/10 text-toadster-green flex items-center justify-center font-bold text-xs">✓</span>
                        {bullet}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Right Column: RFP Form Card */}
                <div className="lg:col-span-5 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-left">
                      <div>
                        <h2 className="text-xl font-bold text-page-fg">Request For Proposal</h2>
                        <p className="text-xs text-page-fg-muted mt-1">Get custom quotes within 24 hours.</p>
                      </div>
                      
                      <div className="flex flex-col gap-4 text-left">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-page-fg-muted mb-1.5">
                            Your Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder="Enter your name"
                            className="text-page-fg bg-white/75 dark:bg-black/35 border-page-border-strong focus:bg-white dark:focus:bg-black/60 focus:border-toadster-green transition-all"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-page-fg-muted mb-1.5">
                            Your Official Email *
                          </label>
                          <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            type="email"
                            placeholder="Enter your email"
                            className="text-page-fg bg-white/75 dark:bg-black/35 border-page-border-strong focus:bg-white dark:focus:bg-black/60 focus:border-toadster-green transition-all"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-page-fg-muted mb-1.5">
                            Contact Number (Optional)
                          </label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter your phone number"
                            className="text-page-fg bg-white/75 dark:bg-black/35 border-page-border-strong focus:bg-white dark:focus:bg-black/60 focus:border-toadster-green transition-all"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-page-fg-muted mb-1.5">
                            Project Details *
                          </label>
                          <Textarea
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            required
                            placeholder="Briefly describe your requirements..."
                            rows={3}
                            className="text-page-fg bg-white/75 dark:bg-black/35 border-page-border-strong focus:bg-white dark:focus:bg-black/60 focus:border-toadster-green transition-all"
                          />
                        </div>
                      </div>
                      
                      {/* Simulated reCAPTCHA */}
                      <div className="flex items-center justify-between border border-toadster-green/15 rounded-xl p-3 bg-white/50 dark:bg-black/20 shadow-inner select-none text-left">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={captchaChecked}
                            onChange={(e) => setCaptchaChecked(e.target.checked)}
                            className="w-4 h-4 rounded border-page-border-strong accent-toadster-green cursor-pointer"
                          />
                          <span className="text-xs font-medium text-page-fg-subtle">I'm not a robot</span>
                        </label>
                        <div className="flex flex-col items-center gap-0.5">
                          <img
                            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                            alt="reCAPTCHA logo"
                            className="w-5 h-5 opacity-75"
                          />
                          <span className="text-[8px] text-page-fg-muted font-medium">reCAPTCHA</span>
                        </div>
                      </div>
                      
                      {submitStatus === "success" && (
                        <div className="p-3 bg-green-900/30 border border-green-700/50 rounded-xl text-center">
                          <p className="text-green-400 text-xs font-medium">Proposal submitted successfully!</p>
                        </div>
                      )}
                      {submitStatus === "error" && (
                        <div className="p-3 bg-red-900/30 border border-red-700/50 rounded-xl text-center">
                          <p className="text-red-400 text-xs font-medium">Failed to submit proposal.</p>
                        </div>
                      )}
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#1C3829] hover:bg-[#1C3829]/90 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? "SUBMITTING..." : "SUBMIT PROPOSAL"}
                      </Button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Section 2: Technology Stacks Section (Dynamic Grid) */}
            <section className="w-full flex flex-col items-center gap-12">
              <div className="text-center max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-toadster-green">ENGINEERING TOOLKIT</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-page-fg mt-2">Our Core Technology Stack</h2>
                <p className="text-page-fg-muted text-sm sm:text-base mt-2">
                  Our engineers are trained in production-grade frameworks, infrastructure patterns, and pipelines.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
                {info.techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl border border-page-border bg-white/[0.02] hover:bg-white/[0.05] hover:border-toadster-green/40 hover:-translate-y-1 transition-all duration-300 shadow-lg text-center gap-3 group"
                  >
                    <span className="p-3 bg-toadster-green/10 text-toadster-green rounded-xl group-hover:scale-110 transition-transform">
                      <Code size={20} />
                    </span>
                    <span className="text-sm font-bold text-page-fg">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Core Pillars / Capability Highlights */}
            <section className="w-full flex flex-col items-center gap-12">
              <div className="text-center max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-toadster-green">EXPERTISE OUTLINE</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-page-fg mt-2">Core Service Pillars</h2>
                <p className="text-page-fg-muted text-sm sm:text-base mt-2">
                  What we execute and deliver when integrated into your engineering workspace.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {info.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="p-8 rounded-3xl border border-page-border bg-gradient-to-b from-white/[0.03] to-transparent hover:border-toadster-green/30 transition-all flex flex-col gap-4 shadow-xl"
                  >
                    <span className="w-10 h-10 rounded-xl bg-toadster-green/10 text-toadster-green flex items-center justify-center font-bold text-base">
                      {i === 0 ? <Cpu size={20} /> : i === 1 ? <Layers size={20} /> : <Sparkles size={20} />}
                    </span>
                    <h4 className="font-extrabold text-page-fg text-lg">{h.title}</h4>
                    <p className="text-sm text-page-fg-muted leading-relaxed">{h.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">



            {/* ========================================================================= */}
            {/* DESIGN 2: INTERACTIVE TABS LAYOUT                                         */}
            {/* ========================================================================= */}
            {selectedDesign === "tabs" && (
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="text-sm font-bold tracking-[0.25em] text-toadster-green uppercase">FLEXIBLE COOPERATION</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-page-fg leading-tight">
                  Hire <span className="text-toadster-green">{info.title}</span>
                </h1>

                {/* Left Column Tabs Header */}
                <div className="flex border-b border-page-border gap-2 mt-4 text-sm font-semibold">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`pb-3 px-2 border-b-2 transition-all cursor-pointer ${activeTab === "overview" ? "border-toadster-green text-toadster-green font-bold" : "border-transparent text-page-fg-muted hover:text-page-fg"}`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("tech")}
                    className={`pb-3 px-2 border-b-2 transition-all cursor-pointer ${activeTab === "tech" ? "border-toadster-green text-toadster-green font-bold" : "border-transparent text-page-fg-muted hover:text-page-fg"}`}
                  >
                    Tech Stack
                  </button>
                  <button
                    onClick={() => setActiveTab("highlights")}
                    className={`pb-3 px-2 border-b-2 transition-all cursor-pointer ${activeTab === "highlights" ? "border-toadster-green text-toadster-green font-bold" : "border-transparent text-page-fg-muted hover:text-page-fg"}`}
                  >
                    Core Pillars
                  </button>
                </div>

                {/* Tab 1: Overview */}
                {activeTab === "overview" && (
                  <div className="flex flex-col gap-5 pt-2 animate-fadeIn">
                    <p className="text-page-fg-subtle text-lg leading-relaxed">
                      {info.description}
                    </p>
                    <ul className="flex flex-col gap-3.5 text-page-fg-muted">
                      {info.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-5 h-5 shrink-0 rounded-full bg-toadster-green/10 text-toadster-green flex items-center justify-center font-bold text-xs">
                            ✓
                          </span>
                          <span className="text-base">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tab 2: Tech Stack */}
                {activeTab === "tech" && (
                  <div className="flex flex-col gap-4 pt-2 animate-fadeIn">
                    <p className="text-page-fg-muted text-sm font-medium uppercase tracking-wider">Skillset and Tools Integrations</p>
                    <div className="flex flex-wrap gap-2">
                      {info.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-xl bg-white/[0.03] border border-page-border text-sm font-semibold text-page-fg hover:border-toadster-green/45 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Core Pillars */}
                {activeTab === "highlights" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 animate-fadeIn">
                    {info.highlights.map((h, i) => (
                      <div key={i} className="p-5 rounded-2xl border border-page-border bg-white/[0.02] flex flex-col gap-2">
                        <div className="w-8 h-8 rounded-lg bg-toadster-green/10 text-toadster-green flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </div>
                        <h4 className="font-bold text-page-fg text-sm mt-1">{h.title}</h4>
                        <p className="text-xs text-page-fg-muted leading-relaxed">{h.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <Button
                    onClick={() => navigate(`/contact?resource=${encodeURIComponent(info.title)}`)}
                    className="bg-[#1C3829] hover:bg-[#1C3829]/90 text-white font-bold py-6 px-10 rounded-xl text-base flex items-center gap-2 group shadow-lg cursor-pointer"
                  >
                    LET'S TALK
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            )}



            {/* ========================================================================= */}
            {/* RFP FORM CARD (RIGHT COLUMN - REUSED BY SPLIT, TABS, GRID THEMES)          */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5">
              <form onSubmit={handleSubmit} className="bg-white/5 border border-page-border rounded-2xl p-8 shadow-2xl flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-page-fg">Request For Proposal</h2>
                  <p className="text-sm text-page-fg-muted mt-1">Get custom quotes within 24 hours.</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-page-fg-muted mb-1.5">
                      Your Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="text-page-fg bg-transparent border-page-border-strong focus:border-toadster-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-page-fg-muted mb-1.5">
                      Your Official Email *
                    </label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="text-page-fg bg-transparent border-page-border-strong focus:border-toadster-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-page-fg-muted mb-1.5">
                      Contact Number (Optional)
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your phone number"
                      className="text-page-fg bg-transparent border-page-border-strong focus:border-toadster-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-page-fg-muted mb-1.5">
                      Project Details *
                    </label>
                    <Textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      placeholder="Briefly describe your requirements..."
                      rows={4}
                      className="text-page-fg bg-transparent border-page-border-strong focus:border-toadster-green"
                    />
                  </div>
                </div>

                {/* Simulated reCAPTCHA */}
                <div className="flex items-center justify-between border border-page-border rounded-xl p-4 bg-white/[0.02] shadow-inner select-none">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={captchaChecked}
                      onChange={(e) => setCaptchaChecked(e.target.checked)}
                      className="w-5 h-5 rounded border-page-border-strong accent-toadster-green cursor-pointer"
                    />
                    <span className="text-sm font-medium text-page-fg-subtle">I'm not a robot</span>
                  </label>
                  <div className="flex flex-col items-center gap-0.5">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA logo"
                      className="w-6 h-6 opacity-75"
                    />
                    <span className="text-[9px] text-page-fg-muted font-medium">reCAPTCHA</span>
                  </div>
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-900/30 border border-green-700/50 rounded-xl">
                    <p className="text-green-400 text-sm font-medium">Proposal submitted successfully! We'll get back to you soon.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-xl">
                    <p className="text-red-400 text-sm font-medium">Failed to submit proposal. Please try again.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1C3829] hover:bg-[#1C3829]/90 disabled:opacity-50 text-white font-bold py-4 rounded-xl text-base shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT PROPOSAL"}
                </Button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

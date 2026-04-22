import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Brain,
  Zap,
  Shield,
  Code2,
  Settings,
  Eye,
  Activity,
  Database,
  Network,
  ChevronDown,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Users,
  Target,
  Lock,
  Link2,
  BarChart3,
  MessageSquare,
} from "lucide-react"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 py-5">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown
          className={`shrink-0 text-green-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      {open && (
        <p className="mt-3 text-gray-400 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  )
}

const clients = [
  "Paytm", "FireAI", "Noise", "MyChallan", "Axis Bank",
  "Reliance", "Tawuniya", "H&M", "Google",
]

export default function AgenticAIPage() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#050d18] text-white">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#092a1a] to-[#050d18] py-28 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">
            Agentic AI
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transformation with<br />
            <span className="text-green-400">Agentic AI</span> Services
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Agency AI provides enterprise-grade autonomous agents that plan, execute, and adapt to achieve your business goals with unprecedented intelligence and efficiency.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-8 py-3 rounded-xl bg-[#1C3829] text-white font-semibold hover:bg-green-800 transition-colors">
              Get Free AI Audit
            </button>
            <button onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGO MARQUEE ── */}
      <section className="bg-[#070e1e] py-10 overflow-hidden border-y border-white/5">
        <p className="text-center text-xs tracking-widest text-gray-500 uppercase mb-6">
          Trusted by Innovative Teams Worldwide
        </p>
        <div className="relative flex overflow-hidden">
          <div className="flex gap-14 animate-marquee whitespace-nowrap items-center px-6">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="text-gray-400 font-semibold text-sm opacity-60 shrink-0">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">What We Offer</p>
            <h2 className="text-4xl font-extrabold">Agentic AI Services</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Comprehensive agentic AI solutions that automate, optimize, and transform your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Network size={22} />, title: "Enterprise Process Automation", desc: "Automate complex multi-step business workflows with autonomous AI agents." },
              { icon: <Brain size={22} />, title: "AI-Powered Decision Making", desc: "Deploy reasoning agents that analyze data and make intelligent decisions." },
              { icon: <MessageSquare size={22} />, title: "Natural Language Processing", desc: "Agents that understand and process natural language with high accuracy." },
              { icon: <BarChart3 size={22} />, title: "Predictive Analytics", desc: "Forecast trends and outcomes using AI-driven predictive models." },
              { icon: <Activity size={22} />, title: "Autonomous Workflow Orchestration", desc: "Coordinate complex workflows across systems without human intervention." },
              { icon: <Eye size={22} />, title: "Real-time AI Monitoring", desc: "Continuous agent monitoring and performance optimization." },
              { icon: <Database size={22} />, title: "AI-Driven Insights & Reporting", desc: "Automatically generate actionable insights from your data." },
              { icon: <Lock size={22} />, title: "Secure Agent Communication", desc: "End-to-end encrypted, decentralized agent protocol (A2A)." },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-[#0d1b2e] border border-white/5 rounded-2xl p-6 hover:border-green-800/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                  {s.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-2">
            Proven Performance, <span className="text-green-400">Trusted Results</span>
          </h2>
          <p className="text-gray-400 mb-12">
            Our track record speaks for itself across hundreds of successful deployments.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "500+", label: "AI Projects Delivered", icon: <TrendingUp size={28} /> },
              { value: "99.9%", label: "System Uptime Guaranteed", icon: <Shield size={28} /> },
              { value: "24/7", label: "Dedicated Client Support", icon: <Clock size={28} /> },
            ].map((s) => (
              <div key={s.label} className="bg-[#0d1b2e] rounded-2xl p-8 border border-white/5">
                <div className="text-green-400 flex justify-center mb-3">{s.icon}</div>
                <div className="text-5xl font-extrabold text-white mb-2">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Capabilities</p>
            <h2 className="text-4xl font-extrabold">Key Features of Agentic AI</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Agentic AI is capable of performing advanced tasks to deliver business-grade solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Brain size={22} />, title: "Advanced Autonomous Reasoning", desc: "Agents that plan multi-step tasks, reason through problems, and adapt on the fly." },
              { icon: <Settings size={22} />, title: "Self-Improvement Systems", desc: "Continuously learns from feedback and improves performance over time." },
              { icon: <Eye size={22} />, title: "Context-Aware Intelligence", desc: "Deep understanding of context to deliver highly relevant responses and actions." },
              { icon: <Link2 size={22} />, title: "Multi-Agent Collaboration", desc: "Multiple specialized agents working in concert to solve complex challenges." },
              { icon: <Database size={22} />, title: "Deep Domain Understanding", desc: "Pre-trained on domain-specific data for industry-grade accuracy." },
              { icon: <Lock size={22} />, title: "Enterprise-Grade Security", desc: "Role-based access, audit logs, and encrypted agent communication." },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-[#0d1b2e] rounded-2xl p-6 border border-white/5 hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section id="our-process" className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              {[
                { step: "01", title: "Discovery & Requirements", desc: "We deeply understand your workflows, pain points, and automation goals." },
                { step: "02", title: "Agent Architecture Design", desc: "Design multi-agent systems tailored to your specific use cases." },
                { step: "03", title: "Solution Development", desc: "Build, test, and iterate on agents with robust CI/CD pipelines." },
                { step: "04", title: "Deployment & Integration", desc: "Seamlessly deploy agents into your existing tech stack." },
                { step: "05", title: "Monitoring & Optimization", desc: "Continuous monitoring, performance tuning, and improvements." },
              ].map((p) => (
                <div key={p.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-extrabold text-green-800 shrink-0 w-12">{p.step}</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">{p.title}</h4>
                    <p className="text-gray-400 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="relative rounded-3xl overflow-hidden border border-white/5 min-h-100 flex items-center justify-center group"
              style={{
                backgroundImage: "url('/assets/services/agentic1.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >

            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Why Choose Us</p>
            <h2 className="text-4xl font-extrabold">Benefits of Working With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Zap size={22} />, title: "Faster Delivery", desc: "Agile delivery model with 2-week sprint cycles and rapid prototyping." },
              { icon: <Shield size={22} />, title: "Enhanced Security", desc: "Enterprise-grade security protocols and compliance-ready architecture." },
              { icon: <TrendingUp size={22} />, title: "Scalable Solutions", desc: "Systems designed to grow with your business effortlessly." },
              { icon: <Target size={22} />, title: "Precision Targeting", desc: "AI models trained specifically for your industry and use case." },
              { icon: <Users size={22} />, title: "Dedicated Team", desc: "A dedicated pod of AI engineers, architects, and PMs." },
              { icon: <CheckCircle size={22} />, title: "Proven Methodology", desc: "Battle-tested delivery process across 500+ successful projects." },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-[#0d1b2e] rounded-2xl p-6 border border-white/5 hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Our Expertise</p>
            <h2 className="text-4xl font-extrabold">AI Development Expertise Tailored to You</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI & LLM Integration",
                points: ["GPT-4 / Claude / Gemini integration", "Fine-tuning on proprietary data", "RAG pipelines and vector databases", "Multi-modal AI systems"],
              },
              {
                title: "Infrastructure & Deployment",
                points: ["Cloud-native deployment (AWS, GCP, Azure)", "Docker & Kubernetes orchestration", "MLOps & CI/CD for AI", "Edge AI deployment"],
              },
              {
                title: "Agent Frameworks",
                points: ["LangChain & LangGraph", "AutoGen & CrewAI", "Custom agent protocols (A2A)", "Tool use & function calling"],
              },
              {
                title: "Data & Analytics",
                points: ["Data pipeline engineering", "Real-time stream processing", "BI dashboards & reporting", "Predictive modeling"],
              },
            ].map((e) => (
              <div key={e.title} className="bg-[#0d1b2e] rounded-2xl p-6 border border-white/5">
                <h3 className="font-bold text-green-400 mb-4">{e.title}</h3>
                <ul className="space-y-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OUR AI DEVELOPERS ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Our Developers</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">
              Why Our AI Developers to Build Scalable, Secure, and Smart Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Deep LLM Expertise", "Multi-Agent System Design", "Production-Grade Code", "Security-First Development",
              "Cloud Architecture", "API & Integration Mastery", "MLOps & DevOps", "Performance Optimization",
              "Domain Knowledge", "Agile Methodology", "24/7 Support", "Cost-Effective Solutions",
              "Rapid Prototyping", "Custom Model Training", "Compliance-Ready", "Real-time Systems",
            ].map((cap) => (
              <div
                key={cap}
                className="bg-[#0d1b2e] rounded-xl p-4 border border-white/5 flex items-center gap-3 hover:border-green-800/40 transition-colors"
              >
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
            <p className="text-gray-400 mt-3">Real AI solutions delivering real business results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Agentic AI", title: "Autonomous Support Agent", desc: "Reduced support tickets by 78% for a fintech company using an autonomous triage agent.", metric: "78% reduction", image: "/assets/services/agentic3.webp" },
              { tag: "LLM Integration", title: "Enterprise Document Intelligence", desc: "Deployed a RAG pipeline to process 100K+ legal documents with 95%+ accuracy.", metric: "95%+ accuracy", image: "/genai.webp" },
              { tag: "AI Automation", title: "Supply Chain Optimizer", desc: "AI agent orchestrating real-time supply chain decisions, saving $2M+ annually.", metric: "$2M+ savings", image: "/assets/services/agentic4.webp" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-[#0d1b2e] flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-green-800/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.15)]"
              >
                <div className="h-48 relative overflow-hidden bg-[#050d18] shrink-0">
                  <img src={w.image} alt={w.title} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0d1b2e] via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6 relative -mt-6 flex flex-col grow">
                  <div className="mb-4">
                    <span className="text-xs text-green-400 font-semibold bg-green-950 px-3 py-1 rounded-full border border-green-800/50 shadow-sm">{w.tag}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-green-400 transition-colors pt-1">{w.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed grow">{w.desc}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5 mt-auto">
                    <Activity size={16} className="text-green-500" />
                    <p className="text-green-400 font-semibold text-sm">{w.metric}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY INNOVATIONS ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">What's New</p>
            <h2 className="text-4xl font-extrabold">Key Innovations in AI Development</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Code2 size={22} />, label: "GPT-4o Integration" },
              { icon: <Brain size={22} />, label: "Reasoning Models (o1 / o3)" },
              { icon: <Network size={22} />, label: "Agent-to-Agent (A2A) Protocol" },
              { icon: <Database size={22} />, label: "Vector Databases (Pinecone, Weaviate)" },
              { icon: <Activity size={22} />, label: "Real-time LLM Streaming" },
              { icon: <Shield size={22} />, label: "AI Safety & Alignment Tooling" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#0d1b2e] rounded-2xl p-5 border border-white/5 flex items-center gap-4 hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">
                  {item.icon}
                </div>
                <span className="text-white font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Social Proof</p>
            <h2 className="text-4xl font-extrabold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Siddharth Rao", role: "CTO, FinNext", text: "Toadster built us an autonomous support agent that outperformed our entire human team. The ROI was visible within 3 weeks." },
              { name: "Priya Shah", role: "VP Product, TechVault", text: "Their LLM expertise is unmatched. The document intelligence platform they built processes our legal docs 10x faster." },
              { name: "Marcus Lee", role: "Founder, AutoScale", text: "We hired Toadster to build our AI data pipeline. They delivered in 6 weeks with zero production issues." },
            ].map((t) => (
              <div key={t.name} className="bg-[#0d1b2e] rounded-2xl p-6 border border-white/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-green-400 fill-green-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Harness the Power of<br />
            <span className="text-green-400">AI for Your Business?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Let's build intelligent agents that work for you — 24/7, at scale, without limits.
          </p>
          <button className="px-10 py-4 rounded-xl bg-[#1C3829] text-white font-semibold text-lg hover:bg-green-800 transition-colors">
            Chat With Us
          </button>
        </div>
      </section>

      {/* ── BLOGS ── */}
      {/* <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Latest Insights</p>
            <h2 className="text-4xl font-extrabold">Our Blogs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Agentic AI", title: "What is Agentic AI and Why It Matters in 2026", date: "Feb 15, 2026" },
              { tag: "LLMs", title: "GPT-4 vs Claude: Which LLM is Best for Enterprise?", date: "Jan 28, 2026" },
              { tag: "Automation", title: "How Multi-Agent Systems Are Replacing Traditional RPA", date: "Jan 10, 2026" },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-[#0d1b2e] rounded-2xl overflow-hidden border border-white/5 hover:border-green-800/40 transition-colors cursor-pointer group"
              >
                <div className="h-36 bg-linear-to-br from-green-900/30 to-[#050d18] flex items-center justify-center">
                  <Brain size={40} className="text-green-700" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-green-400 font-semibold bg-green-900/20 px-2 py-0.5 rounded-full">{b.tag}</span>
                  <h3 className="font-bold text-white mt-3 mb-2 group-hover:text-green-400 transition-colors">{b.title}</h3>
                  <p className="text-gray-500 text-xs">{b.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Got Questions?</p>
            <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          {[
            { q: "What is Agentic AI and how is it different from traditional AI?", a: "Agentic AI systems can autonomously plan, execute multi-step tasks, and adapt without constant human input — unlike traditional AI which requires explicit instructions for each action." },
            { q: "How long does it take to deploy an Agentic AI solution?", a: "Typical deployments range from 4–12 weeks depending on complexity. We follow a rapid prototyping approach to deliver a working PoC within the first 2 weeks." },
            { q: "Can Agentic AI integrate with our existing systems?", a: "Yes. Our agents are built with integration-first architecture and can connect to any REST API, database, CRM, ERP, or cloud platform." },
            { q: "How do you ensure security in Agentic AI deployments?", a: "We implement role-based access control, encrypted agent communication, audit trails, and comply with SOC 2, GDPR, and HIPAA standards where required." },
            { q: "What industries do you serve with Agentic AI?", a: "We serve fintech, healthcare, legal, e-commerce, manufacturing, logistics, and more. Our agents are tailored to the specific workflows of each industry." },
            { q: "What is the cost of building an Agentic AI solution?", a: "Costs depend on scope, complexity, and integrations required. We offer fixed-price engagements for well-defined scopes. Contact us for a free estimate." },
          ].map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

    </div>
  )
}

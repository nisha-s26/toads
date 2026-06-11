"use client"

import Image from "next/image"
import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import {
  Brain,
  Zap,
  Shield,
  Settings,
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
  Cpu,
  BarChart3,
  RefreshCw,
  GitBranch,
  Layers,
  Bot,
  Workflow,
} from "lucide-react"
import { ServicesTrustedBy } from "@/components/ServicesTrustedBy"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-page-border py-5">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-page-fg font-medium pr-4">{question}</span>
        <ChevronDown
          className={`shrink-0 text-green-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      {open && (
        <p className="mt-3 text-page-fg-muted text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  )
}


export default function IntelligentAutomationPage() {
  return (
    <div className="bg-page-bg text-page-fg">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden  py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">
            Intelligent Automation
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Operations with<br />
            <span className="text-green-400">Intelligent Automation</span> Services
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">
            Combine AI, RPA, and analytics to automate complex business processes, drive efficiency, and enable smarter decision-making at scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact">Get Free Automation Audit</CTALink>
            <button onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl border border-page-border-strong text-page-fg font-semibold hover:bg-page-fg/5 transition-colors">
              See How It Works
            </button>
          </div>
        </div>
      </section>
      <ServicesTrustedBy />

      {/* ── SERVICES GRID ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What We Offer</p>
            <h2 className="text-4xl font-extrabold">Intelligent Automation Services</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              AI-powered automation solutions that combine RPA, ML, and analytics to optimize every business process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Workflow size={22} />, title: "End-to-End Process Automation", desc: "Automate entire workflows across departments with AI-driven orchestration." },
              { icon: <Bot size={22} />, title: "Cognitive RPA Bots", desc: "Deploy bots that understand, learn, and adapt to changing business rules." },
              { icon: <BarChart3 size={22} />, title: "Intelligent Data Capture", desc: "Extract, classify, and validate data from any source using AI and OCR." },
              { icon: <RefreshCw size={22} />, title: "Dynamic Workflow Management", desc: "AI-driven workflow engines that adapt to real-time business needs." },
              { icon: <Activity size={22} />, title: "Automated QA & Monitoring", desc: "Continuous testing and monitoring for reliability and compliance." },
              { icon: <Network size={22} />, title: "System & API Integration", desc: "Connect and automate across legacy and modern systems." },
              { icon: <Database size={22} />, title: "Document Automation", desc: "Automate document generation, processing, and routing." },
              { icon: <Brain size={22} />, title: "AI-Driven Decision Automation", desc: "Automate complex decisions with ML models and business logic." },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-page-card border border-page-border rounded-2xl p-6 hover:border-green-800/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                  {s.icon}
                </div>
                <h3 className="font-bold text-page-fg mb-2">{s.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-page-bg-alt py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-2">
            Proven Performance, <span className="text-green-400">Trusted Results</span>
          </h2>
          <p className="text-page-fg-muted mb-12">
            Our intelligent automation solutions deliver measurable ROI and operational excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "400+", label: "Automation Projects Delivered", icon: <TrendingUp size={28} /> },
              { value: "85%", label: "Average Cost Savings", icon: <Zap size={28} /> },
              { value: "24/7", label: "Dedicated Client Support", icon: <Clock size={28} /> },
            ].map((s) => (
              <div key={s.label} className="bg-page-card rounded-2xl p-8 border border-page-border">
                <div className="text-green-400 flex justify-center mb-3">{s.icon}</div>
                <div className="text-5xl font-extrabold text-page-fg mb-2">{s.value}</div>
                <div className="text-page-fg-muted text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Capabilities</p>
            <h2 className="text-4xl font-extrabold">Key Features of Intelligent Automation</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              Unlock new levels of efficiency, accuracy, and agility with our intelligent automation platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Brain size={22} />, title: "Cognitive Automation", desc: "AI models that understand context, learn from data, and adapt to new scenarios." },
              { icon: <Settings size={22} />, title: "Self-Optimizing Workflows", desc: "Automation pipelines that continuously improve based on feedback and analytics." },
              { icon: <Shield size={22} />, title: "Enterprise-Grade Security", desc: "Role-based access, encrypted data, and compliance with global standards." },
              { icon: <Cpu size={22} />, title: "Low-Code Automation Builder", desc: "Empower business users to design and deploy automations visually." },
              { icon: <GitBranch size={22} />, title: "Conditional Logic & Branching", desc: "Dynamic automation flows with real-time decisioning." },
              { icon: <Layers size={22} />, title: "Scalable Architecture", desc: "Cloud-native, modular, and resilient infrastructure for any workload." },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-page-card rounded-2xl p-6 border border-page-border hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-page-fg mb-2">{f.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section id="our-process" className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              {[
                { step: "01", title: "Process Discovery & Assessment", desc: "Analyze your workflows to identify automation opportunities and ROI." },
                { step: "02", title: "Solution Design & Blueprint", desc: "Architect intelligent automation tailored to your business needs." },
                { step: "03", title: "Build & Iterative Prototyping", desc: "Develop, test, and refine automation pipelines in agile sprints." },
                { step: "04", title: "Deployment & Integration", desc: "Seamlessly integrate automation into your tech stack." },
                { step: "05", title: "Continuous Optimization", desc: "Monitor, analyze, and enhance automation for peak performance." },
              ].map((p) => (
                <div key={p.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-extrabold text-green-800 shrink-0 w-12">{p.step}</span>
                  <div>
                    <h4 className="font-bold text-page-fg mb-1">{p.title}</h4>
                    <p className="text-page-fg-muted text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl overflow-hidden border border-page-border relative h-[400px] md:h-full group">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Intelligent Automation Platform" title="Intelligent Automation Platform" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Why Choose Us</p>
            <h2 className="text-4xl font-extrabold">Benefits of Working With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Zap size={22} />, title: "Rapid ROI", desc: "See measurable results in weeks, not months." },
              { icon: <Shield size={22} />, title: "Enterprise Security", desc: "Compliance-ready, secure automation pipelines." },
              { icon: <TrendingUp size={22} />, title: "Scalable Solutions", desc: "Automations that grow with your business." },
              { icon: <Target size={22} />, title: "Industry-Specific Expertise", desc: "Solutions tailored to your vertical and regulatory needs." },
              { icon: <Users size={22} />, title: "Dedicated Team", desc: "Expert automation engineers, architects, and PMs." },
              { icon: <CheckCircle size={22} />, title: "Proven Methodology", desc: "Hundreds of successful intelligent automation projects delivered." },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-page-card rounded-2xl p-6 border border-page-border hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-page-fg mb-2">{b.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Expertise</p>
            <h2 className="text-4xl font-extrabold">Intelligent Automation Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Automation Platforms & Tools",
                points: ["UiPath, Automation Anywhere, Power Automate", "LangChain & agentic workflows", "Custom Python/Node pipelines", "n8n, Zapier, Make"],
              },
              {
                title: "AI & ML Integration",
                points: ["LLM-powered document processing", "Predictive analytics in automation", "Computer vision for visual tasks", "Cognitive bots with NLP"],
              },
              {
                title: "Cloud & Infrastructure",
                points: ["Cloud-native deployment (AWS, Azure, GCP)", "Kubernetes & Docker orchestration", "Serverless automation", "Event-driven architectures"],
              },
              {
                title: "Monitoring & Analytics",
                points: ["Real-time dashboards & KPIs", "Exception handling & self-healing bots", "Audit trails & compliance logging", "ROI tracking"],
              },
            ].map((e) => (
              <div key={e.title} className="bg-page-card rounded-2xl p-6 border border-page-border">
                <h3 className="font-bold text-green-400 mb-4">{e.title}</h3>
                <ul className="space-y-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-page-fg-subtle text-sm">
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

      {/* ── WHY OUR INTELLIGENT AUTOMATION ENGINEERS ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Engineers</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">
              Why Our Intelligent Automation Engineers Deliver Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Cognitive Automation Expertise", "AI-First Architecture", "Production-Grade Pipelines", "Security-First Mindset",
              "Cloud Infrastructure Mastery", "API & Integration Experts", "MLOps & DevOps", "Performance Optimization",
              "Domain-Specific Knowledge", "Agile Delivery", "24/7 Support", "Cost-Effective Solutions",
              "Rapid Prototyping", "Custom ML Models", "Compliance-Ready Builds", "Real-time Systems",
            ].map((cap) => (
              <div
                key={cap}
                className="bg-page-card rounded-xl p-4 border border-page-border flex items-center gap-3 hover:border-green-800/40 transition-colors"
              >
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-page-fg-subtle text-sm font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
            <p className="text-page-fg-muted mt-3">Real intelligent automation solutions delivering real business results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Process Automation", title: "Claims Processing Bot", desc: "Automated insurance claims workflow, reducing processing time from 3 days to 4 hours.", metric: "94% faster processing", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Document Automation", title: "Contract Analyzer", desc: "AI pipeline extracting key clauses from 50K+ contracts monthly with 97% accuracy.", metric: "97% accuracy", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Intelligent Automation", title: "Invoice Reconciliation", desc: "Fully automated accounts payable reconciliation saving 1,200+ manual hours per month.", metric: "1,200 hrs/month saved", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-page-card rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-colors group shadow-lg"
              >
                <div className="h-44 overflow-hidden relative">
                  <Image src={w.img} alt={w.title} title={w.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-page-card/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-5 border-t border-page-border">
                  <span className="text-xs text-green-400 font-semibold bg-green-900/20 px-2 py-0.5 rounded-full">{w.tag}</span>
                  <h3 className="font-bold text-page-fg mt-3 mb-2">{w.title}</h3>
                  <p className="text-page-fg-muted text-sm mb-3 leading-relaxed">{w.desc}</p>
                  <p className="text-green-400 font-semibold text-sm">{w.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY INNOVATIONS ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What's New</p>
            <h2 className="text-4xl font-extrabold">Key Innovations in Intelligent Automation</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Bot size={22} />, label: "Cognitive Automation with LLMs" },
              { icon: <Brain size={22} />, label: "Self-Healing Automation Bots" },
              { icon: <Network size={22} />, label: "Multi-Agent Workflow Orchestration" },
              { icon: <Database size={22} />, label: "Vector Search for Document Automation" },
              { icon: <Activity size={22} />, label: "Real-Time Event-Driven Pipelines" },
              { icon: <Shield size={22} />, label: "AI Governance & Audit Trails" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-page-card rounded-2xl p-5 border border-page-border flex items-center gap-4 hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">
                  {item.icon}
                </div>
                <span className="text-page-fg font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Social Proof</p>
            <h2 className="text-4xl font-extrabold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ananya Mehta", role: "COO, InsureTech Pro", text: "Toadster automated our entire claims workflow. What used to take 3 days now runs in under 4 hours. Absolutely game-changing for our operations." },
              { name: "James Thornton", role: "CTO, LegalVault", text: "Their document automation pipeline processes our contracts 10x faster with near-perfect accuracy. The ROI paid for itself in 6 weeks." },
              { name: "Riya Kapoor", role: "VP Finance, FinCore", text: "We eliminated 1,200+ hours of manual reconciliation work every month. Toadster's intelligent automation is simply world-class." },
            ].map((t) => (
              <div key={t.name} className="bg-page-card rounded-2xl p-6 border border-page-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-green-400 fill-green-400" />
                  ))}
                </div>
                <p className="text-page-fg-subtle text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-bold text-page-fg text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Automate and Accelerate<br />
            <span className="text-green-400">Your Business Operations?</span>
          </h2>
          <p className="text-page-fg-muted mb-8">
            Let's build intelligent automation that works for you - 24/7, at scale, without limits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" className="text-lg" title="Talk to our automation team">
              Chat With Us
            </CTALink>
            <CTALink
               to="/services/ai-automation"
              className="bg-transparent border border-page-border-strong hover:bg-page-fg/5 text-lg"
              title="Explore AI Automation"
            >
              Explore AI Automation
            </CTALink>
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      {/* <section className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Latest Insights</p>
            <h2 className="text-4xl font-extrabold">Our Blogs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Intelligent Automation", title: "How Intelligent Automation Is Reshaping Business in 2026", date: "Mar 18, 2026" },
              { tag: "Cognitive RPA", title: "Beyond RPA: The Rise of Cognitive Automation", date: "Feb 25, 2026" },
              { tag: "Workflow AI", title: "Top 5 Processes to Automate with AI Today", date: "Jan 30, 2026" },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-page-card rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-colors cursor-pointer group"
              >
                <div className="h-36 bg-linear-to-br from-green-900/30 to-page-bg flex items-center justify-center">
                  <Zap size={40} className="text-green-700" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-green-400 font-semibold bg-green-900/20 px-2 py-0.5 rounded-full">{b.tag}</span>
                  <h3 className="font-bold text-page-fg mt-3 mb-2 group-hover:text-green-400 transition-colors">{b.title}</h3>
                  <p className="text-gray-500 text-xs">{b.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── FAQ ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Got Questions?</p>
            <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          {[
            { q: "What is Intelligent Automation and how is it different from RPA?", a: "Intelligent Automation combines RPA with AI and analytics, enabling systems to handle unstructured data, make decisions, and continuously improve, unlike traditional RPA which is rule-based." },
            { q: "How quickly can you deploy an intelligent automation solution?", a: "We typically deliver a working proof-of-concept within 2-3 weeks and full production deployment within 6-12 weeks, depending on scope and integrations required." },
            { q: "Can intelligent automation integrate with our existing tools and systems?", a: "Yes. Our solutions are built with an integration-first approach and can connect to any REST API, legacy system, ERP, CRM, cloud platform, or database." },
            { q: "How do you ensure the security and compliance of automation pipelines?", a: "We implement role-based access control, encrypted data pipelines, full audit trails, and support compliance frameworks including GDPR, SOC 2, HIPAA, and ISO 27001." },
            { q: "What industries do you serve with intelligent automation?", a: "We serve fintech, insurance, healthcare, legal, e-commerce, manufacturing, logistics, and more. Our solutions are tailored to the specific workflows and regulatory requirements of each industry." },
            { q: "What is the ROI of implementing intelligent automation?", a: "Most clients see positive ROI within 2-3 months. Common outcomes include 60-90% reduction in manual effort, significant error reduction, and cost savings of $500K-$2M+ annually depending on the scale of automation." },
          ].map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

    </div>
  )
}

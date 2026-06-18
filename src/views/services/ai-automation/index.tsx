"use client"

import Image from "next/image"
import { useState } from "react"
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
  Workflow} from "lucide-react"
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


export default function AIAutomationPage() {
  return (
    <div className="service-page bg-page-bg text-page-fg">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden  py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse at center, var(--brand-green-radial) 0%, transparent 70%)" }}
          />
        </div>
        <div className="service-page-container text-center relative">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">

            AI Automation

          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">
            Eliminate repetitive tasks, accelerate workflows, and unlock operational excellence with intelligent AI automation solutions engineered for enterprise scale and reliability.
          </p>
        </div>
      </section>
      <ServicesTrustedBy />

      {/* ── SERVICES GRID ── */}
      <section className="py-20 bg-page-bg">
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What We Offer</p>
            <h2 className="text-4xl font-extrabold">AI Automation Services</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              End-to-end intelligent automation solutions that eliminate friction, reduce costs, and free your teams to focus on high-value work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Workflow size={22} />, title: "Business Process Automation", desc: "Automate repetitive multi-step processes across departments with intelligent AI workflows." },
              { icon: <Bot size={22} />, title: "Robotic Process Automation", desc: "Deploy AI-enhanced RPA bots that interact with any UI or system without APIs." },
              { icon: <BarChart3 size={22} />, title: "Intelligent Data Processing", desc: "Automatically extract, classify, and transform data from any source at scale." },
              { icon: <RefreshCw size={22} />, title: "Workflow Orchestration", desc: "Coordinate complex multi-system workflows with AI-driven decision logic." },
              { icon: <Activity size={22} />, title: "Automated Quality Assurance", desc: "AI-powered testing and monitoring to ensure consistent quality across operations." },
              { icon: <Network size={22} />, title: "API & System Integration", desc: "Seamlessly connect disparate systems and automate cross-platform data flows." },
              { icon: <Database size={22} />, title: "Document Automation", desc: "Intelligently generate, process, and route documents without manual intervention." },
              { icon: <Brain size={22} />, title: "AI-Driven Decision Automation", desc: "Automate complex decisions using ML models trained on your business rules." },
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
        <div className="service-page-container text-center">
          <h2 className="text-3xl font-extrabold mb-2">
            Proven Performance, <span className="text-green-400">Trusted Results</span>
          </h2>
          <p className="text-page-fg-muted mb-12">
            Our track record speaks for itself across hundreds of successful automation deployments.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "500+", label: "Automation Projects Delivered", icon: <TrendingUp size={28} /> },
              { value: "80%", label: "Average Efficiency Gain", icon: <Zap size={28} /> },
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
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Capabilities</p>
            <h2 className="text-4xl font-extrabold">Key Features of AI Automation</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              Our AI automation platform is built with enterprise-grade capabilities to deliver measurable outcomes at scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Brain size={22} />, title: "Intelligent Process Discovery", desc: "Automatically identify automation opportunities by analyzing your existing workflows and systems." },
              { icon: <Settings size={22} />, title: "Adaptive Learning Engine", desc: "Continuously improves automation performance by learning from exceptions and user feedback." },
              { icon: <Shield size={22} />, title: "Enterprise-Grade Security", desc: "Role-based access control, encrypted pipelines, and full compliance with GDPR, SOC 2, and HIPAA." },
              { icon: <Cpu size={22} />, title: "Low-Code Automation Builder", desc: "Drag-and-drop automation designer enabling business teams to build workflows without code." },
              { icon: <GitBranch size={22} />, title: "Conditional Logic & Branching", desc: "Build sophisticated automation trees with dynamic branching based on real-time conditions." },
              { icon: <Layers size={22} />, title: "Scalable Microservices Architecture", desc: "Modular, cloud-native infrastructure that scales horizontally to handle any workload." },
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
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              {[
                { step: "01", title: "Process Assessment & Discovery", desc: "We audit your current workflows to identify high-impact automation opportunities and ROI potential." },
                { step: "02", title: "Automation Blueprint Design", desc: "Design scalable, modular automation architectures aligned to your business objectives." },
                { step: "03", title: "Build & Rapid Prototyping", desc: "Develop and validate automation pipelines through iterative sprints with continuous feedback." },
                { step: "04", title: "Testing & Quality Assurance", desc: "Rigorous end-to-end testing to ensure reliability, accuracy, and edge-case handling." },
                { step: "05", title: "Deployment & Continuous Optimization", desc: "Go live with zero-downtime deployments and ongoing performance monitoring and tuning." },
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
            <div
              className="relative rounded-3xl overflow-hidden border border-page-border min-h-100 flex items-center justify-center group"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}
            >

            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-page-bg">
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Why Choose Us</p>
            <h2 className="text-4xl font-extrabold">Benefits of Working With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Zap size={22} />, title: "Faster Time-to-Value", desc: "Deliver automation POCs in as little as 2 weeks with our agile delivery model." },
              { icon: <Shield size={22} />, title: "Enterprise Security", desc: "Compliance-ready architecture with end-to-end encrypted data pipelines." },
              { icon: <TrendingUp size={22} />, title: "Scalable by Design", desc: "Automation systems engineered to grow alongside your business effortlessly." },
              { icon: <Target size={22} />, title: "Industry-Specific Solutions", desc: "Automation tailored to your vertical - fintech, healthcare, legal, e-commerce, and more." },
              { icon: <Users size={22} />, title: "Dedicated Expert Team", desc: "A dedicated pod of automation engineers, AI architects, and delivery managers." },
              { icon: <CheckCircle size={22} />, title: "Proven Delivery Track Record", desc: "Battle-tested processes across 500+ successful automation engagements worldwide." },
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
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Expertise</p>
            <h2 className="text-4xl font-extrabold">AI Automation Expertise Tailored to You</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Automation Frameworks & Tools",
                points: ["UiPath, Automation Anywhere, Power Automate", "LangChain & LangGraph agent workflows", "Zapier, Make (Integromat), n8n", "Custom Python / Node automation pipelines"]},
              {
                title: "AI & ML Integration",
                points: ["LLM-powered document understanding", "OCR and intelligent data extraction", "Predictive models in automation loops", "Computer vision for visual automation"]},
              {
                title: "Cloud & Infrastructure",
                points: ["Cloud-native deployment (AWS, GCP, Azure)", "Docker & Kubernetes for automation pods", "Event-driven architectures with Kafka", "Serverless automation with Lambda / Cloud Functions"]},
              {
                title: "Monitoring & Analytics",
                points: ["Real-time automation dashboards", "Exception handling & self-healing bots", "ROI tracking and performance KPIs", "Full audit trails and compliance logging"]},
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

      {/* ── WHY OUR AI AUTOMATION ENGINEERS ── */}
      <section className="py-20 bg-page-bg">
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Engineers</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">
              Why Our AI Automation Engineers to Build Scalable, Reliable, and Intelligent Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Deep Automation Expertise", "AI-First Architecture", "Production-Grade Pipelines", "Security-First Mindset",
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
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
            <p className="text-page-fg-muted mt-3">Real AI automation solutions delivering real business results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Process Automation", title: "Claims Processing Bot", desc: "Automated end-to-end insurance claims workflow, reducing processing time from 3 days to 4 hours.", metric: "94% faster processing", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Document Automation", title: "Legal Contract Extractor", desc: "AI pipeline extracting key clauses from 50K+ contracts monthly with 97% accuracy.", metric: "97% accuracy", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
              { tag: "AI Automation", title: "Invoice & Finance Reconciliation", desc: "Fully automated accounts payable reconciliation saving 1,200+ manual hours per month.", metric: "1,200 hrs/month saved", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-page-card flex flex-col rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.15)]"
              >
                <div className="h-48 relative overflow-hidden bg-page-bg-alt shrink-0">
                  <Image src={w.image} alt={w.title} title={w.title} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0d1b2e] via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6 relative -mt-6 flex flex-col grow">
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-green-400">{w.tag}</p>
                  </div>
                  <h3 className="font-bold text-page-fg text-lg mb-2 group-hover:text-green-400 transition-colors pt-1">{w.title}</h3>
                  <p className="text-page-fg-muted text-sm leading-relaxed grow mb-4">{w.desc}</p>
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-page-border">
                    <Activity size={16} className="text-green-500" />
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">{w.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY INNOVATIONS ── */}
      <section className="py-20 bg-page-bg">
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What's New</p>
            <h2 className="text-4xl font-extrabold">Key Innovations in AI Automation</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Bot size={22} />, label: "Agentic Automation with LLMs" },
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
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Social Proof</p>
            <h2 className="text-4xl font-extrabold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ananya Mehta", role: "COO, InsureTech Pro", text: "Toadster automated our entire claims workflow. What used to take 3 days now runs in under 4 hours. Absolutely game-changing for our operations." },
              { name: "James Thornton", role: "CTO, LegalVault", text: "Their document automation pipeline processes our contracts 10x faster with near-perfect accuracy. The ROI paid for itself in 6 weeks." },
              { name: "Riya Kapoor", role: "VP Finance, FinCore", text: "We eliminated 1,200+ hours of manual reconciliation work every month. Toadster's AI automation is simply world-class." },
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
        </div>
      </section>

      {/* ── BLOGS ── */}
      {/* <section className="py-20 bg-page-bg-alt">
        <div className="service-page-container">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Latest Insights</p>
            <h2 className="text-4xl font-extrabold">Our Blogs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "AI Automation", title: "How AI Automation Is Transforming Enterprise Operations in 2026", date: "Mar 12, 2026" },
              { tag: "RPA + AI", title: "Beyond RPA: Why Intelligent Automation Is the Next Frontier", date: "Feb 20, 2026" },
              { tag: "Workflow AI", title: "Top 5 Business Processes You Should Automate with AI Today", date: "Jan 30, 2026" },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-page-card rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-colors cursor-pointer group"
              >
                <div className="h-36 bg-linear-to-br from-green-900/30 to-page-bg flex items-center justify-center">
                  <Zap size={40} className="text-green-700" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-green-400">{b.tag}</p>
                  <h3 className="font-bold text-page-fg mt-3 mb-2 group-hover:text-green-400 transition-colors">{b.title}</h3>
                  <p className="text-gray-500 text-xs">{b.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── FAQ ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Got Questions?</p>
            <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          {[
            { q: "What is AI Automation and how is it different from traditional automation?", a: "AI Automation combines artificial intelligence with traditional automation - allowing systems to handle complex, unstructured tasks, make intelligent decisions, and continuously improve, unlike rule-based automation which requires strict predefined logic." },
            { q: "How quickly can you deploy an AI automation solution?", a: "We typically deliver a working proof-of-concept within 2 weeks and full production deployment within 6-12 weeks, depending on scope and integrations required." },
            { q: "Can AI automation integrate with our existing tools and systems?", a: "Yes. Our automation solutions are built with an integration-first approach and can connect to any REST API, legacy system, ERP, CRM, cloud platform, or database." },
            { q: "How do you ensure the security and compliance of automation pipelines?", a: "We implement role-based access control, encrypted data pipelines, full audit trails, and support compliance frameworks including GDPR, SOC 2, HIPAA, and ISO 27001." },
            { q: "What industries do you serve with AI automation?", a: "We serve fintech, insurance, healthcare, legal, e-commerce, manufacturing, logistics, and more. Our solutions are tailored to the specific workflows and regulatory requirements of each industry." },
            { q: "What is the ROI of implementing AI automation?", a: "Most clients see positive ROI within 2-3 months. Common outcomes include 60-90% reduction in manual effort, significant error reduction, and cost savings of $500K-$2M+ annually depending on the scale of automation." },
          ].map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

    </div>
  )
}

import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import {
  Brain,
  Layers,
  Settings,
  Database,
  Network,
  Shield,
  Zap,
  ChevronDown,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Users,
  Target,
  Activity,
  Cloud,
  GitBranch,
  Eye,
  BarChart3,
  Cpu,
  Link2,
} from "lucide-react"

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

const clients = [
  "Paytm", "FireAI", "Noise", "MyChallan", "Axis Bank",
  "Reliance", "Tawuniya", "H&M", "Google",
]

export default function AIDevelopmentPage() {
  return (
    <div className="bg-page-bg text-page-fg">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#092a1a] to-page-bg py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">
            AI Development
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Business with the Top<br />
            <span className="text-green-400">AI Development</span> Company in USA
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">
            End-to-end AI development services — from strategy and data engineering to model training, deployment, and MLOps. We build production-grade AI that delivers measurable ROI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact">Book a Free Consultation</CTALink>
            <button onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl border border-page-border-strong text-page-fg font-semibold hover:bg-page-fg/5 transition-colors">
              See How It Works
            </button>
          </div>
          <div className="mt-14 flex flex-wrap gap-6 justify-center items-center opacity-50">
            {["Nike", "Unicef", "Nikon", "HP", "Startplay"].map((b) => (
              <span key={b} className="text-page-fg-subtle font-bold text-sm tracking-wide">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGO MARQUEE ── */}
      <section className="bg-page-bg-alt py-10 overflow-hidden border-y border-page-border">
        <p className="text-xl tracking-[0.35em] text-toadster-green font-bold text-center mb-5 uppercase">
          Trusted by Innovative Teams Worldwide
        </p>
        <div className="relative flex overflow-hidden">
          <div className="flex gap-14 animate-marquee whitespace-nowrap items-center px-4">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="text-page-fg-muted font-semibold text-sm opacity-60 shrink-0">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI DEVELOPMENT SERVICES ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What We Offer</p>
            <h2 className="text-4xl font-extrabold">Top AI Development</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services to Transform Your Business</h3>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              Comprehensive AI engineering services from ideation to production — tailored to your industry and scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Brain size={22} />, title: "Custom AI Model Development", desc: "Build bespoke AI/ML models trained on your proprietary data for maximum accuracy and business fit." },
              { icon: <Layers size={22} />, title: "LLM Integration & Fine-Tuning", desc: "Integrate GPT-4, Claude, Gemini, and fine-tune them on your domain for production-grade results." },
              { icon: <Database size={22} />, title: "Data Engineering & Pipelines", desc: "Design robust data pipelines that ingest, clean, transform, and serve data for AI systems." },
              { icon: <Cloud size={22} />, title: "MLOps & AI Infrastructure", desc: "CI/CD for ML, model versioning, drift detection, and automated retraining pipelines." },
              { icon: <Activity size={22} />, title: "AI-Powered Automation", desc: "Replace manual workflows with AI agents and intelligent automation at enterprise scale." },
              { icon: <Link2 size={22} />, title: "AI API & System Integration", desc: "Seamlessly integrate AI capabilities into your existing SaaS, ERP, CRM, and cloud stack." },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-page-bg-alt border border-page-border rounded-2xl p-6 hover:border-green-800/50 transition-colors"
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

      {/* ── KEY BENEFITS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Why It Matters</p>
            <h2 className="text-4xl font-extrabold">
              Key <span className="text-green-400">Benefits</span> of AI Development for Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Zap size={22} />, title: "Faster Time to Market", desc: "Accelerate product development with AI-assisted engineering, automated testing, and rapid prototyping." },
              { icon: <BarChart3 size={22} />, title: "Data-Driven Decision Making", desc: "Replace guesswork with AI-powered analytics that surface the right insights at the right time." },
              { icon: <Users size={22} />, title: "Superior Customer Experiences", desc: "Deliver hyper-personalized interactions across every touchpoint with intelligent AI systems." },
              { icon: <Target size={22} />, title: "Precision & Accuracy at Scale", desc: "AI models that learn from your data to achieve enterprise-grade accuracy across complex tasks." },
              { icon: <Cpu size={22} />, title: "Operational Cost Reduction", desc: "Automate repetitive, high-volume tasks to significantly cut operational overhead and error rates." },
              { icon: <TrendingUp size={22} />, title: "Sustainable Competitive Advantage", desc: "Build proprietary AI capabilities that compound over time and are hard for competitors to replicate." },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-page-bg-alt border border-page-border rounded-2xl p-6 flex gap-5 hover:border-green-800/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-bold text-page-fg mb-1">{b.title}</h3>
                  <p className="text-page-fg-muted text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section id="our-process" className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">Our Process in AI Development</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { step: "01", title: "Discovery & AI Strategy", desc: "We assess your data, goals, and constraints to design a high-ROI AI roadmap for your business." },
                { step: "02", title: "Data Engineering & Preparation", desc: "Build pipelines to collect, clean, label, and structure your data for reliable model training." },
                { step: "03", title: "Model Development & Training", desc: "Select, architect, and train the right model — from fine-tuned LLMs to custom deep learning networks." },
                { step: "04", title: "Evaluation, Testing & Iteration", desc: "Rigorously evaluate with offline/online metrics and iterate until production benchmarks are met." },
                { step: "05", title: "Deployment, MLOps & Monitoring", desc: "Ship to production with full CI/CD, observability, drift detection, and continuous improvement." },
              ].map((p) => (
                <div key={p.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-extrabold text-green-900 shrink-0 w-12">{p.step}</span>
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
                backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE OFFERINGS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Full Suite</p>
            <h2 className="text-4xl font-extrabold">Explore Our Core AI Development Offerings</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              A complete AI engineering capability stack for every stage of your AI journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Brain size={22} />, title: "Deep Learning Models", desc: "CNNs, RNNs, Transformers — custom architectures for vision, NLP, and tabular data." },
              { icon: <Settings size={22} />, title: "ML Model Training", desc: "Supervised, unsupervised, and reinforcement learning pipelines at scale." },
              { icon: <GitBranch size={22} />, title: "MLOps & CI/CD for ML", desc: "Automated model versioning, testing, and deployment with full observability." },
              { icon: <Eye size={22} />, title: "Computer Vision AI", desc: "Object detection, image classification, OCR, and video analytics systems." },
              { icon: <Network size={22} />, title: "Recommendation Engines", desc: "Personalized recommendation systems for e-commerce, media, and SaaS." },
              { icon: <Database size={22} />, title: "Predictive Analytics", desc: "Forecasting, anomaly detection, and churn prediction models for business KPIs." },
              { icon: <Shield size={22} />, title: "Responsible AI & Governance", desc: "Fairness, explainability, and compliance tooling for enterprise AI deployments." },
              { icon: <Cloud size={22} />, title: "Cloud AI (AWS / GCP / Azure)", desc: "Managed AI infrastructure with auto-scaling, cost optimization, and HA guarantees." },
            ].map((o) => (
              <div
                key={o.title}
                className="bg-page-bg border border-page-border rounded-2xl p-6 hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                  {o.icon}
                </div>
                <h3 className="font-semibold text-page-fg mb-2">{o.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Predictive AI", title: "InventoryIQ", desc: "Built a demand forecasting model reducing overstock costs by $1.8M/year for a retail chain across 300+ SKUs.", metric: "$1.8M saved", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Computer Vision", title: "SafeGuard AI", desc: "Deployed a real-time workplace safety detection system with 98.5% accuracy on CCTV feeds across 50 facilities.", metric: "98.5% accuracy", image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80" },
              { tag: "MLOps", title: "StreamlineML", desc: "Redesigned a fintech company's ML infrastructure — reduced model deployment time from 2 weeks to 4 hours.", metric: "5× faster deploys", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-page-bg-alt flex flex-col rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.15)]"
              >
                <div className="h-48 relative overflow-hidden bg-page-bg shrink-0">
                  <img src={w.image} alt={w.title} title={w.title} loading="lazy" decoding="async" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1628] via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6 relative -mt-6 flex flex-col grow">
                  <div className="mb-4">
                    <span className="text-xs text-green-400 font-semibold bg-green-950 px-3 py-1 rounded-full border border-green-800/50 shadow-sm">{w.tag}</span>
                  </div>
                  <h3 className="font-bold text-page-fg text-lg mb-2 group-hover:text-green-400 transition-colors pt-1">{w.title}</h3>
                  <p className="text-page-fg-muted text-sm mb-4 leading-relaxed grow">{w.desc}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-page-border mt-auto">
                    <Activity size={16} className="text-green-500" />
                    <p className="text-green-400 font-semibold text-sm">{w.metric}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-page-bg-alt py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">At a Glance</p>
          <h2 className="text-3xl font-extrabold mb-12">
            Highlights of <span className="text-green-400">Achievements</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "AI Projects Delivered", icon: <TrendingUp size={26} /> },
              { value: "99.9%", label: "Uptime Guaranteed", icon: <Shield size={26} /> },
              { value: "10+", label: "Years of Experience", icon: <Clock size={26} /> },
              { value: "24/7", label: "Client Support", icon: <Users size={26} /> },
            ].map((s) => (
              <div key={s.label} className="bg-page-bg-alt rounded-2xl p-6 border border-page-border">
                <div className="text-green-400 flex justify-center mb-3">{s.icon}</div>
                <div className="text-4xl font-extrabold text-page-fg mb-2">{s.value}</div>
                <div className="text-page-fg-muted text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OUR AI DEVELOPERS ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Developers</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">
              Hire Our AI Developers to Build Scalable, Secure, and Smart Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "PyTorch & TensorFlow", "LLM Fine-Tuning", "MLOps & CI/CD for ML", "Transformer Architecture",
              "Computer Vision (YOLO/EfficientNet)", "NLP & Text AI", "Reinforcement Learning", "Feature Engineering",
              "Cloud AI (AWS SageMaker / Vertex AI)", "Docker & Kubernetes for ML", "Model Interpretability (SHAP)", "Vector Databases",
              "Real-time Inference APIs", "Distributed Training", "Data Labeling & Annotation", "Responsible AI & Fairness",
            ].map((cap) => (
              <div
                key={cap}
                className="bg-page-bg-alt rounded-xl p-4 border border-page-border flex items-center gap-3 hover:border-green-800/40 transition-colors"
              >
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-page-fg-subtle text-sm font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY INNOVATIONS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What's New</p>
            <h2 className="text-4xl font-extrabold">Key Innovations in AI Development</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Brain size={22} />, label: "Foundation Models & LLMs (GPT-4, Gemini)" },
              { icon: <Network size={22} />, label: "Multi-Agent AI Frameworks (CrewAI, AutoGen)" },
              { icon: <Database size={22} />, label: "Vector Databases & RAG Pipelines" },
              { icon: <Layers size={22} />, label: "Multimodal AI (Text + Vision + Audio)" },
              { icon: <GitBranch size={22} />, label: "AI-Native CI/CD & MLOps Platforms" },
              { icon: <Shield size={22} />, label: "AI Safety, Alignment & Governance" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-page-bg rounded-2xl p-5 border border-page-border flex items-center gap-4 hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">
                  {item.icon}
                </div>
                <span className="text-page-fg font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 justify-center items-center opacity-60">
            {["AZRobot", "Startup.io", "HealthAI", "amazon", "Proxima", "Meta"].map((b) => (
              <span key={b} className="text-page-fg-muted font-bold text-sm border border-page-border px-4 py-2 rounded-lg">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Social Proof</p>
            <h2 className="text-4xl font-extrabold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Vikram Nair", role: "CTO, LogiStack", text: "Toadster's AI team rebuilt our entire forecasting system from scratch. The new model outperforms our previous solution by 40% — and deploys in hours, not weeks." },
              { name: "Anjali Kapoor", role: "Head of Data, MediCore", text: "They built a clinical NLP pipeline that extracts diagnoses from doctor's notes with 97% precision. The time saved is extraordinary — 6 hours of manual work per day, gone." },
              { name: "David Park", role: "Founder, VisionLabs", text: "Our computer vision product went from PoC to production in 8 weeks with Toadster. The model's accuracy exceeded every benchmark we set." },
            ].map((t) => (
              <div key={t.name} className="bg-page-bg-alt rounded-2xl p-6 border border-page-border">
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
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Harness the Power of<br />
            <span className="text-green-400">AI for Your Business?</span>
          </h2>
          <p className="text-page-fg-muted mb-4">
            Let our AI engineers build production-grade systems that deliver real, measurable results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {[
              { label: "Deep AI Expertise", sub: "PyTorch, TensorFlow, LLMs & more" },
              { label: "Custom Solutions", sub: "Tailored to your data & use case" },
              { label: "Proven Results", sub: "500+ AI projects delivered" },
            ].map((item) => (
              <div key={item.label} className="bg-page-bg-alt rounded-xl px-5 py-3 border border-page-border text-left">
                <div className="text-page-fg font-semibold text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" className="text-lg" title="Talk to our AI development team">
              Chat With Us
            </CTALink>
            <CTALink
              to="/services/ai-consultation"
              className="bg-transparent border border-page-border-strong hover:bg-page-fg/5 text-lg"
              title="Explore AI Consultation"
            >
              Get AI Consultation
            </CTALink>
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      {/* <section className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Latest Insights</p>
            <h2 className="text-4xl font-extrabold">Our Blogs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "AI Development", title: "How to Build Production-Ready AI Systems in 2026", date: "Feb 22, 2026" },
              { tag: "MLOps", title: "MLOps Best Practices: From Experiment to Production", date: "Feb 8, 2026" },
              { tag: "AI Strategy", title: "How to Choose the Right AI Model for Your Business Use Case", date: "Jan 25, 2026" },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-page-bg-alt rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-colors cursor-pointer group"
              >
                <div className="h-36 bg-linear-to-br from-green-900/30 to-page-bg flex items-center justify-center">
                  <Code2 size={40} className="text-green-700" />
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
            { q: "What does end-to-end AI development include?", a: "It covers the full lifecycle: data strategy, data engineering, model design and training, evaluation, deployment, MLOps infrastructure, and ongoing monitoring and maintenance." },
            { q: "How long does it take to build a custom AI solution?", a: "A PoC typically takes 2–4 weeks. Full production deployments range from 8–20 weeks depending on data readiness, model complexity, and integration scope." },
            { q: "Can you integrate AI into our existing systems?", a: "Yes. We design AI solutions with an integration-first approach and can connect to any REST API, database, cloud service, CRM, or ERP." },
            { q: "How do you ensure the quality and accuracy of AI models?", a: "We use rigorous evaluation frameworks including offline metrics (precision, recall, F1, RMSE), A/B testing, shadow deployments, and continuous monitoring with automated alerts on performance degradation." },
            { q: "What industries do you build AI solutions for?", a: "We serve fintech, healthcare, legal, e-commerce, logistics, manufacturing, media, and more. Our AI solutions are always tailored to the specific workflows and compliance requirements of each domain." },
            { q: "Do you provide post-deployment support and maintenance?", a: "Absolutely. We offer managed AI service plans with 24/7 monitoring, model retraining on new data, drift detection, and ongoing optimizations to keep your AI performing at its best." },
          ].map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

    </div>
  )
}

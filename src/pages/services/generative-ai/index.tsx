import { useState } from "react"
import {
  Code2,
  Image,
  FileText,
  Music,
  Video,
  MessageSquare,
  Brain,
  Zap,
  Shield,
  Settings,
  Database,
  Network,
  ChevronDown,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Users,
  Target,
  BarChart3,
  Layers,
  Wand2,
  Cpu,
} from "lucide-react"
import { CTALink } from "@/components/CTALink";

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

export default function GenerativeAIPage() {

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
            Generative AI
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Business with the Top<br />
            <span className="text-green-400">Generative AI</span> Company in USA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Leverage the power of next-gen AI/ML to be a leading AI provider of AI solutions for businesses. We help you build AI-driven products, content engines, and automation workflows.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact">Book a Free Consultation</CTALink>
            <button onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
              See How It Works
            </button>
          </div>
          {/* Trusted logos strip */}
          <div className="mt-14 flex flex-wrap gap-6 justify-center items-center opacity-50">
            {["Nike", "Unicef", "Nikon", "HP", "Startplay"].map((b) => (
              <span key={b} className="text-gray-300 font-bold text-sm tracking-wide">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGO MARQUEE ── */}
      <section className="bg-[#0a1628] py-10 overflow-hidden border-y border-white/5">
        <p className="text-xl tracking-[0.35em] text-toadster-green font-bold text-center mb-5 uppercase">
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

      {/* ── GENERATIVE AI DEVELOPMENT SERVICES ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What We Offer</p>
            <h2 className="text-4xl font-extrabold">Top Generative AI Development</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services to Transform Your Business</h3>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              As a top Generative AI company in USA, we offer comprehensive AI development services tailored to your unique business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Wand2 size={22} />, title: "Agentic AI & Actions Development", desc: "Build autonomous AI agents that plan, reason, and act to complete complex multi-step tasks." },
              { icon: <Image size={22} />, title: "AI-Enabled & AI-Powered Products", desc: "Embed generative AI into your product workflows for next-gen user experiences." },
              { icon: <FileText size={22} />, title: "Generative AI for Customer Service", desc: "Deploy LLM-powered support agents that resolve queries intelligently, 24/7." },
              { icon: <Code2 size={22} />, title: "Multi-LLM & Integration Services", desc: "Orchestrate multiple LLMs (GPT-4, Claude, Gemini) for complex AI pipelines." },
              { icon: <BarChart3 size={22} />, title: "Generative AI & Analytics", desc: "Combine generative AI with business analytics for intelligent data storytelling." },
              { icon: <Settings size={22} />, title: "Generative AI & LLM Development", desc: "Custom LLM fine-tuning, RAG pipelines, and private model deployments." },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-[#0a1628] border border-white/5 rounded-2xl p-6 hover:border-green-800/50 transition-colors"
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

      {/* ── KEY BENEFITS ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Why It Matters</p>
            <h2 className="text-4xl font-extrabold">
              Key <span className="text-green-400">Benefits</span> of Generative AI Development for Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Zap size={22} />, title: "Faster Content Generation at Scale", desc: "Automate creation of text, images, code, and media at 10x human speed — reduce time-to-market dramatically." },
              { icon: <Users size={22} />, title: "Greater Question Matching with Custom Chatbots", desc: "Deploy AI assistants trained on your data for highly accurate, brand-aligned customer interactions." },
              { icon: <MessageSquare size={22} />, title: "Enhanced Customer Experience With AI Chatbots", desc: "Build intelligent conversational interfaces that understand context and provide human-like responses." },
              { icon: <Target size={22} />, title: "Personalized Real-Time Engagement", desc: "Deliver hyper-personalized content and recommendations powered by generative models." },
              { icon: <Cpu size={22} />, title: "Efficient Business Automation", desc: "Automate repetitive knowledge-work tasks — documentation, reporting, code reviews — with AI." },
              { icon: <TrendingUp size={22} />, title: "Competitive Product & Service Offerings", desc: "Launch AI-native products that differentiate your brand in a rapidly evolving market." },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-[#0a1628] border border-white/5 rounded-2xl p-6 flex gap-5 hover:border-green-800/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section id="our-process" className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">
              Our Process in Generative AI Development
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { step: "01", title: "AI Strategy & Use Case Identification", desc: "We audit your workflows and identify the highest-ROI generative AI opportunities." },
                { step: "02", title: "Data Collection & Integration", desc: "Curate, clean, and prepare your proprietary data for model training and RAG pipelines." },
                { step: "03", title: "LLM Selection & Model Fine-Tuning", desc: "Select the right foundation model and fine-tune it on your domain-specific data." },
                { step: "04", title: "Solution Development & Testing", desc: "Build, evaluate, and iterate on AI features with rigorous quality benchmarks." },
                { step: "05", title: "Deployment, Monitoring & Support", desc: "Deploy to production with full observability, guardrails, and continuous improvement." },
              ].map((p) => (
                <div key={p.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-extrabold text-green-900 shrink-0 w-12">{p.step}</span>
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
                backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >

            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE OFFERINGS ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Full Suite</p>
            <h2 className="text-4xl font-extrabold">Explore Our Core Offerings</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              We offer a comprehensive suite of generative AI solutions built for modern enterprises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <FileText size={22} />, title: "Content Generation", desc: "Automated blogs, ad copy, product descriptions, and reports at scale." },
              { icon: <Code2 size={22} />, title: "Code Generation", desc: "AI pair-programming, code review, and automated testing pipelines." },
              { icon: <Image size={22} />, title: "Image & Media AI", desc: "Stable Diffusion, DALL-E, and custom image generation pipelines." },
              { icon: <MessageSquare size={22} />, title: "Conversational AI", desc: "LLM-powered chatbots and assistants with memory and tool use." },
              { icon: <Layers size={22} />, title: "RAG & Knowledge Bases", desc: "Retrieval-augmented generation on your internal documents and databases." },
              { icon: <Music size={22} />, title: "Audio & Voice AI", desc: "Text-to-speech, voice cloning, and audio synthesis solutions." },
              { icon: <Video size={22} />, title: "Video AI", desc: "AI video summarization, generation, and editing automation." },
              { icon: <Database size={22} />, title: "Data Synthesis", desc: "Generate synthetic training data to bootstrap AI models without privacy risk." },
            ].map((o) => (
              <div
                key={o.title}
                className="bg-[#050d18] border border-white/5 rounded-2xl p-6 hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                  {o.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{o.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "LLM", title: "VHW", desc: "Built an LLM-powered health assistant that triages patient queries and reduces ER visits by 40%.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Generative AI", title: "Top Bakers", desc: "Generated 50,000+ personalized product descriptions monthly using fine-tuned GPT-4 for an e-commerce client.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" },
              { tag: "AI Agent", title: "Travel Map", desc: "AI travel planning agent that autonomously searches, compares, and books travel itineraries.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-[#0a1628] flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-green-800/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.15)]"
              >
                <div className="h-48 relative overflow-hidden bg-[#050d18] shrink-0">
                  <img src={w.image} alt={w.title} title={w.title} loading="lazy" decoding="async" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1628] via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6 relative -mt-6 flex flex-col grow">
                  <div className="mb-4">
                    <span className="text-xs text-green-400 font-semibold bg-green-950 px-3 py-1 rounded-full border border-green-800/50 shadow-sm">{w.tag}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-green-400 transition-colors pt-1">{w.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed grow">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="bg-[#0a1628] py-16 px-6">
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
              <div key={s.label} className="bg-[#0a1628] rounded-2xl p-6 border border-white/5">
                <div className="text-green-400 flex justify-center mb-3">{s.icon}</div>
                <div className="text-4xl font-extrabold text-white mb-2">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OUR AI DEVELOPERS ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Developers</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">
              Hire Our AI Developers to Build Scalable, Secure, and Smart Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "LLM Fine-Tuning Expert", "RAG Pipeline Design", "Multi-modal AI", "Prompt Engineering",
              "GPT-4 / Claude / Gemini", "Diffusion Model Pipelines", "Vector DB (Pinecone / Weaviate)", "AI Safety & Guardrails",
              "Cloud Deployment (AWS/GCP)", "AI Observability & Logging", "Custom Model Training", "Agent Orchestration",
              "Real-time Streaming LLMs", "AI Cost Optimization", "Domain-Specific Fine-Tuning", "Compliance-Ready AI",
            ].map((cap) => (
              <div
                key={cap}
                className="bg-[#0a1628] rounded-xl p-4 border border-white/5 flex items-center gap-3 hover:border-green-800/40 transition-colors"
              >
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY INNOVATIONS ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What's New</p>
            <h2 className="text-4xl font-extrabold">Key Innovations in AI Development</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Code2 size={22} />, label: "GPT-4o & GPT-4o-mini" },
              { icon: <Brain size={22} />, label: "Reasoning Models (o1 / o3)" },
              { icon: <Network size={22} />, label: "Multi-Agent Frameworks" },
              { icon: <Database size={22} />, label: "Vector Databases & RAG" },
              { icon: <Layers size={22} />, label: "Multimodal AI (Text+Image+Audio)" },
              { icon: <Shield size={22} />, label: "AI Safety & Alignment Tooling" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#050d18] rounded-2xl p-5 border border-white/5 flex items-center gap-4 hover:border-green-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">
                  {item.icon}
                </div>
                <span className="text-white font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          {/* Tech logos placeholder row */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center items-center opacity-60">
            {["AZRobot", "Startup.io", "HealthAI", "amazon", "Proxima", "Meta"].map((b) => (
              <span key={b} className="text-gray-400 font-bold text-sm border border-white/10 px-4 py-2 rounded-lg">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Social Proof</p>
            <h2 className="text-4xl font-extrabold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Arjun Sharma", role: "Head of Product, FinFlow", text: "Toadster's generative AI team helped us ship a smart document processing feature in 4 weeks. The accuracy blew us away — 97% on our test set." },
              { name: "Priya Dubey", role: "CTO, ContentScalr", text: "We needed to generate 100K product descriptions monthly. Toadster built a fine-tuned pipeline that saved us $300K/year in content costs." },
            ].map((t) => (
              <div key={t.name} className="bg-[#0a1628] rounded-2xl p-6 border border-white/5">
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
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Harness the Power of<br />
            <span className="text-green-400">AI for Your Business?</span>
          </h2>
          <p className="text-gray-400 mb-4">
            We help our clients succeed by creating brand identities, digital experiences, and print materials.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {[
              { label: "Expertise in AI", sub: "From LLMs to diffusion models" },
              { label: "Custom Solutions", sub: "Tailored to your exact use case" },
              { label: "Proven Results", sub: "500+ AI projects delivered" },
            ].map((item) => (
              <div key={item.label} className="bg-[#0a1628] rounded-xl px-5 py-3 border border-white/5 text-left">
                <div className="text-white font-semibold text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
          <button className="px-10 py-4 rounded-xl bg-[#1C3829] text-white font-semibold text-lg hover:bg-green-800 transition-colors">
            Chat With Us
          </button>
        </div>
      </section>

      {/* ── BLOGS ── */}
      {/* <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Latest Insights</p>
            <h2 className="text-4xl font-extrabold">Our Blogs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Generative AI", title: "How Generative AI is Transforming Content Creation in 2026", date: "Feb 20, 2026" },
              { tag: "LLMs", title: "Fine-Tuning vs RAG: Which Approach is Right for Your Business?", date: "Feb 5, 2026" },
              { tag: "AI Trends", title: "Top 10 Generative AI Use Cases Driving ROI in 2026", date: "Jan 22, 2026" },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-[#0a1628] rounded-2xl overflow-hidden border border-white/5 hover:border-green-800/40 transition-colors cursor-pointer group"
              >
                <div className="h-36 bg-linear-to-br from-green-900/30 to-[#050d18] flex items-center justify-center">
                  <Sparkles size={40} className="text-green-700" />
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
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Got Questions?</p>
            <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          {[
            { q: "What is Generative AI and how can it work?", a: "Generative AI refers to models like GPT-4, DALL-E, and Stable Diffusion that can generate text, images, code, audio, and more from input prompts. It powers chatbots, content engines, code assistants, and creative tools." },
            { q: "How can Generative AI benefit my business?", a: "It can dramatically reduce costs in content creation, customer support, software development, and data analysis — while improving quality and speed of output at scale." },
            { q: "How do you ensure security and privacy of AI solutions?", a: "We use private model deployments, role-based access control, data anonymization, and encryption to ensure your proprietary data never leaves your secure environment." },
            { q: "Can you build custom Generative AI models for our needs?", a: "Yes. We fine-tune foundation models on your domain-specific data to create highly accurate, brand-aligned AI systems that outperform generic solutions." },
            { q: "How long does it take to build a Generative AI solution?", a: "A typical PoC takes 2–3 weeks. Full production deployments range from 6–16 weeks depending on complexity, data availability, and integration requirements." },
            { q: "Can you provide ongoing support and maintenance services?", a: "Absolutely. We offer 24/7 monitoring, model drift detection, performance optimization, and continuous fine-tuning as part of our managed AI service plans." },
          ].map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

    </div>
  )
}

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  FileText,
  MessageSquare,
  Search,
  Languages,
  Brain,
  BarChart3,
  Mic,
  Filter,
  ChevronDown,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Users,
  Shield,
  Zap,
  Target,
  Database,
  Network,
  Code2,
  Layers,
  Eye,
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

export default function NLPServicesPage() {
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
            NLP Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Business with the Top<br />
            <span className="text-green-400">NLP Services</span> Company in USA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Leverage the power of Natural Language Processing to extract insights from text, automate language tasks, and build intelligent communication systems that understand your customers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 rounded-xl bg-[#1C3829] text-white font-semibold hover:bg-green-800 transition-colors"
            >
              Book a Free Consultation
            </button>
            <button onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
              See How It Works
            </button>
          </div>
          <div className="mt-14 flex flex-wrap gap-6 justify-center items-center opacity-50">
            {["Nike", "Unicef", "Nikon", "HP", "Startplay"].map((b) => (
              <span key={b} className="text-gray-300 font-bold text-sm tracking-wide">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGO MARQUEE ── */}
      <section className="bg-[#0a1628] py-10 overflow-hidden border-y border-white/5">
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

      {/* ── NLP DEVELOPMENT SERVICES ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">What We Offer</p>
            <h2 className="text-4xl font-extrabold">Top NLP Development</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services to Transform Your Business</h3>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              As a top NLP services company, we build advanced text and language AI solutions tailored to your unique business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <FileText size={22} />, title: "Text Classification & Categorization", desc: "Automatically tag, classify, and route documents, emails, and support tickets with high accuracy." },
              { icon: <Search size={22} />, title: "Semantic Search & Information Retrieval", desc: "Build intelligent search engines that understand intent, not just keywords." },
              { icon: <MessageSquare size={22} />, title: "Sentiment & Opinion Analysis", desc: "Extract customer sentiment from reviews, surveys, and social media at scale." },
              { icon: <Languages size={22} />, title: "Machine Translation & Localization", desc: "AI-powered translation pipelines supporting 100+ languages with domain fine-tuning." },
              { icon: <Brain size={22} />, title: "Named Entity Recognition (NER)", desc: "Identify people, organizations, locations, and custom entities in unstructured text." },
              { icon: <Mic size={22} />, title: "Speech-to-Text & Voice Analytics", desc: "Transcribe audio, analyze call center conversations, and extract actionable voice insights." },
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
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Why It Matters</p>
            <h2 className="text-4xl font-extrabold">
              Key <span className="text-green-400">Benefits</span> of NLP Development for Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Zap size={22} />, title: "Faster Document Processing at Scale", desc: "Process thousands of documents, contracts, and reports in seconds — reducing manual review time by 90%." },
              { icon: <Users size={22} />, title: "Enhanced Customer Understanding", desc: "Mine customer feedback, reviews, and chats to deeply understand needs, pain points, and intent." },
              { icon: <MessageSquare size={22} />, title: "Smarter Conversational Interfaces", desc: "Build chatbots and virtual assistants that truly understand language nuance and context." },
              { icon: <Target size={22} />, title: "Precision Targeting & Personalization", desc: "Use NLP-driven user profiling to deliver highly personalized experiences and recommendations." },
              { icon: <BarChart3 size={22} />, title: "Automated Reporting & Insights", desc: "Extract structured data and KPIs from unstructured text sources automatically." },
              { icon: <TrendingUp size={22} />, title: "Competitive Intelligence Advantage", desc: "Monitor market signals, competitor mentions, and industry trends from text at machine speed." },
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
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">Our Process in NLP Development</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { step: "01", title: "Discovery & Use Case Definition", desc: "We analyze your text data sources and identify the highest-value NLP automation opportunities." },
                { step: "02", title: "Data Collection & Annotation", desc: "Curate, clean, and label your text datasets for model training and evaluation." },
                { step: "03", title: "Model Selection & Fine-Tuning", desc: "Select the best NLP model (BERT, GPT, T5, etc.) and fine-tune on your domain data." },
                { step: "04", title: "Solution Development & Evaluation", desc: "Build the NLP pipeline, evaluate with precision/recall/F1 benchmarks, and iterate." },
                { step: "05", title: "Deployment, Monitoring & Maintenance", desc: "Deploy APIs into your stack with observability, drift detection, and retraining pipelines." },
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
                backgroundImage: "url('/assets/services/nlp1.webp')",
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
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Full Suite</p>
            <h2 className="text-4xl font-extrabold">Explore Our Core NLP Offerings</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              End-to-end NLP capabilities covering every language AI use case your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Filter size={22} />, title: "Text Summarization", desc: "Condense long documents, reports, and articles into concise summaries automatically." },
              { icon: <Search size={22} />, title: "Question Answering Systems", desc: "Deploy AI systems that answer natural language questions from your knowledge base." },
              { icon: <Eye size={22} />, title: "Document Intelligence", desc: "Extract structured data from invoices, contracts, forms, and PDFs with NLP." },
              { icon: <Mic size={22} />, title: "Speech & Voice NLP", desc: "Combine ASR with NLP to analyze call center transcripts and voice interactions." },
              { icon: <Languages size={22} />, title: "Multilingual NLP", desc: "Build language-agnostic models supporting 100+ languages for global deployments." },
              { icon: <Database size={22} />, title: "Knowledge Graph Extraction", desc: "Build structured knowledge graphs from unstructured text corpora." },
              { icon: <Layers size={22} />, title: "Text-to-SQL & Data Querying", desc: "Let users query databases using plain English with NLP-to-SQL pipelines." },
              { icon: <Network size={22} />, title: "Topic Modeling & Clustering", desc: "Discover hidden themes and patterns in large text datasets automatically." },
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
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Sentiment Analysis", title: "RetailPulse", desc: "Built a real-time sentiment analysis pipeline processing 500K+ customer reviews/day with 94% accuracy for a retail giant.", image: "/assets/services/nlp2.webp" },
              { tag: "Document AI", title: "LegalMind", desc: "Deployed a contract intelligence system extracting 40+ entity types from legal documents, saving 2000+ man-hours/month.", image: "/assets/services/nlp3.webp" },
              { tag: "Multilingual NLP", title: "GlobalSupport", desc: "Developed a multilingual support classifier supporting 18 languages, reducing misrouted tickets by 76%.", image: "/assets/services/nlp4.webp" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-[#0a1628] flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-green-800/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.15)]"
              >
                <div className="h-48 relative overflow-hidden bg-[#050d18] shrink-0">
                  <img src={w.image} alt={w.title} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
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

      {/* ── STATS ── */}
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">At a Glance</p>
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

      {/* ── WHY OUR NLP DEVELOPERS ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Our Developers</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">
              Hire Our NLP Developers to Build Scalable, Secure, and Smart Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "BERT / RoBERTa Expert", "GPT Fine-Tuning", "Transformer Architecture", "Hugging Face Ecosystem",
              "spaCy & NLTK Mastery", "Named Entity Recognition", "Sentiment Analysis", "Text Classification",
              "Multilingual Models", "Speech & ASR Integration", "Vector Embeddings", "RAG & Semantic Search",
              "Custom Annotation Pipelines", "Model Distillation", "Cloud AI (AWS/GCP/Azure)", "Low-latency NLP APIs",
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
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">What's New</p>
            <h2 className="text-4xl font-extrabold">Key Innovations in NLP Development</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Code2 size={22} />, label: "LLM-Powered NLP Pipelines" },
              { icon: <Brain size={22} />, label: "Instruction-Tuned Models (GPT-4, Gemini)" },
              { icon: <Network size={22} />, label: "Agentic NLP Workflows" },
              { icon: <Database size={22} />, label: "Vector Search & Embeddings (OpenAI, Cohere)" },
              { icon: <Layers size={22} />, label: "Multilingual Transformer Models" },
              { icon: <Shield size={22} />, label: "Privacy-Preserving NLP (On-Premise)" },
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
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Social Proof</p>
            <h2 className="text-4xl font-extrabold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Karan Mehta", role: "Head of Data, InsureRight", text: "Toadster's NLP team built us a document extraction pipeline that processes 50K insurance forms daily. Accuracy is at 96% — better than our manual team." },
              { name: "Sarah Lin", role: "CTO, FeedbackLoop", text: "We deployed their sentiment analysis API across our entire feedback system. Reduced our analyst workload by 80% in the first month alone." },
              { name: "Raj Patel", role: "VP Engineering, TalkSmart", text: "Their multilingual NLP solution handles 12 languages for our global support system. Customer satisfaction scores improved by 35% post-deployment." },
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
            Let our NLP experts build intelligent language systems that understand your customers — at scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {[
              { label: "NLP Expertise", sub: "BERT, GPT, T5, spaCy & more" },
              { label: "Custom Solutions", sub: "Tailored to your text data" },
              { label: "Proven Results", sub: "500+ AI projects delivered" },
            ].map((item) => (
              <div key={item.label} className="bg-[#0a1628] rounded-xl px-5 py-3 border border-white/5 text-left">
                <div className="text-white font-semibold text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-10 py-4 rounded-xl bg-[#1C3829] text-white font-semibold text-lg hover:bg-green-800 transition-colors"
          >
            Chat With Us
          </button>
        </div>
      </section>

      {/* ── BLOGS ── */}
      {/* <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Latest Insights</p>
            <h2 className="text-4xl font-extrabold">Our Blogs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "NLP", title: "How NLP is Revolutionizing Customer Service in 2026", date: "Feb 18, 2026" },
              { tag: "LLMs", title: "BERT vs GPT-4: Which NLP Model Fits Your Use Case?", date: "Feb 2, 2026" },
              { tag: "Text AI", title: "Top 8 NLP Use Cases Driving ROI for Enterprises", date: "Jan 15, 2026" },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-[#0a1628] rounded-2xl overflow-hidden border border-white/5 hover:border-green-800/40 transition-colors cursor-pointer group"
              >
                <div className="h-36 bg-linear-to-br from-green-900/30 to-[#050d18] flex items-center justify-center">
                  <Languages size={40} className="text-green-700" />
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
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Got Questions?</p>
            <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          {[
            { q: "What is NLP and how can it benefit my business?", a: "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. It powers chatbots, sentiment analysis, document extraction, search, and translation — automating language-heavy workflows at scale." },
            { q: "How long does it take to build an NLP solution?", a: "A typical PoC takes 2–3 weeks. Full production deployments range from 6–14 weeks depending on data availability, model complexity, and integration requirements." },
            { q: "Can you build NLP models for industry-specific domains?", a: "Absolutely. We fine-tune models on your domain-specific text data — whether legal, medical, financial, or e-commerce — to achieve significantly higher accuracy than generic models." },
            { q: "How do you ensure security and privacy of our text data?", a: "We support on-premise deployments, private VPCs, data anonymization, and encryption at rest and in transit. Your proprietary data never leaves your secure environment." },
            { q: "Can your NLP solutions handle multiple languages?", a: "Yes. We build multilingual NLP systems supporting 100+ languages using models like mBERT, XLM-R, and custom multilingual fine-tuned transformers." },
            { q: "Do you provide ongoing support and model maintenance?", a: "Yes — we offer managed NLP service plans including 24/7 monitoring, model drift detection, retraining on new data, and continuous performance improvements." },
          ].map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

    </div>
  )
}

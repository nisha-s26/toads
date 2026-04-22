import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Brain, Database, Network, Shield, TrendingUp, Clock, Users, Zap, ChevronDown, CheckCircle, Star, Settings, Activity, Eye, Server, Cpu } from "lucide-react"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 py-5">
      <button className="flex items-center justify-between w-full text-left" onClick={() => setOpen(!open)}>
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown className={`shrink-0 text-green-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} size={20} />
      </button>
      {open && <p className="mt-3 text-gray-400 text-sm leading-relaxed">{answer}</p>}
    </div>
  )
}

const clients = ["Paytm", "FireAI", "Noise", "MyChallan", "Axis Bank", "Reliance", "Tawuniya", "H&M", "Google"]

export default function LLMDevelopmentPage() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#050d18] text-white">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#092a1a] to-[#050d18] py-28 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">LLM Development</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Build Powerful Custom <span className="text-green-400">Large Language Models</span><br />for Your Business
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">From fine-tuning existing LLMs to training custom foundation models — we help enterprises unlock the full potential of large language models for their unique data, domain, and use cases.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-8 py-3 rounded-xl bg-[#1C3829] text-white font-semibold hover:bg-green-800 transition-colors">Book a Free Consultation</button>
            <button onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">See How It Works</button>
          </div>
          <div className="mt-14 flex flex-wrap gap-6 justify-center items-center opacity-50">
            {["Nike", "Unicef", "Nikon", "HP", "Startplay"].map((b) => (<span key={b} className="text-gray-300 font-bold text-sm tracking-wide">{b}</span>))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="bg-[#0a1628] py-10 overflow-hidden border-y border-white/5">
        <p className="text-center text-xs tracking-widest text-gray-500 uppercase mb-6">Trusted by Innovative Teams Worldwide</p>
        <div className="relative flex overflow-hidden">
          <div className="flex gap-14 animate-marquee whitespace-nowrap items-center px-6">
            {[...clients, ...clients].map((c, i) => (<span key={i} className="text-gray-400 font-semibold text-sm opacity-60 shrink-0">{c}</span>))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">What We Offer</p>
            <h2 className="text-4xl font-extrabold">Comprehensive LLM</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Development Services for Every Enterprise Need</h3>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">End-to-end large language model development — from data curation and pre-training to fine-tuning, RLHF, and production deployment.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Cpu size={22} />, title: "Foundation Model Pre-Training", desc: "Train custom LLMs from scratch on your proprietary data — ideal for domain-specific language understanding at scale." },
              { icon: <Settings size={22} />, title: "LLM Fine-Tuning & Instruction Tuning", desc: "Fine-tune GPT, LLaMA, Mistral, and other open-source LLMs on your domain data for superior task-specific performance." },
              { icon: <Brain size={22} />, title: "RLHF & Preference Alignment", desc: "Align LLM behavior with human preferences using reinforcement learning from human feedback (RLHF) and DPO techniques." },
              { icon: <Database size={22} />, title: "RAG System Development", desc: "Build retrieval-augmented generation systems that ground LLM outputs in your knowledge base for accurate, verifiable responses." },
              { icon: <Network size={22} />, title: "LLM API & Platform Development", desc: "Build production-ready LLM APIs and platforms — rate limiting, streaming, caching, observability, and cost management built in." },
              { icon: <Server size={22} />, title: "On-Premise LLM Deployment", desc: "Deploy large language models on your own infrastructure for full data privacy, compliance, and cost control." },
            ].map((s) => (
              <div key={s.title} className="bg-[#0a1628] border border-white/5 rounded-2xl p-6 hover:border-green-700/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">{s.icon}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Why It Matters</p>
            <h2 className="text-4xl font-extrabold">Key <span className="text-green-400">Benefits</span> of Custom LLM Development</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Brain size={22} />, title: "Domain-Specific Intelligence", desc: "Custom LLMs trained on your data outperform general models in your industry — legal, medical, finance, manufacturing, and more." },
              { icon: <Shield size={22} />, title: "Data Privacy & Security", desc: "On-premise deployment ensures your sensitive data never leaves your infrastructure — full compliance with GDPR, HIPAA, and more." },
              { icon: <TrendingUp size={22} />, title: "Superior Performance on Your Tasks", desc: "Fine-tuned models achieve 40–70% better performance on domain-specific tasks compared to general-purpose LLMs." },
              { icon: <Zap size={22} />, title: "Reduced Inference Costs", desc: "Smaller fine-tuned models can match large general LLM quality at 10–100× lower inference costs." },
              { icon: <Eye size={22} />, title: "Full Observability & Control", desc: "Monitor every LLM request, track costs, detect hallucinations, and implement guardrails with full system observability." },
              { icon: <Activity size={22} />, title: "Competitive Moat via Proprietary AI", desc: "A custom LLM trained on your unique data is a defensible competitive advantage that competitors cannot replicate." },
            ].map((b) => (
              <div key={b.title} className="bg-[#050d18] border border-white/5 rounded-2xl p-6 flex gap-5 hover:border-green-700/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">{b.icon}</div>
                <div><h3 className="font-bold text-white mb-1">{b.title}</h3><p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="our-process" className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">Our LLM Development Process</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { step: "01", title: "Use Case Analysis & Model Strategy", desc: "Evaluate your use case, data availability, and performance requirements to recommend the optimal LLM strategy." },
                { step: "02", title: "Data Curation & Preprocessing Pipeline", desc: "Build data pipelines to collect, clean, deduplicate, and format training data for optimal LLM learning." },
                { step: "03", title: "Model Training / Fine-Tuning", desc: "Pre-train or fine-tune on your curated dataset using techniques like LoRA, QLoRA, full fine-tuning, or instruction tuning." },
                { step: "04", title: "Alignment, Evaluation & Benchmarking", desc: "Apply RLHF/DPO for alignment, then rigorously evaluate with domain-specific benchmarks and red-teaming." },
                { step: "05", title: "Production Deployment & Monitoring", desc: "Deploy with optimized serving infrastructure (vLLM, TGI, etc.) with full cost tracking, latency monitoring, and drift detection." },
              ].map((p) => (
                <div key={p.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-extrabold text-green-900 shrink-0 w-12">{p.step}</span>
                  <div><h4 className="font-bold text-white mb-1">{p.title}</h4><p className="text-gray-400 text-sm">{p.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/5 relative h-[400px] md:h-full group">
              <img src="/assets/services/llm1.webp" alt="LLM Development Stack" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Legal AI", title: "LegalMind LLM", desc: "Fine-tuned LLaMA-3 on 50M+ legal documents. Outperformed GPT-4 on legal contract analysis tasks by 38% while reducing inference cost by 12×.", metric: "38% better vs GPT-4", img: "/assets/services/llm2.webp" },
              { tag: "Medical AI", title: "ClinicalBot LLM", desc: "HIPAA-compliant medical LLM fine-tuned on clinical notes and medical literature — deployed on-premise for a hospital network.", metric: "100% on-premise", img: "/assets/services/llm3.webp" },
              { tag: "FinTech AI", title: "FinLex Model", desc: "Custom financial LLM fine-tuned on earnings reports, analyst notes, and SEC filings. Powers real-time financial analysis for 500+ analysts.", metric: "500+ analysts served", img: "/assets/services/llm4.webp" },
            ].map((w) => (
              <div key={w.title} className="bg-[#050d18] rounded-2xl overflow-hidden border border-white/5 hover:border-green-700/30 transition-colors group shadow-lg">
                <div className="h-44 overflow-hidden relative">
                  <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#050d18]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-5 border-t border-white/5">
                  <span className="text-xs text-green-400 font-semibold bg-green-900/20 px-2 py-0.5 rounded-full">{w.tag}</span>
                  <h3 className="font-bold text-white mt-3 mb-2">{w.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">{w.desc}</p>
                  <p className="text-green-400 font-semibold text-sm">{w.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#050d18] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">At a Glance</p>
          <h2 className="text-3xl font-extrabold mb-12">Highlights of <span className="text-green-400">Achievements</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{ value: "500+", label: "AI Projects Delivered", icon: <TrendingUp size={26} /> }, { value: "99.9%", label: "Model Uptime", icon: <Shield size={26} /> }, { value: "10+", label: "Years of Experience", icon: <Clock size={26} /> }, { value: "24/7", label: "Client Support", icon: <Users size={26} /> }].map((s) => (
              <div key={s.label} className="bg-[#0a1628] rounded-2xl p-6 border border-white/5">
                <div className="text-green-400 flex justify-center mb-3">{s.icon}</div>
                <div className="text-4xl font-extrabold text-white mb-2">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPERS ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-2">Our Expertise</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">Hire Our LLM Engineers to Build Your Next-Gen AI</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["LLM Pre-Training (PyTorch)", "LoRA / QLoRA Fine-Tuning", "Instruction Tuning", "RLHF & DPO Alignment", "RAG System Design", "Vector Database Integration", "LLM Evaluation & Benchmarking", "Red-Teaming & Safety", "vLLM / TGI Deployment", "Quantization (GPTQ, AWQ)", "LLM Observability (LangSmith)", "Context Window Optimization", "Multi-Modal LLM Dev", "LLM API Design & Caching", "On-Premise GPU Infra", "Cost Optimization at Scale"].map((cap) => (
              <div key={cap} className="bg-[#050d18] rounded-xl p-4 border border-white/5 flex items-center gap-3 hover:border-green-700/30 transition-colors">
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{cap}</span>
              </div>
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
              { name: "James Harrington", role: "CTO, LegalTech Ventures", text: "Toadster's team fine-tuned LLaMA-3 on our legal corpus and now it outperforms GPT-4 on our specific use cases at a fraction of the API cost. Exceptional work." },
              { name: "Dr. Meena Krishnan", role: "Chief AI Officer, HealthStack", text: "We needed a HIPAA-compliant, on-premise LLM. Toadster delivered a production system in 10 weeks that now powers our clinical AI across 12 hospitals." },
              { name: "Lucas Ferreira", role: "Head of AI, FinSight", text: "The RAG system they built on top of our fine-tuned model gives our analysts instant, accurate answers from thousands of documents. Revenue impact was immediate." },
            ].map((t) => (
              <div key={t.name} className="bg-[#0a1628] rounded-2xl p-6 border border-white/5">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<Star key={i} size={14} className="text-green-400 fill-green-400" />))}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div><div className="font-bold text-white text-sm">{t.name}</div><div className="text-gray-500 text-xs">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Build Your<br /><span className="text-green-400">Custom LLM?</span></h2>
          <p className="text-gray-400 mb-8">Let our LLM engineers help you build, fine-tune, and deploy a large language model that gives your business a true competitive edge.</p>
          <button className="px-10 py-4 rounded-xl bg-[#1C3829] text-white font-semibold text-lg hover:bg-green-800 transition-colors">Start Your LLM Project</button>
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
              { tag: "LLM Engineering", title: "LoRA vs Full Fine-Tuning: When to Use Which for Enterprise LLMs", date: "Mar 10, 2026" },
              { tag: "RAG Systems", title: "Building Production-Grade RAG Systems: Lessons from 50+ Deployments", date: "Feb 25, 2026" },
              { tag: "Model Deployment", title: "Reducing LLM Inference Costs by 10× with Quantization and Caching", date: "Feb 10, 2026" },
            ].map((b) => (
              <div key={b.title} className="bg-[#0a1628] rounded-2xl overflow-hidden border border-white/5 hover:border-green-700/30 transition-colors cursor-pointer group">
                <div className="h-36 bg-linear-to-br from-green-900/30 to-[#050d18] flex items-center justify-center"><Layers size={40} className="text-green-700" /></div>
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
            { q: "What is the difference between fine-tuning an LLM and using prompt engineering?", a: "Prompt engineering guides the model at inference time without changing weights — cost-effective but limited. Fine-tuning updates model weights on your data for significantly better domain-specific performance, but requires training compute." },
            { q: "Do we need a huge amount of data to fine-tune an LLM?", a: "Not necessarily. With techniques like LoRA and QLoRA, high-quality fine-tuning can be achieved with as few as 1,000–10,000 examples. Data quality matters more than quantity." },
            { q: "Can you train a completely custom LLM from scratch?", a: "Yes, though it requires significant compute and data. We evaluate whether pre-training from scratch vs. fine-tuning an existing model is the right approach based on your budget, data, and performance goals." },
            { q: "How do you ensure the LLM doesn't hallucinate?", a: "We implement RAG to ground outputs in factual sources, apply confidence thresholds, add citation mechanisms, implement guardrails, and continuously monitor production outputs for hallucination patterns." },
            { q: "Can the LLM be deployed on our own servers?", a: "Absolutely. We specialize in on-premise LLM deployment using optimized serving frameworks (vLLM, TGI, Ollama) on your GPU infrastructure for full data privacy and compliance." },
            { q: "What open-source LLMs do you work with?", a: "We work with LLaMA 3, Mistral, Mixtral, Gemma, Phi-3, Falcon, Qwen, and other leading open-source models. We select the best base model for your use case, data, and compute constraints." },
          ].map((item) => (<FAQItem key={item.q} question={item.q} answer={item.a} />))}
        </div>
      </section>
    </div>
  )
}

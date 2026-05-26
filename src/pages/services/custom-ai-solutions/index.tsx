import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import { Brain, Settings, Network, Shield, TrendingUp, Clock, Users, Target, ChevronDown, CheckCircle, Star, Layers, Zap, Activity, Eye, BarChart3, Cpu } from "lucide-react"

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

export default function CustomAISolutionsPage() {
  return (
    <div className="bg-[#050d18] text-white">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#092a1a] to-[#050d18] py-28 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">Custom AI Solutions</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Business with<br /><span className="text-green-400">Custom AI Solutions</span> Built for You
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">Tailor-made AI systems designed from the ground up for your unique business challenges — not off-the-shelf products, but bespoke intelligence built on your data and workflows.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact">Book a Free Consultation</CTALink>
            <button onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">See How It Works</button>
          </div>
          <div className="mt-14 flex flex-wrap gap-6 justify-center items-center opacity-50">
            {["Nike", "Unicef", "Nikon", "HP", "Startplay"].map((b) => (<span key={b} className="text-gray-300 font-bold text-sm tracking-wide">{b}</span>))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="bg-[#0a1628] py-10 overflow-hidden border-y border-white/5">
        <p className="text-xl tracking-[0.35em] text-toadster-green font-bold text-center mb-5 uppercase">Trusted by Innovative Teams Worldwide</p>
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
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What We Offer</p>
            <h2 className="text-4xl font-extrabold">Top Custom AI Solution</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services to Transform Your Business</h3>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">We engineer AI from scratch — uniquely crafted for your industry, data, and business objectives.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Brain size={22} />, title: "Bespoke AI Model Development", desc: "Custom-trained models on your proprietary data for unmatched domain accuracy." },
              { icon: <Settings size={22} />, title: "Industry-Specific AI Platforms", desc: "Vertical AI platforms built for healthcare, legal, fintech, logistics, and more." },
              { icon: <Network size={22} />, title: "AI-Powered Product Features", desc: "Embed custom AI directly into your product — from smart search to AI assistants." },
              { icon: <Layers size={22} />, title: "Custom RAG & Knowledge Systems", desc: "Build proprietary knowledge bases with retrieval-augmented generation on your documents." },
              { icon: <Activity size={22} />, title: "Process-Specific Automation AI", desc: "AI that understands and automates your exact business processes end-to-end." },
              { icon: <Eye size={22} />, title: "Custom Computer Vision Solutions", desc: "Vision AI tailored to your environment — from factory floors to medical imaging." },
            ].map((s) => (
              <div key={s.title} className="bg-[#0a1628] border border-white/5 rounded-2xl p-6 hover:border-green-800/50 transition-colors">
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
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Why It Matters</p>
            <h2 className="text-4xl font-extrabold">Key <span className="text-green-400">Benefits</span> of Custom AI Solutions for Businesses</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Target size={22} />, title: "Perfect Fit for Your Use Case", desc: "Off-the-shelf AI solves generic problems. Custom AI solves YOUR problem with precision." },
              { icon: <Shield size={22} />, title: "Full Ownership & IP Control", desc: "You own the model, the data pipeline, and all intellectual property — zero vendor lock-in." },
              { icon: <Zap size={22} />, title: "Higher Performance & Accuracy", desc: "Domain-specific training on your data achieves far higher accuracy than generic models." },
              { icon: <BarChart3 size={22} />, title: "Competitive Moat", desc: "A proprietary AI system is a strategic asset that competitors cannot simply buy or copy." },
              { icon: <Cpu size={22} />, title: "Seamless System Integration", desc: "Built from day one to fit your tech stack — APIs, databases, and workflows." },
              { icon: <TrendingUp size={22} />, title: "Scalable As You Grow", desc: "Designed with growth in mind — your custom AI scales with your users and data volume." },
            ].map((b) => (
              <div key={b.title} className="bg-[#0a1628] border border-white/5 rounded-2xl p-6 flex gap-5 hover:border-green-800/40 transition-colors">
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
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">Our Process in Custom AI Development</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { step: "01", title: "Deep Discovery & Problem Mapping", desc: "We embed with your team to understand your workflows, data, and business objectives at depth." },
                { step: "02", title: "Solution Architecture Design", desc: "Design a bespoke AI architecture that fits your exact problem — no templates, no shortcuts." },
                { step: "03", title: "Data Engineering & Model Training", desc: "Build your data pipeline and train custom models tailored to your domain data." },
                { step: "04", title: "Rigorous Testing & Iteration", desc: "Evaluate against your specific success metrics and iterate until benchmarks are exceeded." },
                { step: "05", title: "Deployment, Ownership & Handover", desc: "Deploy, document, and fully transfer ownership of your AI system with ongoing support." },
              ].map((p) => (
                <div key={p.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-extrabold text-green-900 shrink-0 w-12">{p.step}</span>
                  <div><h4 className="font-bold text-white mb-1">{p.title}</h4><p className="text-gray-400 text-sm">{p.desc}</p></div>
                </div>
              ))}
            </div>
            <div
              className="relative rounded-3xl overflow-hidden border border-white/5 min-h-100 flex items-center justify-center group"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >

            </div>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Custom NLP AI", title: "ClauseGuard", desc: "Built a bespoke contract analysis AI for a law firm, reviewing 200+ clause types with 96% accuracy.", metric: "96% accuracy", image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Custom Vision AI", title: "QualityEye", desc: "Developed a custom defect detection vision system for a manufacturer, reducing QA failures by 84%.", metric: "84% fewer defects", image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Custom Prediction AI", title: "PriceSense", desc: "Built a dynamic pricing AI for an e-commerce client, increasing revenue per visit by 22%.", metric: "22% revenue uplift", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
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
                  <p className="text-gray-400 text-sm leading-relaxed grow mb-4">{w.desc}</p>
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                    <Activity size={16} className="text-green-500" />
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">{w.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#050d18] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">At a Glance</p>
          <h2 className="text-3xl font-extrabold mb-12">Highlights of <span className="text-green-400">Achievements</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{ value: "500+", label: "AI Projects Delivered", icon: <TrendingUp size={26} /> }, { value: "99.9%", label: "Uptime Guaranteed", icon: <Shield size={26} /> }, { value: "10+", label: "Years of Experience", icon: <Clock size={26} /> }, { value: "24/7", label: "Client Support", icon: <Users size={26} /> }].map((s) => (
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
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Developers</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">Hire Our AI Engineers to Build Custom, Scalable, and Secure AI</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Custom Model Architecture", "Domain Data Fine-Tuning", "Proprietary Dataset Design", "AI Product Integration", "Bespoke NLP Systems", "Custom Computer Vision", "End-to-End MLOps", "Private LLM Deployment", "RAG & Knowledge Bases", "Vertical AI Platforms", "AI API Development", "On-Premise AI Deployment", "Multi-modal AI Systems", "AI Safety & Governance", "Custom Evaluation Frameworks", "Explainable AI (XAI)"].map((cap) => (
              <div key={cap} className="bg-[#0a1628] rounded-xl p-4 border border-white/5 flex items-center gap-3 hover:border-green-800/40 transition-colors">
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
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Social Proof</p>
            <h2 className="text-4xl font-extrabold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Aisha Patel", role: "CPO, LegalTech AI", text: "Toadster built us a completely custom contract review AI. It handles nuances in our legal domain that no generic AI can — and we own it entirely." },
              { name: "James Chen", role: "Head of Manufacturing, AutoPrecision", text: "The custom defect detection system they built has transformed our QA process. 84% fewer escapes in the first quarter post-deployment." },
              { name: "Monica Sharma", role: "CEO, DynamicCommerce", text: "Their custom pricing AI increased our revenue per visitor by 22%. It learns from our specific catalog and customer behaviour — truly bespoke." },
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
          <h2 className="text-4xl font-extrabold mb-4">Ready to Build Your<br /><span className="text-green-400">Custom AI Solution?</span></h2>
          <p className="text-gray-400 mb-8">Stop fitting your business into generic AI. Let us build the AI that fits your business perfectly.</p>
          <CTALink to="/contact" className="px-10 py-4 text-lg">Chat With Us</CTALink>
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
              { tag: "Custom AI", title: "Why Custom AI Outperforms Off-the-Shelf Solutions in 2026", date: "Mar 1, 2026" },
              { tag: "AI Strategy", title: "How to Define the Right AI Problem for Maximum ROI", date: "Feb 14, 2026" },
              { tag: "AI Ownership", title: "The Business Case for Owning Your AI vs Using SaaS AI Tools", date: "Jan 30, 2026" },
            ].map((b) => (
              <div key={b.title} className="bg-[#0a1628] rounded-2xl overflow-hidden border border-white/5 hover:border-green-800/40 transition-colors cursor-pointer group">
                <div className="h-36 bg-linear-to-br from-green-900/30 to-[#050d18] flex items-center justify-center"><Flame size={40} className="text-green-700" /></div>
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
            { q: "What makes a custom AI solution different from off-the-shelf AI?", a: "Custom AI is trained on your specific data, designed for your exact workflows, and optimized for your success metrics. It outperforms generic AI significantly in domain-specific tasks and you own it outright." },
            { q: "How long does it take to build a custom AI solution?", a: "A PoC typically takes 3–5 weeks. Full production deployments range from 8–20 weeks depending on problem complexity, data availability, and integration scope." },
            { q: "Do we need a large dataset to build a custom AI?", a: "Not always. We assess your data during discovery and can leverage transfer learning, data augmentation, and synthetic data generation to achieve strong results even with limited data." },
            { q: "Who owns the custom AI model and code?", a: "You do — 100%. All model weights, training code, data pipelines, and documentation are transferred to you at project completion with no ongoing licensing fees." },
            { q: "Can custom AI solutions integrate with our existing tech stack?", a: "Absolutely. We design with your tech stack in mind from day one and deliver REST APIs, SDKs, or direct database integrations as required by your systems." },
            { q: "Do you offer post-deployment support for custom AI?", a: "Yes. We offer tiered managed service plans including monitoring, drift detection, retraining, new feature development, and 24/7 incident response." },
          ].map((item) => (<FAQItem key={item.q} question={item.q} answer={item.a} />))}
        </div>
      </section>
    </div>
  )
}

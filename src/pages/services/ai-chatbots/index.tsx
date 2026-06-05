import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import { Bot, MessageSquare, Brain, Settings, Shield, TrendingUp, Clock, Users, Zap, ChevronDown, CheckCircle, Star, Activity, Eye, BarChart3 } from "lucide-react"

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

export default function AIChatbotsPage() {
  return (
    <div className="bg-[#050d18] text-white">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#092a1a] to-[#050d18] py-28 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">AI Chatbots</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Customer Experience with<br /><span className="text-green-400">Intelligent AI Chatbots</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">Deploy AI chatbots that understand context, remember conversations, and resolve customer queries intelligently — 24/7, at unlimited scale, without increasing headcount.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" className="bg-green-800 hover:bg-green-700">Book a Free Consultation</CTALink>
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
            <h2 className="text-4xl font-extrabold">Top AI Chatbot</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Development Services for Your Business</h3>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Intelligent conversational AI built for your specific use case — support, sales, HR, or custom workflows.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <MessageSquare size={22} />, title: "Customer Support Chatbots", desc: "AI that resolves tier-1 and tier-2 support queries instantly, 24/7, with seamless human escalation." },
              { icon: <TrendingUp size={22} />, title: "Sales & Lead Qualification Bots", desc: "Qualify leads, answer product questions, and book demos automatically around the clock." },
              { icon: <Brain size={22} />, title: "Knowledge Base Assistants", desc: "RAG-powered bots that answer questions from your internal docs, FAQs, and knowledge base." },
              { icon: <Users size={22} />, title: "HR & Internal AI Assistants", desc: "Employee-facing chatbots for onboarding, HR policies, IT helpdesk, and internal queries." },
              { icon: <Settings size={22} />, title: "Multi-Channel Chatbot Deployment", desc: "Deploy across web, mobile, WhatsApp, Slack, Teams, and SMS from a single platform." },
              { icon: <Activity size={22} />, title: "Voice Bot & IVR Integration", desc: "Extend AI chatbot capabilities to phone channels with intelligent voice bot integrations." },
            ].map((s) => (
              <div key={s.title} className="bg-[#050d18] border border-white/5 rounded-2xl p-6 hover:border-green-800/50 transition-colors">
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
            <h2 className="text-4xl font-extrabold">Key <span className="text-green-400">Benefits</span> of AI Chatbots for Businesses</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Clock size={22} />, title: "24/7 Availability at Zero Extra Cost", desc: "AI chatbots handle unlimited concurrent conversations at any hour — no overtime, no staffing costs." },
              { icon: <Zap size={22} />, title: "Instant Query Resolution", desc: "Respond to customer queries in under 1 second — dramatically improving satisfaction and NPS scores." },
              { icon: <BarChart3 size={22} />, title: "Reduced Support Costs", desc: "Automate 60–80% of tier-1 support queries, freeing your human agents for high-value interactions." },
              { icon: <TrendingUp size={22} />, title: "Increased Conversions", desc: "Sales chatbots that engage visitors, qualify leads, and guide them to purchase — boosting conversion rates." },
              { icon: <Eye size={22} />, title: "Deep Customer Insights", desc: "Every conversation is a data point — analytics reveal common issues, FAQs, and product improvement areas." },
              { icon: <Shield size={22} />, title: "Consistent Brand Voice", desc: "Every response is on-brand, compliant, and accurate — eliminating inconsistency from human agents." },
            ].map((b) => (
              <div key={b.title} className="bg-[#050d18] border border-white/5 rounded-2xl p-6 flex gap-5 hover:border-green-800/40 transition-colors">
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
            <h2 className="text-4xl font-extrabold">Our Process in AI Chatbot Development</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { step: "01", title: "Use Case Discovery & Flow Mapping", desc: "Map conversation flows, user intents, and escalation paths for your specific chatbot use case." },
                { step: "02", title: "Knowledge Base & Data Preparation", desc: "Curate FAQs, documents, and policies to power accurate, grounded chatbot responses." },
                { step: "03", title: "LLM Selection & Bot Development", desc: "Build the chatbot on the right LLM foundation with custom prompt engineering and guardrails." },
                { step: "04", title: "Testing, Tuning & Edge Case Handling", desc: "Extensive conversation testing, adversarial testing, and fine-tuning for edge cases." },
                { step: "05", title: "Deployment, Analytics & Continuous Improvement", desc: "Go live with conversation analytics, A/B testing, and continuous response quality improvements." },
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
                backgroundImage: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80')",
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
              { tag: "Support Bot", title: "HelpMind", desc: "Deployed an AI support chatbot for a fintech company that resolved 72% of queries automatically, cutting support costs by $400K/year.", metric: "72% auto-resolved", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Sales Bot", title: "LeadFlow AI", desc: "Built a sales qualification chatbot that engages 100% of website visitors and converts 3× more leads to demos.", metric: "3× more demos", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
              { tag: "HR Bot", title: "HRConnect", desc: "Internal HR chatbot serving 2,000+ employees with policy answers, leave requests, and IT helpdesk — 89% self-service rate.", metric: "89% self-service", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-[#050d18] flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-green-800/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.15)]"
              >
                <div className="h-48 relative overflow-hidden bg-[#0a1628] shrink-0">
                  <img src={w.image} alt={w.title} title={w.title} loading="lazy" decoding="async" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#050d18] via-transparent to-transparent pointer-events-none"></div>
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

      {/* ── STATS ── */}
      <section className="bg-[#050d18] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">At a Glance</p>
          <h2 className="text-3xl font-extrabold mb-12">Highlights of <span className="text-green-400">Achievements</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{ value: "500+", label: "AI Projects Delivered", icon: <TrendingUp size={26} /> }, { value: "99.9%", label: "Uptime Guaranteed", icon: <Shield size={26} /> }, { value: "10+", label: "Years of Experience", icon: <Clock size={26} /> }, { value: "24/7", label: "Client Support", icon: <Users size={26} /> }].map((s) => (
              <div key={s.label} className="bg-[#050d18] rounded-2xl p-6 border border-white/5">
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
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">Hire Our AI Chatbot Developers to Build Intelligent Conversational AI</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["LLM Prompt Engineering", "RAG-Powered Knowledge Bots", "Multi-Turn Conversation Design", "Intent Classification", "Entity Extraction (NER)", "Dialogue State Tracking", "Human Handoff Systems", "Omnichannel Deployment", "WhatsApp & Telegram Bots", "Slack & Teams Integration", "Voice Bot (Twilio/Nexmo)", "Conversation Analytics", "Guardrails & Safety Filters", "A/B Testing for Chatbots", "Custom LLM Fine-Tuning", "Bot Performance Monitoring"].map((cap) => (
              <div key={cap} className="bg-[#050d18] rounded-xl p-4 border border-white/5 flex items-center gap-3 hover:border-green-800/40 transition-colors">
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
              { name: "Priya Kapoor", role: "Head of CX, FinSupportAI", text: "Toadster's chatbot handles 72% of our support volume automatically. Our agents now focus only on complex cases — morale and productivity are both up." },
              { name: "Tom Bradley", role: "VP Sales, GrowthSaaS", text: "The sales bot qualifies every visitor 24/7 and books demos directly into our calendar. Lead-to-demo conversion tripled in the first month." },
              { name: "Sunita Rao", role: "HR Director, TechCorp", text: "Our HR chatbot answers 89% of employee queries without human involvement. Employees love the instant answers — HR loves the time saved." },
            ].map((t) => (
              <div key={t.name} className="bg-[#050d18] rounded-2xl p-6 border border-white/5">
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
          <h2 className="text-4xl font-extrabold mb-4">Ready to Deploy Your<br /><span className="text-green-400">AI Chatbot?</span></h2>
          <p className="text-gray-400 mb-8">Let our team build an intelligent chatbot that works tirelessly for your customers — 24/7, at scale.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" className="text-lg" title="Talk to our chatbot team">
              Chat With Us
            </CTALink>
            <CTALink
              to="/services/conversational-ai"
              className="bg-transparent border border-white/20 hover:bg-white/5 text-lg"
              title="Explore Conversational AI"
            >
              Explore Conversational AI
            </CTALink>
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Latest Insights</p>
            <h2 className="text-4xl font-extrabold">Our Blogs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "AI Chatbots", title: "How AI Chatbots Are Transforming Customer Service in 2026", date: "Mar 5, 2026" },
              { tag: "LLM Bots", title: "GPT-4 vs Claude for Customer Service Chatbots: A Practical Guide", date: "Feb 20, 2026" },
              { tag: "Conversational AI", title: "How to Measure AI Chatbot ROI: The Metrics That Matter", date: "Feb 5, 2026" },
            ].map((b) => (
              <div key={b.title} className="bg-[#050d18] rounded-2xl overflow-hidden border border-white/5 hover:border-green-800/40 transition-colors cursor-pointer group">
                <div className="h-36 bg-linear-to-br from-green-900/30 to-[#030f07] flex items-center justify-center"><Bot size={40} className="text-green-700" /></div>
                <div className="p-5">
                  <span className="text-xs text-green-400 font-semibold bg-green-900/20 px-2 py-0.5 rounded-full">{b.tag}</span>
                  <h3 className="font-bold text-white mt-3 mb-2 group-hover:text-green-400 transition-colors">{b.title}</h3>
                  <p className="text-gray-500 text-xs">{b.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Got Questions?</p>
            <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          {[
            { q: "What makes an AI chatbot different from a traditional chatbot?", a: "Traditional chatbots follow rigid decision trees. AI chatbots use LLMs to understand natural language, handle complex multi-turn conversations, retrieve from knowledge bases, and improve over time." },
            { q: "How long does it take to build and deploy an AI chatbot?", a: "Simple chatbots can be live in 2–3 weeks. Multi-channel bots with custom knowledge bases and integrations typically take 4–8 weeks." },
            { q: "Can the chatbot handle complex, multi-turn conversations?", a: "Yes. Our LLM-powered chatbots maintain full conversation context across multiple turns, remember user preferences, and handle complex, nuanced queries accurately." },
            { q: "Which channels can the chatbot be deployed on?", a: "We deploy across web, mobile apps, WhatsApp, Telegram, Facebook Messenger, Slack, Microsoft Teams, SMS, and voice channels from a single unified backend." },
            { q: "How do you ensure the chatbot gives accurate responses?", a: "We use RAG (Retrieval-Augmented Generation) to ground responses in your knowledge base, implement strict guardrails, and continuously monitor and improve response accuracy." },
            { q: "Can the chatbot escalate to a human agent when needed?", a: "Yes — we implement intelligent escalation logic that detects when a human is needed (sentiment, confidence, explicit request) and hands off seamlessly with full conversation context." },
          ].map((item) => (<FAQItem key={item.q} question={item.q} answer={item.a} />))}
        </div>
      </section>
    </div>
  )
}

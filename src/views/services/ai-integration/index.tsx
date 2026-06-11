"use client"

import Image from "next/image"
import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import { Settings, Network, Shield, TrendingUp, Clock, Users, Zap, ChevronDown, CheckCircle, Star, Database, Cloud, Code2, Activity, GitBranch, BarChart3 } from "lucide-react"
import { ServicesTrustedBy } from "@/components/ServicesTrustedBy"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-page-border py-5">
      <button className="flex items-center justify-between w-full text-left" onClick={() => setOpen(!open)}>
        <span className="text-page-fg font-medium pr-4">{question}</span>
        <ChevronDown className={`shrink-0 text-green-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} size={20} />
      </button>
      {open && <p className="mt-3 text-page-fg-muted text-sm leading-relaxed">{answer}</p>}
    </div>
  )
}


export default function AIIntegrationPage() {
  return (
    <div className="bg-page-bg text-page-fg">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden  py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">AI Integration</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Seamlessly Integrate <span className="text-green-400">AI</span><br />into Your Existing Systems
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">We bridge the gap between powerful AI capabilities and your existing tech stack - CRMs, ERPs, databases, cloud platforms, and custom software - without disrupting what already works.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact">Book a Free Consultation</CTALink>
            <button onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl border border-page-border-strong text-page-fg font-semibold hover:bg-page-fg/5 transition-colors">See How It Works</button>
          </div>
          <div className="mt-14 flex flex-wrap gap-6 justify-center items-center opacity-50">
            {["Nike", "Unicef", "Nikon", "HP", "Startplay"].map((b) => (<span key={b} className="text-page-fg-subtle font-bold text-sm tracking-wide">{b}</span>))}
          </div>
        </div>
      </section>
      <ServicesTrustedBy />

      {/* ── SERVICES ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What We Offer</p>
            <h2 className="text-4xl font-extrabold">Top AI Integration</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services to Transform Your Business</h3>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">We connect AI capabilities to the systems you already use - fast, secure, and without disruption.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Code2 size={22} />, title: "LLM API Integration", desc: "Integrate OpenAI, Anthropic, Gemini, and open-source LLMs into your applications via robust APIs." },
              { icon: <Database size={22} />, title: "CRM & ERP AI Augmentation", desc: "Add AI intelligence to Salesforce, HubSpot, SAP, and custom CRM/ERP systems." },
              { icon: <Cloud size={22} />, title: "Cloud AI Service Integration", desc: "Connect AWS AI, Google Vertex AI, and Azure Cognitive Services to your infrastructure." },
              { icon: <Network size={22} />, title: "Data Pipeline & AI Workflows", desc: "Build data flows that feed AI models in real time across your existing data infrastructure." },
              { icon: <Settings size={22} />, title: "Webhook & Event-Driven AI", desc: "Trigger AI actions automatically based on business events across your connected systems." },
              { icon: <GitBranch size={22} />, title: "AI Middleware & Orchestration", desc: "Orchestrate multiple AI services and models through a unified middleware layer." },
            ].map((s) => (
              <div key={s.title} className="bg-page-bg-alt border border-page-border rounded-2xl p-6 hover:border-green-800/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">{s.icon}</div>
                <h3 className="font-bold text-page-fg mb-2">{s.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Why It Matters</p>
            <h2 className="text-4xl font-extrabold">Key <span className="text-green-400">Benefits</span> of AI Integration for Businesses</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Zap size={22} />, title: "Instant AI Capabilities Without Rebuilding", desc: "Add AI intelligence to existing products and workflows without a full redevelopment cycle." },
              { icon: <Shield size={22} />, title: "Secure & Compliant Connections", desc: "Enterprise-grade secure integrations with full audit trails, encryption, and access controls." },
              { icon: <BarChart3 size={22} />, title: "Unified AI Across All Systems", desc: "Break data silos - connect AI insights across your CRM, ERP, analytics, and support tools." },
              { icon: <TrendingUp size={22} />, title: "Faster Time to Value", desc: "Integration-first approach delivers working AI features in weeks, not months." },
              { icon: <Activity size={22} />, title: "Scalable AI Architecture", desc: "Designed to scale from initial integration to enterprise-wide AI deployment." },
              { icon: <Users size={22} />, title: "Minimal Disruption to Existing Teams", desc: "AI works within your existing workflows - no retraining or rebuilding required from your team." },
            ].map((b) => (
              <div key={b.title} className="bg-page-bg-alt border border-page-border rounded-2xl p-6 flex gap-5 hover:border-green-800/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">{b.icon}</div>
                <div><h3 className="font-bold text-page-fg mb-1">{b.title}</h3><p className="text-page-fg-muted text-sm leading-relaxed">{b.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="our-process" className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">Our Process in AI Integration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { step: "01", title: "Systems Audit & Integration Mapping", desc: "We audit your existing systems, APIs, and data flows to identify integration points and risks." },
                { step: "02", title: "AI Service Selection & Architecture", desc: "Select the right AI services/models and design a secure, scalable integration architecture." },
                { step: "03", title: "API Development & Middleware Build", desc: "Build the connectors, transformers, and middleware layers that power your AI integration." },
                { step: "04", title: "Testing, Security & Compliance Review", desc: "End-to-end integration testing with security scanning and compliance validation." },
                { step: "05", title: "Deployment & Ongoing Monitoring", desc: "Go live with full observability - latency tracking, error monitoring, and usage analytics." },
              ].map((p) => (
                <div key={p.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-extrabold text-green-900 shrink-0 w-12">{p.step}</span>
                  <div><h4 className="font-bold text-page-fg mb-1">{p.title}</h4><p className="text-page-fg-muted text-sm">{p.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl overflow-hidden border border-page-border relative h-[400px] md:h-full group">
              <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" alt="AI Integration Layer" title="AI Integration Layer" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "CRM AI", title: "SalesBoostAI", desc: "Integrated GPT-4 into Salesforce for a B2B SaaS company - auto-generating meeting summaries and follow-up emails, saving reps 90 mins/day.", metric: "90 min/day saved", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Data AI", title: "InsightBridge", desc: "Connected 7 data sources to a central AI analytics layer, giving a fintech team unified AI insights across all platforms in real time.", metric: "7 systems unified", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Cloud AI", title: "AutoSupport", desc: "Integrated AWS Bedrock into a customer support platform, automating 65% of tier-1 tickets without human intervention.", metric: "65% auto-resolved", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" },
            ].map((w) => (
              <div key={w.title} className="bg-page-bg-alt rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-colors group shadow-lg">
                <div className="h-44 overflow-hidden relative">
                  <Image src={w.img} alt={w.title} title={w.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-page-bg-alt/10 group-hover:bg-transparent transition-colors duration-500"></div>
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

      {/* ── STATS ── */}
      <section className="bg-page-bg py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">At a Glance</p>
          <h2 className="text-3xl font-extrabold mb-12">Highlights of <span className="text-green-400">Achievements</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{ value: "500+", label: "AI Projects Delivered", icon: <TrendingUp size={26} /> }, { value: "99.9%", label: "Uptime Guaranteed", icon: <Shield size={26} /> }, { value: "10+", label: "Years of Experience", icon: <Clock size={26} /> }, { value: "24/7", label: "Client Support", icon: <Users size={26} /> }].map((s) => (
              <div key={s.label} className="bg-page-bg-alt rounded-2xl p-6 border border-page-border">
                <div className="text-green-400 flex justify-center mb-3">{s.icon}</div>
                <div className="text-4xl font-extrabold text-page-fg mb-2">{s.value}</div>
                <div className="text-page-fg-muted text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPERS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Engineers</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">Hire Our AI Integration Engineers for Seamless, Secure Connections</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["OpenAI & Anthropic API", "REST & GraphQL APIs", "Webhook & Event Systems", "Salesforce / HubSpot AI", "AWS Bedrock & SageMaker", "Google Vertex AI", "Azure AI Services", "LangChain Integrations", "Vector DB Integration", "Real-time Streaming AI", "OAuth & API Security", "Data Pipeline Engineering", "Microservices Architecture", "Docker & Kubernetes", "Monitoring & Observability", "Compliance & Audit Logging"].map((cap) => (
              <div key={cap} className="bg-page-bg-alt rounded-xl p-4 border border-page-border flex items-center gap-3 hover:border-green-800/40 transition-colors">
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-page-fg-subtle text-sm font-medium">{cap}</span>
              </div>
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
              { name: "Rahul Menon", role: "CTO, SalesStack", text: "Toadster integrated GPT-4 into our Salesforce in 3 weeks. The AI now writes all our follow-up emails and CRM notes - our reps love it." },
              { name: "Lisa Park", role: "VP Engineering, DataBridge", text: "They built an AI integration layer that unified 7 of our data sources. Insights that used to take hours are now available instantly across the whole team." },
              { name: "Amit Singh", role: "Head of Support, TechCo", text: "The AWS Bedrock integration they built automated 65% of our tier-1 support tickets in the first month. Customer satisfaction actually went up." },
            ].map((t) => (
              <div key={t.name} className="bg-page-bg-alt rounded-2xl p-6 border border-page-border">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<Star key={i} size={14} className="text-green-400 fill-green-400" />))}</div>
                <p className="text-page-fg-subtle text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div><div className="font-bold text-page-fg text-sm">{t.name}</div><div className="text-gray-500 text-xs">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Connect AI<br /><span className="text-green-400">to Your Business Systems?</span></h2>
          <p className="text-page-fg-muted mb-8">Let our integration engineers wire AI into the tools you already use - fast, secure, and without disruption.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" className="text-lg" title="Talk to our integration engineers">
              Chat With Us
            </CTALink>
            <CTALink
               to="/services/ai-development"
              className="bg-transparent border border-page-border-strong hover:bg-page-fg/5 text-lg"
              title="Explore AI Development"
            >
              Explore AI Development
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
              { tag: "AI Integration", title: "How to Integrate AI into Your CRM Without Disrupting Sales Teams", date: "Mar 3, 2026" },
              { tag: "API Design", title: "Best Practices for Building Secure AI API Integrations in 2026", date: "Feb 18, 2026" },
              { tag: "Cloud AI", title: "AWS Bedrock vs Azure OpenAI: Which to Choose for Your Integration?", date: "Feb 1, 2026" },
            ].map((b) => (
              <div key={b.title} className="bg-page-bg-alt rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-colors cursor-pointer group">
                <div className="h-36 bg-linear-to-br from-green-900/30 to-page-bg flex items-center justify-center"><Link2 size={40} className="text-green-700" /></div>
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
            { q: "What systems can you integrate AI into?", a: "We integrate AI into virtually any system - Salesforce, HubSpot, SAP, custom APIs, databases, cloud platforms (AWS/GCP/Azure), SaaS tools, mobile apps, and legacy systems via secure middleware." },
            { q: "How long does an AI integration project take?", a: "Simple API integrations can be live in 1-2 weeks. Complex multi-system integrations with custom middleware typically take 4-10 weeks depending on scope and security requirements." },
            { q: "Will AI integration disrupt our existing workflows?", a: "We design integrations to be additive, not disruptive. AI enhances existing workflows without requiring your team to change the tools they use or how they work day-to-day." },
            { q: "How do you ensure security in AI integrations?", a: "We implement OAuth 2.0, API key management, end-to-end encryption, role-based access control, and full audit logging. All integrations undergo security review before deployment." },
            { q: "Can you integrate multiple AI models across different vendors?", a: "Yes. We specialize in multi-vendor AI architectures - orchestrating OpenAI, Anthropic, Google, AWS, and open-source models through a unified middleware layer." },
            { q: "Do you provide ongoing support for AI integrations?", a: "Yes - we offer managed integration services including uptime monitoring, API version management, performance optimization, and 24/7 incident response." },
          ].map((item) => (<FAQItem key={item.q} question={item.q} answer={item.a} />))}
        </div>
      </section>
    </div>
  )
}

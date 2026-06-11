"use client"

import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import {
  MessageSquare,
  ChevronDown,
  Shield,
  Zap,
  Brain,
  CheckCircle,
  Star,
  Users,
  Target,
  BarChart3,
  Globe,
  Headphones,
  Languages,
  Mic,
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


const services = [
  {
    icon: <Bot size={22} />,
    title: "AI-Powered Chatbots",
    desc: "Context-aware chatbots that understand intent, maintain conversation history, and resolve queries with human-like fluency across channels.",
  },
  {
    icon: <Mic size={22} />,
    title: "Voice AI Assistants",
    desc: "Speech-to-text, NLU, and text-to-speech pipelines that power natural voice experiences for IVR, smart speakers, and in-app voice commands.",
  },
  {
    icon: <Languages size={22} />,
    title: "Multilingual Conversations",
    desc: "Conversational AI that works across 50+ languages with real-time translation, code-switching support, and cultural context awareness.",
  },
  {
    icon: <Workflow size={22} />,
    title: "Dialogue Management Systems",
    desc: "Sophisticated dialogue state tracking and flow management that guides users through complex multi-turn interactions without losing context.",
  },
  {
    icon: <Headphones size={22} />,
    title: "Contact Centre AI",
    desc: "Agent assist, call summarisation, sentiment analysis, and automated routing that transforms contact centres into intelligent operations.",
  },
  {
    icon: <Brain size={22} />,
    title: "RAG-Powered Knowledge Bots",
    desc: "Retrieval-augmented generation systems that ground conversations in your enterprise data - accurate, cited, and hallucination-resistant.",
  },
]

const benefits = [
  {
    icon: <Target size={22} />,
    title: "90%+ Intent Accuracy",
    desc: "Fine-tuned NLU models that achieve enterprise-grade accuracy, reducing misroutes and improving first-contact resolution.",
  },
  {
    icon: <Shield size={22} />,
    title: "Enterprise Compliance",
    desc: "PII redaction, data retention policies, audit logging, and SOC 2 / HIPAA / GDPR compliance built into every deployment.",
  },
  {
    icon: <Zap size={22} />,
    title: "Sub-Second Response Times",
    desc: "Optimised inference pipelines and streaming responses that deliver natural, lag-free conversational experiences.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Actionable Analytics",
    desc: "Real-time dashboards tracking CSAT, containment rates, topic clusters, sentiment trends, and conversation quality metrics.",
  },
  {
    icon: <Globe size={22} />,
    title: "Omnichannel Deployment",
    desc: "Deploy once, serve everywhere - web, mobile, WhatsApp, Slack, Teams, voice, and custom channels from a single platform.",
  },
  {
    icon: <Users size={22} />,
    title: "Seamless Human Handoff",
    desc: "Intelligent escalation that transfers context-rich conversations to human agents without making customers repeat themselves.",
  },
]

const stats = [
  { value: "60+", label: "Conversational AI Projects" },
  { value: "92%", label: "Avg. Containment Rate" },
  { value: "50+", label: "Languages Supported" },
  { value: "40%", label: "Cost Reduction" },
]

const faqs = [
  {
    question: "What is conversational AI?",
    answer:
      "Conversational AI encompasses technologies that enable machines to understand, process, and respond to human language naturally - including chatbots, voice assistants, and dialogue systems powered by NLP, NLU, and generative AI.",
  },
  {
    question: "How is conversational AI different from a simple chatbot?",
    answer:
      "Simple chatbots follow scripted decision trees. Conversational AI uses advanced NLU, context management, and LLMs to understand nuance, maintain multi-turn context, handle unexpected inputs, and generate natural responses.",
  },
  {
    question: "Can conversational AI integrate with our existing tools?",
    answer:
      "Yes. We integrate with CRMs (Salesforce, HubSpot), ticketing systems (Zendesk, ServiceNow), knowledge bases, ERPs, and custom backends via APIs and webhooks.",
  },
  {
    question: "How do you handle multilingual support?",
    answer:
      "We use multilingual LLMs, translation APIs, and language-specific fine-tuning to support 50+ languages. Our systems also handle code-switching (mixed-language conversations) natively.",
  },
  {
    question: "What's the typical deployment timeline?",
    answer:
      "A production-ready conversational AI system typically takes 4-8 weeks - including NLU training, dialogue design, integration, testing, and deployment. Simpler FAQ bots can go live in 1-2 weeks.",
  },
]

export default function ConversationalAIPage() {
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
            Conversational AI
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Build Natural, Contextual <br />
            <span className="text-green-400">Conversational Experiences</span>
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">
            AI-powered chatbots, voice assistants, and dialogue systems that understand context, speak naturally, and resolve queries - across every channel and language.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => document.getElementById('what-we-build')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl bg-[#1C3829] text-white font-semibold hover:bg-green-800 transition-colors">
              What We Build
            </button>
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
      <ServicesTrustedBy />

      {/* ── SERVICES ── */}
      <section id="what-we-build" className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              What We Build
            </p>
            <h2 className="text-4xl font-extrabold">Conversational AI</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services</h3>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              End-to-end conversational AI solutions - from intent recognition and dialogue management to voice synthesis and omnichannel deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
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

      {/* ── BENEFITS ── */}
      <section id="our-process" className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Why It Matters
            </p>
            <h2 className="text-4xl font-extrabold">
              Key <span className="text-green-400">Benefits</span> of Conversational AI
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-page-bg border border-page-border rounded-2xl p-6 flex gap-5 hover:border-green-800/40 transition-colors"
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

      {/* ── STATS ── */}
      <section className="py-16 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-page-bg-alt border border-page-border rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-extrabold text-green-400 mb-1">{s.value}</div>
                <div className="text-page-fg-muted text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Our Process
            </p>
            <h2 className="text-4xl font-extrabold">
              How We <span className="text-green-400">Deliver</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery & Design", desc: "We map your conversation flows, user intents, and integration requirements to design the optimal dialogue architecture." },
              { step: "02", title: "NLU Training", desc: "We train and fine-tune NLU models on your domain data - intent classification, entity extraction, and sentiment analysis." },
              { step: "03", title: "Build & Integrate", desc: "We build the conversational system, integrate with your backend, and deploy across your chosen channels." },
              { step: "04", title: "Optimise & Scale", desc: "We monitor conversations, identify improvement opportunities, and continuously retrain models for better performance." },
            ].map((item) => (
              <div key={item.step} className="bg-page-bg border border-page-border rounded-2xl p-6">
                <div className="text-green-400 text-xs font-bold tracking-widest mb-3">{item.step}</div>
                <h3 className="font-bold text-page-fg mb-2">{item.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY TECHNOLOGIES ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Tech Stack
            </p>
            <h2 className="text-4xl font-extrabold">
              Key Technologies in <span className="text-green-400">Conversational AI</span>
            </h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              We leverage the latest NLP frameworks, LLMs, and speech technologies to build production-grade conversational systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "GPT-4 / Claude / Gemini", "LangChain & LlamaIndex", "Rasa Open Source", "Dialogflow CX",
              "Amazon Lex", "Azure Bot Service", "Whisper (Speech-to-Text)", "ElevenLabs / Azure TTS",
              "Pinecone / Weaviate", "Redis & PostgreSQL", "WebSocket Streaming", "WhatsApp Business API",
              "Slack / Teams SDKs", "Twilio Voice", "Prometheus / Grafana", "Conversation Analytics",
            ].map((t) => (
              <div key={t} className="bg-page-bg-alt rounded-xl p-4 border border-page-border flex items-center gap-3 hover:border-green-800/40 transition-colors">
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-page-fg-subtle text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TOADSTER ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Why Toadster
            </p>
            <h2 className="text-4xl font-extrabold">
              Built by People Who <span className="text-green-400">Understand Conversation</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Dedicated conversational AI team with linguistics and NLP expertise",
              "60+ production chatbots and voice assistants deployed across industries",
              "Deep integration experience with CRMs, ERPs, and contact centre platforms",
              "Multilingual support - 50+ languages with code-switching capability",
              "Full conversation analytics and continuous model improvement",
              "Flexible engagement: quick-start bots to enterprise conversational platforms",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-page-bg border border-page-border rounded-xl p-4">
                <CheckCircle size={18} className="text-green-400 shrink-0 mt-0.5" />
                <span className="text-page-fg-subtle text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Client Stories
            </p>
            <h2 className="text-4xl font-extrabold">
              What Our <span className="text-green-400">Clients Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya N.",
                role: "Head of CX, E-Commerce Platform",
                text: "Toadster's conversational AI handles 85% of our support queries autonomously. Customer satisfaction went up 22% while costs dropped 40%.",
              },
              {
                name: "David C.",
                role: "VP Operations, Insurance Company",
                text: "The multilingual voice assistant they built handles claims intake in 12 languages. Call centre wait times dropped from 8 minutes to under 30 seconds.",
              },
              {
                name: "Aisha M.",
                role: "CTO, Healthcare Startup",
                text: "Their RAG-powered knowledge bot answers patient queries with cited sources from our medical database. Accuracy is incredible - and fully HIPAA compliant.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-page-bg-alt border border-page-border rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-green-400 fill-green-400" />
                  ))}
                </div>
                <p className="text-page-fg-subtle text-sm leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-page-fg text-sm">{t.name}</div>
                  <div className="text-green-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              FAQ
            </p>
            <h2 className="text-4xl font-extrabold">
              Common <span className="text-green-400">Questions</span>
            </h2>
          </div>
          <div>
            {faqs.map((f) => (
              <FAQItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-page-bg text-center">
        <div className="max-w-3xl mx-auto">
          <MessageSquare size={48} className="text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to Build Your <span className="text-green-400">AI Assistant</span>?
          </h2>
          <p className="text-page-fg-subtle text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and see how conversational AI can transform your customer experience and operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" title="Book a free conversational AI consultation">
              Book Free Consultation
            </CTALink>
            <CTALink
               to="/services/ai-chatbots"
              className="bg-transparent border border-page-border-strong hover:bg-page-fg/5"
              title="Explore AI Chatbots"
            >
              Explore AI Chatbots
            </CTALink>
          </div>
        </div>
      </section>

    </div>
  )
}

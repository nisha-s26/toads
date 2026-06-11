"use client"

import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import {
  GitBranch,
  ChevronDown,
  Shield,
  Zap,
  Network,
  Lock,
  RefreshCw,
  CheckCircle,
  Star,
  Users,
  Globe,
  Layers,
  BarChart3,
  Target,
  ArrowLeftRight,
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


const capabilities = [
  {
    icon: <ArrowLeftRight size={22} />,
    title: "Agent-to-Agent Communication",
    desc: "Enable autonomous AI agents to discover, negotiate, and collaborate with each other using standardised messaging protocols.",
  },
  {
    icon: <Lock size={22} />,
    title: "Secure Agent Authentication",
    desc: "Cryptographic identity verification and mutual TLS authentication between agents, ensuring only trusted agents can communicate.",
  },
  {
    icon: <Network size={22} />,
    title: "Agent Discovery & Registry",
    desc: "Decentralised service registry where agents publish capabilities and discover other agents dynamically at runtime.",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Task Delegation & Orchestration",
    desc: "Intelligent task routing and delegation across multi-agent systems - agents break down complex work and distribute sub-tasks.",
  },
  {
    icon: <Shield size={22} />,
    title: "Trust & Reputation Framework",
    desc: "Built-in trust scoring and reputation tracking so agents can evaluate reliability before delegating sensitive tasks.",
  },
  {
    icon: <Layers size={22} />,
    title: "Protocol-Agnostic Interoperability",
    desc: "Support for Google A2A, MCP, OpenAI function calling, and custom protocols - bridging agents built on different frameworks.",
  },
]

const benefits = [
  {
    icon: <Target size={22} />,
    title: "Autonomous Multi-Agent Systems",
    desc: "Deploy swarms of specialised agents that self-organise, negotiate, and solve complex problems without human intervention.",
  },
  {
    icon: <Shield size={22} />,
    title: "Enterprise-Grade Security",
    desc: "End-to-end encrypted inter-agent communication with audit trails, access control, and compliance logging built in.",
  },
  {
    icon: <Zap size={22} />,
    title: "Sub-Second Agent Handoffs",
    desc: "Optimised message passing and task delegation protocols that keep latency under 100ms for real-time agent collaboration.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Observable Agent Networks",
    desc: "Full visibility into agent communication, task flows, and decision chains with integrated monitoring dashboards.",
  },
  {
    icon: <Globe size={22} />,
    title: "Cross-Platform Agent Mesh",
    desc: "Connect agents running on different clouds, frameworks, and infrastructure into a unified collaborative mesh network.",
  },
  {
    icon: <Users size={22} />,
    title: "Human-in-the-Loop Controls",
    desc: "Configurable escalation policies and approval gates so humans can intervene in critical agent-to-agent workflows.",
  },
]

const stats = [
  { value: "50+", label: "Agent Networks Deployed" },
  { value: "< 100ms", label: "Avg. Handoff Latency" },
  { value: "99.9%", label: "Message Delivery Rate" },
  { value: "10x", label: "Throughput vs Single-Agent" },
]

const faqs = [
  {
    question: "What is Agent-to-Agent (A2A) communication?",
    answer:
      "A2A is a protocol and architecture pattern where autonomous AI agents can discover, authenticate, and collaborate with each other to accomplish complex tasks - without requiring a central orchestrator.",
  },
  {
    question: "How does A2A differ from traditional API integration?",
    answer:
      "Unlike static APIs, A2A enables dynamic agent discovery, negotiation, and task delegation. Agents can find and collaborate with other agents at runtime based on capabilities, rather than relying on pre-configured endpoints.",
  },
  {
    question: "Is A2A compatible with Google's A2A protocol?",
    answer:
      "Yes. We support Google's A2A protocol natively and can also bridge it with other protocols like MCP, LangGraph, and custom inter-agent messaging formats for maximum interoperability.",
  },
  {
    question: "How do you ensure security in multi-agent systems?",
    answer:
      "Every agent gets a cryptographic identity. We use mutual TLS, signed messages, trust scoring, and configurable access control policies to ensure only authorised agents can interact.",
  },
  {
    question: "Can A2A work with our existing AI systems?",
    answer:
      "Absolutely. We build agent adapters and protocol bridges that let your existing AI models, chatbots, and automation tools participate in A2A networks without re-engineering them.",
  },
]

export default function Agent2AgentPage() {
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
            Agent 2 Agent
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Build Autonomous <br />
            <span className="text-green-400">Multi-Agent Systems</span>
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">
            Enable AI agents to discover, communicate, and collaborate securely - unlocking swarm intelligence for complex enterprise workflows.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => document.getElementById('agent-services')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-xl bg-[#1C3829] text-white font-semibold hover:bg-green-800 transition-colors">
              Explore A2A Solutions
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

      {/* ── CAPABILITIES ── */}
      <section id="agent-services" className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Core Capabilities
            </p>
            <h2 className="text-4xl font-extrabold">Agent-to-Agent</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services</h3>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              Build, deploy, and manage autonomous multi-agent networks that communicate, negotiate, and collaborate at enterprise scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((s) => (
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
              Why A2A
            </p>
            <h2 className="text-4xl font-extrabold">
              Key <span className="text-green-400">Benefits</span> of Agent Networks
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
              How We <span className="text-green-400">Build A2A Systems</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Agent Audit", desc: "We map your existing AI capabilities and identify opportunities for multi-agent orchestration." },
              { step: "02", title: "Protocol Design", desc: "We architect the communication protocol, trust model, and task delegation framework for your agent network." },
              { step: "03", title: "Agent Network Build", desc: "We build and deploy your multi-agent system with full observability, security, and escalation controls." },
              { step: "04", title: "Scale & Evolve", desc: "We expand the agent mesh, onboard new agents, and continuously optimise communication and task flows." },
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
              Key Technologies in <span className="text-green-400">A2A Development</span>
            </h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              We leverage the latest protocols, frameworks, and infrastructure to build production-grade agent networks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Google A2A Protocol", "Model Context Protocol (MCP)", "LangGraph & LangChain", "AutoGen Framework",
              "CrewAI", "OpenAI Swarm", "gRPC & Protobuf", "Apache Kafka",
              "Redis Streams", "NATS Messaging", "Mutual TLS / mTLS", "JWT & OAuth 2.0",
              "Kubernetes Operators", "Service Mesh (Istio)", "OpenTelemetry", "Vector Databases",
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
              Built by People Who <span className="text-green-400">Think in Agents</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Early adopters and contributors to Google A2A and MCP protocols",
              "Production multi-agent systems serving Fortune 500 enterprises",
              "Deep expertise in distributed systems and message-passing architectures",
              "Full observability stack - traces, logs, and metrics for every agent interaction",
              "Human-in-the-loop and escalation policies built into every deployment",
              "Flexible engagement: proof-of-concept to full-scale agent mesh",
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
                name: "Vikram P.",
                role: "VP Engineering, Fintech Platform",
                text: "Toadster built us a multi-agent fraud detection system where agents collaborate in real-time. False positive rate dropped 72% in the first quarter.",
              },
              {
                name: "Sarah L.",
                role: "CTO, Logistics Startup",
                text: "Their A2A architecture lets our routing, pricing, and dispatch agents negotiate autonomously. We process 5x more shipments with the same team.",
              },
              {
                name: "Dr. Rajan M.",
                role: "Head of AI, Insurance Group",
                text: "The agent mesh Toadster deployed handles claims processing end-to-end. Agents triage, verify, and approve claims without human bottlenecks.",
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
          <GitBranch size={48} className="text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to Build Your <span className="text-green-400">Agent Network</span>?
          </h2>
          <p className="text-page-fg-subtle text-lg mb-8 max-w-xl mx-auto">
            Book a free A2A architecture review and discover how multi-agent systems can transform your operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" title="Book a free A2A architecture review">
              Book Free Review
            </CTALink>
            <CTALink
               to="/services/agentic-ai"
              className="bg-transparent border border-page-border-strong hover:bg-page-fg/5"
              title="Explore Agentic AI"
            >
              Explore Agentic AI
            </CTALink>
          </div>
        </div>
      </section>

    </div>
  )
}

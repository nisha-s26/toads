import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import {
  ChevronDown,
  Lightbulb,
  Map,
  FlaskConical,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Target,
  Zap,
  BarChart3,
  CheckCircle,
  Star,
  ClipboardList,
  Network,
  Brain,
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

const consultingServices = [
  {
    icon: <Lightbulb size={22} />,
    title: "AI Readiness Assessment",
    desc: "A comprehensive audit of your data maturity, infrastructure, talent, and strategic readiness for AI adoption.",
  },
  {
    icon: <Map size={22} />,
    title: "AI Strategy & Roadmap",
    desc: "A clear, prioritised 12–24 month roadmap that aligns AI initiatives with your business objectives and budget.",
  },
  {
    icon: <ClipboardList size={22} />,
    title: "Use Case Identification",
    desc: "We identify, score, and prioritise AI use cases by ROI potential, feasibility, and strategic value.",
  },
  {
    icon: <Network size={22} />,
    title: "AI Architecture Design",
    desc: "Vendor-neutral architecture recommendations for your data platform, model stack, and MLOps infrastructure.",
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Proof of Concept Design",
    desc: "Structured PoC frameworks that de-risk AI investments before full-scale commitment.",
  },
  {
    icon: <Rocket size={22} />,
    title: "AI Transformation Programme",
    desc: "End-to-end change management, training, and governance frameworks for enterprise-wide AI adoption.",
  },
]

const benefits = [
  {
    icon: <Target size={22} />,
    title: "Unbiased Expert Guidance",
    desc: "We have no vendor affiliations — our recommendations are based purely on what's best for your business.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Risk Mitigation",
    desc: "Our structured frameworks prevent costly mistakes and failed AI experiments before they happen.",
  },
  {
    icon: <Zap size={22} />,
    title: "Accelerated Adoption",
    desc: "Skip years of trial and error with proven methodologies and battle-tested AI playbooks.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "ROI-Focused Approach",
    desc: "Every recommendation is tied to quantifiable business outcomes — not technology for technology's sake.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Long-Term Partnership",
    desc: "We stay engaged beyond the strategy phase — coaching teams and iterating as your AI matures.",
  },
  {
    icon: <Users size={22} />,
    title: "Cross-Functional Alignment",
    desc: "We bridge the gap between technical teams and business leadership to ensure AI initiatives succeed.",
  },
]

const stats = [
  { value: "150+", label: "Strategies Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4x", label: "Average ROI Achieved" },
  { value: "6 wks", label: "Avg Strategy Timeline" },
]

const faqs = [
  {
    question: "What does an AI consultation engagement look like?",
    answer:
      "A typical engagement starts with a 2-week discovery sprint (stakeholder interviews, data audit, process mapping), followed by a strategy workshop and delivery of a detailed roadmap with prioritised use cases, architecture recommendations, and an implementation plan.",
  },
  {
    question: "Do we need to have data ready before consulting?",
    answer:
      "Not at all. One of the key outputs of our assessment is a data readiness gap analysis with a clear plan to get you there. Many clients start consulting before their data infrastructure is mature.",
  },
  {
    question: "How is this different from hiring an internal AI team?",
    answer:
      "Consultation gives you immediate access to senior AI architects, strategists, and domain experts without the 6–12 month hiring cycle. It's the fastest way to get a credible, actionable AI strategy.",
  },
  {
    question: "Can you help us evaluate AI vendors and tools?",
    answer:
      "Yes. We provide independent vendor evaluation frameworks, RFP support, and technical due diligence for AI platform, tooling, and model provider selection.",
  },
  {
    question: "Do you help with AI governance and ethics?",
    answer:
      "Absolutely. We build responsible AI frameworks covering bias auditing, explainability requirements, data privacy, and governance policies that satisfy board-level and regulatory scrutiny.",
  },
]

export default function AIConsultationPage() {
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
            AI Consultation
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Strategic Guidance for <br />
            <span className="text-green-400">AI Adoption</span> That Works
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Cut through the hype. Our AI consultants help you build a clear, actionable strategy — identifying the right use cases, architecture, and roadmap to deliver real business value.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact">Book a Free Strategy Call</CTALink>
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

      {/* ── MARQUEE ── */}
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

      {/* ── SERVICES ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              What We Offer
            </p>
            <h2 className="text-4xl font-extrabold">AI Consultation</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services We Provide</h3>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              From readiness assessments to full transformation programmes — expert AI guidance at every stage of your journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {consultingServices.map((s) => (
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

      {/* ── BENEFITS ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Why It Matters
            </p>
            <h2 className="text-4xl font-extrabold">
              Key <span className="text-green-400">Benefits</span> of AI Consultation
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#050d18] border border-white/5 rounded-2xl p-6 flex gap-5 hover:border-green-800/40 transition-colors"
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

      {/* ── STATS ── */}
      <section className="py-16 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#0a1628] border border-white/5 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-extrabold text-green-400 mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="our-process" className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Our Process
            </p>
            <h2 className="text-4xl font-extrabold">
              How We <span className="text-green-400">Consult</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Stakeholder interviews, data audit, and process mapping to understand your current state." },
              { step: "02", title: "Analysis", desc: "Scoring use cases, benchmarking against industry, and identifying quick wins vs strategic bets." },
              { step: "03", title: "Strategy Delivery", desc: "A detailed roadmap with prioritised initiatives, architecture, tooling, and cost estimates." },
              { step: "04", title: "Ongoing Advisory", desc: "Monthly check-ins, vendor support, and strategic oversight as you execute your AI plan." },
            ].map((item) => (
              <div key={item.step} className="bg-[#050d18] border border-white/5 rounded-2xl p-6">
                <div className="text-green-400 text-xs font-bold tracking-widest mb-3">{item.step}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TOADSTER ── */}
      <section className="py-20 px-6 bg-[#050d18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Why Toadster
            </p>
            <h2 className="text-4xl font-extrabold">
              Advisors Who <span className="text-green-400">Build, Not Just Advise</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Senior AI architects with 10+ years of production experience",
              "Vendor-neutral — we recommend what's right, not what's profitable",
              "Deep industry knowledge across healthcare, fintech, retail & more",
              "Proven frameworks: AI readiness matrix, use case scoring, ROI modelling",
              "Seamless handoff to implementation if you choose to build with us",
              "Fixed-fee engagements with no surprise costs or scope creep",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-[#0a1628] border border-white/5 rounded-xl p-4">
                <CheckCircle size={18} className="text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 bg-[#0a1628]">
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
                name: "Sanjay T.",
                role: "CEO, Series B SaaS",
                text: "We spent 18 months spinning wheels on AI. Two weeks with Toadster gave us a roadmap we're still executing two years later. Total game-changer.",
              },
              {
                name: "Meera L.",
                role: "CDO, Insurance Company",
                text: "Their use case scoring model helped us deprioritise three 'shiny object' projects and focus on two that delivered €2M in savings within 9 months.",
              },
              {
                name: "James O.",
                role: "VP Product, E-Commerce",
                text: "The vendor evaluation alone saved us from a €500K mistake. Unbiased, thorough, and refreshingly honest about trade-offs.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-[#050d18] border border-white/5 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-green-400 fill-green-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-green-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[#050d18]">
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
      <section className="py-24 px-6 bg-[#0a1628] text-center">
        <div className="max-w-3xl mx-auto">
          <Brain size={48} className="text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to Build Your <span className="text-green-400">AI Strategy</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Book a free 45-minute strategy call and walk away with clarity on where AI can have the biggest impact for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-10 py-3.5 rounded-xl bg-[#1C3829] text-white font-semibold hover:bg-green-800 transition-colors">
              Book Free Strategy Call
            </button>
            <button className="px-10 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
              Download AI Readiness Guide
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

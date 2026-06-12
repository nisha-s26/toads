"use client"

import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import {
  Building,
  ChevronDown,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  Truck,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Users,
  Target,
  Zap,
  BarChart3,
  CheckCircle,
  Star,
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


const industries = [
  {
    icon: <HeartPulse size={22} />,
    title: "Healthcare & Life Sciences",
    desc: "AI-powered diagnostics, patient data management, drug discovery pipelines, and clinical decision support systems.",
  },
  {
    icon: <Landmark size={22} />,
    title: "Banking & Financial Services",
    desc: "Fraud detection, risk scoring, automated underwriting, regulatory compliance, and personalised wealth management.",
  },
  {
    icon: <ShoppingCart size={22} />,
    title: "Retail & E-Commerce",
    desc: "Demand forecasting, personalised recommendations, dynamic pricing, and intelligent inventory management.",
  },
  {
    icon: <Factory size={22} />,
    title: "Manufacturing & Industry 4.0",
    desc: "Predictive maintenance, quality control vision systems, supply chain optimization, and smart factory automation.",
  },
  {
    icon: <Truck size={22} />,
    title: "Logistics & Supply Chain",
    desc: "Route optimization, last-mile delivery AI, warehouse automation, and real-time shipment intelligence.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Education & EdTech",
    desc: "Adaptive learning systems, automated grading, student performance prediction, and intelligent tutoring bots.",
  },
]

const benefits = [
  {
    icon: <Target size={22} />,
    title: "Domain-Specific Models",
    desc: "AI trained on industry data outperforms generic models by 40-60% on domain tasks.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Regulatory Compliance",
    desc: "Built-in compliance frameworks for HIPAA, GDPR, PCI-DSS, and sector-specific regulations.",
  },
  {
    icon: <Zap size={22} />,
    title: "Rapid Time to Value",
    desc: "Pre-built industry accelerators reduce deployment timelines from months to weeks.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Measurable ROI",
    desc: "Every engagement is scoped with clear KPIs and business impact metrics from day one.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Scalable Architecture",
    desc: "Solutions designed to scale from pilot to enterprise without re-engineering.",
  },
  {
    icon: <Users size={22} />,
    title: "Industry Expert Teams",
    desc: "Dedicated squads with both AI engineering depth and vertical domain expertise.",
  },
]

const stats = [
  { value: "30+", label: "Industries Served" },
  { value: "250+", label: "Projects Delivered" },
  { value: "94%", label: "Client Satisfaction" },
  { value: "3x", label: "Average ROI" },
]

const faqs = [
  {
    question: "What industries do you specialise in?",
    answer:
      "We have deep experience across healthcare, BFSI, retail, manufacturing, logistics, and education. Our teams include domain specialists who understand the nuances of each vertical.",
  },
  {
    question: "How long does it take to deploy an industry AI solution?",
    answer:
      "Timelines vary by complexity, but most pilot deployments land in 6-12 weeks. Our industry accelerators and pre-built data connectors significantly compress delivery cycles.",
  },
  {
    question: "Do you handle data privacy and compliance?",
    answer:
      "Absolutely. We build with compliance-first architecture - HIPAA for healthcare, PCI-DSS for fintech, GDPR for EU-facing products. Security audits are included in every engagement.",
  },
  {
    question: "Can existing systems be integrated?",
    answer:
      "Yes. We specialise in fitting AI into existing ERP, CRM, HRIS, and custom platforms via APIs, webhooks, and data pipelines - with zero disruption to live operations.",
  },
  {
    question: "What does the engagement model look like?",
    answer:
      "We offer a free AI readiness audit, followed by a scoped pilot. Once the pilot demonstrates value, we move to a full-scale rollout with ongoing MLOps support.",
  },
]

export default function IndustrySolutionsPage() {
  return (
    <div className="bg-page-bg text-page-fg">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden  py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse at center, var(--brand-green-radial) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">
            Industry Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            AI Built for <br />
            <span className="text-green-400">Your Industry</span>
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">
            Specialised AI systems designed around the workflows, data, and compliance requirements of your sector - not generic tools retrofitted to your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact">Let's Talk</CTALink>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-xl border border-page-border-strong text-page-fg font-semibold hover:bg-page-fg/5 transition-colors"
            >
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

      {/* ── INDUSTRIES ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Verticals We Serve
            </p>
            <h2 className="text-4xl font-extrabold">Industry-Specific</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">AI Solutions</h3>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              From healthcare to fintech, we bring deep domain expertise and production-grade AI to your sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((s) => (
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
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Why It Matters
            </p>
            <h2 className="text-4xl font-extrabold">
              Key <span className="text-green-400">Benefits</span> of Industry AI
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
      <section id="how-it-works" className="py-20 bg-page-bg-alt">
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
              { step: "01", title: "Industry Audit", desc: "We assess your current tech stack, data maturity, and AI readiness across your vertical." },
              { step: "02", title: "Solution Design", desc: "We architect domain-specific AI models and integration blueprints tailored to your workflows." },
              { step: "03", title: "Pilot Build", desc: "We deliver a working pilot in 6-12 weeks with clear KPIs and measurable outcomes." },
              { step: "04", title: "Scale & Optimise", desc: "We roll out enterprise-wide, monitor performance, and continuously improve the system." },
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

      {/* ── WHY TOADSTER ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Why Toadster
            </p>
            <h2 className="text-4xl font-extrabold">
              Built by People Who <span className="text-green-400">Know Your Industry</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Dedicated vertical teams with domain certifications",
              "Pre-built data connectors for major ERP, CRM & HIS systems",
              "Compliance-first architecture for regulated industries",
              "Proven pilots with measurable outcomes before full commitment",
              "MLOps included - monitoring, drift detection, and retraining",
              "Flexible engagement: project-based or ongoing retainer",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-page-bg-alt border border-page-border rounded-xl p-4">
                <CheckCircle size={18} className="text-green-400 shrink-0 mt-0.5" />
                <span className="text-page-fg-subtle text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-page-bg-alt">
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
                name: "Rahul M.",
                role: "CTO, Fintech Startup",
                text: "Toadster's fraud detection model reduced our false positives by 68% in the first month. Domain knowledge made all the difference.",
              },
              {
                name: "Priya S.",
                role: "VP Operations, Retail Chain",
                text: "Their demand forecasting AI cut overstock by 30%. They understood retail workflows without us needing to explain every nuance.",
              },
              {
                name: "Dr. Anand K.",
                role: "Head of IT, Hospital Group",
                text: "HIPAA compliance was non-negotiable for us. Toadster delivered a patient triage AI that was compliant from day one.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-page-bg border border-page-border rounded-2xl p-6 flex flex-col gap-4"
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
      <section className="py-20 bg-page-bg">
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
      <section className="py-24 bg-page-bg-alt text-center">
        <div className="max-w-3xl mx-auto">
          <Building size={48} className="text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to Transform <span className="text-green-400">Your Industry</span>?
          </h2>
          <p className="text-page-fg-subtle text-lg mb-8 max-w-xl mx-auto">
            Book a free AI readiness audit and see exactly how AI can create measurable value in your sector.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" title="Book a free industry AI audit">
              Book Free Audit
            </CTALink>
            <CTALink
               to="/blogs"
              className="bg-transparent border border-page-border-strong hover:bg-page-fg/5"
              title="Read industry AI case studies"
            >
              Read Case Studies
            </CTALink>
          </div>
        </div>
      </section>

    </div>
  )
}

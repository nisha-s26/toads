import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import {
  Cpu,
  ChevronDown,
  Shield,
  Zap,
  Brain,
  Layers,
  CheckCircle,
  Star,
  Users,
  Target,
  BarChart3,
  Sparkles,
  Network,
  Atom,
  Scan,
  Binary,
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
    icon: <Brain size={22} />,
    title: "Neuro-Symbolic AI",
    desc: "Hybrid systems combining neural networks with symbolic reasoning for explainable, reliable AI that can handle logical tasks and learn from data simultaneously.",
  },
  {
    icon: <Network size={22} />,
    title: "Federated Learning",
    desc: "Train powerful AI models across decentralised data sources without moving sensitive data — privacy-preserving machine learning at enterprise scale.",
  },
  {
    icon: <Atom size={22} />,
    title: "Quantum-Ready AI",
    desc: "AI architectures designed to leverage quantum computing advantages — from optimisation problems to molecular simulation and cryptography.",
  },
  {
    icon: <Scan size={22} />,
    title: "Self-Supervised Learning",
    desc: "Models that learn from unlabelled data, dramatically reducing annotation costs and enabling AI deployment in data-scarce domains.",
  },
  {
    icon: <Layers size={22} />,
    title: "Multi-Modal AI Systems",
    desc: "Unified models that reason across text, images, audio, video, and structured data — enabling richer understanding and decision-making.",
  },
  {
    icon: <Binary size={22} />,
    title: "Edge AI & TinyML",
    desc: "Deploy sophisticated AI models on resource-constrained edge devices — from microcontrollers to smartphones — with optimised inference.",
  },
]

const benefits = [
  {
    icon: <Target size={22} />,
    title: "Frontier Performance",
    desc: "Access state-of-the-art AI capabilities that outperform conventional approaches by 30-60% on complex, real-world tasks.",
  },
  {
    icon: <Shield size={22} />,
    title: "Future-Proof Architecture",
    desc: "Systems designed to evolve with AI research — modular, upgradeable, and ready for the next wave of breakthroughs.",
  },
  {
    icon: <Zap size={22} />,
    title: "Efficiency at Scale",
    desc: "Advanced techniques like model distillation, quantisation, and sparse inference reduce compute costs by up to 80%.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Explainable AI",
    desc: "Neuro-symbolic and attention-based architectures that provide interpretable decisions — critical for regulated industries.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Few-Shot & Zero-Shot Learning",
    desc: "Models that generalise from minimal examples, enabling rapid deployment in new domains without extensive training data.",
  },
  {
    icon: <Users size={22} />,
    title: "Research-to-Production Pipeline",
    desc: "Dedicated teams that translate cutting-edge research papers into production-grade systems within weeks, not months.",
  },
]

const stats = [
  { value: "40+", label: "Advanced AI Projects" },
  { value: "15+", label: "Research Publications" },
  { value: "5x", label: "Avg. Performance Gain" },
  { value: "80%", label: "Compute Cost Reduction" },
]

const faqs = [
  {
    question: "What makes your AI technology 'advanced'?",
    answer:
      "We implement techniques from the frontier of AI research — neuro-symbolic reasoning, federated learning, self-supervised methods, multi-modal fusion, and quantum-ready architectures — that go beyond standard deep learning approaches.",
  },
  {
    question: "Do we need a large dataset to use advanced AI?",
    answer:
      "Not necessarily. Techniques like self-supervised learning, few-shot learning, and transfer learning allow us to build high-performance models even with limited labelled data.",
  },
  {
    question: "How do you handle model interpretability?",
    answer:
      "We use neuro-symbolic hybrids, attention visualisation, SHAP/LIME explanations, and custom interpretability layers to ensure models produce explainable, auditable decisions.",
  },
  {
    question: "Can advanced AI run on edge devices?",
    answer:
      "Yes. We specialise in model compression, quantisation, and TinyML techniques that deploy sophisticated AI on microcontrollers, mobile devices, and edge hardware with minimal latency.",
  },
  {
    question: "What is your research-to-production process?",
    answer:
      "We monitor top AI conferences (NeurIPS, ICML, ICLR), prototype promising techniques within 2-4 weeks, benchmark against your use case, and productionise the best-performing approach with full MLOps.",
  },
]

export default function AdvancedAITechPage() {
  return (
    <div className="bg-page-bg text-page-fg">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-9xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">
            Advanced AI Tech
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Cutting-Edge AI for <br />
            <span className="text-green-400">Complex Problems</span>
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">
            From neuro-symbolic reasoning to federated learning and quantum-ready architectures — we bring frontier AI research to production for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-xl bg-[#1C3829] text-white font-semibold hover:bg-green-800 transition-colors"
              onClick={() => document.getElementById('what-we-build')?.scrollIntoView({ behavior: 'smooth' })}
            >
              What We Build
            </button>
            <button
              className="px-8 py-3 rounded-xl border border-page-border-strong text-page-fg font-semibold hover:bg-page-fg/5 transition-colors"
              onClick={() => document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How We Works
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
            <h2 className="text-4xl font-extrabold">Advanced AI</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Capabilities</h3>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              Beyond standard machine learning — we implement frontier techniques that deliver step-change improvements in accuracy, efficiency, and capability.
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
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">
              Why It Matters
            </p>
            <h2 className="text-4xl font-extrabold">
              Key <span className="text-green-400">Benefits</span> of Advanced AI
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
      <section id="how-we-work" className="py-20 bg-page-bg-alt">
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
              { step: "01", title: "Research Sprint", desc: "We survey the latest AI research and identify techniques with the highest impact potential for your use case." },
              { step: "02", title: "Rapid Prototyping", desc: "We prototype 2-3 advanced approaches in parallel, benchmarking against your baseline within 2-4 weeks." },
              { step: "03", title: "Production Engineering", desc: "The winning approach is hardened for production — optimised, tested, documented, and deployed with full MLOps." },
              { step: "04", title: "Continuous Research", desc: "We continuously monitor new research and upgrade your system as better techniques emerge." },
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
              Key Technologies We <span className="text-green-400">Leverage</span>
            </h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">
              Frontier frameworks, libraries, and infrastructure powering our advanced AI solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "PyTorch 2.0 + compile", "JAX & Flax", "Hugging Face Transformers", "NVIDIA NeMo",
              "PySyft (Federated)", "Qiskit (Quantum ML)", "Weights & Biases", "MLflow & Kubeflow",
              "ONNX Runtime", "TensorRT & Triton", "DeepSpeed & FSDP", "vLLM & TGI",
              "LangChain & LlamaIndex", "Mamba & SSM Models", "Vision Transformers", "Mixture of Experts",
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
              Research Depth Meets <span className="text-green-400">Engineering Rigour</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Team with publications at NeurIPS, ICML, ICLR, and CVPR",
              "From paper to production in weeks — not months",
              "Deep expertise in model compression, distillation, and edge deployment",
              "Quantum computing partnerships with IBM and Google",
              "Full MLOps and model governance for regulated industries",
              "Flexible engagement: research sprints, proof-of-concept, or full build",
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
                name: "James T.",
                role: "CTO, Biotech Startup",
                text: "Toadster's neuro-symbolic approach to drug interaction prediction was 10x more interpretable than our previous black-box model — and more accurate.",
              },
              {
                name: "Meera K.",
                role: "VP Data Science, Manufacturing",
                text: "Their self-supervised learning pipeline eliminated our need for expensive manual labelling. We went from 10K labelled samples to zero — with better accuracy.",
              },
              {
                name: "Alex R.",
                role: "Head of Innovation, Telecom",
                text: "The federated learning system Toadster built lets us train across regional data centres without moving customer data. Regulators love it.",
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
          <Cpu size={48} className="text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to Leverage <span className="text-green-400">Frontier AI</span>?
          </h2>
          <p className="text-page-fg-subtle text-lg mb-8 max-w-xl mx-auto">
            Book a free research consultation and discover which advanced AI techniques can give your business a decisive edge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" title="Book a free Advanced AI consultation">
              Book Free Consultation
            </CTALink>
            <CTALink
              to="/blogs"
              className="bg-transparent border border-page-border-strong hover:bg-page-fg/5"
              title="Read our research and insights"
            >
              Read Research Insights
            </CTALink>
          </div>
        </div>
      </section>

    </div>
  )
}

"use client"

import Image from "next/image"
import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import { Zap, Brain, BarChart3, Database, Settings, Network, Shield, TrendingUp, Clock, Users, Target, ChevronDown, CheckCircle, Star, Cpu, Layers, Activity, Eye, Code2, GitBranch } from "lucide-react"
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


export default function MachineLearningPage() {
  return (
    <div className="bg-page-bg text-page-fg">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden  py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">Machine Learning</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Business with the Top<br /><span className="text-green-400">Machine Learning</span> Company in USA
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">Custom ML models that learn from your data, predict outcomes, and automate decisions - delivering measurable ROI at enterprise scale.</p>
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
            <h2 className="text-4xl font-extrabold">Top Machine Learning</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services to Transform Your Business</h3>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">Custom ML solutions built on your data to power predictions, automation, and intelligent decision-making.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Brain size={22} />, title: "Predictive Modeling", desc: "Forecasting models for demand, churn, revenue, and risk using your historical data." },
              { icon: <Layers size={22} />, title: "Classification & Regression", desc: "Supervised learning models that categorize data and predict continuous outcomes accurately." },
              { icon: <Eye size={22} />, title: "Anomaly Detection", desc: "Identify fraud, system failures, and outliers in real time using unsupervised ML techniques." },
              { icon: <Network size={22} />, title: "Recommendation Systems", desc: "Personalized recommendation engines for e-commerce, media, and SaaS platforms." },
              { icon: <Settings size={22} />, title: "Feature Engineering & Selection", desc: "Expert feature crafting and selection to maximize model performance and reduce overfitting." },
              { icon: <Activity size={22} />, title: "ML Model Monitoring & Retraining", desc: "Continuous drift detection and automated retraining pipelines to keep models accurate." },
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
            <h2 className="text-4xl font-extrabold">Key <span className="text-green-400">Benefits</span> of Machine Learning for Businesses</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Zap size={22} />, title: "Automated Decision Making", desc: "Replace slow, manual decisions with ML systems that act in milliseconds based on real data signals." },
              { icon: <BarChart3 size={22} />, title: "Accurate Business Forecasting", desc: "Predict sales, inventory needs, and customer behavior weeks ahead with statistical precision." },
              { icon: <Users size={22} />, title: "Reduced Customer Churn", desc: "Identify at-risk customers before they leave and trigger personalized retention actions automatically." },
              { icon: <Target size={22} />, title: "Hyper-Personalization at Scale", desc: "Deliver uniquely personalized experiences to millions of users simultaneously without manual effort." },
              { icon: <Shield size={22} />, title: "Fraud & Risk Detection", desc: "Catch fraud patterns, compliance risks, and anomalies in real time before they cause damage." },
              { icon: <TrendingUp size={22} />, title: "Compounding ROI Over Time", desc: "ML models improve as they see more data - your competitive advantage grows the longer you deploy." },
            ].map((b) => (
              <div key={b.title} className="bg-page-bg-alt border border-page-border rounded-2xl p-6 flex gap-5 hover:border-green-800/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-page-fg mb-1">{b.title}</h3>
                  <p className="text-page-fg-muted text-sm leading-relaxed">{b.desc}</p>
                </div>
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
            <h2 className="text-4xl font-extrabold">Our Process in Machine Learning</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { step: "01", title: "Problem Framing & Data Audit", desc: "We define the ML problem, assess data quality, and map out what's achievable." },
                { step: "02", title: "Data Engineering & Feature Design", desc: "Build pipelines, engineer features, and create clean training/test datasets." },
                { step: "03", title: "Model Development & Experimentation", desc: "Train, compare, and tune multiple models with systematic experiment tracking." },
                { step: "04", title: "Evaluation & Validation", desc: "Rigorous offline and online validation including A/B testing and shadow mode testing." },
                { step: "05", title: "Deployment, Monitoring & Retraining", desc: "Deploy with full observability and automate retraining when model drift is detected." },
              ].map((p) => (
                <div key={p.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-extrabold text-green-900 shrink-0 w-12">{p.step}</span>
                  <div><h4 className="font-bold text-page-fg mb-1">{p.title}</h4><p className="text-page-fg-muted text-sm">{p.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl overflow-hidden border border-page-border relative h-[400px] md:h-full group">
              <Image src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" alt="Machine Learning Process" title="Machine Learning Process" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Full Suite</p>
            <h2 className="text-4xl font-extrabold">Explore Our Core ML Offerings</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <BarChart3 size={22} />, title: "Demand Forecasting", desc: "Accurate demand prediction for retail, supply chain, and operations." },
              { icon: <Shield size={22} />, title: "Fraud Detection", desc: "Real-time anomaly detection for financial transactions and user behaviour." },
              { icon: <Users size={22} />, title: "Churn Prediction", desc: "Identify and retain at-risk customers before they leave." },
              { icon: <Network size={22} />, title: "Clustering & Segmentation", desc: "Customer and data segmentation for targeted strategies." },
              { icon: <Eye size={22} />, title: "Computer Vision ML", desc: "Image classification, object detection, and OCR pipelines." },
              { icon: <Database size={22} />, title: "Time Series Forecasting", desc: "ARIMA, LSTM, and Transformer-based forecasting models." },
              { icon: <Cpu size={22} />, title: "NLP & Text ML", desc: "Sentiment, classification, NER, and summarization models." },
              { icon: <GitBranch size={22} />, title: "Reinforcement Learning", desc: "RL agents for dynamic pricing, robotics, and game-theoretic problems." },
            ].map((o) => (
              <div key={o.title} className="bg-page-bg border border-page-border rounded-2xl p-6 hover:border-green-800/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">{o.icon}</div>
                <h3 className="font-semibold text-page-fg mb-2">{o.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Portfolio</p>
            <h2 className="text-4xl font-extrabold">Our Work Speaks for Itself</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Predictive ML", title: "DemandEdge", desc: "Reduced forecast error by 62% for a FMCG client, saving $900K in overstock costs annually.", metric: "62% error reduction", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Fraud Detection", title: "SecureFlow", desc: "Built a real-time fraud detection model processing 2M+ transactions/day with 99.2% precision.", metric: "99.2% precision", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Churn ML", title: "RetainIQ", desc: "Predicted churn 45 days ahead for a SaaS platform, improving retention by 38% in 6 months.", metric: "38% retention gain", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
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
      <section className="bg-page-bg-alt py-16">
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
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Developers</p>
            <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">Hire Our ML Engineers to Build Scalable, Secure, and Smart Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["scikit-learn & XGBoost", "PyTorch & TensorFlow", "Feature Engineering", "Model Interpretability (SHAP)", "Time Series (ARIMA/LSTM)", "MLflow & W&B Tracking", "Distributed Training", "Cloud ML (SageMaker/Vertex)", "A/B Testing & Experimentation", "Data Pipeline Engineering", "Model Compression & Distillation", "AutoML & Hyperparameter Tuning", "Computer Vision ML", "NLP & Text Classification", "Reinforcement Learning", "Real-time Inference APIs"].map((cap) => (
              <div key={cap} className="bg-page-bg-alt rounded-xl p-4 border border-page-border flex items-center gap-3 hover:border-green-800/40 transition-colors">
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-page-fg-subtle text-sm font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INNOVATIONS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What's New</p>
            <h2 className="text-4xl font-extrabold">Key Innovations in Machine Learning</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Code2 size={22} />, label: "Foundation Models for Tabular Data" },
              { icon: <Brain size={22} />, label: "AutoML & Neural Architecture Search" },
              { icon: <Database size={22} />, label: "Federated Learning for Privacy-Safe ML" },
              { icon: <Layers size={22} />, label: "Large Language Models for Prediction" },
              { icon: <Activity size={22} />, label: "Real-time Streaming ML Pipelines" },
              { icon: <Shield size={22} />, label: "Explainable AI (XAI) & Fairness Tooling" },
            ].map((item) => (
              <div key={item.label} className="bg-page-bg rounded-2xl p-5 border border-page-border flex items-center gap-4 hover:border-green-800/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">{item.icon}</div>
                <span className="text-page-fg font-medium text-sm">{item.label}</span>
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
              { name: "Neha Joshi", role: "VP Analytics, RetailMax", text: "Toadster's ML team built a forecasting model that reduced our forecast error by 60%. The model runs in real-time and has saved us millions in inventory costs." },
              { name: "Rohit Gupta", role: "CTO, PaySafe", text: "Their fraud detection model processes our transactions in under 50ms with 99%+ precision. We've cut chargebacks by 72% since deployment." },
              { name: "Emma Walsh", role: "Data Science Lead, GrowthCo", text: "The churn prediction model they built for us is incredibly accurate. We identified 30% more at-risk customers in the first week." },
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
          <h2 className="text-4xl font-extrabold mb-4">Ready to Harness the Power of<br /><span className="text-green-400">AI for Your Business?</span></h2>
          <p className="text-page-fg-muted mb-8">Let our ML engineers build models that learn from your data and drive real business outcomes.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" className="text-lg" title="Talk to our ML engineers">
              Chat With Us
            </CTALink>
            <CTALink
               to="/services/ai-data-analytics"
              className="bg-transparent border border-page-border-strong hover:bg-page-fg/5 text-lg"
              title="Explore AI Data Analytics"
            >
              Explore Data Analytics
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
              { tag: "Machine Learning", title: "Top ML Use Cases Driving ROI for Enterprises in 2026", date: "Feb 25, 2026" },
              { tag: "MLOps", title: "How to Prevent Model Drift in Production ML Systems", date: "Feb 10, 2026" },
              { tag: "Predictive AI", title: "XGBoost vs Deep Learning: Choosing the Right Model for Your Data", date: "Jan 28, 2026" },
            ].map((b) => (
              <div key={b.title} className="bg-page-bg-alt rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-colors cursor-pointer group">
                <div className="h-36 bg-linear-to-br from-green-900/30 to-page-bg flex items-center justify-center"><Zap size={40} className="text-green-700" /></div>
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
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Got Questions?</p>
            <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          {[
            { q: "What is Machine Learning and how can it benefit my business?", a: "Machine Learning enables systems to learn from data and improve over time without being explicitly programmed. It drives better forecasting, automation, fraud detection, personalization, and decision-making at scale." },
            { q: "How long does it take to build a custom ML model?", a: "A typical PoC takes 2-4 weeks. Production deployments range from 6-16 weeks depending on data maturity, model complexity, and integration requirements." },
            { q: "How much data do I need to build an effective ML model?", a: "It depends on the problem. Some models work with thousands of examples; others require millions. We assess your data during discovery and recommend augmentation strategies if needed." },
            { q: "Is my data secure during the machine learning development process?", a: "Absolutely. We operate under strict NDAs, support on-premise and private cloud deployments, and use end-to-end encryption for all data transfers and storage." },
            { q: "Can you improve our existing machine learning models?", a: "Yes. We audit existing models, identify performance bottlenecks, retrain with improved features or architectures, and implement proper MLOps for sustained accuracy." },
            { q: "Do you provide ongoing model support and maintenance?", a: "Yes - our managed ML service plans include 24/7 monitoring, automated drift detection, scheduled retraining, and continuous performance improvements." },
          ].map((item) => (<FAQItem key={item.q} question={item.q} answer={item.a} />))}
        </div>
      </section>
    </div>
  )
}

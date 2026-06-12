"use client"

import Image from "next/image"
import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import { BarChart3, Database, TrendingUp, Brain, Shield, Clock, Users, Zap, ChevronDown, CheckCircle, Star, Activity, Network, Settings, Eye, Server, LineChart } from "lucide-react"
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


const industries = [
  { name: "Financial Services", desc: "Real-time fraud detection, credit risk modelling, and regulatory reporting powered by AI-driven data analytics." },
  { name: "Retail & E-Commerce", desc: "Customer behaviour analytics, demand forecasting, basket analysis, and personalised recommendation engines." },
  { name: "Healthcare", desc: "Patient outcome prediction, operational efficiency analytics, clinical trial analysis, and population health insights." },
  { name: "Manufacturing", desc: "Predictive maintenance, OEE analytics, supply chain optimisation, and production yield improvement." },
  { name: "Telecom", desc: "Churn prediction, network analytics, revenue assurance, and customer segmentation at petabyte scale." },
  { name: "Logistics & Supply Chain", desc: "Route optimisation, inventory analytics, delivery prediction, and demand sensing across global supply networks." },
]

export default function AIDataAnalyticsPage() {
  return (
    <div className="bg-page-bg text-page-fg">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden  py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse at center, var(--brand-green-radial) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">AI Data Analytics</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Data with<br /><span className="text-green-400">AI Data Analytics Services</span>
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">
            Supercharge your strategy with AI Data Analytics that uncover real insights, find hidden patterns in your data, and turn your Business Intelligence to the next level.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact">Explore AI Analytics</CTALink>
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
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Offerings</p>
            <h2 className="text-4xl font-extrabold">Our AI Data Analytics</h2>
            <h3 className="text-2xl font-bold text-green-400 mt-1 mb-4">Services</h3>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">From raw data pipelines to executive dashboards and predictive models - we build end-to-end analytics platforms that turn your data into competitive advantage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <BarChart3 size={22} />, title: "Predictive Analytics Solutions", desc: "Machine learning models that predict churn, demand, risk, and opportunity - giving your teams foresight, not just hindsight." },
              { icon: <Database size={22} />, title: "Data Warehouse & Lake Architecture", desc: "Design and build scalable data warehouses and lakes on Snowflake, BigQuery, Databricks, or AWS Redshift - optimised for analytics workloads." },
              { icon: <LineChart size={22} />, title: "Business Intelligence & Dashboards", desc: "Real-time Power BI, Tableau, Looker, and custom dashboards that surface the KPIs that matter to every stakeholder." },
              { icon: <Activity size={22} />, title: "Real-Time Streaming Analytics", desc: "Process and analyse data streams in real time with Kafka, Spark Streaming, and Flink - for instant operational insights." },
              { icon: <Brain size={22} />, title: "AI-Powered Forecasting & Optimisation", desc: "Time-series forecasting, price optimisation, inventory planning, and resource allocation models tuned for your business." },
              { icon: <Settings size={22} />, title: "Analytics & Risk Management", desc: "Data quality frameworks, governance policies, and risk dashboards that ensure your analytics are accurate, compliant, and trusted." },
            ].map((s) => (
              <div key={s.title} className="bg-page-bg-alt border border-page-border rounded-2xl p-6 hover:border-green-800/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">{s.icon}</div>
                <h3 className="font-bold text-page-fg mb-2">{s.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Why Us</p>
            <h2 className="text-4xl font-extrabold">Why Choose Our Data Analytics</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">We don't just build dashboards. We engineer data products that drive measurable decisions and business outcomes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Brain size={28} />, title: "AI-Powered Insights", desc: "Our models go beyond BI - predicting what will happen next and prescribing actions, not just describing the past." },
              { icon: <TrendingUp size={28} />, title: "Business-First Approach", desc: "Every analytics deliverable is tied to a business outcome - revenue, cost, risk, or customer KPI - not just a chart." },
              { icon: <Shield size={28} />, title: "Enterprise-Grade Security", desc: "Row-level security, data masking, RBAC, and compliance with GDPR, SOC2, and HIPAA built into every solution." },
              { icon: <Zap size={28} />, title: "Fast-Driven Delivery", desc: "Agile sprints, rapid prototyping, and iterative delivery - so you see value in weeks, not quarters." },
              { icon: <Database size={28} />, title: "Modern Data Stack Expertise", desc: "We work across Snowflake, Databricks, dbt, Airflow, BigQuery, and all major cloud platforms - no vendor lock-in." },
              { icon: <Users size={28} />, title: "Trusted Data Partners", desc: "Long-term partnerships with 150+ clients who rely on our analytics platforms as the source of truth for their business." },
            ].map((b) => (
              <div key={b.title} className="bg-page-bg border border-page-border rounded-2xl p-6 hover:border-green-800/30 transition-colors text-center">
                <div className="w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4 mx-auto">{b.icon}</div>
                <h3 className="font-bold text-page-fg mb-2">{b.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS CAROUSEL STYLE ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What You Gain</p>
            <h2 className="text-4xl font-extrabold">Benefits of Working with Mobcoder AI</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">Our clients consistently report faster decisions, lower costs, and higher revenue after deploying our analytics solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Eye size={22} />, title: "Accurate Data Solutions", desc: "Rigorous data quality engineering and validation frameworks that ensure every metric your teams rely on is accurate and trusted." },
              { icon: <Network size={22} />, title: "Best Decisions & Data Strategies", desc: "From data strategy consulting to architecture design - we align your data investments with your most important business decisions." },
              { icon: <Server size={22} />, title: "Scalable Data Infrastructure", desc: "Cloud-native data platforms that scale cost-efficiently from gigabytes to petabytes without re-architecting." },
              { icon: <Activity size={22} />, title: "Seamless Data Integration", desc: "Connect every source - CRM, ERP, IoT, SaaS, and databases - into a unified data layer that powers all your analytics." },
            ].map((b) => (
              <div key={b.title} className="bg-page-bg-alt border border-page-border rounded-2xl p-6 flex gap-5 hover:border-green-800/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 shrink-0">{b.icon}</div>
                <div><h3 className="font-bold text-page-fg mb-1">{b.title}</h3><p className="text-page-fg-muted text-sm leading-relaxed">{b.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-page-bg-alt py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">At a Glance</p>
          <h2 className="text-3xl font-extrabold mb-4">Highlights of <span className="text-green-400">Achievements</span></h2>
          <p className="text-page-fg-muted max-w-xl mx-auto mb-12 text-sm">Proven results from data analytics engagements across 150+ clients and 20+ industries.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[{ value: "10+", label: "Years of Expertise", icon: <Clock size={26} /> }, { value: "99.7%", label: "Data Accuracy Rate", icon: <BarChart3 size={26} /> }, { value: "24/7", label: "Pipeline Monitoring", icon: <Activity size={26} /> }, { value: "30%", label: "Avg. Efficiency Gains", icon: <TrendingUp size={26} /> }].map((s) => (
              <div key={s.label} className="bg-page-bg rounded-2xl p-6 border border-page-border">
                <div className="text-green-400 flex justify-center mb-3">{s.icon}</div>
                <div className="text-4xl font-extrabold text-page-fg mb-2">{s.value}</div>
                <div className="text-page-fg-muted text-sm">{s.label}</div>
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
            <h2 className="text-4xl font-extrabold">Our AI Data Analytics</h2>
            <p className="text-page-fg-muted mt-3 max-w-xl mx-auto">A structured, iterative approach that goes from raw data to production analytics in weeks.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-7">
              {[
                { step: "01", title: "Data Collection & Ingestion", desc: "Connect every data source - databases, APIs, flat files, streaming events - into a centralised, governed data platform." },
                { step: "02", title: "Data Cleaning & Preparation", desc: "Standardise, validate, and enrich your data with automated pipelines to ensure every downstream model and report is built on clean data." },
                { step: "03", title: "Insight Generation & Modelling", desc: "Apply ML models, statistical analysis, and AI to surface hidden patterns, predictions, and actionable insights from your data." },
                { step: "04", title: "Visualisation & Deployment", desc: "Deliver insights through interactive dashboards, scheduled reports, embedded analytics, and real-time alerting systems." },
              ].map((p) => (
                <div key={p.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-extrabold text-green-900 shrink-0 w-12">{p.step}</span>
                  <div><h4 className="font-bold text-page-fg mb-1">{p.title}</h4><p className="text-page-fg-muted text-sm">{p.desc}</p></div>
                </div>
              ))}
            </div>
            <div
              className="relative rounded-3xl overflow-hidden border border-page-border min-h-100 flex items-center justify-center group"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Verticals</p>
            <h2 className="text-4xl font-extrabold">Industries We Serve</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">Every industry is drowning in data. We help you surface the insights that matter most for your specific context and challenges.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-page-bg rounded-2xl p-6 border border-page-border hover:border-green-800/30 transition-colors">
                <h3 className="font-bold text-green-400 mb-2">{ind.name}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{ind.desc}</p>
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
              { tag: "Predictive Analytics", title: "ChurnGuard", desc: "ML churn prediction model for a telecom company - 82% precision, enabling proactive retention that saved $2.4M in annual revenue.", metric: "$2.4M revenue saved", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Data Platform", title: "DataFoundation", desc: "Built a unified Snowflake data warehouse consolidating 40+ data sources for a retail group - cutting reporting time from days to minutes.", metric: "40+ sources unified", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Real-Time Analytics", title: "TradeWatch", desc: "Real-time trading analytics platform processing 2M+ events/sec with sub-second latency dashboards for a fintech company.", metric: "2M+ events/sec", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-page-bg-alt flex flex-col rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.15)]"
              >
                <div className="h-48 relative overflow-hidden bg-page-bg shrink-0">
                  <Image src={w.image} alt={w.title} title={w.title} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1628] via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6 relative -mt-6 flex flex-col grow">
                  <div className="mb-4">
                    <span className="text-xs text-green-400 font-semibold bg-green-950 px-3 py-1 rounded-full border border-green-800/50 shadow-sm">{w.tag}</span>
                  </div>
                  <h3 className="font-bold text-page-fg text-lg mb-2 group-hover:text-green-400 transition-colors pt-1">{w.title}</h3>
                  <p className="text-page-fg-muted text-sm leading-relaxed grow mb-4">{w.desc}</p>
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-page-border">
                    <Activity size={16} className="text-green-500" />
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">{w.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY TECHNOLOGIES ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Tech Stack</p>
            <h2 className="text-4xl font-extrabold">Key Technologies in AI Development</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">We work across the full modern data stack to deliver analytics platforms that are scalable, reliable, and future-proof.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Snowflake & BigQuery", "Databricks & Spark", "dbt (Data Build Tool)", "Apache Airflow / Prefect", "Kafka & Kinesis Streaming", "Power BI & Tableau", "Looker & Metabase", "Python (Pandas, PySpark)", "Scikit-learn & XGBoost", "Prophet & NeuralProphet", "MLflow & Vertex AI", "Monte Carlo (Data Quality)", "Great Expectations", "AWS / GCP / Azure", "Terraform & dbt Cloud", "Fivetran & Airbyte"].map((t) => (
              <div key={t} className="bg-page-bg rounded-xl p-4 border border-page-border flex items-center gap-3 hover:border-green-800/30 transition-colors">
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-page-fg-subtle text-sm font-medium">{t}</span>
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
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Todd Williams", role: "Chief Data Officer, RetailGroup", text: "Toadster consolidated 40 data sources into a single Snowflake platform. Our analysts now spend time on insights instead of data wrangling - a complete transformation." },
              { name: "Anish Mehta", role: "VP Analytics, FinTechFlow", text: "The real-time analytics platform they built handles 2M events per second with sub-second dashboards. We now have the data infrastructure to compete with the largest players." },
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
          <p className="text-page-fg-muted mb-8">Turn your data into decisions. Let's build your AI data analytics platform together.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" className="text-lg" title="Talk to our analytics engineers">
              Let's Talk
            </CTALink>
            <CTALink
               to="/services/machine-learning"
              className="bg-transparent border border-page-border-strong hover:bg-page-fg/5 text-lg"
              title="Explore Machine Learning"
            >
              Explore Machine Learning
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
              { tag: "Data Engineering", title: "How to Build a Modern Data Stack in 2026: A Practical Architecture Guide", date: "Mar 7, 2026" },
              { tag: "Predictive Analytics", title: "The Operational Data Science Transformation Shift You Need to Know About", date: "Feb 22, 2026" },
              { tag: "AI Analytics", title: "Identity Analytics: AI Different from Other AI-Based Analytics Services?", date: "Feb 8, 2026" },
            ].map((b) => (
              <div key={b.title} className="bg-page-bg-alt rounded-2xl overflow-hidden border border-page-border hover:border-green-800/30 transition-colors cursor-pointer group">
                <div className="h-36 bg-linear-to-br from-green-900/30 to-page-bg flex items-center justify-center"><BarChart3 size={40} className="text-green-700" /></div>
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
            { q: "What are AI Data Analytics Services?", a: "AI Data Analytics Services combine traditional data analytics with machine learning and AI - enabling businesses to not only understand historical data but predict future outcomes, automate analysis, and surface insights at scale." },
            { q: "How can AI Data Analytics Services benefit a business?", a: "They replace slow, manual BI processes with automated, always-on analytics - cutting decision latency from days to seconds, reducing costs, improving forecast accuracy, and identifying revenue opportunities hidden in your data." },
            { q: "Are AI Data Analytics Services suitable for small businesses?", a: "Yes. Modern cloud-native analytics platforms are cost-accessible for businesses of all sizes. We tailor the architecture and scope to your data volume, budget, and business maturity." },
            { q: "How do you ensure data security in AI Data Analytics?", a: "We implement row-level security, data masking, role-based access control, end-to-end encryption, and compliance frameworks (GDPR, SOC2, HIPAA) into every analytics solution we build." },
            { q: "Can AI Data Analytics be used for real-time analysis?", a: "Absolutely. We build real-time streaming analytics pipelines using Kafka, Kinesis, and Flink that process millions of events per second - delivering sub-second latency dashboards and alerts." },
            { q: "What types of insights can AI Data Analytics provide?", a: "Descriptive (what happened), diagnostic (why it happened), predictive (what will happen), and prescriptive (what should we do) - across every business function from sales and marketing to operations and finance." },
            { q: "What makes Mobcoder AI different from other analytics providers?", a: "We combine deep data engineering expertise with ML/AI capabilities - so we don't just build dashboards, we build predictive data products that drive measurable business decisions and outcomes." },
            { q: "Do I need to migrate my data to use your services?", a: "Not necessarily. We can build analytics layers on top of your existing systems without migration. But where a migration to a modern data platform would deliver significant value, we'll recommend and execute it." },
          ].map((item) => (<FAQItem key={item.q} question={item.q} answer={item.a} />))}
        </div>
      </section>
    </div>
  )
}

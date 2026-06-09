import { useState } from "react"
import { CTALink } from "@/components/CTALink"
import { Eye, Cpu, ScanLine, Camera, Shield, TrendingUp, Clock, Users, Zap, ChevronDown, CheckCircle, Star, Activity, Brain, Network, Settings, Layers, Server } from "lucide-react"
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
  { name: "Manufacturing", desc: "Automated defect detection and quality inspection on production lines at superhuman accuracy." },
  { name: "Retail", desc: "Smart shelving, customer flow analytics, cashierless checkout, and loss prevention." },
  { name: "Healthcare", desc: "Medical imaging analysis, pathology slide reading, and surgical assistance." },
  { name: "Automotive", desc: "ADAS systems, lane detection, object recognition, and autonomous vehicle perception." },
  { name: "Security & Surveillance", desc: "Real-time threat detection, facial recognition, and anomaly detection in video feeds." },
  { name: "Agriculture", desc: "Crop health monitoring, pest detection, and yield estimation via drone imagery." },
]

export default function ComputerVisionPage() {
  return (
    <div className="bg-page-bg text-page-fg">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden  py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-105 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse at center, #1C3829 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-400 border border-green-800 rounded-full px-3 py-1 mb-6 uppercase">Computer Vision</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Reality with Advanced<br /><span className="text-green-400">Computer Vision Solutions</span>
          </h1>
          <p className="text-page-fg-subtle text-lg max-w-3xl mx-auto mb-10">
            Our computer vision solutions can configure shape its deep learning and vision algorithms to help businesses automate processes, analyse images, and scale smarter — faster than ever before.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact">Let's Talk</CTALink>
            <button
              className="px-8 py-3 rounded-xl border border-page-border-strong text-page-fg font-semibold hover:bg-page-fg/5 transition-colors"
              onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How it Works
            </button>
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
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What We Build</p>
            <h2 className="text-4xl font-extrabold">Our Computer Vision</h2>
            <h3 className="text-4xl font-bold text-green-400 mt-1 mb-4">Services</h3>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto mb-10">End-to-end computer vision solutions — from image classification and object detection to real-time video analytics and 3D scene understanding.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-page-bg-alt border border-page-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4"><Eye size={22} /></div>
              <h3 className="font-bold text-page-fg mb-2">Object Detection and Tracking</h3>
              <p className="text-page-fg-muted text-sm leading-relaxed">Real-time detection and multi-object tracking across video streams for security, retail, logistics, and autonomous systems.</p>
            </div>
            <div className="bg-page-bg-alt border border-page-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4"><ScanLine size={22} /></div>
              <h3 className="font-bold text-page-fg mb-2">Image Segmentation and Classification</h3>
              <p className="text-page-fg-muted text-sm leading-relaxed">Pixel-level segmentation and scene classification with state-of-the-art deep learning — from medical imaging to satellite analysis.</p>
            </div>
            <div className="bg-page-bg-alt border border-page-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4"><Camera size={22} /></div>
              <h3 className="font-bold text-page-fg mb-2">Facial Recognition Systems</h3>
              <p className="text-page-fg-muted text-sm leading-relaxed">High-accuracy facial recognition and emotion detection for security, authentication, personalization, and access control systems.</p>
            </div>
            <div className="bg-page-bg-alt border border-page-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4"><Shield size={22} /></div>
              <h3 className="font-bold text-page-fg mb-2">Quality Inspection and Anomaly Detection</h3>
              <p className="text-page-fg-muted text-sm leading-relaxed">Automated visual defect detection on production lines — faster and more accurate than manual inspection at any scale.</p>
            </div>
            <div className="bg-page-bg-alt border border-page-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4"><Layers size={22} /></div>
              <h3 className="font-bold text-page-fg mb-2">3D Vision and Depth Estimation</h3>
              <p className="text-page-fg-muted text-sm leading-relaxed">Stereo vision, LiDAR processing, and monocular depth estimation for robotics, AR/VR, and autonomous navigation.</p>
            </div>
            <div className="bg-page-bg-alt border border-page-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4"><Activity size={22} /></div>
              <h3 className="font-bold text-page-fg mb-2">Real-Time Video Analytics</h3>
              <p className="text-page-fg-muted text-sm leading-relaxed">Process live video streams at scale — counting, tracking, crowd analysis, behavioral analytics, and event detection in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-page-bg-alt py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">At a Glance</p>
          <h2 className="text-3xl font-extrabold mb-4">Highlights of <span className="text-green-400">Achievements</span></h2>
          <p className="text-page-fg-muted max-w-xl mx-auto mb-12 text-sm">We've worked across industries solving complex computer vision challenges with measurable business impact.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[{ value: "10+", label: "Years in AI & CV", icon: <Clock size={26} /> }, { value: "99.7%", label: "Detection Accuracy", icon: <Eye size={26} /> }, { value: "24/7", label: "Real-Time Processing", icon: <Zap size={26} /> }, { value: "30%", label: "Avg. Cost Reduction", icon: <TrendingUp size={26} /> }].map((s) => (
              <div key={s.label} className="bg-page-bg rounded-2xl p-6 border border-page-border">
                <div className="text-green-400 flex justify-center mb-3">{s.icon}</div>
                <div className="text-4xl font-extrabold text-page-fg mb-2">{s.value}</div>
                <div className="text-page-fg-muted text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Core Capabilities</p>
            <h2 className="text-4xl font-extrabold">Key Features of Our Computer Vision Solutions</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">Powered by the latest advances in deep learning, our vision models deliver enterprise-grade reliability and performance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Cpu size={22} />, title: "Real-Time Image & Video Processing", desc: "Process thousands of frames per second with hardware-optimized models running on GPU, NPU, and edge devices." },
              { icon: <Brain size={22} />, title: "High-Accuracy with Deep Learning Models", desc: "Vision transformers, YOLO, Detectron2, and custom architectures trained for your specific domain and accuracy targets." },
              { icon: <Network size={22} />, title: "Scalable AI-Powered Visual Systems", desc: "Cloud-native, containerized CV pipelines that scale from pilot to millions of inferences per day automatically." },
              { icon: <Settings size={22} />, title: "Industry-Specific Customization", desc: "Custom training data, domain-specific augmentation, and fine-tuning for manufacturing, retail, healthcare, and more." },
              { icon: <Server size={22} />, title: "Edge & Cloud Deployment", desc: "Deploy on-device for low-latency edge inference or in the cloud for centralised, high-throughput video analytics." },
              { icon: <Shield size={22} />, title: "Privacy-First Vision Systems", desc: "On-premise deployment, data anonymization, and privacy-compliant architectures for regulated industries." },
            ].map((f) => (
              <div key={f.title} className="bg-page-bg-alt border border-page-border rounded-2xl p-6 hover:border-green-800/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center text-green-400 mb-4">{f.icon}</div>
                <h3 className="font-bold text-page-fg mb-2">{f.title}</h3>
                <p className="text-page-fg-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Why Us</p>
            <h2 className="text-4xl font-extrabold">Benefits of Working with Us</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">Partner with a team that has shipped computer vision systems across 20+ industries with proven, measurable results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp size={28} />, title: "Operational Efficiency", desc: "Automate visual inspection, counting, and monitoring tasks that were previously manual — reducing labour costs by up to 40%." },
              { icon: <CheckCircle size={28} />, title: "Improved Decision Making", desc: "Real-time visual intelligence gives operators and managers the data they need to make faster, more accurate decisions." },
              { icon: <Star size={28} />, title: "Enhanced Product Quality", desc: "Catch defects and anomalies at the micro level with AI systems that never get tired, distracted, or miss a shift." },
              { icon: <Zap size={28} />, title: "Faster Time to Value", desc: "Rapid prototyping and iterative delivery gets your computer vision system from concept to production in weeks, not months." },
              { icon: <Shield size={28} />, title: "Scalable & Reliable", desc: "Systems that scale with your business — from a single camera to tens of thousands of vision endpoints globally." },
              { icon: <Users size={28} />, title: "End-to-End Partnership", desc: "From data collection and labelling to model training, deployment, and ongoing monitoring — we handle the full CV lifecycle." },
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

      {/* ── PROCESS ── */}
      <section id="our-process" className="py-20 bg-page-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">How We Work</p>
            <h2 className="text-4xl font-extrabold">Our Process</h2>
            <p className="text-page-fg-muted mt-3 max-w-xl mx-auto">We follow a rigorous, iterative process to deliver computer vision solutions that work reliably in the real world.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Model Design & Architecture", desc: "Select and architect the right CV model — YOLO, Vision Transformer, SegFormer, or custom — for your use case and constraints." },
              { step: "02", title: "System Integration", desc: "Integrate the CV model into your existing cameras, PLCs, ERP, WMS, or cloud infrastructure via well-documented APIs." },
              { step: "03", title: "Testing & Optimisation", desc: "Benchmark against domain-specific datasets, tune for accuracy/speed trade-offs, and validate in production environments." },
            ].map((p) => (
              <div key={p.step} className="bg-page-bg-alt rounded-2xl p-6 border border-page-border hover:border-green-800/30 transition-colors">
                <span className="text-4xl font-extrabold text-green-900 block mb-4">{p.step}</span>
                <h4 className="font-bold text-page-fg mb-2">{p.title}</h4>
                <p className="text-page-fg-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 bg-page-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Verticals</p>
            <h2 className="text-4xl font-extrabold">Industries We Serve</h2>
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">Computer vision is transforming every industry. We bring domain expertise and proven models to each vertical.</p>
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
              { tag: "Manufacturing", title: "DefectScan AI", desc: "Automated visual quality inspection for an auto-parts manufacturer — 99.7% defect detection rate, replacing 3 manual inspection shifts.", metric: "99.7% accuracy", image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Retail", title: "ShelfSight", desc: "Real-time shelf monitoring system for a retail chain — detecting out-of-stock shelves and planogram violations across 200+ stores.", metric: "200+ stores deployed", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" },
              { tag: "Healthcare", title: "PathVision", desc: "Pathology slide analysis AI that assists radiologists in detecting anomalies with 94% sensitivity, reducing diagnosis time by 60%.", metric: "60% faster diagnosis", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-page-bg-alt flex flex-col rounded-2xl overflow-hidden border border-page-border hover:border-green-800/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(74,222,128,0.15)]"
              >
                <div className="h-48 relative overflow-hidden bg-page-bg shrink-0">
                  <img src={w.image} alt={w.title} title={w.title} loading="lazy" decoding="async" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
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
            <p className="text-page-fg-muted mt-3 max-w-2xl mx-auto">We leverage the latest computer vision frameworks, models, and cloud infrastructure to build production-grade solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["YOLOv8 / YOLOv9", "Vision Transformers (ViT)", "Detectron2 & MMDetection", "SegFormer & SAM", "OpenCV & Pillow", "PyTorch & TensorFlow", "ONNX Runtime", "TensorRT Optimisation", "NVIDIA DeepStream", "AWS Rekognition / GCP Vision", "Azure Computer Vision", "LabelStudio & CVAT", "Edge AI (Jetson, Hailo)", "3D Vision (PointNet, Open3D)", "Optical Flow Analysis", "Video Analytics Pipelines"].map((t) => (
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
              { name: "Todd Williams", role: "Head of Quality, PrecisionParts", text: "The computer vision system Toadster built for our production line caught defects we were missing entirely. It paid for itself in the first 3 months." },
              { name: "Anish Mehta", role: "CTO, RetailFlow", text: "ShelfSight transformed how we manage our stores. Real-time out-of-stock alerts across 200 locations changed our replenishment operations entirely." },
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
          <p className="text-page-fg-muted mb-8">Let's build a computer vision solution tailored to your operations, data, and goals.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTALink to="/contact" className="text-lg" title="Talk to our computer vision team">
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
              { tag: "Computer Vision", title: "How Computer Vision is Revolutionising Quality Inspection in Manufacturing", date: "Mar 5, 2026" },
              { tag: "Deep Learning", title: "YOLOv9 vs Vision Transformers: Choosing the Right Architecture for Your Use Case", date: "Feb 20, 2026" },
              { tag: "Edge AI", title: "Deploying Computer Vision at the Edge: A Practical Guide for 2026", date: "Feb 5, 2026" },
            ].map((b) => (
              <div key={b.title} className="bg-page-bg-alt rounded-2xl overflow-hidden border border-page-border hover:border-green-800/30 transition-colors cursor-pointer group">
                <div className="h-36 bg-linear-to-br from-green-900/30 to-page-bg flex items-center justify-center"><Eye size={40} className="text-green-700" /></div>
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
            { q: "What are computer vision solutions?", a: "Computer vision solutions use deep learning to enable machines to interpret and understand visual information from images, video, and other visual inputs — automating tasks like defect detection, object tracking, facial recognition, and more." },
            { q: "How do computer vision solutions benefit businesses?", a: "They automate manual visual inspection, enable real-time monitoring at scale, reduce human error, cut operational costs, and surface insights from visual data that humans couldn't practically analyze manually." },
            { q: "Which industries can use computer vision technology?", a: "Virtually any industry with visual data — manufacturing, retail, healthcare, agriculture, security, automotive, logistics, construction, and more all have high-impact computer vision use cases." },
            { q: "Can computer vision be integrated with existing business systems?", a: "Yes. Our CV systems integrate with existing cameras, PLCs, ERP, WMS, and cloud platforms via REST APIs, webhooks, and SDKs — minimizing disruption to your current operations." },
            { q: "What are the most popular computer vision use cases?", a: "Quality control and defect detection, object detection and tracking, facial recognition, retail analytics, medical image analysis, autonomous vehicle perception, and document processing are among the most common." },
            { q: "Are computer vision solutions available for on-premise needs?", a: "Absolutely. We specialize in on-premise deployment for industries with strict data privacy requirements, running optimized models on your own GPU infrastructure or edge devices." },
            { q: "How long does implementing computer vision solutions take?", a: "Simple use cases can go live in 4–6 weeks. Complex, multi-camera or multi-site systems typically take 8–16 weeks including data collection, training, integration, and validation." },
            { q: "Why should we choose Toadsters for computer vision services?", a: "We combine deep expertise in computer vision research with real-world deployment experience across 20+ industries — delivering solutions that are accurate, fast, scalable, and built to last." },
          ].map((item) => (<FAQItem key={item.q} question={item.q} answer={item.a} />))}
        </div>
      </section>
    </div>
  )
}

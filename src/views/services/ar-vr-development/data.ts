import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Box,
  Building2,
  Car,
  ClipboardList,
  Cloud,
  Eye,
  Factory,
  Gamepad2,
  Glasses,
  Globe,
  GraduationCap,
  HeartPulse,
  Layers,
  LayoutDashboard,
  Monitor,
  Palette,
  Rocket,
  Server,
  Shield,
  ShoppingCart,
  Smartphone,
  Target,
  TestTube2,
  TrendingDown,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react"

export const heroTrustItems = [
  "VR, AR, MR & WebAR across platforms",
  "Unity, Unreal & spatial computing",
  "Enterprise deployment & LMS integration",
  "Measurable outcomes, not just demos",
]

export const trustStats = [
  { number: "120+", label: "AR/VR projects delivered" },
  { number: "40+", label: "Platforms & devices supported" },
  { number: "8+", label: "Years in immersive tech" },
  { number: "95%", label: "Client satisfaction rate" },
]

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: Glasses,
    title: "Custom VR Application Development",
    desc: "End-to-end development of virtual reality applications for training, simulation, product visualization, therapy, education, and entertainment. Built for standalone headsets, PC VR, and enterprise deployments.",
    value: "Fully immersive experiences built for your use case",
    tags: ["Meta Quest", "PC VR", "Training", "Simulation"],
  },
  {
    icon: Smartphone,
    title: "Augmented Reality (AR) App Development",
    desc: "AR experiences for iOS and Android using ARKit, ARCore, and WebAR. From marker-based product overlays to complex world-anchored enterprise tools that work in real environments.",
    value: "AR that works in real-world environments",
    tags: ["ARKit", "ARCore", "WebAR", "Enterprise AR"],
  },
  {
    icon: Layers,
    title: "Mixed Reality (MR) Development",
    desc: "Solutions for Microsoft HoloLens and Meta Quest MR that blend digital content with the physical world - ideal for field service, surgical guidance, collaborative design, and remote expert assistance.",
    value: "Digital content precisely anchored in physical space",
    tags: ["HoloLens", "Quest MR", "Field service", "Remote assist"],
  },
  {
    icon: Factory,
    title: "Industrial & Enterprise VR Training",
    desc: "Immersive training simulations for high-risk, high-cost, or hard-to-replicate scenarios - equipment operation, safety procedures, emergency response, compliance training, and onboarding at scale.",
    value: "Practice dangerous procedures without real-world risk",
    tags: ["Safety training", "Equipment ops", "Compliance", "Onboarding"],
  },
  {
    icon: Box,
    title: "3D Product Visualization & AR Commerce",
    desc: "Let customers see your products in their space before they buy. AR try-before-you-buy experiences and 3D product configurators that reduce returns, increase conversion, and shorten purchase decisions.",
    value: "Higher conversion with try-before-you-buy AR",
    tags: ["AR commerce", "3D configurator", "Product viz", "Retail"],
  },
  {
    icon: Building2,
    title: "Virtual Showrooms & Real Estate Walkthroughs",
    desc: "Photorealistic virtual tours and interactive property walkthroughs for real estate developers, interior designers, and luxury brands - accessible on headsets, mobile, or browser without any app download.",
    value: "Buyers experience properties before they're built",
    tags: ["Virtual tours", "Real estate", "Showrooms", "Browser-based"],
  },
  {
    icon: Globe,
    title: "WebAR & No-Download AR Experiences",
    desc: "Browser-based AR experiences that activate through a URL or QR code. No app required. Ideal for marketing campaigns, retail activations, packaging AR, and consumer-facing immersive content.",
    value: "Instant AR via URL - no app install friction",
    tags: ["8th Wall", "QR activation", "Marketing", "Packaging AR"],
  },
  {
    icon: HeartPulse,
    title: "VR for Healthcare & Medical Training",
    desc: "Surgical simulation, patient rehabilitation, phobia treatment, anatomy education, and clinical procedure training - built to clinical accuracy standards with the sensitivity this domain demands.",
    value: "Clinical-grade immersive training and therapy",
    tags: ["Surgical sim", "Rehabilitation", "Anatomy", "Exposure therapy"],
  },
  {
    icon: Monitor,
    title: "Spatial Computing & Vision Pro Development",
    desc: "Early-mover spatial computing applications for Apple Vision Pro and next-generation headsets - productivity tools, collaborative environments, and spatial interfaces built for the platform from the ground up.",
    value: "Native spatial experiences for next-gen headsets",
    tags: ["Vision Pro", "Spatial UI", "Productivity", "Collaboration"],
  },
  {
    icon: Users,
    title: "Metaverse & Social VR Environments",
    desc: "Custom virtual worlds, branded metaverse spaces, and multi-user social VR environments for events, community building, virtual offices, and experiential marketing.",
    value: "Shared virtual spaces for teams and audiences",
    tags: ["Multi-user VR", "Virtual events", "Branded worlds", "Social VR"],
  },
  {
    icon: Palette,
    title: "AR/VR Content & 3D Asset Production",
    desc: "Photogrammetry capture, 3D modeling, texturing, rigging, and animation for immersive experiences. High-fidelity assets optimized for real-time rendering across all target platforms.",
    value: "Production-ready 3D assets within performance budgets",
    tags: ["3D modeling", "Photogrammetry", "Animation", "Texturing"],
  },
  {
    icon: ClipboardList,
    title: "AR/VR Strategy & Consulting",
    desc: "Not sure whether AR or VR is the right fit - or if the ROI justifies the investment? We run structured discovery sessions to evaluate use cases, define success metrics, and help you make an informed decision.",
    value: "Clarity before you commit immersive tech budget",
    tags: ["Use case validation", "ROI modelling", "Platform selection", "PoC"],
  },
]

export const industries: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    desc: "Equipment operation training, assembly guidance via AR overlays, safety procedure simulation, maintenance walkthroughs, and quality inspection AR - without taking production lines offline.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical",
    desc: "Surgical simulation, anatomy visualization, patient rehabilitation, clinical procedure training, phobia treatment, and medical device sales tools built to clinical standards.",
  },
  {
    icon: Building2,
    title: "Real Estate & Architecture",
    desc: "Virtual property tours, off-plan visualization, interior design AR, neighbourhood walkthroughs, and collaborative design reviews for developers, agents, and buyers.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & eCommerce",
    desc: "AR product try-on, room visualization, 3D product configurators, virtual showrooms, and in-store AR navigation connected to your product catalog and eCommerce platform.",
  },
  {
    icon: Zap,
    title: "Oil, Gas & Energy",
    desc: "Hazardous environment training, remote inspection AR, safety induction VR, complex equipment maintenance simulations, and emergency response scenario training.",
  },
  {
    icon: GraduationCap,
    title: "Education & Corporate Learning",
    desc: "Immersive learning modules, virtual labs, historical recreations, soft skills simulations, and onboarding programs - delivered via LMS-integrated VR applications.",
  },
  {
    icon: Shield,
    title: "Defence & Public Safety",
    desc: "Mission rehearsal simulations, tactical training environments, situational awareness tools, and high-fidelity scenario training with appropriate security considerations.",
  },
  {
    icon: Video,
    title: "Events, Marketing & Brand Experiences",
    desc: "Branded VR experiences for trade shows, WebAR campaigns, product launch activations, virtual events, and interactive marketing installations that are genuinely memorable.",
  },
  {
    icon: Car,
    title: "Automotive & Aerospace",
    desc: "Design review in VR, configurator experiences for showrooms, maintenance and repair AR guidance, driver training simulation, and collaborative engineering environments.",
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Users,
    title: "We design for the user, not the headset",
    desc: "Platform capabilities don't define our solutions - your users do. We start with who will use this, in what context, and what they need to accomplish. The hardware is just the delivery mechanism.",
  },
  {
    icon: Zap,
    title: "Performance is a first-class requirement",
    desc: "Laggy AR ruins immersion. Janky VR causes motion sickness and kills adoption. We treat frame rate, latency, and load time as hard requirements - not afterthoughts - from day one of architecture.",
  },
  {
    icon: Server,
    title: "We build for enterprise deployment",
    desc: "Consumer AR/VR demos are easy. Enterprise rollout - device management, multi-user sync, offline capability, security compliance, and IT integration - is where most agencies struggle. We've solved it.",
  },
  {
    icon: Target,
    title: "Platform-agnostic advice",
    desc: "We're not tied to any hardware vendor or platform SDK. We'll tell you when WebAR is the smarter choice over a native app, or when a mobile AR solution outperforms an expensive headset deployment.",
  },
  {
    icon: TrendingUp,
    title: "Measurable outcomes, not just deliverables",
    desc: "We define success metrics upfront - training completion rates, error reduction, time-to-competency, conversion lift - and build measurement into the solution so you can prove ROI to stakeholders.",
  },
  {
    icon: LayoutDashboard,
    title: "Content updates without a development team",
    desc: "Static VR training that needs a developer to update every scenario is a hidden ongoing cost. Where applicable, we build CMS-backed or no-code-configurable content systems your team can manage independently.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Use Case Definition",
    desc: "We map the business problem, define success metrics, audit your existing content and data, and assess which platform and interaction model makes the most sense for your users and context.",
    deliverables: ["Use case definition", "Success metrics", "Platform recommendation"],
  },
  {
    num: "02",
    title: "Concept Design & Storyboarding",
    desc: "Before any 3D work begins, we design the experience flow, interaction patterns, and spatial UI. Storyboards and low-fidelity prototypes validate the concept with stakeholders before production investment.",
    deliverables: ["Experience flow", "Interaction patterns", "Storyboards & prototypes"],
  },
  {
    num: "03",
    title: "3D Content & Asset Production",
    desc: "We produce or optimize all 3D models, environments, animations, and audio assets - built to the performance budget of your target platform so the final experience is smooth, not slideshow.",
    deliverables: ["3D models & environments", "Animations & audio", "Optimized assets"],
  },
  {
    num: "04",
    title: "Development & Integration",
    desc: "We build the application in Unity or Unreal (or WebXR for browser-based deployments), integrating with your backend systems, LMS, CRM, or analytics platform where required.",
    deliverables: ["Application builds", "System integrations", "API documentation"],
  },
  {
    num: "05",
    title: "User Testing & Comfort Optimization",
    desc: "Real users, not just developers, test the experience before launch. We run comfort testing, usability sessions, and performance profiling across all target devices.",
    deliverables: ["Usability report", "Comfort testing results", "Performance benchmarks"],
  },
  {
    num: "06",
    title: "Deployment, Training & Ongoing Support",
    desc: "We deploy to your devices or distribution channel, train your internal team on content management and device administration, and provide ongoing support for updates and platform OS changes.",
    deliverables: ["Production deployment", "Team training", "Support runbook"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: Gamepad2,
    title: "Game Engines",
    why: "Unity (primary), Unreal Engine, and Godot - selected based on content type, team preference, and platform requirements.",
    pills: ["Unity", "Unreal Engine", "Godot", "WebXR"],
  },
  {
    icon: Smartphone,
    title: "AR Frameworks",
    why: "ARKit, ARCore, Vuforia, 8th Wall, Wikitude, Niantic Lightship, and MRTK for reliable tracking across iOS, Android, and WebAR.",
    pills: ["ARKit", "ARCore", "Vuforia", "8th Wall", "MRTK"],
  },
  {
    icon: Glasses,
    title: "VR / MR Platforms",
    why: "Meta Quest, HTC Vive, Valve Index, PlayStation VR2, Apple Vision Pro, HoloLens 2, Pico, and PC VR (SteamVR).",
    pills: ["Meta Quest", "Vision Pro", "HoloLens 2", "SteamVR", "Pico"],
  },
  {
    icon: Globe,
    title: "WebXR & Browser-Based AR",
    why: "Three.js, Babylon.js, A-Frame, 8th Wall, and PlayCanvas for no-download AR/VR experiences via URL or QR code.",
    pills: ["Three.js", "Babylon.js", "A-Frame", "8th Wall", "PlayCanvas"],
  },
  {
    icon: Palette,
    title: "3D & Content Tools",
    why: "Blender, Maya, 3ds Max, Cinema 4D, Substance Painter, RealityCapture, and ZBrush for optimized real-time assets.",
    pills: ["Blender", "Maya", "Substance Painter", "RealityCapture", "ZBrush"],
  },
  {
    icon: Cloud,
    title: "Backend & Integration",
    why: "REST/GraphQL APIs, Firebase, AWS Amplify, Photon, Agora, Salesforce, SAP, and custom LMS/SCORM integration.",
    pills: ["REST/GraphQL", "Firebase", "Photon", "SCORM/LMS", "Salesforce"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: Gamepad2,
    title: "Unity / Unreal Engineers",
    desc: "Senior engine developers with production VR/AR shipping experience across enterprise, consumer, and industrial platforms.",
    tags: ["Unity", "Unreal", "C#", "C++"],
  },
  {
    icon: Palette,
    title: "3D Artists & Technical Artists",
    desc: "Modelers, riggers, texture artists, and shader specialists who build assets optimized for real-time performance without sacrificing visual quality.",
    tags: ["Modeling", "Rigging", "Shaders", "Texturing"],
  },
  {
    icon: Eye,
    title: "UX / Interaction Designers",
    desc: "Spatial UI and interaction designers who understand VR locomotion, hand tracking, gaze interaction, and AR anchoring.",
    tags: ["Spatial UI", "Hand tracking", "Locomotion", "AR anchoring"],
  },
  {
    icon: Smartphone,
    title: "AR SDK Specialists",
    desc: "Deep specialists in ARKit, ARCore, 8th Wall, and Vuforia - building reliable tracking and anchoring across iOS/Android and WebAR.",
    tags: ["ARKit", "ARCore", "8th Wall", "Vuforia"],
  },
  {
    icon: Server,
    title: "Backend & Integration Engineers",
    desc: "API developers who connect your immersive experience to real business systems - LMS, ERP, CRM, analytics, and custom platforms.",
    tags: ["APIs", "LMS", "CRM", "Analytics"],
  },
  {
    icon: TestTube2,
    title: "QA & Device Testing Engineers",
    desc: "Dedicated QA across the full device matrix - multiple headsets, OS versions, lighting conditions, and real-world environments.",
    tags: ["Device matrix", "Comfort testing", "Performance", "Usability"],
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: TrendingDown,
    title: "Training cost reduction",
    desc: "VR training eliminates travel costs, instructor fees, physical equipment wear, and scheduling constraints. Studies consistently show 40–70% cost reductions per trainee compared to in-person training for high-frequency or high-risk scenarios.",
  },
  {
    icon: Rocket,
    title: "Faster time-to-competency",
    desc: "Immersive practice accelerates skill acquisition. Learners in VR reach competency benchmarks significantly faster than classroom equivalents - because they learn by doing, not by watching.",
  },
  {
    icon: Shield,
    title: "Reduced errors in high-stakes environments",
    desc: "When workers practice dangerous or complex procedures in VR before doing them in the real world, error rates drop. This is measurable, documented, and worth quantifying before your training budget conversation.",
  },
  {
    icon: ShoppingCart,
    title: "Higher purchase conversion in retail & eCommerce",
    desc: "AR product visualization - letting customers see furniture in their room or configure a product in 3D - consistently reduces purchase hesitation and return rates while lifting average order values.",
  },
  {
    icon: BarChart3,
    title: "Shorter sales cycles for complex products",
    desc: "VR product demonstrations let buyers experience something before it's built - a building, capital equipment, or a configured solution. Sales cycles shorten when buyers can visualize outcomes instead of imagining them.",
  },
  {
    icon: Users,
    title: "Remote collaboration without the travel",
    desc: "Shared virtual workspaces, remote expert AR overlays, and multi-user VR environments reduce the need for expensive on-site visits - particularly valuable for field service, global teams, and distributed engineering.",
  },
]

export const engagementModels = [
  {
    featured: true,
    badge: "Most Popular",
    title: "Dedicated AR/VR Development Team",
    who: "Best for: sustained immersive programs",
    desc: "A fully managed team - Unity/Unreal engineers, 3D artists, interaction designers, and QA - working exclusively on your product.",
    benefits: [
      "Full cross-discipline team aligned to your product",
      "Sprint-based delivery with weekly demos",
      "Scale team up or down monthly",
      "Direct Slack/PM tool integration",
    ],
  },
  {
    featured: false,
    title: "Team Augmentation",
    who: "Best for: extending your existing team",
    desc: "Embed our AR/VR specialists inside your existing development team when you need Unity development, 3D art production, or AR SDK integration on demand.",
    benefits: [
      "Specialists embedded in your workflow",
      "No long-term commitment needed",
      "Ready to start within 48–72 hours",
      "Flexible scope and duration",
    ],
  },
  {
    featured: false,
    title: "Fixed Scope Project",
    who: "Best for: well-defined immersive products",
    desc: "Clear brief, fixed budget, defined delivery timeline. Best for a VR training module, AR product visualization tool, or WebAR campaign where requirements are stable.",
    benefits: [
      "Fixed cost and timeline",
      "Clear milestones and acceptance criteria",
      "Milestone-based payment structure",
      "Post-launch support included",
    ],
  },
  {
    featured: false,
    title: "AR/VR Consulting & Proof of Concept",
    who: "Best for: validating before full investment",
    desc: "Structured consulting - use case validation, platform selection, ROI modelling, and rapid PoC development - to help you make an informed decision before full investment.",
    benefits: [
      "Platform and build vs. buy assessment",
      "Rapid PoC in 2–4 weeks",
      "Technical and business case documentation",
      "No obligation to proceed to full build",
    ],
  },
]

export const faqs = [
  {
    question: "How much does AR/VR development cost?",
    answer:
      "A focused WebAR experience or single VR training module typically starts from $20,000–$50,000. A full-featured enterprise VR training platform with custom environments, branching scenarios, and LMS integration generally runs $80,000–$300,000+. We provide a detailed estimate after a discovery session.",
  },
  {
    question: "How long does an AR/VR project take?",
    answer:
      "A simple WebAR experience can be delivered in 4–6 weeks. A complete VR training application with multiple scenarios typically takes 3–5 months. Larger platforms with CMS integration, multi-user functionality, or complex 3D environments take 5–9 months.",
  },
  {
    question: "Do users need an expensive headset to use VR?",
    answer:
      "Not necessarily. Standalone headsets like the Meta Quest 3 are under $500 per device and require no external PC. WebAR runs on any modern smartphone without any hardware purchase. We'll help you choose the hardware model that makes financial and practical sense for your situation.",
  },
  {
    question: "Can AR/VR integrate with our existing systems - LMS, CRM, ERP?",
    answer:
      "Yes. We regularly integrate VR training applications with SCORM-compliant LMS platforms (Docebo, TalentLMS, Cornerstone, etc.), Salesforce, SAP, custom APIs, and analytics platforms.",
  },
  {
    question: "What's the difference between AR, VR, and MR - and which one do I need?",
    answer:
      "VR is fully immersive - ideal for training simulations and virtual tours. AR overlays digital content onto the real world - ideal for on-the-job guidance and retail visualization. Mixed Reality blends digital and physical more precisely via devices like HoloLens. We'll help you choose based on your use case and outcome.",
  },
  {
    question: "How do we keep VR content updated without hiring developers?",
    answer:
      "For training content, we build CMS-backed VR applications where your L&D team can update text, swap assets, modify scenarios, and publish new modules without touching the underlying code. For more complex updates, we offer managed content services or retainer-based development.",
  },
  {
    question: "Is AR/VR right for our business, or is it just a novelty?",
    answer:
      "AR/VR has genuine ROI in specific contexts: high-frequency or high-risk training, physical product sales with complex visualization, remote expert assistance, and spatial design review. It's not the right answer for every problem. We offer a no-commitment consulting session to evaluate whether the business case holds.",
  },
  {
    question: "Will we own the AR/VR applications and 3D assets you create for us?",
    answer:
      "Yes - completely. All application code, 3D assets, environments, scripts, and intellectual property produced during your engagement belong entirely to you. We retain no rights over anything we build for your business.",
  },
]

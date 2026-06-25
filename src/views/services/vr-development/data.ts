import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Box,
  Building2,
  Car,
  ClipboardList,
  Cloud,
  Factory,
  Gamepad2,
  Glasses,
  GraduationCap,
  HeartPulse,
  Layers,
  LayoutDashboard,
  Monitor,
  Palette,
  Rocket,
  Server,
  Shield,
  Target,
  TestTube2,
  TrendingDown,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react"

export const heroTrustItems = [
  "Meta Quest, PC VR & enterprise headsets",
  "Unity, Unreal & spatial computing",
  "Enterprise deployment & LMS integration",
  "Measurable outcomes, not just demos",
]

export const trustStats = [
  { number: "Training & Sims", label: "Immersive learning and virtual showrooms" },
  { number: "Multi-Platform", label: "Meta Quest · PCVR · WebXR" },
  { number: "End-to-End", label: "Concept, build, deploy, and iterate" },
  { number: "4 Regions", label: "India · UAE · Saudi Arabia · US" },
]

export const heroSubheading = "Immersive Experiences That Train, Sell, and Engage."

export const heroCta = {
  label: "Talk to a VR Specialist",
  href: "#contact-form",
}

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
    icon: Factory,
    title: "Industrial & Enterprise VR Training",
    desc: "Immersive training simulations for high-risk, high-cost, or hard-to-replicate scenarios - equipment operation, safety procedures, emergency response, compliance training, and onboarding at scale.",
    value: "Practice dangerous procedures without real-world risk",
    tags: ["Safety training", "Equipment ops", "Compliance", "Onboarding"],
  },
  {
    icon: Building2,
    title: "Virtual Showrooms & Property Walkthroughs",
    desc: "Photorealistic virtual tours and interactive property walkthroughs for real estate developers, interior designers, and luxury brands - experienced on headsets or browser-based VR without friction.",
    value: "Buyers experience properties before they're built",
    tags: ["Virtual tours", "Real estate", "Showrooms", "Pre-sales"],
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
    desc: "Spatial computing applications for Apple Vision Pro and next-generation VR headsets - productivity tools, collaborative environments, and spatial interfaces built for the platform from the ground up.",
    value: "Native spatial experiences for next-gen headsets",
    tags: ["Vision Pro", "Spatial UI", "Productivity", "Collaboration"],
  },
  {
    icon: Users,
    title: "Multi-User & Social VR Environments",
    desc: "Custom virtual worlds, branded VR spaces, and multi-user social environments for events, community building, virtual offices, team collaboration, and experiential marketing.",
    value: "Shared virtual spaces for teams and audiences",
    tags: ["Multi-user VR", "Virtual events", "Branded worlds", "Collaboration"],
  },
  {
    icon: Box,
    title: "VR Product Visualization & Design Review",
    desc: "Let stakeholders experience products, machinery, and environments at full scale before they're built. VR configurators and design review sessions that shorten decision cycles and reduce rework.",
    value: "Experience products at scale before production",
    tags: ["Design review", "3D configurator", "Engineering", "Sales demos"],
  },
  {
    icon: GraduationCap,
    title: "Corporate Learning & Soft Skills VR",
    desc: "Immersive learning modules for leadership training, customer service simulation, sales role-play, and onboarding - delivered via LMS-integrated VR applications your L&D team can manage.",
    value: "Practice high-stakes conversations in a safe environment",
    tags: ["Soft skills", "Onboarding", "LMS integration", "Role-play"],
  },
  {
    icon: Palette,
    title: "VR Content & 3D Asset Production",
    desc: "Photogrammetry capture, 3D modeling, texturing, rigging, and animation for VR experiences. High-fidelity assets optimized for real-time rendering and comfortable frame rates on target headsets.",
    value: "Production-ready 3D assets within performance budgets",
    tags: ["3D modeling", "Photogrammetry", "Animation", "Optimization"],
  },
  {
    icon: ClipboardList,
    title: "VR Strategy & Consulting",
    desc: "Not sure whether VR is the right fit - or if the ROI justifies the investment? We run structured discovery sessions to evaluate use cases, define success metrics, and help you make an informed decision.",
    value: "Clarity before you commit VR budget",
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
    desc: "Equipment operation training, safety procedure simulation, maintenance walkthroughs, and quality inspection in VR - without taking production lines offline.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical",
    desc: "Surgical simulation, anatomy visualization, patient rehabilitation, clinical procedure training, phobia treatment, and medical device sales tools built to clinical standards.",
  },
  {
    icon: Building2,
    title: "Real Estate & Architecture",
    desc: "Virtual property tours, off-plan visualization, interior design walkthroughs, neighbourhood previews, and collaborative design reviews for developers, agents, and buyers.",
  },
  {
    icon: Zap,
    title: "Oil, Gas & Energy",
    desc: "Hazardous environment training, safety induction VR, complex equipment maintenance simulations, and emergency response scenario training.",
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
    desc: "Branded VR experiences for trade shows, product launch activations, virtual events, and interactive marketing installations that are genuinely memorable.",
  },
  {
    icon: Car,
    title: "Automotive & Aerospace",
    desc: "Design review in VR, configurator experiences for showrooms, maintenance and repair training simulation, and collaborative engineering environments.",
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
    desc: "Platform capabilities don't define our solutions - your users do. We start with who will use this, in what context, and what they need to accomplish. The headset is just the delivery mechanism.",
  },
  {
    icon: Zap,
    title: "Performance is a first-class requirement",
    desc: "Janky VR causes motion sickness and kills adoption. We treat frame rate, latency, and load time as hard requirements - not afterthoughts - from day one of architecture.",
  },
  {
    icon: Server,
    title: "We build for enterprise deployment",
    desc: "Consumer VR demos are easy. Enterprise rollout - device management, multi-user sync, offline capability, security compliance, and IT integration - is where most agencies struggle. We've solved it.",
  },
  {
    icon: Target,
    title: "Platform-agnostic advice",
    desc: "We're not tied to any hardware vendor or platform SDK. We'll recommend the right headset, engine, and deployment model based on your use case, budget, and rollout plan.",
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
    desc: "We map the business problem, define success metrics, audit your existing content and data, and assess which VR platform and interaction model makes the most sense for your users and context.",
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
    desc: "We produce or optimize all 3D models, environments, animations, and audio assets - built to the performance budget of your target headset so the final experience is smooth, not slideshow.",
    deliverables: ["3D models & environments", "Animations & audio", "Optimized assets"],
  },
  {
    num: "04",
    title: "Development & Integration",
    desc: "We build the VR application in Unity or Unreal, integrating with your backend systems, LMS, CRM, or analytics platform where required.",
    deliverables: ["Application builds", "System integrations", "API documentation"],
  },
  {
    num: "05",
    title: "User Testing & Comfort Optimization",
    desc: "Real users, not just developers, test the experience before launch. We run comfort testing, usability sessions, and performance profiling across all target headsets.",
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
    why: "Unity (primary), Unreal Engine, and Godot - selected based on content type, team preference, and VR platform requirements.",
    pills: ["Unity", "Unreal Engine", "Godot", "WebXR"],
  },
  {
    icon: Glasses,
    title: "VR Headsets & Platforms",
    why: "Meta Quest, HTC Vive, Valve Index, PlayStation VR2, Apple Vision Pro, Pico, and PC VR (SteamVR) - matched to your deployment model.",
    pills: ["Meta Quest", "Vision Pro", "SteamVR", "Pico", "PS VR2"],
  },
  {
    icon: Layers,
    title: "VR Interaction & Locomotion",
    why: "Hand tracking, controller input, teleportation, room-scale, and seated experiences - designed for comfort and usability.",
    pills: ["Hand tracking", "Room-scale", "Teleport", "Seated VR"],
  },
  {
    icon: Palette,
    title: "3D & Content Tools",
    why: "Blender, Maya, 3ds Max, Cinema 4D, Substance Painter, RealityCapture, and ZBrush for optimized real-time VR assets.",
    pills: ["Blender", "Maya", "Substance Painter", "RealityCapture", "ZBrush"],
  },
  {
    icon: Cloud,
    title: "Backend & Integration",
    why: "REST/GraphQL APIs, Firebase, AWS Amplify, Photon, Agora, Salesforce, SAP, and custom LMS/SCORM integration for enterprise VR.",
    pills: ["REST/GraphQL", "Firebase", "Photon", "SCORM/LMS", "Multi-user sync"],
  },
  {
    icon: Monitor,
    title: "Enterprise VR Deployment",
    why: "MDM, kiosk mode, offline deployment, analytics, and device fleet management for rollout at scale.",
    pills: ["MDM", "Kiosk mode", "Offline mode", "Analytics", "Fleet management"],
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
    title: "Unity / Unreal VR Engineers",
    desc: "Senior engine developers with production VR shipping experience across enterprise, consumer, and industrial platforms.",
    tags: ["Unity", "Unreal", "C#", "C++"],
  },
  {
    icon: Palette,
    title: "3D Artists & Technical Artists",
    desc: "Modelers, riggers, texture artists, and shader specialists who build assets optimized for real-time VR performance without sacrificing visual quality.",
    tags: ["Modeling", "Rigging", "Shaders", "Optimization"],
  },
  {
    icon: Glasses,
    title: "UX / VR Interaction Designers",
    desc: "Spatial UI and interaction designers who understand VR locomotion, hand tracking, gaze interaction, and user comfort.",
    tags: ["Spatial UI", "Hand tracking", "Locomotion", "Comfort design"],
  },
  {
    icon: Server,
    title: "Backend & Integration Engineers",
    desc: "API developers who connect your VR experience to real business systems - LMS, ERP, CRM, analytics, and custom platforms.",
    tags: ["APIs", "LMS", "CRM", "Multi-user sync"],
  },
  {
    icon: TestTube2,
    title: "QA & Device Testing Engineers",
    desc: "Dedicated QA across the full headset matrix - multiple devices, OS versions, and real-world usage scenarios including comfort testing.",
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
    desc: "VR training eliminates travel costs, instructor fees, physical equipment wear, and scheduling constraints. Studies consistently show 40-70% cost reductions per trainee compared to in-person training for high-frequency or high-risk scenarios.",
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
    icon: BarChart3,
    title: "Shorter sales cycles for complex products",
    desc: "VR product demonstrations let buyers experience something before it's built - a building, capital equipment, or a configured solution. Sales cycles shorten when buyers can visualize outcomes instead of imagining them.",
  },
  {
    icon: Users,
    title: "Remote collaboration without the travel",
    desc: "Shared virtual workspaces and multi-user VR environments reduce the need for expensive on-site visits - particularly valuable for global teams, distributed engineering, and virtual design reviews.",
  },
  {
    icon: Target,
    title: "Higher engagement in learning programs",
    desc: "VR training consistently achieves higher completion rates and knowledge retention than traditional e-learning or classroom formats - because immersion creates focus that slides and videos cannot.",
  },
]

export const engagementModels = [
  {
    featured: true,
    title: "Dedicated VR Development Team",
    who: "Best for: sustained VR programs",
    desc: "A fully managed team - Unity/Unreal engineers, 3D artists, VR interaction designers, and QA - working exclusively on your product.",
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
    desc: "Embed our VR specialists inside your existing development team when you need Unity development, 3D art production, or headset integration on demand.",
    benefits: [
      "VR specialists embedded in your workflow",
      "No long-term commitment needed",
      "Ready to start within 48-72 hours",
      "Flexible scope and duration",
    ],
  },
  {
    featured: false,
    title: "Fixed Scope Project",
    who: "Best for: well-defined VR products",
    desc: "Clear brief, fixed budget, defined delivery timeline. Best for a VR training module, virtual showroom, or simulation where requirements are stable.",
    benefits: [
      "Fixed cost and timeline",
      "Clear milestones and acceptance criteria",
      "Milestone-based payment structure",
      "Post-launch support included",
    ],
  },
  {
    featured: false,
    title: "VR Consulting & Proof of Concept",
    who: "Best for: validating before full investment",
    desc: "Structured consulting - use case validation, platform selection, ROI modelling, and rapid PoC development - to help you make an informed decision before full investment.",
    benefits: [
      "Platform and headset assessment",
      "Rapid PoC in 2-4 weeks",
      "Technical and business case documentation",
      "No obligation to proceed to full build",
    ],
  },
]

export const faqs = [
  {
    question: "How much does VR development cost?",
    answer:
      "A focused VR training module or virtual showroom typically starts from $20,000-$50,000. A full-featured enterprise VR training platform with custom environments, branching scenarios, and LMS integration generally runs $80,000-$300,000+. We provide a detailed estimate after a discovery session.",
  },
  {
    question: "How long does a VR project take?",
    answer:
      "A single VR training scenario can be delivered in 6-10 weeks. A complete VR training application with multiple scenarios typically takes 3-5 months. Larger platforms with CMS integration, multi-user functionality, or complex 3D environments take 5-9 months.",
  },
  {
    question: "Do users need an expensive headset to use VR?",
    answer:
      "Not necessarily. Standalone headsets like the Meta Quest 3 are under $500 per device and require no external PC. For enterprise rollouts, we'll help you choose the hardware model that makes financial and practical sense for your situation.",
  },
  {
    question: "Can VR integrate with our existing systems - LMS, CRM, ERP?",
    answer:
      "Yes. We regularly integrate VR training applications with SCORM-compliant LMS platforms (Docebo, TalentLMS, Cornerstone, etc.), Salesforce, SAP, custom APIs, and analytics platforms.",
  },
  {
    question: "Which VR headset or platform should we use?",
    answer:
      "It depends on your use case, deployment environment, and budget. Meta Quest is ideal for standalone enterprise training. PC VR suits high-fidelity simulations. Apple Vision Pro targets spatial productivity. We'll recommend based on your specific requirements, not vendor partnerships.",
  },
  {
    question: "How do we keep VR content updated without hiring developers?",
    answer:
      "For training content, we build CMS-backed VR applications where your L&D team can update text, swap assets, modify scenarios, and publish new modules without touching the underlying code. For more complex updates, we offer managed content services or retainer-based development.",
  },
  {
    question: "Is VR right for our business, or is it just a novelty?",
    answer:
      "VR has genuine ROI in specific contexts: high-frequency or high-risk training, physical product sales with complex visualization, remote collaboration, and spatial design review. It's not the right answer for every problem. We offer a no-commitment consulting session to evaluate whether the business case holds.",
  },
  {
    question: "Will we own the VR applications and 3D assets you create for us?",
    answer:
      "Yes - completely. All application code, 3D assets, environments, scripts, and intellectual property produced during your engagement belong entirely to you. We retain no rights over anything we build for your business.",
  },
]

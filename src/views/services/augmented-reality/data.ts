import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Box,
  Building2,
  Car,
  Factory,
  Glasses,
  Globe,
  GraduationCap,
  Headset,
  HeartPulse,
  Layers,
  LayoutDashboard,
  Link2,
  MapPin,
  Megaphone,
  Monitor,
  Package,
  Palette,
  Server,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Wrench,
} from "lucide-react"

export const trustStats = [
  { number: "Mobile & Wearable", label: "iOS · Android · HoloLens · Magic Leap" },
  { number: "WebAR Ready", label: "No app install required" },
  { number: "End-to-End", label: "Concept to deployed experience" },
  { number: "4 Regions", label: "India · UAE · Saudi Arabia · US" },
]

export const heroSubheading = "Bring Your Products, Spaces, and Processes to Life."

export const heroCta = {
  label: "Talk to an AR Specialist",
  href: "#contact-form",
}

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
    {
      icon: Smartphone,
      title: "Mobile AR App Development",
      desc: "AR experiences for iOS and Android built with ARKit, ARCore, and Unity. Product visualisation, marker-based overlays, image tracking, face tracking, and location-based AR - designed for consumer and enterprise mobile use cases.",
    },
    {
      icon: Globe,
      title: "WebAR Development",
      desc: "Browser-based AR that works without an app download - using 8th Wall, AR.js, or model-viewer. Customers can point their phone at a product, a space, or a marker and see AR content instantly from a link or QR code. Ideal for retail, marketing, and e-commerce.",
    },
    {
      icon: Glasses,
      title: "Enterprise Wearable AR (HoloLens / Magic Leap)",
      desc: "AR applications for Microsoft HoloLens 2 and Magic Leap 2, purpose-built for industrial, medical, and enterprise use cases. Hands-free work instruction delivery, real-time data overlays, spatial mapping, and remote expert collaboration for field and factory environments.",
    },
    {
      icon: Box,
      title: "AR Product Visualisation & 3D Configuration",
      desc: "Let customers place, scale, rotate, and configure products in their own space before purchasing. Built for furniture, appliances, automotive, fashion, and any category where 'how will this look in my home/space' is a purchase barrier.",
    },
    {
      icon: GraduationCap,
      title: "AR Training & Simulation",
      desc: "Step-by-step AR-guided training for complex procedures, equipment operation, safety protocols, and technical skills. Trainees see instructions and 3D guidance overlaid on the actual equipment or environment they're learning to work with - more effective than video and safer than live practice.",
    },
    {
      icon: Video,
      title: "AR Remote Assistance & Expert Guidance",
      desc: "Connect a field technician wearing AR glasses or using a mobile device with a remote expert who can see exactly what they're seeing, annotate their view in real time, and guide them through complex repairs or procedures without travelling. Reduces resolution time and expert travel costs significantly.",
    },
    {
      icon: LayoutDashboard,
      title: "Spatial Data Visualisation & Dashboards",
      desc: "Overlay operational data - sensor readings, KPIs, machine status, inventory levels, navigation - directly onto the physical environment where decisions are being made. Particularly valuable for warehouse management, manufacturing floors, and infrastructure inspection.",
    },
    {
      icon: MapPin,
      title: "AR Navigation & Wayfinding",
      desc: "Indoor and outdoor AR navigation for large facilities - hospitals, warehouses, airports, campuses, retail spaces - where standard maps are inadequate and getting people to the right place quickly matters operationally.",
    },
    {
      icon: Megaphone,
      title: "AR Marketing & Brand Experiences",
      desc: "Interactive AR campaigns, packaging that comes to life, try-before-you-buy product experiences, and event activations that give customers something worth sharing. Designed to drive engagement metrics, dwell time, and conversion - not just impressions.",
    },
    {
      icon: Palette,
      title: "Custom 3D Asset Creation & Optimisation",
      desc: "High-quality 3D models, textures, and animations built from scratch or converted from existing CAD files - optimised for real-time AR rendering on mobile and wearable hardware. We handle the full 3D pipeline so you don't need a separate vendor.",
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
      desc: "AR-guided assembly instructions, quality inspection support, machine maintenance procedures, safety alert overlays, and real-time equipment status dashboards for factory and industrial environments where accuracy and speed both matter.",
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-Commerce",
      desc: "Product visualisation in the customer's own space, virtual try-on for fashion and accessories, in-store wayfinding, and AR-powered loyalty and promotional experiences that increase conversion and reduce returns.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Medical",
      desc: "Surgical guidance overlays, anatomy training for medical students, patient education visualisations, AR-assisted rehabilitation exercises, and medical device training applications. Built with clinical accuracy and patient safety as non-negotiables.",
    },
    {
      icon: Building2,
      title: "Construction, Architecture & Real Estate",
      desc: "Visualise buildings, interiors, and renovations before anything is built. AR-enabled site inspection, BIM overlay on physical sites, and client-facing visualisation tools that reduce revision cycles and accelerate decision-making.",
    },
    {
      icon: Wrench,
      title: "Field Service & Utilities",
      desc: "AR-assisted maintenance and repair for field engineers working on complex equipment - overlaying wiring diagrams, component identification, repair sequences, and safety information directly onto the asset being worked on.",
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      desc: "Immersive AR learning experiences for complex subjects - from anatomy and chemistry to engineering and history. Training simulations that let learners practise procedures in AR before doing them for real on expensive equipment or in high-stakes environments.",
    },
    {
      icon: Package,
      title: "Logistics & Warehouse",
      desc: "AR-guided pick-and-pack operations, inventory location overlays, shipment verification, and worker navigation in large fulfilment centres - reducing pick errors and improving throughput without replacing the systems already running the operation.",
    },
    {
      icon: Car,
      title: "Automotive",
      desc: "AR showroom experiences, virtual configuration tools, AR-assisted vehicle inspection and damage assessment, technician repair guidance, and customer-facing feature demonstration for dealerships and OEMs.",
    },
  ]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
    {
      icon: Monitor,
      title: "We design for the real environment, not the demo environment",
      desc: "AR experiences that work beautifully in a controlled demo often fail in the field - poor lighting, reflective surfaces, cluttered backgrounds, users who don't hold their phones at the right angle. We design and test for the actual conditions your users will be in, not the ideal ones.",
    },
    {
      icon: Box,
      title: "3D quality is not an afterthought",
      desc: "A bad 3D model kills an AR experience faster than any technical issue. We invest in high-quality, optimised 3D assets - whether built from scratch or derived from your existing CAD files - because the visual quality of what users see determines whether they trust and use the experience.",
    },
    {
      icon: Target,
      title: "We choose the platform that fits the use case",
      desc: "Mobile AR, WebAR, HoloLens, Magic Leap, and mixed reality headsets all have different strengths, limitations, and user experience tradeoffs. We'll tell you which is right for your use case based on your users, your environment, and your budget - not based on which platform is most technically interesting to build for.",
    },
    {
      icon: Link2,
      title: "We integrate with your existing systems",
      desc: "The most useful AR experiences pull live data from the systems already running your operations - ERP, CRM, asset management, IoT platforms, product catalogues. We build the integrations that make AR a live operational tool rather than a static overlay.",
    },
    {
      icon: Users,
      title: "User experience comes before technical ambition",
      desc: "AR is technically complex. It's easy to get absorbed in what the technology can do and lose sight of what the user needs to do. We run user research, usability testing, and real-environment validation throughout development - because an AR experience that confuses or frustrates users delivers zero business value, no matter how technically impressive it is.",
    },
    {
      icon: TrendingUp,
      title: "We build for update and scale",
      desc: "The 3D models your AR experience uses today need to be updateable. The users of your AR app today will become tens of thousands tomorrow. We architect content management systems, model update pipelines, and cloud infrastructure from the start so you're not rebuilding everything when you want to expand.",
    },
  ]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Use Case Definition",
    desc: "We start by understanding exactly what the AR experience needs to achieve - what the user is trying to do, what information or visual they need to do it, what environment they'll be in, and what 'success' looks like for the business. We also assess whether AR is genuinely the right medium or whether something simpler would serve the use case better.",
    deliverables: ["Use case document", "User journey maps", "Platform recommendation", "Success metrics"],
  },
  {
    num: "02",
    title: "Concept Design & Spatial UX",
    desc: "AR UX design is different from screen-based UX. We design spatial interactions, field-of-view considerations, information density, depth and scale, and how digital elements relate to physical objects. We produce AR wireframes and interaction concepts before any 3D work begins.",
    deliverables: ["Spatial UX concept", "Interaction design", "Content placement strategy"],
  },
  {
    num: "03",
    title: "3D Asset Development & Optimisation",
    desc: "We build or convert the 3D assets the AR experience requires - product models, instructional animations, UI elements, spatial indicators - optimised for real-time rendering on the target hardware. Polygon counts, texture sizes, and shader complexity are all calibrated to the platform.",
    deliverables: ["Optimised 3D model library", "Texture assets", "Animation sequences"],
  },
  {
    num: "04",
    title: "AR Development & Integration",
    desc: "Development of the AR application on the target platform (ARKit, ARCore, WebXR, MRTK for HoloLens, or Unity-based cross-platform). Integration with backend systems, content management, user authentication, and analytics.",
    deliverables: ["Working AR application builds", "Backend integration", "CMS for content management"],
  },
  {
    num: "05",
    title: "Real-Environment Testing & Iteration",
    desc: "We test in conditions that approximate real use - varying lighting, different physical environments, representative users who haven't seen the experience before. AR performance issues that don't appear in the studio almost always appear in the field. We iterate based on what we find.",
    deliverables: ["Real-environment test report", "Performance optimisation", "Usability findings"],
  },
  {
    num: "06",
    title: "Deployment, Analytics & Iteration",
    desc: "App store submission or WebAR deployment, analytics integration to track engagement and usage patterns, and an established pipeline for content updates without requiring a new app build. Post-launch, we review usage data and plan the next iteration.",
    deliverables: ["Live deployed experience", "Analytics dashboard", "Content update pipeline", "Post-launch review"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
    {
      icon: Smartphone,
      title: "Mobile AR SDKs",
      why: "ARKit (iOS), ARCore (Android), Vuforia, Wikitude - for native mobile AR on iPhone and Android devices",
      pills: ["ARKit", "ARCore", "Vuforia", "Wikitude"],
    },
    {
      icon: Layers,
      title: "Cross-Platform Development",
      why: "Unity (with AR Foundation), Unreal Engine - for experiences that target both iOS and Android from a single codebase",
      pills: ["Unity", "AR Foundation", "Unreal Engine"],
    },
    {
      icon: Globe,
      title: "WebAR",
      why: "8th Wall, AR.js, A-Frame, model-viewer, Three.js - for browser-based AR with no app download required",
      pills: ["8th Wall", "AR.js", "Three.js", "model-viewer"],
    },
    {
      icon: Headset,
      title: "Enterprise / Wearable",
      why: "Microsoft Mixed Reality Toolkit (MRTK) for HoloLens 2, Lumin SDK for Magic Leap 2, OpenXR standard",
      pills: ["MRTK", "HoloLens 2", "Magic Leap", "OpenXR"],
    },
    {
      icon: Glasses,
      title: "Spatial Computing",
      why: "Apple Vision Pro (visionOS / RealityKit), Meta Quest (Mixed Reality), ARCore Geospatial API for outdoor AR",
      pills: ["visionOS", "RealityKit", "Meta Quest", "Geospatial API"],
    },
    {
      icon: Palette,
      title: "3D Tools & Pipeline",
      why: "Blender, Autodesk Maya, 3ds Max, Cinema 4D, Substance Painter - CAD-to-AR conversion from STEP, OBJ, FBX, GLTF",
      pills: ["Blender", "Maya", "Substance Painter", "CAD conversion"],
    },
    {
      icon: Box,
      title: "3D File Formats",
      why: "glTF/GLB (primary web standard), USDZ (iOS/visionOS), FBX, OBJ - with optimisation via Draco compression",
      pills: ["glTF/GLB", "USDZ", "FBX", "Draco"],
    },
    {
      icon: Server,
      title: "Backend & Integration",
      why: "REST APIs, GraphQL, Firebase, AWS, Azure - for live data feeds, user management, content delivery, and analytics",
      pills: ["REST", "GraphQL", "Firebase", "AWS"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Monitoring",
      why: "Custom AR analytics pipelines, Firebase Analytics, Mixpanel - tracking engagement, session depth, and interaction points",
      pills: ["Firebase Analytics", "Mixpanel", "Custom pipelines"],
    },
  ]

export const teamStats = [
  { value: "48h", label: "Average onboarding time" },
  { value: "Mobile + Wearable", label: "iOS · Android · HoloLens · WebAR" },
  { value: "3D to Cloud", label: "Full AR stack covered" },
  { value: "IST · GST · EST", label: "Time zones covered" },
]

export const teamRoles = [
  {
    title: "AR Solution Architects",
    desc: "Senior engineers who design the full AR system - platform selection, tracking strategy, data integration architecture, content pipeline, and cloud infrastructure - before development begins.",
  },
  {
    title: "Unity / Unreal AR Developers",
    desc: "Experienced real-time developers who build the AR application layer, implement spatial interactions, manage performance budgets, and integrate AR SDKs across iOS and Android.",
  },
  {
    title: "HoloLens / Mixed Reality Engineers",
    desc: "MRTK specialists who build enterprise-grade hands-free AR applications for HoloLens 2 and Magic Leap, with experience in spatial mapping, voice commands, and gaze-based interaction.",
  },
  {
    title: "WebAR Developers",
    desc: "Front-end engineers with deep expertise in 8th Wall, AR.js, and model-viewer for building AR experiences that run in the browser - no app required.",
  },
  {
    title: "3D Artists & Technical Artists",
    desc: "3D modellers, texture artists, and animators who create production-quality assets optimised for real-time rendering - from scratch or from CAD file conversion.",
  },
  {
    title: "Spatial UX / XR Designers",
    desc: "Designers who understand spatial interaction design, depth and scale in AR, field-of-view constraints, and how to design for physical environments rather than flat screens.",
  },
  {
    title: "Backend & Integration Engineers",
    desc: "Engineers who build the APIs, content management systems, and data integrations that connect AR experiences to your live operational data and product catalogues.",
  },
  {
    title: "QA & Device Testing Engineers",
    desc: "QA specialists who test AR experiences across real devices and real environments - different iOS and Android versions, varying hardware capabilities, and real-world lighting and surface conditions.",
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
    {
      icon: ShoppingBag,
      title: "Higher Purchase Conversion in Retail & E-Commerce",
      desc: "Customers who use AR product visualisation - seeing furniture in their room, trying on glasses, placing appliances in their kitchen - convert at significantly higher rates and return products less. The uncertainty that kills online purchase decisions is eliminated when customers can see the product in their actual space.",
    },
    {
      icon: GraduationCap,
      title: "Faster, More Effective Training",
      desc: "AR-guided training reduces time-to-competency for complex procedures by 30–50% compared to traditional video or manual-based training. Trainees retain more because they're doing, not watching - and they make fewer errors because guidance is overlaid on the actual equipment they're learning to operate.",
    },
    {
      icon: Wrench,
      title: "Reduced Field Service Resolution Time",
      desc: "Field engineers using AR remote assistance resolve issues significantly faster than those working from phone calls and PDF manuals alone. The expert sees exactly what the engineer sees, can annotate in real time, and can guide step by step - cutting resolution time and expensive expert travel.",
    },
    {
      icon: Target,
      title: "Lower Error Rates in Complex Processes",
      desc: "AR-guided assembly, inspection, and quality control processes produce fewer errors than paper-based or screen-based instruction delivery. When the next step is overlaid on the actual part being assembled, there's less ambiguity and less opportunity to miss a step.",
    },
    {
      icon: TrendingUp,
      title: "Accelerated Sales Cycles for Complex Products",
      desc: "For high-value or technically complex products - industrial equipment, custom furniture, architectural projects, vehicles - AR visualisation tools help buyers make decisions faster with greater confidence, reducing the back-and-forth that extends sales cycles.",
    },
    {
      icon: Sparkles,
      title: "Stronger Brand Engagement & Differentiation",
      desc: "In markets where digital experiences are commoditised, AR creates genuinely memorable brand interactions that customers share, talk about, and come back for - particularly in retail, automotive, and consumer goods categories.",
    },
  ]

export const engagementModels = [
  {
    title: "AR Discovery & Proof of Concept",
    desc: "A focused 3–6 week engagement to validate your AR concept with real users in a real environment. We design the experience, build a working prototype, test it with actual users, and give you a clear view of whether and how to proceed. Best for teams exploring AR for the first time or validating a specific use case before full investment.",
    includes: [
      "Use case analysis and platform recommendation",
      "Spatial UX concept and interaction design",
      "Working AR prototype with basic 3D assets",
      "Real-environment user testing and findings",
      "Full project scope and cost estimate for production build",
    ],
  },
  {
    title: "Full AR Experience Development",
    desc: "End-to-end development of a production AR experience - UX design, 3D asset production, AR development, backend integration, and deployment. For teams that have validated the concept and are ready to build something their customers, employees, or partners will actually use.",
    includes: [
      "Full spatial UX and interaction design",
      "Production 3D asset creation and optimisation",
      "AR application development for target platform(s)",
      "Backend and system integration",
      "Real-environment QA testing and deployment",
    ],
  },
  {
    title: "Embedded AR Team Augmentation",
    desc: "One or more AR specialists - Unity developers, 3D artists, spatial designers, or HoloLens engineers - join your existing team directly. Working in your tools, your sprints, your workflow. Best for product companies that have an internal team but lack specific AR or 3D expertise.",
    includes: [
      "Pre-vetted senior AR and 3D specialists",
      "48-hour onboarding into your stack and tools",
      "Full-time or part-time availability",
      "Direct integration with your team's workflow and sprints",
      "Flexible scaling with 30 days notice",
    ],
  },
  {
    title: "Ongoing AR Content & Maintenance",
    desc: "Ongoing management of a deployed AR platform - 3D content updates, platform OS compatibility, new feature development, performance monitoring, and iterative improvement based on usage data. Best for organisations running AR in production that need a partner for continuous development.",
    includes: [
      "3D asset updates and new content production",
      "OS and SDK compatibility updates",
      "Performance monitoring and optimisation",
      "Monthly analytics reviews and UX improvement recommendations",
      "Quarterly roadmap planning sessions",
    ],
  },
]

export const faqs = [
  {
    question: "What is augmented reality and how is it different from virtual reality?",
    answer:
      "Augmented reality overlays digital content - 3D models, information, animations, instructions - onto the real world as the user sees it through their phone camera or a wearable device. Virtual reality replaces the real world with a fully digital environment. AR keeps users in their physical context while adding digital information to it - which is why it's more practical for most enterprise and commercial applications. The user doesn't need to remove themselves from their environment to use it.",
  },
  {
    question: "How much does an AR application cost to build?",
    answer:
      "A focused AR proof of concept - basic 3D assets, core interaction, real environment testing - typically costs $15,000–$40,000 USD. A production-grade mobile AR or WebAR experience with quality 3D assets, backend integration, and CMS for content updates is usually $50,000–$180,000. Enterprise wearable applications for HoloLens or Magic Leap tend to run $80,000–$250,000+ depending on complexity. 3D asset volume is one of the biggest cost drivers - the more products or environments you need modelled, the higher the cost. We'll give you a precise estimate after understanding your scope.",
  },
  {
    question: "Do users need to download an app to use AR?",
    answer:
      "Not always. WebAR - built with platforms like 8th Wall - runs directly in the mobile browser from a link or QR code. For many retail, marketing, and product visualisation use cases, WebAR is the right choice because the zero-friction access dramatically increases the number of users who actually experience it. Native AR apps (built for iOS and Android) offer more capability, better performance, and access to more advanced AR features, but require an app download. We'll recommend the right approach based on your use case and audience.",
  },
  {
    question: "We don't have 3D models of our products. Can you still build an AR experience?",
    answer:
      "Yes. We build 3D models from scratch using reference materials - product photos, dimensions, technical drawings, or physical samples. If you have CAD files (STEP, IGES, SolidWorks), we can convert and optimise those directly, which is typically faster and more accurate. 3D asset creation is part of our scope, not a dependency you need to resolve before engaging us.",
  },
  {
    question: "What devices will the AR experience work on?",
    answer:
      "This depends on the platform we build for. Mobile AR via ARKit and ARCore covers the majority of modern iPhones and Android devices - typically anything from the last 4–5 years. WebAR via 8th Wall works on most modern iOS and Android browsers. HoloLens and Magic Leap are enterprise wearables with specific hardware requirements. We design for your target user's actual device profile, and we'll be upfront about any minimum hardware requirements that affect your audience coverage.",
  },
  {
    question: "How does AR work in poor lighting or difficult environments?",
    answer:
      "This is one of the most important practical questions in AR development and one that's frequently underestimated. AR tracking relies on camera input to understand the environment, and poor lighting, highly reflective surfaces, or featureless floors can degrade performance. We test in real-world conditions as part of our development process and design with environmental variability in mind - including fallback behaviours for when tracking degrades. For industrial and field service applications especially, we stress-test this thoroughly.",
  },
  {
    question: "Can the AR experience pull live data from our existing systems?",
    answer:
      "Yes - and this is often what makes the difference between a gimmick and a genuinely useful operational tool. We build integrations that connect your AR experience to live data sources: product catalogues, inventory systems, IoT sensor feeds, ERP, CRM, asset management platforms. When a field engineer's AR overlay shows the current status of a machine, or when a warehouse worker's AR view shows real-time pick quantities, the AR becomes part of the operation rather than a parallel system.",
  },
  {
    question: "How long does an AR project take?",
    answer:
      "A proof of concept runs 3–6 weeks. A full production mobile AR or WebAR experience with moderate 3D complexity typically takes 10–18 weeks from discovery to deployment. Enterprise wearable applications for HoloLens usually take 14–24 weeks. The biggest variables are 3D asset volume (more products to model means more time), backend integration complexity, and how quickly design decisions get made. We'll give you a realistic timeline during scoping.",
  },
]

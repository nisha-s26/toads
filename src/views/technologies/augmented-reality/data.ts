import {
  BarChart3,
  Box,
  Eye,
  GitBranch,
  Glasses,
  Layers,
  Scan,
  Shield,
  Smartphone,
  Target,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export const heroStats = [
  { value: "50%", label: "Training time reduction in AR-guided assembly programs" },
  { value: "30%", label: "Faster complex issue resolution with remote assistance" },
  { value: "2x", label: "Pick accuracy improvement in AR warehouse workflows" },
  { value: "99%", label: "Session reliability in production AR deployments" },
]

export const whatIsAr = {
  directAnswer:
    "Augmented reality (AR) is technology that overlays digital content - text, 3D models, instructions, or data - onto a live view of the physical world, viewed through a smartphone, tablet, or head-mounted display. Enterprise AR differs from consumer AR (e.g., social media filters) in that it must integrate with operational data, work reliably in industrial environments, and deliver measurable outcomes like reduced error rates or faster task completion.",
  enterpriseDiff:
    "Enterprise AR applications fall into four core categories - from remote assistance and training to assembly guidance and spatial data visualization.",
  decisionChain: "Spatial Data → AR Overlay → Faster, More Accurate Action → Business Outcome",
  decisionChainDesc:
    "Each stage compounds. Accurate spatial data and 3D models feed AR overlays; AR overlays reduce the time and error rate of physical tasks; reduced errors and faster execution compound into lower training cost, fewer defects, and faster service resolution. Toadster builds the entire chain, not just the headset application.",
}

export const arCategories = [
  {
    icon: Video,
    title: "Remote Assistance",
    desc: "Field technicians share their view with remote experts who annotate it in real time.",
  },
  {
    icon: Eye,
    title: "Training & Simulation",
    desc: "New employees practice procedures on virtual overlays of real equipment.",
  },
  {
    icon: Wrench,
    title: "Assembly & Maintenance Guidance",
    desc: "Step-by-step visual instructions overlaid directly onto machinery or components.",
  },
  {
    icon: Layers,
    title: "Spatial Data Visualization",
    desc: "3D models, IoT sensor data, or analytics overlaid onto physical spaces for planning and inspection.",
  },
]

export const servicesIntro =
  "Toadster's AR services span the full deployment lifecycle - use-case strategy, content and 3D model development, device integration, and data connectivity - delivered as a full deployment or as targeted engagements such as a remote-assistance pilot or a training-module build."

export const coreCapabilitiesBento = [
  {
    variant: "dark" as const,
    badge: "FLAGSHIP SERVICE",
    title: "AR Strategy & Use-Case Assessment",
    desc: "Identify where AR reduces error rate or task time enough to justify deployment cost before hardware or content spend.",
    href: "/contact",
  },
  {
    variant: "green" as const,
    title: "AR Application Development",
    desc: "Native and cross-platform apps with ARKit, ARCore, and Unity AR Foundation for phones, tablets, and head-mounted displays.",
    icon: Smartphone,
  },
  {
    variant: "white" as const,
    title: "3D Content & Digital Twin Development",
    desc: "Unity, Unreal Engine, and Blender models synced to equipment specs and live IoT data where relevant.",
    icon: Box,
  },
  {
    variant: "outline" as const,
    title: "Head-Mounted Display & Wearable Integration",
    desc: "HoloLens, Magic Leap, and RealWear deployments matched to field-of-view, hands-free, and durability needs.",
    icon: Glasses,
  },
]

export const capabilities: { icon: LucideIcon; title: string; desc: string; ctaAnchor: string }[] = [
  {
    icon: Target,
    title: "AR Strategy & Use-Case Assessment",
    desc: "We evaluate your operational workflows - assembly, maintenance, training, inspection - to identify where AR reduces error rate or task time enough to justify deployment cost, before committing to hardware or content development.",
    ctaAnchor: "Explore AR Strategy",
  },
  {
    icon: Smartphone,
    title: "AR Application Development",
    desc: "We build native and cross-platform AR applications using ARKit (iOS), ARCore (Android), and Unity with AR Foundation, deployed to smartphones, tablets, or head-mounted displays depending on the operational environment.",
    ctaAnchor: "Explore AR Applications",
  },
  {
    icon: Glasses,
    title: "Head-Mounted Display & Wearable Integration",
    desc: "We design and deploy solutions on enterprise AR hardware such as Microsoft HoloLens, Magic Leap, and RealWear, selecting devices based on field-of-view, hands-free requirements, and industrial durability needs.",
    ctaAnchor: "Explore HMD Integration",
  },
  {
    icon: Box,
    title: "3D Content & Digital Twin Development",
    desc: "We build 3D models and digital twins using Unity, Unreal Engine, and Blender, syncing virtual representations with real equipment specifications and, where relevant, live IoT sensor data.",
    ctaAnchor: "Explore 3D Content",
  },
  {
    icon: Video,
    title: "Remote Assistance & Live Annotation Systems",
    desc: "We implement real-time video-sharing and annotation platforms that connect field technicians with remote experts, reducing dependency on travel for specialized troubleshooting and repair.",
    ctaAnchor: "Explore Remote Assistance",
  },
  {
    icon: BarChart3,
    title: "AR Data Integration & Analytics",
    desc: "We connect AR application usage and outcome data into the same analytics infrastructure used for enterprise BI - Snowflake or Databricks for storage, Tableau or Power BI for reporting - so AR adoption and impact are measured, not assumed.",
    ctaAnchor: "Explore AR Analytics",
  },
]

export const architectureIntro =
  "A modern enterprise AR architecture has five layers: (1) sensing layer (camera, depth sensors, spatial tracking), (2) rendering layer (AR engine compositing digital content onto the camera feed), (3) content layer (3D models, instructions, data overlays), (4) connectivity layer (real-time data and remote-expert connections), and (5) device layer (smartphone, tablet, or head-mounted display). Toadster designs each layer for your environment, hardware constraints, and workflow rather than defaulting to one device or platform."

export const architectureSteps = [
  { step: "01", title: "Sensing Layer", desc: "Camera, depth sensors, and SLAM (simultaneous localization and mapping) for spatial tracking" },
  { step: "02", title: "Rendering Layer", desc: "ARKit, ARCore, or Unity AR Foundation compositing digital content in real time" },
  { step: "03", title: "Content Layer", desc: "3D models, step-by-step overlays, or data visualizations tied to the physical object in view" },
  { step: "04", title: "Connectivity Layer", desc: "Real-time data feeds (IoT sensors, ERP data) or live video connections to remote experts" },
  { step: "05", title: "Device Layer", desc: "Smartphone, tablet, or head-mounted display selected for the operational environment" },
]

export const markerComparison = {
  headers: ["Dimension", "Marker-Based AR", "Markerless AR"],
  rows: [
    ["How It Works", "Recognizes a predefined visual marker (QR code, image)", "Uses SLAM to map the environment without markers"],
    ["Setup Effort", "Requires placing/printing markers", "No physical setup required"],
    ["Tracking Stability", "Very stable, but limited to marker location", "Stable across larger, dynamic spaces"],
    ["Best For", "Fixed equipment, controlled environments", "Large facilities, mobile use cases"],
    ["Typical Tools", "Vuforia, ARToolKit", "ARKit, ARCore, Unity AR Foundation"],
  ],
}

export const deviceComparison = {
  headers: ["Dimension", "Mobile AR (Phone/Tablet)", "Head-Mounted Display AR"],
  rows: [
    ["Hands-Free", "No - requires holding device", "Yes - fully hands-free"],
    ["Field of View", "Limited to screen size", "Wider, immersive overlay"],
    ["Cost per Unit", "Low - uses existing devices", "Higher - dedicated hardware"],
    ["Best For", "Quick lookups, light-duty tasks", "Complex assembly, hands-on maintenance"],
    ["Typical Hardware", "iOS/Android devices", "HoloLens, Magic Leap, RealWear"],
  ],
}

export const platformIntro =
  "There is no single \"best\" AR platform - the right choice depends on whether the workflow requires hands-free operation, the existing device ecosystem, and content complexity. ARKit and ARCore favor mobile-first deployments on existing smartphones and tablets; HoloLens and Magic Leap favor hands-free industrial use cases; Unity favors teams needing cross-platform 3D content built once and deployed across multiple devices."

export const platformQuote =
  "The most common AR deployment mistake is choosing the device before defining the workflow. A hands-free assembly task needs a head-mounted display; a quick inspection lookup doesn't justify the hardware cost of one. We start every AR engagement by measuring the task - error rate, time, hands-free requirement - before recommending any device."

export const platformComparison = {
  headers: ["Category", "Common Tools", "Strongest For"],
  rows: [
    ["Mobile AR SDKs", "ARKit, ARCore", "Smartphone/tablet deployments, lower hardware cost"],
    ["Head-Mounted Displays", "Microsoft HoloLens, Magic Leap, RealWear", "Hands-free industrial maintenance and assembly"],
    ["3D Content Engines", "Unity, Unreal Engine", "Cross-platform AR content, digital twins"],
    ["3D Modeling", "Blender, Autodesk Maya", "Asset creation for AR overlays and digital twins"],
    ["Remote Assistance Platforms", "Custom live-annotation systems", "Field technician support without travel"],
  ],
}

export const maturityIntro =
  "Enterprise AR maturity progresses through four stages: static visualization (viewing 3D models or data overlays), guided instruction (step-by-step overlays for a known task), remote assistance (live expert collaboration), and adaptive guidance (AI-driven overlays that adjust to the user's actions and live sensor data in real time)."

export const maturityStages = [
  {
    icon: Scan,
    title: "Static Visualization",
    desc: "Viewing 3D models, floor plans, or data overlays with no interactivity.",
  },
  {
    icon: Wrench,
    title: "Guided Instruction",
    desc: "Step-by-step visual instructions overlaid on equipment for a fixed procedure.",
  },
  {
    icon: Video,
    title: "Remote Assistance",
    desc: "Live video and annotation connecting field workers with remote experts in real time.",
  },
  {
    icon: Eye,
    title: "Adaptive AI-Driven Guidance",
    desc: "Overlays that respond to live IoT sensor data and the user's actions, adjusting instructions dynamically.",
  },
]

export const governanceIntro =
  "Enterprise AR governance requires controls over what cameras capture, where that data is stored, and who can access live video feeds during remote assistance sessions - because AR applications inherently process continuous visual data of physical environments and the people in them. Toadster implements data governance as a foundational requirement, particularly in regulated environments like healthcare and manufacturing."

export const governanceComponents = [
  "Data Minimization - Processing visual data locally where possible rather than transmitting raw video unnecessarily",
  "Access Control - Restricting remote-assistance session access to authorized personnel only",
  "Data Retention Policy - Defined retention and deletion rules for recorded sessions and captured imagery",
  "Compliance Mapping - Controls aligned to GDPR, HIPAA, and workplace privacy regulations where applicable",
  "Audit Logging - Traceable records of who accessed live sessions or recorded content, and when",
]

export const industryUseCases = [
  {
    title: "Manufacturing - AR-Guided Assembly Instructions",
    desc: "Step-by-step AR overlays on assembly lines reduced first-time assembly error rates and shortened new-employee training time by replacing printed manuals with contextual, in-view guidance.",
  },
  {
    title: "Field Services - Remote Expert Assistance",
    desc: "Live AR annotation connecting field technicians with remote specialists reduced the need for on-site expert travel, cutting average issue resolution time significantly for complex equipment repairs.",
  },
  {
    title: "Healthcare - AR-Assisted Procedural Training",
    desc: "AR-based training simulations allowed clinical staff to practice procedures on overlay models before working with patients, supporting the same kind of diagnostic-readiness improvements seen in Toadster's broader healthcare AI deployments.",
  },
  {
    title: "Logistics - AR Warehouse Picking & Inspection",
    desc: "AR-guided picking and inspection workflows in distribution centers improved pick accuracy and reduced the time required to locate and verify inventory items.",
  },
]

export const processIntro =
  "Toadster's process follows four phases: Strategy (mapping operational tasks to AR use-case potential), Architecture (defining device, content, and data integration requirements), Deployment (building content and rolling out to pilot users), and Optimization (refining based on adoption and outcome data)."

export const processStepsLanding = [
  {
    num: 1,
    title: "Strategy",
    desc: "Map operational tasks to AR use-case potential, prioritizing those with the clearest error-rate or time-savings opportunity.",
  },
  {
    num: 2,
    title: "Architecture",
    desc: "Define device selection, 3D content requirements, and data integration (IoT, ERP, remote assistance) needs.",
  },
  {
    num: 3,
    title: "Deployment",
    desc: "Build AR content and applications, run a controlled pilot with a defined user group, and validate outcomes.",
  },
  {
    num: 4,
    title: "Optimization",
    desc: "Monitor adoption, task time, and error-rate data; iterate content and device choices based on real usage.",
  },
]

export const whyToadster = [
  {
    icon: Glasses,
    title: "Device-agnostic expertise",
    desc: "Across mobile AR (ARKit, ARCore) and head-mounted displays (HoloLens, Magic Leap, RealWear) - we recommend hardware based on workflow fit, not vendor partnership.",
  },
  {
    icon: Target,
    title: "Outcome-first deployment",
    desc: "Every AR engagement starts by quantifying the task it needs to improve, not the technology itself.",
  },
  {
    icon: GitBranch,
    title: "Full-lifecycle capability",
    desc: "From 3D content development to data integration to outcome measurement, under one engineering team.",
  },
  {
    icon: Shield,
    title: "Governance-aware delivery",
    desc: "Data privacy and access controls built in for regulated and field-operations environments.",
  },
]

export const faqs = [
  {
    question: "What is augmented reality (AR)?",
    answer:
      "Augmented reality (AR) is technology that overlays digital content - such as text, 3D models, or instructions - onto a live view of the real world, typically viewed through a smartphone, tablet, or head-mounted display. Unlike virtual reality, which replaces the real world entirely, AR adds digital information on top of it.",
  },
  {
    question: "What is the difference between AR and VR?",
    answer:
      "Augmented reality (AR) overlays digital content onto the real world while the user can still see their physical surroundings. Virtual reality (VR) fully replaces the user's view with a simulated environment. Mixed reality (MR) sits between the two, allowing digital objects to interact with the physical environment in real time.",
  },
  {
    question: "What industries benefit most from enterprise AR?",
    answer:
      "Manufacturing, field services, logistics, and healthcare see the strongest enterprise AR returns, primarily through assembly guidance, remote technical assistance, warehouse picking accuracy, and clinical training simulation - use cases where a physical task benefits from contextual, hands-free instruction.",
  },
  {
    question: "How much does an enterprise AR deployment cost?",
    answer:
      "Costs vary by scope: a mobile AR pilot using existing smartphones/tablets can range from tens of thousands of dollars, while a head-mounted display deployment with custom 3D content and IoT data integration typically ranges into the hundreds of thousands, depending on device count and content complexity.",
  },
  {
    question: "How long does an AR implementation take?",
    answer:
      "A focused mobile AR pilot for a single use case typically takes 6–10 weeks. A full head-mounted display deployment with custom 3D content and live data integration generally takes 4–8 months depending on content volume and device rollout scale.",
  },
  {
    question: "Do I need a head-mounted display, or will mobile AR work?",
    answer:
      "Mobile AR on existing smartphones or tablets is sufficient for quick lookups, inspections, or light-duty guidance. A head-mounted display is worth the additional hardware cost when the task requires both hands free, such as complex assembly or maintenance procedures.",
  },
  {
    question: "How is AR usage data connected to business analytics?",
    answer:
      "AR application usage and outcome data - task completion time, error rates, session logs - can be exported into a data warehouse or lakehouse (Snowflake, Databricks) and visualized in BI tools like Tableau or Power BI, using the same analytics architecture applied across other enterprise systems.",
  },
]

export const exploreServicesSection = {
  title: "Expert Solutions Tailored for Your Growth",
  subtitle:
    "From mobile AR to HoloLens deployments and 3D content, explore our full suite of augmented reality services designed to transform your operations.",
  ctaLabel: "Explore All Services",
  ctaHref: "/services",
  serviceCardHref: "/services/augmented-reality",
}

export const exploreHireSection = {
  title: "Build Your Dream AR Team",
  subtitle:
    "Scale your AR initiatives with top-tier mobile developers, 3D engineers, and full-stack specialists. Our resources integrate seamlessly into your workflow.",
  ctaLabel: "Hire Expert Resources",
  ctaHref: "/hire-resources",
}

export const exploreHireSlugs = [
  "flutter-developers",
  "react-native-developers",
  "ios-developers",
  "android-developers",
  "full-stack-developers",
  "ai-ml-developers",
] as const

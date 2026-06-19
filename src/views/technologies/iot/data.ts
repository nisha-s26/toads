import {
  Activity,
  BarChart3,
  Cloud,
  Cpu,
  GitBranch,
  LayoutDashboard,
  Network,
  Radio,
  Server,
  Shield,
  Wifi,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export const heroStats = [
  { value: "70%", label: "Operational latency cut in fleet tracking deployments" },
  { value: "2–3 wks", label: "Average lead time before equipment failure detection" },
  { value: "40%", label: "ER wait time reduction with connected patient monitoring" },
  { value: "99.5%", label: "Device connectivity uptime across multi-site fleets" },
]

export const whatIsIot = {
  directAnswer:
    "IoT (Internet of Things) is a network of physical devices - sensors, machines, vehicles, and equipment - embedded with software and connectivity that lets them collect and exchange data. Enterprise IoT differs from consumer IoT in that it must operate at scale across distributed sites, integrate with industrial systems, and deliver data into analytics and decision-making pipelines under strict reliability and security requirements.",
  enterpriseDiff:
    "Enterprise IoT architecture spans four functional layers - from devices and connectivity to platform infrastructure and operational applications.",
  decisionChain: "Sensor Data → Edge/Cloud Processing → Operational Insight → Business Outcome",
  decisionChainDesc:
    "Each stage compounds. Reliable sensor data feeds processing pipelines; processing turns raw signals into operational insight; insight enables faster maintenance, safer operations, and lower cost. Toadster builds the entire chain, not just the device connectivity layer.",
}

export const iotLayers = [
  {
    icon: Radio,
    title: "Device Layer",
    desc: "Sensors, actuators, controllers, and embedded systems collecting raw physical data.",
  },
  {
    icon: Wifi,
    title: "Connectivity Layer",
    desc: "Networks (cellular, Wi-Fi, LPWAN, satellite) moving data from device to cloud.",
  },
  {
    icon: Server,
    title: "Platform Layer",
    desc: "Device management, data ingestion, and processing infrastructure.",
  },
  {
    icon: LayoutDashboard,
    title: "Application Layer",
    desc: "Dashboards, alerts, predictive models, and automated actions built on device data.",
  },
]

export const servicesIntro =
  "Toadster's IoT services span the full deployment lifecycle - device and sensor strategy, connectivity architecture, edge computing, platform integration, and analytics - delivered as a full deployment or as targeted engagements such as a connectivity pilot or a predictive maintenance use case."

export const capabilities: { icon: LucideIcon; title: string; desc: string; ctaAnchor: string }[] = [
  {
    icon: Radio,
    title: "IoT Strategy & Device Architecture",
    desc: "We assess your physical assets and operational goals to determine which sensors, protocols, and connectivity options deliver ROI - before committing capital to hardware deployment.",
    ctaAnchor: "Explore IoT Strategy",
  },
  {
    icon: Network,
    title: "Connectivity & Network Design",
    desc: "We design connectivity architectures using cellular (4G/5G), Wi-Fi, LPWAN (LoRaWAN, NB-IoT), and satellite networks, matched to device density, power constraints, and site geography.",
    ctaAnchor: "Explore Connectivity Design",
  },
  {
    icon: Cpu,
    title: "Edge Computing & Edge Analytics",
    desc: "We deploy edge computing using platforms such as AWS IoT Greengrass, Azure IoT Edge, and NVIDIA Jetson, processing time-sensitive data locally to reduce latency and bandwidth cost before sending summarized data to the cloud.",
    ctaAnchor: "Explore Edge Computing",
  },
  {
    icon: Cloud,
    title: "IoT Platform & Device Management",
    desc: "We implement device provisioning, monitoring, and lifecycle management using platforms like AWS IoT Core, Azure IoT Hub, and Google Cloud IoT, with over-the-air (OTA) updates and remote diagnostics built in.",
    ctaAnchor: "Explore Device Management",
  },
  {
    icon: Activity,
    title: "Predictive Maintenance & Asset Monitoring",
    desc: "We build models that detect equipment degradation patterns from sensor data (vibration, temperature, pressure), enabling maintenance before failure rather than reactive repair after downtime.",
    ctaAnchor: "Explore Predictive Maintenance",
  },
  {
    icon: BarChart3,
    title: "IoT Data Integration & Analytics",
    desc: "We connect device data into the same data pipeline and BI infrastructure used for enterprise analytics - Kafka for streaming ingestion, Snowflake or Databricks for storage, and Tableau or Power BI for visualization - so operational data and business data live in one governed system.",
    ctaAnchor: "Explore IoT Analytics",
  },
]

export const architectureIntro =
  "A modern enterprise IoT architecture has five layers: (1) device/sensor layer, (2) connectivity layer (network transport), (3) edge layer (local processing and filtering), (4) cloud platform layer (ingestion, storage, device management), and (5) application layer (dashboards, alerts, predictive models, automated actions). Toadster designs each layer for your device density, latency tolerance, and bandwidth constraints rather than defaulting to a single connectivity or platform choice."

export const architectureSteps = [
  { step: "01", title: "Device Layer", desc: "Sensors and controllers capturing temperature, vibration, location, flow, or other physical signals" },
  { step: "02", title: "Connectivity Layer", desc: "Cellular, Wi-Fi, LPWAN, or satellite transport depending on power and coverage needs" },
  { step: "03", title: "Edge Layer", desc: "Local processing (AWS IoT Greengrass, Azure IoT Edge) to filter, aggregate, or act on data before transmission" },
  { step: "04", title: "Cloud Platform Layer", desc: "Device management and ingestion (AWS IoT Core, Azure IoT Hub) feeding into Kafka-based streaming pipelines" },
  { step: "05", title: "Application Layer", desc: "Real-time dashboards, predictive maintenance alerts, and automated control actions" },
]

export const edgeVsCloudComparison = {
  headers: ["Dimension", "Edge Computing", "Cloud Computing"],
  rows: [
    ["Latency", "Milliseconds (local processing)", "Seconds (round-trip to cloud)"],
    ["Bandwidth Use", "Low - only summarized data sent", "High - raw data sent continuously"],
    ["Best For", "Real-time control, safety-critical actions", "Aggregated analytics, long-term storage, ML training"],
    ["Typical Tools", "AWS IoT Greengrass, Azure IoT Edge, NVIDIA Jetson", "AWS IoT Core, Azure IoT Hub, Snowflake, Databricks"],
    ["Cost Profile", "Higher upfront hardware cost", "Lower upfront cost, ongoing data transfer/storage cost"],
  ],
}

export const connectivityComparison = {
  headers: ["Protocol", "Range", "Power Use", "Bandwidth", "Best For"],
  rows: [
    ["LPWAN (LoRaWAN, NB-IoT)", "Long (km-scale)", "Very low", "Low", "Battery-powered sensors, remote sites"],
    ["Cellular (4G/5G)", "Long", "Moderate to high", "High", "Mobile assets, video, high-data devices"],
    ["Wi-Fi", "Short (building-scale)", "Moderate", "High", "Indoor facilities with existing infrastructure"],
    ["Satellite", "Global", "High", "Low to moderate", "Remote locations with no terrestrial coverage"],
  ],
}

export const platformIntro =
  "There is no single \"best\" IoT platform - the right choice depends on existing cloud commitments, device scale, and whether real-time edge processing is required. AWS IoT Core favors teams already on AWS; Azure IoT Hub favors Microsoft-centric enterprises; specialized edge platforms like NVIDIA Jetson favor compute-intensive local inference (e.g., computer vision)."

export const platformQuote =
  "The biggest IoT mistakes we see aren't about sensors - they're about sending every byte of raw data to the cloud and paying for it twice: once in bandwidth, once in storage. Deciding what gets processed at the edge versus what gets sent upstream is the single highest-leverage architecture decision in an IoT deployment."

export const platformComparison = {
  headers: ["Platform", "Architecture Role", "Strongest For", "Native Integrations"],
  rows: [
    ["AWS IoT Core / Greengrass", "Cloud ingestion + edge runtime", "AWS-native teams, broad device ecosystem support", "Kafka, Snowflake, Redshift"],
    ["Azure IoT Hub / Edge", "Cloud ingestion + edge runtime", "Microsoft-centric enterprises, hybrid cloud", "Power BI, Azure Synapse"],
    ["Google Cloud IoT", "Cloud ingestion", "GCP-native teams", "BigQuery, Looker"],
    ["NVIDIA Jetson", "Edge inference hardware", "Compute-intensive edge AI (vision, audio)", "Custom ML pipelines"],
  ],
}

export const predictiveMaintenanceIntro =
  "Predictive maintenance uses sensor data - vibration, temperature, acoustic, or pressure signals - combined with machine learning models to detect early signs of equipment degradation before failure occurs. It differs from preventive maintenance, which follows a fixed schedule regardless of actual equipment condition, and from reactive maintenance, which only responds after a failure has already happened."

export const maintenanceApproaches = [
  {
    icon: Wrench,
    title: "Reactive Maintenance",
    desc: "Repair only after equipment fails; highest downtime cost.",
  },
  {
    icon: Activity,
    title: "Preventive Maintenance",
    desc: "Scheduled maintenance at fixed intervals regardless of actual condition.",
  },
  {
    icon: Cpu,
    title: "Predictive Maintenance",
    desc: "Sensor-driven models flag anomalies before failure, triggering maintenance only when needed.",
  },
  {
    icon: BarChart3,
    title: "Prescriptive Maintenance",
    desc: "Models recommend the specific corrective action and optimal timing, not just a warning.",
  },
]

export const securityIntro =
  "IoT security requires controls at every layer - device identity and authentication, encrypted transport, secure over-the-air (OTA) update mechanisms, and network segmentation - because compromised devices can serve as entry points into broader enterprise networks. Toadster implements device-level security as a foundational requirement, not an add-on after deployment."

export const securityComponents = [
  "Device Identity & Authentication - Unique cryptographic identity per device, preventing spoofing",
  "Encrypted Transport - TLS/DTLS encryption for all device-to-cloud communication",
  "Secure OTA Updates - Signed firmware updates to prevent unauthorized code execution",
  "Network Segmentation - Isolating IoT device traffic from core enterprise networks",
  "Lifecycle & Decommissioning Controls - Secure deprovisioning of retired devices to prevent orphaned access points",
]

export const industryUseCases = [
  {
    title: "Logistics - Real-Time Fleet & Asset Tracking",
    desc: "IoT-enabled fleet sensors feeding into dynamic routing models enabled self-healing supply routes that adjusted automatically to disruptions, cutting operational latency by 70%.",
  },
  {
    title: "Manufacturing - Predictive Maintenance on Production Equipment",
    desc: "Vibration and temperature sensors combined with predictive models reduced unplanned downtime by identifying equipment degradation an average of 2–3 weeks before failure.",
  },
  {
    title: "Healthcare - Connected Patient Monitoring Devices",
    desc: "Real-time vital-sign sensors integrated with triage models reduced emergency room wait times by 40% through continuous, automated patient risk reassessment.",
  },
  {
    title: "Across Engagements - Device Uptime",
    desc: "Production IoT deployments managed through Toadster's device management architecture have sustained connectivity uptime above 99.5% across distributed, multi-site fleets.",
  },
]

export const processIntro =
  "Toadster's process follows four phases: Strategy (mapping physical assets to data and connectivity requirements), Architecture (designing device, edge, and platform layers), Deployment (provisioning devices and integrating with cloud and analytics infrastructure), and Optimization (tuning based on connectivity, maintenance, and operational data)."

export const processStepsLanding = [
  {
    num: 1,
    title: "Strategy",
    desc: "Map physical assets and operational goals to sensor types, connectivity needs, and ROI potential.",
  },
  {
    num: 2,
    title: "Architecture",
    desc: "Design device, edge, connectivity, and platform layers matched to site constraints and data volume.",
  },
  {
    num: 3,
    title: "Deployment",
    desc: "Provision devices, integrate with cloud platforms and analytics pipelines, validate with pilot rollout.",
  },
  {
    num: 4,
    title: "Optimization",
    desc: "Monitor uptime, data quality, and maintenance outcomes; iterate based on live operational data.",
  },
]

export const whyToadster = [
  {
    icon: Network,
    title: "Connectivity-agnostic expertise",
    desc: "Across cellular, Wi-Fi, LPWAN, and satellite - we architect around site constraints, not a fixed protocol.",
  },
  {
    icon: Shield,
    title: "Security-first deployment",
    desc: "Device identity, encrypted transport, and OTA update controls are built in from day one.",
  },
  {
    icon: GitBranch,
    title: "Full-lifecycle capability",
    desc: "From sensor selection to edge processing to enterprise analytics, under one engineering team.",
  },
  {
    icon: Activity,
    title: "Proven reliability outcomes",
    desc: "Sustained device uptime and measurable reductions in unplanned downtime across deployments.",
  },
]

export const faqs = [
  {
    question: "What is IoT (Internet of Things)?",
    answer:
      "IoT (Internet of Things) refers to a network of physical devices embedded with sensors, software, and connectivity that allows them to collect and exchange data over the internet or other networks. In an enterprise context, this typically means industrial equipment, fleet vehicles, or facility systems generating operational data.",
  },
  {
    question: "What is the difference between IoT and edge computing?",
    answer:
      "IoT refers to the connected devices and the data they generate. Edge computing refers to processing that data locally, near the device, rather than sending all of it to the cloud. Most enterprise IoT deployments use edge computing for time-sensitive processing and cloud computing for aggregated analytics and storage.",
  },
  {
    question: "How much does an enterprise IoT deployment cost?",
    answer:
      "Costs vary widely by scope: a connectivity pilot on a limited number of devices can range from tens of thousands of dollars, while a full multi-site deployment with predictive maintenance and edge computing typically ranges into the hundreds of thousands, depending on device count, connectivity type, and integration complexity.",
  },
  {
    question: "How long does an IoT implementation take?",
    answer:
      "A focused pilot deployment on a single site typically takes 6–12 weeks. A full multi-site rollout with edge computing, device management, and predictive analytics generally takes 4–9 months depending on device scale and existing infrastructure.",
  },
  {
    question: "What is predictive maintenance and how does IoT enable it?",
    answer:
      "Predictive maintenance uses sensor data from equipment - vibration, temperature, pressure - analyzed by machine learning models to detect early signs of failure before it happens. IoT enables this by continuously collecting the sensor data needed to train and run those predictive models in near real time.",
  },
  {
    question: "Which connectivity option is best for my IoT deployment?",
    answer:
      "The right connectivity depends on device power constraints, data volume, and site geography. LPWAN (LoRaWAN, NB-IoT) suits low-power, low-bandwidth sensors over long ranges. Cellular suits mobile or high-bandwidth devices. Wi-Fi suits indoor facilities with existing infrastructure. Satellite suits remote sites without terrestrial coverage.",
  },
  {
    question: "How is IoT data integrated with business intelligence and analytics?",
    answer:
      "IoT device data is typically streamed into a data pipeline (often via Kafka) and stored in a cloud data warehouse or lakehouse (Snowflake, Databricks), where it can be combined with business data and visualized in BI tools like Tableau or Power BI - using the same architecture as broader enterprise data analytics.",
  },
]

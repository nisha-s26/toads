import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Brain,
  Building2,
  ClipboardList,
  Cloud,
  Code2,
  Cpu,
  Database,
  Factory,
  Fuel,
  HeartPulse,
  LayoutDashboard,
  Layers,
  Lock,
  Monitor,
  Network,
  Package,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Target,
  TestTube2,
  TrendingDown,
  TrendingUp,
  Truck,
  Users,
  Workflow,
  Zap,
} from "lucide-react"

export const heroTrustItems = [
  "End-to-end hardware to cloud",
  "MQTT, BLE, LoRa & industrial protocols",
  "India, UAE, Saudi Arabia & US delivery",
  "Production-grade security built in",
]

export const trustStats = [
  { number: "End-to-End", label: "Hardware to cloud to dashboard" },
  { number: "Multi-Protocol", label: "MQTT · CoAP · BLE · LoRa · Zigbee" },
  { number: "3 Regions", label: "India · UAE · Saudi Arabia · US" },
]

export const capabilities: {
  icon: LucideIcon
  title: string
  desc: string
  value: string
  tags: string[]
}[] = [
  {
    icon: Layers,
    title: "IoT Solution Architecture & Consulting",
    desc: "Before any development begins, we design the right architecture for your use case - device selection, communication protocols, cloud platform, data models, and security framework.",
    value: "Strong early decisions prevent months of rework",
    tags: ["Architecture review", "Protocol selection", "Security framework", "Device selection"],
  },
  {
    icon: Cpu,
    title: "Embedded Systems & Firmware Development",
    desc: "Custom firmware for microcontrollers and embedded Linux systems using C, C++, and Rust. Low-power optimisation, OTA update mechanisms, watchdog recovery, and hardware abstraction layers.",
    value: "Production-grade device reliability at the edge",
    tags: ["C/C++/Rust", "FreeRTOS", "OTA updates", "Embedded Linux"],
  },
  {
    icon: Cloud,
    title: "IoT Cloud Platform Development",
    desc: "Backend systems that ingest, process, store, and act on data from thousands of connected devices - on AWS IoT Core, Azure IoT Hub, Google Cloud IoT, or a custom-built platform.",
    value: "Scales from pilot to thousands of devices",
    tags: ["AWS IoT Core", "Azure IoT Hub", "Device management", "Rules engine"],
  },
  {
    icon: Network,
    title: "Device Connectivity & Protocol Engineering",
    desc: "Integration across MQTT, CoAP, AMQP, HTTP/S, Modbus, BACnet, OPC-UA, BLE, Zigbee, Z-Wave, LoRaWAN, NB-IoT, and LTE-M with gateway and edge-to-cloud architecture.",
    value: "Connects heterogeneous devices reliably",
    tags: ["MQTT", "Modbus", "OPC-UA", "LoRaWAN", "BLE"],
  },
  {
    icon: Brain,
    title: "Edge Computing & Edge AI",
    desc: "On-device intelligence for latency-sensitive or bandwidth-constrained applications using TensorFlow Lite, ONNX, and OpenVINO - so critical decisions don't depend on cloud round-trips.",
    value: "Decisions happen locally when latency matters",
    tags: ["TensorFlow Lite", "ONNX", "OpenVINO", "Store-and-forward"],
  },
  {
    icon: LayoutDashboard,
    title: "IoT Dashboard & Visualisation",
    desc: "Web and mobile dashboards that give operators, managers, and executives live visibility into device status, sensor readings, alerts, and trends.",
    value: "Operational visibility for the people who need it",
    tags: ["Operator dashboards", "Mobile apps", "Alerts", "Trend analysis"],
  },
  {
    icon: Database,
    title: "IoT Data Pipelines & Analytics",
    desc: "Time-series data ingestion, processing, and storage at scale using InfluxDB, TimescaleDB, Apache Kafka, AWS Kinesis, and Spark.",
    value: "Handles high-frequency sensor data without data loss",
    tags: ["InfluxDB", "TimescaleDB", "Kafka", "Kinesis"],
  },
  {
    icon: ShieldCheck,
    title: "IoT Security Engineering",
    desc: "Device identity management, certificate provisioning, encrypted communication, secure boot, firmware signing, network segmentation, and penetration testing.",
    value: "Security designed for connected device threats",
    tags: ["mTLS", "Secure boot", "Firmware signing", "Pen testing"],
  },
  {
    icon: Factory,
    title: "Industrial IoT (IIoT) Integration",
    desc: "Connecting OT systems - PLCs, SCADA, DCS - to IT infrastructure and modern cloud platforms with industrial protocols legacy web shops don't touch.",
    value: "Bridges shop floor systems to modern IT",
    tags: ["PLCs", "SCADA", "OPC-UA", "BACnet", "Modbus"],
  },
  {
    icon: Package,
    title: "IoT Product Development (Hardware + Software)",
    desc: "Full scope for connected hardware products - hardware selection, PCB coordination, firmware, companion mobile app, cloud backend, and device management from prototype to production.",
    value: "One team from prototype to production launch",
    tags: ["Hardware coordination", "Firmware", "Mobile app", "Cloud backend"],
  },
]

export const industries: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Factory,
    title: "Manufacturing & Industry 4.0",
    desc: "Predictive maintenance, OEE monitoring, production line visibility, equipment utilisation, quality control automation, and energy consumption tracking across factory floors.",
  },
  {
    icon: Building2,
    title: "Smart Buildings & Facilities Management",
    desc: "HVAC automation, occupancy sensing, energy management, access control integration, water leak detection, and BMS connectivity for commercial and industrial properties.",
  },
  {
    icon: Truck,
    title: "Logistics & Fleet Management",
    desc: "Real-time asset tracking, cold chain monitoring, driver behaviour analytics, route optimisation feedback, cargo condition monitoring, and geofencing.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical Devices",
    desc: "Remote patient monitoring, medical asset tracking, pharmaceutical storage monitoring, wearable connectivity, and HL7/FHIR-compliant data pipelines.",
  },
  {
    icon: Sprout,
    title: "Agriculture & Smart Farming",
    desc: "Soil moisture monitoring, weather station networks, irrigation automation, greenhouse control, livestock tracking, and drone sensor data integration.",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    desc: "Smart metering, grid monitoring, renewable asset management, demand response systems, substation automation, and predictive maintenance for energy infrastructure.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Consumer",
    desc: "Smart shelf management, footfall analytics, connected vending and kiosk systems, cold chain monitoring, and proximity-based customer engagement.",
  },
  {
    icon: Fuel,
    title: "Oil & Gas / Industrial",
    desc: "Remote pipeline monitoring, tank level sensing, gas detection and safety alerting, rotating equipment health monitoring, and HSE compliance data collection.",
  },
]

export const whyToadster: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Layers,
    title: "We think in full systems, not individual layers",
    desc: "The firmware engineer knows what the cloud architect is building. The data pipeline team understands the sensor sampling rates. IoT failures usually happen at the boundaries between layers - we prevent them by keeping the full picture in mind throughout.",
  },
  {
    icon: Target,
    title: "We build for production, not just proof of concept",
    desc: "A PoC that works in a lab is not the same as a system that handles 10,000 devices, intermittent connectivity, firmware update failures, and malformed data packets at 3am. We design for those conditions from the start.",
  },
  {
    icon: Lock,
    title: "Security is not optional in IoT",
    desc: "Connected devices that aren't secured properly become attack vectors. We implement device identity provisioning, mutual TLS, firmware signing, secure OTA updates, and network micro-segmentation from the first sprint.",
  },
  {
    icon: Workflow,
    title: "We design for the operational reality",
    desc: "Your devices will lose connectivity. Batteries will die. Sensors will return out-of-range values. We design edge caching, store-and-forward mechanisms, anomaly detection, and alert logic for how physical systems actually behave.",
  },
  {
    icon: ClipboardList,
    title: "We manage hardware complexity honestly",
    desc: "Hardware supply chains, certification requirements (CE, FCC, BIS), lead times, and component availability are real constraints. We surface these early, recommend proven components, and build procurement timelines into our project plans.",
  },
  {
    icon: Server,
    title: "Platform decisions that don't lock you in unnecessarily",
    desc: "We recommend managed IoT platforms where they make sense and custom infrastructure where proprietary control or cost justify it. We'll always explain the trade-off clearly and give you the information to make that call yourself.",
  },
]

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Requirements Definition",
    desc: "We start by understanding the physical environment your devices will operate in, the business decisions your data needs to support, connectivity constraints, power requirements, expected device count, and data volume.",
    deliverables: ["Technical requirements document", "Connectivity analysis", "Device count and data volume projections"],
  },
  {
    num: "02",
    title: "Architecture Design",
    desc: "Based on the requirements, we design the full-stack architecture - device hardware selection, firmware approach, communication protocols, cloud platform, data pipeline design, storage strategy, and application layer.",
    deliverables: ["System architecture diagram", "Protocol selection rationale", "Cloud platform recommendation", "Security architecture"],
  },
  {
    num: "03",
    title: "Proof of Concept (PoC)",
    desc: "For new use cases or technically uncertain elements, we build a focused PoC that validates device connectivity, data transmission reliability, and sensor accuracy before committing to full development.",
    deliverables: ["Working PoC with documented results", "Go/no-go recommendation", "Revised project plan"],
  },
  {
    num: "04",
    title: "Full System Development",
    desc: "Parallel development across firmware, cloud backend, data pipeline, and application layer - with weekly integration checkpoints. We use hardware-in-the-loop testing throughout, not just at the end.",
    deliverables: ["Firmware builds", "Cloud infrastructure", "Data pipelines", "Dashboards", "API documentation"],
  },
  {
    num: "05",
    title: "Field Testing & Validation",
    desc: "We test in conditions that approximate the real deployment environment - temperature ranges, connectivity variability, concurrent device counts, data volume spikes, and edge cases like power loss mid-transmission.",
    deliverables: ["Field test report", "Device certification support", "Performance benchmarks"],
  },
  {
    num: "06",
    title: "Deployment & Device Management",
    desc: "Phased rollout starting with a pilot deployment, with monitoring and rollback capability built in. Post-deployment, we set up remote device management - OTA firmware updates, health monitoring, and alerting.",
    deliverables: ["Deployed production system", "OTA update pipeline", "Device management platform", "Operations runbook"],
  },
]

export const techCategories: {
  icon: LucideIcon
  title: string
  why: string
  pills: string[]
}[] = [
  {
    icon: Cpu,
    title: "Hardware / MCUs",
    why: "ESP32, STM32, Nordic nRF52, Raspberry Pi, NVIDIA Jetson, and custom PCB coordination for production hardware.",
    pills: ["ESP32", "STM32", "nRF52", "Raspberry Pi", "Jetson"],
  },
  {
    icon: Code2,
    title: "Firmware",
    why: "C, C++, Rust, MicroPython, FreeRTOS, Zephyr RTOS, and embedded Linux (Yocto, Buildroot) for reliable device software.",
    pills: ["C/C++/Rust", "FreeRTOS", "Zephyr", "Yocto", "MicroPython"],
  },
  {
    icon: Network,
    title: "Connectivity Protocols",
    why: "MQTT, CoAP, AMQP, HTTP/S, BLE, Zigbee, LoRaWAN, NB-IoT, Modbus, OPC-UA, and BACnet across industrial and consumer IoT.",
    pills: ["MQTT", "CoAP", "BLE", "LoRaWAN", "OPC-UA"],
  },
  {
    icon: Cloud,
    title: "IoT Cloud Platforms",
    why: "AWS IoT Core, Azure IoT Hub, Google Cloud IoT, ThingsBoard, Losant, and custom MQTT brokers (EMQX, HiveMQ).",
    pills: ["AWS IoT Core", "Azure IoT Hub", "ThingsBoard", "EMQX", "HiveMQ"],
  },
  {
    icon: Brain,
    title: "Edge Computing",
    why: "AWS Greengrass, Azure IoT Edge, Balena, Docker on embedded Linux, TensorFlow Lite, ONNX Runtime, and OpenVINO.",
    pills: ["Greengrass", "IoT Edge", "Balena", "TensorFlow Lite", "ONNX"],
  },
  {
    icon: Database,
    title: "Data & Time-Series",
    why: "InfluxDB, TimescaleDB, Apache Kafka, AWS Kinesis, Spark, Flink, Elasticsearch, Grafana, and Apache Superset.",
    pills: ["InfluxDB", "TimescaleDB", "Kafka", "Kinesis", "Grafana"],
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    why: "AWS, Azure, and GCP with Terraform-managed, auto-scaling, multi-region infrastructure where required.",
    pills: ["AWS", "Azure", "GCP", "Terraform", "Auto-scaling"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    why: "X.509 certificates, mutual TLS, AWS Certificate Manager, HashiCorp Vault, secure boot, firmware signing, and OTA with rollback.",
    pills: ["mTLS", "X.509", "Vault", "Secure boot", "OTA rollback"],
  },
]

export const hireRoles: {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}[] = [
  {
    icon: Layers,
    title: "IoT Solution Architects",
    desc: "Senior engineers who design the full-stack system - hardware choices, protocol decisions, cloud architecture, and data strategy - before development begins.",
    tags: ["Architecture", "Protocols", "Cloud", "Data strategy"],
  },
  {
    icon: Cpu,
    title: "Embedded & Firmware Engineers",
    desc: "C/C++/Rust developers who build device firmware, BSPs, RTOS integrations, hardware abstraction layers, and OTA update mechanisms.",
    tags: ["C/C++/Rust", "RTOS", "BSP", "OTA"],
  },
  {
    icon: Cloud,
    title: "IoT Cloud Engineers",
    desc: "Backend specialists who build the device management platform, ingestion pipelines, processing logic, and storage infrastructure your devices connect to.",
    tags: ["AWS IoT", "Ingestion", "Device mgmt", "Pipelines"],
  },
  {
    icon: Brain,
    title: "Edge Computing Engineers",
    desc: "Engineers who deploy intelligence to the edge - ML inference, local processing logic, store-and-forward, and edge orchestration for offline scenarios.",
    tags: ["Edge AI", "ML inference", "Store-and-forward", "Orchestration"],
  },
  {
    icon: ShieldCheck,
    title: "IoT Security Engineers",
    desc: "Specialists who implement device identity, certificate management, network segmentation, firmware security, and compliance controls across the full IoT stack.",
    tags: ["mTLS", "Certificates", "Compliance", "Firmware security"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Engineers",
    desc: "Time-series data pipeline builders and analytics engineers who turn raw sensor streams into structured, queryable, actionable datasets.",
    tags: ["Time-series", "Kafka", "InfluxDB", "Analytics"],
  },
  {
    icon: Monitor,
    title: "Dashboard & Application Developers",
    desc: "Frontend and full-stack developers who build operator dashboards, mobile apps, and management portals your teams use to interact with device data.",
    tags: ["Dashboards", "React", "Mobile", "Portals"],
  },
  {
    icon: TestTube2,
    title: "QA & Field Test Engineers",
    desc: "Engineers who test firmware and cloud systems under real-world conditions - temperature variation, connectivity loss, concurrent device load, and data anomalies.",
    tags: ["Field testing", "HIL", "Load testing", "Certification"],
  },
]

export const benefits: {
  icon: LucideIcon
  title: string
  desc: string
}[] = [
  {
    icon: Workflow,
    title: "Predictive maintenance & reduced downtime",
    desc: "Sensor data from equipment reveals early signs of failure - vibration patterns, temperature drift, current draw anomalies - before the equipment breaks. Moving to predictive maintenance typically reduces unplanned downtime by 30–50%.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-time operational visibility",
    desc: "Managers and operations teams stop relying on manual reports and shift handovers. Live data from the factory floor, fleet, or facility is available to anyone who needs it, from any device, at any time.",
  },
  {
    icon: TrendingDown,
    title: "Energy & resource cost reduction",
    desc: "Automated monitoring and control of energy consumption, water usage, HVAC, and lighting typically reduces utility costs by 15–35% in commercial and industrial environments - with the data to prove it.",
  },
  {
    icon: ShieldCheck,
    title: "Quality control & compliance",
    desc: "Continuous sensor monitoring of environmental conditions, process parameters, and product quality replaces manual spot checks, reduces defects, and creates the audit trail regulated industries require.",
  },
  {
    icon: TrendingUp,
    title: "New revenue streams & product differentiation",
    desc: "For companies building connected products, IoT enables subscription revenue from data services, remote monitoring offerings, and differentiated features competitors without connectivity can't match.",
  },
  {
    icon: Users,
    title: "Operational scalability",
    desc: "Manual processes that require a person to be physically present don't scale. IoT automation removes the physical constraint and lets operations scale without proportional headcount growth.",
  },
]

export const engagementModels = [
  {
    featured: false,
    title: "IoT Discovery & Proof of Concept",
    who: "Best for: validating feasibility before full build",
    desc: "A time-boxed engagement (typically 4–8 weeks) to validate the technical feasibility of your IoT use case before committing to full development.",
    benefits: [
      "Use case analysis and requirements definition",
      "Hardware selection and sourcing",
      "Working firmware and cloud connectivity PoC",
      "Architecture recommendation",
      "Full project scope and cost estimate for production build",
    ],
  },
  {
    featured: true,
    badge: "Most Popular",
    title: "Full Product Development",
    who: "Best for: new IoT products and connected operations",
    desc: "End-to-end IoT system development - firmware, cloud platform, data pipeline, and application layer - delivered as a complete, production-ready system.",
    benefits: [
      "Full-stack architecture and design",
      "Firmware development with OTA update capability",
      "Cloud platform and data pipeline development",
      "Dashboard and application development",
      "Field testing, certification support, and deployment",
    ],
  },
  {
    featured: false,
    title: "Embedded Team Augmentation",
    who: "Best for: teams needing IoT expertise in-house",
    desc: "One or more IoT specialists join your existing engineering team - firmware engineers, cloud architects, or data engineers - working in your workflow and reporting into your structure.",
    benefits: [
      "Pre-vetted senior IoT specialists",
      "48-hour onboarding into your stack and tools",
      "Full-time or part-time availability",
      "Direct integration with your engineering team",
      "Flexible scaling with 30 days notice",
    ],
  },
  {
    featured: false,
    title: "Managed IoT Operations",
    who: "Best for: live IoT deployments needing ongoing care",
    desc: "Ongoing management, monitoring, and evolution of a deployed IoT system - firmware updates, cloud infrastructure, alert management, security patching, and feature iteration.",
    benefits: [
      "24/7 system monitoring and alerting",
      "OTA firmware update management",
      "Cloud infrastructure management and cost optimisation",
      "Security patching and compliance updates",
      "Quarterly roadmap reviews and feature releases",
    ],
  },
]

export const faqs = [
  {
    question: "How much does an IoT solution cost to build?",
    answer:
      "A focused proof of concept with off-the-shelf hardware typically runs $15,000–$40,000 USD. A full production IoT system - custom firmware, cloud platform, data pipeline, and dashboard - is usually $80,000–$300,000+ depending on device count, protocol complexity, real-time requirements, and whether custom hardware is involved. We provide a detailed estimate after a discovery conversation.",
  },
  {
    question: "How long does an IoT project take?",
    answer:
      "A proof of concept is typically 4–8 weeks. A full production system - including field testing and phased deployment - usually takes 4–9 months. Hardware introduces lead times that pure software projects don't have, and field testing in real conditions always surfaces things that lab testing misses.",
  },
  {
    question: "Do you handle the hardware side, or only the software?",
    answer:
      "We handle hardware selection, vendor evaluation, and firmware development, and we coordinate closely with PCB design and hardware manufacturing partners when custom hardware is required. We don't run a manufacturing facility, but we manage the hardware development process as part of the overall project.",
  },
  {
    question: "Which cloud platform should we use for IoT - AWS, Azure, or Google Cloud?",
    answer:
      "AWS IoT Core is the most mature and feature-complete managed IoT platform and is the right default for most projects. Azure IoT Hub is a strong choice if you're already deeply in the Microsoft ecosystem. GCP IoT is best when your primary need is large-scale data processing and ML. For some use cases, a self-hosted broker (EMQX, HiveMQ) on your own infrastructure is the right answer.",
  },
  {
    question: "How do you handle IoT security?",
    answer:
      "We treat IoT security as a first-class engineering requirement. This means device identity provisioning with X.509 certificates, mutual TLS for all device communication, firmware signing and verified boot, encrypted storage on device, secure OTA update mechanisms with rollback capability, network micro-segmentation, and regular vulnerability scanning.",
  },
  {
    question: "What happens when devices lose connectivity?",
    answer:
      "We design for it from the start. Depending on the use case, this means local data buffering with store-and-forward when connectivity resumes, edge processing so critical decisions don't depend on the cloud, graceful degradation modes, and alerting when a device goes offline unexpectedly.",
  },
  {
    question: "Can you integrate with our existing systems - ERP, SCADA, MES?",
    answer:
      "Yes. Enterprise IoT almost always involves integrating device data with existing operational and business systems. We have experience integrating with SAP, Oracle, major SCADA platforms, custom MES systems, and ERP systems via REST APIs, message queues, and direct database integration.",
  },
  {
    question: "We already have some IoT devices deployed. Can you help us improve the platform rather than start over?",
    answer:
      "Yes - this is a common scenario. We assess what you have, identify the gaps causing problems (usually data pipeline reliability, security, scalability, or dashboard usability), and improve incrementally. We avoid recommending a full rebuild unless the existing architecture genuinely can't support what you need.",
  },
]

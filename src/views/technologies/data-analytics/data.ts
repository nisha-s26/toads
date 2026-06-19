import {
  Activity,
  BarChart3,
  Database,
  GitBranch,
  LineChart,
  Shield,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export const heroStats = [
  { value: "40%", label: "ER wait time reduction in healthcare triage" },
  { value: "70%", label: "Operational latency cut in supply chain builds" },
  { value: "14", label: "Data sources unified in one fiscal quarter" },
]

export const whatIsAnalytics = {
  directAnswer:
    "Data analytics is the process of collecting, cleaning, transforming, and interpreting data to support business decision-making. It spans four maturity levels — descriptive (what happened), diagnostic (why it happened), predictive (what will happen), and prescriptive (what to do about it) — and depends on a reliable data pipeline: ingestion, storage, transformation, and visualization.",
  enterpriseDiff:
    "Enterprise data analytics differs from basic reporting in three ways: it operates on governed, high-volume, multi-source data; it supports both batch and real-time decision cycles; and it is built on a scalable architecture (data warehouse, data lake, or lakehouse) rather than spreadsheets or siloed tools.",
  decisionChain:
    "Data Analytics → Business Intelligence → Decision-Making → Revenue Outcome",
  decisionChainDesc:
    "Each stage compounds. Clean, well-modeled data feeds BI dashboards; BI dashboards feed faster, evidence-based decisions; faster decisions compound into measurable revenue, margin, or risk-reduction outcomes. Toadster builds the entire chain, not just the dashboard at the end of it.",
}

export const advantages = [
  {
    icon: Workflow,
    title: "Governed Multi-Source Data",
    desc: "Operate on high-volume, multi-source enterprise data with batch and real-time decision cycles — not siloed spreadsheets.",
  },
  {
    icon: Activity,
    title: "Scalable Architecture",
    desc: "Built on warehouse, lake, or lakehouse patterns designed for your volume, latency, and governance requirements.",
  },
  {
    icon: Shield,
    title: "Full Decision Chain",
    desc: "From raw ingestion to BI dashboards to predictive models — we build the entire analytics chain, not just the final report.",
  },
]

export const servicesIntro =
  "Toadster's data analytics services cover the full lifecycle — data engineering, warehouse/lakehouse architecture, governance, BI reporting, and predictive analytics — delivered as either a full-stack implementation or as targeted engagements (e.g., migration only, dashboard layer only)."

export const coreCapabilitiesBento = [
  {
    variant: "dark" as const,
    badge: "FLAGSHIP SERVICE",
    title: "Data Engineering & Pipeline Development",
    desc: "ETL/ELT pipelines using Apache Spark, dbt, AWS Glue, and Apache Airflow — orchestration, testing, and lineage from day one.",
    href: "#all-services",
  },
  {
    variant: "green" as const,
    title: "Predictive & Prescriptive Analytics",
    desc: "Forecasting, churn, demand-planning, and recommendation models that plug directly into your BI layer.",
    icon: BarChart3,
  },
  {
    variant: "white" as const,
    title: "Business Intelligence & Dashboard Development",
    desc: "Self-service and executive reporting in Tableau, Power BI, and Looker with semantic layers and row-level security.",
    icon: LineChart,
  },
  {
    variant: "outline" as const,
    title: "Data Warehouse & Lakehouse Architecture",
    desc: "Cloud-native platforms on Snowflake, Databricks, BigQuery, and Redshift — matched to workload, latency, and cost.",
    icon: Database,
  },
]

export const capabilities: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Workflow,
    title: "Data Engineering & Pipeline Development",
    desc: "We design ETL/ELT pipelines using Apache Spark, dbt, AWS Glue, and Apache Airflow to move data reliably from source systems into your warehouse or lake, with orchestration, testing, and lineage built in from day one.",
  },
  {
    icon: Database,
    title: "Data Warehouse & Lakehouse Architecture",
    desc: "We architect and migrate cloud-native platforms on Snowflake, Databricks, BigQuery, and Amazon Redshift, choosing warehouse, lake, or lakehouse patterns based on workload, latency, and cost requirements.",
  },
  {
    icon: Activity,
    title: "Real-Time & Streaming Analytics",
    desc: "We implement event-driven pipelines using Apache Kafka and stream processing frameworks to power fraud detection, operational monitoring, and live KPI tracking — typically reducing decision latency from hours to seconds.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence & Dashboard Development",
    desc: "We build self-service and executive reporting layers in Tableau, Power BI, and Looker, including semantic layers, row-level security, and embedded analytics for customer-facing products.",
  },
  {
    icon: BarChart3,
    title: "Predictive & Prescriptive Analytics",
    desc: "We develop forecasting, churn, demand-planning, and recommendation models that plug directly into your BI layer, so predictions show up where decision-makers already work.",
  },
  {
    icon: Shield,
    title: "Data Governance & Quality Management",
    desc: "We implement data catalogs, master data management (MDM), data quality rules, and access controls aligned to GDPR, HIPAA, and SOC 2 requirements — so growth in data volume doesn't outpace control.",
  },
]

export const architectureIntro =
  "A modern enterprise analytics architecture has five layers: (1) source systems, (2) ingestion (batch/streaming), (3) storage (warehouse/lake/lakehouse), (4) transformation (ETL/ELT), and (5) consumption (BI, ML, APIs). Toadster designs each layer for your specific data volume, latency needs, and governance requirements rather than defaulting to a single stack."

export const architectureSteps = [
  { step: "01", title: "Source Systems", desc: "ERPs, CRMs, application databases, third-party APIs, IoT/event streams" },
  { step: "02", title: "Ingestion Layer", desc: "Batch (Airflow, AWS Glue) or streaming (Kafka) depending on freshness requirements" },
  { step: "03", title: "Storage Layer", desc: "Cloud data warehouse (Snowflake, BigQuery, Redshift) or lakehouse (Databricks) for structured + unstructured data" },
  { step: "04", title: "Transformation Layer", desc: "dbt and Spark for modeling, cleaning, and business-logic transformation" },
  { step: "05", title: "Consumption Layer", desc: "Tableau, Power BI, Looker for BI; APIs and ML pipelines for embedded and predictive use cases" },
]

export const batchVsStream = {
  headers: ["Dimension", "Batch Processing", "Stream Processing"],
  rows: [
    ["Latency", "Minutes to hours", "Milliseconds to seconds"],
    ["Typical Tools", "Airflow, AWS Glue, dbt", "Kafka, Spark Streaming"],
    ["Best For", "Financial reporting, EOD reconciliation", "Fraud detection, live monitoring"],
    ["Cost Profile", "Lower compute cost", "Higher, continuous compute cost"],
    ["Complexity", "Lower to build/maintain", "Higher; requires event-driven design"],
  ],
}

export const olapVsOltp = {
  headers: ["Dimension", "OLTP (Transactional)", "OLAP (Analytical)"],
  rows: [
    ["Purpose", "Run the business (orders, transactions)", "Understand the business (trends, reporting)"],
    ["Schema", "Highly normalized", "Denormalized / star schema"],
    ["Query Pattern", "Many small reads/writes", "Few large aggregations"],
    ["Example Systems", "PostgreSQL, MySQL", "Snowflake, BigQuery, Redshift"],
  ],
}

export const platformIntro =
  "There is no universally \"best\" data platform — the right choice depends on workload type, existing cloud commitments, team skill sets, and budget. Snowflake favors simplicity and elasticity; Databricks favors unified ML/lakehouse workloads; BigQuery and Redshift favor teams already standardized on GCP or AWS, respectively."

export const platformQuote =
  "We don't sell a single-stack answer. We've migrated clients off legacy on-prem warehouses to Snowflake for elasticity, and we've built lakehouse architectures on Databricks when ML and BI needed to share the same governed dataset. The platform decision should follow the workload — not the other way around."

export const platformComparison = {
  headers: ["Platform", "Architecture", "Strongest For", "Native Integrations"],
  rows: [
    ["Snowflake", "Cloud data warehouse", "Multi-cloud flexibility, elastic compute", "dbt, Tableau, Power BI"],
    ["Databricks", "Lakehouse", "Unified BI + ML workloads, large unstructured data", "Spark, MLflow, Delta Lake"],
    ["Google BigQuery", "Serverless warehouse", "GCP-native teams, ad-hoc large-scale queries", "Looker, Dataflow"],
    ["Amazon Redshift", "Cloud data warehouse", "AWS-native teams, structured BI workloads", "Glue, QuickSight"],
  ],
}

export const analyticsMaturityIntro =
  "Descriptive analytics explains what happened using historical dashboards and reports. Predictive analytics forecasts what is likely to happen using statistical and ML models. Prescriptive analytics recommends specific actions based on those predictions, often through automated rules or optimization models. Most enterprises start descriptive and mature toward prescriptive over 18–36 months."

export const analyticsMaturity = [
  { title: "Descriptive Analytics", desc: "Sales dashboards, monthly KPI reports, historical trend lines" },
  { title: "Diagnostic Analytics", desc: "Root-cause analysis, cohort and variance analysis" },
  { title: "Predictive Analytics", desc: "Churn models, demand forecasting, risk scoring" },
  { title: "Prescriptive Analytics", desc: "Automated inventory rebalancing, dynamic pricing, next-best-action engines" },
]

export const governanceIntro =
  "A data governance framework defines who owns data, how its quality is measured, who can access it, and how it complies with regulation. Toadster implements governance using a data catalog (metadata and lineage), master data management (single source of truth for core entities), and automated data quality rules (completeness, accuracy, consistency checks) enforced at the pipeline layer, not after the fact."

export const governanceComponents = [
  "Data Catalog — Searchable inventory of datasets, owners, and lineage",
  "Master Data Management (MDM) — Single, reconciled definition of customers, products, vendors",
  "Data Quality Rules — Automated validation at ingestion (nulls, duplicates, schema drift)",
  "Access Control — Role-based and row-level security tied to identity providers",
  "Compliance Mapping — Controls aligned to GDPR, HIPAA, SOC 2, and industry-specific mandates",
]

export const architecturePatternsIntro =
  "A centralized lakehouse consolidates all enterprise data into one governed platform managed by a central team — best for organizations under ~2,000 employees or with simpler domain structures. A data mesh distributes ownership to domain teams (e.g., finance, marketing) who manage their own data products against shared governance standards — best for large, multi-business-unit enterprises where a single team can't keep pace with demand."

export const architecturePatterns = {
  headers: ["Pattern", "Ownership Model", "Best Fit", "Trade-off"],
  rows: [
    ["Centralized Lakehouse", "Single platform team", "Mid-market, single business unit", "Can bottleneck at scale"],
    ["Data Mesh", "Domain-distributed teams", "Large, multi-division enterprises", "Requires mature governance discipline"],
  ],
}

export const processIntro =
  "Toadster's process follows four phases: Strategy (mapping business questions to data requirements), Architecture (designing pipeline, warehouse, and governance), Implementation (building and testing pipelines and dashboards), and Optimization (tuning performance and expanding use cases based on adoption data)."

export const processStepsLanding = [
  {
    num: 1,
    title: "Strategy",
    desc: "Define the business questions analytics must answer and map them to required data sources.",
  },
  {
    num: 2,
    title: "Architecture",
    desc: "Design pipeline, storage, and governance architecture matched to volume and latency needs.",
  },
  {
    num: 3,
    title: "Implementation",
    desc: "Build ETL/ELT pipelines, data models, and BI dashboards; validate with stakeholder UAT.",
  },
  {
    num: 4,
    title: "Optimization",
    desc: "Monitor pipeline performance, dashboard adoption, and model accuracy; iterate based on usage data.",
  },
]

export const whyToadster = [
  {
    icon: GitBranch,
    title: "Platform-agnostic expertise",
    desc: "Across Snowflake, Databricks, BigQuery, and Redshift — we recommend based on workload fit, not vendor incentive.",
  },
  {
    icon: Shield,
    title: "Governance-first delivery",
    desc: "Data quality and compliance controls are built into pipelines, not bolted on afterward.",
  },
  {
    icon: Database,
    title: "Full-lifecycle capability",
    desc: "From raw source systems to executive dashboards to predictive models, under one engineering team.",
  },
  {
    icon: BarChart3,
    title: "Transparent engagement model",
    desc: "Fixed-scope architecture phases before any long-term build commitment.",
  },
]

export const faqs = [
  {
    question: "What is enterprise data analytics?",
    answer:
      "Enterprise data analytics is the practice of collecting and analyzing data across an entire organization's systems — not a single department — to support coordinated decision-making. It requires centralized or federated data architecture, governance standards, and BI tooling that can serve multiple business units consistently.",
  },
  {
    question: "How much does data analytics consulting cost?",
    answer:
      "Costs vary by scope: a focused dashboard/BI engagement can range from tens of thousands of dollars, while full data warehouse migrations or enterprise-wide governance programs typically range into the hundreds of thousands, depending on data volume, source system complexity, and compliance requirements.",
  },
  {
    question: "What is the difference between a data warehouse and a data lake?",
    answer:
      "A data warehouse stores structured, processed data optimized for fast BI queries (e.g., Snowflake, Redshift). A data lake stores raw structured and unstructured data at low cost, optimized for flexibility and large-scale processing (e.g., Databricks, S3-based lakes). A lakehouse combines both in a single platform.",
  },
  {
    question: "How long does a data analytics implementation take?",
    answer:
      "A focused BI/dashboard implementation typically takes 6–10 weeks. A full data warehouse modernization or lakehouse build, including governance, generally takes 4–9 months depending on the number of source systems and compliance requirements.",
  },
  {
    question: "What tools does Toadster use for data analytics?",
    answer:
      "Toadster works across Apache Spark, Databricks, Snowflake, dbt, Tableau, Power BI, Looker, Google BigQuery, Amazon Redshift, AWS Glue, Apache Kafka, and Apache Airflow — selecting tools based on workload, not a fixed stack.",
  },
  {
    question: "What is the difference between predictive and prescriptive analytics?",
    answer:
      "Predictive analytics forecasts a likely outcome (e.g., this customer is likely to churn). Prescriptive analytics recommends a specific action in response (e.g., offer this customer a retention incentive). Prescriptive analytics typically requires predictive models plus a decision or optimization layer.",
  },
  {
    question: "Is real-time analytics necessary for my business?",
    answer:
      "Real-time analytics is necessary when decisions must be made in seconds or minutes — fraud detection, operational monitoring, dynamic pricing. If decisions are made daily or weekly, batch processing is usually more cost-effective and easier to maintain.",
  },
]

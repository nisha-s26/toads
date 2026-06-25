import Link from "next/link"
import { Radio } from "lucide-react"
import { TechnologyHeroSection } from "../shared/TechnologyHeroSection"
import {
  TechnologyCtaSection,
  TechnologyExploreSections,
  TechnologyFaqSection,
  TechnologyProcessSection,
  TechnologyServicesSection,
} from "../shared/TechnologyPageSections"
import { buildHireExploreCards, buildServiceExploreCards } from "../shared/technology-explore-utils"
import {
  capabilities,
  coreCapabilitiesBento,
  exploreHireSection,
  exploreHireSlugs,
  exploreServicesSection,
  faqs,
  processIntro,
  processStepsLanding,
  servicesIntro,
} from "./data"

export default function IotPage() {
  return (
    <div className="data-analytics-landing">
      <TechnologyHeroSection
        lightImageSrc="/iot-hero-light.png"
        darkImageSrc="/iot-hero-dark.png"
        heroVariant="devops"
      >
        <span className="da-badge">
          <Radio size={14} />
          The Connected Enterprise
        </span>
        <h1 className="da-hero-title">
          Enterprise IoT: Turning Connected Devices Into{" "}
          <span className="da-text-accent">Operational Intelligence</span>
        </h1>
        <p className="da-hero-subtitle">
          We design and deploy IoT systems - from edge sensors and connectivity to device management and real-time
          analytics - engineered to turn physical operations into measurable, actionable data.
        </p>
        <div className="da-hero-actions">
          <Link href="/contact" className="da-btn da-btn-primary" title="Request an IoT Strategy Session">
            Request an IoT Strategy Session
          </Link>
        </div>
      </TechnologyHeroSection>

      <TechnologyServicesSection
        title="Our Enterprise IoT Services"
        intro={servicesIntro}
        bentoItems={coreCapabilitiesBento}
      />

      <TechnologyProcessSection title="Our IoT Engineering Process" intro={processIntro} steps={processStepsLanding} />

      <TechnologyExploreSections
        services={{
          ...exploreServicesSection,
          cards: buildServiceExploreCards(capabilities, exploreServicesSection.serviceCardHref),
        }}
        hire={{
          ...exploreHireSection,
          cards: buildHireExploreCards([...exploreHireSlugs]),
        }}
      />

      <TechnologyFaqSection faqs={faqs} />

      <TechnologyCtaSection
        title="Ready to Turn Connected Devices Into Operational Intelligence?"
        subtitle="Partner with Toadster Technologies to design an IoT architecture built for reliability, security, and measurable operational outcomes."
        primaryLabel="Schedule Consultation"
        footnote="Toadster Technologies - Precision Engineering for Connected Operations."
      />
    </div>
  )
}

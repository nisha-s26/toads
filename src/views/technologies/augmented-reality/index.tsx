import Link from "next/link"
import { Scan } from "lucide-react"
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

export default function AugmentedRealityPage() {
  return (
    <div className="data-analytics-landing">
      <TechnologyHeroSection
        lightImageSrc="/technologies/augmented-reality-hero-light.png"
        darkImageSrc="/technologies/augmented-reality-hero-dark.png"
        heroVariant="devops"
      >
        <span className="da-badge">
          <Scan size={14} />
          The Spatial Advantage
        </span>
        <h1 className="da-hero-title">
          Enterprise Augmented Reality: Overlaying Intelligence Onto the{" "}
          <span className="da-text-accent">Physical World</span>
        </h1>
        <p className="da-hero-subtitle">
          We design and deploy AR systems - from industrial training and remote assistance to spatial visualization
          and AI-powered overlays - engineered to improve speed, accuracy, and safety in real-world operations.
        </p>
        <div className="da-hero-actions">
          <Link href="/contact" className="da-btn da-btn-primary" title="Request an AR Strategy Session">
            Request an AR Strategy Session
          </Link>
        </div>
      </TechnologyHeroSection>

      <TechnologyServicesSection
        title="Our Enterprise AR Services"
        intro={servicesIntro}
        bentoItems={coreCapabilitiesBento}
      />

      <TechnologyProcessSection title="Our AR Engineering Process" intro={processIntro} steps={processStepsLanding} />

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
        title="Ready to Overlay Intelligence Onto Your Operations?"
        subtitle="Partner with Toadster Technologies to design an AR deployment built for measurable improvements in speed, accuracy, and safety."
        primaryLabel="Schedule Consultation"
        footnote="Toadster Technologies - Precision Engineering for Spatial Computing."
      />
    </div>
  )
}

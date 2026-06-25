import Link from "next/link"
import { Sparkles } from "lucide-react"
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

export default function DataAnalyticsPage() {
  return (
    <div className="data-analytics-landing">
      <TechnologyHeroSection
        lightImageSrc="/data-analytics-hero-light.png"
        darkImageSrc="/data-analytics-hero-dark.png"
        heroVariant="devops"
      >
        <span className="da-badge">
          <Sparkles size={14} />
          The Analytics Advantage
        </span>
        <h1 className="da-hero-title">
          Enterprise Data Analytics: From Raw Data to{" "}
          <span className="da-text-accent">Revenue Outcomes</span>
        </h1>
        <p className="da-hero-subtitle">
          We design and build data analytics systems that turn fragmented enterprise data into governed, real-time
          decision intelligence - engineered for scale, accuracy, and measurable ROI.
        </p>
        <div className="da-hero-actions">
          <Link href="/contact" className="da-btn da-btn-primary" title="Request a Data Strategy Session">
            Request a Data Strategy Session
          </Link>
        </div>
      </TechnologyHeroSection>

      <TechnologyServicesSection
        title="Our Enterprise Data Analytics Services"
        intro={servicesIntro}
        bentoItems={coreCapabilitiesBento}
      />

      <TechnologyProcessSection
        title="Our Data Analytics Engineering Process"
        intro={processIntro}
        steps={processStepsLanding}
      />

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
        title="Ready to Build a Data Analytics Platform That Drives Decisions?"
        subtitle="Partner with Toadster Technologies to design a data analytics architecture built for accuracy, governance, and measurable business outcomes."
        primaryLabel="Schedule a Data Strategy Session"
        footnote="Toadster Technologies - Precision Engineering for Data."
      />
    </div>
  )
}

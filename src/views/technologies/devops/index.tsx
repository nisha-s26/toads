import Link from "next/link"
import { Server } from "lucide-react"
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

export default function DevOpsPage() {
  return (
    <div className="data-analytics-landing">
      <TechnologyHeroSection
        lightImageSrc="/devops-hero-light.png"
        darkImageSrc="/devops-hero-dark.png"
        heroVariant="devops"
      >
        <span className="da-badge">
          <Server size={14} />
          The Delivery Advantage
        </span>
        <h1 className="da-hero-title">
          Enterprise DevOps: Engineering Speed Without Sacrificing{" "}
          <span className="da-text-accent">Stability</span>
        </h1>
        <p className="da-hero-subtitle">
          We design and implement CI/CD pipelines, infrastructure automation, and observability systems that let
          enterprise teams ship faster, recover quicker, and scale infrastructure without manual bottlenecks.
        </p>
        <div className="da-hero-actions">
          <Link href="/contact" className="da-btn da-btn-primary" title="Request a DevOps Assessment">
            Request a DevOps Assessment
          </Link>
        </div>
      </TechnologyHeroSection>

      <TechnologyServicesSection
        title="Our Enterprise DevOps Services"
        intro={servicesIntro}
        bentoItems={coreCapabilitiesBento}
      />

      <TechnologyProcessSection
        title="Our DevOps Engineering Process"
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
        title="Ready to Engineer Faster, More Reliable Delivery?"
        subtitle="Partner with Toadster Technologies to build CI/CD pipelines and infrastructure that turn deployment speed into a competitive advantage."
        primaryLabel="Schedule Consultation"
        footnote="Toadster Technologies - Precision Engineering for Delivery."
      />
    </div>
  )
}

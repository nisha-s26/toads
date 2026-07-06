import Link from "next/link"
import { Cloud } from "lucide-react"
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

export default function SaasAppDevelopmentPage() {
  return (
    <div className="data-analytics-landing">
      <TechnologyHeroSection
        lightImageSrc="/technologies/saas-app-development-hero-light.webp"
        darkImageSrc="/technologies/saas-app-development-hero-dark.webp"
        imageAlt="Toadster SaaS application development services"
        heroVariant="devops"
      >
        <span className="da-badge">
          <Cloud size={14} />
          The Scalable Software Advantage
        </span>
        <h1 className="da-hero-title">
          Enterprise SaaS App Development: Built to Scale From First Customer to{" "}
          <span className="da-text-accent">Millions</span>
        </h1>
        <p className="da-hero-subtitle">
          We design and build multi-tenant SaaS applications - from architecture and core product to billing,
          security, and scaling infrastructure - engineered to support rapid growth without costly re-platforming.
        </p>
        <div className="da-hero-actions">
          <Link href="/contact" className="da-btn da-btn-primary" title="Request a SaaS Architecture Session">
            Request a SaaS Architecture Session
          </Link>
        </div>
      </TechnologyHeroSection>

      <TechnologyServicesSection
        title="Our Enterprise SaaS Development Services"
        intro={servicesIntro}
        bentoItems={coreCapabilitiesBento}
      />

      <TechnologyProcessSection
        title="Our SaaS Development Process"
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
        title="Ready to Build a SaaS Product That Scales?"
        subtitle="Partner with Toadster Technologies to architect a SaaS platform built for growth, retention, and enterprise-grade trust from day one."
        primaryLabel="Schedule Consultation"
        footnote="Toadster Technologies - Precision Engineering for Scalable Software."
      />
    </div>
  )
}

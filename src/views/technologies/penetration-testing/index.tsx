import Link from "next/link"
import { ShieldCheck } from "lucide-react"
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

export default function PenetrationTestingPage() {
  return (
    <div className="data-analytics-landing">
      <TechnologyHeroSection
        lightImageSrc="/technologies/penetration-testing-hero-light.png"
        darkImageSrc="/technologies/penetration-testing-hero-dark.png"
        heroVariant="devops"
      >
        <span className="da-badge">
          <ShieldCheck size={14} />
          The Security Assurance Advantage
        </span>
        <h1 className="da-hero-title">
          Enterprise Penetration Testing: Find the Breach Before an{" "}
          <span className="da-text-accent">Attacker Does</span>
        </h1>
        <p className="da-hero-subtitle">
          We simulate real-world attacks against your applications, networks, and cloud infrastructure to find
          exploitable vulnerabilities before adversaries do - with findings prioritized by actual business risk, not
          just severity scores.
        </p>
        <div className="da-hero-actions">
          <Link
            href="/contact"
            className="da-btn da-btn-primary"
            title="Request a Penetration Test Scoping Call"
          >
            Request a Penetration Test Scoping Call
          </Link>
        </div>
      </TechnologyHeroSection>

      <TechnologyServicesSection
        title="Our Enterprise Penetration Testing Services"
        intro={servicesIntro}
        bentoItems={coreCapabilitiesBento}
      />

      <TechnologyProcessSection
        title="Our Penetration Testing Process"
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
        title="Ready to Find Your Vulnerabilities Before an Attacker Does?"
        subtitle="Partner with Toadster Technologies to run a penetration testing program that delivers audit-defensible, risk-prioritized security assurance."
        primaryLabel="Schedule a Scoping Call"
        footnote="Toadster Technologies - Precision Engineering for Security Assurance."
      />
    </div>
  )
}

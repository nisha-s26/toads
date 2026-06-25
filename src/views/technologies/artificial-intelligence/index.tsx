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

export default function ArtificialIntelligencePage() {
  return (
    <div className="data-analytics-landing">
      <TechnologyHeroSection
        lightImageSrc="/artificial-intelligence-hero-light.png"
        darkImageSrc="/artificial-intelligence-hero-dark.png"
        heroVariant="devops"
      >
        <span className="da-badge">
          <Sparkles size={14} />
          The Intelligence Revolution
        </span>
        <h1 className="da-hero-title">
          Enterprise Artificial Intelligence: From Model to{" "}
          <span className="da-text-accent">Measurable Outcome</span>
        </h1>
        <p className="da-hero-subtitle">
          We design, build, and deploy production-grade AI systems - from custom LLM integration to autonomous agents
          and predictive models - engineered to operate reliably inside real enterprise workflows.
        </p>
        <div className="da-hero-actions">
          <Link href="/contact" className="da-btn da-btn-primary" title="Request an AI Strategy Session">
            Request an AI Strategy Session
          </Link>
        </div>
      </TechnologyHeroSection>

      <TechnologyServicesSection
        title="Our Enterprise AI Services"
        intro={servicesIntro}
        bentoItems={coreCapabilitiesBento}
      />

      <TechnologyProcessSection title="Our AI Engineering Process" intro={processIntro} steps={processStepsLanding} />

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
        title="Ready to Architect the Future of AI?"
        subtitle="Partner with Toadster Technologies to build autonomous systems that drive measurable enterprise value and operational excellence."
        primaryLabel="Schedule Consultation"
        footnote="Toadster Technologies - Precision Engineering for AI."
      />
    </div>
  )
}

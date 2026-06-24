import Link from "next/link"
import { Scan } from "lucide-react"
import { FaqItem } from "../shared/FaqItem"
import { ComparisonTable, DirectAnswer } from "../shared/TechnologyPrimitives"
import { TechnologyHeroSection } from "../shared/TechnologyHeroSection"
import { TechnologyCapabilityCard, TechnologyCapabilityGrid } from "../shared/TechnologyCapabilityCard"
import {
  architectureIntro,
  architectureSteps,
  arCategories,
  capabilities,
  deviceComparison,
  faqs,
  governanceComponents,
  governanceIntro,
  heroStats,
  industryUseCases,
  markerComparison,
  maturityIntro,
  maturityStages,
  platformComparison,
  platformIntro,
  platformQuote,
  processIntro,
  processStepsLanding,
  servicesIntro,
  whatIsAr,
  whyToadster,
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
              We design and deploy AR systems - from industrial training and remote assistance to spatial
              visualization and AI-powered overlays - engineered to improve speed, accuracy, and safety in
              real-world operations.
            </p>
            <div className="da-hero-actions">
              <Link href="/contact" className="da-btn da-btn-primary" title="Request an AR Strategy Session">
                Request an AR Strategy Session
              </Link>
              <Link href="#services" className="da-btn da-btn-outline" title="Explore Deployment Case Studies">
                Explore Deployment Case Studies
              </Link>
            </div>
      </TechnologyHeroSection>

      {/* What Is AR */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">What Is Augmented Reality (AR)?</h2>
        </div>
        <div className="da-container da-content-stack">
          <DirectAnswer>{whatIsAr.directAnswer}</DirectAnswer>
          <p className="da-body-text">{whatIsAr.enterpriseDiff}</p>
          <div className="da-chain-card">
            <p className="da-chain-label">The decision chain that matters to your business</p>
            <p className="da-chain-title">{whatIsAr.decisionChain}</p>
            <p className="da-body-text">{whatIsAr.decisionChainDesc}</p>
          </div>
        </div>
        <div className="da-container da-advantage-grid da-advantage-grid-spaced">
          {arCategories.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="da-advantage-card">
                <span className="da-advantage-icon">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Enterprise AR Services */}
      <section id="services" className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Our Enterprise AR Services</h2>
          <p className="da-section-subtitle">{servicesIntro}</p>
        </div>
        <TechnologyCapabilityGrid>
          {capabilities.map((cap) => (
            <TechnologyCapabilityCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              desc={cap.desc}
              ctaAnchor={cap.ctaAnchor}
            />
          ))}
        </TechnologyCapabilityGrid>
      </section>

      {/* Architecture */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">AR Architecture: How We Build It</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{architectureIntro}</DirectAnswer>
        </div>
        <div className="da-container da-arch-grid">
          {architectureSteps.map((step) => (
            <article key={step.title} className="da-arch-step">
              <p className="da-arch-num">{step.step}</p>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
        <div className="da-container da-table-grid">
          <div>
            <h3 className="da-subsection-title">Marker-Based vs. Markerless AR</h3>
            <ComparisonTable headers={markerComparison.headers} rows={markerComparison.rows} />
          </div>
          <div>
            <h3 className="da-subsection-title">Mobile AR vs. Head-Mounted Display AR</h3>
            <ComparisonTable headers={deviceComparison.headers} rows={deviceComparison.rows} />
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Platform & Tooling Comparison</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{platformIntro}</DirectAnswer>
        </div>
        <div className="da-container">
          <ComparisonTable headers={platformComparison.headers} rows={platformComparison.rows} />
          <blockquote className="da-quote">
            <span className="da-quote-label">Toadster engineering perspective:</span> &ldquo;{platformQuote}&rdquo; -
            Toadster Spatial Computing Team
          </blockquote>
        </div>
      </section>

      {/* AR Maturity */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">AR Use-Case Maturity: Visualization to Autonomous Guidance</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{maturityIntro}</DirectAnswer>
        </div>
        <div className="da-container da-maturity-grid">
          {maturityStages.map((item, index) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="da-maturity-card">
                <span className="da-advantage-icon">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <p className="da-maturity-level">Level {index + 1}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Governance */}
      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">AR Data Privacy & Operational Governance</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{governanceIntro}</DirectAnswer>
        </div>
        <div className="da-container da-governance-grid">
          {governanceComponents.map((item) => (
            <div key={item} className="da-governance-item">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Industry Use Cases & Outcomes</h2>
          <p className="da-section-subtitle">
            AR delivers measurable outcomes when tied to a specific physical task: assembly accuracy, technician
            training time, or remote troubleshooting speed.
          </p>
        </div>
        <div className="da-container da-services-grid">
          {industryUseCases.map((useCase) => (
            <article key={useCase.title} className="da-service-card">
              <h3>{useCase.title}</h3>
              <p>{useCase.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="da-stats">
        <div className="da-container da-stats-grid">
          {heroStats.map((stat) => (
            <div key={stat.label} className="da-stat">
              <p className="da-stat-value">{stat.value}</p>
              <p className="da-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Our AR Engineering Process</h2>
          <p className="da-section-subtitle">{processIntro}</p>
        </div>
        <div className="da-container da-process-grid">
          {processStepsLanding.map((step) => (
            <article key={step.title} className="da-process-step">
              <span className={`da-process-num ${step.num % 2 === 0 ? "da-process-num--alt" : ""}`}>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why Toadster */}
      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Why Enterprises Choose Toadster for AR Implementation</h2>
        </div>
        <div className="da-container da-why-grid">
          {whyToadster.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="da-why-card">
                <span className="da-advantage-icon">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="da-section da-faq-section">
        <div className="faq-section-layout da-faq-wrap">
          <div className="da-faq-heading">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="da-faq-list">
            {faqs.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="da-section da-cta-section">
        <div className="da-container">
          <div className="hire-resources-cta da-cta-card text-center">
            <h2 className="da-cta-title">Ready to Overlay Intelligence Onto Your Operations?</h2>
            <p className="da-cta-subtitle">
              Partner with Toadster Technologies to design an AR deployment built for measurable improvements in speed,
              accuracy, and safety.
            </p>
            <div className="da-cta-actions">
              <Link href="/contact" className="da-cta-btn da-cta-btn-primary" title="Schedule Consultation">
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="da-cta-btn da-cta-btn-outline"
                title="Download AR Architecture Guide"
              >
                Download AR Architecture Guide
              </Link>
            </div>
            <p className="da-cta-footnote">Toadster Technologies - Precision Engineering for Spatial Computing.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

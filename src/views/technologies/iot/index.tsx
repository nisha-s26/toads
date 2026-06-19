import Link from "next/link"
import { Radio } from "lucide-react"
import { FaqItem } from "../shared/FaqItem"
import { ComparisonTable, DirectAnswer, HeroVisual } from "../shared/TechnologyPrimitives"
import { TechnologyCapabilityCard, TechnologyCapabilityGrid } from "../shared/TechnologyCapabilityCard"
import {
  architectureIntro,
  architectureSteps,
  capabilities,
  connectivityComparison,
  edgeVsCloudComparison,
  faqs,
  heroStats,
  industryUseCases,
  iotLayers,
  maintenanceApproaches,
  platformComparison,
  platformIntro,
  platformQuote,
  predictiveMaintenanceIntro,
  processIntro,
  processStepsLanding,
  securityComponents,
  securityIntro,
  servicesIntro,
  whatIsIot,
  whyToadster,
} from "./data"

export default function IotPage() {
  return (
    <div className="data-analytics-landing">
      {/* Hero */}
      <section className="da-hero">
        <div className="da-container da-hero-grid">
          <div className="da-hero-copy">
            <span className="da-badge">
              <Radio size={14} />
              The Connected Enterprise
            </span>
            <h1 className="da-hero-title">
              Enterprise IoT: Turning Connected Devices Into{" "}
              <span className="da-text-accent">Operational Intelligence</span>
            </h1>
            <p className="da-hero-subtitle">
              We design and deploy IoT systems - from edge sensors and connectivity to device management and
              real-time analytics - engineered to turn physical operations into measurable, actionable data.
            </p>
            <div className="da-hero-actions">
              <Link href="/contact" className="da-btn da-btn-primary" title="Request an IoT Strategy Session">
                Request an IoT Strategy Session
              </Link>
              <Link href="#services" className="da-btn da-btn-outline" title="Explore Deployment Case Studies">
                Explore Deployment Case Studies
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* What Is IoT */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">What Is IoT (Internet of Things)?</h2>
        </div>
        <div className="da-container da-content-stack">
          <DirectAnswer>{whatIsIot.directAnswer}</DirectAnswer>
          <p className="da-body-text">{whatIsIot.enterpriseDiff}</p>
          <div className="da-chain-card">
            <p className="da-chain-label">The decision chain that matters to your business</p>
            <p className="da-chain-title">{whatIsIot.decisionChain}</p>
            <p className="da-body-text">{whatIsIot.decisionChainDesc}</p>
          </div>
        </div>
        <div className="da-container da-advantage-grid da-advantage-grid-spaced">
          {iotLayers.map((item) => {
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

      {/* Enterprise IoT Services */}
      <section id="services" className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Our Enterprise IoT Services</h2>
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
          <h2 className="da-section-title">IoT Architecture: How We Build It</h2>
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
            <h3 className="da-subsection-title">Edge Computing vs. Cloud Computing for IoT</h3>
            <ComparisonTable headers={edgeVsCloudComparison.headers} rows={edgeVsCloudComparison.rows} />
          </div>
          <div>
            <h3 className="da-subsection-title">Connectivity Options Compared</h3>
            <ComparisonTable headers={connectivityComparison.headers} rows={connectivityComparison.rows} />
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
            Toadster IoT Engineering Team
          </blockquote>
        </div>
      </section>

      {/* Predictive Maintenance */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Predictive Maintenance: How It Works</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{predictiveMaintenanceIntro}</DirectAnswer>
        </div>
        <div className="da-container da-maturity-grid">
          {maintenanceApproaches.map((item, index) => {
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

      {/* Security */}
      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">IoT Security & Device Governance</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{securityIntro}</DirectAnswer>
        </div>
        <div className="da-container da-governance-grid">
          {securityComponents.map((item) => (
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
            IoT delivers measurable outcomes when tied to a specific operational decision: predictive maintenance,
            real-time asset tracking, or automated environmental control.
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
          <h2 className="da-section-title">Our IoT Engineering Process</h2>
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
          <h2 className="da-section-title">Why Enterprises Choose Toadster for IoT Implementation</h2>
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
        <div className="da-container da-faq-wrap">
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
            <h2 className="da-cta-title">Ready to Turn Connected Devices Into Operational Intelligence?</h2>
            <p className="da-cta-subtitle">
              Partner with Toadster Technologies to design an IoT architecture built for reliability, security, and
              measurable operational outcomes.
            </p>
            <div className="da-cta-actions">
              <Link href="/contact" className="da-cta-btn da-cta-btn-primary" title="Schedule Consultation">
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="da-cta-btn da-cta-btn-outline"
                title="Download IoT Architecture Guide"
              >
                Download IoT Architecture Guide
              </Link>
            </div>
            <p className="da-cta-footnote">Toadster Technologies - Precision Engineering for Connected Operations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

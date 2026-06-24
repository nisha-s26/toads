import Link from "next/link"
import { ArrowRight, Sparkles, Users } from "lucide-react"
import { FaqItem } from "../shared/FaqItem"
import { ComparisonTable, DirectAnswer } from "../shared/TechnologyPrimitives"
import { TechnologyHeroSection } from "../shared/TechnologyHeroSection"
import {
  advantages,
  analyticsMaturity,
  analyticsMaturityIntro,
  architectureIntro,
  architecturePatterns,
  architecturePatternsIntro,
  architectureSteps,
  batchVsStream,
  capabilities,
  coreCapabilitiesBento,
  faqs,
  governanceComponents,
  governanceIntro,
  heroStats,
  olapVsOltp,
  platformComparison,
  platformIntro,
  platformQuote,
  processIntro,
  processStepsLanding,
  servicesIntro,
  whatIsAnalytics,
  whyToadster,
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
              <Link href="#services" className="da-btn da-btn-outline" title="Explore Our Services">
                Explore Our Services
              </Link>
            </div>
      </TechnologyHeroSection>

      {/* What Is Data Analytics */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">What Is Data Analytics?</h2>
        </div>
        <div className="da-container da-content-stack">
          <DirectAnswer>{whatIsAnalytics.directAnswer}</DirectAnswer>
          <p className="da-body-text">{whatIsAnalytics.enterpriseDiff}</p>
          <div className="da-chain-card">
            <p className="da-chain-label">The decision chain that matters to your business</p>
            <p className="da-chain-title">{whatIsAnalytics.decisionChain}</p>
            <p className="da-body-text">{whatIsAnalytics.decisionChainDesc}</p>
          </div>
        </div>
        <div className="da-container da-advantage-grid da-advantage-grid-spaced">
          {advantages.map((item) => {
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

      {/* Core Capabilities Bento */}
      <section id="services" className="da-section da-section-muted">
        <div className="da-container da-capabilities-head">
          <div>
            <h2 className="da-section-title">Our Enterprise Data Analytics Services</h2>
            <p className="da-section-subtitle da-section-subtitle-left">{servicesIntro}</p>
          </div>
          <Link href="#all-services" className="da-link-arrow" title="View all services">
            View All Capabilities
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="da-container da-bento-grid">
          {coreCapabilitiesBento.map((item) => {
            if (item.variant === "dark") {
              return (
                <article key={item.title} className="da-bento-card da-bento-card--dark da-bento-card--featured">
                  <span className="da-bento-badge">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link href={item.href} className="da-bento-link">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                  <div className="da-bento-dark-visual" aria-hidden />
                </article>
              )
            }

            if (item.variant === "green") {
              return (
                <article key={item.title} className="da-bento-card da-bento-card--green">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="da-bento-green-icon">
                    <Users size={28} strokeWidth={1.75} />
                  </span>
                </article>
              )
            }

            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`da-bento-card da-bento-card--white${item.variant === "outline" ? " da-bento-card--outline" : ""}`}
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {Icon ? (
                  <span className="da-bento-white-icon">
                    <Icon size={24} strokeWidth={2} />
                  </span>
                ) : null}
              </article>
            )
          })}
        </div>

        <div id="all-services" className="da-container da-services-grid">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <article key={cap.title} className="da-service-card">
                <span className="da-advantage-icon">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Architecture */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Data Analytics Architecture: How We Build It</h2>
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
            <h3 className="da-subsection-title">Batch Processing vs. Stream Processing</h3>
            <ComparisonTable headers={batchVsStream.headers} rows={batchVsStream.rows} />
          </div>
          <div>
            <h3 className="da-subsection-title">OLAP vs. OLTP</h3>
            <ComparisonTable headers={olapVsOltp.headers} rows={olapVsOltp.rows} />
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Platform Comparison: Choosing Your Data Stack</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{platformIntro}</DirectAnswer>
        </div>
        <div className="da-container">
          <ComparisonTable headers={platformComparison.headers} rows={platformComparison.rows} />
          <blockquote className="da-quote">
            <span className="da-quote-label">Toadster engineering perspective:</span> &ldquo;{platformQuote}&rdquo; -
            Toadster Data Engineering Team
          </blockquote>
        </div>
      </section>

      {/* Analytics Maturity */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Descriptive vs. Predictive vs. Prescriptive Analytics</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{analyticsMaturityIntro}</DirectAnswer>
        </div>
        <div className="da-container da-maturity-grid">
          {analyticsMaturity.map((item, index) => (
            <article key={item.title} className="da-maturity-card">
              <p className="da-maturity-level">Level {index + 1}</p>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Governance */}
      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Data Governance & Quality Framework</h2>
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

      {/* Architecture Patterns */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Architecture Patterns: Data Mesh vs. Centralized Lakehouse</h2>
        </div>
        <div className="da-container da-content-stack">
          <DirectAnswer>{architecturePatternsIntro}</DirectAnswer>
        </div>
        <div className="da-container">
          <ComparisonTable headers={architecturePatterns.headers} rows={architecturePatterns.rows} />
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
          <h2 className="da-section-title">Our Data Analytics Engineering Process</h2>
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
          <h2 className="da-section-title">Why Enterprises Choose Toadster for Data Analytics Consulting</h2>
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
            <h2 className="da-cta-title">
              Ready to Build a Data Analytics Platform That Drives Decisions?
            </h2>
            <p className="da-cta-subtitle">
              Partner with Toadster Technologies to design a data analytics architecture built for accuracy,
              governance, and measurable business outcomes.
            </p>
            <div className="da-cta-actions">
              <Link href="/contact" className="da-cta-btn da-cta-btn-primary" title="Schedule a Data Strategy Session">
                Schedule a Data Strategy Session
              </Link>
              <Link
                href="/contact"
                className="da-cta-btn da-cta-btn-outline"
                title="Download Analytics Architecture Guide"
              >
                Download Analytics Architecture Guide
              </Link>
            </div>
            <p className="da-cta-footnote">Toadster Technologies - Precision Engineering for Data.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import { Server } from "lucide-react"
import { FaqItem } from "../shared/FaqItem"
import { ComparisonTable, DirectAnswer, HeroVisual } from "../shared/TechnologyPrimitives"
import { TechnologyCapabilityCard, TechnologyCapabilityGrid } from "../shared/TechnologyCapabilityCard"
import {
  architectureIntro,
  architectureSteps,
  capabilities,
  ciCdMaturityIntro,
  ciCdMaturityLevels,
  cicdVsTraditionalComparison,
  devSecOpsComponents,
  devSecOpsIntro,
  devopsMaturityStages,
  faqs,
  iacVsManualComparison,
  industryUseCases,
  industryUseCasesIntro,
  platformComparison,
  platformIntro,
  platformQuote,
  processIntro,
  processStepsLanding,
  servicesIntro,
  whatIsDevOps,
  whyToadster,
} from "./data"

export default function DevOpsPage() {
  return (
    <div className="data-analytics-landing">
      <section className="da-hero">
        <div className="da-container da-hero-grid">
          <div className="da-hero-copy">
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
              <Link href="#services" className="da-btn da-btn-outline" title="Explore Case Studies">
                Explore Case Studies
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">What Is DevOps?</h2>
        </div>
        <div className="da-container da-content-stack">
          <DirectAnswer>{whatIsDevOps.directAnswer}</DirectAnswer>
          <p className="da-body-text">{whatIsDevOps.enterpriseDiff}</p>
          <div className="da-chain-card">
            <p className="da-chain-label">The decision chain that matters to your business</p>
            <p className="da-chain-title">{whatIsDevOps.decisionChain}</p>
            <p className="da-body-text">{whatIsDevOps.decisionChainDesc}</p>
          </div>
        </div>
        <div className="da-container da-advantage-grid da-advantage-grid-spaced">
          {devopsMaturityStages.map((item) => {
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

      <section id="services" className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Our Enterprise DevOps Services</h2>
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

      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">DevOps Architecture: How We Build It</h2>
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
            <h3 className="da-subsection-title">CI/CD vs. Traditional Release Management</h3>
            <ComparisonTable headers={cicdVsTraditionalComparison.headers} rows={cicdVsTraditionalComparison.rows} />
          </div>
          <div>
            <h3 className="da-subsection-title">Infrastructure as Code vs. Manual Provisioning</h3>
            <ComparisonTable headers={iacVsManualComparison.headers} rows={iacVsManualComparison.rows} />
          </div>
        </div>
      </section>

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
            <span className="da-quote-label">Toadster engineering perspective:</span> &ldquo;{platformQuote}&rdquo; —
            Toadster Platform Engineering Team
          </blockquote>
        </div>
      </section>

      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">
            Continuous Integration vs. Continuous Delivery vs. Continuous Deployment
          </h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{ciCdMaturityIntro}</DirectAnswer>
        </div>
        <div className="da-container da-maturity-grid">
          {ciCdMaturityLevels.map((item, index) => {
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

      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">DevSecOps & Compliance Integration</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{devSecOpsIntro}</DirectAnswer>
        </div>
        <div className="da-container da-governance-grid">
          {devSecOpsComponents.map((item) => (
            <div key={item} className="da-governance-item">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Industry Use Cases & Outcomes</h2>
          <p className="da-section-subtitle">{industryUseCasesIntro}</p>
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

      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Our DevOps Engineering Process</h2>
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

      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Why Enterprises Choose Toadster for DevOps Implementation</h2>
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

      <section className="da-section da-cta-section">
        <div className="da-container">
          <div className="hire-resources-cta da-cta-card text-center">
            <h2 className="da-cta-title">Ready to Engineer Faster, More Reliable Delivery?</h2>
            <p className="da-cta-subtitle">
              Partner with Toadster Technologies to build CI/CD pipelines and infrastructure that turn deployment speed
              into a competitive advantage.
            </p>
            <div className="da-cta-actions">
              <Link href="/contact" className="da-cta-btn da-cta-btn-primary" title="Schedule Consultation">
                Schedule Consultation
              </Link>
              <Link href="/contact" className="da-cta-btn da-cta-btn-outline" title="Download DevOps Architecture Guide">
                Download DevOps Architecture Guide
              </Link>
            </div>
            <p className="da-cta-footnote">Toadster Technologies — Precision Engineering for Delivery.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

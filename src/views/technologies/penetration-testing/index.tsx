import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { FaqItem } from "../shared/FaqItem"
import { ComparisonTable, DirectAnswer, HeroVisual } from "../shared/TechnologyPrimitives"
import { TechnologyCapabilityCard, TechnologyCapabilityGrid } from "../shared/TechnologyCapabilityCard"
import {
  capabilities,
  complianceFrameworks,
  complianceIntro,
  faqs,
  industryUseCases,
  industryUseCasesIntro,
  methodologyIntro,
  methodologySteps,
  processIntro,
  processStepsLanding,
  riskPrioritizationFactors,
  riskPrioritizationIntro,
  scanVsPentestComparison,
  servicesIntro,
  standardsComparison,
  standardsIntro,
  standardsQuote,
  testingApproachComparison,
  testingCategories,
  whatIsPenetrationTesting,
  whyToadster,
} from "./data"

export default function PenetrationTestingPage() {
  return (
    <div className="data-analytics-landing">
      <section className="da-hero">
        <div className="da-container da-hero-grid">
          <div className="da-hero-copy">
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
              exploitable vulnerabilities before adversaries do — with findings prioritized by actual business risk, not
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
              <Link href="/contact" className="da-btn da-btn-outline" title="Explore Sample Findings Report">
                Explore Sample Findings Report
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">What Is Penetration Testing?</h2>
        </div>
        <div className="da-container da-content-stack">
          <DirectAnswer>{whatIsPenetrationTesting.directAnswer}</DirectAnswer>
          <p className="da-body-text">{whatIsPenetrationTesting.enterpriseDiff}</p>
          <div className="da-chain-card">
            <p className="da-chain-label">The decision chain that matters to your business</p>
            <p className="da-chain-title">{whatIsPenetrationTesting.decisionChain}</p>
            <p className="da-body-text">{whatIsPenetrationTesting.decisionChainDesc}</p>
          </div>
        </div>
        <div className="da-container da-advantage-grid da-advantage-grid-spaced">
          {testingCategories.map((item) => {
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
          <h2 className="da-section-title">Our Enterprise Penetration Testing Services</h2>
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
          <h2 className="da-section-title">Penetration Testing Methodology: How We Run It</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{methodologyIntro}</DirectAnswer>
        </div>
        <div className="da-container da-arch-grid">
          {methodologySteps.map((step) => (
            <article key={step.title} className="da-arch-step">
              <p className="da-arch-num">{step.step}</p>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
        <div className="da-container da-table-grid">
          <div>
            <h3 className="da-subsection-title">Black Box vs. Gray Box vs. White Box Testing</h3>
            <ComparisonTable headers={testingApproachComparison.headers} rows={testingApproachComparison.rows} />
          </div>
          <div>
            <h3 className="da-subsection-title">Vulnerability Scanning vs. Penetration Testing</h3>
            <ComparisonTable headers={scanVsPentestComparison.headers} rows={scanVsPentestComparison.rows} />
          </div>
        </div>
      </section>

      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Standards & Frameworks We Test Against</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{standardsIntro}</DirectAnswer>
        </div>
        <div className="da-container">
          <ComparisonTable headers={standardsComparison.headers} rows={standardsComparison.rows} />
          <blockquote className="da-quote">
            <span className="da-quote-label">Toadster engineering perspective:</span> &ldquo;{standardsQuote}&rdquo; —
            Toadster Security Testing Team
          </blockquote>
        </div>
      </section>

      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Compliance-Driven Penetration Testing</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{complianceIntro}</DirectAnswer>
        </div>
        <div className="da-container da-governance-grid">
          {complianceFrameworks.map((item) => (
            <div key={item} className="da-governance-item">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Risk Prioritization: Beyond CVSS Scores</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{riskPrioritizationIntro}</DirectAnswer>
        </div>
        <div className="da-container da-governance-grid">
          {riskPrioritizationFactors.map((item) => (
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
          <h2 className="da-section-title">Our Penetration Testing Process</h2>
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
          <h2 className="da-section-title">Why Enterprises Choose Toadster for Penetration Testing</h2>
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
            <h2 className="da-cta-title">Ready to Find Your Vulnerabilities Before an Attacker Does?</h2>
            <p className="da-cta-subtitle">
              Partner with Toadster Technologies to run a penetration testing program that delivers audit-defensible,
              risk-prioritized security assurance.
            </p>
            <div className="da-cta-actions">
              <Link href="/contact" className="da-cta-btn da-cta-btn-primary" title="Schedule a Scoping Call">
                Schedule a Scoping Call
              </Link>
              <Link href="/contact" className="da-cta-btn da-cta-btn-outline" title="Download Sample Findings Report">
                Download Sample Findings Report
              </Link>
            </div>
            <p className="da-cta-footnote">Toadster Technologies — Precision Engineering for Security Assurance.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

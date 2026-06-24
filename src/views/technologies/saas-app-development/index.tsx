import Link from "next/link"
import { Cloud } from "lucide-react"
import { FaqItem } from "../shared/FaqItem"
import { ComparisonTable, DirectAnswer } from "../shared/TechnologyPrimitives"
import { TechnologyHeroSection } from "../shared/TechnologyHeroSection"
import { TechnologyCapabilityCard, TechnologyCapabilityGrid } from "../shared/TechnologyCapabilityCard"
import {
  architectureIntro,
  architectureSteps,
  billingModels,
  billingModelsIntro,
  capabilities,
  faqs,
  industryUseCases,
  industryUseCasesIntro,
  monolithVsMicroservicesComparison,
  platformComparison,
  platformIntro,
  platformQuote,
  processIntro,
  processStepsLanding,
  saasArchitecturePillars,
  securityComponents,
  securityIntro,
  servicesIntro,
  singleVsMultiTenantComparison,
  whatIsSaas,
  whyToadster,
} from "./data"

export default function SaasAppDevelopmentPage() {
  return (
    <div className="data-analytics-landing">
      <TechnologyHeroSection
        lightImageSrc="/technologies/saas-app-development-hero-light.png"
        darkImageSrc="/technologies/saas-app-development-hero-dark.png"
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
              We design and build multi-tenant SaaS applications — from architecture and core product to billing,
              security, and scaling infrastructure — engineered to support rapid growth without costly re-platforming.
            </p>
            <div className="da-hero-actions">
              <Link href="/contact" className="da-btn da-btn-primary" title="Request a SaaS Architecture Session">
                Request a SaaS Architecture Session
              </Link>
              <Link href="#services" className="da-btn da-btn-outline" title="Explore Case Studies">
                Explore Case Studies
              </Link>
            </div>
      </TechnologyHeroSection>

      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">What Is SaaS App Development?</h2>
        </div>
        <div className="da-container da-content-stack">
          <DirectAnswer>{whatIsSaas.directAnswer}</DirectAnswer>
          <p className="da-body-text">{whatIsSaas.enterpriseDiff}</p>
          <div className="da-chain-card">
            <p className="da-chain-label">The decision chain that matters to your business</p>
            <p className="da-chain-title">{whatIsSaas.decisionChain}</p>
            <p className="da-body-text">{whatIsSaas.decisionChainDesc}</p>
          </div>
        </div>
        <div className="da-container da-advantage-grid da-advantage-grid-spaced">
          {saasArchitecturePillars.map((item) => {
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
          <h2 className="da-section-title">Our Enterprise SaaS Development Services</h2>
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
          <h2 className="da-section-title">SaaS Architecture: How We Build It</h2>
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
            <h3 className="da-subsection-title">Single-Tenant vs. Multi-Tenant Architecture</h3>
            <ComparisonTable
              headers={singleVsMultiTenantComparison.headers}
              rows={singleVsMultiTenantComparison.rows}
            />
          </div>
          <div>
            <h3 className="da-subsection-title">Monolith vs. Microservices for SaaS</h3>
            <ComparisonTable
              headers={monolithVsMicroservicesComparison.headers}
              rows={monolithVsMicroservicesComparison.rows}
            />
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
            Toadster Product Engineering Team
          </blockquote>
        </div>
      </section>

      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">SaaS Pricing & Billing Models Compared</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{billingModelsIntro}</DirectAnswer>
        </div>
        <div className="da-container da-maturity-grid">
          {billingModels.map((item, index) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="da-maturity-card">
                <span className="da-advantage-icon">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <p className="da-maturity-level">Model {index + 1}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">SaaS Security & Compliance for Enterprise Customers</h2>
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
          <h2 className="da-section-title">Our SaaS Development Process</h2>
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
          <h2 className="da-section-title">Why Enterprises Choose Toadster for SaaS Development</h2>
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
            <h2 className="da-cta-title">Ready to Build a SaaS Product That Scales?</h2>
            <p className="da-cta-subtitle">
              Partner with Toadster Technologies to architect a SaaS platform built for growth, retention, and
              enterprise-grade trust from day one.
            </p>
            <div className="da-cta-actions">
              <Link href="/contact" className="da-cta-btn da-cta-btn-primary" title="Schedule Consultation">
                Schedule Consultation
              </Link>
              <Link href="/contact" className="da-cta-btn da-cta-btn-outline" title="Download SaaS Architecture Guide">
                Download SaaS Architecture Guide
              </Link>
            </div>
            <p className="da-cta-footnote">Toadster Technologies — Precision Engineering for Scalable Software.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

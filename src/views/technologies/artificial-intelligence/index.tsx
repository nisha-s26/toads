import Link from "next/link"
import { Sparkles } from "lucide-react"
import { FaqItem } from "../shared/FaqItem"
import { ComparisonTable, DirectAnswer } from "../shared/TechnologyPrimitives"
import { TechnologyHeroSection } from "../shared/TechnologyHeroSection"
import { TechnologyCapabilityCard, TechnologyCapabilityGrid } from "../shared/TechnologyCapabilityCard"
import {
  agentCapabilities,
  agentCapabilitiesIntro,
  aiSpectrum,
  aiTypeComparison,
  approachComparison,
  architectureIntro,
  architectureSteps,
  capabilities,
  faqs,
  governanceComponents,
  governanceIntro,
  heroStats,
  industryUseCases,
  platformComparison,
  platformIntro,
  platformQuote,
  processIntro,
  processStepsLanding,
  servicesIntro,
  whatIsAi,
  whyToadster,
} from "./data"

export default function ArtificialIntelligencePage() {
  return (
    <div className="data-analytics-landing">
      <TechnologyHeroSection>
            <span className="da-badge">
              <Sparkles size={14} />
              The Intelligence Revolution
            </span>
            <h1 className="da-hero-title">
              Enterprise Artificial Intelligence: From Model to{" "}
              <span className="da-text-accent">Measurable Outcome</span>
            </h1>
            <p className="da-hero-subtitle">
              We design, build, and deploy production-grade AI systems - from custom LLM integration to autonomous
              agents and predictive models - engineered to operate reliably inside real enterprise workflows.
            </p>
            <div className="da-hero-actions">
              <Link href="/contact" className="da-btn da-btn-primary" title="Request an AI Strategy Session">
                Request an AI Strategy Session
              </Link>
              <Link href="#services" className="da-btn da-btn-outline" title="Explore AI Use Cases">
                Explore AI Use Cases
              </Link>
            </div>
      </TechnologyHeroSection>

      {/* What Is Artificial Intelligence */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">What Is Artificial Intelligence (in an Enterprise Context)?</h2>
        </div>
        <div className="da-container da-content-stack">
          <DirectAnswer>{whatIsAi.directAnswer}</DirectAnswer>
          <p className="da-body-text">{whatIsAi.enterpriseDiff}</p>
          <div className="da-chain-card">
            <p className="da-chain-label">The decision chain that matters to your business</p>
            <p className="da-chain-title">{whatIsAi.decisionChain}</p>
            <p className="da-body-text">{whatIsAi.decisionChainDesc}</p>
          </div>
        </div>
        <div className="da-container da-advantage-grid da-advantage-grid-spaced">
          {aiSpectrum.map((item) => {
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

      {/* Enterprise AI Services */}
      <section id="services" className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Our Enterprise AI Services</h2>
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
          <h2 className="da-section-title">Enterprise AI Architecture: How We Build It</h2>
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
            <h3 className="da-subsection-title">Predictive AI vs. Generative AI vs. Agentic AI</h3>
            <ComparisonTable headers={aiTypeComparison.headers} rows={aiTypeComparison.rows} />
          </div>
          <div>
            <h3 className="da-subsection-title">Fine-Tuning vs. RAG vs. Prompt Engineering</h3>
            <ComparisonTable headers={approachComparison.headers} rows={approachComparison.rows} />
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
            Toadster AI Engineering Team
          </blockquote>
        </div>
      </section>

      {/* Agent Capabilities */}
      <section className="da-section da-section-light">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">Reasoning & Planning, Tool Integration, Memory & Context</h2>
        </div>
        <div className="da-container da-content-stack da-content-stack-narrow">
          <DirectAnswer>{agentCapabilitiesIntro}</DirectAnswer>
        </div>
        <div className="da-container da-advantage-grid da-advantage-grid-spaced">
          {agentCapabilities.map((item) => {
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

      {/* Governance */}
      <section className="da-section da-section-muted">
        <div className="da-container da-section-head">
          <h2 className="da-section-title">AI Governance, Risk, and Compliance</h2>
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
            Enterprise AI delivers measurable outcomes when tied to a specific, high-frequency decision: diagnostic
            triage, fraud scoring, or supply-chain routing.
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
          <h2 className="da-section-title">Our AI Engineering Process</h2>
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
          <h2 className="da-section-title">Why Enterprises Choose Toadster for AI Implementation</h2>
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
            <h2 className="da-cta-title">Ready to Architect the Future of AI?</h2>
            <p className="da-cta-subtitle">
              Partner with Toadster Technologies to build autonomous systems that drive measurable enterprise value and
              operational excellence.
            </p>
            <div className="da-cta-actions">
              <Link href="/contact" className="da-cta-btn da-cta-btn-primary" title="Schedule Consultation">
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="da-cta-btn da-cta-btn-outline"
                title="Download AI Architecture Brochure"
              >
                Download AI Architecture Brochure
              </Link>
            </div>
            <p className="da-cta-footnote">Toadster Technologies - Precision Engineering for AI.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

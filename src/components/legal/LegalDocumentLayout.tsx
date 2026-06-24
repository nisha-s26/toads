"use client"

import Link from "next/link"
import { ArrowUpRight, Mail, type LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export type LegalDocumentLayoutProps = {
  title: string
  lastUpdated: string
  introduction: ReactNode
  children: ReactNode
  ctaTitle: string
  ctaDescription: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
  footnote?: string
  disclaimer?: string
}

export function LegalSectionCard({
  id,
  number,
  title,
  icon: Icon,
  children,
}: {
  id: string
  number?: number
  title: string
  icon: LucideIcon
  children: ReactNode
}) {
  return (
    <article id={id} className="legal-section-card scroll-mt-28">
      <header className="legal-section-header">
        <span className="legal-section-icon" aria-hidden>
          <Icon size={20} strokeWidth={2} />
        </span>
        <h2 className="legal-section-title">
          {number !== undefined ? `${number}. ` : ""}
          {title}
        </h2>
      </header>
      <div className="legal-section-body">{children}</div>
    </article>
  )
}

export function LegalDocumentLayout({
  title,
  lastUpdated,
  introduction,
  children,
  ctaTitle,
  ctaDescription,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  footnote,
  disclaimer,
}: LegalDocumentLayoutProps) {
  return (
    <div className="legal-page font-sans">
      <section className="legal-page-hero">
        <div className="legal-page-container legal-page-hero-inner">
          <h1 className="legal-page-title">{title}</h1>
          <p className="legal-page-updated">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="legal-page-container legal-page-content">
        <main className="legal-page-main">
          <article id="introduction" className="legal-intro-card scroll-mt-28">
            {introduction}
          </article>

          {children}

          <section className="legal-cta-card">
            <h2 className="legal-cta-title">{ctaTitle}</h2>
            <p className="legal-cta-text">{ctaDescription}</p>
            <div className="legal-cta-actions">
              <Link href={ctaPrimaryHref} className="legal-cta-btn legal-cta-btn-primary" title={ctaPrimaryLabel}>
                <Mail size={16} />
                {ctaPrimaryLabel}
              </Link>
            </div>
          </section>

          {disclaimer ? (
            <div className="legal-disclaimer-card">
              <p>{disclaimer}</p>
            </div>
          ) : null}

          {footnote ? <p className="legal-footnote">{footnote}</p> : null}
        </main>
      </div>
    </div>
  )
}

export function LegalParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="legal-copy">
          {paragraph}
        </p>
      ))}
    </>
  )
}

export function LegalLabelList({ items }: { items: { label?: string; text: string }[] }) {
  return (
    <ul className="legal-list">
      {items.map((item) => (
        <li key={`${item.label ?? ""}-${item.text}`}>
          {item.label ? (
            <>
              <strong>{item.label}</strong> - {item.text}
            </>
          ) : (
            item.text
          )}
        </li>
      ))}
    </ul>
  )
}

export function LegalOrderedList({ items }: { items: string[] }) {
  return (
    <ol className="legal-ordered-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  )
}

export function LegalSubsections({
  subsections,
}: {
  subsections: { title: string; items?: { label?: string; text: string }[]; paragraphs?: string[] }[]
}) {
  return (
    <>
      {subsections.map((subsection) => (
        <div key={subsection.title} className="legal-subsection">
          <h3 className="legal-subsection-title">{subsection.title}</h3>
          {subsection.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="legal-copy">
              {paragraph}
            </p>
          ))}
          {subsection.items && subsection.items.length > 0 ? (
            <LegalLabelList items={subsection.items} />
          ) : null}
        </div>
      ))}
    </>
  )
}

export function LegalTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LegalHighlightBox({ title, text }: { title?: string; text: string }) {
  return (
    <div className="legal-highlight-box">
      {title ? <p className="legal-highlight-title">{title}</p> : null}
      <p>{text}</p>
    </div>
  )
}

export function LegalLinkParagraph({
  before,
  linkText,
  href,
  after,
}: {
  before: string
  linkText: string
  href: string
  after: string
}) {
  return (
    <p className="legal-copy">
      {before}
      <Link href={href} className="legal-contact-link">
        {linkText}
      </Link>
      {after}
    </p>
  )
}

export function LegalContactBlock({
  company,
  email,
  contactHref,
}: {
  company: string
  email: string
  contactHref: string
}) {
  return (
    <div className="legal-contact-block">
      <p className="legal-contact-company">{company}</p>
      <a href={`mailto:${email}`} className="legal-contact-link">
        Email: {email}
      </a>
      <Link href={contactHref} className="legal-contact-form-link" title="Contact form">
        Contact form
        <ArrowUpRight size={14} />
      </Link>
    </div>
  )
}

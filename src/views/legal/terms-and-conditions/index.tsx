"use client"

import {
  LegalContactBlock,
  LegalDocumentLayout,
  LegalHighlightBox,
  LegalLabelList,
  LegalLinkParagraph,
  LegalOrderedList,
  LegalParagraphs,
  LegalSectionCard,
  LegalSubsections,
} from "@/components/legal/LegalDocumentLayout"
import {
  TERMS_LAST_UPDATED,
  termsFootnote,
  termsIntroduction,
  termsSections,
} from "./data"

export default function TermsAndConditionsPage() {
  return (
    <LegalDocumentLayout
      title="Terms and Conditions"
      lastUpdated={TERMS_LAST_UPDATED}
      introduction={<LegalParagraphs paragraphs={termsIntroduction.paragraphs} />}
      ctaTitle="Have questions about our terms?"
      ctaDescription="Our legal and support teams are here to help clarify any aspect of our service agreements and website terms."
      ctaPrimaryLabel="Email Support"
      ctaPrimaryHref="mailto:business@toadsters.com"
      footnote={termsFootnote}
    >
      {termsSections.map((section) => {
        const Icon = section.icon
        return (
          <LegalSectionCard
            key={section.id}
            id={section.id}
            number={section.number}
            title={section.title}
            icon={Icon}
          >
            {section.paragraphs ? <LegalParagraphs paragraphs={section.paragraphs} /> : null}
            {section.subsections ? <LegalSubsections subsections={section.subsections} /> : null}
            {section.list ? <LegalLabelList items={section.list} /> : null}
            {section.orderedList ? <LegalOrderedList items={section.orderedList} /> : null}
            {section.paragraphsAfter ? <LegalParagraphs paragraphs={section.paragraphsAfter} /> : null}
            {section.linkParagraph ? (
              <LegalLinkParagraph
                before={section.linkParagraph.before}
                linkText={section.linkParagraph.linkText}
                href={section.linkParagraph.href}
                after={section.linkParagraph.after}
              />
            ) : null}
            {section.highlightBox ? (
              <LegalHighlightBox title={section.highlightBox.title} text={section.highlightBox.text} />
            ) : null}
            {section.contactDetails ? (
              <LegalContactBlock
                company={section.contactDetails.company}
                email={section.contactDetails.email}
                contactHref={section.contactDetails.contactHref}
              />
            ) : null}
          </LegalSectionCard>
        )
      })}
    </LegalDocumentLayout>
  )
}

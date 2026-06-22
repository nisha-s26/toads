"use client"

import {
  LegalContactBlock,
  LegalDocumentLayout,
  LegalHighlightBox,
  LegalLabelList,
  LegalOrderedList,
  LegalParagraphs,
  LegalSectionCard,
  LegalSubsections,
  LegalTable,
} from "@/components/legal/LegalDocumentLayout"
import {
  PRIVACY_LAST_UPDATED,
  privacyFootnote,
  privacyIntroduction,
  privacySections,
} from "./data"

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      lastUpdated={PRIVACY_LAST_UPDATED}
      introduction={<LegalParagraphs paragraphs={privacyIntroduction.paragraphs} />}
      ctaTitle="Have questions about our privacy practices?"
      ctaDescription="Our legal and support teams are here to help clarify any aspect of how we collect, use, and protect your personal information."
      ctaPrimaryLabel="Email Support"
      ctaPrimaryHref="mailto:business@toadsters.com"
      footnote={privacyFootnote}
    >
      {privacySections.map((section) => {
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
            {section.table ? <LegalTable headers={section.table.headers} rows={section.table.rows} /> : null}
            {section.paragraphsAfter ? <LegalParagraphs paragraphs={section.paragraphsAfter} /> : null}
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

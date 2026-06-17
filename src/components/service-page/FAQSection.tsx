"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHead } from "./SectionHead"

export type ServiceFaq = {
  question: string
  answer: string
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="capability-card-surface faq-accordion-surface overflow-hidden rounded-2xl">
      <button
        type="button"
        className="relative z-10 flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 dark:text-black">{question}</span>
        <ChevronDown
          className={`shrink-0 text-toadster-green transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      {open ? (
        <div className="relative z-10 overflow-hidden">
          <p className="capability-card-copy px-6 pb-5 text-sm leading-relaxed">{answer}</p>
        </div>
      ) : null}
    </div>
  )
}

export function FAQSection({ faqs }: { faqs: ServiceFaq[] }) {
  const FAQ_INITIAL_COUNT = 5
  const [visibleCount, setVisibleCount] = useState(FAQ_INITIAL_COUNT)

  const visibleFaqs = faqs.slice(0, visibleCount)
  const canShowMore = visibleCount < faqs.length
  const canShowLess = visibleCount > FAQ_INITIAL_COUNT

  return (
    <section id="faq" className="section-padding bg-page-bg-alt py-16">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHead
          label=""
          title="Questions we hear before every project"
          subtitle="Straightforward answers to the things decision-makers actually want to know."
          centered
        />
        <div className="flex flex-col gap-4">
          {visibleFaqs.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
        {(canShowMore || canShowLess) && (
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {canShowMore ? (
              <Button type="button" onClick={() => setVisibleCount(faqs.length)} className="rounded-xl px-6 py-3">
                See more
              </Button>
            ) : null}
            {canShowLess ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => setVisibleCount(FAQ_INITIAL_COUNT)}
                className="rounded-xl px-6 py-3"
              >
                See less
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}

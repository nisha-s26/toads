"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`da-faq-item${open ? " da-faq-item--open" : ""}`}>
      <button type="button" className="da-faq-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <ChevronDown className={`da-faq-icon ${open ? "da-faq-icon--open" : ""}`} size={18} />
      </button>
      {open ? <p className="da-faq-answer">{answer}</p> : null}
    </div>
  )
}

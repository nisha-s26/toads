"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function HomepageFaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        "faq-glass-surface faq-accordion-surface overflow-hidden rounded-xl transition-all duration-300",
        open && "ring-1 ring-white/40",
      )}
    >
      <button
        type="button"
        className="flex w-full items-start justify-between gap-3 bg-transparent px-4 text-left md:px-5 min-h-[64px] py-0"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ alignItems: "center", minHeight: "60px" }}
      >
        <span className="text-base font-bold leading-snug text-slate-900 md:text-lg dark:text-white">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 text-slate-400 transition-all duration-250 dark:text-white/50",
            open && "rotate-180 text-toadster-green",
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div className="overflow-hidden bg-transparent">
          <div className="px-4 pb-4 md:px-5 md:pb-5">
            <p className="text-base leading-relaxed text-slate-800 dark:text-white/85">{answer}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

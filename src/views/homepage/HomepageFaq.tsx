"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/ScrollReveal"

type FaqCategory = "what" | "how" | "why" | "who"

const PAGE_SIZE = 3

type FaqEntry = {
  question: string
  answer: string
  category: FaqCategory
  tag: string
  cta?: { label: string; href: string }
}

const FAQS: FaqEntry[] = [
  {
    category: "what",
    tag: "What we do",
    question: "What exactly does Toadster Technologies do?",
    answer:
      "Toadster Technologies is a full-spectrum AI company. We build custom AI software, advise businesses on AI strategy, and develop intelligent products that automate work, reduce costs, and unlock new revenue. Whether you need an AI-powered app, an automated workflow, or a roadmap for going AI-first - we handle it end to end.",
  },
  {
    category: "what",
    tag: "What we do",
    question: "What kind of AI solutions does Toadster build?",
    answer:
      "We build AI chatbots, intelligent automation systems, custom large language model integrations, computer vision tools, AI-powered SaaS products, and data intelligence platforms. Every solution is built specifically for your business - not a generic off-the-shelf tool.",
  },
  {
    category: "what",
    tag: "What we do",
    question: "Do you only do development, or also strategy and consulting?",
    answer:
      "Both. Many of our clients start with an AI strategy engagement - we map your processes, identify where AI creates the most value, and build a practical roadmap. Then we execute it. You get one partner for thinking and doing, which means faster results and no gaps between advice and delivery.",
  },
  {
    category: "how",
    tag: "How it works",
    question: "How does the process work from idea to launch?",
    answer:
      "We start with a discovery call to understand your goals and challenges. From there, our team designs a solution architecture, builds an MVP, and iterates with your feedback - typically launching in 6-12 weeks. After go-live, we offer ongoing support, optimisation, and scaling as your needs grow.",
  },
  {
    category: "how",
    tag: "How it works",
    question: "How long does it take to build a custom AI solution?",
    answer:
      "Simple automations and AI integrations can go live in 2-4 weeks. Complex custom AI platforms or products take 8-16 weeks depending on scope. We always give you a clear timeline upfront - no surprises midway through.",
  },
  {
    category: "how",
    tag: "How it works",
    question: "Will my team need technical knowledge to use what you build?",
    answer:
      "No. We design every solution for real people, not engineers. We build intuitive interfaces, provide training, and make sure your team can use and manage the tools confidently from day one. If something ever feels confusing, that's on us to fix.",
  },
  {
    category: "why",
    tag: "Why Toadster",
    question: "Why should I choose Toadster Technologies for my AI project?",
    answer:
      "Because we combine strategic thinking with hands-on engineering - under one roof. We don't just advise; we build. We don't just build; we ensure it delivers results. Our team has shipped AI products across industries, and we treat every client's problem like it's our own to solve.",
  },
  {
    category: "why",
    tag: "Why Toadster",
    question: "Is AI development too expensive for a small business?",
    answer:
      "Not with the right partner. At Toadster, we scope every project to your budget and start with highest-impact work first. Many clients see a clear ROI within the first few months - from time saved, errors reduced, or new revenue enabled. AI is not just for big companies anymore.",
  },
  {
    category: "why",
    tag: "Why Toadster",
    question: "What makes an AI development company different from a regular software agency?",
    answer:
      "A regular agency builds to spec. An AI company like Toadster builds to outcome. We understand how models work, where they fail, and how to make them reliable in production. That depth of knowledge is what separates a proof-of-concept that impresses in a demo from a solution that actually works in your business every day.",
  },
  {
    category: "who",
    tag: "Who we work with",
    question: "Who does Toadster Technologies work with?",
    answer:
      "We work with startups building AI-first products, SMBs looking to automate and scale, and enterprise teams solving complex operational challenges. If you have a business problem and believe AI could help solve it, we want to talk - regardless of your size or industry.",
  },
  {
    category: "who",
    tag: "Who we work with",
    question: "Which 3 jobs will AI not replace - and how can my team stay ahead?",
    answer:
      "Roles requiring deep human judgment, physical presence, and genuine creativity will thrive longest. But the real question isn't \"will AI replace my team?\" - it's \"how do I give my team AI superpowers?\" Toadster helps businesses use AI to amplify people, not replace them.",
    cta: { label: "Ask us how your team can benefit", href: "/contact" },
  },
  {
    category: "who",
    tag: "Who we work with",
    question: "What jobs will be created by AI - and how do businesses prepare?",
    answer:
      "AI is already creating demand for AI trainers, automation managers, prompt strategists, and AI product owners. Forward-thinking businesses are retooling their teams now. Toadster can help you identify which roles to evolve, which to automate, and how to build an AI-ready organisation.",
    cta: { label: "Build your AI strategy with us", href: "/services/ai-development" },
  },
]

function FaqCard({
  entry,
  isOpen,
  onToggle,
}: {
  entry: FaqEntry
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={cn(
        "faq-glass-surface faq-accordion-surface overflow-hidden rounded-xl transition-all duration-300",
        isOpen && "ring-1 ring-white/40",
      )}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 bg-transparent px-4 py-4 text-left md:px-5"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sm font-bold leading-snug text-slate-900 md:text-lg dark:text-white">
          {entry.question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 text-slate-400 transition-all duration-250 dark:text-white/50",
            isOpen && "rotate-180 text-toadster-green",
          )}
          aria-hidden
        />
      </button>

      {isOpen ? (
        <div className="overflow-hidden bg-transparent">
          <div className="px-4 pb-4 md:px-5 md:pb-5">
            <p className="text-base leading-relaxed text-slate-800 dark:text-white/85">{entry.answer}</p>
            {entry.cta ? (
              <Link
                href={entry.cta.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-toadster-green transition-colors hover:underline md:text-base"
              >
                {entry.cta.label}
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default function HomepageFaq() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const visibleFaqs = FAQS.slice(0, visibleCount)
  const canShowMore = visibleCount < FAQS.length
  const canShowLess = visibleCount > PAGE_SIZE

  const handleToggle = (question: string) => {
    setOpenQuestion((current) => (current === question ? null : question))
  }

  const handleShowMore = () => {
    setVisibleCount((count) => Math.min(count + PAGE_SIZE, FAQS.length))
  }

  const handleShowLess = () => {
    const nextCount = Math.max(visibleCount - PAGE_SIZE, PAGE_SIZE)
    const nextVisible = FAQS.slice(0, nextCount)
    if (openQuestion && !nextVisible.some((faq) => faq.question === openQuestion)) {
      setOpenQuestion(null)
    }
    setVisibleCount(nextCount)
  }

  return (
    <section
      id="faq"
      className="homepage-snap-section relative isolate flex flex-col justify-center px-4 pb-6 pt-0 sm:pb-8 md:pb-8 lg:px-20"
    >
      <div className="relative z-10 mx-auto faq-section-layout">
        <ScrollReveal className="mb-8 text-center md:mb-10">
          <h2 className="text-3xl font-extrabold text-page-fg sm:text-4xl md:text-5xl lg:text-6xl">
            Frequently Asked <span className="text-toadster-green">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-page-fg-muted sm:text-lg md:text-xl">
            Everything you need to know about working with Toadster Technologies.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-2.5 text-sm sm:text-lg md:text-xl">
          {visibleFaqs.map((faq) => (
            <FaqCard
              key={faq.question}
              entry={faq}
              isOpen={openQuestion === faq.question}
              onToggle={() => handleToggle(faq.question)}
            />
          ))}
        </div>

        {(canShowMore || canShowLess) && (
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {canShowMore ? (
              <button
                type="button"
                onClick={handleShowMore}
                className="w-fit rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
              >
                See more
              </button>
            ) : null}
            {canShowLess ? (
              <button
                type="button"
                onClick={handleShowLess}
                className="w-fit rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
              >
                See less
              </button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}

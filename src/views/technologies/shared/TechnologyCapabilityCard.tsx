import Link from "next/link"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type TechnologyCapabilityCardProps = {
  icon: LucideIcon
  title: string
  desc: string
  ctaAnchor?: string
  href?: string
  className?: string
}

export function TechnologyCapabilityCard({
  icon: Icon,
  title,
  desc,
  ctaAnchor = "Learn More",
  href = "/contact",
  className,
}: TechnologyCapabilityCardProps) {
  const cardClass = cn(
    "group flex h-full min-h-[200px] flex-col capability-card-surface rounded-2xl p-8 text-left transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toadster-green/35 dark:focus-visible:ring-slate-400/50",
    className,
  )

  const content = (
    <>
      <div className="capability-card-header relative z-10">
        <div className="flex min-h-11 items-center justify-between gap-3">
          <h3 className="relative z-10 min-w-0 flex-1 pr-1 text-xl font-bold leading-snug text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
            <Icon size={22} strokeWidth={2} />
          </span>
        </div>
        <span className="capability-card-heading-rule" aria-hidden="true" />
      </div>
      <p className="capability-card-copy relative z-10 flex-1 text-sm leading-relaxed">{desc}</p>
      <span className="relative z-10 mt-auto inline-flex items-center gap-1 pt-8 text-sm font-bold text-slate-900 dark:text-slate-100">
        {ctaAnchor} <span aria-hidden="true">→</span>
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} title={title} className={cardClass}>
        {content}
      </Link>
    )
  }

  return <article className={cardClass}>{content}</article>
}

export function TechnologyCapabilityGrid({ children }: { children: ReactNode }) {
  return (
    <div className="da-container da-capability-cards-grid">{children}</div>
  )
}

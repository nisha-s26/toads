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
  compact?: boolean
}

export function TechnologyCapabilityCard({
  icon: Icon,
  title,
  desc,
  ctaAnchor = "Learn More",
  href = "/contact",
  className,
  compact = false,
}: TechnologyCapabilityCardProps) {
  const cardClass = cn(
    "group flex h-full flex-col capability-card-surface rounded-2xl text-left transition-all duration-300",
    compact
      ? "da-explore-card min-h-0 p-5 md:p-6"
      : "min-h-[200px] p-8",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toadster-green/35 dark:focus-visible:ring-slate-400/50",
    className,
  )

  const content = (
    <>
      <div className="capability-card-header relative z-10">
        <div className={cn("flex items-center justify-between gap-3", compact ? "min-h-9" : "min-h-11")}>
          <h3
            className={cn(
              "relative z-10 min-w-0 flex-1 pr-1 font-bold leading-snug text-slate-900 dark:text-black",
              compact ? "text-base md:text-lg" : "text-xl",
            )}
          >
            {title}
          </h3>
          <span
            className={cn(
              "inline-flex shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md",
              compact ? "h-9 w-9" : "h-11 w-11",
            )}
          >
            <Icon size={compact ? 18 : 22} strokeWidth={2} />
          </span>
        </div>
        <span className="capability-card-heading-rule" aria-hidden="true" />
      </div>
      <p
        className={cn(
          "capability-card-copy relative z-10 text-sm leading-relaxed text-slate-700 dark:text-black/90",
          compact ? "mt-1 line-clamp-2" : "flex-1",
        )}
      >
        {desc}
      </p>
      <span
        className={cn(
          "relative z-10 mt-auto inline-flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-black",
          compact ? "pt-4" : "pt-8",
        )}
      >
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

export function TechnologyCapabilityGrid({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("da-container da-capability-cards-grid", className)}>{children}</div>
}

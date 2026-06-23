"use client"

import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type HireHubCardVariant = "benefit" | "feature" | "resource"

export type HireHubCardProps = {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  variant?: HireHubCardVariant
  exploreLabel?: string
  className?: string
}

function CardHeader({ title, icon: Icon }: { title: string; icon: LucideIcon }) {
  return (
    <div className="capability-card-header hire-hub-card-header">
      <div className="flex min-h-11 items-center justify-between gap-3 overflow-visible">
        <h3 className="hire-hub-card-title min-w-0 flex-1">{title}</h3>
        <span className="hire-hub-card-icon hire-hub-card-icon--lg shrink-0">
          <Icon size={22} strokeWidth={2} />
        </span>
      </div>
    </div>
  )
}

export function HireHubCard({
  title,
  description,
  icon,
  href,
  variant = "feature",
  exploreLabel = "Explore role",
  className,
}: HireHubCardProps) {
  const isResource = variant === "resource"

  const content = (
    <>
      <div className="hire-hub-card-accent" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col">
        <CardHeader title={title} icon={icon} />
        <p className={cn("hire-hub-card-copy", isResource ? "mt-3" : "mt-1")}>{description}</p>

        {isResource ? (
          <span className="hire-hub-card-explore mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-bold uppercase tracking-[0.18em] text-toadster-green">
            {exploreLabel}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
          </span>
        ) : null}
      </div>
    </>
  )

  const cardClassName = cn(
    "hire-hub-card group relative flex h-full flex-col",
    isResource && "hire-hub-card--resource",
    href && "hire-hub-card--linked cursor-pointer",
    className,
  )

  if (href) {
    return (
      <Link href={href} title={title} className={cn("hire-hub-card-link block h-full no-underline", cardClassName)}>
        {content}
      </Link>
    )
  }

  return <article className={cardClassName}>{content}</article>
}

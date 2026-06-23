"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type HireRoleCardProps = {
  title: string
  icon: LucideIcon
  description?: string
  tags?: string[]
  href?: string
  target?: string
  rel?: string
  index?: number
  footer?: ReactNode
  badge?: string
  shortHeadingRule?: boolean
}

export function HireRoleCard({
  title,
  icon: Icon,
  description,
  tags,
  href,
  target,
  rel,
  index = 0,
  footer,
  badge,
  shortHeadingRule = false,
}: HireRoleCardProps) {
  const cardClassName = cn(
    "hire-role-card group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-7",
    shortHeadingRule && "capability-card-short-rule",
  )

  const content = (
    <>
      {badge ? (
        <span className="mb-3 inline-flex w-fit rounded-full border border-slate-200/80 bg-slate-100/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:border-slate-300/60 dark:bg-white/55 dark:text-black">
          {badge}
        </span>
      ) : null}

      <div className="capability-card-header">
        <div className="flex min-h-11 min-w-0 items-center justify-between gap-3">
          <h3 className="min-w-0 flex-1 text-lg font-bold leading-snug text-slate-900 dark:text-black">
            {title}
          </h3>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
            <Icon size={22} strokeWidth={2} />
          </span>
        </div>
        <span className="capability-card-heading-rule" aria-hidden="true" />
      </div>

      {description ? (
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-slate-700 md:text-[0.9375rem] dark:text-black/80">
            {description}
          </p>
        </div>
      ) : null}

      {footer}

      {tags && tags.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200/80 bg-slate-100/90 px-2.5 py-0.5 text-xs font-semibold text-slate-800 dark:border-slate-300/60 dark:bg-white/55 dark:text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </>
  )

  return (
    <div className="scroll-reveal-stagger h-full min-w-0 w-full max-w-full" style={{ ["--stagger-index" as string]: index }}>
      {href ? (
        <Link
          href={href}
          title={`Explore ${title}`}
          target={target}
          rel={rel}
          className={`${cardClassName} min-w-0 max-w-full`}
        >
          {content}
        </Link>
      ) : (
        <div className={`${cardClassName} min-w-0 max-w-full`}>{content}</div>
      )}
    </div>
  )
}

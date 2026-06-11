"use client"

import type { ReactNode } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface CTALinkProps {
  to: string
  className?: string
  children: ReactNode
  ariaLabel?: string
  title?: string
}

export function CTALink({ to, className, children, ariaLabel, title }: CTALinkProps) {
  return (
    <Link
      href={to}
      aria-label={ariaLabel}
      title={title || ariaLabel || (typeof children === 'string' ? children : undefined)}
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-primary-foreground font-semibold shadow-sm transition-all hover:bg-primary-hover hover:shadow-md",
        className,
      )}
    >
      {children}
    </Link>
  )
}

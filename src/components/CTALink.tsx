import type { ReactNode } from "react"
import { Link } from "react-router-dom"

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
      to={to}
      aria-label={ariaLabel}
      title={title || ariaLabel || (typeof children === 'string' ? children : undefined)}
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-[#1C3829] px-8 py-3 text-white font-semibold transition-colors hover:bg-green-800",
        className,
      )}
    >
      {children}
    </Link>
  )
}

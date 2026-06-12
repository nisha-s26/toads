import { cn } from "@/lib/utils"

export const CLUTCH_PROFILE_URL =
  "https://clutch.co/profile/toadster-technologies-private"

type ClutchBadgeProps = {
  className?: string
  compact?: boolean
}

export function ClutchBadge({ className, compact = false }: ClutchBadgeProps) {
  return (
    <a
      href={CLUTCH_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 rounded-xl border border-page-border bg-page-bg/40 backdrop-blur-sm transition-colors hover:border-toadster-green/35 hover:bg-page-accent-soft",
        compact ? "px-3 py-2" : "px-4 py-3",
        className,
      )}
      aria-label="Toadster - Clutch Global Top AI Development Company 2024"
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-lg bg-toadster-green font-black tracking-tight text-primary-foreground",
          compact ? "h-8 w-8 text-[10px]" : "h-10 w-10 text-[11px]",
        )}
      >
        CL
      </div>
      <div className="min-w-0 text-left">
        <p
          className={cn(
            "font-bold leading-tight text-page-fg",
            compact ? "text-xs" : "text-sm",
          )}
        >
          Clutch Global Leader
        </p>
        <p className={cn("text-page-fg-muted", compact ? "text-[10px]" : "text-xs")}>
          Top AI Development Company 2024
        </p>
      </div>
    </a>
  )
}

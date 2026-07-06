import Image from "next/image"
import { cn } from "@/lib/utils"

export const CLUTCH_PROFILE_URL =
  "https://clutch.co/profile/toadster-technologies-private"

const CLUTCH_LOGO = "/clutch-logo.webp"

type ClutchBadgeProps = {
  className?: string
  compact?: boolean
  /** Use on dark backgrounds (e.g. footer) for readable light text */
  onDarkBackground?: boolean
}

export function ClutchBadge({ className, compact = false, onDarkBackground = false }: ClutchBadgeProps) {
  return (
    <a
      href={CLUTCH_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 rounded-xl border backdrop-blur-sm transition-colors",
        onDarkBackground
          ? "border-white/15 bg-white/10 hover:border-toadster-green/50 hover:bg-white/15"
          : "border-page-border bg-page-card/80 hover:border-toadster-green/35 hover:bg-page-accent-soft",
        compact ? "px-3 py-2" : "px-4 py-3",
        className,
      )}
      aria-label="Toadster - Clutch Global Top AI Development Company 2026"
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-lg bg-white",
          compact ? "h-8 w-8" : "h-10 w-10",
        )}
      >
        <Image
          src={CLUTCH_LOGO}
          alt="Toadster verified reviews on Clutch"
          title="Toadster verified reviews on Clutch"
          fill
          unoptimized
          className="object-contain"
          sizes={compact ? "32px" : "40px"}
        />
      </div>
      <div className="min-w-0 text-left">
        <p
          className={cn(
            "font-bold leading-tight",
            onDarkBackground ? "text-white" : "text-page-fg",
            compact ? "text-xs" : "text-sm",
          )}
        >
          Clutch Global Leader
        </p>
        <p
          className={cn(
            onDarkBackground ? "text-white/75" : "text-page-fg-muted",
            compact ? "text-[10px]" : "text-xs",
          )}
        >
          Top AI Development Company 2026
        </p>
      </div>
    </a>
  )
}

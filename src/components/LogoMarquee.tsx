import Image from "next/image"
import { createElement } from "react"
import { cn } from "@/lib/utils"
import { TRUSTED_BY_CLIENTS } from "@/constants/trustedByClients"

const LOGO_GAP = {
  default: "gap-14 sm:gap-16 md:gap-20",
  compact: "gap-6 sm:gap-12 md:gap-14",
} as const

const LOGO_CELL_CLASS = {
  default: "h-14 w-44 sm:h-16 sm:w-48 md:h-[4.25rem] md:w-52",
  compact: "h-9 w-28 sm:h-14 sm:w-44 md:h-16 md:w-48",
} as const

const MARQUEE_REPEAT_COUNT = 8

type LogoMarqueeProps = {
  compact?: boolean
  onDarkBackground?: boolean
  className?: string
}

function LogoItem({
  label,
  src,
  onDarkBackground,
  compact = false,
  decorative = false,
  scale = 1,
}: {
  label: string
  src?: string
  onDarkBackground: boolean
  compact?: boolean
  decorative?: boolean
  scale?: number
}) {
  const cellClass = compact ? LOGO_CELL_CLASS.compact : LOGO_CELL_CLASS.default

  return (
    <span className={cn("inline-flex shrink-0 items-center justify-center", cellClass)}>
      {src ? (
        <Image
          src={src}
          alt={`${label} logo`}
          title={`${label} logo`}
          width={208}
          height={80}
          sizes="208px"
          quality={75}
          loading="lazy"
          draggable={false}
          aria-hidden={decorative}
          style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
          className={cn(
            "block max-h-[88%] max-w-[92%] object-contain opacity-100 transition-opacity duration-200",
            onDarkBackground ? "brightness-0 invert" : "brightness-0 dark:invert",
          )}
        />
      ) : (
        <span className="text-sm font-semibold text-page-fg opacity-70">{label}</span>
      )}
    </span>
  )
}

export function LogoMarquee({
  compact = false,
  onDarkBackground = false,
  className,
}: LogoMarqueeProps) {
  const marqueeLogos = Array.from({ length: MARQUEE_REPEAT_COUNT }, () => TRUSTED_BY_CLIENTS).flat()
  const scrollAmount = compact ? 3 : 4

  return (
    <div
      className={cn(
        "logo-marquee relative overflow-hidden",
        compact ? "logo-marquee--compact py-1 sm:py-4" : "py-3 sm:py-6",
        className,
      )}
      aria-label="Trusted by leading companies"
    >
      {createElement(
        "marquee",
        {
          behavior: "scroll",
          direction: "left",
          scrollamount: scrollAmount,
          scrolldelay: 0,
          className: "logo-marquee-track block",
        },
        <span
          className={cn(
            "logo-marquee-content inline-flex w-max items-center align-middle",
            compact ? LOGO_GAP.compact : LOGO_GAP.default,
          )}
        >
          {marqueeLogos.map(({ label, src, scale }, index) => (
            <LogoItem
              key={`${label}-${index}`}
              label={label}
              src={src}
              scale={scale}
              onDarkBackground={onDarkBackground}
              compact={compact}
              decorative={index >= TRUSTED_BY_CLIENTS.length}
            />
          ))}
        </span>,
      )}
    </div>
  )
}

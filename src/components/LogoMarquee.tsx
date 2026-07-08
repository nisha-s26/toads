import Image from "next/image"
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

const MARQUEE_DURATION = {
  default: "40s",
  compact: "32s",
} as const

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
    <div className={cn("flex shrink-0 items-center justify-center", cellClass)}>
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
            "block max-h-[88%] max-w-[92%] object-contain opacity-70 transition-opacity duration-200 hover:opacity-100",
            onDarkBackground ? "brightness-0 invert" : "brightness-0 dark:invert",
          )}
        />
      ) : (
        <span className="text-sm font-semibold text-page-fg opacity-70">{label}</span>
      )}
    </div>
  )
}

export function LogoMarquee({
  compact = false,
  onDarkBackground = false,
  className,
}: LogoMarqueeProps) {
  const marqueeLogos = [...TRUSTED_BY_CLIENTS, ...TRUSTED_BY_CLIENTS]

  return (
    <div
      className={cn(
        "logo-marquee relative overflow-hidden",
        compact ? "logo-marquee--compact py-1 sm:py-4" : "py-3 sm:py-6",
        className,
      )}
      aria-label="Trusted by leading companies"
    >
      <div
        className={cn(
          "logo-marquee-track flex w-max items-center",
          compact ? LOGO_GAP.compact : LOGO_GAP.default,
        )}
        style={{ "--marquee-duration": compact ? MARQUEE_DURATION.compact : MARQUEE_DURATION.default } as React.CSSProperties}
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
      </div>
    </div>
  )
}

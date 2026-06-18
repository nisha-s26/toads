"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { TRUSTED_BY_CLIENTS } from "@/constants/trustedByClients"

const LOGO_HEIGHT_CLASS =
  "h-7 w-auto shrink-0 sm:h-8 md:h-9 [@media(max-height:720px)]:h-6 [@media(max-height:720px)]:sm:h-7"

type LogoMarqueeProps = {
  compact?: boolean
  onDarkBackground?: boolean
  className?: string
}

export function LogoMarquee({
  compact = false,
  onDarkBackground = false,
  className,
}: LogoMarqueeProps) {
  const logos = [...TRUSTED_BY_CLIENTS, ...TRUSTED_BY_CLIENTS]

  return (
    <div
      className={cn(
        "logo-marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]",
        compact ? "py-1 sm:py-1.5" : "py-3",
        className,
      )}
      aria-label="Trusted by leading companies"
    >
      <div className="logo-marquee-track flex w-max items-center gap-12 sm:gap-16 md:gap-20">
        {logos.map(({ label, src }, idx) => (
          <div
            key={`${label}-${idx}`}
            className="flex shrink-0 min-w-[100px] items-center justify-center sm:min-w-[120px]"
          >
            {src ? (
              <Image
                src={src}
                alt={label}
                width={120}
                height={48}
                sizes="120px"
                quality={75}
                loading="lazy"
                draggable={false}
                className={cn(
                  LOGO_HEIGHT_CLASS,
                  "block max-w-[140px] object-contain opacity-70 transition-opacity duration-200 hover:opacity-100",
                  onDarkBackground ? "brightness-0 invert" : "brightness-0 dark:invert",
                )}
              />
            ) : (
              <span className="text-sm font-semibold text-page-fg opacity-70">{label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

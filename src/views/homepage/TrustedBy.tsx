"use client"

import Image from "next/image"

interface ClientLogo {
  label: string
  src: string
}

const LOGOS: ClientLogo[] = [
  { label: "Google", src: "/trusted-by/google.webp" },
  { label: "Paytm", src: "/trusted-by/paytm.webp" },
  { label: "FireAI", src: "/trusted-by/fireai.webp" },
  { label: "Axis Bank", src: "/trusted-by/axis.webp" },
  { label: "Tawuniya", src: "/trusted-by/tawuniya.webp" },
  { label: "H&M", src: "/trusted-by/hm.webp" },
]

const LOGO_HEIGHT_CLASS =
  "h-7 w-auto shrink-0 sm:h-8 md:h-9 [@media(max-height:720px)]:h-6 [@media(max-height:720px)]:sm:h-7"

const MarqueeRow = ({
  compact = false,
  onDarkBackground = false,
}: {
  compact?: boolean
  onDarkBackground?: boolean
}) => {
  const items = [...LOGOS, ...LOGOS]

  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] ${compact ? "py-1 sm:py-1.5" : "py-3"}`}
    >
      <div className="trusted-by-track flex w-max items-center gap-16 md:gap-20">
        {items.map(({ label, src }, idx) => (
          <Image
            key={`${label}-${idx}`}
            src={src}
            alt={label}
            width={120}
            height={48}
            sizes="120px"
            quality={75}
            loading="lazy"
            draggable={false}
            className={`${LOGO_HEIGHT_CLASS} block object-contain opacity-70 transition-opacity duration-200 hover:opacity-100 ${
              onDarkBackground ? "brightness-0 invert" : "brightness-0 dark:invert"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const TrustedBy = ({
  compact = false,
  onDarkBackground = false,
}: {
  compact?: boolean
  onDarkBackground?: boolean
}) => {
  return (
    <section className={`section-full-bleed relative z-10 shrink-0 ${compact ? "pb-3 pt-2 sm:pb-3 sm:pt-0" : "pb-4"}`}>
      <div className="w-full px-4">
        <MarqueeRow compact={compact} onDarkBackground={onDarkBackground} />
      </div>
    </section>
  )
}

export default TrustedBy

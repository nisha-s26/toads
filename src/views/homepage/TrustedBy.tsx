"use client"

import { LogoMarquee } from "@/components/LogoMarquee"

const TrustedBy = ({
  compact = false,
  onDarkBackground = false,
}: {
  compact?: boolean
  onDarkBackground?: boolean
}) => {
  return (
    <section
      className={`trusted-by-marquee section-full-bleed relative z-10 shrink-0 ${compact ? "pb-3 pt-2 sm:pb-3 sm:pt-0" : "pb-4"}`}
    >
      <div className="w-full">
        <LogoMarquee compact={compact} onDarkBackground={onDarkBackground} />
      </div>
    </section>
  )
}

export default TrustedBy

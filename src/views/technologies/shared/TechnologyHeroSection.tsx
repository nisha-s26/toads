import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type TechnologyHeroSectionProps = {
  children: ReactNode
  lightImageSrc?: string
  darkImageSrc?: string
  imageAlt?: string
  heroVariant?: "default" | "devops"
}

export function TechnologyHeroSection({
  children,
  lightImageSrc = "/lightmodepart3.webp",
  darkImageSrc = "/bgblack2.webp",
  imageAlt = "Toadster technology solutions backdrop",
  heroVariant = "default",
}: TechnologyHeroSectionProps) {
  const isDevOpsHero = heroVariant === "devops"

  return (
    <section
      className={cn(
        "da-hero da-hero--image homepage-hero-viewport--image relative overflow-hidden",
        isDevOpsHero && "da-hero--devops",
      )}
    >
      <div className="homepage-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="homepage-hero-bg-image absolute inset-0">
          <Image
            src={lightImageSrc}
            alt={imageAlt}
            title={imageAlt}
            fill
            priority
            fetchPriority="high"
            quality={95}
            sizes="100vw"
            className="object-cover object-center dark:hidden"
          />
          <Image
            src={darkImageSrc}
            alt={imageAlt}
            title={imageAlt}
            fill
            priority
            fetchPriority="high"
            quality={95}
            sizes="100vw"
            className="hidden object-cover object-center dark:block"
          />
        </div>
        <div className="homepage-hero-bg-overlay absolute inset-0" />
        {isDevOpsHero ? (
          <>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/96 via-white/82 to-white/25 dark:hidden"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/20 dark:hidden"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 hidden bg-black/40 dark:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black/90 via-black/62 to-black/15 dark:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-black/55 via-black/20 to-black/45 dark:block"
              aria-hidden
            />
          </>
        ) : null}
      </div>
      <div className="da-container relative z-[1]">
        <div className="da-hero-copy">{children}</div>
      </div>
    </section>
  )
}

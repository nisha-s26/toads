import Image from "next/image"
import type { ReactNode } from "react"

type TechnologyHeroSectionProps = {
  children: ReactNode
}

export function TechnologyHeroSection({ children }: TechnologyHeroSectionProps) {
  return (
    <section className="da-hero da-hero--image homepage-hero-viewport--image relative overflow-hidden">
      <div className="homepage-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="homepage-hero-bg-image absolute inset-0">
          <Image
            src="/lightmodepart3.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={95}
            sizes="100vw"
            className="object-cover object-center dark:hidden"
          />
          <Image
            src="/bgblack2.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={95}
            sizes="100vw"
            className="hidden object-cover object-center dark:block"
          />
        </div>
        <div className="homepage-hero-bg-overlay absolute inset-0" />
      </div>
      <div className="da-container relative z-[1]">
        <div className="da-hero-copy">{children}</div>
      </div>
    </section>
  )
}

import Image from "next/image"

/** Same markup as Home page hero - services light / dark assets */
export function ServiceHeroBackground() {
  return (
    <div className="homepage-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="homepage-hero-bg-image absolute inset-0">
        <Image
          src="/services light mode.webp"
          alt="Toadster services background visual"
          title="Toadster services background visual"
          fill
          priority
          fetchPriority="high"
          quality={95}
          sizes="100vw"
          className="object-cover object-center dark:hidden"
        />
        <Image
          src="/services dark mode.webp"
          alt="Toadster services background visual"
          title="Toadster services background visual"
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
  )
}

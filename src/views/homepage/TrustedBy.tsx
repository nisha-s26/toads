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
      className={`trusted-by-marquee section-full-bleed relative z-10 shrink-0 ${compact ? "pb-4 pt-0 sm:pb-3 sm:pt-0" : "pb-4"}`}
    >
      <div className="w-full">
        <LogoMarquee compact={compact} onDarkBackground={onDarkBackground} />
      </div>
    </section>
  )
}

export default TrustedBy

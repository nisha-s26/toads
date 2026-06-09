import { MapPin } from "lucide-react"
import type { ReactNode } from "react"
import { ScrollReveal } from "@/components/ScrollReveal"

interface CountryHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  office: string
  heroImage: string
  heroImageAlt: string
  actions: ReactNode
}

export function CountryHero({
  eyebrow,
  title,
  subtitle,
  office,
  heroImage,
  heroImageAlt,
  actions,
}: CountryHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-10 lg:px-20 lg:py-12">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-toadster-green/8 via-transparent to-transparent" />
      <div className="absolute -right-24 top-8 -z-10 h-64 w-64 rounded-full bg-toadster-green/10 blur-3xl" />

      <div className="mx-auto grid max-w-9xl items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
        <ScrollReveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-toadster-green">{eyebrow}</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">{title}</h1>
            <p className="mt-4 text-base leading-relaxed text-page-fg-subtle md:text-lg">{subtitle}</p>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-page-border bg-white/10 px-4 py-3 text-sm text-page-fg-muted">
              <MapPin className="h-4 w-4 shrink-0 text-toadster-green" />
              <span>{office}</span>
            </div>
            <div className="mt-6">{actions}</div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-page-border shadow-lg">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="h-56 w-full object-cover md:h-64 lg:h-72"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

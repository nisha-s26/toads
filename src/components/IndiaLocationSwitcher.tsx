import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { ScrollReveal } from "@/components/ScrollReveal"

export interface IndiaLocationLink {
  label: string
  href: string
  key?: string
}

interface IndiaLocationSwitcherProps {
  eyebrow?: string
  title: string
  description: string
  locations: IndiaLocationLink[]
  activeKey?: string
}

export function IndiaLocationSwitcher({
  eyebrow = "India Locations",
  title,
  description,
  locations,
  activeKey,
}: IndiaLocationSwitcherProps) {
  return (
    <ScrollReveal>
      <section className="px-4 py-6 lg:px-20">
        <div className="mx-auto max-w-9xl rounded-2xl border border-page-border bg-white/10 p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-toadster-green">{eyebrow}</p>
          <h2 className="mt-2 text-xl font-bold text-page-fg md:text-2xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-page-fg-muted">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {locations.map((location) => {
              const isActive = activeKey !== undefined && location.key === activeKey

              return (
                <Link
                  key={location.label}
                  to={location.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-toadster-green/50 bg-toadster-green/15 text-toadster-green"
                      : "border-page-border bg-page-card/70 text-page-fg hover:border-toadster-green/40 hover:bg-page-accent-soft dark:bg-white/10"
                  }`}
                >
                  {location.label}
                  {!isActive && (
                    <ArrowRight className="h-3.5 w-3.5 text-page-fg-muted" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

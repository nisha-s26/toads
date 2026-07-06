import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ServiceStat = {
  label: string
  number?: string
  value?: string
}

function getStatValue(stat: ServiceStat) {
  return stat.number ?? stat.value ?? ""
}

type ServiceStatRowProps = {
  stats: ServiceStat[]
  ctaLabel?: string
  ctaHref?: string
  ctaStatic?: boolean
}

const ctaClassName =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm"

export function ServiceStatRow({
  stats,
  ctaLabel,
  ctaHref = "#contact-form",
  ctaStatic = false,
}: ServiceStatRowProps) {
  return (
    <div>
      <div className="service-stat-row mb-8 grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4 md:gap-x-8">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-0 text-left">
            <div className="text-lg font-extrabold leading-tight text-page-fg md:text-xl lg:text-2xl">
              {getStatValue(stat)}
            </div>
            <div className="mt-1 text-sm leading-snug text-page-fg-muted">{stat.label}</div>
          </div>
        ))}
      </div>

      {ctaLabel ? (
        <div className="flex flex-wrap gap-4">
          {ctaStatic ? (
            <span className={`${ctaClassName} cursor-default`}>
              {ctaLabel}
              <ArrowRight size={16} />
            </span>
          ) : (
            <Link href={ctaHref} title={ctaLabel} className={`${ctaClassName} transition-colors hover:bg-primary/90`}>
              {ctaLabel}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      ) : null}
    </div>
  )
}

type ServiceStat = {
  label: string
  number?: string
  value?: string
}

function getStatValue(stat: ServiceStat) {
  return stat.number ?? stat.value ?? ""
}

export function ServiceStatRow({ stats }: { stats: ServiceStat[] }) {
  return (
    <div className="service-stat-row mb-8 flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8 md:gap-x-10">
      {stats.map((stat) => (
        <div key={stat.label} className="min-w-[6.5rem] text-left">
          <div className="text-2xl font-extrabold text-page-fg md:text-3xl">{getStatValue(stat)}</div>
          <div className="mt-0.5 text-sm leading-snug text-page-fg-muted">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

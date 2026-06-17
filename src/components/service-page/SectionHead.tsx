export function SectionHead({
  label,
  title,
  subtitle,
  centered = false,
  labelClassName = "text-green-400",
}: {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
  labelClassName?: string
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label ? (
        <p className={`text-xs font-bold uppercase tracking-[0.08em] ${labelClassName} mb-4`}>{label}</p>
      ) : null}
      <h2 className="text-4xl md:text-5xl font-extrabold text-page-fg tracking-tight mb-4">{title}</h2>
      {subtitle ? (
        <p className={`text-page-fg-muted text-lg leading-relaxed ${centered ? "mx-auto max-w-2xl" : "max-w-full"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

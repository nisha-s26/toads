import { SplitSectionHeading } from "@/components/SplitSectionHeading"
import { cn } from "@/lib/utils"

export function SectionHead({
  label,
  title,
  titleBefore,
  titleAccent,
  accent,
  subtitle,
  centered = false,
  labelClassName = "text-toadster-green",
}: {
  label: string
  title?: string
  titleBefore?: string
  titleAccent?: string
  accent?: string
  subtitle?: string
  centered?: boolean
  labelClassName?: string
}) {
  return (
    <div className={cn("section-head mb-8", centered && "text-center")}>
      {label ? (
        <p className={cn("mb-4 text-xs font-bold uppercase tracking-[0.08em]", labelClassName)}>{label}</p>
      ) : null}
      <SplitSectionHeading
        as="h2"
        title={title}
        titleBefore={titleBefore}
        titleAccent={titleAccent}
        accent={accent}
        className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl"
      />
      {subtitle ? (
        <p
          className={cn(
            "text-lg leading-relaxed text-page-fg-muted",
            centered ? "mx-auto max-w-2xl" : "max-w-full",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

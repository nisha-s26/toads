import { cn } from "@/lib/utils"

export function splitSectionTitle(title: string, accent?: string) {
  if (accent) {
    const idx = title.indexOf(accent)
    if (idx >= 0) {
      return { titleBefore: title.slice(0, idx), titleAccent: title.slice(idx) }
    }
  }

  const lastSpace = title.lastIndexOf(" ")
  if (lastSpace === -1) {
    return { titleBefore: "", titleAccent: title }
  }

  return {
    titleBefore: title.slice(0, lastSpace + 1),
    titleAccent: title.slice(lastSpace + 1),
  }
}

type SplitSectionHeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4"
  title?: string
  titleBefore?: string
  titleAccent?: string
  accent?: string
  className?: string
  mainClassName?: string
  accentClassName?: string
  inverted?: boolean
}

export function SplitSectionHeading({
  as: Tag = "h2",
  title,
  titleBefore,
  titleAccent,
  accent,
  className,
  mainClassName,
  accentClassName,
  inverted = false,
}: SplitSectionHeadingProps) {
  const parts =
    titleBefore !== undefined && titleAccent !== undefined
      ? { titleBefore, titleAccent }
      : title
        ? splitSectionTitle(title, accent)
        : { titleBefore: "", titleAccent: "" }

  const mainClass = inverted ? "text-white" : "text-black dark:text-white"
  const accentClass = inverted ? "text-emerald-300" : "text-toadster-green"

  return (
    <Tag className={className}>
      {parts.titleBefore ? (
        <span className={cn("heading-main", mainClass, mainClassName)}>{parts.titleBefore}</span>
      ) : null}
      <span className={cn("heading-accent", accentClass, accentClassName)}>{parts.titleAccent}</span>
    </Tag>
  )
}

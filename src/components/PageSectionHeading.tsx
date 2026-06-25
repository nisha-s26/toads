"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { SplitSectionHeading } from "@/components/SplitSectionHeading"
import { cn } from "@/lib/utils"

type PageSectionHeadingProps = {
  titleBefore?: string
  titleAccent?: string
  title?: string
  accent?: string
  intro?: string
  introSecondary?: string
  delay?: number
  align?: "center" | "left"
  inverted?: boolean
  noMargin?: boolean
  headingClassName?: string
  introClassName?: string
}

export function PageSectionHeading({
  titleBefore,
  titleAccent,
  title,
  accent,
  intro,
  introSecondary,
  delay = 0,
  align = "center",
  inverted = false,
  noMargin = false,
  headingClassName,
  introClassName,
}: PageSectionHeadingProps) {
  const isCentered = align === "center"
  const introClass = inverted ? "text-white/78" : "text-page-fg-muted"

  return (
    <ScrollReveal
      className={cn(
        "w-full",
        !noMargin && "mb-8 md:mb-10",
        isCentered ? "text-center" : "text-left",
      )}
      delay={delay}
    >
      <SplitSectionHeading
        as="h2"
        title={title}
        titleBefore={titleBefore}
        titleAccent={titleAccent}
        accent={accent}
        inverted={inverted}
        className={cn(
          "text-3xl font-extrabold leading-[1.08] sm:text-4xl md:text-5xl",
          headingClassName,
        )}
      />
      {intro ? (
        <p
          className={cn(
            "mt-4 w-full text-sm leading-relaxed sm:text-base md:text-lg",
            introClass,
            isCentered ? "mx-auto max-w-3xl" : "max-w-none",
            introClassName,
          )}
        >
          {intro}
        </p>
      ) : null}
      {introSecondary ? (
        <p
          className={cn(
            "mt-4 w-full text-sm leading-relaxed sm:text-base md:text-lg",
            introClass,
            isCentered ? "mx-auto max-w-3xl" : "max-w-none",
            introClassName,
          )}
        >
          {introSecondary}
        </p>
      ) : null}
    </ScrollReveal>
  )
}

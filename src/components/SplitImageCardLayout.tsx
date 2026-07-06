"use client"

import Image from "next/image"
import { Children, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { getCardSectionImages } from "@/constants/cardSectionImages"

type SplitImageCardLayoutProps = {
  children: ReactNode
  splitAt?: number
  gridClassName?: string
  firstImage?: string
  secondImage?: string
  firstImageAlt?: string
  secondImageAlt?: string
  className?: string
}

function SideImagePanel({
  image,
  imageAlt,
  rowSpan,
  side,
  className,
}: {
  image: string
  imageAlt: string
  rowSpan: number
  side: "left" | "right"
  className?: string
}) {
  return (
    <div
      className={cn(
        "section-side-image relative min-h-0 w-full max-w-[360px]",
        side === "right" ? "justify-self-end" : "justify-self-start",
        className,
      )}
      style={{ gridRow: `span ${rowSpan} / span ${rowSpan}` }}
    >
      <div className="section-side-image-frame relative h-full min-h-0 w-full overflow-hidden rounded-[1.75rem] border border-page-border shadow-xl">
        <Image
          src={image}
          alt={imageAlt}
          title={imageAlt}
          fill
          quality={90}
          sizes="(min-width: 768px) 360px, 0px"
          className="object-cover"
        />
        <div className="section-side-image-overlay pointer-events-none absolute inset-0" aria-hidden />
      </div>
      <div
        className="section-side-image-glow pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-60"
        aria-hidden
      />
    </div>
  )
}

function MobileImageBanner({ image, imageAlt }: { image: string; imageAlt: string }) {
  return (
    <div className="section-side-image-mobile relative mb-6 h-52 w-full overflow-hidden rounded-2xl border border-page-border shadow-lg md:hidden">
      <Image src={image} alt={imageAlt} title={imageAlt} fill quality={90} sizes="100vw" className="object-cover" />
      <div className="section-side-image-overlay pointer-events-none absolute inset-0" aria-hidden />
    </div>
  )
}

function CardBatchWithImage({
  cards,
  image,
  imageAlt,
  side,
  gridClassName,
}: {
  cards: ReactNode[]
  image: string
  imageAlt: string
  side: "left" | "right"
  gridClassName: string
}) {
  const cardCount = cards.length
  if (cardCount === 0) return null

  const imageRowSpan = Math.min(2, Math.ceil(cardCount / 2))
  const cardColStart = side === "right" ? 1 : 2

  return (
    <>
      <MobileImageBanner image={image} imageAlt={imageAlt} />

      {/* Mobile: standard card grid */}
      <div className={cn(gridClassName, "md:hidden")}>{cards}</div>

      {/* Desktop: 2 card cols + image on left or right, spanning 2 card rows */}
      <div
        className={cn(
          "split-image-card-grid hidden md:grid md:items-stretch md:gap-6",
          side === "right"
            ? "md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(260px,360px)]"
            : "md:grid-cols-[minmax(260px,360px)_minmax(0,1fr)_minmax(0,1fr)]",
        )}
      >
        {side === "left" ? (
          <SideImagePanel
            image={image}
            imageAlt={imageAlt}
            rowSpan={imageRowSpan}
            side="left"
            className="col-start-1 row-start-1"
          />
        ) : null}

        {cards.map((card, index) => {
          const row = Math.floor(index / 2) + 1
          const col = cardColStart + (index % 2)

          return (
            <div key={index} className="min-h-0" style={{ gridColumn: col, gridRow: row }}>
              {card}
            </div>
          )
        })}

        {side === "right" ? (
          <SideImagePanel
            image={image}
            imageAlt={imageAlt}
            rowSpan={imageRowSpan}
            side="right"
            className="col-start-3 row-start-1"
          />
        ) : null}
      </div>
    </>
  )
}

export function SplitImageCardLayout({
  children,
  splitAt = 4,
  gridClassName = "grid gap-6 sm:grid-cols-2",
  firstImage,
  secondImage,
  firstImageAlt,
  secondImageAlt,
  className,
}: SplitImageCardLayoutProps) {
  const pathname = usePathname()
  const images = getCardSectionImages(pathname)

  const resolvedFirstImage = firstImage ?? images.rightBatch
  const resolvedSecondImage = secondImage ?? images.leftBatch
  const resolvedFirstAlt = firstImageAlt ?? images.rightBatchAlt
  const resolvedSecondAlt = secondImageAlt ?? images.leftBatchAlt

  const items = Children.toArray(children)

  if (items.length === 0) return null

  const batches: ReactNode[][] = []
  for (let i = 0; i < items.length; i += splitAt) {
    batches.push(items.slice(i, i + splitAt))
  }

  return (
    <div className={cn("split-image-card-layout space-y-12 lg:space-y-16", className)}>
      {batches.map((batch, index) => {
        const side = index % 2 === 0 ? "right" : "left"
        return (
          <CardBatchWithImage
            key={index}
            cards={batch}
            side={side}
            image={side === "right" ? resolvedFirstImage : resolvedSecondImage}
            imageAlt={side === "right" ? resolvedFirstAlt : resolvedSecondAlt}
            gridClassName={gridClassName}
          />
        )
      })}
    </div>
  )
}

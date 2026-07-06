"use client"

import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionWithSideImageProps = {
  image: string
  imageAlt: string
  side?: "left" | "right"
  children: ReactNode
  className?: string
}

function SideImage({ image, imageAlt, mobile }: { image: string; imageAlt: string; mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="section-side-image-mobile relative mb-6 h-52 w-full overflow-hidden rounded-2xl border border-page-border shadow-lg md:hidden">
        <Image
          src={image}
          alt={imageAlt}
          title={imageAlt}
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="section-side-image-overlay pointer-events-none absolute inset-0" aria-hidden />
      </div>
    )
  }

  return (
    <div className="section-side-image relative mx-auto hidden w-full max-w-[360px] shrink-0 md:block">
      <div className="section-side-image-frame relative h-[min(520px,100%)] min-h-[420px] w-full overflow-hidden rounded-[1.75rem] border border-page-border shadow-xl">
        <Image
          src={image}
          alt={imageAlt}
          title={imageAlt}
          fill
          quality={90}
          sizes="(min-width: 768px) 360px, 0px"
          className="object-cover"
          priority={false}
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

export function SectionWithSideImage({
  image,
  imageAlt,
  side = "right",
  children,
  className,
}: SectionWithSideImageProps) {
  return (
    <div
      className={cn(
        "section-with-side-image grid items-stretch gap-8 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] md:gap-10 lg:gap-14",
        side === "left" && "md:grid-cols-[minmax(260px,360px)_minmax(0,1fr)]",
        className,
      )}
    >
      {side === "left" ? <SideImage image={image} imageAlt={imageAlt} /> : null}
      <div className="min-w-0">
        <SideImage image={image} imageAlt={imageAlt} mobile />
        {children}
      </div>
      {side === "right" ? <SideImage image={image} imageAlt={imageAlt} /> : null}
    </div>
  )
}

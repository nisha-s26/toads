"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { TRUSTED_BY_CLIENTS } from "@/constants/trustedByClients"

const LOGO_HEIGHT_CLASS =
  "h-7 w-auto shrink-0 sm:h-8 md:h-9 [@media(max-height:720px)]:h-6 [@media(max-height:720px)]:sm:h-7"

const LOGO_GAP = "gap-12 sm:gap-16 md:gap-20"
const MARQUEE_SPEED_PX = 55

type LogoMarqueeProps = {
  compact?: boolean
  onDarkBackground?: boolean
  className?: string
}

function LogoItem({
  label,
  src,
  onDarkBackground,
  decorative = false,
  priority = false,
}: {
  label: string
  src?: string
  onDarkBackground: boolean
  decorative?: boolean
  priority?: boolean
}) {
  return (
    <div className="flex shrink-0 items-center justify-center">
      {src ? (
        <Image
          src={src}
          alt={decorative ? "" : label}
          width={120}
          height={48}
          sizes="120px"
          quality={75}
          loading="eager"
          priority={priority}
          draggable={false}
          aria-hidden={decorative}
          className={cn(
            LOGO_HEIGHT_CLASS,
            "block max-w-[140px] object-contain opacity-70 transition-opacity duration-200 hover:opacity-100",
            onDarkBackground ? "brightness-0 invert" : "brightness-0 dark:invert",
          )}
        />
      ) : (
        <span className="text-sm font-semibold text-page-fg opacity-70">{label}</span>
      )}
    </div>
  )
}

function waitForImages(container: HTMLElement) {
  const images = Array.from(container.querySelectorAll("img"))

  return Promise.all(
    images.map(
      (image) =>
        new Promise<void>((resolve) => {
          if (image.complete) {
            resolve()
            return
          }

          image.addEventListener("load", () => resolve(), { once: true })
          image.addEventListener("error", () => resolve(), { once: true })
        }),
    ),
  )
}

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
  mediaQuery.addEventListener("change", onStoreChange)
  return () => mediaQuery.removeEventListener("change", onStoreChange)
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function getReducedMotionServerSnapshot() {
  return false
}

export function LogoMarquee({
  compact = false,
  onDarkBackground = false,
  className,
}: LogoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const pausedRef = useRef(false)
  const rafRef = useRef(0)
  const [ready, setReady] = useState(false)
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  const marqueeLogos = [...TRUSTED_BY_CLIENTS, ...TRUSTED_BY_CLIENTS]

  useEffect(() => {
    const track = trackRef.current
    if (!track || prefersReducedMotion) return

    let running = true

    const getSetWidth = () => track.scrollWidth / 2

    const applyTransform = () => {
      track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`
    }

    const startAnimation = () => {
      let lastTime = performance.now()

      const tick = (now: number) => {
        if (!running) return

        const setWidth = getSetWidth()
        if (setWidth > 0 && !pausedRef.current) {
          const delta = (now - lastTime) / 1000
          offsetRef.current += MARQUEE_SPEED_PX * delta

          if (offsetRef.current >= setWidth) {
            offsetRef.current %= setWidth
          }

          applyTransform()
        }

        lastTime = now
        rafRef.current = requestAnimationFrame(tick)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const init = async () => {
      await waitForImages(track)
      if (!running) return

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!running) return
          setReady(true)
          startAnimation()
        })
      })
    }

    void init()

    const handleResize = () => {
      const setWidth = getSetWidth()
      if (setWidth > 0 && offsetRef.current >= setWidth) {
        offsetRef.current %= setWidth
        applyTransform()
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(track)
    window.addEventListener("resize", handleResize)

    return () => {
      running = false
      cancelAnimationFrame(rafRef.current)
      resizeObserver.disconnect()
      window.removeEventListener("resize", handleResize)
    }
  }, [prefersReducedMotion])

  const showTrack = ready || prefersReducedMotion

  return (
    <div
      className={cn(
        "logo-marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]",
        compact ? "py-1 sm:py-1.5" : "py-3",
        className,
      )}
      aria-label="Trusted by leading companies"
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
    >
      <div
        ref={trackRef}
        className={cn(
          "flex w-max items-center will-change-transform",
          LOGO_GAP,
          !showTrack && "invisible",
        )}
      >
        {marqueeLogos.map(({ label, src }, index) => (
          <LogoItem
            key={`${label}-${index}`}
            label={label}
            src={src}
            onDarkBackground={onDarkBackground}
            decorative={index >= TRUSTED_BY_CLIENTS.length}
            priority={index < TRUSTED_BY_CLIENTS.length}
          />
        ))}
      </div>
    </div>
  )
}

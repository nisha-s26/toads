"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { TRUSTED_BY_CLIENTS } from "@/constants/trustedByClients"

const LOGO_GAP = {
  default: "gap-14 sm:gap-16 md:gap-20",
  compact: "gap-10 sm:gap-12 md:gap-14",
} as const

const MARQUEE_MASK = {
  default:
    "[mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]",
  compact:
    "[mask-image:linear-gradient(to_right,transparent,black_1.5%,black_98.5%,transparent)]",
} as const

const LOGO_CELL_CLASS = {
  default: "h-14 w-44 sm:h-16 sm:w-48 md:h-[4.25rem] md:w-52",
  compact: "h-12 w-40 sm:h-14 sm:w-44 md:h-16 md:w-48",
} as const

const MARQUEE_SPEED_PX = 48

type LogoMarqueeProps = {
  compact?: boolean
  onDarkBackground?: boolean
  className?: string
}

function LogoItem({
  label,
  src,
  onDarkBackground,
  compact = false,
  decorative = false,
  priority = false,
  scale = 1,
}: {
  label: string
  src?: string
  onDarkBackground: boolean
  compact?: boolean
  decorative?: boolean
  priority?: boolean
  scale?: number
}) {
  const cellClass = compact ? LOGO_CELL_CLASS.compact : LOGO_CELL_CLASS.default

  return (
    <div className={cn("flex shrink-0 items-center justify-center", cellClass)}>
      {src ? (
        <Image
          src={src}
          alt={decorative ? "" : label}
          width={208}
          height={80}
          sizes="208px"
          quality={75}
          loading="eager"
          priority={priority}
          draggable={false}
          aria-hidden={decorative}
          style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
          className={cn(
            "block max-h-[88%] max-w-[92%] object-contain opacity-70 transition-opacity duration-200 hover:opacity-100",
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
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  // Second set is for seamless looping only — kept off-screen until the first set scrolls out.
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
            offsetRef.current -= setWidth
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

  return (
    <div
      className={cn(
        "logo-marquee relative overflow-hidden",
        compact ? MARQUEE_MASK.compact : MARQUEE_MASK.default,
        compact ? "py-3 sm:py-4" : "py-5 sm:py-6",
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
          compact ? LOGO_GAP.compact : LOGO_GAP.default,
        )}
      >
        {marqueeLogos.map(({ label, src, scale }, index) => (
          <LogoItem
            key={`${label}-${index}`}
            label={label}
            src={src}
            scale={scale}
            onDarkBackground={onDarkBackground}
            compact={compact}
            decorative={index >= TRUSTED_BY_CLIENTS.length}
            priority={index < TRUSTED_BY_CLIENTS.length}
          />
        ))}
      </div>
    </div>
  )
}

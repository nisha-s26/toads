"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface LazyVideoProps {
  src: string
  className?: string
  poster?: string
  ariaHidden?: boolean
}

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g"
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation
}

function shouldSkipVideo(): boolean {
  if (typeof window === "undefined") return false

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (prefersReducedMotion) return true

  const connection = (navigator as NavigatorWithConnection).connection
  if (connection?.saveData) return true
  if (connection?.effectiveType && ["slow-2g", "2g"].includes(connection.effectiveType)) {
    return true
  }

  return false
}

export function LazyVideo({ src, className, poster, ariaHidden = true }: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (shouldSkipVideo()) return

    const node = containerRef.current
    if (!node) return

    const trigger = () => setShouldRender(true)

    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback
    const idleHandle = idle ? idle(trigger) : window.setTimeout(trigger, 1500)

    return () => {
      if (typeof idleHandle === "number") {
        const cancelIdle = (
          window as Window & { cancelIdleCallback?: (id: number) => void }
        ).cancelIdleCallback
        if (cancelIdle) cancelIdle(idleHandle)
        else clearTimeout(idleHandle)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`} aria-hidden={ariaHidden}>
      {shouldRender ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-full object-cover"
          src={src}
        />
      ) : poster ? (
        <Image
          src={poster}
          alt=""
          aria-hidden
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : null}
    </div>
  )
}

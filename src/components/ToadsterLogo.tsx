"use client"

import Image from "next/image"
import { useTheme } from "@/hooks/theme"

interface ToadsterLogoProps {
  className?: string
  alt?: string
  height?: number
  width?: number
  /** Use on dark backgrounds (e.g. footer) - renders the white logo with toad eye dot */
  onDarkBackground?: boolean
  /** Force rendering of the green logo on light-themed navbar context */
  forceLight?: boolean
}

export function ToadsterLogo({
  className = "",
  alt = "Toadster",
  height,
  width,
  onDarkBackground = false,
  forceLight = false,
}: ToadsterLogoProps) {
  const { theme } = useTheme()
  const useWhiteLogo = !forceLight && (onDarkBackground || theme === "dark")

  return (
    <Image
      src={useWhiteLogo ? "/toadster-logo-white.svg" : "/toadster-logo-green.webp"}
      alt={alt}
      title="Toadster Logo"
      className={`toadster-logo select-none ${className}`}
      height={height ?? 40}
      width={width ?? 194}
      unoptimized
    />
  )
}

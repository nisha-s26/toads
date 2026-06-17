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
}

export function ToadsterLogo({
  className = "",
  alt = "Toadster",
  height,
  width,
  onDarkBackground = false,
}: ToadsterLogoProps) {
  const { theme } = useTheme()
  const useWhiteLogo = onDarkBackground || theme === "dark"

  return (
    <Image
      src={useWhiteLogo ? "/toadster-logo-white.svg" : "/toadster-logo-green.png"}
      alt={alt}
      title="Toadster Logo"
      className={`toadster-logo select-none ${className}`}
      height={height ?? 40}
      width={width ?? 194}
      unoptimized
    />
  )
}

"use client"

import Image from "next/image"
import { useTheme } from "@/hooks/theme"

interface ToadsterLogoProps {
  className?: string
  alt?: string
  height?: number
  width?: number
}

export function ToadsterLogo({
  className = "",
  alt = "Toadster",
  height,
  width,
}: ToadsterLogoProps) {
  const { theme } = useTheme()
  const src = theme === "dark" ? "/toadster-logo-dark.svg" : "/toadster-logo.svg"

  return (
    <Image
      src={src}
      alt={alt}
      title="Toadster Logo"
      className={`toadster-logo select-none ${className}`}
      height={height ?? 40}
      width={width ?? 160}
      unoptimized
    />
  )
}

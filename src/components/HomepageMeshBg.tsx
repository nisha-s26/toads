"use client"

import { motion, useReducedMotion } from "framer-motion"

export type HomepageMeshVariant = "default" | "blogs" | "careers"

/** Subtle corner mesh glows — page-level only, not per-section. */
const MESH_GLOWS = [
  { className: "homepage-mesh-glow--blue-tl", duration: 14 },
  { className: "homepage-mesh-glow--blue-mid", duration: 13, delay: 1.1 },
  { className: "homepage-mesh-glow--blue-bl", duration: 15, delay: 0.5 },
  { className: "homepage-mesh-glow--purple-tr", duration: 15, delay: 0.4 },
  { className: "homepage-mesh-glow--purple-mid", duration: 14, delay: 0.3 },
  { className: "homepage-mesh-glow--purple-br", duration: 16, delay: 0.8 },
] as const

type HomepageMeshBgProps = {
  variant?: HomepageMeshVariant
}

export function HomepageMeshBg({ variant = "default" }: HomepageMeshBgProps) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="homepage-mesh-bg pointer-events-none absolute inset-0 -z-10"
      data-mesh-variant={variant === "default" ? undefined : variant}
      aria-hidden
    >
      <div className="homepage-mesh-base absolute inset-0" />
      {MESH_GLOWS.map((glow) => (
        <motion.div
          key={glow.className}
          className={`homepage-mesh-glow ${glow.className}`}
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.82, 1, 0.82], scale: [1, 1.05, 1] }
          }
          transition={{
            duration: glow.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay:  0,
          }}
        />
      ))}
    </div>
  )
}

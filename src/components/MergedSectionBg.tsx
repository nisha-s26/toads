"use client"

import { motion, useReducedMotion } from "framer-motion"

export function MergedSectionBg() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="section-ambient-merged pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        className="section-ambient-orb section-ambient-orb--primary"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.55, 0.8, 0.55], scale: [1, 1.07, 1], x: ["0%", "2%", "0%"] }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="section-ambient-orb section-ambient-orb--secondary"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.35, 0.65, 0.35], scale: [1, 1.1, 1], y: ["0%", "-3%", "0%"] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="section-ambient-orb section-ambient-orb--accent"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </div>
  )
}

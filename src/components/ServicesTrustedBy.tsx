"use client"

import { LogoMarquee } from "@/components/LogoMarquee"

export function ServicesTrustedBy() {
  return (
    <section className="trusted-by-marquee overflow-hidden py-2">
      <div className="w-full px-4">
        <LogoMarquee />
      </div>
    </section>
  )
}

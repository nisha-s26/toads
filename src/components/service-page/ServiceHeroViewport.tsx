import type { ReactNode } from "react"

type ServiceHeroViewportProps = {
  children: ReactNode
}

export function ServiceHeroViewport({ children }: ServiceHeroViewportProps) {
  return <div className="service-hero-viewport">{children}</div>
}

export type HomepageMeshVariant = "default" | "blogs" | "careers"

/** Subtle corner mesh glows - page-level only, not per-section. */
const MESH_GLOWS = [
  { className: "homepage-mesh-glow--blue-tl", delay: 0 },
  { className: "homepage-mesh-glow--blue-mid", delay: 1.1 },
  { className: "homepage-mesh-glow--blue-bl", delay: 0.5 },
  { className: "homepage-mesh-glow--purple-tr", delay: 0.4 },
  { className: "homepage-mesh-glow--purple-mid", delay: 0.3 },
  { className: "homepage-mesh-glow--purple-br", delay: 0.8 },
] as const

type HomepageMeshBgProps = {
  variant?: HomepageMeshVariant
}

export function HomepageMeshBg({ variant = "default" }: HomepageMeshBgProps) {
  return (
    <div
      className="homepage-mesh-bg pointer-events-none absolute inset-0 -z-10"
      data-mesh-variant={variant === "default" ? undefined : variant}
      aria-hidden
    >
      <div className="homepage-mesh-base absolute inset-0" />
      {MESH_GLOWS.map((glow) => (
        <div
          key={glow.className}
          className={`homepage-mesh-glow homepage-mesh-glow-animate ${glow.className}`}
          style={{ animationDelay: `${glow.delay}s` }}
        />
      ))}
    </div>
  )
}

"use client"

interface HeroScrollIndicatorProps {
  targetId: string
  onDarkBackground?: boolean
}

function ScrollMouseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M10 34L16 40L22 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 42L16 48L22 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeroScrollIndicator({ targetId, onDarkBackground = false }: HeroScrollIndicatorProps) {
  const scrollToContent = () => {
    document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <button
      type="button"
      onClick={scrollToContent}
      aria-label="Scroll down to explore more"
      className={`absolute bottom-[3.25rem] left-1/2 z-30 hidden -translate-x-1/2 transition-colors hover:text-toadster-green sm:block sm:bottom-[5.25rem] ${
        onDarkBackground ? "text-white/70" : "text-page-fg/70"
      }`}
    >
      <span className="hero-scroll-bounce block">
        <ScrollMouseIcon className="h-10 w-7 sm:h-11 sm:w-8" />
      </span>
    </button>
  )
}

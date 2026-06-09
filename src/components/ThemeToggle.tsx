import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/theme"

interface ThemeToggleProps {
  className?: string
  size?: "sm" | "default"
}

export function ThemeToggle({ className = "", size = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"
  const dimension = size === "sm" ? "h-9 w-9" : "h-10 w-10"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative inline-flex ${dimension} shrink-0 items-center justify-center overflow-hidden rounded-xl border border-page-border-strong bg-page-card text-page-fg shadow-sm transition-all duration-300 outline-none hover:border-sage/50 hover:bg-page-accent-soft focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      <span className="sr-only">Toggle theme</span>

      {/* Sun — visible in light mode */}
      <Sun
        className={`absolute size-[18px] text-crimson transition-all duration-500 ease-out ${
          isDark
            ? "-translate-y-6 rotate-90 scale-0 opacity-0"
            : "translate-y-0 rotate-0 scale-100 opacity-100"
        }`}
        strokeWidth={2.2}
      />

      {/* Moon — visible in dark mode */}
      <Moon
        className={`absolute size-[18px] text-sage transition-all duration-500 ease-out ${
          isDark
            ? "translate-y-0 rotate-0 scale-100 opacity-100"
            : "translate-y-6 -rotate-90 scale-0 opacity-0"
        }`}
        strokeWidth={2.2}
      />
    </button>
  )
}

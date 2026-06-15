import { createContext, useContext } from "react"

export type Theme = "light" | "dark"

const STORAGE_KEY = "toadster-theme"

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light"

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "light" || stored === "dark") return stored

  return "light"
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  root.style.colorScheme = theme
  localStorage.setItem(STORAGE_KEY, theme)

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#000000" : "#ECF0F1")
  }
}

export interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

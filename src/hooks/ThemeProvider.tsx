"use client"

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import { applyTheme, ThemeContext, type Theme } from "./theme"

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light"
    return document.documentElement.classList.contains("dark") ? "dark" : "light"
  })

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === "light" ? "dark" : "light"))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

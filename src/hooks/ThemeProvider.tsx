"use client"

import { useCallback, useMemo, useSyncExternalStore, type ReactNode } from "react"
import { applyTheme, getStoredTheme, ThemeContext, type Theme } from "./theme"

const THEME_CHANGE_EVENT = "toadster-theme-change"

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined
  }

  const handler = () => onStoreChange()
  window.addEventListener(THEME_CHANGE_EVENT, handler)
  window.addEventListener("storage", handler)

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handler)
    window.removeEventListener("storage", handler)
  }
}

function getThemeSnapshot(): Theme {
  return getStoredTheme()
}

function getServerThemeSnapshot(): Theme {
  return "light"
}

function emitThemeChange() {
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerThemeSnapshot)

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next)
    emitThemeChange()
  }, [])

  const toggleTheme = useCallback(() => {
    const next: Theme = getStoredTheme() === "light" ? "dark" : "light"
    applyTheme(next)
    emitThemeChange()
  }, [])

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

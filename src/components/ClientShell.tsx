"use client"

import { useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import { RelatedLinks } from "@/components/RelatedLinks"
import { resolveActiveSection } from "@/config/routes"

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true
  if (target.isContentEditable) return true
  return false
}

function useContentProtection() {
  useEffect(() => {
    const blockEvent = (e: Event) => {
      if (isEditableTarget(e.target)) return
      e.preventDefault()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEditableTarget(e.target)) return

      const key = e.key.toLowerCase()
      const ctrlOrMeta = e.ctrlKey || e.metaKey

      if (e.key === "F12") {
        e.preventDefault()
        return
      }

      if (ctrlOrMeta && !e.shiftKey && !e.altKey && ["c", "x", "s", "u", "a", "p"].includes(key)) {
        e.preventDefault()
        return
      }

      if (ctrlOrMeta && e.shiftKey && ["i", "j", "c", "k"].includes(key)) {
        e.preventDefault()
        return
      }
    }

    document.addEventListener("contextmenu", blockEvent)
    document.addEventListener("copy", blockEvent)
    document.addEventListener("cut", blockEvent)
    document.addEventListener("dragstart", blockEvent)
    document.addEventListener("selectstart", blockEvent)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("contextmenu", blockEvent)
      document.removeEventListener("copy", blockEvent)
      document.removeEventListener("cut", blockEvent)
      document.removeEventListener("dragstart", blockEvent)
      document.removeEventListener("selectstart", blockEvent)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
}

export function ClientShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const activeSection = resolveActiveSection(pathname)

  useContentProtection()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [pathname])

  return (
    <div>
      <Navbar activeSection={activeSection} />
      {children}
      <RelatedLinks />
      <Footer />
    </div>
  )
}

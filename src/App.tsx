import { Suspense, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import { RelatedLinks } from "./components/RelatedLinks"
import { APP_ROUTES, resolveActiveSection } from "./config/routes"
import { usePageMetadata } from "./hooks/usePageMetadata"

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

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#050d18]">
      <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
    </div>
  )
}

function AppInner() {
  const { pathname } = useLocation()
  const activeSection = resolveActiveSection(pathname)

  usePageMetadata()
  useContentProtection()

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 z-30 w-full">
        <Navbar activeSection={activeSection} />
      </div>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {APP_ROUTES.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
      <RelatedLinks />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  )
}

export default App

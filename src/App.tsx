import { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import { RelatedLinks } from "./components/RelatedLinks"
import { APP_ROUTES, resolveActiveSection } from "./config/routes"
import { usePageMetadata } from "./hooks/usePageMetadata"

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

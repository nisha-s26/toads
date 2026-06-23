"use client"

import { useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import { FloatingTechElements } from "@/components/FloatingTechElements"
import { HomepageMeshBg } from "@/components/HomepageMeshBg"
import { resolveActiveSection } from "@/config/routes"

export function ClientShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const activeSection = resolveActiveSection(pathname)
  const isServicesPage = pathname?.startsWith("/services") ?? false
  const isServicesHubPage = pathname === "/services"
  const isTechnologiesPage = pathname?.startsWith("/technologies") ?? false
  const isContentPage = isServicesPage && !isServicesHubPage
  const isBlogsPage = pathname?.startsWith("/blogs") ?? false
  const isCareersPage = pathname?.startsWith("/careers") ?? false
  const meshVariant = isBlogsPage ? "blogs" : isCareersPage ? "careers" : "default"
  const showFloatingDecor = !isTechnologiesPage

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <main
        key={pathname}
        className={`page-route-enter relative isolate w-full max-w-full overflow-x-clip font-sans page-ambient-shell homepage-mesh-shell${
          isContentPage ? " services-mesh-shell" : ""
        }${isBlogsPage ? " blogs-mesh-shell" : ""}${
          isCareersPage ? " careers-mesh-shell" : ""
        }${isTechnologiesPage ? " technologies-mesh-shell" : ""}`}
      >
        {showFloatingDecor ? <FloatingTechElements /> : null}
        <HomepageMeshBg variant={meshVariant} />
        <div className="relative z-10">
          {isContentPage ? <div className="page-content-container">{children}</div> : children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

"use client"

import { useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import { HomepageMeshBg } from "@/components/HomepageMeshBg"
import { resolveActiveSection } from "@/config/routes"

export function ClientShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const activeSection = resolveActiveSection(pathname)
  const isServicesPage = pathname?.startsWith("/services") ?? false
  const isBlogsPage = pathname?.startsWith("/blogs") ?? false
  const isCareersPage = pathname?.startsWith("/careers") ?? false
  const usesMeshBg = isServicesPage || isBlogsPage || isCareersPage
  const meshVariant = isBlogsPage ? "blogs" : isCareersPage ? "careers" : "default"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <main
        key={pathname}
        className={
          usesMeshBg
            ? `page-route-enter page-ambient-shell homepage-mesh-shell relative isolate${
                isServicesPage ? " services-mesh-shell" : ""
              }${isBlogsPage ? " blogs-mesh-shell" : ""}${
                isCareersPage ? " careers-mesh-shell" : ""
              }`
            : "page-route-enter"
        }
      >
        {usesMeshBg && <HomepageMeshBg variant={meshVariant} />}
        <div className={usesMeshBg ? "relative z-10" : undefined}>
          {isServicesPage ? <div className="page-content-container">{children}</div> : children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

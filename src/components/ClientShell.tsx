"use client"

import { useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { motion, useReducedMotion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import { HomepageMeshBg } from "@/components/HomepageMeshBg"
import { RelatedLinks } from "@/components/RelatedLinks"
import { resolveActiveSection } from "@/config/routes"

export function ClientShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const activeSection = resolveActiveSection(pathname)
  const reduceMotion = useReducedMotion()
  const isServicesPage = pathname?.startsWith("/services") ?? false
  const isBlogsPage = pathname?.startsWith("/blogs") ?? false
  const isCareersPage = pathname?.startsWith("/careers") ?? false
  const usesMeshBg = isServicesPage || isBlogsPage || isCareersPage
  const meshVariant = isBlogsPage ? "blogs" : isCareersPage ? "careers" : "default"

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [pathname])

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <motion.main
        key={pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={
          usesMeshBg
            ? `page-ambient-shell homepage-mesh-shell relative isolate${
                isServicesPage ? " services-mesh-shell" : ""
              }${isBlogsPage ? " blogs-mesh-shell" : ""}${
                isCareersPage ? " careers-mesh-shell" : ""
              }`
            : undefined
        }
      >
        {usesMeshBg && <HomepageMeshBg variant={meshVariant} />}
        <div className={usesMeshBg ? "relative z-10" : undefined}>
          {isServicesPage ? <div className="page-content-container">{children}</div> : children}
        </div>
      </motion.main>
      {/* <RelatedLinks /> */}
      <Footer />
    </div>
  )
}

"use client"

import { useEffect } from "react"
import HeroSection from "./HeroSection"
import TrustedBy from "./TrustedBy"
import { HeroScrollIndicator } from "./HeroScrollIndicator"
import WhyUs from "./WhyUs"
import HireResources from "./HireResources"
import AiCap from "./AiCap"
// import OurProcess from "./OurProcess"
import GetStarted from "./GetStarted"
import HomepageFaq from "./HomepageFaq"
import HomepageBlogs from "./HomepageBlogs"
import { HomepageMeshBg } from "@/components/HomepageMeshBg"
import { useTheme } from "@/hooks/theme"
// import Solutions from "./Solutions"
// import ParallaxShowcase from "./ParallaxShowcase"

const HomePage = () => {
  const { theme } = useTheme()
  const heroOnDarkBackground = theme === "dark"

  useEffect(() => {
    document.documentElement.classList.add("homepage-scroll-snap")
    return () => document.documentElement.classList.remove("homepage-scroll-snap")
  }, [])

  return (
    <div className="page-ambient-shell homepage-mesh-shell relative isolate">
      <HomepageMeshBg />
      <div className="homepage-content relative z-10">
        <section
          id="homepage-hero-viewport"
          className="homepage-snap-section homepage-hero-viewport homepage-hero-viewport--image relative flex min-h-[100dvh] max-h-[100dvh] flex-col overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
            <div className="homepage-hero-bg-image absolute bg-no-repeat" />
            <div className="homepage-hero-bg-overlay absolute inset-0" />
          </div>
          <HeroSection />
          <TrustedBy compact onDarkBackground={heroOnDarkBackground} />
          <HeroScrollIndicator targetId="#homepage-sections" onDarkBackground={heroOnDarkBackground} />
        </section>

        <div id="homepage-sections" className="homepage-sections">
          <AiCap />
          {/* <OurProcess /> */}
          <WhyUs />
          <HireResources />
          {/* <ParallaxShowcase /> */}
          {/* <Solutions /> */}
          <HomepageFaq />
          <HomepageBlogs />
          <GetStarted />
        </div>
      </div>
    </div>
  )
}

export default HomePage

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
// import Solutions from "./Solutions"
// import ParallaxShowcase from "./ParallaxShowcase"

const HomePage = () => {
  useEffect(() => {
    document.documentElement.classList.add("homepage-scroll-snap")
    return () => document.documentElement.classList.remove("homepage-scroll-snap")
  }, [])

  return (
    <div className="page-ambient-shell relative isolate">
      <div className="homepage-content">
        <section
          id="homepage-hero-viewport"
          className="homepage-snap-section homepage-hero-viewport relative flex min-h-[100dvh] max-h-[100dvh] flex-col overflow-hidden"
        >
          <HeroSection />
          <TrustedBy compact />
          <HeroScrollIndicator targetId="#homepage-sections" />
        </section>

        <div id="homepage-sections" className="homepage-sections">
          <AiCap />
          {/* <OurProcess /> */}
          <WhyUs />
          <HireResources />
          {/* <ParallaxShowcase /> */}
          {/* <Solutions /> */}
          <HomepageFaq />
          <GetStarted />
        </div>
      </div>
    </div>
  )
}

export default HomePage

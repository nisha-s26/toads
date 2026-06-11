"use client"

import HeroSection from "./HeroSection"
import TrustedBy from "./TrustedBy"
import WhyUs from "./WhyUs"
import AiCap from "./AiCap"
import OurProcess from "./OurProcess"
import GetStarted from "./GetStarted"
import Solutions from "./Solutions"
import ParallaxShowcase from "./ParallaxShowcase"

const HomePage = () => {
  return (
    <div className="relative isolate">
      <div className="homepage-bg-gradient" aria-hidden="true" />

      <div className="homepage-content">
        <HeroSection />
        <div className="homepage-sections">
          <TrustedBy />
          <AiCap />
          <OurProcess />
          <WhyUs />
          <ParallaxShowcase />
          <Solutions />
          <GetStarted />
        </div>
      </div>
    </div>
  )
}

export default HomePage

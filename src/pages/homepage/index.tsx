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
    <div className="bg-page-bg">
        <HeroSection />
        <TrustedBy/>
        <AiCap/>
        <OurProcess/>
        <WhyUs/>
        <ParallaxShowcase/>
        <Solutions/>
        <GetStarted/>
    </div>
  )
}

export default HomePage
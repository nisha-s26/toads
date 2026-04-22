import HeroSection from "./HeroSection"
import TrustedBy from "./TrustedBy"
import WhyUs from "./WhyUs"
import AiCap from "./AiCap"
import OurProcess from "./OurProcess"
import GetStarted from "./GetStarted"
import Solutions from "./Solutions"

const HomePage = () => {
  return (
    <div className="bg-[#050d18]">
        <HeroSection />
        <TrustedBy/>
        <AiCap/>
        <OurProcess/>
        <WhyUs/>
        <Solutions/>
        <GetStarted/>
    </div>
  )
}

export default HomePage
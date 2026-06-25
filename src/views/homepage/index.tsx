"use client"

import { HeroScrollIndicator } from "./HeroScrollIndicator"
import TrustedBy from "./TrustedBy"
import { useTheme } from "@/hooks/theme"
import Image from "next/image"
import type { BlogPost } from "@/views/blogs/blogData"
import HeroSection from "./HeroSection"
import AiCap from "./AiCap"
import WhyUs from "./WhyUs"
import HireResources from "./HireResources"
import HomepageFaq from "./HomepageFaq"
import HomepageBlogs from "./HomepageBlogs"
import GetStarted from "./GetStarted"

type HomePageProps = {
  initialBlogs?: BlogPost[]
}

const HomePage = ({ initialBlogs = [] }: HomePageProps) => {
  const { theme } = useTheme()
  const heroOnDarkBackground = theme === "dark"

  return (
    <div className="homepage-content relative font-sans">
      <section
        id="homepage-hero-viewport"
        className="homepage-snap-section homepage-hero-viewport homepage-hero-viewport--image relative flex flex-col overflow-hidden"
      >
        <div className="homepage-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="homepage-hero-bg-image absolute inset-0">
            <Image
              src="/lightmodepart3.png"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={95}
              sizes="100vw"
              className="homepage-hero-bg-img object-cover object-center dark:hidden"
            />
            <Image
              src="/bgblack2.png"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={95}
              sizes="100vw"
              className="homepage-hero-bg-img hidden object-cover object-center dark:block"
            />
          </div>
          <div className="homepage-hero-bg-overlay absolute inset-0" />
        </div>
        <HeroSection />
        <TrustedBy compact onDarkBackground={heroOnDarkBackground} />
        <HeroScrollIndicator targetId="#homepage-sections" onDarkBackground={heroOnDarkBackground} />
      </section>

      <div id="homepage-sections" className="homepage-sections">
        <AiCap />
        <WhyUs />
        <HireResources />
        <HomepageFaq />
        <HomepageBlogs initialBlogs={initialBlogs} />
        <GetStarted />
      </div>
    </div>
  )
}

export default HomePage

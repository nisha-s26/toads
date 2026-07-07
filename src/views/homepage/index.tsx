import { HeroScrollIndicator } from "./HeroScrollIndicator"
import TrustedBy from "./TrustedBy"
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
  return (
    <div className="homepage-content relative font-sans">
      <section
        id="homepage-hero-viewport"
        className="homepage-snap-section homepage-hero-viewport homepage-hero-viewport--image relative flex flex-col overflow-hidden max-sm:min-h-0"
      >
        <div className="homepage-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="homepage-hero-bg-image absolute inset-0">
            <Image
              src="/lightmodepart3.webp"
              alt="Toadster AI and data engineering technology backdrop"
              title="Toadster AI and data engineering technology backdrop"
              fill
              priority
              fetchPriority="high"
              quality={75}
              sizes="100vw"
              className="homepage-hero-bg-img object-cover object-left dark:hidden sm:object-center"
            />
            <Image
              src="/bgblack2.webp"
              alt="Toadster AI and data engineering technology backdrop"
              title="Toadster AI and data engineering technology backdrop"
              fill
              loading="lazy"
              quality={75}
              sizes="100vw"
              className="homepage-hero-bg-img hidden object-cover object-left dark:block sm:object-center"
            />
          </div>
          <div className="homepage-hero-bg-overlay absolute inset-0" />
        </div>
        <HeroSection />
        <TrustedBy compact />
        <HeroScrollIndicator targetId="#homepage-sections" />
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

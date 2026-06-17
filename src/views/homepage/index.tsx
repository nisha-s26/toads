"use client"

import { HeroScrollIndicator } from "./HeroScrollIndicator"
import TrustedBy from "./TrustedBy"
import { HomepageMeshBg } from "@/components/HomepageMeshBg"
import { useTheme } from "@/hooks/theme"
import dynamic from "next/dynamic"
import Image from "next/image"
import type { BlogPost } from "@/views/blogs/blogData"
import { useEffect } from "react"
import HeroSection from "./HeroSection"

const SectionPlaceholder = () => (
  <div className="homepage-snap-section min-h-[50vh] shrink-0" aria-hidden />
)

const AiCap = dynamic(() => import("./AiCap"), { loading: SectionPlaceholder })
const WhyUs = dynamic(() => import("./WhyUs"), { loading: SectionPlaceholder })
const HireResources = dynamic(() => import("./HireResources"), { loading: SectionPlaceholder })
const HomepageFaq = dynamic(() => import("./HomepageFaq"), { loading: SectionPlaceholder })
const HomepageBlogs = dynamic(() => import("./HomepageBlogs"), { loading: SectionPlaceholder })
const GetStarted = dynamic(() => import("./GetStarted"), { loading: SectionPlaceholder })

type HomePageProps = {
  initialBlogs?: BlogPost[]
}

const HomePage = ({ initialBlogs = [] }: HomePageProps) => {
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
          className="homepage-snap-section homepage-hero-viewport homepage-hero-viewport--image relative flex flex-col overflow-hidden"
        >
          <div className="homepage-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
            <div className="homepage-hero-bg-image absolute inset-0 max-sm:blur-xs">
              <Image
                src="/homepage-hero-light.webp"
                alt=""
                fill
                priority
                fetchPriority="high"
                quality={80}
                sizes="100vw"
                className="object-cover object-[center_20%] dark:hidden"
              />
              <Image
                src="/homepage-hero.webp"
                alt=""
                fill
                priority
                fetchPriority="high"
                quality={80}
                sizes="100vw"
                className="hidden object-cover object-[center_20%] dark:block"
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
    </div>
  )
}

export default HomePage

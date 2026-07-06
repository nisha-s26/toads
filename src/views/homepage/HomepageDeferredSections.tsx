"use client"

import dynamic from "next/dynamic"
import type { BlogPost } from "@/views/blogs/blogData"

const WhyUs = dynamic(() => import("./WhyUs"), { ssr: false, loading: () => null })
const HireResources = dynamic(() => import("./HireResources"), { ssr: false, loading: () => null })
const HomepageFaq = dynamic(() => import("./HomepageFaq"), { ssr: false, loading: () => null })
const HomepageBlogs = dynamic(() => import("./HomepageBlogs"), { ssr: false, loading: () => null })
const GetStarted = dynamic(() => import("./GetStarted"), { ssr: false, loading: () => null })

type HomepageDeferredSectionsProps = {
  initialBlogs?: BlogPost[]
}

export function HomepageDeferredSections({ initialBlogs = [] }: HomepageDeferredSectionsProps) {
  return (
    <>
      <WhyUs />
      <HireResources />
      <HomepageFaq />
      <HomepageBlogs initialBlogs={initialBlogs} />
      <GetStarted />
    </>
  )
}

import HomePage from "@/views/homepage"
import { fetchAllBlogs } from "@/lib/api"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/")
export const dynamic = "force-static"

export default async function Page() {
  const blogs = await fetchAllBlogs()

  return <HomePage initialBlogs={blogs.slice(0, 4)} />
}

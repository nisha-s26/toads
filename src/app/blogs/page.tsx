import Blogs from "@/views/blogs"
import { fetchAllBlogs } from "@/lib/api"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/blogs")
export const revalidate = 3600

export default async function Page() {
  const blogs = await fetchAllBlogs()
  return <Blogs initialBlogs={blogs} />
}

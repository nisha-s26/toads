import BlogDetail from "@/views/blogs/BlogDetail"
import { fetchAllBlogs, fetchBlogBySlug } from "@/lib/api"
import { createBlogMetadata } from "@/lib/next-metadata"

export const revalidate = 3600

export async function generateStaticParams() {
  const blogs = await fetchAllBlogs()
  return blogs.map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return createBlogMetadata(slug)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [blog, allBlogs] = await Promise.all([
    fetchBlogBySlug(slug),
    fetchAllBlogs(),
  ])
  return <BlogDetail slug={slug} initialBlog={blog} initialAllBlogs={allBlogs} />
}

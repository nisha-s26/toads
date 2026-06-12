"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { fetchAllBlogs } from "@/lib/api"
import { ScrollReveal } from "@/components/ScrollReveal"
import type { BlogPost } from "@/views/blogs/blogData"

const PREVIEW_COUNT = 4

export default function HomepageBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const loadBlogs = async () => {
      try {
        const data = await fetchAllBlogs()
        if (!cancelled) setBlogs(data.slice(0, PREVIEW_COUNT))
      } catch (error) {
        console.error("Failed to fetch homepage blogs:", error)
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    loadBlogs()
    return () => {
      cancelled = true
    }
  }, [])

  if (!isLoading && blogs.length === 0) return null

  return (
    <section
      id="homepage-blogs"
      className="homepage-snap-section relative isolate flex flex-col justify-center px-4 py-16 md:py-24 lg:px-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-9xl">
        <ScrollReveal className="mb-12 text-center md:mb-14">
          <p className="text-lg font-bold tracking-[0.35em] section-eyebrow">BLOGS</p>
          <h2 className="mt-4 text-5xl font-extrabold md:text-6xl">
            <span className="text-page-fg">Latest </span>
            <span className="text-toadster-green">Insights</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-page-fg-muted">
            Practical AI, engineering, and product thinking from the Toadster team.
          </p>
        </ScrollReveal>

        {isLoading ? (
          <div className="flex justify-center py-16">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-page-border border-t-toadster-green" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  title={blog.title}
                  className="capability-card-surface group flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative flex aspect-[5/3] w-full items-center justify-center overflow-hidden bg-slate-100">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      title={blog.title}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {blog.category && (
                      <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold text-toadster-green shadow-sm">
                        {blog.category}
                      </span>
                    )}
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col p-4">
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500 transition-colors duration-300 group-hover:text-toadster-green/70">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={11} />
                        {blog.date?.split(",")[0]}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={11} />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-toadster-green">
                      {blog.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-2 transition-colors duration-300 group-hover:text-toadster-green/80">
                      {blog.description}
                    </p>

                    <span className="relative z-10 mt-4 inline-flex items-center gap-1 text-xs font-bold text-black transition-colors duration-300 group-hover:text-toadster-green">
                      Read Article <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        <ScrollReveal className="mt-10 flex justify-center" delay={0.1}>
          <Link
            href="/blogs"
            title="View all blog posts"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-md"
          >
            View All Blogs
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

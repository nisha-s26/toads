"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowRight, Calendar, Clock, User, ArrowUpRight, Brain, Bot, Sparkles, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { fetchAllBlogs } from "@/lib/api"
import type { BlogPost } from "./blogData"

interface BlogsProps {
  initialBlogs?: BlogPost[]
}

export default function Blogs({ initialBlogs = [] }: BlogsProps) {
  const [, setHoveredCard] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(initialBlogs.length > 0)
  const router = useRouter()
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs)
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(initialBlogs.length === 0)

  useEffect(() => {
    if (initialBlogs.length > 0) return

    const fetchBlogs = async () => {
      try {
        setBlogs(await fetchAllBlogs())
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
      } finally {
        setIsLoadingBlogs(false)
        setTimeout(() => setIsLoaded(true), 100)
      }
    }
    fetchBlogs()
  }, [initialBlogs.length])

  const featuredBlog = blogs.length > 0 ? blogs[0] : null
  const featuredBlogs = blogs.slice(1, 4)
  const latestBlogs = blogs.slice(4)



  return (
    <div className="min-h-screen bg-page-bg text-page-fg">

      {/* Resources and Insights Section */}
      <section className="py-12 px-3 sm:px-4 md:px-4 lg:px-5 pt-24 sm:pt-28 md:pt-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-toadster-green/10 via-transparent to-toadster-green/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-toadster-green/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 mt-10">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className={`text-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-toadster-green">
                Resources and Insights
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-page-fg-subtle max-w-4xl mx-auto leading-relaxed px-4">
                Tap into the latest AI innovations and insights from industry experts. Explore our comprehensive collection of articles, whitepapers, and case studies to stay ahead in the rapidly evolving AI landscape. Whether you're a business leader, developer, or enthusiast, our resources offer valuable knowledge and practical guidance to help you harness the power of artificial intelligence.
              </p>
            </div>
          </div>

          {/* Featured Blog Card */}
          {isLoadingBlogs ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-toadster-green"></div>
            </div>
          ) : featuredBlog ? (
            <div
              className={`theme-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-700 group border cursor-pointer transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '200ms' }}
              onClick={() => router.push(`/blogs/${featuredBlog.slug}`)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="relative overflow-hidden rounded-xl group bg-page-bg-deep flex items-center justify-center">
                  <Image
                    src={featuredBlog?.image ?? ""}
                    alt={featuredBlog?.title ?? ""}
                    title={featuredBlog?.title}
                    width={800}
                    height={320}
                    priority
                    referrerPolicy="no-referrer"
                    className="h-48 w-full object-contain sm:h-56 md:h-80"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-page-fg-subtle mb-3 sm:mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span className="hidden sm:inline">{featuredBlog?.date}</span>
                      <span className="sm:hidden">{featuredBlog?.date?.split(',')[0]}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {featuredBlog?.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      <span className="truncate max-w-[120px] sm:max-w-none">{featuredBlog?.author}</span>
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-toadster-green transition-colors duration-300">
                    {featuredBlog?.title}
                  </h2>
                  <p className="text-sm sm:text-base text-page-fg-subtle mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {featuredBlog?.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      className="flex items-center justify-center gap-2 bg-[#1C3829] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:shadow-lg hover:shadow-toadster-green/25 transition-all duration-300 group text-sm sm:text-base"
                      title="Read More"
                      onClick={(e) => { e.stopPropagation(); router.push(`/blogs/${featuredBlog?.slug}`) }}
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button
                      className="flex items-center justify-center gap-2 border border-page-border-strong text-page-fg px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:border-toadster-green hover:text-toadster-green hover:bg-page-accent-soft transition-all duration-300 text-sm sm:text-base"
                      title="Explore More"
                      onClick={(e) => { e.stopPropagation(); router.push(`/blogs/${featuredBlog?.slug}`) }}
                    >
                      Explore More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-page-fg-subtle">No blogs found.</div>
          )}
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-4 lg:px-5 relative">
        <div className="absolute inset-0 bg-gradient-to-bl from-toadster-green/5 via-transparent to-toadster-green/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-toadster-green/3 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>Featured Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {featuredBlogs.map((blog, index) => (
              <div
                key={index}
                className={`group relative theme-card rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border hover:border-toadster-green/40 hover:shadow-toadster-green/10 cursor-pointer transform transition-all duration-500 hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(`featured-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push(`/blogs/${blog.slug}`)}
              >
                {/* Image Layer */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-page-bg-deep">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    title={blog.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-md group-hover:brightness-50"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Category badge — always visible */}
                  {blog.category && (
                    <div className="absolute top-3 left-3 z-20 transition-opacity duration-300 group-hover:opacity-0">
                      <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-toadster-green text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-md shadow-black/30 ring-1 ring-black/5">
                        {blog.category}
                      </span>
                    </div>
                  )}

                  {/* Minimal title strip — visible at rest, fades on hover */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs text-white/80 mb-1.5">
                      <span>{blog.date?.split(',')[0]}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>

                  {/* Hover Overlay — full content */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/85 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 sm:p-5">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex items-center gap-2 text-[11px] sm:text-xs text-white/80 mb-2">
                        <Calendar size={12} className="text-toadster-green" />
                        <span>{blog.date}</span>
                        <span>•</span>
                        <Clock size={12} className="text-toadster-green" />
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-2 text-white line-clamp-2 group-hover:text-toadster-green transition-colors duration-300">
                        {blog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/75 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                        {blog.description}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-toadster-green rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-[9px] sm:text-xs font-bold">
                            {blog.author?.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-medium text-white truncate">{blog.author}</p>
                          {blog.authorRole && <p className="text-[10px] sm:text-xs text-white/70 truncate">{blog.authorRole}</p>}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-2">
                        <button
                          className="inline-flex items-center gap-1.5 text-xs bg-toadster-green text-white px-3 py-1.5 rounded-full hover:shadow-lg hover:shadow-toadster-green/30 transition-all duration-300 font-medium"
                          title="Read More"
                          onClick={(e) => { e.stopPropagation(); router.push(`/blogs/${blog.slug}`) }}
                        >
                          Read More
                          <ArrowRight size={12} />
                        </button>
                        <button
                          className="text-xs border border-page-border-strong text-page-fg px-3 py-1.5 rounded-full hover:border-toadster-green hover:text-toadster-green hover:bg-page-fg/5 transition-all duration-300"
                          title="Explore More"
                          onClick={(e) => { e.stopPropagation(); router.push(`/blogs/${blog.slug}`) }}
                        >
                          Explore More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Latest Blogs Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-4 lg:px-5 relative">
        <div className="absolute inset-0 bg-gradient-to-tl from-toadster-green/8 via-transparent to-toadster-green/8"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-toadster-green/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>Latest Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {latestBlogs.map((blog, index) => (
              <div
                key={index}
                className={`theme-card rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 group border hover:shadow-toadster-green/10 hover:scale-105 cursor-pointer transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(`latest-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push(`/blogs/${blog.slug}`)}
              >
                <div className="h-44 sm:h-48 md:h-52 bg-page-bg-deep flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    title={blog.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-page-fg-subtle mb-3">
                    <span className="hidden sm:inline">{blog.date}</span>
                    <span className="sm:hidden">{blog.date?.split(',')[0]}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold mb-3 group-hover:text-toadster-green transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-page-fg-subtle mb-4 line-clamp-2 sm:line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Author Information */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-toadster-green rounded-full flex items-center justify-center">
                      <span className="text-white text-[8px] sm:text-xs font-bold">
                        {blog.author?.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-page-fg truncate">{blog.author}</p>
                      {blog.authorRole && <p className="text-xs text-page-fg-muted truncate hidden sm:block">{blog.authorRole}</p>}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="text-xs bg-[#1C3829] text-white px-2 sm:px-3 py-1 rounded-full hover:shadow-lg transition-all duration-300"
                      title="Read More"
                      onClick={(e) => { e.stopPropagation(); router.push(`/blogs/${blog.slug}`) }}
                    >
                      Read More
                    </button>
                    <button
                      className="text-xs border border-page-border-strong text-page-fg-muted px-2 sm:px-3 py-1 rounded-full hover:border-toadster-green hover:text-toadster-green hover:bg-page-accent-soft transition-all duration-300"
                      title="Explore More"
                      onClick={(e) => { e.stopPropagation(); router.push(`/blogs/${blog.slug}`) }}
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Services & CTA */}
      <section className="py-16 sm:py-20 px-3 sm:px-4 md:px-4 lg:px-5 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-toadster-green/8 via-transparent to-toadster-green/8"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm sm:text-xl tracking-[0.25em] text-toadster-green font-bold uppercase mb-3">
              Put Insights to Work
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-page-fg">
              Explore Our AI Services
            </h2>
            <p className="text-page-fg-subtle mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Turn ideas from the blog into production-ready AI solutions for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Brain,
                title: "Agentic AI",
                desc: "Autonomous agents for enterprise workflows.",
                to: "/services/agentic-ai",
              },
              {
                icon: Sparkles,
                title: "Generative AI",
                desc: "Content, copy, and code generation at scale.",
                to: "/services/generative-ai",
              },
              {
                icon: Bot,
                title: "AI Chatbots",
                desc: "Intelligent conversational interfaces.",
                to: "/services/ai-chatbots",
              },
              {
                icon: MessageCircle,
                title: "Talk to Us",
                desc: "Have a project in mind? Let's design it together.",
                to: "/contact",
              },
            ].map(({ icon: Icon, title, desc, to }) => (
              <Link
                key={title}
                href={to}
                title={title}
                className="group flex h-full items-start gap-4 rounded-2xl border border-page-border bg-page-card p-5 shadow-sm hover:border-toadster-green/40 hover:-translate-y-0.5 hover:bg-page-accent-soft transition-all"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-toadster-green/10 text-toadster-green">
                  <Icon size={18} />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-page-fg font-semibold group-hover:text-toadster-green transition-colors">
                      {title}
                    </p>
                    <ArrowUpRight size={16} className="text-page-fg-muted group-hover:text-toadster-green transition-colors" />
                  </div>
                  <p className="text-page-fg-muted text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}

import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { ArrowUpRight, BookOpen, Compass } from "lucide-react"
import type { BlogPost } from "@/pages/blogs/blogData"
import { allBlogs } from "@/pages/blogs/blogData"
import {
  getRelatedBlogsForBlog,
  getRelatedBlogsForService,
  getRelatedServices,
  getRelatedServicesForBlog,
  getServiceByPath,
  type ServiceMeta,
} from "@/config/internalLinks"

interface RelatedLinksData {
  services: ServiceMeta[]
  blogs: BlogPost[]
}

function getDataForPath(pathname: string): RelatedLinksData | null {
  const service = getServiceByPath(pathname)
  if (service) {
    return {
      services: getRelatedServices(service),
      blogs: getRelatedBlogsForService(service.slug),
    }
  }

  if (pathname.startsWith("/blogs/") && pathname !== "/blogs") {
    const slug = pathname.slice("/blogs/".length)
    const blog = allBlogs.find((post) => post.slug === slug)
    if (!blog) return null
    return {
      services: getRelatedServicesForBlog(blog),
      blogs: getRelatedBlogsForBlog(slug),
    }
  }

  return null
}

export function RelatedLinks() {
  const { pathname } = useLocation()
  const data = getDataForPath(pathname)
  if (!data) return null
  if (data.services.length === 0 && data.blogs.length === 0) return null

  return (
    <section
      aria-labelledby="related-links-heading"
      className="bg-page-bg border-t border-page-border py-16 sm:py-20 px-3 sm:px-4 lg:px-5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-12 text-center">
          <p className="text-sm sm:text-xl font-semibold tracking-[0.25em] text-toadster-green uppercase mb-3">
            Keep Exploring
          </p>
          <h2
            id="related-links-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-page-fg"
          >
            Related services &amp; reading
          </h2>
        </div>

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-5">
          {data.services.length > 0 && (
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-5 sm:mb-6">
                <Compass size={18} className="text-toadster-green" />
                <h3 className="text-base sm:text-lg font-semibold text-page-fg">
                  Related services
                </h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {data.services.map((service) => {
                  const Icon = service.icon
                  return (
                    <li key={service.slug}>
                      <Link
                        to={service.path}
                        title={service.title}
                        className="group flex h-full items-start gap-3 sm:gap-4 rounded-2xl border border-page-border bg-page-card p-4 sm:p-5 transition-all hover:border-toadster-green/50 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_rgba(74,222,128,0.25)]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-toadster-green/10 text-toadster-green">
                          <Icon size={18} />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className="font-semibold text-sm sm:text-base text-page-fg group-hover:text-toadster-green transition-colors">
                              {service.shortTitle}
                            </p>
                            <ArrowUpRight
                              size={16}
                              className="text-gray-500 group-hover:text-toadster-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                            />
                          </div>
                          <p className="mt-1 text-xs sm:text-sm text-page-fg-muted leading-snug line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {data.blogs.length > 0 && (
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-5 sm:mb-6">
                <BookOpen size={18} className="text-toadster-green" />
                <h3 className="text-base sm:text-lg font-semibold text-page-fg">
                  From the blog
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {data.blogs.map((blog) => (
                  <li key={blog.slug}>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      title={blog.title}
                      className="group flex gap-3 sm:gap-4 rounded-2xl border border-page-border bg-page-card p-3 sm:p-4 transition-all hover:border-toadster-green/50 hover:-translate-y-0.5"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-black/30">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          title={blog.title}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        {blog.category && (
                          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-wide text-toadster-green uppercase mb-1">
                            {blog.category}
                          </span>
                        )}
                        <p className="text-sm sm:text-base font-semibold text-page-fg group-hover:text-toadster-green transition-colors line-clamp-2 leading-snug">
                          {blog.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {blog.readTime}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/blogs"
                title="View all blog posts"
                className="mt-5 sm:mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-toadster-green hover:gap-2 transition-all"
              >
                View all articles
                <ArrowUpRight size={15} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

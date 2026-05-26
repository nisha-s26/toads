import { useParams, useNavigate, Link } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, User, Tag, Twitter, Linkedin, Facebook, ArrowRight, ChevronRight, MessageCircle, ThumbsUp, ChevronDown, HelpCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { allBlogs, type BlogFaq } from "./blogData"
import { staticComments } from "./commentsData"

function FaqAccordion({ items }: { items: BlogFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
            className={`bg-gray-900/50 border rounded-2xl overflow-hidden transition-colors ${
              isOpen ? "border-toadster-green/40" : "border-gray-800 hover:border-gray-700"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-toadster-green/10 text-toadster-green text-xs sm:text-sm font-bold border border-toadster-green/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`font-semibold text-base sm:text-lg leading-snug transition-colors ${
                  isOpen ? "text-toadster-green" : "text-white group-hover:text-toadster-green"
                }`}>
                  {item.question}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`shrink-0 transition-colors ${
                  isOpen ? "text-toadster-green" : "text-gray-400 group-hover:text-toadster-green"
                }`}
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-5 pl-[3.25rem] sm:pl-[4.25rem]">
                    <div className="h-px w-full bg-gradient-to-r from-toadster-green/40 via-toadster-green/10 to-transparent mb-4" />
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)

  const getInitials = (name: string) =>
    name.split(' ').map((w: string) => w[0]).join('').toUpperCase().slice(0, 2)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const blog = slug ? allBlogs.find((b) => b.slug === slug) : null

  // Helper function to get blog date
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getBlogDate = (blog: any) => {
    return blog.date || 'Unknown date'
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#050d18] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/blogs")}
            className="bg-[#1C3829] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    )
  }

  const relatedBlogs = allBlogs.filter((b) => b.slug !== slug && b.category === blog.category).slice(0, 3)
  const otherBlogs = allBlogs.filter((b) => b.slug !== slug).slice(0, 3 - relatedBlogs.length)
  const suggestedBlogs = [...relatedBlogs, ...otherBlogs].slice(0, 3)

  const contentParagraphs = blog.content
    ? blog.content
        .trim()
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
    : []

  return (
    <div className="min-h-screen bg-[#050d18] text-white">

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-toadster-green/10 via-transparent to-toadster-green/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-toadster-green/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-toadster-green/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm text-gray-300 mb-8 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <Link to="/" title="Home" className="hover:text-toadster-green transition-colors duration-200">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link to="/blogs" title="Blogs" className="hover:text-toadster-green transition-colors duration-200">Blogs</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-toadster-green font-medium line-clamp-1">{blog.title}</span>
          </nav>

          {/* Back Button */}
          <button
            onClick={() => navigate("/blogs")}
            className={`flex items-center gap-2 text-toadster-green font-medium mb-8 group hover:gap-3 transition-all duration-300 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Blogs
          </button>

          {/* Category Badge */}
          {blog.category && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 bg-toadster-green/10 text-toadster-green text-sm font-semibold px-4 py-1.5 rounded-full border border-toadster-green/20">
                <Tag size={13} />
                {blog.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            {blog.title}
          </h1>

          {/* Description */}
          <p className={`text-lg text-gray-200 mb-8 leading-relaxed max-w-3xl transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
            {blog.description}
          </p>

          {/* Meta Row */}
          <div className={`flex flex-wrap items-center gap-6 text-sm text-gray-300 border-y border-gray-700 py-5 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-toadster-green rounded-full flex items-center justify-center">
                <User size={14} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{blog.author}</p>
                {blog.authorRole && <p className="text-xs text-gray-300">{blog.authorRole}</p>}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={15} className="text-toadster-green" />
              <span>{getBlogDate(blog)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={15} className="text-toadster-green" />
              <span>{blog.readTime}</span>
            </div>

            {/* Share */}
            <div className="ml-auto flex items-center gap-3">
              <span className="text-xs text-gray-400 font-medium">Share:</span>
              <a 
                href="https://x.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Share on Twitter"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-toadster-green hover:text-white transition-all duration-200 text-gray-300"
              >
                <Twitter size={14} />
              </a>
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-toadster-green hover:text-white transition-all duration-200 text-gray-300"
              >
                <Linkedin size={14} />
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Share on Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-toadster-green hover:text-white transition-all duration-200 text-gray-300"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-3 sm:px-4 md:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-48 sm:h-56 md:h-72 lg:h-[420px] relative overflow-hidden group">
              <img
                src={blog.image}
                alt={blog.title}
                title={blog.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
            {blog.category && (
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-toadster-green text-xs font-bold px-3 py-1.5 rounded-full">
                  {blog.category}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-3 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                {contentParagraphs.map((line, index) => {
                  if (line.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="text-xl sm:text-2xl font-bold text-white mt-8 sm:mt-10 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-700 first:mt-0"
                      >
                        {line.replace("## ", "")}
                      </h2>
                    )
                  }
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <p key={index} className="font-bold text-white mt-3 sm:mt-4 mb-1 text-sm sm:text-base">
                        {line.replace(/\*\*/g, "")}
                      </p>
                    )
                  }
                  if (line.startsWith("**")) {
                    const parts = line.split(/\*\*(.*?)\*\*/)
                    return (
                      <p key={index} className="text-gray-300 leading-relaxed mb-4">
                        {parts.map((part, i) =>
                          i % 2 === 1 ? (
                            <strong key={i} className="text-white font-semibold">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    )
                  }
                  return (
                    <p key={index} className="text-gray-300 leading-relaxed mb-4 text-base">
                      {line}
                    </p>
                  )
                })}
            </article>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className={`mt-12 pt-8 border-t border-gray-700 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1600ms' }}>
                <p className="text-sm font-semibold text-gray-300 mb-3 transition-all duration-1000 transform opacity-0 translate-y-8" style={{ transitionDelay: '1800ms' }}>Tags</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 bg-gray-800 border border-gray-700 text-gray-300 text-sm px-3 py-1.5 rounded-full hover:border-toadster-green hover:text-toadster-green hover:bg-toadster-green/10 transition-all duration-200 cursor-pointer"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Card */}
            <div className={`mt-10 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2000ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-toadster-green rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-lg">{blog.author}</p>
                  {blog.authorRole && <p className="text-xs text-gray-300">{blog.authorRole}</p>}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {blog.author} is a {blog.authorRole || 'expert contributor'} at Toadsters, specializing in {blog.category || 'AI and emerging technologies'}. Bringing practical insights and cutting-edge knowledge to help businesses navigate the {blog.category || 'AI'} landscape.
                  </p>
                </div>
              </div>
            </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Article Info Card */}
              <div className={`bg-gray-900/50 p-6 rounded-2xl border border-gray-800 sticky top-28 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1200ms' }}>
                <h3 className="font-bold text-white mb-4 text-lg" >Article Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-8 h-8 bg-[#015d19]/20 rounded-lg flex items-center justify-center">
                      <Calendar size={14} className="text-[#015d19]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Published</p>
                      <p className="font-medium text-gray-300">{getBlogDate(blog)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-8 h-8 bg-[#015d19]/20 rounded-lg flex items-center justify-center">
                      <Clock size={14} className="text-[#015d19]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Read Time</p>
                      <p className="font-medium text-gray-300">{blog.readTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-8 h-8 bg-[#015d19]/20 rounded-lg flex items-center justify-center">
                      <User size={14} className="text-[#015d19]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Author</p>
                      <p className="font-medium text-gray-300">{blog.author}</p>
                    </div>
                  </div>
                  {blog.category && (
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-8 h-8 bg-[#015d19]/20 rounded-lg flex items-center justify-center">
                        <Tag size={14} className="text-[#015d19]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Category</p>
                        <p className="font-medium text-gray-300">{blog.category}</p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {blog.faqs && blog.faqs.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-toadster-green/10 via-transparent to-toadster-green/5"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-toadster-green/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-toadster-green/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8 sm:mb-10"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-toadster-green to-[#0a7d2b] rounded-xl flex items-center justify-center shadow-lg shadow-toadster-green/20">
                <HelpCircle size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                  Quick answers to common questions about this topic
                </p>
              </div>
            </motion.div>

            <FaqAccordion items={blog.faqs} />
          </div>
        </section>
      )}

      {/* Related Articles */}
      {suggestedBlogs.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#015d19]/10 via-transparent to-[#0a7d2b]/10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-white">Related Articles</h2>
                <p className="text-gray-400 text-sm mt-1">Continue reading more insights</p>
              </div>
              <Link
                to="/blogs"
                title="View All Blogs"
                className="hidden md:flex items-center gap-2 text-[#015d19] font-medium text-sm hover:gap-3 transition-all duration-300 group"
              >
                View All Blogs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {suggestedBlogs.map((relatedBlog, index) => (
                <Link
                  key={relatedBlog.slug}
                  to={`/blogs/${relatedBlog.slug}`}
                  title={relatedBlog.title}
                  className={`bg-gray-900/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-800 hover:border-[#015d19]/20 hover:-translate-y-1 block transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${2800 + index * 100}ms` }}
                >
                  <div className="h-36 relative overflow-hidden flex items-center justify-center">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      title={relatedBlog.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {relatedBlog.category && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 text-[#015d19] text-xs font-bold px-2 py-0.5 rounded-full">
                          {relatedBlog.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                      <Calendar size={11} />
                      <span>{getBlogDate(relatedBlog)}</span>
                      <span>•</span>
                      <Clock size={11} />
                      <span>{relatedBlog.readTime}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#015d19] transition-colors duration-200 line-clamp-2 mb-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                      {relatedBlog.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[#015d19] text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                      Read More
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                to="/blogs"
                title="View All Blogs"
                className="inline-flex items-center gap-2 text-[#015d19] font-medium text-sm border border-[#015d19]/30 px-5 py-2.5 rounded-full hover:bg-[#015d19] hover:text-white transition-all duration-300"
              >
                View All Blogs
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Comments Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#015d19]/5 via-transparent to-[#0a7d2b]/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">

          {/* Section Header */}
          {slug && staticComments[slug] && staticComments[slug].length > 0 && (
            <>
              <div className={`flex items-center gap-3 mb-10 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="w-10 h-10 bg-gradient-to-br from-[#015d19] to-[#0a7d2b] rounded-xl flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Comments</h2>
                  <p className="text-gray-400 text-sm">{staticComments[slug].length} {staticComments[slug].length === 1 ? 'comment' : 'comments'}</p>
                </div>
              </div>

              {/* Static Comments List */}
              <div className="space-y-5">
                {staticComments[slug].map((comment, index) => (
                  <div
                    key={comment.id}
                    className={`bg-gray-900/50 border border-gray-800 rounded-2xl p-5 hover:border-gray-700/60 transition-all duration-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-10 h-10 bg-gradient-to-br from-[#015d19] to-[#0a7d2b] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                        {getInitials(comment.name)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-semibold text-white text-sm">{comment.name}</span>
                          {comment.role && (
                            <span className="text-[#015d19] text-xs font-medium bg-[#015d19]/10 px-2 py-0.5 rounded-full">{comment.role}</span>
                          )}
                        </div>
                        <p className="text-gray-500 text-xs mb-3">{comment.date}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{comment.message}</p>
                        <div className="mt-3 flex items-center gap-1.5 text-gray-500 text-xs">
                          <ThumbsUp size={12} className="fill-gray-600 text-gray-600" />
                          <span>{comment.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#015d19] to-[#0a7d2b] rounded-2xl p-10 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Your Business with AI?</h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                Explore how Toadsters can help you harness the power of artificial intelligence to drive growth, efficiency, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  title="Get Started Today"
                  className="bg-white text-[#015d19] px-7 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services/agentic-ai"
                  title="Explore Services"
                  className="border border-white/50 text-white px-7 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState, useEffect } from "react"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { featuredBlog, featuredBlogs, latestBlogs } from "./blogData"

export default function Blogs() {
  const [, setHoveredCard] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])



  return (
    <div className="min-h-screen bg-[#050d18] text-white">

      {/* Resources and Insights Section */}
      <section className="py-12 px-3 sm:px-4 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-toadster-green/10 via-transparent to-toadster-green/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-toadster-green/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 mt-10">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className={`text-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-toadster-green">
                Resources and Insights
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
                Tap into the latest AI innovations and insights from industry experts. Explore our comprehensive collection of articles, whitepapers, and case studies to stay ahead in the rapidly evolving AI landscape. Whether you're a business leader, developer, or enthusiast, our resources offer valuable knowledge and practical guidance to help you harness the power of artificial intelligence.
              </p>
            </div>
          </div>

          {/* Featured Blog Card */}
          <div
            className={`bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-700 group border border-gray-800 cursor-pointer transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '200ms' }}
            onClick={() => navigate(`/blogs/${featuredBlog.slug}`)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative overflow-hidden rounded-xl group">
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span className="hidden sm:inline">{featuredBlog.date}</span>
                    <span className="sm:hidden">{featuredBlog.date.split(',')[0]}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {featuredBlog.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={14} />
                    <span className="truncate max-w-[120px] sm:max-w-none">{featuredBlog.author}</span>
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-toadster-green transition-colors duration-300">
                  {featuredBlog.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {featuredBlog.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    className="flex items-center justify-center gap-2 bg-[#1C3829] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:shadow-lg hover:shadow-toadster-green/25 transition-all duration-300 group text-sm sm:text-base"
                    onClick={(e) => { e.stopPropagation(); navigate(`/blogs/${featuredBlog.slug}`) }}
                  >
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 border border-gray-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:border-toadster-green hover:text-toadster-green transition-all duration-300 text-sm sm:text-base"
                    onClick={(e) => { e.stopPropagation(); navigate(`/blogs/${featuredBlog.slug}`) }}
                  >
                    Explore More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-bl from-toadster-green/5 via-transparent to-toadster-green/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-toadster-green/3 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>Featured Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {featuredBlogs.map((blog, index) => (
              <div
                key={index}
                className={`bg-gray-900/50 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-700 group border border-gray-800 hover:shadow-toadster-green/10 hover:scale-105 cursor-pointer transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(`featured-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/blogs/${blog.slug}`)}
              >
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 relative overflow-hidden rounded-lg flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                      <span className="hidden sm:inline">{blog.date}</span>
                      <span className="sm:hidden">{blog.date.split(',')[0]}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-semibold mb-2 group-hover:text-toadster-green transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    
                    {/* Author Information */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-toadster-green rounded-full flex items-center justify-center">
                        <span className="text-white text-[8px] sm:text-xs font-bold">
                          {blog.author.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-white truncate">{blog.author}</p>
                        {blog.authorRole && <p className="text-xs text-gray-400 truncate hidden sm:block">{blog.authorRole}</p>}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        className="text-xs bg-[#1C3829] text-white px-2 sm:px-3 py-1 rounded-full hover:shadow-lg transition-all duration-300"
                        onClick={(e) => { e.stopPropagation(); navigate(`/blogs/${blog.slug}`) }}
                      >
                        Read More
                      </button>
                      <button
                        className="text-xs border border-gray-600 text-gray-200 px-2 sm:px-3 py-1 rounded-full hover:border-toadster-green hover:text-toadster-green transition-all duration-300"
                        onClick={(e) => { e.stopPropagation(); navigate(`/blogs/${blog.slug}`) }}
                      >
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Latest Blogs Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-tl from-toadster-green/8 via-transparent to-toadster-green/8"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-toadster-green/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>Latest Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {latestBlogs.map((blog, index) => (
              <div
                key={index}
                className={`bg-gray-900/50 rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 group border border-gray-800 hover:shadow-toadster-green/10 hover:scale-105 cursor-pointer transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(`latest-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/blogs/${blog.slug}`)}
              >
                <div className="h-40 sm:h-44 md:h-48 bg-white flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
                    <span className="hidden sm:inline">{blog.date}</span>
                    <span className="sm:hidden">{blog.date.split(',')[0]}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold mb-3 group-hover:text-toadster-green transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 mb-4 line-clamp-2 sm:line-clamp-3">
                    {blog.description}
                  </p>
                  
                  {/* Author Information */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-toadster-green rounded-full flex items-center justify-center">
                      <span className="text-white text-[8px] sm:text-xs font-bold">
                        {blog.author.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-white truncate">{blog.author}</p>
                      {blog.authorRole && <p className="text-xs text-gray-400 truncate hidden sm:block">{blog.authorRole}</p>}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      className="text-xs bg-[#1C3829] text-white px-2 sm:px-3 py-1 rounded-full hover:shadow-lg transition-all duration-300"
                      onClick={(e) => { e.stopPropagation(); navigate(`/blogs/${blog.slug}`) }}
                    >
                      Read More
                    </button>
                    <button
                      className="text-xs border border-gray-300 text-gray-600 px-2 sm:px-3 py-1 rounded-full hover:border-toadster-green hover:text-toadster-green transition-all duration-300"
                      onClick={(e) => { e.stopPropagation(); navigate(`/blogs/${blog.slug}`) }}
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


    </div>
  )
}

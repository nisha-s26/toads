"use client"

import { useEffect, useState, useTransition } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Clock,
  Cpu,
  Heart,
  Info,
  MapPin,
  Search,
  Target,
  Users,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import JobApplicationModal from "@/components/JobApplicationModal"
import type { JobPosition, JobsPagination } from "@/lib/jobs"

type CareersProps = {
  initialJobs: JobPosition[]
  pagination: JobsPagination
  filters: {
    search: string
    status: string
  }
}

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented individuals who share your passion for AI and technology.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote options, and a supportive environment.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Access to conferences, training programs, and the latest tools and technologies.",
  },
]

const exploreLinks = [
  {
    icon: Cpu,
    title: "Services",
    desc: "From agentic systems to custom ML - see what our teams ship.",
    to: "/services",
  },
  {
    icon: BookOpen,
    title: "Blogs",
    desc: "Tutorials, research notes, and insights from our engineers.",
    to: "/blogs",
  },
  {
    icon: Info,
    title: "About Us",
    desc: "Our mission, values, and the people leading the company.",
    to: "/about",
  },
]

function stripHtml(value?: string): string {
  if (!value) return ""
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
}

function buildPageHref(page: number, filters: CareersProps["filters"]): string {
  const params = new URLSearchParams()
  if (page > 1) params.set("page", String(page))
  if (filters.search) params.set("search", filters.search)
  const query = params.toString()
  return query ? `/careers?${query}` : "/careers"
}

function buildSearchHref(search: string): string {
  const params = new URLSearchParams()
  const trimmedSearch = search.trim()
  if (trimmedSearch) params.set("search", trimmedSearch)
  const query = params.toString()
  return query ? `/careers?${query}` : "/careers"
}

export default function Careers({ initialJobs, pagination, filters }: CareersProps) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<{ id?: string; title: string; hrEmail?: string }>({ title: "" })
  const [searchTerm, setSearchTerm] = useState(filters.search)
  const [isPending, startTransition] = useTransition()
  const activeJobs = initialJobs.filter((job) => job.isActive !== false)
  const hasJobs = activeJobs.length > 0
  const currentPage = pagination.page || 1
  const totalPages = pagination.pages || 1

  useEffect(() => {
    if (searchTerm.trim() === filters.search.trim()) return

    const timeoutId = window.setTimeout(() => {
      startTransition(() => {
        router.replace(buildSearchHref(searchTerm), { scroll: false })
      })
    }, 350)

    return () => window.clearTimeout(timeoutId)
  }, [filters.search, router, searchTerm])

  const openModal = (jobTitle: string, jobId?: string, hrEmail?: string) => {
    setSelectedJob({ id: jobId, title: jobTitle, hrEmail })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedJob({ title: "" })
  }

  return (
    <div className="min-h-screen overflow-x-clip pt-20">
      <section className="mx-auto flex w-[90%] max-w-7xl flex-col items-center pb-8 pt-16 text-center">
        <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-black dark:text-white">Build the </span>
          <span className="text-toadster-green">Future</span>
          <span className="text-black dark:text-white"> with Us</span>
        </h1>
   
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto w-[90%] max-w-7xl">

          <div className="grid min-w-0 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-0 rounded-xl border border-page-border bg-white/5 p-5 text-center sm:p-6"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-toadster-green/10 text-toadster-green">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-page-fg">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-page-fg-muted">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto w-[85%]">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-black dark:text-white">Current </span>
              <span className="text-toadster-green">Opportunities</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-page-fg-subtle sm:text-lg">
              Browse active roles from our hiring API and apply for the position that fits your skills.
            </p>
          </div>

          <div className="mb-8 rounded-2xl border border-page-border bg-page-card/80 shadow-sm backdrop-blur">
            <label className="relative block min-w-0">
              <span className="sr-only">Search jobs</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-page-fg-muted" />
              <Input
                name="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search jobs..."
                className="h-12 rounded-xl border-page-border bg-white/80 pl-11 pr-24 text-sm shadow-inner dark:bg-white/5 sm:text-base"
              />
              {isPending ? (
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-page-fg-muted">
                  Searching...
                </span>
              ) : null}
            </label>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold text-page-fg">Open Positions ({pagination.total})</h3>
            <p className="text-sm text-page-fg-muted">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          {hasJobs ? (
            <div className="mx-auto flex w-full flex-col gap-5 sm:gap-6">
              {activeJobs.map((job, index) => {
                const excerpt = stripHtml(job.summary)
                return (
                  <motion.article
                    key={job._id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    role="link"
                    tabIndex={0}
                    onClick={() => router.push(`/careers/${job._id}`)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        router.push(`/careers/${job._id}`)
                      }
                    }}
                    className="group isolate relative flex w-full min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl border border-toadster-green/25 bg-gradient-to-r from-toadster-green/12 via-emerald-50/50 to-white/80 px-4 py-5 shadow-sm transition-shadow duration-300 hover:shadow-md dark:from-toadster-green/20 dark:via-toadster-green/8 dark:to-transparent sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6"
                  >
                    <div className="relative z-10 flex min-w-0 flex-1 items-center gap-4 lg:gap-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-toadster-green/15 text-toadster-green sm:h-12 sm:w-12">
                        <BriefcaseBusiness size={18} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
                          <h3 className="text-xl font-bold text-page-fg transition-colors group-hover:text-toadster-green sm:text-2xl">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-page-fg-muted">
                            {job.employmentType ? <span>{job.employmentType}</span> : null}
                            <span>Active</span>
                          </div>
                        </div>

                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-page-fg-subtle sm:mt-3 sm:text-base">
                          {excerpt || "View the full role details and apply for this position."}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-page-fg-muted sm:mt-4">
                          {job.location ? (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 shrink-0" />
                              <span>{job.location}</span>
                            </div>
                          ) : null}
                          {job.experience ? (
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 shrink-0" />
                              <span>{job.experience}</span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="relative z-20 flex shrink-0 lg:ml-2 lg:justify-end">
                      <Button
                        onClick={(event) => {
                          event.stopPropagation()
                          openModal(job.title, job._id, job.hrEmail)
                        }}
                        className="h-11 w-full min-w-[9.5rem] px-6 sm:w-auto"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-page-border bg-page-card/70 p-8 text-center">
              <h3 className="text-xl font-bold text-page-fg">No positions found</h3>
              <p className="mt-2 text-page-fg-muted">Try changing your search filters or check back later.</p>
            </div>
          )}

          {totalPages > 1 ? (
            <div className="mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <Button asChild variant="outline" className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}>
                <Link href={buildPageHref(Math.max(1, currentPage - 1), filters)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Link>
              </Button>
              <span className="text-sm text-page-fg-muted">
                Showing {activeJobs.length} of {pagination.total} roles
              </span>
              <Button asChild variant="outline" className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}>
                <Link href={buildPageHref(Math.min(totalPages, currentPage + 1), filters)}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </section>

      {/* <section className="py-12 sm:py-20">
        <div className="mx-auto w-[90%] max-w-9xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="text-black dark:text-white">Ready to Join Our </span>
            <span className="text-toadster-green">Team?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-page-fg-subtle sm:text-lg">
            Don&apos;t see a position that matches your skills? Send us your resume and let&apos;s discuss future opportunities.
          </p>

          <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button onClick={() => openModal("General Application")} className="w-full px-8 py-5 sm:w-auto">
              <Mail className="mr-2 h-5 w-5" />
              Send Resume
            </Button>
            <Button asChild variant="outline" className="w-full px-8 py-5 sm:w-auto">
              <Link href="/about" title="Learn more about Toadster">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="mt-12 border-t border-page-border pt-8">
            <p className="text-sm text-page-fg-muted">
              Questions about careers at Toadster? Contact us at{" "}
              <a href="mailto:business@toadsters.com" className="text-toadster-green hover:underline">
                business@toadsters.com
              </a>
            </p>
          </div>
        </div>
      </section> */}

      <section className="pb-12 sm:pb-20">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-2xl font-bold md:text-5xl">
              <span className="text-black dark:text-white">Before You </span>
              <span className="text-toadster-green">Apply</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-page-fg-muted">
              See what we build, who we are, and how we share what we learn.
            </p>
          </div>
          <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {exploreLinks.map(({ icon: Icon, title, desc, to }) => (
              <Link
                key={title}
                href={to}
                title={title}
                className="group flex h-full items-start gap-4 rounded-2xl border border-page-border bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-toadster-green/40 hover:bg-white/[0.05]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-toadster-green/10 text-toadster-green">
                  <Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-page-fg transition-colors group-hover:text-toadster-green">{title}</p>
                    <ArrowUpRight size={16} className="text-gray-500 transition-colors group-hover:text-toadster-green" />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-page-fg-muted">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        jobTitle={selectedJob.title}
        jobId={selectedJob.id}
        hrEmail={selectedJob.hrEmail}
      />
    </div>
  )
}

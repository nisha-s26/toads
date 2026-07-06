"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BriefcaseBusiness, CalendarDays, Clock, GraduationCap, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import JobApplicationModal from "@/components/JobApplicationModal"
import type { JobPosition } from "@/lib/jobs"

export function JobDetail({ job }: { job: JobPosition }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-x-clip pt-24">
      <main className="mx-auto w-[85%] max-w-9xl pb-16 pt-8 sm:pb-24">
        <Link
          href="/careers"
          title="Back to all careers"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-page-fg-muted transition-colors hover:text-toadster-green"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all jobs
        </Link>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="min-w-0 overflow-hidden rounded-2xl border border-page-border bg-page-card shadow-sm">
            <header className="border-b border-page-border p-5 sm:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-toadster-green/10 px-3 py-1 text-sm font-semibold text-toadster-green">
                <BriefcaseBusiness className="h-4 w-4" />
                {job.isActive === false ? "Closed Position" : "Open Position"}
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-page-fg sm:text-4xl md:text-5xl">
                {job.title}
              </h1>
              <div className="mt-5 grid gap-3 text-sm text-page-fg-muted sm:grid-cols-2">
                {job.location ? (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                ) : null}
                {job.employmentType ? (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0" />
                    <span>{job.employmentType}</span>
                  </div>
                ) : null}
                {job.experience ? (
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 shrink-0" />
                    <span>{job.experience}</span>
                  </div>
                ) : null}
                {job.graduationYear ? (
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    <span>{job.graduationYear}</span>
                  </div>
                ) : null}
              </div>
            </header>

            <div className="p-5 sm:p-8">
              {job.education ? (
                <div className="mb-8 rounded-2xl border border-page-border bg-page-bg-alt/70 p-4">
                  <div className="mb-2 flex items-center gap-2 font-semibold text-page-fg">
                    <GraduationCap className="h-5 w-5 text-toadster-green" />
                    Education
                  </div>
                  <p className="text-sm leading-relaxed text-page-fg-muted">{job.education}</p>
                </div>
              ) : null}

              <div
                className="career-job-content max-w-none text-page-fg-subtle [&_p]:mb-4 [&_p]:leading-7 [&_strong]:font-bold [&_strong]:text-page-fg [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:leading-7"
                dangerouslySetInnerHTML={{ __html: job.summary || "<p>Details for this role will be updated soon.</p>" }}
              />
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-page-border bg-page-card p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-bold text-page-fg">Interested in this role?</h2>
              <p className="mt-2 text-sm leading-relaxed text-page-fg-muted">
                Share your details and resume with our hiring team. We will review your application and get back to you.
              </p>
              <Button onClick={() => setIsModalOpen(true)} className="mt-5 w-full">
                Apply Now
              </Button>
            </div>
          </aside>
        </div>
      </main>

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={job.title}
        jobId={job._id}
        hrEmail={job.hrEmail}
      />
    </div>
  )
}

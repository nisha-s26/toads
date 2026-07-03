import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { JobDetail } from "@/views/careers/JobDetail"
import { fetchJobById } from "@/lib/jobs"

export const dynamic = "force-dynamic"

type JobDetailParams = Promise<{ id: string }>

export async function generateMetadata({ params }: { params: JobDetailParams }): Promise<Metadata> {
  const { id } = await params
  const job = await fetchJobById(id)

  if (!job || job.isActive === false) {
    return {
      title: "Job Not Found | Toadster Careers",
    }
  }

  return {
    title: `${job.title} | Toadster Careers`,
    description: `Apply for ${job.title}${job.location ? ` in ${job.location}` : ""} at Toadster.`,
  }
}

export default async function Page({ params }: { params: JobDetailParams }) {
  const { id } = await params
  const job = await fetchJobById(id)

  if (!job || job.isActive === false) notFound()

  return <JobDetail job={job} />
}

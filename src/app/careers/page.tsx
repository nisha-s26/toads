import PageComponent from "@/views/careers"
import { createStaticMetadata } from "@/lib/next-metadata"
import { fetchJobs } from "@/lib/jobs"

export const metadata = createStaticMetadata("/careers")
export const dynamic = "force-dynamic"

type CareersSearchParams = Promise<Record<string, string | string[] | undefined>>

function getSearchParam(params: Record<string, string | string[] | undefined>, key: string): string {
  const value = params[key]
  return Array.isArray(value) ? value[0] ?? "" : value ?? ""
}

export default async function Page({ searchParams }: { searchParams?: CareersSearchParams }) {
  const params = (await searchParams) ?? {}
  const page = Number(getSearchParam(params, "page")) || 1
  const search = getSearchParam(params, "search")
  const status = "active"
  const jobsResponse = await fetchJobs({ page, limit: 10, search, status })

  return (
    <PageComponent
      key={`${search}:${page}`}
      initialJobs={jobsResponse.jobs}
      pagination={jobsResponse.pagination}
      filters={{ search, status }}
    />
  )
}

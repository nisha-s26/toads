export interface JobPosition {
  _id: string
  title: string
  experience?: string
  location?: string
  employmentType?: string
  education?: string
  graduationYear?: string
  summary?: string
  isActive?: boolean
  hrEmail?: string
  createdAt?: string
  updatedAt?: string
  slug?: string
}

export interface JobsPagination {
  total: number
  page: number
  limit: number
  pages: number
}

export interface JobsListResponse {
  jobs: JobPosition[]
  pagination: JobsPagination
}

export interface JobsQuery {
  page?: number
  limit?: number
  search?: string
  status?: string
}

const JOBS_API_TIMEOUT_MS = 8_000

function getJobsApiBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    ""
  ).replace(/\/$/, "")
}

function getRequestHeaders(): HeadersInit {
  const baseUrl = getJobsApiBaseUrl()
  return baseUrl.includes("ngrok") ? { "ngrok-skip-browser-warning": "true" } : {}
}

function normalizePositiveInteger(value: unknown, fallback: number): number {
  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
}

function normalizeJob(raw: unknown): JobPosition | null {
  if (!raw || typeof raw !== "object") return null

  const record = raw as Record<string, unknown>
  const id = String(record._id ?? record.id ?? "")
  const title = String(record.title ?? "")
  const hr = record.hr && typeof record.hr === "object" ? record.hr as Record<string, unknown> : {}
  const recruiter = record.recruiter && typeof record.recruiter === "object" ? record.recruiter as Record<string, unknown> : {}
  const assignedHr = record.assignedHr && typeof record.assignedHr === "object" ? record.assignedHr as Record<string, unknown> : {}
  const hrEmail = [
    record.hrEmail,
    record.hr_email,
    record.recruiterEmail,
    record.recruiter_email,
    record.contactEmail,
    record.contact_email,
    record.assignedHrEmail,
    record.assigned_hr_email,
    hr.email,
    recruiter.email,
    assignedHr.email,
  ].find((value) => typeof value === "string" && value.trim())

  if (!id || !title) return null

  return {
    _id: id,
    title,
    experience: typeof record.experience === "string" ? record.experience : undefined,
    location: typeof record.location === "string" ? record.location : undefined,
    employmentType: typeof record.employmentType === "string" ? record.employmentType : undefined,
    education: typeof record.education === "string" ? record.education : undefined,
    graduationYear: typeof record.graduationYear === "string" ? record.graduationYear : undefined,
    summary: typeof record.summary === "string" ? record.summary : undefined,
    isActive: typeof record.isActive === "boolean" ? record.isActive : undefined,
    hrEmail: typeof hrEmail === "string" ? hrEmail.trim() : undefined,
    createdAt: typeof record.createdAt === "string" ? record.createdAt : undefined,
    updatedAt: typeof record.updatedAt === "string" ? record.updatedAt : undefined,
    slug: typeof record.slug === "string" ? record.slug : undefined,
  }
}

function emptyJobsResponse(query: JobsQuery = {}): JobsListResponse {
  const limit = normalizePositiveInteger(query.limit, 10)
  const page = normalizePositiveInteger(query.page, 1)

  return {
    jobs: [],
    pagination: {
      total: 0,
      page,
      limit,
      pages: 0,
    },
  }
}

async function fetchJobsApi(path: string): Promise<Response> {
  const baseUrl = getJobsApiBaseUrl()
  if (!baseUrl) {
    throw new Error("JOBS_API_BASE_URL is not configured")
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), JOBS_API_TIMEOUT_MS)

  try {
    return await fetch(`${baseUrl}${path}`, {
      headers: getRequestHeaders(),
      cache: "no-store",
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timeout)
  }
}

export async function fetchJobs(query: JobsQuery = {}): Promise<JobsListResponse> {
  const params = new URLSearchParams({
    page: String(normalizePositiveInteger(query.page, 1)),
    limit: String(normalizePositiveInteger(query.limit, 10)),
    search: query.search ?? "",
    status: query.status ?? "",
  })

  try {
    const response = await fetchJobsApi(`/api/jobs?${params.toString()}`)
    if (!response.ok) return emptyJobsResponse(query)

    const data = (await response.json()) as Record<string, unknown>
    const jobs = Array.isArray(data.jobs) ? data.jobs.map(normalizeJob).filter(Boolean) : []
    const pagination = data.pagination && typeof data.pagination === "object"
      ? (data.pagination as Record<string, unknown>)
      : {}

    return {
      jobs: jobs as JobPosition[],
      pagination: {
        total: normalizePositiveInteger(pagination.total, jobs.length),
        page: normalizePositiveInteger(pagination.page, normalizePositiveInteger(query.page, 1)),
        limit: normalizePositiveInteger(pagination.limit, normalizePositiveInteger(query.limit, 10)),
        pages: normalizePositiveInteger(pagination.pages, jobs.length > 0 ? 1 : 0),
      },
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[fetchJobs] Failed to load jobs:", error)
    }
    return emptyJobsResponse(query)
  }
}

export async function fetchJobById(id: string): Promise<JobPosition | null> {
  if (!id) return null

  try {
    const response = await fetchJobsApi(`/api/jobs/${encodeURIComponent(id)}`)
    if (!response.ok) return null

    return normalizeJob(await response.json())
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[fetchJobById] Failed to load job "${id}":`, error)
    }
    return null
  }
}

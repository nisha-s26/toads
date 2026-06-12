import type { BlogPost } from "@/views/blogs/blogData"

interface BlogsListResponse {
  blogs?: BlogPost[]
}

function getApiBaseUrl(): string {
  const envUrl =
    process.env.API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    process.env.VITE_API_BASE_URL ??
    ""

  const normalized = envUrl.replace(/\/$/, "")

  // Server: use API_BASE_URL directly.
  if (typeof window === "undefined") {
    return normalized
  }

  // Client: use public URL when set (direct ngrok fetch with skip header).
  const publicUrl = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/$/, "")
  if (publicUrl) return publicUrl

  if (process.env.NODE_ENV === "development") return ""
  return normalized
}

function getRequestHeaders(init?: RequestInit): HeadersInit {
  const headers: Record<string, string> = {}
  const base = getApiBaseUrl()

  if (base.includes("ngrok")) {
    headers["ngrok-skip-browser-warning"] = "true"
  }

  if (init?.headers) {
    const extra = new Headers(init.headers)
    extra.forEach((value, key) => {
      headers[key] = value
    })
  }

  return headers
}

function apiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${getApiBaseUrl()}${normalized}`
}

export async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  const url = apiUrl(path)
  if (!url.startsWith("http")) {
    return new Response(JSON.stringify({ blogs: [] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  }

  return fetch(url, {
    ...init,
    headers: getRequestHeaders(init),
    next: { revalidate: 3600 },
  })
}

export async function fetchAllBlogs(): Promise<BlogPost[]> {
  const response = await apiFetch("/api/public/blogs")
  if (!response.ok) return []
  const data = (await response.json()) as BlogsListResponse
  return data.blogs ?? []
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  const response = await apiFetch(`/api/public/blogs/${slug}`)
  if (!response.ok) return null
  return (await response.json()) as BlogPost
}

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

  // Server: use API_BASE_URL directly. Client in dev: same-origin via Next.js rewrite.
  if (typeof window === "undefined") {
    return envUrl.replace(/\/$/, "")
  }
  if (process.env.NODE_ENV === "development") return ""
  return envUrl.replace(/\/$/, "")
}

function getRequestHeaders(init?: RequestInit): HeadersInit {
  const headers: Record<string, string> = {}

  if (typeof window !== "undefined" && process.env.NODE_ENV !== "development") {
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

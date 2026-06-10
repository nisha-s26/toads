import type { BlogPost } from "@/pages/blogs/blogData"

interface BlogsListResponse {
  blogs?: BlogPost[]
}

function getApiBaseUrl(): string {
  // Dev: same-origin /api/public/* is proxied to ngrok by Vite (avoids CORS).
  if (import.meta.env.DEV) return ""
  return (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "")
}

function getRequestHeaders(init?: RequestInit): HeadersInit {
  const headers: Record<string, string> = {}

  // In dev the Vite proxy adds ngrok-skip-browser-warning server-side.
  // Sending it from the browser on a cross-origin request triggers a CORS preflight.
  if (!import.meta.env.DEV) {
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
  return fetch(apiUrl(path), {
    ...init,
    headers: getRequestHeaders(init),
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

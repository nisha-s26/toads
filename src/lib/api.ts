import type { BlogPost } from "@/pages/blogs/blogData"

const NGROK_HEADERS: HeadersInit = {
  "ngrok-skip-browser-warning": "true",
}

interface BlogsListResponse {
  blogs?: BlogPost[]
}

function getApiBaseUrl(): string {
  if (import.meta.env.DEV) return ""
  return (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "")
}

function apiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${getApiBaseUrl()}${normalized}`
}

export async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  return fetch(apiUrl(path), {
    ...init,
    headers: {
      ...NGROK_HEADERS,
      ...init?.headers,
    },
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

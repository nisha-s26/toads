export function resolveActiveSection(pathname: string): string {
  if (pathname.startsWith("/blogs")) return "blogs"
  if (pathname.startsWith("/services")) return "services"
  if (pathname.startsWith("/technologies")) return "technologies"
  if (pathname.startsWith("/hire")) return "hire-resources"
  if (pathname.startsWith("/ai-development-company-")) return "country"

  const sections: Record<string, string> = {
    "/": "home",
    "/about": "about",
    "/careers": "careers",
    "/contact": "contact",
  }
  return sections[pathname] ?? "home"
}

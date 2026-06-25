"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { GLOBAL_COUNTRY_NAV } from "@/views/global-pages/registry"

export function GlobalPagesMenu({ size = "default" }: { size?: "sm" | "default" }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const iconSize = size === "sm" ? 20 : 22

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "global-pages-globe-btn inline-flex items-center justify-center rounded-lg border border-page-border bg-page-card text-page-fg transition hover:bg-page-accent-soft",
          size === "sm" ? "h-9 w-9" : "h-10 w-10",
          open && "border-toadster-green/40 bg-page-accent-soft",
        )}
        aria-label="Country AI development pages"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Globe size={iconSize} strokeWidth={3} aria-hidden className="global-pages-globe-icon shrink-0" />
      </button>

      {open ? (
        <div className="global-pages-menu-dropdown absolute right-0 top-[calc(100%+0.625rem)] z-[100] min-w-[6.75rem] rounded-xl border border-page-border bg-page-card py-1.5 shadow-2xl">
          <ul className="max-h-[min(24rem,60vh)] overflow-y-auto">
            {GLOBAL_COUNTRY_NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="global-pages-menu-link flex items-center gap-2.5 whitespace-nowrap px-3.5 py-2.5 text-sm transition hover:bg-page-accent-soft"
                >
                  <span className="shrink-0 text-lg leading-none" aria-hidden>
                    {item.flag}
                  </span>
                  <span className="shrink-0 font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

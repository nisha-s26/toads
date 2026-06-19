import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

type ServicePageCtaProps = {
  title: string
  children: ReactNode
  footnote?: string
}

export function ServicePageCta({ title, children, footnote }: ServicePageCtaProps) {
  return (
    <section className="section-padding py-14 md:py-16">
      <div className="service-page-container px-4">
        <div className="hire-resources-cta relative overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <div className="mx-auto mt-4 w-[85%] space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
            {children}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              title="Talk to an expert"
              className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#003820] shadow-sm transition-colors hover:bg-slate-50"
            >
              Talk to an Expert
              <ArrowRight size={16} />
            </Link>
          </div>
          {footnote ? <p className="mx-auto mt-6 text-sm text-white/60">{footnote}</p> : null}
        </div>
      </div>
    </section>
  )
}

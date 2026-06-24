"use client"

import { ArrowRight, Clock, Headphones, Rocket, ShieldCheck, Star } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { WhyUsBgSvg } from "@/components/WhyUsBgSvg"

const STATS = [
  { value: "200+", label: "AI systems shipped", Icon: Rocket },
  { value: "48 hrs", label: "Average talent match time", Icon: Clock },
  { value: "24/7", label: "Dedicated support", Icon: Headphones },
  { value: "SOC 2", label: "Compliance-ready by default", Icon: ShieldCheck },
]

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="homepage-snap-section section-full-bleed why-us-section-bg relative isolate flex flex-col justify-center overflow-hidden px-4 py-10 sm:py-14 md:py-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ScrollReveal>
          <div className="homepage-cta-box relative overflow-hidden rounded-[1.75rem] px-5 py-9 sm:px-10 sm:py-12 md:px-14 md:py-14">
            <div
              className="why-us-grid pointer-events-none absolute inset-y-0 left-0 w-[min(38%,220px)] opacity-70"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-4 bottom-2 hidden w-[min(42%,280px)] opacity-100 lg:block"
              aria-hidden
            >
              <WhyUsBgSvg className="h-auto w-full drop-shadow-sm" />
            </div>
            <div
              className="pointer-events-none absolute -right-6 top-1/2 hidden w-[min(36%,240px)] -translate-y-1/2 opacity-100 lg:block"
              aria-hidden
            >
              <WhyUsBgSvg className="h-auto w-full -scale-x-100 drop-shadow-sm" />
            </div>
            <div
              className="pointer-events-none absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-toadster-green/10 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-[14%] right-[10%] h-28 w-28 rounded-full bg-emerald-400/8 blur-2xl"
              aria-hidden
            />

            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-toadster-green/20 bg-toadster-green/8 px-4 py-1.5 text-sm font-semibold text-toadster-green">
                <Star className="h-4 w-4 fill-toadster-green/15" strokeWidth={2} />
                Trusted AI Development Partner
              </div>

              <h2 className="text-3xl font-extrabold leading-[1.08] sm:text-4xl md:text-[2.75rem]">
                <span className="text-page-fg">Why Choose </span>
                <span className="text-toadster-green">Us</span>
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-page-fg-muted sm:text-base md:text-lg">
                Most software agencies build features. We build AI-integrated systems that hold up - under
                real load, with real data, in production environments where things actually break. Whether
                you need an{" "}
                <strong className="font-semibold text-page-fg">LLM integration agency</strong>, a team to
                handle{" "}
                <strong className="font-semibold text-page-fg">
                  AI pipeline development for startups
                </strong>
                , or experts in{" "}
                <strong className="font-semibold text-page-fg">
                  retrieval-augmented generation consulting
                </strong>{" "}
                - that distinction matters more than ever.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-page-fg-muted sm:text-base md:text-lg">
                We have worked with early-stage startups that needed an MVP built to scale, and enterprise teams
                who inherited AI systems that were silently failing. What we bring is not just technical depth - it is the
                judgment to know which solution fits your constraints, your team, and your next 18 months.
              </p>

              <div className="mt-10 grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
                {STATS.map((stat, index) => {
                  const Icon = stat.Icon
                  return (
                    <ScrollReveal
                      key={stat.label}
                      delay={0.15 + index * 0.08}
                      className="h-full min-w-0"
                    >
                      <div className="why-us-stat-card group relative mx-auto flex aspect-[3/4] w-full max-w-[11.75rem] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white text-left shadow-[0_10px_32px_rgba(15,23,42,0.07)] transition-transform duration-300 hover:-translate-y-0.5 dark:border-slate-200/90 dark:bg-white sm:max-w-none">
                        <span
                          className="block h-1 w-full shrink-0 bg-toadster-green"
                          aria-hidden
                        />
                        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-toadster-green text-white shadow-[0_4px_14px_rgba(6,86,6,0.28)]">
                            <Icon className="h-5 w-5" strokeWidth={2} />
                          </span>
                          <div>
                            <p className="text-[1.55rem] font-extrabold leading-none text-toadster-green sm:text-[1.65rem]">
                              {stat.value}
                            </p>
                            <p className="mt-2 text-xs font-medium leading-snug text-slate-600 sm:text-sm dark:text-slate-600">
                              {stat.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>

              <div className="mt-10 flex flex-col items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-toadster-green/75" aria-hidden />
                <Link
                  href="/about"
                  title="Learn more about Toadster"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Learn About Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default WhyUs

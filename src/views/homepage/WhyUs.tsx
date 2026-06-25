"use client"

import { ArrowRight, Clock, Headphones, Rocket, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"

const STATS = [
  { value: "200+", label: "AI systems shipped", Icon: Rocket },
  { value: "48 hrs", label: "Average talent match time", Icon: Clock },
  { value: "24/7", label: "Dedicated support", Icon: Headphones },
  { value: "SOC 2", label: "Compliance-ready by default", Icon: ShieldCheck },
]

const WHY_US_GLOW_DOTS = [
  { className: "top-[12%] left-[16%] h-10 w-10 sm:h-11 sm:w-11" },
  { className: "top-[20%] left-[34%] h-8 w-8 sm:h-9 sm:w-9" },
  { className: "top-[8%] right-[22%] h-9 w-9 sm:h-10 sm:w-10" },
  { className: "top-[36%] left-[10%] h-11 w-11 sm:h-12 sm:w-12" },
  { className: "top-[30%] right-[12%] h-12 w-12 sm:h-14 sm:w-14" },
  { className: "bottom-[26%] left-[22%] h-9 w-9 sm:h-10 sm:w-10" },
  { className: "bottom-[20%] right-[28%] h-10 w-10 sm:h-11 sm:w-11" },
] as const

function WhyUsNetworkDecor({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      className={mirrored ? "-scale-x-100" : undefined}
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="18" cy="24" r="2.5" fill="currentColor" />
      <circle cx="42" cy="12" r="2" fill="currentColor" />
      <circle cx="68" cy="38" r="2.5" fill="currentColor" />
      <circle cx="92" cy="18" r="2" fill="currentColor" />
      <circle cx="28" cy="58" r="2" fill="currentColor" />
      <circle cx="54" cy="72" r="2.5" fill="currentColor" />
      <circle cx="82" cy="56" r="2" fill="currentColor" />
      <circle cx="14" cy="96" r="2" fill="currentColor" />
      <circle cx="38" cy="112" r="2.5" fill="currentColor" />
      <circle cx="64" cy="98" r="2" fill="currentColor" />
      <circle cx="96" cy="118" r="2.5" fill="currentColor" />
      <circle cx="22" cy="148" r="2" fill="currentColor" />
      <circle cx="48" cy="162" r="2.5" fill="currentColor" />
      <circle cx="76" cy="142" r="2" fill="currentColor" />
      <circle cx="100" cy="168" r="2" fill="currentColor" />
      <path
        d="M18 24L42 12M42 12L68 38M68 38L92 18M18 24L28 58M28 58L54 72M54 72L82 56M82 56L92 18M28 58L14 96M14 96L38 112M38 112L64 98M64 98L82 56M38 112L22 148M22 148L48 162M48 162L76 142M76 142L96 118M96 118L64 98"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="homepage-snap-section section-full-bleed relative isolate flex flex-col justify-center overflow-hidden px-4 py-8 sm:py-10 md:py-12"
    >
      <div className="relative z-10 mx-auto w-full max-w-[80rem]">
        <ScrollReveal>
          <div className="why-us-card relative overflow-hidden rounded-[1.75rem] px-5 py-9 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-14 lg:py-[3.25rem] xl:px-16 mt-13">
            <div className="why-us-dot-grid pointer-events-none absolute inset-0" aria-hidden />
            <div
              className="why-us-corner-dots why-us-corner-dots--tl pointer-events-none absolute"
              aria-hidden
            />
            <div
              className="why-us-corner-dots why-us-corner-dots--br pointer-events-none absolute"
              aria-hidden
            />
            {WHY_US_GLOW_DOTS.map((dot, index) => (
              <div
                key={index}
                className={`why-us-glow-dot pointer-events-none absolute ${dot.className}`}
                aria-hidden
              />
            ))}
            <div
              className="why-us-network-decor pointer-events-none absolute bottom-10 left-3 top-10 hidden w-[6.5rem] text-toadster-green/[0.18] xl:left-5 xl:w-[7.5rem] lg:block dark:text-emerald-400/16"
              aria-hidden
            >
              <WhyUsNetworkDecor />
            </div>
            <div
              className="why-us-network-decor pointer-events-none absolute bottom-10 right-3 top-10 hidden w-[6.5rem] text-toadster-green/[0.18] xl:right-5 xl:w-[7.5rem] lg:block dark:text-emerald-400/16"
              aria-hidden
            >
              <WhyUsNetworkDecor mirrored />
            </div>

            <div className="relative z-10 flex w-full flex-col items-center text-center">
              {/* <div className="why-us-badge mb-5 inline-flex items-center gap-2 rounded-full border border-toadster-green/25 bg-toadster-green/[0.06] px-4 py-1.5 text-sm font-semibold text-toadster-green">
                <Star className="h-4 w-4 fill-toadster-green/15" strokeWidth={2} />
                Trusted AI Development Partner
              </div> */}

              <h2 className="why-us-heading text-3xl font-extrabold leading-[1.08] sm:text-4xl md:text-[2.75rem]">
                <span className="text-slate-900 dark:text-white">Why Choose </span>
                <span className="text-toadster-green">Us</span>
              </h2>

              <p className="why-us-description mt-6 w-full max-w-none px-0 text-sm leading-relaxed text-slate-600 sm:text-base md:text-[1.0625rem] md:leading-[1.75] lg:px-6 dark:text-slate-300">
                Most software agencies build features. We build AI-integrated systems that hold up - under
                real load, with real data, in production environments where things actually break. Whether
                you need an{" "}
                <strong className="font-semibold text-slate-800 dark:text-white">
                  LLM integration agency
                </strong>
                , a team to handle{" "}
                <strong className="font-semibold text-slate-800 dark:text-white">
                  AI pipeline development for startups
                </strong>
                , or experts in{" "}
                <strong className="font-semibold text-slate-800 dark:text-white">
                  retrieval-augmented generation consulting
                </strong>{" "}
                - that distinction matters more than ever.
              </p>

              <p className="why-us-description mt-5 w-full max-w-none px-0 text-sm leading-relaxed text-slate-600 sm:text-base md:text-[1.0625rem] md:leading-[1.75] lg:px-6 dark:text-slate-300">
                We have worked with early-stage startups that needed an MVP built to scale, and enterprise teams
                who inherited AI systems that were silently failing. What we bring is not just technical depth - it is the
                judgment to know which solution fits your constraints, your team, and your next 18 months.
              </p>

              <div className="why-us-stats-grid mt-10 grid w-full grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                {STATS.map((stat, index) => {
                  const Icon = stat.Icon
                  return (
                    <ScrollReveal
                      key={stat.label}
                      delay={0.15 + index * 0.08}
                      className="h-full min-w-0"
                    >
                      <div className="why-us-stat-card group flex h-full min-h-[10.75rem] flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 sm:min-h-[11.5rem]">
                        <span className="why-us-stat-card-accent block h-[3px] w-full shrink-0 bg-toadster-green" aria-hidden />
                        <div className="why-us-stat-card-body flex min-h-0 flex-1 flex-col px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
                          <div className="why-us-stat-icon-slot flex shrink-0 items-start">
                            <span className="why-us-stat-icon inline-flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11">
                              <Icon className="h-5 w-5" strokeWidth={2} />
                            </span>
                          </div>
                          <p className="why-us-stat-value shrink-0">{stat.value}</p>
                          <p className="why-us-stat-label shrink-0">{stat.label}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>

              <div className="why-us-cta-wrap mt-10 w-full">
                {/* <div className="relative flex items-center justify-center py-1">
                  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-slate-200 dark:bg-slate-600/50" />
                  <span className="why-us-cta-icon relative z-[1] inline-flex items-center justify-center rounded-full px-2">
                    <ShieldCheck className="h-5 w-5 text-toadster-green" strokeWidth={2} aria-hidden />
                  </span>
                </div> */}
                <Link
                  href="/about"
                  title="Learn more about Toadster"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-hover sm:text-base"
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

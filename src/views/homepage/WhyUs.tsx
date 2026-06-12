"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const STATS = [
  { value: "200+", label: "AI systems shipped" },
  { value: "48 hrs", label: "Average talent match time" },
  { value: "24/7", label: "Dedicated support" },
  { value: "SOC 2", label: "Compliance-ready by default" },
]

const WhyUs = () => {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { amount: 0.2, once: true })

  return (
    <section
      ref={ref}
      id="why-us"
      className="homepage-snap-section section-full-bleed relative isolate flex flex-col justify-center overflow-hidden py-16 md:py-24"
    >
      {/* <div className="absolute inset-0 -z-10 bg-[#0f1726]" aria-hidden /> */}
      {/* <div className="absolute inset-0 -z-10 parallax-overlay" aria-hidden /> */}
      {/* <div className="absolute inset-0 -z-10 parallax-grid opacity-30" aria-hidden /> */}
      <div className="relative z-10 mx-auto max-w-9xl px-4 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-9xl px-10 flex-col items-center text-center"
        >
          <p className="section-eyebrow-heading text-2xl font-normal uppercase tracking-[0.35em]">
            Why <span className="font-extrabold">Us</span>
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            <span className="text-page-fg">Why Choose </span>
            <span className="text-toadster-green">Toadster</span>
          </h2>

          <p className="mt-6 max-w-9xl text-base leading-relaxed text-page-fg-muted md:text-lg">
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

          <p className="mt-5 max-w-9xl text-base leading-relaxed text-page-fg-muted md:text-lg">
            We have worked with early-stage startups that needed an MVP built to scale, and enterprise teams
            who inherited AI systems that were silently failing. What we bring is not just technical depth - it is the
            judgment to know which solution fits your constraints, your team, and your next 18 months.
          </p>

          <div className="mt-10 grid w-full max-w-9xl grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <p className="text-2xl font-extrabold text-toadster-green md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium leading-snug text-page-fg-muted md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.55, delay: 0.55 }}
          >
            <Link
              href="/about"
              title="Learn more about Toadster"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:-translate-y-0.5"
            >
              Learn About Us
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services/ai-development"
              title="View our AI development services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-page-border-strong px-7 py-3.5 font-semibold text-page-fg transition-colors hover:bg-page-fg/5"
            >
              View Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs

"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { ClutchBadge } from "@/components/ClutchBadge"
import { HireResourceRfpForm } from "@/components/hire/HireResourceRfpForm"
import { HIRE_RESOURCE_BY_SLUG, type HireResource } from "@/config/hire-resources"

function scrollToForm() {
  document.getElementById("hire-rfp-form")?.scrollIntoView({ behavior: "smooth", block: "center" })
}

function SectionBody({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((paragraph, i) => (
        <p key={i} className="text-page-fg-muted leading-relaxed mb-4 last:mb-0">
          {paragraph}
        </p>
      ))}
    </>
  )
}

export default function HireResourceDetail({ resource }: { resource: HireResource }) {
  return (
    <div className="hire-page-shell overflow-x-hidden">
      {/* Hero - vertically centered, 85% width */}
      <section className="hire-page-hero mt-10">
        <div className="hire-page-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-[3.85rem] font-extrabold text-page-fg tracking-tight leading-[1.08]">
                  Hire
                  <br />
                  <span className="text-slate-800 dark:text-white">{resource.heroTitle}</span>
                </h1>

                <p className="mt-6 max-w-2xl text-xl leading-relaxed text-page-fg-muted sm:text-[1.35rem]">
                  {resource.subheading}
                </p>

                <ul className="mt-8 flex flex-col gap-4">
                  {resource.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3.5 text-page-fg-muted">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/70 dark:bg-white/10 ring-1 ring-page-border/60">
                        <Check size={14} className="text-slate-700 dark:text-slate-200" strokeWidth={2.5} />
                      </span>
                      <span className="text-lg leading-snug sm:text-[1.125rem]">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
                  >
                    {resource.ctaText}
                    <ArrowRight size={18} />
                  </button>

                  <ClutchBadge />
                </div>
              </motion.div>
            </div>

            <div id="hire-rfp-form" className="w-full lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <HireResourceRfpForm roleTitle={resource.heroTitle} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Below-fold content */}
      <div className="hire-page-container pb-20 pt-4">
        <div className="flex flex-col gap-12 lg:gap-14">
          {resource.sections.map((section, idx) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="hire-content-panel rounded-2xl p-8 sm:p-10"
            >
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-page-fg sm:text-3xl">
                {section.heading}
              </h2>

              {section.body && <SectionBody text={section.body} />}

              {section.items && (
                <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-2">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-page-border/40 bg-white/50 p-5 dark:bg-white/[0.04]"
                    >
                      <h3 className="mb-2 font-bold text-page-fg">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-page-fg-muted">{item.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.section>
          ))}

          {resource.faqs.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hire-content-panel rounded-2xl p-8 sm:p-10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-page-fg-muted">
                Frequently Asked
              </span>
              <h2 className="mb-8 mt-2 text-2xl font-bold tracking-tight text-page-fg sm:text-3xl">
                Common Questions
              </h2>
              <div className="flex flex-col gap-6">
                {resource.faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-page-border/40 pb-6 last:border-0 last:pb-0">
                    <h3 className="mb-2 text-lg font-bold text-page-fg">{faq.question}</h3>
                    <p className="leading-relaxed text-page-fg-muted">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {resource.geoSignals.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hire-content-panel rounded-2xl p-8 sm:p-10"
            >
              <h2 className="mb-5 text-xl font-bold text-page-fg">About Toadster Hire Services</h2>
              <div className="flex flex-col gap-4">
                {resource.geoSignals.map((signal) => (
                  <p
                    key={signal}
                    className="border-l-2 border-white/20 pl-4 leading-relaxed text-page-fg-muted dark:border-white/15"
                  >
                    {signal}
                  </p>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  )
}

export function HireResourceDetailBySlug({ slug }: { slug: string }) {
  const resource = HIRE_RESOURCE_BY_SLUG[slug]
  if (!resource) return null
  return <HireResourceDetail resource={resource} />
}

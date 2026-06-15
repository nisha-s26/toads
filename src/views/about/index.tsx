"use client"

import Image from "next/image"
import { MdOutlineLightbulb } from "react-icons/md"
import { FaHandshake, FaChartLine, FaGlobeAmericas, FaMedal } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  BookOpen,
  Cpu,
  Globe,
  MessageCircle,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { HomepageMeshBg } from "@/components/HomepageMeshBg"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden py-32 text-page-fg md:py-48">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-md"
            style={{ backgroundImage: "url('/about-hero-bg.png')" }}
          />
          <div className="absolute inset-0 bg-page-bg/45 dark:bg-black/55" />
        </div>

        <div className="relative z-10 mx-28 max-w-9xl transition-transform duration-700 hover:translate-x-2">
          {/* <span className="mb-6 inline-block rounded-full border border-green-400/40 bg-green-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-400">
            About Us
          </span> */}
          <h1 className="mb-8 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl text-black dark:text-white">
            AI-Powered Engineering for the
            <br />
            <span className="text-green-400">
              Businesses of Tomorrow
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-black dark:text-white font-medium leading-relaxed md:text-xl">
            We are a global team of engineers, data scientists, and AI researchers who architect,
            build, and scale intelligent digital systems - so your business doesn&apos;t just keep up
            with the future, it leads it.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              title="Schedule a free strategy call"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:-translate-y-0.5"
            >
              Schedule a Free Strategy Call
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services/ai-development"
              title="Explore our AI services"
              className="inline-flex items-center gap-2 rounded-xl border border-page-border-strong px-7 py-3.5 font-semibold text-page-fg transition-colors hover:bg-page-accent-soft"
            >
              Explore Our AI Services
              <ArrowRight size={16} />
            </Link>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-black dark:text-white md:text-base">
            Trusted by 250+ businesses across the US, UK, India, and UAE &nbsp;|&nbsp; Clutch Global
            Leader 2026 &nbsp;|&nbsp; 85% Long-Term Client Retention
          </p>
        </div>
      </section>

      <div className="page-ambient-shell homepage-mesh-shell relative isolate">
        <HomepageMeshBg />
        <div className="homepage-content relative z-10">
      {/* ── Mission ── */}
      <section className="pt-10">
        <div className="mx-20 grid max-w-9xl items-stretch gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xl font-semibold uppercase tracking-widest text-green-400">
              Our Mission
            </p>
            <h2 className="mb-4 text-2xl font-extrabold leading-snug text-page-fg sm:text-3xl md:text-4xl">
              Making Enterprise-Grade AI Accessible to Every Business
            </h2>
            <p className="mb-4 text-base leading-relaxed text-page-fg-subtle">
              We believe powerful technology should not be the exclusive privilege of Fortune 500
              companies. Toadster Technologies was founded on a single conviction: every business -
              regardless of size, sector, or budget - deserves access to AI-powered solutions that are
              practical, scalable, and built to deliver measurable impact.
            </p>
            <p className="mb-8 text-base leading-relaxed text-page-fg-subtle">
              From early-stage startups in London and New York to large enterprises across India and
              the UAE, we partner with organizations at every stage of their digital journey to build
              systems that create lasting competitive advantages.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {(
                [
                  {
                    icon: Rocket,
                    value: "250+",
                    label: "Projects Delivered",
                    sub: "Across 30+ industries globally",
                  },
                  {
                    icon: TrendingUp,
                    value: "85%",
                    label: "Client Retention Rate",
                    sub: "Long-term partnerships, not one-off projects",
                  },
                  {
                    icon: Globe,
                    value: "30+",
                    label: "Industries Served",
                    sub: "From FinTech to Healthcare to Retail",
                  },
                  {
                    icon: Users,
                    value: "50+",
                    label: "Expert Team Members",
                    sub: "AI engineers, data scientists & architects",
                  },
                ] satisfies { icon: LucideIcon; value: string; label: string; sub: string }[]
              ).map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className={cn(
                      "capability-card-surface group relative overflow-hidden rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1",
                    )}
                  >
                    <div className="relative z-10">
                      <span className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                        <Icon size={18} strokeWidth={2} />
                      </span>
                      <div className="mb-1 text-3xl font-extrabold text-toadster-green">{stat.value}</div>
                      <div className="text-xs font-semibold text-slate-900">{stat.label}</div>
                      <div className="mt-1 text-[11px] leading-snug text-slate-600">{stat.sub}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="grid h-full min-h-[480px] grid-cols-2 grid-rows-2 gap-4 md:min-h-0">
            <div className="group relative col-span-2 row-span-1 min-h-0 overflow-hidden rounded-3xl border border-page-border shadow-lg">
              <Image
                src="/about2.png"
                alt="Collaboration"
                title="Collaboration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-page-bg/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
            <div className="group relative col-span-1 row-span-1 min-h-0 overflow-hidden rounded-3xl border border-page-border shadow-lg">
              <Image
                src="/about3.png"
                alt="Team Work"
                title="Team Work"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-page-bg/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
            <div className="group relative col-span-1 row-span-1 min-h-0 overflow-hidden rounded-3xl border border-page-border shadow-lg drop-shadow-xl">
              <Image
                src="/about1.png"
                alt="Innovation"
                title="Innovation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-page-bg/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20">
        <div className="mx-20 max-w-9xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xl font-semibold uppercase tracking-widest text-green-400">
              What We Stand For
            </p>
            <h2 className="text-4xl font-extrabold text-page-fg">
              The Principles That Drive Every Line of Code
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-page-fg-subtle">
              At Toadster, our values are not wall art - they are the operating principles behind
              every architecture decision, client conversation, and product we ship.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: <MdOutlineLightbulb className="text-2xl text-toadster-green" />,
                title: "Innovation First",
                desc: "We don't follow technology trends - we set them. Every solution we build leverages cutting-edge AI, LLMs, and next-generation engineering practices to keep your business ahead of the curve.",
              },
              {
                icon: <FaHandshake className="text-2xl text-toadster-green" />,
                title: "True Client Partnership",
                desc: "We embed with your team. You get a dedicated technology partner who understands your business goals, not just your tech stack. We succeed when you succeed.",
              },
              {
                icon: <FaChartLine className="text-2xl text-toadster-green" />,
                title: "Results-Driven Development",
                desc: "Every feature, model, and deployment is benchmarked against real business outcomes. We measure success in revenue generated, costs reduced, and time saved - not just lines shipped.",
              },
              {
                icon: <FaGlobeAmericas className="text-2xl text-toadster-green" />,
                title: "Global Perspective, Local Insight",
                desc: "Our diverse, globally distributed team brings cross-market expertise to every engagement, combining international best practices with a deep understanding of regional business contexts.",
              },
              {
                icon: <FaMedal className="text-2xl text-toadster-green" />,
                title: "Engineering Excellence",
                desc: "We hold ourselves to the highest standards of software craftsmanship. From system architecture to code reviews, quality is non-negotiable at Toadster.",
              },
              {
                icon: <CiHeart className="text-2xl text-toadster-green" />,
                title: "Passion for Impact",
                desc: "We genuinely love building things that matter. Technology is our craft, but transforming businesses and improving lives is our purpose.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-4 rounded-2xl border border-page-border p-5 transition-all hover:border-toadster-green/30 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl">
                  {v.icon}
                </div>
                <div>
                  <div className="mb-1 font-bold text-page-fg">{v.title}</div>
                  <div className="text-sm leading-relaxed text-page-fg-muted">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-toadster-green blur-[100px]" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-toadster-green blur-[120px]" />
        </div>

        <div className="relative z-10 mx-20 max-w-9xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xl font-semibold uppercase tracking-widest text-toadster-green">
              The Team
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-page-fg md:text-5xl">
              Meet the Visionary Behind Toadster Technologies
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-page-fg-muted">
              Our leadership combines decades of enterprise technology experience with a builder&apos;s
              mindset and a strategist&apos;s eye for business impact.
            </p>
          </div>

          <div className="group relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-toadster-green/10 via-toadster-green/5 to-toadster-green/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60" />

            <div className="relative overflow-hidden rounded-3xl border border-page-border bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition-all duration-300 group-hover:border-toadster-green/20">
              <div className="h-1 bg-gradient-to-r from-transparent via-toadster-green to-transparent" />

              <div className="p-8 md:p-12">
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-toadster-green/40 to-toadster-green/20 blur-md transition-all duration-300" />
                    <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-toadster-green/50 bg-white shadow-2xl transition-all duration-300 group-hover:border-toadster-green/60 md:h-56 md:w-56">
                      <Image
                        src="/leader.png"
                        alt="Naveen Singh"
                        title="Naveen Singh"
                        fill
                        className="scale-[1.12] object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-[1.18]"
                        sizes="(max-width: 768px) 192px, 224px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-toadster-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="absolute -right-2 -top-2 h-6 w-6 animate-pulse rounded-full bg-toadster-green" />
                    <div className="absolute -bottom-2 -left-2 h-4 w-4 animate-pulse rounded-full bg-toadster-green/60 delay-75" />
                  </div>
                </div>

                <div className="space-y-4 text-center">
                  <div>
                    <h3 className="mb-2 text-3xl font-bold tracking-tight text-page-fg md:text-4xl">
                      Mr. Naveen Singh
                    </h3>
                    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-toadster-green/30 bg-toadster-green/10 px-4 py-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-toadster-green" />
                      <h4 className="text-sm font-semibold text-toadster-green md:text-base">
                        Founder & Chief Executive Officer
                      </h4>
                    </div>
                    <p className="mt-2 text-sm text-page-fg-muted">Toadster Technologies Pvt. Ltd.</p>
                  </div>

                  <div className="flex items-center justify-center gap-2 py-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-toadster-green/50" />
                    <div className="h-1.5 w-1.5 rounded-full bg-toadster-green" />
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-toadster-green/50" />
                  </div>

                  <div className="mx-auto max-w-3xl">
                    <p className="text-base leading-relaxed text-page-fg-subtle md:text-lg">
                      Naveen Singh is a technology entrepreneur and AI innovation leader with over{" "}
                      <span className="font-semibold text-toadster-green">two decades</span> of
                      hands-on experience transforming complex business challenges into scalable,
                      production-ready technology solutions.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-page-fg-muted">
                      As the Founder and CEO of Toadster Technologies Pvt. Ltd., Naveen drives the
                      company&apos;s strategic vision: building AI-powered platforms that help enterprises
                      operate with greater speed, intelligence, and precision. Under his leadership,
                      Toadster has become a recognized partner for businesses across the US, UK,
                      India, and UAE seeking to modernize their operations through applied AI and custom
                      software engineering.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-page-fg-muted">
                      Before founding Toadster, Naveen held senior benchmark roles at{" "}
                      <span className="font-medium text-page-fg">EA Sports</span> and{" "}
                      <span className="font-medium text-page-fg">Samsung India Electronics</span>,
                      where he contributed to globally distributed products and set new performance
                      standards for technology delivery. These experiences forged his philosophy:
                      technology must serve business outcomes, not the other way around.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-page-fg-muted">
                      A strategic thinker and hands-on builder, Naveen is a vocal advocate for
                      responsible AI innovation. He believes that the most powerful technology is
                      technology that is explainable, ethical, and built with the end user at its
                      center.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-4 border-t border-page-border pt-8 md:grid-cols-3">
                    <div className="rounded-xl border border-page-border bg-white/[0.02] p-4 text-center transition-colors duration-200">
                      <div className="mb-1 text-2xl font-bold text-toadster-green">20+</div>
                      <div className="text-xs uppercase tracking-wide text-page-fg-muted">
                        Years of Experience
                      </div>
                    </div>
                    <div className="rounded-xl border border-page-border bg-white/[0.02] p-4 text-center transition-colors duration-200">
                      <div className="mb-1 text-2xl font-bold text-toadster-green">Global</div>
                      <div className="text-xs uppercase tracking-wide text-page-fg-muted">
                        Impact & Reach - 4 Continents
                      </div>
                    </div>
                    <div className="rounded-xl border border-page-border bg-white/[0.02] p-4 text-center transition-colors duration-200">
                      <div className="mb-1 text-2xl font-bold text-toadster-green">AI</div>
                      <div className="text-xs uppercase tracking-wide text-page-fg-muted">
                        Innovation Leader - Recognized 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore More ── */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xl font-semibold uppercase tracking-widest text-toadster-green">
              Keep Exploring
            </p>
            <h2 className="text-3xl font-extrabold text-page-fg md:text-4xl">
              Everything You Need to Know About Toadster - In One Place
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-page-fg-subtle">
              From production-ready AI services and thought-leadership resources to open engineering
              positions and direct access to our team - explore what makes Toadster the technology
              partner businesses trust to build what&apos;s next.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Cpu,
                title: "Our AI Services",
                desc: "End-to-end AI development, agentic systems, LLM fine-tuning, computer vision, and custom ML pipelines. Built for production - not just proof of concept.",
                to: "/services/ai-development",
                cta: "View Services",
              },
              {
                icon: BookOpen,
                title: "Insights & Blog",
                desc: "Deep-dive research, real-world case studies, and engineering perspectives on AI, LLMs, and software architecture from our team.",
                to: "/blogs",
                cta: "Read Articles",
              },
              {
                icon: Briefcase,
                title: "Careers at Toadster",
                desc: "Join a globally distributed team of AI engineers, data scientists, and product builders. Remote-first. Mission-driven.",
                to: "/careers",
                cta: "See Open Roles",
              },
              {
                icon: MessageCircle,
                title: "Talk to Our Team",
                desc: "Have a project in mind? Ready to explore? Get in touch with our solutions team for a no-obligation consultation.",
                to: "/contact",
                cta: "Get in Touch",
              },
            ].map(({ icon: Icon, title, desc, to, cta }) => (
              <Link
                key={title}
                href={to}
                title={title}
                className={cn(
                  "capability-card-surface group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-7",
                )}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/80",
                        "bg-white/80 text-slate-600 transition-all duration-300",
                        "group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white",
                      )}
                    >
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
                    {title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>

                  <p className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-toadster-green transition-all duration-300 group-hover:gap-2">
                    {cta}
                    <ArrowUpRight size={14} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  )
}

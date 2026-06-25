import Image from "next/image"
import Link from "next/link"
import { SplitSectionHeading } from "@/components/SplitSectionHeading"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  ChartLine,
  Cpu,
  Globe,
  Handshake,
  Heart,
  Lightbulb,
  MessageCircle,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const MISSION_STATS = [
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

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We don't follow technology trends - we set them. Every solution we build leverages cutting-edge AI, LLMs, and next-generation engineering practices to keep your business ahead of the curve.",
  },
  {
    icon: Handshake,
    title: "True Client Partnership",
    desc: "We embed with your team. You get a dedicated technology partner who understands your business goals, not just your tech stack. We succeed when you succeed.",
  },
  {
    icon: ChartLine,
    title: "Results-Driven Development",
    desc: "Every feature, model, and deployment is benchmarked against real business outcomes. We measure success in revenue generated, costs reduced, and time saved - not just lines shipped.",
  },
  {
    icon: Globe,
    title: "Global Perspective, Local Insight",
    desc: "Our diverse, globally distributed team brings cross-market expertise to every engagement, combining international best practices with a deep understanding of regional business contexts.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    desc: "We hold ourselves to the highest standards of software craftsmanship. From system architecture to code reviews, quality is non-negotiable at Toadster.",
  },
  {
    icon: Heart,
    title: "Passion for Impact",
    desc: "We genuinely love building things that matter. Technology is our craft, but transforming businesses and improving lives is our purpose.",
  },
] satisfies { icon: LucideIcon; title: string; desc: string }[]

const EXPLORE_LINKS = [
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
] satisfies { icon: LucideIcon; title: string; desc: string; to: string; cta: string }[]

export default function AboutPage() {
  return (
    <div className="about-page min-h-screen">
      <section className="homepage-hero-viewport homepage-hero-viewport--image relative flex flex-col overflow-hidden text-page-fg">
        <div className="homepage-hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="homepage-hero-bg-image absolute inset-0">
            <Image
              src="/about us light mode.png"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={95}
              sizes="100vw"
              className="object-cover object-center dark:hidden"
            />
            <Image
              src="/about us dark  mode.png"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={95}
              sizes="100vw"
              className="hidden object-cover object-center dark:block"
            />
          </div>
          <div className="homepage-hero-bg-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 flex w-full flex-col px-4 pb-12 pt-[calc(5.75rem+env(safe-area-inset-top,0px))] sm:min-h-0 sm:flex-1 sm:justify-center sm:px-6 sm:pb-16 sm:pt-[calc(4.75rem+env(safe-area-inset-top,0px))]">
          <div className="relative z-10 mx-auto w-full max-w-9xl transition-transform duration-700 md:mx-28 md:px-0 md:hover:translate-x-2">
            <h1 className="mb-5 text-3xl font-extrabold leading-tight text-black dark:text-white sm:mb-6 sm:text-4xl md:mb-8 md:text-7xl">
              AI-Powered Engineering for the
              <br />
              <span className="text-toadster-green">Businesses of Tomorrow</span>
            </h1>
            <p className="max-w-2xl text-base font-medium leading-relaxed text-black dark:text-white sm:text-lg md:text-xl">
              We are a global team of engineers, data scientists, and AI researchers who architect,
              build, and scale intelligent digital systems - so your business doesn&apos;t just keep up
              with the future, it leads it.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
              <Link
                href="/contact"
                title="Schedule a free strategy call"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:-translate-y-0.5 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Schedule a Free Strategy Call
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                title="Explore our services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/90 bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white/90 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="mt-5 max-w-3xl text-xs leading-relaxed text-black dark:text-white sm:mt-6 sm:text-sm md:mt-8 md:text-base">
              Trusted by 250+ businesses across the US, UK, India, and UAE &nbsp;|&nbsp; Clutch Global
              Leader 2026 &nbsp;|&nbsp; 85% Long-Term Client Retention
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="homepage-content relative z-10">
          <section className="pt-6 sm:pt-8 md:pt-10">
            <div className="mx-auto grid max-w-9xl items-stretch gap-6 px-4 sm:gap-8 sm:px-6 md:mx-20 md:grid-cols-2 md:gap-12 md:px-0">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400 sm:text-base md:text-xl">
                  Our Mission
                </p>
                <SplitSectionHeading
                  as="h2"
                  title="Making Enterprise-Grade AI Accessible to Every Business"
                  accent="Every Business"
                  className="mb-3 text-xl font-extrabold leading-snug sm:mb-4 sm:text-2xl md:text-4xl"
                />
                <p className="mb-3 text-sm leading-relaxed text-page-fg-subtle sm:mb-4 sm:text-base">
                  We believe powerful technology should not be the exclusive privilege of Fortune 500
                  companies. Toadster Technologies was founded on a single conviction: every business -
                  regardless of size, sector, or budget - deserves access to AI-powered solutions that are
                  practical, scalable, and built to deliver measurable impact.
                </p>
                <p className="mb-5 text-sm leading-relaxed text-page-fg-subtle sm:mb-8 sm:text-base">
                  From early-stage startups in London and New York to large enterprises across India and
                  the UAE, we partner with organizations at every stage of their digital journey to build
                  systems that create lasting competitive advantages.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {MISSION_STATS.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={stat.label}
                        className="capability-card-surface group relative overflow-hidden rounded-2xl p-3 text-center transition-all duration-300 sm:p-5"
                      >
                        <div className="relative z-10">
                          <span className="mx-auto mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-toadster-green text-white shadow-md sm:mb-3 sm:h-10 sm:w-10">
                            <Icon size={18} strokeWidth={2} />
                          </span>
                          <div className="mb-1 text-2xl font-extrabold text-toadster-green sm:text-3xl">{stat.value}</div>
                          <div className="text-[10px] font-semibold text-slate-900 sm:text-xs">{stat.label}</div>
                          <div className="mt-1 text-[10px] leading-snug text-slate-600 sm:text-[11px]">{stat.sub}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="grid min-h-[220px] grid-cols-2 grid-rows-2 gap-3 sm:min-h-[280px] sm:gap-4 md:min-h-0 md:h-full">
                <div className="group relative col-span-2 row-span-1 min-h-[120px] overflow-hidden rounded-2xl border border-page-border shadow-lg sm:min-h-0 sm:rounded-3xl">
                  <Image
                    src="/about2.webp"
                    alt="Collaboration"
                    title="Collaboration"
                    fill
                    loading="lazy"
                    quality={80}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-page-bg/10 transition-colors duration-500 group-hover:bg-transparent" />
                </div>
                <div className="group relative col-span-1 row-span-1 min-h-[100px] overflow-hidden rounded-2xl border border-page-border shadow-lg sm:min-h-0 sm:rounded-3xl">
                  <Image
                    src="/about3.webp"
                    alt="Team Work"
                    title="Team Work"
                    fill
                    loading="lazy"
                    quality={80}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-page-bg/10 transition-colors duration-500 group-hover:bg-transparent" />
                </div>
                <div className="group relative col-span-1 row-span-1 min-h-[100px] overflow-hidden rounded-2xl border border-page-border shadow-lg drop-shadow-xl sm:min-h-0 sm:rounded-3xl">
                  <Image
                    src="/about1.webp"
                    alt="Innovation"
                    title="Innovation"
                    fill
                    loading="lazy"
                    quality={80}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-page-bg/10 transition-colors duration-500 group-hover:bg-transparent" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 sm:py-14 md:py-20">
            <div className="mx-auto max-w-9xl px-4 sm:px-6 md:mx-20 md:px-0">
              <div className="mb-8 text-center sm:mb-10 md:mb-12">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400 sm:text-base md:text-xl">
                  What We Stand For
                </p>
                <SplitSectionHeading
                  as="h2"
                  title="The Principles That Drive Every Line of Code"
                  accent="Every Line of Code"
                  className="text-2xl font-extrabold sm:text-3xl md:text-4xl"
                />
                <p className="mx-auto mt-2 max-w-2xl text-sm text-page-fg-subtle sm:mt-3 sm:text-base">
                  At Toadster, our values are not wall art - they are the operating principles behind
                  every architecture decision, client conversation, and product we ship.
                </p>
              </div>
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2 md:gap-5">
                {VALUES.map((v) => {
                  const Icon = v.icon
                  return (
                    <div
                      key={v.title}
                      className="flex items-start gap-3 rounded-2xl border border-page-border p-4 transition-all hover:border-toadster-green/30 hover:shadow-sm sm:gap-4 sm:p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 sm:h-11 sm:w-11">
                        <Icon className="text-xl text-toadster-green" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="mb-1 text-sm font-bold text-page-fg sm:text-base">{v.title}</div>
                        <div className="text-xs leading-relaxed text-page-fg-muted sm:text-sm">{v.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden pb-10 sm:pb-14 md:pb-20">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-toadster-green blur-[100px]" />
              <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-toadster-green blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-9xl px-4 sm:px-6 md:mx-20 md:px-0">
              <div className="mb-8 text-center sm:mb-12 md:mb-16">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-toadster-green sm:mb-3 sm:text-base md:text-xl">
                  The Team
                </p>
                <SplitSectionHeading
                  as="h2"
                  title="Meet the Visionary Behind Toadster Technologies"
                  accent="Toadster Technologies"
                  className="mb-3 text-2xl font-extrabold sm:mb-4 sm:text-3xl md:text-5xl"
                />
                <p className="mx-auto max-w-2xl text-sm text-black/80 sm:text-base md:text-lg dark:text-page-fg-muted">
                  Our leadership combines decades of enterprise technology experience with a builder&apos;s
                  mindset and a strategist&apos;s eye for business impact.
                </p>
              </div>

              <div className="group relative mx-auto max-w-5xl">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-toadster-green/10 via-toadster-green/5 to-toadster-green/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60" />

                <div className="relative overflow-hidden rounded-2xl border border-page-border transition-all duration-300 group-hover:border-toadster-green/20 sm:rounded-3xl founder-profile-card">
                  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
                    <Image
                      src="/naveen sir bg img light mode.png"
                      alt=""
                      fill
                      quality={95}
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover object-center dark:hidden"
                    />
                    <Image
                      src="/naveen sir bg dark mode.png"
                      alt=""
                      fill
                      quality={95}
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="hidden object-cover object-center dark:block"
                    />
                    <div className="absolute inset-0 hidden bg-black/50 dark:block" />
                    <div className="absolute inset-0 hidden bg-gradient-to-b from-black/30 via-black/45 to-black/65 dark:block" />
                  </div>

                  <div className="relative z-10 h-1 bg-gradient-to-r from-transparent via-toadster-green to-transparent" />

                  <div className="relative z-10 p-5 sm:p-8 md:p-12">
                    <div className="mb-6 flex justify-center sm:mb-8">
                      <div className="relative">
                        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-toadster-green/40 to-toadster-green/20 blur-md transition-all duration-300" />
                        <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-toadster-green/50 bg-white shadow-2xl transition-all duration-300 group-hover:border-toadster-green/60 sm:h-48 sm:w-48 md:h-56 md:w-56">
                          <Image
                            src="/leader.webp"
                            alt="Naveen Singh"
                            title="Naveen Singh"
                            fill
                            loading="lazy"
                            quality={80}
                            className="scale-[1.06] origin-[50%_32%] object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-[1.1]"
                            sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 224px"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-toadster-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                        <div className="absolute -right-2 -top-2 h-6 w-6 animate-pulse rounded-full bg-toadster-green" />
                        <div className="absolute -bottom-2 -left-2 h-4 w-4 animate-pulse rounded-full bg-toadster-green/60 delay-75" />
                      </div>
                    </div>

                    <div className="space-y-3 text-center sm:space-y-4">
                      <div>
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl dark:text-white">
                          Mr. Naveen Singh
                        </h3>
                        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-toadster-green/30 bg-toadster-green/10 px-3 py-1.5 sm:px-4 sm:py-2">
                          <div className="h-2 w-2 animate-pulse rounded-full bg-toadster-green" />
                          <h4 className="text-xs font-semibold text-toadster-green sm:text-sm md:text-base">
                            Founder & Chief Executive Officer
                          </h4>
                        </div>
                        <p className="mt-2 text-xs text-black/75 sm:text-sm dark:text-white/80">
                          Toadster Technologies Pvt. Ltd.
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-2 py-3 sm:py-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-toadster-green/50" />
                        <div className="h-1.5 w-1.5 rounded-full bg-toadster-green" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-toadster-green/50" />
                      </div>

                      <div className="founder-profile-copy mx-auto max-w-3xl text-left sm:text-center">
                        <p className="text-sm leading-relaxed text-black sm:text-base md:text-lg dark:text-white/90">
                          Naveen Singh is a technology entrepreneur and AI innovation leader with over{" "}
                          <span className="font-semibold text-toadster-green">two decades</span> of
                          hands-on experience transforming complex business challenges into scalable,
                          production-ready technology solutions.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-black sm:mt-4 sm:text-base dark:text-white/85">
                          As the Founder and CEO of Toadster Technologies Pvt. Ltd., Naveen drives the
                          company&apos;s strategic vision: building AI-powered platforms that help enterprises
                          operate with greater speed, intelligence, and precision. Under his leadership,
                          Toadster has become a recognized partner for businesses across the US, UK,
                          India, and UAE seeking to modernize their operations through applied AI and custom
                          software engineering.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-black sm:mt-4 sm:text-base dark:text-white/85">
                          Before founding Toadster, Naveen held senior benchmark roles at{" "}
                          <span className="font-medium text-black dark:text-white">EA Sports</span> and{" "}
                          <span className="font-medium text-black dark:text-white">Samsung India Electronics</span>,
                          where he contributed to globally distributed products and set new performance
                          standards for technology delivery. These experiences forged his philosophy:
                          technology must serve business outcomes, not the other way around.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-black sm:mt-4 sm:text-base dark:text-white/85">
                          A strategic thinker and hands-on builder, Naveen is a vocal advocate for
                          responsible AI innovation. He believes that the most powerful technology is
                          technology that is explainable, ethical, and built with the end user at its
                          center.
                        </p>
                      </div>

                      <div className="mt-6 grid grid-cols-1 gap-3 border-t border-page-border pt-6 sm:mt-8 sm:gap-4 sm:pt-8 md:grid-cols-3">
                        <div className="rounded-xl border border-page-border bg-white/[0.02] p-3 text-center transition-colors duration-200 sm:p-4">
                          <div className="mb-1 text-xl font-bold text-toadster-green sm:text-2xl">20+</div>
                          <div className="text-[10px] uppercase tracking-wide text-black/75 sm:text-xs dark:text-white/75">
                            Years of Experience
                          </div>
                        </div>
                        <div className="rounded-xl border border-page-border bg-white/[0.02] p-3 text-center transition-colors duration-200 sm:p-4">
                          <div className="mb-1 text-xl font-bold text-toadster-green sm:text-2xl">Global</div>
                          <div className="text-[10px] uppercase tracking-wide text-black/75 sm:text-xs dark:text-white/75">
                            Impact & Reach - 4 Continents
                          </div>
                        </div>
                        <div className="rounded-xl border border-page-border bg-white/[0.02] p-3 text-center transition-colors duration-200 sm:p-4">
                          <div className="mb-1 text-xl font-bold text-toadster-green sm:text-2xl">AI</div>
                          <div className="text-[10px] uppercase tracking-wide text-black/75 sm:text-xs dark:text-white/75">
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

          <section className="pb-10 sm:pb-14 md:pb-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-0">
              <div className="mb-8 text-center sm:mb-10 md:mb-12">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-toadster-green sm:mb-3 sm:text-base md:text-xl">
                  Keep Exploring
                </p>
                <SplitSectionHeading
                  as="h2"
                  title="Everything You Need to Know About Toadster - In One Place"
                  accent="In One Place"
                  className="text-2xl font-extrabold sm:text-3xl md:text-4xl"
                />
                <p className="mx-auto mt-2 max-w-2xl text-sm text-page-fg-subtle sm:mt-3 sm:text-base">
                  From production-ready AI services and thought-leadership resources to open engineering
                  positions and direct access to our team - explore what makes Toadster the technology
                  partner businesses trust to build what&apos;s next.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                {EXPLORE_LINKS.map(({ icon: Icon, title, desc, to, cta }) => (
                  <Link
                    key={title}
                    href={to}
                    title={title}
                    className={cn(
                      "capability-card-surface group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 transition-all duration-300 sm:p-6 md:p-7",
                    )}
                  >
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-4 flex items-start justify-between gap-4 sm:mb-5">
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

                      <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-slate-700 sm:text-lg">
                        {title}
                      </h3>

                      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">{desc}</p>

                      <p className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-toadster-green transition-all duration-300 group-hover:gap-2 sm:pt-5">
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

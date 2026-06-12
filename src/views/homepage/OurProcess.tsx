"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Search, PencilRuler, Hammer, Rocket, ArrowRight } from "lucide-react"
import { useMemo, useRef, useState } from "react"
import Link from "next/link"

const OurProcess = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const sectionRef = useRef<HTMLElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.5", "end 0.55"],
    })
    const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    const steps = useMemo(
        () => [
            {
                id: "01",
                title: "Discover",
                description: "Deep-dive into your business, challenges, and goals to define the right strategy.",
                Icon: Search,
            },
            {
                id: "02",
                title: "Architect",
                description: "Design scalable, future-proof systems architectures and technical blueprints.",
                Icon: PencilRuler,
            },
            {
                id: "03",
                title: "Build",
                description: "Agile development with CI/CD, testing, and iterative delivery cycles.",
                Icon: Hammer,
            },
            {
                id: "04",
                title: "Scale",
                description: "Deploy, monitor, and continuously optimize for growth and performance.",
                Icon: Rocket,
            },
        ],
        []
    )

    return (
        <section ref={sectionRef} className="relative">
            <div className="max-w-9xl mx-20 px-4 pt-10 pb-10">
                <div className="text-center">
                    <p className="text-lg tracking-[0.35em] section-eyebrow font-bold">OUR PROCESS</p>
                    <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-page-fg">
                        How We <span className="text-toadster-green">Work</span>
                    </h2>
                    <p className="mt-4 text-sm md:text-xl text-page-fg-subtle max-w-2xl mx-auto">
                        A proven methodology that turns complex challenges into scalable solutions.
                    </p>
                </div>

                <div className="mt-12 md:mt-14">
                    {/* Desktop: horizontal line + steps */}
                    <div className="hidden md:block relative">
                        <div className="absolute inset-x-[104px] top-[52px] z-0 h-[2px] bg-page-fg/10 rounded-full" />
                        <motion.div
                            className="absolute inset-x-[104px] top-[52px] z-0 h-[2px] bg-toadster-green rounded-full origin-left"
                            style={{ scaleX: lineScaleX }}
                        />
                        <div className="relative z-10 grid grid-cols-4 gap-8">
                            {steps.map((step, i) => {
                                const isActive = activeIndex === i
                                const Icon = step.Icon
                                return (
                                    <motion.div
                                        key={step.id}
                                        onMouseEnter={() => setActiveIndex(i)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                        className="text-center"
                                    >
                                        <div className="relative z-10 mx-auto w-[104px] h-[104px]">
                                            <div
                                                className={`relative w-full h-full rounded-full bg-page-card border shadow-sm flex flex-col items-center justify-center overflow-hidden transition-all duration-300 dark:bg-white dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.45)] ${isActive ? "border-toadster-green dark:border-toadster-green" : "border-page-border dark:border-slate-200/80"
                                                    }`}
                                            >
                                                <motion.div
                                                    className="absolute inset-0 rounded-full"
                                                    initial={false}
                                                    animate={
                                                        isActive
                                                            ? {
                                                                opacity: 1,
                                                                scale: 1.25,
                                                            }
                                                            : {
                                                                opacity: 0,
                                                                scale: 0.5,
                                                            }
                                                    }
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                    style={{
                                                        background:
                                                            "radial-gradient(circle at center, color-mix(in srgb, var(--toadster-green) 10%, transparent), color-mix(in srgb, var(--toadster-green) 10%, transparent) 45%, rgba(255,255,255,0) 75%)",
                                                    }}
                                                />

                                                <Icon className={`transition-colors duration-300 ${isActive ? "text-page-fg dark:text-slate-900" : "text-page-fg-muted dark:text-slate-600"}`} size={28} />
                                                <span className={`mt-1 text-[12px] font-bold transition-colors duration-300 ${isActive ? "text-page-fg dark:text-slate-900" : "text-page-fg-muted dark:text-slate-600"}`}>{step.id}</span>
                                            </div>
                                        </div>

                                        <p className={`mt-5 text-base font-extrabold transition-colors duration-300 ${isActive ? "text-page-fg" : "text-page-fg-subtle"}`}>
                                            {step.title}
                                        </p>
                                        <p className="mt-2 text-sm text-page-fg-muted leading-relaxed max-w-[18rem] mx-auto">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Mobile: vertical line + left circle/right text */}
                    <div className="md:hidden relative">
                        <div className="absolute left-[40px] top-[40px] bottom-[40px] z-0 w-[2px] bg-page-fg/10 rounded-full" />
                        <motion.div
                            className="absolute left-[40px] top-[40px] bottom-[40px] z-0 w-[2px] rounded-full overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-toadster-green to-transparent"
                                style={{ y: useTransform(lineScaleX, [0, 1], ["-120%", "120%"]) }}
                                transition={{ duration: 0.9, ease: "linear" }}
                            />
                        </motion.div>

                        <div className="relative z-10 space-y-12">
                            {steps.map((step, i) => {
                                const isActive = activeIndex === i
                                const Icon = step.Icon
                                return (
                                    <div key={step.id} className="flex items-start gap-6">
                                        <motion.div
                                            onMouseEnter={() => setActiveIndex(i)}
                                            onMouseLeave={() => setActiveIndex(null)}
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                            className="flex-shrink-0"
                                        >
                                            <div className="relative z-10 w-[80px] h-[80px]">
                                                <div
                                                    className={`relative w-full h-full rounded-full bg-page-card border shadow-sm flex flex-col items-center justify-center overflow-hidden transition-all duration-300 dark:bg-white dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.45)] ${isActive ? "border-toadster-green dark:border-toadster-green" : "border-page-border dark:border-slate-200/80"
                                                        }`}
                                                >
                                                    <motion.div
                                                        className="absolute inset-0 rounded-full"
                                                        initial={false}
                                                        animate={
                                                            isActive
                                                                ? {
                                                                    opacity: 1,
                                                                    scale: 1.25,
                                                                }
                                                                : {
                                                                    opacity: 0,
                                                                    scale: 0.5,
                                                                }
                                                        }
                                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                                        style={{
                                                            background:
                                                                "radial-gradient(circle at center, color-mix(in srgb, var(--toadster-green) 10%, transparent), color-mix(in srgb, var(--toadster-green) 10%, transparent) 45%, rgba(255,255,255,0) 75%)",
                                                        }}
                                                    />

                                                    <Icon className={`transition-colors duration-300 ${isActive ? "text-page-fg dark:text-slate-900" : "text-page-fg-muted dark:text-slate-600"}`} size={24} />
                                                    <span className={`mt-1 text-[10px] font-bold transition-colors duration-300 ${isActive ? "text-page-fg dark:text-slate-900" : "text-page-fg-muted dark:text-slate-600"}`}>{step.id}</span>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <div className="flex-1 pt-2">
                                            <p className={`text-base font-extrabold transition-colors duration-300 ${isActive ? "text-page-fg" : "text-page-fg-subtle"}`}>
                                                {step.title}
                                            </p>
                                            <p className="mt-2 text-sm text-page-fg-muted leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/services/ai-consultation"
                        title="Get a free AI consultation"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
                    >
                        Start with AI Consultation
                        <ArrowRight size={16} />
                    </Link>
                    <Link
                        href="/blogs"
                        title="See how we deliver projects"
                        className="inline-flex items-center gap-2 rounded-xl border border-page-border-strong px-7 py-3 text-page-fg font-semibold transition-colors hover:bg-page-fg/5"
                    >
                        See Our Insights
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OurProcess
"use client"

import { ArrowRight } from "lucide-react"
import { useMemo } from "react"
import Link from "next/link"
import { Search, PencilRuler, Hammer, Rocket } from "lucide-react"
import { ProcessSteps } from "@/components/homepage/ProcessSteps"

const OurProcess = () => {
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
        <section className="relative">
            <div className="max-w-9xl mx-20 px-4 pt-10 pb-10">
                <div className="text-center">
                    <p className="text-lg tracking-[0.35em] section-eyebrow font-bold">OUR PROCESS</p>
                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                        <span className="text-black dark:text-white">How We </span>
                        <span className="text-toadster-green">Work</span>
                    </h2>
                    <p className="mt-4 text-sm md:text-xl text-page-fg-subtle max-w-2xl mx-auto">
                        A proven methodology that turns complex challenges into scalable solutions.
                    </p>
                </div>

                <div className="mt-12 md:mt-14">
                    <ProcessSteps steps={steps} />
                </div>

                <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/services/ai-development"
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

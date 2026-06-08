import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Database, ShieldCheck, Workflow, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const FEATURES = [
    {
        title: "Data-First Engineering",
        description:
            "Reliable pipelines, warehousing, and governance—so your data is clean, trusted, and ready for analytics & ML.",
        icon: Database,
    },
    {
        title: "AI-First Delivery",
        description:
            "From forecasting to GenAI, we build production-grade models with measurable impact—not demos.",
        icon: Brain,
    },
    {
        title: "MLOps & Monitoring",
        description:
            "Deploy, observe, and iterate faster with reproducible training, CI/CD, evaluation, and drift monitoring.",
        icon: Workflow,
    },
    {
        title: "Secure by Design",
        description:
            "Security & compliance baked in—access controls, encryption, and best practices across your data and AI stack.",
        icon: ShieldCheck,
    },
]

const WhyUs = () => {
    const ref = useRef<HTMLElement | null>(null)
    const inView = useInView(ref, { amount: 0.35, once: true })

    return (
        <section ref={ref} className="bg-page-bg">
            <div className="max-w-9xl mx-20 px-4 pt-10 pb-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-14">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl text-center lg:text-left"
                    >
                        <p className="text-xl font-semibold tracking-[0.25em] section-eyebrow uppercase">WHY US</p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] text-page-fg">
                            Why Choose
                            <span className="block text-toadster-green">Toadster</span>
                        </h2>

                        <p className="mt-6 text-sm md:text-base text-page-fg-subtle leading-relaxed">
                            We don’t just build software—we engineer intelligent systems centered around data quality, ML reliability,
                            and production-grade delivery.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 lg:justify-start justify-center">
                            <Link
                                to="/about"
                                title="Learn more about Toadster"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#1C3829] px-6 py-3 text-white font-semibold transition-colors hover:bg-green-800"
                            >
                                Learn About Us
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                to="/services/ai-development"
                                title="View our AI development services"
                                className="inline-flex items-center gap-2 rounded-xl border border-page-border-strong px-6 py-3 text-page-fg font-semibold transition-colors hover:bg-page-fg/10"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            show: {
                                opacity: 1,
                                x: 0,
                                transition: { staggerChildren: 0.12 },
                            },
                        }}
                        className="w-full max-w-xl space-y-4"
                    >
                        {FEATURES.map((f, index) => {
                            const Icon = f.icon
                            return (
                                <motion.div
                                    key={f.title}
                                    variants={{
                                        hidden: { opacity: 0, x: 30 },
                                        show: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                                    className="feature-card group"
                                >
                                    <div className="flex gap-4 p-5">
                                        <div className="feature-icon h-11 w-11 shrink-0">
                                            <Icon size={18} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-semibold text-page-fg text-sm transition-colors group-hover:text-toadster-green">{f.title}</p>
                                            <p className="mt-1 text-xs md:text-sm text-page-fg-muted leading-relaxed">{f.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
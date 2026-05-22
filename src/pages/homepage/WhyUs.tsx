import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Database, ShieldCheck, Workflow } from "lucide-react"

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
        <section ref={ref} className="bg-[#050d18]">
            <div className="max-w-9xl mx-auto px-6 pt-10 pb-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-14">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl text-center lg:text-left"
                    >
                        <p className="text-xl font-semibold tracking-[0.25em] text-toadster-green uppercase">WHY US</p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] text-white">
                            Why Choose
                            <span className="block text-toadster-green">Toadster</span>
                        </h2>

                        <p className="mt-6 text-sm md:text-base text-gray-300 leading-relaxed">
                            We don’t just build software—we engineer intelligent systems centered around data quality, ML reliability,
                            and production-grade delivery.
                        </p>
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
                                    whileHover={{ y: -2, x: 5 }}
                                    className="group rounded-2xl  backdrop-blur shadow-gray-600 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex gap-4 p-5">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/5 text-toadster-green">
                                            <Icon size={18} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-semibold text-white text-sm">{f.title}</p>
                                            <p className="mt-1 text-xs md:text-sm text-gray-400 leading-relaxed">{f.description}</p>
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
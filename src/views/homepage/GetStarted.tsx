"use client"

import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
export default function GetStarted() {
  const router = useRouter()

  return (
    <section className="homepage-snap-section relative isolate flex w-full flex-col justify-center overflow-hidden py-16 md:py-20">
      <div className="homepage-cta-box section-full-bleed relative z-10 w-full px-6 py-14 text-center sm:px-10 md:px-16 md:py-16 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-bold leading-tight text-slate-900 dark:text-black sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Ready to Build{" "}
            <span className="text-[#15803d] dark:text-black">Intelligent Systems?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-800 sm:text-lg dark:text-black/85"
          >
            Let&apos;s partner to design and build the AI-powered future your business deserves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
            >
              Get Started Today
              <ChevronRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-800 sm:gap-8 dark:text-black/80"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-toadster-green" />
              No Lock-in
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-toadster-green" />
              Enterprise Ready
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-toadster-green" />
              24/7 Support
            </div>
          </motion.div>
      </div>
    </section>
  )
}

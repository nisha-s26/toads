"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"

const GET_STARTED_QUESTION_IMAGE = "/get-started-question.webp"

export default function GetStarted() {
  return (
    <section className="homepage-snap-section relative isolate flex w-full flex-col justify-center overflow-hidden px-4 pt-4 sm:pt-5">
      <div className="homepage-cta-box section-full-bleed relative z-10 w-full overflow-hidden px-5 py-10 text-center sm:px-10 sm:py-14 md:px-16 md:py-16 lg:px-20">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[42%] max-w-[480px] md:block"
          aria-hidden
        >
          <Image
            src={GET_STARTED_QUESTION_IMAGE}
            alt=""
            fill
            loading="lazy"
            quality={80}
            className="object-contain object-right opacity-95 dark:opacity-100"
            sizes="(max-width: 768px) 42vw, 480px"
          />
        </div>

        <ScrollReveal className="relative z-10 py-10">
          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Build{" "}
            <span className="text-[#15803d] dark:text-toadster-green">Intelligent Systems?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-800 sm:text-lg dark:text-white/85">
            Let&apos;s partner to design and build the AI-powered future your business deserves.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              title="Get started with Toadster"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md dark:shadow-[0_0_28px_rgba(34,197,94,0.32)] dark:hover:shadow-[0_0_36px_rgba(34,197,94,0.42)]"
            >
              Get Started Today
              <ChevronRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-800 sm:gap-8 dark:text-white/75">
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

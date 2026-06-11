"use client"

import Image from "next/image"
import { motion, useAnimationFrame, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect, useMemo, useRef, useState } from "react"

interface ClientLogo {
    label: string
    src: string
}

const LOGOS: ClientLogo[] = [
    { label: "Google", src: "/trusted-by/google.webp" },
    { label: "Paytm", src: "/trusted-by/paytm.webp" },
    { label: "FireAI", src: "/trusted-by/fireai.webp" },
    { label: "Axis Bank", src: "/trusted-by/axis.webp" },
    { label: "Tawuniya", src: "/trusted-by/tawuniya.webp" },
    { label: "H&M", src: "/trusted-by/hm.webp" },
]

const LOGO_HEIGHT_CLASS = "h-10 w-auto shrink-0 sm:h-11 md:h-12"

const MarqueeRow = ({
    direction = "left",
    scrollDirection,
}: {
    direction?: "left" | "right"
    scrollDirection: 1 | -1
}) => {
    const trackRef = useRef<HTMLDivElement | null>(null)
    const x = useMotionValue(0)
    const [distance, setDistance] = useState(0)

    const items = useMemo(() => {
        const set = [...LOGOS, ...LOGOS, ...LOGOS]
        return [...set, ...set]
    }, [])

    useEffect(() => {
        const el = trackRef.current
        if (!el) return

        const updateDistance = () => {
            setDistance(el.scrollWidth / 2)
        }

        updateDistance()

        const ro = new ResizeObserver(updateDistance)
        ro.observe(el)

        return () => {
            ro.disconnect()
        }
    }, [])

    useEffect(() => {
        if (!distance) return
        x.set(direction === "left" ? 0 : -distance)
    }, [direction, distance, x])

    useAnimationFrame((_, delta) => {
        if (!distance) return

        const baseDir = direction === "left" ? -1 : 1
        const dir = baseDir * scrollDirection
        const speedPxPerSec = 28
        const next = x.get() + dir * speedPxPerSec * (delta / 1000)

        if (next <= -distance) {
            x.set(next + distance)
            return
        }

        if (next >= 0) {
            x.set(next - distance)
            return
        }

        x.set(next)
    })

    return (
        <div className="relative overflow-hidden py-4">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-page-bg to-transparent dark:from-black sm:w-16" /> */}
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-page-bg to-transparent dark:from-black sm:w-16" /> */}

            <motion.div
                ref={trackRef}
                className="flex w-max items-center gap-16 md:gap-20"
                style={{ x }}
            >
                {items.map(({ label, src }, idx) => (
                    <Image
                        key={`${label}-${idx}`}
                        src={src}
                        alt={label}
                        width={120}
                        height={48}
                        draggable={false}
                        className={`${LOGO_HEIGHT_CLASS} block object-contain brightness-0 opacity-70 transition-opacity duration-200 hover:opacity-100 dark:invert`}
                    />
                ))}
            </motion.div>
        </div>
    )
}

const TrustedBy = () => {
    const { scrollY } = useScroll()
    const [scrollDirection, setScrollDirection] = useState<1 | -1>(1)
    const lastY = useRef(0)

    useMotionValueEvent(scrollY, "change", (y) => {
        const prev = lastY.current
        if (y > prev) setScrollDirection(1)
        else if (y < prev) setScrollDirection(-1)
        lastY.current = y
    })

    return (
        <section className="section-full-bleed">
            <div className="w-full px-4 pb-2">
                {/* <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">
                   <span className="text-black dark:text-white">Trusted By Innovative </span>
                    <span className="hero-accent">Teams Worldwide</span>
                </h2> */}

                <MarqueeRow direction="right" scrollDirection={scrollDirection} />
            </div>
        </section>
    )
}

export default TrustedBy

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
        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-page-bg dark:from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-page-bg dark:from-white to-transparent" />

            <motion.div ref={trackRef} className="flex w-max items-center gap-16 py-4" style={{ x }}>
                {items.map(({ label, src }, idx) => (
                    <div
                        key={`${label}-${idx}`}
                        className="flex shrink-0 items-center"
                    >
                        <img
                            src={src}
                            alt={label}
                            className="h-8 w-auto max-w-[140px] object-contain transition-opacity duration-200 hover:opacity-100"
                        />
                    </div>
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
        <section className="section-full-bleed bg-page-bg dark:bg-white">
            <div className="w-full px-4 py-14">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">
                   <span className="text-page-fg dark:text-[#2C3E50]">Trusted By Innovative </span>
                    <span className="text-green-400 dark:text-green-600">Teams Worldwide</span>
                </h2>

                <div className="mt-8 space-y-3">
                    <MarqueeRow direction="right" scrollDirection={scrollDirection} />
                </div>
            </div>
        </section>
    )
}

export default TrustedBy

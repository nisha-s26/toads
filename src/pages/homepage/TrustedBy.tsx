import { motion, useAnimationFrame, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect, useMemo, useRef, useState } from "react"

const LOGOS = [
    "Google",
    "Paytm",
    "FireAI",
    "Noise",
    "MyChallan",
    "Axis Bank",
    "Reliance",
    "Tawuniya",
    "H&M",
]

const getInitials = (label: string) => {
    const cleaned = label.replace(/&/g, " ").trim()
    const parts = cleaned.split(/\s+/).filter(Boolean)
    const first = parts[0]?.[0] ?? ""
    const second = parts.length > 1 ? parts[1]?.[0] ?? "" : (parts[0]?.[1] ?? "")
    return `${first}${second}`.toUpperCase()
}

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
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#050d18] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#050d18] to-transparent" />

            <motion.div ref={trackRef} className="flex w-max items-center gap-12 py-4" style={{ x }}>
                {items.map((label, idx) => (
                    <div
                        key={`${label}-${idx}`}
                        className="flex items-center"
                    >
                        <span className="group cursor-pointer inline-flex items-center gap-2 text-gray-400 text-xs tracking-wide font-semibold transition-colors duration-200 hover:text-white">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] text-gray-400 transition-colors duration-200 group-hover:bg-white/20 group-hover:text-white">
                                {getInitials(label)}
                            </span>
                            <span>{label}</span>
                        </span>
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
        <section className="bg-[#050d18]">
            <div className="max-w-9xl mx-auto px-6 py-14">
                <p className="text-center text-[10px] tracking-[0.35em] text-toadster-green">
                    TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
                </p>

                <div className="mt-8 space-y-3">
                    <MarqueeRow direction="left" scrollDirection={scrollDirection} />
                    <MarqueeRow direction="right" scrollDirection={scrollDirection} />
                </div>
            </div>
        </section>
    )
}

export default TrustedBy
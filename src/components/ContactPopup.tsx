import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageSquare, Send, Sparkles, X } from "lucide-react"
import { useLocation } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const SESSION_KEY = "toadster-contact-popup-dismissed"
const DELAY_MS = 10_000

type SubmitStatus = "idle" | "success" | "error"

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const panelVariants = {
  hidden: { opacity: 0, scale: 0.72, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 22, stiffness: 320, mass: 0.85 },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    y: 12,
    transition: { duration: 0.22, ease: "easeIn" as const },
  },
}

export function ContactPopup() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    fromEmail: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle")

  const dismiss = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1")
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (pathname === "/contact") return
    if (sessionStorage.getItem(SESSION_KEY)) return

    const timer = window.setTimeout(() => setIsOpen(true), DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, dismiss])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const res = await fetch("/api/send-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed")

      setSubmitStatus("success")
      setFormData({ name: "", fromEmail: "", company: "", message: "" })
      window.setTimeout(() => {
        dismiss()
        setSubmitStatus("idle")
      }, 2200)
    } catch {
      setSubmitStatus("error")
      window.setTimeout(() => setSubmitStatus("idle"), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          transition={{ duration: 0.28 }}
        >
          <motion.button
            type="button"
            aria-label="Close contact form"
            className="absolute inset-0 bg-black/55 backdrop-blur-[6px] dark:bg-black/70"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            className="relative w-full max-w-lg"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-linear-to-br from-toadster-green/50 via-transparent to-toadster-green/20 opacity-80 blur-sm dark:from-toadster-green/60 dark:to-emerald-400/20"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-toadster-green/15 blur-3xl dark:bg-toadster-green/25"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl dark:bg-emerald-400/15"
            />

            <div
              className={cn(
                "relative overflow-hidden rounded-[1.25rem] border shadow-2xl",
                "border-page-border bg-white dark:border-white/10 dark:bg-[#1C3829]",
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-br from-toadster-green/[0.04] via-transparent to-emerald-500/[0.06] dark:from-toadster-green/[0.08] dark:to-black/20"
              />

              <div className="relative p-6 sm:p-7">
                <button
                  type="button"
                  onClick={dismiss}
                  disabled={isSubmitting}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-page-border bg-page-bg-alt text-page-fg-muted transition-colors hover:bg-page-accent-soft hover:text-page-fg disabled:opacity-50 dark:border-white/10 dark:bg-black/20 dark:hover:bg-white/10"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                <div className="mb-6 pr-8">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-toadster-green/25 bg-toadster-green/10 px-3 py-1 text-xs font-semibold tracking-wide text-toadster-green uppercase dark:border-toadster-green/35 dark:bg-toadster-green/15">
                    <Sparkles size={12} />
                    Let's connect
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toadster-green/15 text-toadster-green dark:bg-toadster-green/20">
                      <MessageSquare size={20} />
                    </span>
                    <div>
                      <h2 id="contact-popup-title" className="text-xl font-bold text-page-fg sm:text-2xl">
                        Contact Us
                      </h2>
                      <p className="mt-1 text-sm text-page-fg-muted">
                        Share your idea — we'll get back within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="relative space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="popup-name" className="mb-1.5 block text-xs font-medium text-page-fg">
                        Name
                      </label>
                      <Input
                        id="popup-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="h-10 border-page-border bg-page-bg-alt/80 text-page-fg placeholder:text-page-fg-muted/70 focus-visible:border-toadster-green focus-visible:ring-toadster-green/30 dark:border-white/10 dark:bg-black/25 dark:focus-visible:border-toadster-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="popup-email" className="mb-1.5 block text-xs font-medium text-page-fg">
                        Email
                      </label>
                      <Input
                        id="popup-email"
                        name="fromEmail"
                        type="email"
                        value={formData.fromEmail}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="h-10 border-page-border bg-page-bg-alt/80 text-page-fg placeholder:text-page-fg-muted/70 focus-visible:border-toadster-green focus-visible:ring-toadster-green/30 dark:border-white/10 dark:bg-black/25 dark:focus-visible:border-toadster-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="popup-company" className="mb-1.5 block text-xs font-medium text-page-fg">
                      Company
                    </label>
                    <Input
                      id="popup-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="h-10 border-page-border bg-page-bg-alt/80 text-page-fg placeholder:text-page-fg-muted/70 focus-visible:border-toadster-green focus-visible:ring-toadster-green/30 dark:border-white/10 dark:bg-black/25 dark:focus-visible:border-toadster-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-query" className="mb-1.5 block text-xs font-medium text-page-fg">
                      Query
                    </label>
                    <Textarea
                      id="popup-query"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell me about your query..."
                      className="min-h-[7.5rem] resize-none border-page-border bg-page-bg-alt/80 text-page-fg placeholder:text-page-fg-muted/70 focus-visible:border-toadster-green focus-visible:ring-toadster-green/30 dark:border-white/10 dark:bg-black/25 dark:focus-visible:border-toadster-green"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg border border-toadster-green/30 bg-toadster-green/10 px-3 py-2.5"
                    >
                      <p className="text-sm font-medium text-toadster-green">
                        Message sent! We'll be in touch soon.
                      </p>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5"
                    >
                      <p className="text-sm font-medium text-red-500 dark:text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitStatus === "success"}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="group relative mt-1 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-toadster-green font-semibold text-toadster-green-foreground shadow-[0_0_24px_-4px] shadow-toadster-green/50 transition-shadow hover:shadow-[0_0_32px_-2px] hover:shadow-toadster-green/60 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <Send size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

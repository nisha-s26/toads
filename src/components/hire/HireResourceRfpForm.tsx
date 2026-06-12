"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Clock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface HireResourceRfpFormProps {
  roleTitle: string
}

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-zinc-800"

const fieldClass =
  "h-12 text-base text-zinc-900 bg-white border-zinc-300 placeholder:text-zinc-500 shadow-sm focus-visible:border-zinc-600 focus-visible:ring-zinc-400/30 rounded-xl"

export function HireResourceRfpForm({ roleTitle }: HireResourceRfpFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  })
  const [captchaChecked, setCaptchaChecked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaChecked) {
      alert("Please confirm you are not a robot.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const res = await fetch("/api/send-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          fromEmail: formData.email,
          company: `Hire Resource Request (${roleTitle})` + (formData.phone ? ` - Phone: ${formData.phone}` : ""),
          message: formData.details,
        }),
      })

      if (!res.ok) throw new Error("Failed")

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", details: "" })
      setCaptchaChecked(false)
      setTimeout(() => setSubmitStatus("idle"), 4000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bright-card-hover relative overflow-hidden rounded-[1.35rem] bg-white shadow-[0_32px_80px_rgba(15,23,42,0.18)] ring-1 ring-zinc-200">
      {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-zinc-400 via-zinc-600 to-zinc-900" /> */}

      <div className="relative z-10 border-b border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-zinc-100/50 px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-2xl font-bold tracking-tight text-zinc-900">Request a Free Consultation</p>
            <p className="mt-2 text-base leading-relaxed text-zinc-700">
              Tell us what you need - we respond within 4 business hours.
            </p>
          </div>
          <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-800">
            <Clock size={13} />
            4 hr reply
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5 px-6 py-6 sm:px-8 sm:py-7 text-left">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClass}>Your Full Name *</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="e.g. Rahul Mehta"
              className={fieldClass}
            />
          </div>

          <div>
            <label className={labelClass}>Work Email Address *</label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="e.g. rahul@yourcompany.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label className={labelClass}>Phone Number (Optional)</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="+91 9XXXXXXXXX"
              className={fieldClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>Tell Us About Your Requirement *</label>
            <Textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              placeholder="What role do you need? How many engineers? Timeline? Required skills or frameworks?"
              rows={4}
              className={`${fieldClass} min-h-[8rem] resize-none py-3`}
            />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3.5 select-none">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={captchaChecked}
              onChange={(e) => setCaptchaChecked(e.target.checked)}
              className="h-4 w-4 cursor-pointer rounded border-zinc-400 accent-zinc-900"
            />
            <span className="text-sm font-medium text-zinc-800">I&apos;m not a robot</span>
          </label>
          <div className="flex flex-col items-center gap-0.5">
            <Image
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCAPTCHA logo"
              width={20}
              height={20}
              className="h-5 w-5 opacity-80"
            />
            <span className="text-[9px] font-medium text-zinc-600">reCAPTCHA</span>
          </div>
        </div>

        {submitStatus === "success" && (
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-center">
            <p className="text-sm font-medium text-emerald-800">Thank you! We&apos;ll respond within 4 business hours.</p>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-center">
            <p className="text-sm font-medium text-red-800">Failed to submit. Please try again.</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-[3.25rem] w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-md disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Get My Free Quote"}
          {!isSubmitting && <ArrowRight size={18} className="ml-1" />}
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm text-zinc-700">
          <ShieldCheck size={15} className="text-zinc-600" />
          <span>No commitment required. Response within 4 business hours.</span>
        </div>
      </form>
    </div>
  )
}

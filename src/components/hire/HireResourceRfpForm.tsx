"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HireResourceRfpFormProps {
  roleTitle: string
  formSubtext?: string
  submitFooterText?: React.ReactNode
  engagementOptions?: { value: string; label: string }[]
  projectBriefLabel?: string
  size?: "default" | "large"
}

export function HireResourceRfpForm({
  roleTitle,
  formSubtext = "Tell us about your project and we'll connect you with the right developer within 24 hours.",
  submitFooterText = "Response within 24 hr",
  engagementOptions = [
    { value: "Full-Time Dedicated", label: "Full-Time Dedicated" },
    { value: "Part-Time Dedicated", label: "Part-Time Dedicated" },
    { value: "Dedicated Team", label: "Dedicated Team" },
  ],
  projectBriefLabel = "Project Brief / Requirements",
  size = "default",
}: HireResourceRfpFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    engagementModel: engagementOptions[0]?.value ?? "Full-Time Dedicated",
    details: "",
  })
  const [captchaChecked, setCaptchaChecked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          fromEmail: formData.email,
          company: `${formData.company || "None"} (Hire Resource Request: ${roleTitle}, Model: ${formData.engagementModel})` + (formData.phone ? ` - Phone: ${formData.phone}` : ""),
          message: formData.details,
        }),
      })

      if (!res.ok) throw new Error("Failed")

      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        engagementModel: engagementOptions[0]?.value ?? "Full-Time Dedicated",
        details: "",
      })
      setCaptchaChecked(false)
      setTimeout(() => setSubmitStatus("idle"), 4000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isLarge = size === "large"
  const labelClass = isLarge
    ? "mb-1.5 block text-xs font-semibold capability-card-copy uppercase tracking-wider"
    : "mb-1 block text-[10px] font-semibold capability-card-copy uppercase tracking-wider"
  const fieldClass = isLarge
    ? "w-full px-3.5 h-10 text-sm bright-panel-input border border-slate-200/80 placeholder:text-slate-400/80 focus:outline-none focus:ring-1 focus:ring-toadster-green/20 rounded-lg transition-all"
    : "w-full px-3 h-9 text-xs bright-panel-input border border-slate-200/80 placeholder:text-slate-400/80 focus:outline-none focus:ring-1 focus:ring-toadster-green/20 rounded-lg transition-all"

  return (
    <div className="relative">
      <div
        className={`capability-card-surface hire-rfp-form relative overflow-hidden rounded-2xl ${isLarge ? "hire-rfp-form--large p-6 sm:p-7 lg:p-8" : "p-4 sm:p-5"}`}
      >
        <div className={isLarge ? "mb-5 text-left" : "mb-3.5 text-left"}>
          <p className={`font-bold tracking-tight text-slate-900 dark:text-black ${isLarge ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
            Request a Free Consultation
          </p>
          <p className={`mt-1 leading-relaxed capability-card-copy ${isLarge ? "text-sm" : "mt-0.5 text-xs"}`}>
            {formSubtext}
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`relative z-10 flex flex-col text-left ${isLarge ? "gap-4" : "gap-3"}`}>
          <div className={`flex flex-col ${isLarge ? "gap-3.5" : "gap-2.5"}`}>
            {/* First & Last Name */}
            <div className={`grid grid-cols-2 ${isLarge ? "gap-3.5" : "gap-2.5"}`}>
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="First Name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Last Name"
                  className={fieldClass}
                />
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label className={labelClass}>Work Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="yourname@company.com"
                className={fieldClass}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className={labelClass}>Phone Number (Optional)</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="your phone number"
                className={fieldClass}
              />
            </div>

            {/* Company Name */}

            {/* Engagement Model select */}
            <div>
              <label className={labelClass}>Preferred Engagement Model</label>
              <select
                name="engagementModel"
                value={formData.engagementModel}
                onChange={handleChange}
                className={fieldClass}
              >
                {engagementOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Brief */}
            <div>
              <label className={labelClass}>{projectBriefLabel}</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                placeholder="Tell us about your project requirements..."
                rows={isLarge ? 4 : 3}
                className={`${fieldClass} resize-none ${isLarge ? "min-h-[5rem] py-2.5" : "min-h-[3.5rem] py-2"}`}
              />
            </div>
          </div>

          <div className={`flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/80 select-none ${isLarge ? "px-4 py-2" : "px-3 py-1.5 my-0.5"}`}>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={captchaChecked}
                onChange={(e) => setCaptchaChecked(e.target.checked)}
                className="h-4 w-4 cursor-pointer rounded border-page-border accent-toadster-green"
              />
              <span className="text-xs font-medium text-slate-700 dark:text-black/80">I&apos;m not a robot</span>
            </label>
            <div className="flex flex-col items-center gap-0.5">
              <Image
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA logo"
                title="Protected by reCAPTCHA"
                width={16}
                height={16}
                className="h-4 w-4 opacity-80"
              />
              <span className="text-[8px] font-medium capability-card-copy">reCAPTCHA</span>
            </div>
          </div>

          {submitStatus === "success" && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-center">
              <p className="text-xs font-medium text-emerald-800">Thank you! We&apos;ll respond within 24 hours.</p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-center">
              <p className="text-xs font-medium text-red-800">Failed to submit. Please try again.</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-lg bg-toadster-green text-toadster-green-foreground hover:bg-[var(--primary-hover)] font-bold shadow-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer ${isLarge ? "h-11 text-base" : "h-9 text-sm"}`}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
            {!isSubmitting && <ArrowRight size={16} />}
          </Button>

          <div className={`flex items-center justify-center gap-1.5 capability-card-copy ${isLarge ? "text-xs" : "text-[11px]"}`}>
            <ShieldCheck size={14} className="capability-card-copy" />
            <span>{submitFooterText}</span>
          </div>
        </form>
      </div>
    </div>
  )
}


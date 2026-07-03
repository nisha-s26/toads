"use client"

import { useState } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface JobApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
  jobId?: string
}

export default function JobApplicationModal({ isOpen, onClose, jobTitle, jobId }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    fromEmail: "",
    currentLocation: "",
    currentCTC: "",
    expectedCTC: "",
    joiningTime: "",
    resume: null as File | null,
    additionalInfo: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const applicationData = new FormData()
      if (jobId) applicationData.append("jobId", jobId)
      applicationData.append("jobTitle", jobTitle)
      applicationData.append("name", formData.name)
      applicationData.append("fromEmail", formData.fromEmail)
      applicationData.append("email", formData.fromEmail)
      applicationData.append("currentLocation", formData.currentLocation)
      applicationData.append("currentCTC", formData.currentCTC)
      applicationData.append("expectedCTC", formData.expectedCTC)
      applicationData.append("joiningTime", formData.joiningTime)
      applicationData.append("noticePeriod", formData.joiningTime)
      applicationData.append("additionalInfo", formData.additionalInfo)
      if (formData.resume) applicationData.append("resume", formData.resume)

      const response = await fetch("/api/job-applications", {
        method: "POST",
        body: applicationData,
      })

      if (!response.ok) {
        throw new Error("Failed to submit application")
      }

      setSubmitStatus("success")

      setTimeout(() => {
        setFormData({
          name: "",
          fromEmail: "",
          currentLocation: "",
          currentCTC: "",
          expectedCTC: "",
          joiningTime: "",
          resume: null,
          additionalInfo: ""
        })
        onClose()
        setSubmitStatus("idle")
      }, 2000)

    } catch (error) {
      console.error("Error submitting application:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
      setSubmitStatus("idle")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/55 p-0 backdrop-blur-md sm:items-start sm:px-4 sm:pb-6 sm:pt-24">
      <div className="theme-card flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl border border-page-border shadow-2xl sm:max-h-[calc(100dvh-7rem)] sm:max-w-3xl sm:rounded-2xl">

        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-page-border bg-page-card/95 p-4 backdrop-blur sm:p-5">
          <div className="min-w-0 flex-1">
            <h2 className="break-words text-lg font-bold leading-tight text-page-fg sm:text-2xl">Apply for {jobTitle}</h2>
            <p className="mt-1 text-sm text-page-fg-muted">Fill in your details to apply for this position</p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmitting}
            aria-label="Close application form"
            className="shrink-0 rounded-full p-2 transition-colors hover:bg-page-accent-soft disabled:opacity-50"
          >
            <X size={20} className="text-page-fg-muted" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
          <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-page-fg-subtle mb-2">
              Full Name *
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="h-10 w-full bg-white/70 dark:bg-white/5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-page-fg-subtle mb-2">
              Your Email *
            </label>
            <Input
              name="fromEmail"
              type="email"
              value={formData.fromEmail}
              onChange={handleInputChange}
              required
              placeholder="your.email@example.com"
              className="h-10 w-full bg-white/70 dark:bg-white/5"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-page-fg-subtle mb-2">
              Current Location *
            </label>
            <Input
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleInputChange}
              required
              placeholder="City, Country"
              className="h-10 w-full bg-white/70 dark:bg-white/5"
            />
          </div>

            <div>
              <label className="block text-sm font-medium text-page-fg-subtle mb-2">
                Current CTC *
              </label>
              <Input
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleInputChange}
                required
                placeholder="e.g., 12 LPA"
                className="h-10 w-full bg-white/70 dark:bg-white/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-page-fg-subtle mb-2">
                Expected CTC *
              </label>
              <Input
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleInputChange}
                required
                placeholder="e.g., 15 LPA"
                className="h-10 w-full bg-white/70 dark:bg-white/5"
              />
            </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-page-fg-subtle mb-2">
              How soon can you join? (in days) *
            </label>
            <Input
              name="joiningTime"
              value={formData.joiningTime}
              onChange={handleInputChange}
              required
              type="number"
              min="1"
              placeholder="e.g., 30"
              className="h-10 w-full bg-white/70 dark:bg-white/5"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-page-fg-subtle mb-2">
              Resume *
            </label>
            <div className="flex flex-col gap-3 rounded-xl border border-page-border bg-white/60 p-3 dark:bg-white/5 sm:flex-row sm:items-center">
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
                required
                style={{ display: "none" }}
              />
              <label
                htmlFor="resume-upload"
                className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover"
              >
                Choose file
              </label>
              <span className="truncate text-sm text-page-fg-muted">
                {formData.resume ? formData.resume.name : "No file chosen"}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-page-fg-muted">Accepted formats: PDF, DOC, DOCX</p>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-page-fg-subtle mb-2">
              Additional Information (Optional)
            </label>
            <Textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Any additional information you'd like to share..."
              className="min-h-24 w-full bg-white/70 dark:bg-white/5"
              rows={3}
            />
          </div>

          {submitStatus === "success" && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 sm:col-span-2">
              <p className="text-green-800 text-sm">
                Application submitted successfully!
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 sm:col-span-2">
              <p className="text-red-800 text-sm">
                There was an error processing your application. Please try again.
              </p>
            </div>
          )}
          </div>

          <div className="sticky bottom-0 -mx-4 mt-5 flex shrink-0 flex-col-reverse gap-3 border-t border-page-border bg-page-card/95 p-4 backdrop-blur sm:-mx-5 sm:flex-row sm:gap-4 sm:px-5">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
              className="h-11 w-full sm:flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary-hover sm:flex-1"
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Resume
                </>
              )}
            </Button>
          </div>

        </form>
      </div>
    </div>
  )
}


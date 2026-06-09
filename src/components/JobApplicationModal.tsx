import { useState } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface JobApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
}

export default function JobApplicationModal({ isOpen, onClose, jobTitle }: JobApplicationModalProps) {
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

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => {
        const result = reader.result as string
        resolve(result.split(",")[1])
      }

      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      let base64File = null

      if (formData.resume) {
        base64File = await convertToBase64(formData.resume)
      }

      const emailContent = `
Job Application for: ${jobTitle}

Name: ${formData.name}
Current Location: ${formData.currentLocation}
Current CTC: ${formData.currentCTC}
Expected CTC: ${formData.expectedCTC}
How soon can join: ${formData.joiningTime} days
Additional Information: ${formData.additionalInfo}
Resume: ${formData.resume?.name || 'No resume uploaded'}
      `.trim()

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          formData: {
            name: formData.name,
            fromEmail: formData.fromEmail,
            currentLocation: formData.currentLocation,
            currentCTC: formData.currentCTC,
            expectedCTC: formData.expectedCTC,
            joiningTime: formData.joiningTime,
            additionalInfo: formData.additionalInfo,
            jobTitle,
            emailContent
          },
          file: base64File
            ? {
              name: formData.resume?.name,
              content: base64File,
              type: formData.resume?.type
            }
            : null
        })
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="theme-card rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-page-border">
          <div>
            <h2 className="text-2xl font-bold text-page-fg">Apply for {jobTitle}</h2>
            <p className="text-page-fg-muted mt-1">Fill in your details to apply for this position</p>
          </div>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="p-2 rounded-lg hover:bg-page-accent-soft transition-colors disabled:opacity-50"
          >
            <X size={20} className="text-page-fg-muted" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
              className="w-full"
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
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-page-fg-subtle mb-2">
              Current Location *
            </label>
            <Input
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleInputChange}
              required
              placeholder="City, Country"
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="w-full"
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
                className="w-full"
              />
            </div>
          </div>

          <div>
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
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-page-fg-subtle mb-2">
              Resume *
            </label>
            <div className="flex items-center gap-3">
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
                className="cursor-pointer inline-flex items-center px-4 py-2 rounded-lg text-white text-sm font-medium bg-[#1C3829] hover:bg-[#1C3829]/90 transition-opacity shrink-0"
              >
                Choose file
              </label>
              <span className="text-sm text-page-fg-muted truncate">
                {formData.resume ? formData.resume.name : "No file chosen"}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-page-fg-muted">Accepted formats: PDF, DOC, DOCX</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-page-fg-subtle mb-2">
              Additional Information (Optional)
            </label>
            <Textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Any additional information you'd like to share..."
              className="w-full"
              rows={4}
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                Application submitted successfully!
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                There was an error processing your application. Please try again.
              </p>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#1C3829] hover:bg-[#1C3829]/90 text-white"
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


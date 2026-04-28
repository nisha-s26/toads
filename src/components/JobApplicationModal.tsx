// import { useState } from "react"
// import { X, Send } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// interface JobApplicationModalProps {
//   isOpen: boolean
//   onClose: () => void
//   jobTitle: string
// }

// export default function JobApplicationModal({ isOpen, onClose, jobTitle }: JobApplicationModalProps) {
//   const [formData, setFormData] = useState({
//     name: "",
//     currentLocation: "",
//     currentCTC: "",
//     expectedCTC: "",
//     joiningTime: "",
//     resume: null as File | null,
//     additionalInfo: ""
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       setFormData(prev => ({ ...prev, resume: file }))
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmitStatus("idle")

//     try {
//       const formDataToSend = new FormData()
//       formDataToSend.append('name', formData.name)
//       formDataToSend.append('currentLocation', formData.currentLocation)
//       formDataToSend.append('currentCTC', formData.currentCTC)
//       formDataToSend.append('expectedCTC', formData.expectedCTC)
//       formDataToSend.append('joiningTime', formData.joiningTime)
//       formDataToSend.append('additionalInfo', formData.additionalInfo)
//       formDataToSend.append('jobTitle', jobTitle)

//       if (formData.resume) {
//         formDataToSend.append('resume', formData.resume)
//       }

//       // Create email content
//       const emailContent = `
// Job Application for: ${jobTitle}

// Name: ${formData.name}
// Current Location: ${formData.currentLocation}
// Current CTC: ${formData.currentCTC}
// Expected CTC: ${formData.expectedCTC}
// How soon can join: ${formData.joiningTime} days
// Additional Information: ${formData.additionalInfo}
// Resume: ${formData.resume?.name || 'No resume uploaded'}
//       `.trim()

//       const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY;

//       if (!SENDGRID_API_KEY) {
//         setSubmitStatus("error")
//         setTimeout(() => {
//           setSubmitStatus("idle")
//         }, 3000)
//         return
//       }

//       // Prepare data for SendGrid
//       const data = {
//         personalizations: [
//           {
//             to: [{ email: "business@toadsters.com" }]
//           }
//         ],
//         from: {
//           email: "no-reply@toadsters.com"
//         },
//         subject: `Job Application: ${jobTitle} - ${formData.name}`,
//         content: [
//           {
//             type: "text/plain",
//             value: emailContent
//           }
//         ]
//       };

//       // Send email using SendGrid
//       const response = await fetch(
//         "https://api.sendgrid.com/v3/mail/send",
//         {
//           method: "POST",
//           headers: {
//             "Authorization": `Bearer ${SENDGRID_API_KEY}`,
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(data)
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to send email')
//       }


//       setSubmitStatus("success")

//       // Reset form after 2 seconds
//       setTimeout(() => {
//         setFormData({
//           name: "",
//           currentLocation: "",
//           currentCTC: "",
//           expectedCTC: "",
//           joiningTime: "",
//           resume: null,
//           additionalInfo: ""
//         })
//         onClose()
//         setSubmitStatus("idle")
//       }, 2000)

//     } catch (error) {
//       console.error('Error submitting application:', error)
//       setSubmitStatus("error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleClose = () => {
//     if (!isSubmitting) {
//       onClose()
//       setSubmitStatus("idle")
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
//       <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">Apply for {jobTitle}</h2>
//             <p className="text-gray-600 mt-1">Fill in your details to apply for this position</p>
//           </div>
//           <button
//             onClick={handleClose}
//             disabled={isSubmitting}
//             className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
//           >
//             <X size={20} className="text-gray-500" />
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="p-6 space-y-6">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Full Name *
//             </label>
//             <Input
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               placeholder="Enter your full name"
//               className="w-full"
//             />
//           </div>

//           {/* Current Location */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Current Location *
//             </label>
//             <Input
//               name="currentLocation"
//               value={formData.currentLocation}
//               onChange={handleInputChange}
//               required
//               placeholder="City, Country"
//               className="w-full"
//             />
//           </div>

//           {/* Current CTC and Expected CTC */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Current CTC *
//               </label>
//               <Input
//                 name="currentCTC"
//                 value={formData.currentCTC}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="e.g., 12 LPA"
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Expected CTC *
//               </label>
//               <Input
//                 name="expectedCTC"
//                 value={formData.expectedCTC}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="e.g., 15 LPA"
//                 className="w-full"
//               />
//             </div>
//           </div>

//           {/* Joining Time */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               How soon can you join? (in days) *
//             </label>
//             <Input
//               name="joiningTime"
//               value={formData.joiningTime}
//               onChange={handleInputChange}
//               required
//               type="number"
//               min="1"
//               placeholder="e.g., 30"
//               className="w-full"
//             />
//           </div>

//           {/* Resume Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Resume *
//             </label>
//             <div className="flex items-center gap-3">
//               <label
//                 htmlFor="resume-upload"
//                 className="cursor-pointer inline-flex items-center px-4 py-2 rounded-lg bg-toadster-green text-white text-sm font-medium hover:bg-toadster-green/90 transition-colors shrink-0"
//               >
//                 Choose file
//               </label>
//               <input
//                 id="resume-upload"
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleFileChange}
//                 required
//                 className="sr-only"
//               />
//               <span className="text-sm text-gray-500 truncate">
//                 {formData.resume ? formData.resume.name : "No file chosen"}
//               </span>
//             </div>
//             <p className="mt-1.5 text-xs text-gray-400">Accepted formats: PDF, DOC, DOCX</p>
//           </div>

//           {/* Additional Information */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Additional Information (Optional)
//             </label>
//             <Textarea
//               name="additionalInfo"
//               value={formData.additionalInfo}
//               onChange={handleInputChange}
//               placeholder="Any additional information you'd like to share..."
//               className="w-full"
//               rows={4}
//             />
//           </div>

//           {/* Status Messages */}
//           {submitStatus === "success" && (
//             <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
//               <p className="text-green-800 text-sm">
//                 Opening your email client to send the application...
//               </p>
//             </div>
//           )}

//           {submitStatus === "error" && (
//             <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-red-800 text-sm">
//                 There was an error processing your application. Please try again.
//               </p>
//             </div>
//           )}

//           {/* Actions */}
//           <div className="flex gap-4 pt-4">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={handleClose}
//               disabled={isSubmitting}
//               className="flex-1"
//             >
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               disabled={isSubmitting}
//               className="flex-1 bg-toadster-green hover:bg-toadster-green/90 text-white"
//             >
//               {isSubmitting ? (
//                 "Processing..."
//               ) : (
//                 <>
//                   <Send size={16} className="mr-2" />
//                   Send Resume
//                 </>
//               )}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

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

  // 🔥 NEW: convert file to base64
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
      // 🔥 Convert resume
      let base64File = null

      if (formData.resume) {
        base64File = await convertToBase64(formData.resume)
      }

      // Create email content (same as before)
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

      // 🔥 CALL YOUR SERVERLESS API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // formData: {
          //   ...formData,
          //   jobTitle,
          //   emailContent
          // },

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
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Apply for {jobTitle}</h2>
            <p className="text-gray-600 mt-1">Fill in your details to apply for this position</p>
          </div>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* ALL YOUR UI IS EXACTLY SAME (unchanged) */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="w-full"
              style={{ color: 'black' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              style={{ color: 'black' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Location *
            </label>
            <Input
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleInputChange}
              required
              placeholder="City, Country"
              className="w-full"
              style={{ color: 'black' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current CTC *
              </label>
              <Input
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleInputChange}
                required
                placeholder="e.g., 12 LPA"
                className="w-full"
                style={{ color: 'black' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected CTC *
              </label>
              <Input
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleInputChange}
                required
                placeholder="e.g., 15 LPA"
                className="w-full"
                style={{ color: 'black' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              style={{ color: 'black' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <span className="text-sm text-gray-500 truncate">
                {formData.resume ? formData.resume.name : "No file chosen"}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-gray-400">Accepted formats: PDF, DOC, DOCX</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information (Optional)
            </label>
            <Textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Any additional information you'd like to share..."
              className="w-full text-black focus:text-black"
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


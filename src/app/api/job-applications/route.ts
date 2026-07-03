import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const CAREERS_RECIPIENTS = ["vanshika.y@toadsters.com", "nisha.r@toadsters.com"]

function getJobsApiBaseUrl(): string {
  return (
    process.env.JOBS_API_BASE_URL ??
    process.env.NEXT_PUBLIC_JOBS_API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    ""
  ).replace(/\/$/, "")
}

function getString(formData: FormData, key: string): string {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function buildForwardFormData(formData: FormData, resume: File | null): FormData {
  const forwarded = new FormData()

  for (const [key, value] of formData.entries()) {
    if (key === "resume") continue
    forwarded.append(key, value)
  }

  if (resume) {
    forwarded.append("resume", resume, resume.name)
  }

  return forwarded
}

async function sendCareersEmail(formData: FormData, resume: File | null) {
  const name = getString(formData, "name")
  const fromEmail = getString(formData, "fromEmail") || getString(formData, "email")
  const jobTitle = getString(formData, "jobTitle")
  const emailContent = `
Job Application for: ${jobTitle || "-"}

Name: ${name || "-"}
Email: ${fromEmail || "-"}
Location: ${getString(formData, "currentLocation") || "-"}
Current CTC: ${getString(formData, "currentCTC") || "-"}
Expected CTC: ${getString(formData, "expectedCTC") || "-"}
Notice Period: ${getString(formData, "joiningTime") || "-"}
Additional Info: ${getString(formData, "additionalInfo") || "-"}
Resume: ${resume?.name || "No resume uploaded"}
  `.trim()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    to: CAREERS_RECIPIENTS,
    from: `"Toadster Careers" <${process.env.SMTP_USER}>`,
    replyTo: fromEmail && name ? `"${name}" <${fromEmail}>` : undefined,
    subject: `Job Application: ${jobTitle || "General Application"} - ${name || "Candidate"}`,
    text: emailContent,
    attachments: resume
      ? [
          {
            filename: resume.name,
            content: Buffer.from(await resume.arrayBuffer()),
            contentType: resume.type || "application/octet-stream",
          },
        ]
      : [],
  })
}

async function readBackendResponse(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") ?? ""
  if (contentType.includes("application/json")) return response.json()

  const text = await response.text()
  return text ? { message: text } : null
}

export async function POST(request: Request) {
  try {
    const baseUrl = getJobsApiBaseUrl()
    if (!baseUrl) {
      return NextResponse.json({ error: "Jobs API base URL is not configured" }, { status: 500 })
    }

    const formData = await request.formData()
    const resumeValue = formData.get("resume")
    const resume = resumeValue instanceof File ? resumeValue : null

    const backendResponse = await fetch(`${baseUrl}/api/job-applications`, {
      method: "POST",
      body: buildForwardFormData(formData, resume),
      cache: "no-store",
    })
    const backendPayload = await readBackendResponse(backendResponse)

    if (!backendResponse.ok) {
      return NextResponse.json(
        { error: "Failed to submit job application", details: backendPayload },
        { status: backendResponse.status },
      )
    }

    await sendCareersEmail(formData, resume)

    return NextResponse.json({ success: true, application: backendPayload })
  } catch (error) {
    console.error("[job-applications] Failed to submit application:", error)
    return NextResponse.json({ error: "Failed to submit job application" }, { status: 500 })
  }
}

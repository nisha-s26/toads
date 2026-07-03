import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

const CAREERS_RECIPIENT = "nisha.r@toadsters.com"
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const { formData, file } = await request.json()
    const hrEmail = typeof formData.hrEmail === "string" && EMAIL_PATTERN.test(formData.hrEmail)
      ? formData.hrEmail
      : undefined

    const emailContent = `
Job Application for: ${formData.jobTitle}

Name: ${formData.name}
Email: ${formData.fromEmail}
Location: ${formData.currentLocation}
Current CTC: ${formData.currentCTC}
Expected CTC: ${formData.expectedCTC}
Notice Period: ${formData.joiningTime}
Additional Info: ${formData.additionalInfo}
Job HR Email: ${hrEmail || "-"}
    `

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions: nodemailer.SendMailOptions = {
      to: CAREERS_RECIPIENT,
      cc: hrEmail,
      from: `"Toadster Careers" <${process.env.SMTP_USER}>`,
      replyTo: `"${formData.name}" <${formData.fromEmail}>`,
      subject: `Job Application: ${formData.jobTitle} - ${formData.name}`,
      text: emailContent,
      attachments: file
        ? [
            {
              filename: file.name,
              content: file.content,
              encoding: "base64",
              contentType: file.type || "application/pdf",
            },
          ]
        : [],
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

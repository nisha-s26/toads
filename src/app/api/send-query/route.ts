import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, firstName, lastName, phone, fromEmail, company, message } = await request.json()

    const fullName =
      [firstName, lastName].filter(Boolean).join(" ").trim() || name || "Unknown"

    const emailContent = `
First Name: ${firstName || "-"}
Last Name: ${lastName || "-"}
Name: ${fullName}
Phone: ${phone || "-"}
Email: ${fromEmail}
Company: ${company || "-"}
Message: ${message}
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
      to: "business@toadsters.com",
      from: `"Toadster Query" <${process.env.SMTP_USER}>`,
      replyTo: `"${fullName}" <${fromEmail}>`,
      subject: `Regarding Query - ${fullName}`,
      text: emailContent,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

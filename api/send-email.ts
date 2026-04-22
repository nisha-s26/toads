import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    console.log(process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.SMTP_SECURE, process.env.SMTP_USER, process.env.SMTP_PASS)
    const { formData, file } = req.body;

    const emailContent = `
Job Application for: ${formData.jobTitle}

Name: ${formData.name}
Email: ${formData.fromEmail}
Location: ${formData.currentLocation}
Current CTC: ${formData.currentCTC}
Expected CTC: ${formData.expectedCTC}
Notice Period: ${formData.joiningTime}
Additional Info: ${formData.additionalInfo}
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      to: "hr@toadsters.com",
      from: `"Toadsters Careers" <${process.env.SMTP_USER}>`,
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
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    console.log(process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.SMTP_SECURE, process.env.SMTP_USER, process.env.SMTP_PASS)

    return res.status(500).json({ error: "Failed to send email" });
  }
}
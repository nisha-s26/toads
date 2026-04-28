import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    console.log(process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.SMTP_SECURE, process.env.SMTP_USER, process.env.SMTP_PASS)
    const { name, fromEmail, company, message } = req.body;

    const emailContent = `
Name: ${name}
Email: ${fromEmail}
Company: ${company}
Message: ${message}
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
      to: "business@toadsters.com",
      from: `"Toadsters Query" <${process.env.SMTP_USER}>`,
      replyTo: `"${name}" <${fromEmail}>`,
      subject: `Regarding Query - ${name}`,
      text: emailContent,

    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    console.log(process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.SMTP_SECURE, process.env.SMTP_USER, process.env.SMTP_PASS)

    return res.status(500).json({ error: "Failed to send email" });
  }
}
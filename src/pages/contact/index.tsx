import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Brain, Briefcase, Bot, BookOpen, MessageSquare, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        fromEmail: "",
        company: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const res = await fetch("/api/send-query", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    fromEmail: formData.fromEmail,
                    company: formData.company,
                    message: formData.message,
                }),
            });

            if (!res.ok) throw new Error("Failed");

            setSubmitStatus("success");
            setFormData({ name: "", fromEmail: "", company: "", message: "" });
            setTimeout(() => setSubmitStatus("idle"), 4000);
        } catch {
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 4000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-page-bg pt-20">
            {/* Hero Section */}
            <section className="pt-16 pb-8 flex flex-col items-center text-center">
                <span className="text-xl font-semibold tracking-widest text-green-400 mb-2">GET IN TOUCH</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                    <span className="text-page-fg">Let&apos;s </span>
                    <span className="text-green-400">Talk</span>
                </h1>
                <p className="text-page-fg-subtle text-lg max-w-2xl mx-auto">
                    Ready to build something amazing? We&apos;d love to hear about your project.
                </p>
            </section>

            {/* Contact Section */}
            <section className="max-w-9xl mx-28 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Contact Info */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-lg font-bold mb-4 text-page-fg">Contact Information</h2>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-page-fg/10 text-green-400">
                                    <svg role="img" aria-labelledby="contact-email-icon-title" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><title id="contact-email-icon-title">Email</title><path d="M4 4h16v16H4z" stroke="none" /><path d="M22 6.5V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.5M22 6.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v.5m20 0-10 7-10-7" /></svg>
                                </span>
                                <div>
                                    <div className="text-sm text-page-fg-muted">Email</div>
                                    <div className="font-semibold text-page-fg">business@toadsters.com</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-page-fg/10 text-green-400">
                                    <svg role="img" aria-labelledby="contact-phone-icon-title" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><title id="contact-phone-icon-title">Phone</title><path d="M22 16.92V19a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13.81.28 1.6.47 2.36a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.76.19 1.55.34 2.36.47A2 2 0 0 1 22 16.92z" /></svg>
                                </span>
                                <div>
                                    <div className="text-sm text-page-fg-muted">Phone</div>
                                    <div className="font-semibold text-page-fg">+91 92205 17988</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-page-fg/10 text-green-400">
                                    <svg role="img" aria-labelledby="contact-location-icon-title" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><title id="contact-location-icon-title">Location</title><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 1 8 8c0 7-8 12-8 12S4 17 4 10a8 8 0 0 1 8-8z" /></svg>
                                </span>
                                <div>
                                    <div className="text-sm text-page-fg-muted">Location</div>
                                    <div className="font-semibold text-page-fg"> 🇮🇳 JAV Tower, H17, H Block, Sector 63, Noida, Uttar Pradesh 201309</div>
                                    <div className="font-semibold text-page-fg"> 🇦🇪 Level 1, Avenue Gate, South Zone, DIFC,
                                        Dubai, UAE</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                   
                </div>

                {/* Contact Form */}
                <div>
                    <form onSubmit={handleSubmit} className="bg-white/5 border border-page-border rounded-xl p-6 flex flex-col gap-4">
                        <h2 className="text-lg font-bold mb-2 text-page-fg">Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium  mb-1 text-page-fg">Name</label>
                                <Input name="name" value={formData.name} onChange={handleChange} required type="text" className="text-page-fg" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-page-fg-subtle mb-1">Email</label>
                                <Input name="fromEmail" value={formData.fromEmail} onChange={handleChange} required type="email" className="text-page-fg" placeholder="Enter your email" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-page-fg-subtle mb-1">Company</label>
                                <Input name="company" value={formData.company} onChange={handleChange} type="text"  className="text-page-fg" placeholder="Your company" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-page-fg-subtle mb-1">Query</label>
                                <Textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your query..." className="text-page-fg focus:text-page-fg" rows={4} />
                            </div>
                        </div>

                        {submitStatus === "success" && (
                            <div className="p-3 bg-green-900/30 border border-green-700/50 rounded-lg">
                                <p className="text-green-400 text-sm">Message sent successfully! We'll get back to you soon.</p>
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="p-3 bg-red-900/30 border border-red-700/50 rounded-lg">
                                <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 bg-green-900 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-md py-2 transition flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {!isSubmitting && (
                                <svg role="img" aria-labelledby="contact-send-icon-title" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><title id="contact-send-icon-title">Send Message</title><path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4Z" /></svg>
                            )}
                        </button>
                    </form>
                </div>
            </section>

            {/* Explore More Section */}
            <section className="max-w-9xl mx-20 px-4 pb-20">
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold tracking-[0.25em] text-toadster-green uppercase mb-2">While You're Here</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-page-fg">Explore Our Work</h2>
                    <p className="text-page-fg-muted mt-2 max-w-xl mx-auto text-sm">
                        Browse our top services, recent insights, and open roles while you wait.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        {
                            icon: Brain,
                            title: "Agentic AI Services",
                            desc: "Autonomous agents that plan, execute, and adapt at enterprise scale.",
                            to: "/services/agentic-ai",
                        },
                        {
                            icon: Sparkles,
                            title: "Generative AI",
                            desc: "AI systems that create content, copy, code, and creative workflows.",
                            to: "/services/generative-ai",
                        },
                        {
                            icon: Bot,
                            title: "AI Chatbots",
                            desc: "Intelligent conversational interfaces and enterprise assistants.",
                            to: "/services/ai-chatbots",
                        },
                        {
                            icon: MessageSquare,
                            title: "Read the Blog",
                            desc: "Research, tutorials, and engineering insights from our team.",
                            to: "/blogs",
                        },
                        {
                            icon: Briefcase,
                            title: "We're Hiring",
                            desc: "Join our team of engineers, data scientists, and product builders.",
                            to: "/careers",
                        },
                        {
                            icon: BookOpen,
                            title: "About Toadster",
                            desc: "Get to know our mission, values, and the people behind the work.",
                            to: "/about",
                        },
                    ].map(({ icon: Icon, title, desc, to }) => (
                        <Link
                            key={title}
                            to={to}
                            title={title}
                            className="group flex h-full items-start gap-4 rounded-2xl border border-page-border bg-white/[0.03] p-5 hover:border-toadster-green/40 hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-toadster-green/10 text-toadster-green">
                                <Icon size={18} />
                            </span>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-page-fg font-semibold group-hover:text-toadster-green transition-colors">
                                        {title}
                                    </p>
                                    <ArrowUpRight size={16} className="text-gray-500 group-hover:text-toadster-green transition-colors" />
                                </div>
                                <p className="text-page-fg-muted text-sm mt-1 leading-relaxed">{desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

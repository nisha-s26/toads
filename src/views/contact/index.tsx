"use client"

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Brain,
    Briefcase,
    Bot,
    BookOpen,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_FEATURES = [
    {
        icon: Mail,
        title: "Email",
        description: "business@toadsters.com",
    },
    {
        icon: Phone,
        title: "Phone",
        description: "+91 92205 17988",
    },
    {
        icon: MapPin,
        title: "Location",
        description:
            "🇮🇳 JAV Tower, H17, H Block, Sector 63, Noida, Uttar Pradesh 201309 · 🇦🇪 Level 1, Avenue Gate, South Zone, DIFC, Dubai, UAE",
    },
] as const;

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
        <div className="relative min-h-screen">
            {/* Contact Hero + Form */}
            <section className="relative z-10 flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-24 sm:pt-28 md:px-8 lg:px-12">
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-[filter] duration-500 brightness-[1.08] saturate-[0.92] contrast-[0.98] dark:brightness-[0.38] dark:saturate-[0.8] dark:contrast-[1.12]"
                        style={{ backgroundImage: "url('/contact-bg.png')" }}
                    />
                    <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/55" />
                    <div className="absolute inset-0 bg-linear-to-b from-white/45 via-white/10 to-page-bg dark:from-slate-950/45 dark:via-slate-950/25 dark:to-page-bg" />
                </div>

                <div className="relative mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-8 md:items-stretch">
                    {/* Left panel */}
                    <div className="relative flex min-h-[640px] flex-col overflow-hidden rounded-[2rem] border border-slate-900/5 bg-white/[0.03] p-8 text-slate-900 shadow-none backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.02] dark:text-white md:p-10 lg:p-12">
                        <div className="relative flex flex-1 flex-col">
                            <span className="text-xs font-semibold tracking-[0.28em] text-teal-700 uppercase dark:text-teal-300/80">
                                Get in Touch
                            </span>
                            <h1 className="mt-3 font-serif text-4xl leading-tight text-slate-900 md:text-5xl lg:text-[3.25rem] dark:text-white">
                                Let&apos;s Talk
                            </h1>
                            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 italic dark:text-white/70">
                                Ready to build something amazing? We&apos;d love to hear about your project.
                            </p>

                            <div className="mt-10 flex flex-col gap-7">
                                {CONTACT_FEATURES.map(({ icon: Icon, title, description }) => (
                                    <div key={title} className="flex items-start gap-4">
                                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-900/5 bg-white/10 text-teal-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-teal-200">
                                            <Icon size={18} strokeWidth={1.75} />
                                        </span>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white">{title}</p>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-white/75">{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto border-t border-slate-900/5 pt-8 dark:border-white/10">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <p className="text-[11px] font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300/75">
                                            Email Us
                                        </p>
                                        <a
                                            href="mailto:business@toadsters.com"
                                            className="mt-2 block text-sm font-medium text-slate-900 transition-colors hover:text-teal-700 dark:text-white dark:hover:text-teal-300"
                                        >
                                            business@toadsters.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-semibold tracking-[0.22em] text-teal-700 uppercase dark:text-teal-300/75">
                                            Call Now
                                        </p>
                                        <a
                                            href="tel:+919220517988"
                                            className="mt-2 block text-sm font-medium text-slate-900 transition-colors hover:text-teal-700 dark:text-white dark:hover:text-teal-300"
                                        >
                                            +91 92205 17988
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right panel — form */}
                    <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white px-8 py-10 text-slate-900 shadow-[0_32px_80px_-24px_rgba(15,23,42,0.18)] md:px-10 lg:px-12">
                        <div className="mb-8">
                            <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                                Submit your Query
                            </h2>
                            <p className="mt-2 text-sm italic text-slate-500">
                                Tell us about your vision and let&apos;s bring it to life.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                                        Name
                                    </label>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        className="h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-slate-900 placeholder:text-slate-400 focus-visible:border-slate-400 focus-visible:ring-slate-200/60"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                                        Email
                                    </label>
                                    <Input
                                        name="fromEmail"
                                        value={formData.fromEmail}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        className="h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-slate-900 placeholder:text-slate-400 focus-visible:border-slate-400 focus-visible:ring-slate-200/60"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                                    Company
                                </label>
                                <Input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    type="text"
                                    className="h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-slate-900 placeholder:text-slate-400 focus-visible:border-slate-400 focus-visible:ring-slate-200/60"
                                    placeholder="Your company"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                                    Query
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your query..."
                                    rows={5}
                                    className="min-h-[140px] rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus-visible:border-slate-400 focus-visible:ring-slate-200/60"
                                />
                            </div>

                            {submitStatus === "success" && (
                                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                                    <p className="text-sm text-emerald-700">
                                        Message sent successfully! We&apos;ll get back to you soon.
                                    </p>
                                </div>
                            )}
                            {submitStatus === "error" && (
                                <div className="rounded-2xl border border-red-200 bg-red-50 p-3">
                                    <p className="text-sm text-red-700">
                                        Failed to send message. Please try again.
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(11,21,32,0.8)] transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <ArrowRight size={18} strokeWidth={2} />}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Explore More Section */}
            <section className="relative z-10 bg-page-bg max-w-9xl mx-20 px-4 pb-20 pt-8">
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
                            href={to}
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

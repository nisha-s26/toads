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
    Clock,
    Headphones,
    MessageSquare,
    Sparkles,
    Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFeature = {
    icon: LucideIcon;
    title: string;
    description: string;
    href?: string;
    iconClassName?: string;
};

const CONTACT_FEATURES: ContactFeature[] = [
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Always available for your mission-critical needs.",
        iconClassName: "text-sky-600",
    },
    {
        icon: Zap,
        title: "Instant Call",
        description: "Connect with our specialists in under 60 seconds.",
        href: "tel:+919220517988",
        iconClassName: "text-violet-600",
    },
    {
        icon: Clock,
        title: "Fast Response",
        description: "We respond to all inquiries within 24 business hours.",
        iconClassName: "text-teal-600",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        fromEmail: "",
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
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone,
                    fromEmail: formData.fromEmail,
                    message: formData.message,
                }),
            });

            if (!res.ok) throw new Error("Failed");

            setSubmitStatus("success");
            setFormData({ firstName: "", lastName: "", phone: "", fromEmail: "", message: "" });
            setTimeout(() => setSubmitStatus("idle"), 4000);
        } catch {
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 4000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page relative isolate min-h-screen font-sans">
            {/* Contact Hero + Form */}
            <section className="relative z-10 flex min-h-screen items-center overflow-hidden px-2 pb-16 pt-24 sm:px-4 sm:pt-28 md:px-6">
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-[filter] duration-500 brightness-[1.08] saturate-[0.92] contrast-[0.98] dark:brightness-[0.38] dark:saturate-[0.8] dark:contrast-[1.12]"
                        style={{ backgroundImage: "url('/contact-bg.png')" }}
                    />
                    <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/55" />
                    <div className="absolute inset-0 contact-hero-fade" />
                </div>

                <div className="relative mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-2 md:gap-6 md:items-stretch lg:max-w-[88rem]">
                    {/* Left panel */}
                    <div className="relative flex min-h-[680px] flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-7 text-black shadow-[0_32px_80px_-24px_rgba(15,23,42,0.18)] md:min-h-[760px] md:p-8 lg:p-10">
                        <div className="relative flex flex-1 flex-col">
                            <span className="text-sm font-bold uppercase tracking-[0.28em] text-black/60 md:text-base">
                                Get in Touch
                            </span>
                            <h1 className="mt-3 text-[2.25rem] font-extrabold leading-tight text-black md:text-[2.75rem]">
                                Let&apos;s Talk
                            </h1>
                            <p className="mt-3 max-w-md text-base leading-relaxed text-black/75 md:text-lg">
                                Ready to build something amazing? We&apos;d love to hear about your project.
                            </p>

                            <div className="mt-8 flex flex-col gap-5">
                                {CONTACT_FEATURES.map(({ icon: Icon, title, description, href, iconClassName }) => {
                                    const content = (
                                        <div className="flex items-start gap-4">
                                            <span
                                                className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 ${iconClassName ?? "text-slate-600"}`}
                                            >
                                                <Icon size={24} strokeWidth={1.75} />
                                            </span>
                                            <div>
                                                <p className="text-base font-semibold text-black md:text-lg">
                                                    {title}
                                                </p>
                                                <p className="mt-1 text-sm leading-relaxed text-black/70 md:text-base">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    );

                                    if (href) {
                                        return (
                                            <a
                                                key={title}
                                                href={href}
                                                className="group rounded-2xl transition-colors hover:bg-black/5"
                                            >
                                                {content}
                                            </a>
                                        );
                                    }

                                    return <div key={title}>{content}</div>;
                                })}
                            </div>
                            <div className="mt-auto border-t border-slate-200 pt-6">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-black/60 md:text-sm">
                                            Email Us
                                        </p>
                                        <a
                                            href="mailto:business@toadsters.com"
                                            className="mt-2 block text-base font-medium text-black transition-colors hover:text-black/70"
                                        >
                                            business@toadsters.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-black/60 md:text-sm">
                                            Call Now
                                        </p>
                                        <a
                                            href="tel:+919220517988"
                                            className="mt-2 block text-base font-medium text-black transition-colors hover:text-black/70"
                                        >
                                            +91 92205 17988
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right panel - form */}
                    <div className="flex min-h-[680px] flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white px-7 py-8 text-black shadow-[0_32px_80px_-24px_rgba(15,23,42,0.18)] md:min-h-[760px] md:px-8 md:py-9 lg:px-10 lg:py-10">
                        <div className="mb-6">
                            <h2 className="text-[1.75rem] font-bold text-black md:text-[2rem]">
                                Submit your Query
                            </h2>
                            <p className="mt-2 text-base text-black/70">
                                Tell us about your vision and let&apos;s bring it to life.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black/60 uppercase md:text-sm">
                                        First Name
                                    </label>
                                    <Input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        className="contact-form-field h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-base text-black placeholder:text-black/40 focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black dark:placeholder:!text-black/40"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black/60 uppercase md:text-sm">
                                        Last Name
                                    </label>
                                    <Input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        className="contact-form-field h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-base text-black placeholder:text-black/40 focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black dark:placeholder:!text-black/40"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black/60 uppercase md:text-sm">
                                        Phone No
                                    </label>
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        type="tel"
                                        pattern="[0-9]*"
                                        maxLength={10}
                                        className="contact-form-field h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-base text-black placeholder:text-black/40 focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black dark:placeholder:!text-black/40"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black/60 uppercase md:text-sm">
                                        Mail
                                    </label>
                                    <Input
                                        name="fromEmail"
                                        value={formData.fromEmail}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        className="contact-form-field h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-base text-black placeholder:text-black/40 focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black dark:placeholder:!text-black/40"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col">
                                <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black/60 uppercase md:text-sm">
                                    Query
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="What's on your mind?"
                                    rows={6}
                                    className="contact-form-field min-h-[180px] flex-1 rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-base text-black placeholder:text-black/40 focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black dark:placeholder:!text-black/40 md:min-h-[220px]"
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
                                className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <ArrowRight size={20} strokeWidth={2} />}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Explore More Section */}
            <section className="section-full-bleed relative z-10 px-4 pb-20 pt-16 md:px-8 lg:px-12 xl:px-20">
                <div className="mx-auto max-w-9xl">
                <div className="mb-12 text-center">
                    <p className="section-eyebrow mb-3 text-sm font-bold uppercase tracking-[0.3em] text-black/60 md:text-base dark:text-white/70">
                        While You&apos;re Here
                    </p>
                    <h2 className="text-3xl font-extrabold text-black md:text-4xl lg:text-[2.75rem] dark:text-white">
                        Explore Our Work
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-black/75 dark:text-white/80">
                        Browse our top services, recent insights, and open roles while you wait.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {[
                        {
                            icon: Brain,
                            title: "Agentic AI Services",
                            desc: "Autonomous agents that plan, execute, and adapt at enterprise scale.",
                            to: "/services/agentic-ai",
                        },
                        {
                            icon: Sparkles,
                            title: "RAG Development",
                            desc: "Retrieval-augmented generation and knowledge systems.",
                            to: "/services/rag-development",
                        },
                        {
                            icon: Bot,
                            title: "AI Development",
                            desc: "Practical AI solutions - ML, GenAI, NLP, vision, and MLOps.",
                            to: "/services/ai-development",
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
                                    <p className="font-semibold text-black transition-colors group-hover:text-toadster-green dark:text-white">
                                        {title}
                                    </p>
                                    <ArrowUpRight size={16} className="text-black/50 transition-colors group-hover:text-toadster-green dark:text-white/50" />
                                </div>
                                <p className="mt-1 text-sm leading-relaxed text-black/70 dark:text-white/75">{desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                </div>
            </section>
        </div>
    )
}

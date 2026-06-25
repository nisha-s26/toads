"use client"

import { useState } from "react";
import {
    ArrowRight,
    BookOpen,
    Briefcase,
    Clock,
    Headphones,
    Layers,
    MessageSquare,
    Users,
    Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HireRoleCard } from "@/components/homepage/HireRoleCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFeature = {
    icon: LucideIcon;
    title: string;
    description: string;
    href?: string;
    iconClassName?: string;
    iconSurfaceClassName?: string;
};

const CONTACT_FEATURES: ContactFeature[] = [
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Always available for your mission-critical needs.",
        iconClassName: "text-sky-600 dark:text-sky-300",
        iconSurfaceClassName:
            "border-sky-200/80 bg-gradient-to-br from-sky-100/95 to-sky-50/80 shadow-[0_8px_22px_rgba(14,165,233,0.18)] dark:border-sky-400/25 dark:from-sky-500/20 dark:to-sky-400/10",
    },
    {
        icon: Zap,
        title: "Instant Call",
        description: "Connect with our specialists in under 60 seconds.",
        iconClassName: "text-violet-600 dark:text-violet-300",
        iconSurfaceClassName:
            "border-violet-200/80 bg-gradient-to-br from-violet-100/95 to-violet-50/80 shadow-[0_8px_22px_rgba(124,58,237,0.18)] dark:border-violet-400/25 dark:from-violet-500/20 dark:to-violet-400/10",
    },
    {
        icon: Clock,
        title: "Fast Response",
        description: "We respond to all inquiries within 24 business hours.",
        iconClassName: "text-teal-600 dark:text-teal-300",
        iconSurfaceClassName:
            "border-teal-200/80 bg-gradient-to-br from-teal-100/95 to-teal-50/80 shadow-[0_8px_22px_rgba(20,184,166,0.18)] dark:border-teal-400/25 dark:from-teal-500/20 dark:to-teal-400/10",
    },
];

const CONTACT_EXPLORE_LINKS: {
    icon: LucideIcon;
    title: string;
    description: string;
    tags: string[];
    href: string;
}[] = [
    {
        icon: Layers,
        title: "Services",
        description:
            "AI development, agentic AI, software, mobile, DevOps, cybersecurity, and more — built for production.",
        tags: ["AI", "Software", "DevOps"],
        href: "/services",
    },
    {
        icon: Users,
        title: "Hire Resources",
        description:
            "Pre-vetted developers and engineers who embed into your workflow — onboarded in days, not months.",
        tags: ["Developers", "Engineers", "Dedicated"],
        href: "/hire-resources",
    },
    {
        icon: BookOpen,
        title: "About",
        description: "Get to know our mission, values, and the people behind the work.",
        tags: ["Mission", "Team", "Values"],
        href: "/about",
    },
    {
        icon: MessageSquare,
        title: "Blog",
        description: "Research, tutorials, and engineering insights from our team.",
        tags: ["Insights", "Tutorials", "Research"],
        href: "/blogs",
    },
    {
        icon: Briefcase,
        title: "Hiring",
        description: "Join our team of engineers, data scientists, and product builders.",
        tags: ["Careers", "Open Roles", "Remote"],
        href: "/careers",
    },
];

function ContactFeatureCard({
    feature,
    className = "",
}: {
    feature: ContactFeature;
    className?: string;
}) {
    const { icon: Icon, title, description, href, iconClassName, iconSurfaceClassName } = feature;
    const cardClassName = [
        "contact-feature-card group flex w-full flex-col items-center justify-center gap-4 rounded-2xl p-5 text-center md:gap-5 md:p-6",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const iconWrapClassName = [
        "contact-feature-icon inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 md:h-16 md:w-16",
        iconSurfaceClassName ?? "",
        iconClassName ?? "text-slate-600",
    ].join(" ");

    const content = (
        <>
            <span className={iconWrapClassName}>
                <Icon size={28} strokeWidth={1.65} />
            </span>
            <div className="relative z-[1] min-w-0">
                <p className="text-base font-bold leading-tight text-slate-900 md:text-lg dark:text-white">
                    {title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem] dark:text-white/78">
                    {description}
                </p>
            </div>
        </>
    );

    if (href) {
        return (
            <a href={href} className={cardClassName}>
                {content}
            </a>
        );
    }

    return <div className={cardClassName}>{content}</div>;
}

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
                    <div className="faq-glass-surface relative flex min-h-[680px] flex-col overflow-hidden rounded-[2rem] p-7 text-slate-900 dark:text-white md:min-h-[760px] md:p-8 lg:p-10">
                        <div className="relative flex flex-1 flex-col">
                            <span className="text-sm font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-sky-200/75 md:text-base">
                                Get in Touch
                            </span>
                            <h1 className="mt-3 text-[2.25rem] font-extrabold leading-tight md:text-[2.75rem]">
                                <span className="text-black dark:text-white">Let&apos;s </span>
                                <span className="text-toadster-green">Talk</span>
                            </h1>
                            <p className="mt-3 max-w-md text-base leading-relaxed text-slate-600 dark:text-page-fg-subtle md:text-lg">
                                Ready to build something amazing? We&apos;d love to hear about your project.
                            </p>

                            <div className="mt-6 flex min-h-0 flex-1 w-full flex-col items-center justify-center gap-4">
                                <div className="grid w-full grid-cols-2 gap-4">
                                    {CONTACT_FEATURES.slice(0, 2).map((feature) => (
                                        <ContactFeatureCard key={feature.title} feature={feature} />
                                    ))}
                                </div>
                                <div className="flex w-full justify-center">
                                    <ContactFeatureCard
                                        feature={CONTACT_FEATURES[2]}
                                        className="w-[calc(50%-0.5rem)]"
                                    />
                                </div>
                            </div>
                            <div className="mt-auto border-t border-white/50 pt-6 dark:border-white/20">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-sky-200/75 md:text-sm">
                                            Email Us
                                        </p>
                                        <a
                                            href="mailto:business@toadsters.com"
                                            className="mt-2 block text-base font-medium text-slate-900 transition-colors hover:text-slate-700 dark:text-page-fg dark:hover:text-white"
                                        >
                                            business@toadsters.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-sky-200/75 md:text-sm">
                                            Call Now
                                        </p>
                                        <a
                                            href="tel:+919220517988"
                                            className="mt-2 block text-base font-medium text-slate-900 transition-colors hover:text-slate-700 dark:text-page-fg dark:hover:text-white"
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
                                    <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black md:text-sm">
                                        First Name
                                    </label>
                                    <Input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        className="contact-form-field h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-base text-black focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black md:text-sm">
                                        Last Name
                                    </label>
                                    <Input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        className="contact-form-field h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-base text-black focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black md:text-sm">
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
                                        className="contact-form-field h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-base text-black focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black md:text-sm">
                                        E-mail
                                    </label>
                                    <Input
                                        name="fromEmail"
                                        value={formData.fromEmail}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        className="contact-form-field h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 text-base text-black focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col">
                                <label className="mb-2 block text-xs font-semibold tracking-[0.16em] text-black md:text-sm">
                                    Query
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Write your query"
                                    rows={6}
                                    className="contact-form-field min-h-[180px] flex-1 rounded-2xl border-slate-200 bg-slate-50/80 px-4 py-3 text-base text-black focus-visible:border-slate-400 focus-visible:ring-slate-200/60 dark:!bg-slate-50/80 dark:!text-black md:min-h-[220px]"
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
                    <ScrollReveal className="mb-12 text-center">
                        <p className="section-eyebrow mb-3 text-sm font-bold uppercase tracking-[0.3em] text-black md:text-base dark:text-white/70">
                            While You&apos;re Here
                        </p>
                        <h2 className="text-3xl font-extrabold md:text-4xl lg:text-[2.75rem]">
                            <span className="text-black dark:text-white">Explore Our </span>
                            <span className="text-toadster-green">Work</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-black/75 dark:text-white/80">
                            Browse our services, hire dedicated talent, and learn more about Toadster.
                        </p>
                    </ScrollReveal>

                    <div className="flex flex-wrap justify-center gap-5">
                        {CONTACT_EXPLORE_LINKS.map((item, index) => (
                            <ScrollReveal
                                key={item.title}
                                delay={index * 0.08}
                                className="contact-explore-card-item w-full sm:w-[calc(50%-0.625rem-20px)] lg:w-[calc(30%-0.834rem-20px)]"
                            >
                                <HireRoleCard
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    tags={item.tags}
                                    href={item.href}
                                    index={index}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

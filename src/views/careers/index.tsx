"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Target, Heart, Zap, Mail, MapPin, Clock, ArrowUpRight, BookOpen, Cpu, Info } from "lucide-react"
import JobApplicationModal from "@/components/JobApplicationModal"
import { pageSectionContainer } from "@/lib/page-layout"

export default function Careers() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState("")

    const openModal = (jobTitle: string) => {
        setSelectedJob(jobTitle)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedJob("")
    }

    const jobOpenings = [
        {
            title: "Senior AI Engineer",
            type: "Full-time",
            location: "Noida, India",
            department: "Engineering",
            description: "Lead development of cutting-edge AI solutions and mentor junior engineers.",
            requirements: ["5+ years ML experience", "Python, TensorFlow/PyTorch", "Team leadership"]
        },
        {
            title: "Machine Learning Engineer",
            type: "Full-time",
            location: "Noida, India",
            department: "Engineering",
            description: "Build and deploy production ML models for enterprise clients.",
            requirements: ["3+ years ML experience", "Python, Scikit-learn", "MLOps knowledge"]
        },
        {
            title: "Full Stack Developer",
            type: "Full-time",
            location: "Noida, India",
            department: "Engineering",
            description: "Develop scalable web applications using modern technologies.",
            requirements: ["React, Node.js", "MongoDB/PostgreSQL", "3+ years experience"]
        },
        {
            title: "Data Scientist",
            type: "Full-time",
            location: "Noida, India",
            department: "Data Science",
            description: "Analyze complex datasets and build predictive models.",
            requirements: ["Statistics & ML knowledge", "Python/R", "SQL expertise"]
        },
        {
            title: "AI Product Manager",
            type: "Full-time",
            location: "Noida, India",
            department: "Product",
            description: "Drive product strategy for AI-powered solutions.",
            requirements: ["Product management experience", "Technical background", "AI/ML knowledge"]
        }
    ]

    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Innovation First",
            description: "We push boundaries and embrace cutting-edge technologies to solve complex problems."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Collaborative Culture",
            description: "Work with talented individuals who share your passion for AI and technology."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Work-Life Balance",
            description: "Flexible working hours, remote options, and a supportive environment."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Continuous Learning",
            description: "Access to conferences, training programs, and the latest tools and technologies."
        }
    ]

    const sectionContainer = pageSectionContainer

    return (
        <div className="min-h-screen overflow-x-clip pt-20">
            {/* Hero Section */}
            <section className="flex flex-col items-center page-x-gutter pb-8 pt-16 text-center lg:px-8 xl:px-10 2xl:px-14">
                <span className="mb-2 text-sm font-semibold tracking-widest text-green-400 sm:text-xl">JOIN OUR TEAM</span>
                <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="text-black dark:text-white">Build the </span>
                    <span className="text-toadster-green">Future</span>
                    <span className="text-black dark:text-white"> with Us</span>
                </h1>
                <p className="mx-auto max-w-2xl text-base text-page-fg-subtle sm:text-lg">
                    Join a team of passionate innovators shaping the future of AI and technology.
                </p>
            </section>

            {/* Values Section */}
            <section className="py-12 sm:py-20">
                <div className={sectionContainer}>
                    <div className="mb-10 text-center sm:mb-16">
                        <p className="mb-3 text-sm font-medium tracking-widest text-green-400 sm:text-xl">
                            OUR VALUES
                        </p>
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                            <span className="text-black dark:text-white">Why Work at </span>
                            <span className="text-toadster-green">Toadster</span>
                        </h2>
                    </div>

                    <div className="grid min-w-0 gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="min-w-0 rounded-xl border border-page-border bg-white/5 p-5 text-center sm:p-6"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-toadster-green/10 flex items-center justify-center text-toadster-green">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-page-fg mb-3">{value.title}</h3>
                                <p className="text-page-fg-muted text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section className="py-12 sm:py-20">
                <div className={sectionContainer}>
                    <div className="mb-10 text-center sm:mb-16">
                        <p className="mb-3 text-sm font-medium tracking-widest text-green-400 sm:text-xl">
                            OPEN POSITIONS
                        </p>
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                            <span className="text-black dark:text-white">Current </span>
                            <span className="text-toadster-green">Opportunities</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-base text-page-fg-subtle sm:text-lg">
                            Join our growing team and help shape the future of AI technology.
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        {jobOpenings.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="min-w-0 rounded-xl border border-page-border bg-white/5 p-4 transition-all duration-300 hover:border-toadster-green/50 sm:p-6 md:p-8"
                            >
                                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                                    <div className="min-w-0 flex-1">
                                        <div className="mb-3 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                                            <h3 className="text-xl font-bold text-page-fg sm:text-2xl">{job.title}</h3>
                                            <span className="rounded-full bg-toadster-green/10 px-3 py-1 text-sm font-medium text-toadster-green">
                                                {job.type}
                                            </span>
                                        </div>
                                        <p className="mb-4 text-sm text-page-fg-subtle sm:text-base">{job.description}</p>

                                        <div className="mb-4 flex flex-col gap-2 text-sm text-page-fg-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {job.department}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {job.requirements.map((req, reqIndex) => (
                                                <span
                                                    key={reqIndex}
                                                    className="px-3 py-1 bg-page-fg/10 text-page-fg-subtle text-sm rounded-full"
                                                >
                                                    {req}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full shrink-0 lg:w-auto">
                                        <Button 
                                            onClick={() => openModal(job.title)}
                                            className="w-full px-8 py-3 sm:w-auto"
                                        >
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 sm:py-20">
                <div className={`${sectionContainer} text-center`}>
                    <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
                        <span className="text-black dark:text-white">Ready to Join Our </span>
                        <span className="text-toadster-green">Team?</span>
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-base text-page-fg-subtle sm:text-lg">
                        Don't see a position that matches your skills? We're always looking for talented individuals.
                        Send us your resume and let's discuss opportunities.
                    </p>

                    <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                        <Button 
                            onClick={() => openModal("General Application")}
                            className="w-full px-8 py-5 sm:w-auto"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Send Resume
                        </Button>
                        <Button asChild variant="outline" className="w-full border-white bg-white px-8 py-5 text-slate-900 hover:bg-white/90 sm:w-auto">
                            <Link href="/about" title="Learn more about Toadster">
                                Learn More
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-page-border">
                        <p className="text-page-fg-muted text-sm">
                            Questions about careers at Toadster? Contact us at{" "}
                            <a href="mailto:business@toadsters.com" title="Email business@toadsters.com" className="text-toadster-green hover:underline">
                                business@toadsters.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Explore More Section */}
            <section className="pb-12 sm:pb-20">
                <div className={sectionContainer}>
                    <div className="mb-8 text-center sm:mb-10">
                        <p className="text-sm font-semibold tracking-[0.25em] text-toadster-green uppercase mb-2">
                            Get to Know Us
                        </p>
                        <h2 className="text-2xl font-bold md:text-3xl">
                            <span className="text-black dark:text-white">Before You </span>
                            <span className="text-toadster-green">Apply</span>
                        </h2>
                        <p className="text-page-fg-muted mt-2 max-w-xl mx-auto text-sm">
                            See what we build, who we are, and how we share what we learn.
                        </p>
                    </div>
                    <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Cpu,
                                title: "Our AI Services",
                                desc: "From agentic systems to custom ML - see what our teams ship.",
                                to: "/services/ai-development",
                            },
                            {
                                icon: BookOpen,
                                title: "Engineering Blog",
                                desc: "Tutorials, research notes, and insights from our engineers.",
                                to: "/blogs",
                            },
                            {
                                icon: Info,
                                title: "About Toadster",
                                desc: "Our mission, values, and the people leading the company.",
                                to: "/about",
                            },
                        ].map(({ icon: Icon, title, desc, to }) => (
                            <Link
                                key={title}
                                href={to}
                                title={title}
                                className="group flex h-full items-start gap-4 rounded-2xl border border-page-border bg-white/[0.03] p-5 hover:border-toadster-green/40 hover:-translate-y-0.5 hover:bg-white/[0.05] transition-all"
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
                </div>
            </section>

        {/* Job Application Modal */}
        <JobApplicationModal 
            isOpen={isModalOpen}
            onClose={closeModal}
            jobTitle={selectedJob}
        />
        </div>
    )
}
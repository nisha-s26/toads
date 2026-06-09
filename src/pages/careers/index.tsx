import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Users, Target, Heart, Zap, Mail, MapPin, Clock, ArrowUpRight, BookOpen, Cpu, Info } from "lucide-react"
import JobApplicationModal from "@/components/JobApplicationModal"

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

    return (
        <div className="min-h-screen bg-page-bg pt-20">
            {/* Hero Section */}
            <section className="pt-16 pb-8 flex flex-col items-center text-center">
                <span className="text-xl font-semibold tracking-widest text-green-400 mb-2">JOIN OUR TEAM</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                    <span className="text-page-fg">Build the </span>
                    <span className="text-green-400">Future</span>
                    <span className="text-page-fg"> with Us</span>
                </h1>
                <p className="text-page-fg-subtle text-lg max-w-2xl mx-auto">
                    Join a team of passionate innovators shaping the future of AI and technology.
                </p>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="max-w-9xl mx-20">
                    <div className="text-center mb-16">
                        <p className="text-xl tracking-widest text-green-400 font-medium mb-3">
                            OUR VALUES
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-page-fg">
                            Why Work at <span className="text-green-400">Toadster</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl bg-white/5 border border-page-border"
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
            <section className="py-20 bg-page-bg-alt">
                <div className="max-w-9xl mx-20">
                    <div className="text-center mb-16">
                        <p className="text-xl tracking-widest text-green-400 font-medium mb-3">
                            OPEN POSITIONS
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-page-fg mb-4">
                            Current <span className="text-green-400">Opportunities</span>
                        </h2>
                        <p className="text-page-fg-subtle text-lg max-w-2xl mx-auto">
                            Join our growing team and help shape the future of AI technology.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {jobOpenings.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 rounded-xl p-8 border border-page-border hover:border-toadster-green/50 transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-bold text-page-fg">{job.title}</h3>
                                            <span className="px-3 py-1 bg-toadster-green/10 text-toadster-green text-sm font-medium rounded-full">
                                                {job.type}
                                            </span>
                                        </div>
                                        <p className="text-page-fg-subtle mb-4">{job.description}</p>

                                        <div className="flex flex-wrap items-center gap-6 text-sm text-page-fg-muted mb-4">
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

                                    <div className="lg:shrink-0">
                                        <Button 
                                            onClick={() => openModal(job.title)}
                                            className="bg-[#1C3829] hover:bg-[#1C3829]/90 text-white px-8 py-3"
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
            <section className="py-20">
                <div className="max-w-9xl mx-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-page-fg mb-6">
                        Ready to Join Our <span className="text-green-400">Team?</span>
                    </h2>
                    <p className="text-page-fg-subtle text-lg mb-8 max-w-2xl mx-auto">
                        Don't see a position that matches your skills? We're always looking for talented individuals.
                        Send us your resume and let's discuss opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button 
                            onClick={() => openModal("General Application")}
                            className="bg-[#1C3829] hover:bg-[#1C3829]/90 text-white px-8 py-5"
                        >
                            <Mail className="w-5 h-5 mr-2 " />
                            Send Resume
                        </Button>
                        <Button asChild variant="outline" className="border-page-border-strong text-black hover:bg-page-fg/10 px-8 py-5">
                            <Link to="/about" title="Learn more about Toadster">
                                Learn More
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-page-border">
                        <p className="text-page-fg-muted text-sm">
                            Questions about careers at Toadster? Contact us at{" "}
                            <a href="mailto:careers@toadsters.com" title="Email careers@toadsters.com" className="text-toadster-green hover:underline">
                                careers@toadsters.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Explore More Section */}
            <section className="pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-sm font-semibold tracking-[0.25em] text-toadster-green uppercase mb-2">
                            Get to Know Us
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-page-fg">
                            Before You Apply
                        </h2>
                        <p className="text-page-fg-muted mt-2 max-w-xl mx-auto text-sm">
                            See what we build, who we are, and how we share what we learn.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            {
                                icon: Cpu,
                                title: "Our AI Services",
                                desc: "From agentic systems to custom ML — see what our teams ship.",
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
                                to={to}
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
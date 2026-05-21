import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Target, Heart, Zap, Mail, MapPin, Clock } from "lucide-react"
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
        <div className="min-h-screen bg-[#050d18] pt-20">
            {/* Hero Section */}
            <section className="pt-16 pb-8 flex flex-col items-center text-center">
                <span className="text-xl font-semibold tracking-widest text-green-400 mb-2">JOIN OUR TEAM</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                    <span className="text-white">Build the </span>
                    <span className="text-green-400">Future</span>
                    <span className="text-white"> with Us</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Join a team of passionate innovators shaping the future of AI and technology.
                </p>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-xl tracking-widest text-green-400 font-medium mb-3">
                            OUR VALUES
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
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
                                className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-toadster-green/10 flex items-center justify-center text-toadster-green">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section className="py-20 bg-[#0a1628]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-xl tracking-widest text-green-400 font-medium mb-3">
                            OPEN POSITIONS
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Current <span className="text-green-400">Opportunities</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
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
                                className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-toadster-green/50 transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                                            <span className="px-3 py-1 bg-toadster-green/10 text-toadster-green text-sm font-medium rounded-full">
                                                {job.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 mb-4">{job.description}</p>

                                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-4">
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
                                                    className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
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
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Join Our <span className="text-green-400">Team?</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
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
                        <Button variant="outline" className="border-white/20 text-black hover:bg-white/10 px-8 py-5">
                            Learn More
                        </Button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-gray-400 text-sm">
                            Questions about careers at Toadster? Contact us at{" "}
                            <a href="mailto:careers@toadsters.com" title="Email careers@toadsters.com" className="text-toadster-green hover:underline">
                                careers@toadsters.com
                            </a>
                        </p>
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
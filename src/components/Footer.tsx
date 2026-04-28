import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="border-t border-gray-200"></div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col justify-between md:flex-row gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:w-[30%] w-full md:w-[22rem] md:flex-none"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <img
                                src="/green-logo.svg"
                                alt="Toadster"
                                className="h-8 w-auto select-none"
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-600 text-sm leading-relaxed mb-6"
                        >
                            AI-powered digital engineering for enterprises and startups. Building the intelligent future, one system at a time.
                        </motion.p>

                        {/* Newsletter */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <p className="font-semibold text-gray-900 mb-3">Stay updated</p>
                            <div className="flex gap-2 mb-4">
                                <Input placeholder="your@email.com" />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button variant={"default"} size={"icon"}>
                                        <ArrowRight />
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div> */}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex gap-4"
                        >
                            <motion.a
                                href="https://in.linkedin.com/company/toadster-technologies-private-limited"
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Linkedin size={20} />
                            </motion.a>
                            <motion.a
                                href="https://github.com/team-toadster/"
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/toadsters_24/"
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Instagram size={20} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <div className="w-full lg:justify-end md:flex-1 md:min-w-0 flex flex-col sm:flex-row sm:flex-wrap gap-12">
                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="max-w-[20rem] sm:flex-1 sm:min-w-[14rem]"
                        >
                            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
                            <ul className="space-y-3">
                                <li><motion.a
                                    href="/services/agentic-ai"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >Agentic AI</motion.a></li>
                                <li><motion.a
                                    href="/services/generative-ai"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >Generative AI</motion.a></li>
                                <li><motion.a
                                    href="/services/llm-development"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >LLM Development</motion.a></li>
                                <li><motion.a
                                    href="/services/ai-chatbots"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >AI Chatbots</motion.a></li>
                                <li><motion.a
                                    href="/services/nlp-services"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >NLP Services</motion.a></li>
                                <li><motion.a
                                    href="/services/intelligent-automation"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >Intelligent Automation</motion.a></li>
                            </ul>
                        </motion.div>

                        {/* Company */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                            className="max-w-[10rem] sm:flex-1 sm:min-w-[8rem]"
                        >
                            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><motion.a
                                    href="/about"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >About Us</motion.a></li>
                                <li><motion.a
                                    href="/careers"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >Careers</motion.a></li>
                                <li><motion.a
                                    href="/blogs"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >Blogs</motion.a></li>
                                <li><motion.a
                                    href="/contact"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                >Contact</motion.a></li>
                            </ul>
                        </motion.div>

                        {/* Get in Touch */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-[20rem] sm:flex-1 sm:min-w-[8rem]"
                        >
                            <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Mail size={18} className="text-gray-600 mt-0.5 flex-shrink-0" />
                                    <motion.a
                                        href="mailto:business@toadsters.com"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                    >
                                        business@toadsters.com
                                    </motion.a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone size={18} className="text-gray-600 mt-0.5 flex-shrink-0" />
                                    <motion.a
                                        href="tel:+15550000000"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="relative inline-block text-gray-600 hover:text-gray-900 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                    >
                                        +91 92205 18139
                                    </motion.a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="text-gray-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">
                                        H-17, G-002, JAV Tower, SECTOR-63
                                        <br />
                                        Noida, India-201301
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
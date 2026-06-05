import { MdOutlineLightbulb } from "react-icons/md";
import { FaHandshake, FaChartLine, FaGlobeAmericas, FaMedal } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ArrowUpRight, Briefcase, BookOpen, Cpu, MessageCircle } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#050d18]">

            {/* ── Hero ── Background Image top section */}
            <section
                className="relative overflow-hidden text-white px-6 py-32 md:py-48 z-0"
            >
                {/* Background Image from Unsplash */}
                <img
                    src="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    title="About Toadster Banner"
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-[#050d18]/50 z-0"></div>
                {/* Overlay: Soft fade into the dark background at the bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050d18] via-[#050d18]/30 to-transparent z-0"></div>

                <div className="max-w-5xl mx-auto relative z-10 hover:translate-x-2 transition-transform duration-700">
                    <span className="inline-block text-xs font-bold tracking-widest text-green-400 mb-6 uppercase border border-green-400/40 bg-green-500/10 backdrop-blur-md rounded-full px-4 py-1.5 shadow-lg">About Us</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-2xl">
                        Engineering the<br />
                        <span className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">Future</span> of Digital
                    </h1>
                    <p className="text-gray-200 font-medium text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-xl">
                        We're a team of engineers, data scientists, and AI researchers building intelligent systems that transform how businesses operate at scale.
                    </p>
                </div>
            </section>

            {/* ── Mission ── Dark bg, 2-col with stats */}
            <section className="bg-[#050d18] px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">Our Mission</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug">
                            Democratizing AI for Every Business
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed mb-8">
                            We believe every business deserves access to world-class technology solutions. Our mission is to make AI-powered engineering accessible, practical, and impactful for organizations of all sizes.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: "250+", label: "Projects Delivered" },
                                { value: "85%", label: "Client Retention" },
                                { value: "30+", label: "Industries Served" },
                                { value: "50+", label: "Team Members" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-5 text-center">
                                    <div className="text-3xl font-extrabold mb-1 text-toadster-green">{stat.value}</div>
                                    <div className="text-xs text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[450px]">
                        {/* Top spanning horizontally */}
                        <div className="col-span-2 row-span-1 overflow-hidden rounded-3xl border border-white/5 relative group shadow-lg">
                            <img src="/about2.png" alt="Collaboration" title="Collaboration" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#050d18]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        {/* Bottom left */}
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl border border-white/5 relative group shadow-lg">
                            <img src="/about3.png" alt="Team Work" title="Team Work" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#050d18]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        {/* Bottom right */}
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl border border-white/5 relative group shadow-lg drop-shadow-xl">
                            <img src="/about1.png" alt="Innovation" title="Innovation" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#050d18]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values ── Dark bg, icon+text horizontal card list */}
            <section className="bg-[#050d18] py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xl font-semibold tracking-widest text-green-400 uppercase mb-2">What We Stand For</p>
                        <h2 className="text-4xl font-extrabold text-white">Our Values</h2>
                        <p className="text-gray-300 mt-3 max-w-xl mx-auto">The principles that guide every decision we make.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            { icon: <MdOutlineLightbulb className="text-2xl text-toadster-green" />, title: "Innovation First", desc: "We push boundaries with cutting-edge AI and engineering solutions." },
                            { icon: <FaHandshake className="text-2xl text-toadster-green" />, title: "Client Partnership", desc: "We're an extension of your team, not just a vendor." },
                            { icon: <FaChartLine className="text-2xl text-toadster-green" />, title: "Results Driven", desc: "Every line of code is measured against business impact." },
                            { icon: <FaGlobeAmericas className="text-2xl text-toadster-green" />, title: "Global Perspective", desc: "Diverse teams bringing worldwide expertise to your projects." },
                            { icon: <FaMedal className="text-2xl text-toadster-green" />, title: "Excellence", desc: "We hold ourselves to the highest engineering standards." },
                            { icon: <CiHeart className="text-2xl text-toadster-green" />, title: "Passion", desc: "We genuinely love building technology that matters." }
                        ].map((v) => (
                            <div key={v.title} className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 hover:border-toadster-green/30 hover:shadow-sm transition-all">
                                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-xl shrink-0">{v.icon}</div>
                                <div>
                                    <div className="font-bold text-white mb-1">{v.title}</div>
                                    <div className="text-gray-400 text-sm leading-relaxed">{v.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Leadership ── Dark green bg, translucent cards */}
            <section className="bg-[#050d18] px-6 pb-20 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-toadster-green rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-toadster-green rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xl font-semibold tracking-widest text-toadster-green uppercase mb-3">The Team</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Leadership</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Meet the visionary driving innovation and excellence</p>
                    </div>

                    {/* Leadership Card */}
                    <div className="group relative max-w-4xl mx-auto">
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-toadster-green/10 via-toadster-green/5 to-toadster-green/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                        <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 group-hover:border-toadster-green/20 transition-all duration-300 overflow-hidden">
                            {/* Top accent line */}
                            <div className="h-1 bg-gradient-to-r from-transparent via-toadster-green to-transparent"></div>

                            <div className="p-8 md:p-12">
                                {/* Profile Image Container */}
                                <div className="flex justify-center mb-8">
                                    <div className="relative">
                                        {/* Animated ring */}
                                        <div className="absolute -inset-3 bg-gradient-to-r from-toadster-green/40 to-toadster-green/20 rounded-full blur-md transition-all duration-300"></div>

                                        {/* Image */}
                                        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-toadster-green/50 shadow-2xl group-hover:border-toadster-green/60 transition-all duration-300 transform">
                                            <img
                                                src="/leader.jpeg"
                                                alt="Naveen Singh"
                                                title="Naveen Singh"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            {/* Overlay gradient on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-toadster-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Decorative dots */}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-toadster-green rounded-full animate-pulse"></div>
                                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-toadster-green/60 rounded-full animate-pulse delay-75"></div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="text-center space-y-4">
                                    {/* Name */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                                            Mr. Naveen Singh
                                        </h3>
                                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-toadster-green/10 border border-toadster-green/30 rounded-full">
                                            <div className="w-2 h-2 bg-toadster-green rounded-full animate-pulse"></div>
                                            <h4 className="text-sm md:text-base font-semibold text-toadster-green">
                                                Founder & Chief Executive Officer
                                            </h4>
                                        </div>
                                        <p className="text-gray-400 text-sm mt-2">Toadster Technologies Pvt. Ltd.</p>
                                    </div>

                                    {/* Divider */}
                                    <div className="flex items-center justify-center gap-2 py-4">
                                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-toadster-green/50"></div>
                                        <div className="w-1.5 h-1.5 bg-toadster-green rounded-full"></div>
                                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-toadster-green/50"></div>
                                    </div>

                                    {/* Bio */}
                                    <div className="max-w-3xl mx-auto">
                                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                            Mr. Naveen Singh is a technology leader with over <span className="text-toadster-green font-semibold">two decades of experience</span> turning bold ideas into scalable, real-world solutions. As the Founder and CEO of Toadster Technologies Pvt. Ltd., he drives <span className="text-toadster-green font-semibold">AI-powered innovation</span> that helps businesses operate smarter, faster, and more securely.
                                        </p>
                                        <p className="text-gray-400 text-base md:text-base leading-relaxed mt-4">
                                            His career spans landmark roles at <span className="text-white font-medium">EA Sports</span> and <span className="text-white font-medium">Samsung India Electronics</span>, where he contributed to globally recognized products and set new benchmarks for technology excellence. A strategist at heart and a builder by nature, Mr. Singh continues to champion responsible innovation, forge meaningful partnerships, and deliver technology solutions that create lasting impact.
                                        </p>
                                    </div>

                                    {/* Key Highlights */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10">
                                        <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-colors duration-200">
                                            <div className="text-2xl font-bold text-toadster-green mb-1">20+</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Years Experience</div>
                                        </div>
                                        <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-colors duration-200">
                                            <div className="text-2xl font-bold text-toadster-green mb-1">Global</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Impact & Reach</div>
                                        </div>
                                        <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-colors duration-200">
                                            <div className="text-2xl font-bold text-toadster-green mb-1">AI</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Innovation Leader</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Explore More ── Internal links to other key pages */}
            <section className="bg-[#050d18] px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xl font-semibold tracking-widest text-toadster-green uppercase mb-3">Keep Exploring</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Discover What We Build</h2>
                        <p className="text-gray-300 mt-3 max-w-xl mx-auto">From production-grade AI services to insights and open roles — explore everything Toadster.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                icon: Cpu,
                                title: "Our AI Services",
                                desc: "End-to-end AI development, agentic systems, and custom ML.",
                                to: "/services/ai-development",
                                cta: "View services",
                            },
                            {
                                icon: BookOpen,
                                title: "Insights & Blog",
                                desc: "Research, case studies, and engineering perspectives.",
                                to: "/blogs",
                                cta: "Read articles",
                            },
                            {
                                icon: Briefcase,
                                title: "Careers",
                                desc: "Join our team of engineers, scientists, and product builders.",
                                to: "/careers",
                                cta: "See open roles",
                            },
                            {
                                icon: MessageCircle,
                                title: "Talk to Us",
                                desc: "Have a project in mind? Let's design it together.",
                                to: "/contact",
                                cta: "Get in touch",
                            },
                        ].map(({ icon: Icon, title, desc, to, cta }) => (
                            <Link
                                key={title}
                                to={to}
                                title={title}
                                className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-toadster-green/40 hover:-translate-y-0.5 hover:bg-white/[0.04] transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-toadster-green/10 text-toadster-green">
                                        <Icon size={20} />
                                    </span>
                                    <ArrowUpRight size={16} className="text-gray-500 group-hover:text-toadster-green transition-colors" />
                                </div>
                                <h3 className="text-white font-semibold mb-1.5">{title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">{desc}</p>
                                <p className="mt-4 text-sm font-semibold text-toadster-green group-hover:gap-2 inline-flex items-center gap-1.5 transition-all">
                                    {cta}
                                    <ArrowUpRight size={14} />
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

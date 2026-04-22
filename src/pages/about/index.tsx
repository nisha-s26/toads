import { MdOutlineLightbulb } from "react-icons/md";
import { FaHandshake, FaChartLine, FaGlobeAmericas, FaMedal } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#050d18]">

            {/* ── Hero ── Background Image top section */}
            <section
                className="relative overflow-hidden text-white px-6 py-32 md:py-48 border-b border-white/5 z-0 bg-[#092a1a]"
            >
                {/* Overlay: Soft fade into the dark background at the bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050d18] via-[#050d18]/40 to-transparent z-0"></div>

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
            <section className="bg-[#050d18] py-20 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Our Mission</p>
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
                            <img src="/assets/about2.png" alt="Collaboration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#050d18]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        {/* Bottom left */}
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl border border-white/5 relative group shadow-lg">
                            <img src="/assets/about3.png" alt="Team Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#050d18]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        {/* Bottom right */}
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl border border-white/5 relative group shadow-lg drop-shadow-xl">
                            <img src="/assets/about4.jpeg" alt="Innovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#050d18]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values ── Dark bg, icon+text horizontal card list */}
            <section className="bg-[#050d18] py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">What We Stand For</p>
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
            <section className="bg-[#050d18] py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-semibold tracking-widest text-toadster-green uppercase mb-2">The Team</p>
                        <h2 className="text-4xl font-extrabold text-white">Our Leadership</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { initials: "AC", name: "Alex Chen", role: "CEO & Founder" },
                            { initials: "SK", name: "Sarah Kim", role: "CTO" },
                            { initials: "MJ", name: "Marcus Johnson", role: "VP Engineering" },
                            { initials: "PP", name: "Priya Patel", role: "AI Research Lead" },
                        ].map((person) => (
                            <div key={person.name} className="bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-6 text-center">
                                <div className="w-14 h-14 mx-auto rounded-full bg-toadster-green/20 border-2 border-toadster-green/40 flex items-center justify-center text-lg font-extrabold text-toadster-green mb-3">{person.initials}</div>
                                <div className="font-bold text-white mb-1">{person.name}</div>
                                <div className="text-toadster-green text-xs">{person.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "@/svgs/allSvg";
import { useTheme } from "@/lib/zustand";
import { Github, Wifi, WifiOff } from "lucide-react";

const projects = [
    {
        title: "ByteWords",
        description: "A Blogging Website",
        image: "/images/bytewords.png",
        githubUrl: "https://github.com/piyush-rj/blog-website",
        liveUrl: "https://bytewords-pi.vercel.app",
        techStack: ["ReactJS", "Tailwind", "JavaScript", "PostgreSQL", "Docker"],
    },
    {
        title: "Soldrop",
        description: "Solana Faucet for Devs",
        image: "/soldrop.png",
        githubUrl: "https://github.com/piyush-rj/SolDrop",
        liveUrl: "https://soldrop-ashen.vercel.app",
        techStack: ["Solana", "Next.js", "Tailwind", "TypeScript"],
    },
    {
        title: "NexWallet",
        description: "HD-Wallet for devs",
        image: "/images/nexWallet.png",
        githubUrl: "https://github.com/piyush-rj/Wallet-HD",
        liveUrl: "https://nexwallet-pink.vercel.app",
        techStack: ["NextJS", "Solana", "TypeScript", "Tailwind"],
    },
    {
        title: "PayTM Adv",
        description: "UPI Web-App",
        image: "/images/paytm.png",
        githubUrl: "https://github.com/piyush-rj/paytm-adv",
        techStack: ["React", "Express", "PostgreSQL", "TypeScript", "UPI", "Node.js"],
    },
    {
        title: "Portfolio",
        description: "The one you’re looking at",
        image: "/portfolio.png",
        githubUrl: "https://github.com/piyush-rj/portfolio_2.0",
        liveUrl: "https://piyush-nine-zeta.com",
        techStack: ["Next.js", "Tailwind", "GSAP", "TypeScript"],
    },
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showStack, setShowStack] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
    const { theme } = useTheme();

    const currentProject = projects[currentIndex];

    const goLeft = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
    const goRight = () => currentIndex < projects.length - 1 && setCurrentIndex(currentIndex + 1);

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group rounded-[36px] overflow-hidden h-full w-full"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`absolute inset-0 z-0 backdrop-blur-2xl ${theme === "dark"
                        ? "bg-gradient-to-br from-[#1d0530] via-[#0c0c0c] to-[#000]"
                        : "bg-gradient-to-br from-[#450d708a] via-[#450d708a] to-[#d2d2d2]"
                    }`}
            />

            <div
                className={`relative z-10 font-sans text-white p-4 sm:p-6 md:p-10 rounded-[36px] ${theme === "dark"
                        ? "bg-black/40 border border-white/10"
                        : "bg-white/60 border border-black/10 text-black"
                    }`}
            >
                <div className="flex justify-between items-start mb-6">
                    <span
                        className={`tracking-wider text-sm md:text-base ${theme === "dark" ? "text-neutral-100" : "text-black"
                            }`}
                    >
                        PROJECTS
                    </span>

                    <div
                        className={`text-sm md:text-base font-medium ${theme === "dark" ? "text-neutral-200" : "text-black"
                            }`}
                    >
                        {currentProject.title}
                    </div>
                </div>

                {/* Hide description on mobile */}
                <div className="hidden sm:flex -mt-4 mb-4 sm:justify-end">
                    <span
                        className={`text-sm ${theme === "dark" ? "text-neutral-200" : "text-black"
                            }`}
                    >
                        {currentProject.description}
                    </span>
                </div>

                {/* Image and Navigation */}
                <div className="relative w-full flex items-center justify-center">
                    {currentIndex > 0 && (
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={goLeft}
                            className="absolute -left-4 z-10 bg-neutral-300 text-black p-2 rounded-full cursor-pointer shadow-md hover:bg-neutral-200 transition"
                        >
                            <ArrowLeft height="34" width="34" />
                        </motion.button>
                    )}

                    {currentIndex < projects.length - 1 && (
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={goRight}
                            className="absolute -right-4 z-10 bg-neutral-300 text-black p-2 rounded-full cursor-pointer shadow-md hover:bg-neutral-200 transition"
                        >
                            <ArrowRight width="34" height="34" />
                        </motion.button>
                    )}

                    <motion.div
                        key={currentProject.image}
                        initial={{ opacity: 0.2, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex flex-col items-center overflow-hidden rounded-[32px] border border-neutral-300"
                    >
                        <img
                            src={currentProject.image}
                            alt={currentProject.title}
                            className="w-full h-[280px] sm:h-[400px] md:h-[580px] object-cover object-top rounded-[32px] shadow-lg"
                            draggable={false}
                        />
                    </motion.div>
                </div>

                {/* GitHub, Wifi, and Show Stack button (mobile only) */}
                <div className="sm:hidden flex items-center justify-between px-4 mt-3">
                    <button
                        onClick={() => setShowStack((prev) => !prev)}
                        className={`text-sm px-3 py-1 rounded-full border font-medium ${theme === "dark"
                                ? "bg-white/10 text-white border-white/20"
                                : "bg-black/10 text-black border-black/20"
                            }`}
                    >
                        {showStack ? "Hide Stack" : "Show Stack"}
                    </button>

                    <div className="flex gap-3">
                        {currentProject.githubUrl && (
                            <a
                                href={currentProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {currentProject.title === "PayTM Adv" ? (
                            <WifiOff className="w-5 h-5 opacity-60" />
                        ) : (
                            currentProject.liveUrl && (
                                <a
                                    href={currentProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition"
                                >
                                    <Wifi className="w-5 h-5" />
                                </a>
                            )
                        )}
                    </div>
                </div>

                {/* Tech Stack (mobile toggle) */}
                {showStack && (
                    <div className="sm:hidden mt-3 px-4 flex flex-wrap gap-2">
                        {currentProject.techStack?.map((tech) => (
                            <span
                                key={tech}
                                className={`px-3 py-1 text-sm rounded-full font-medium ${theme === "dark"
                                        ? "bg-white/10 text-white border border-white/20"
                                        : "bg-black/10 text-black border border-black/20"
                                    }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Tech stack + icons (desktop only) */}
                <div className="hidden sm:flex mt-6 items-center justify-between gap-4 px-4">
                    <div className="flex flex-wrap gap-2">
                        {currentProject.techStack?.map((tech) => (
                            <span
                                key={tech}
                                className={`px-3 py-1 text-sm rounded-full font-medium ${theme === "dark"
                                        ? "bg-white/10 text-white border border-white/20"
                                        : "bg-black/10 text-black border border-black/20"
                                    }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        {currentProject.githubUrl && (
                            <a
                                href={currentProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition"
                            >
                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        )}
                        {currentProject.title === "PayTM Adv" ? (
                            <WifiOff className="w-5 h-5 sm:w-6 sm:h-6 opacity-60" />
                        ) : (
                            currentProject.liveUrl && (
                                <a
                                    href={currentProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition"
                                >
                                    <Wifi className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

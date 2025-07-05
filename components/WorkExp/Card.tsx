"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Redirect } from "@/svgs/allSvg";
import { useTheme } from "@/lib/zustand";

interface CardProps {
    title: string;
    imagePath: string;
    duration: string;
    role: string;
    tech?: React.ReactNode[]; // Accept SVGs or any JSX
}

export default function Card({
    title,
    imagePath,
    duration,
    role,
    tech = [],
}: CardProps) {
    const techButtonRef = useRef<HTMLSpanElement>(null);
    const techIconsRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const logoRef = useRef<HTMLSpanElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (!techButtonRef.current || !techIconsRef.current || tech.length === 0) return;

        const button = techButtonRef.current;
        const icons = techIconsRef.current.querySelectorAll(".tech-icon");

        gsap.set(button, { x: 0 });
        gsap.set(icons, {
            x: 0,
            opacity: 0,
        });

        if (isHovered) {
            gsap.to(button, {
                x: -200,
                duration: 0.4,
                ease: "power2.out",
            });

            icons.forEach((icon, index) => {
                gsap.to(icon, {
                    x: index * 46,
                    opacity: 1,
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "power3.out",
                });
            });
        } else {
            gsap.to(button, {
                x: 0,
                duration: 0.3,
                ease: "power2.in",
            });

            gsap.to(icons, {
                x: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
            });
        }
    }, [isHovered, tech.length]);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(card, {
                rotateX,
                rotateY,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
                transformPerspective: 1000,
                transformOrigin: "center",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 1.2,
                ease: "elastic.out(1, 0.4)",
                transformPerspective: 1000,
            });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            style={{ transformStyle: "preserve-3d" }}
            className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[520px] h-[400px] flex flex-col font-sans rounded-3xl overflow-hidden justify-center items-center p-4 sm:p-6 relative will-change-transform shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)] transition-shadow ${theme == "dark" ? "bg-gradient-to-b from-[#160604] via-[#130100] to-[black] border border-neutral-800/60" : "bg-gradient-to-b from-[#8f8f8fa6] to-neutral-300 border border-neutral-800/60"}`}
        >
            <div className="h-2/3 w-full relative rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="absolute w-full h-full rounded-3xl bg-gradient-to-tr from-blue-500/20 to-pink-500/20 blur-2xl scale-125 z-0"></div>
                <div className="relative z-10 w-full h-full rounded-3xl flex items-center justify-center">
                    <Image
                        src={imagePath}
                        alt={title}
                        fill
                        className="object-cover rounded-3xl bg-[#50130E] p-8"
                    />
                </div>
            </div>

            <div className="h-1/3 w-full flex flex-col p-2 justify-between space-y-1">
                <div className="flex justify-between mt-2">
                    <span className={`font-bold tracking-wide text-xl ${theme == "dark" ? "text-neutral-200" : "text-black"}`}>{title}</span>
                    <span
                        className={`flex justify-center items-center ${theme == "dark" ? "text-neutral-200 " : "text-black"}`}
                        ref={logoRef}
                    >
                        <Redirect width="20" height="20" />
                    </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className={`text-sm ${theme == "dark" ? "text-neutral-300" : "text-neutral-800"}`}>{role}</span>
                    <span className={`text-sm ${theme == "dark" ? "text-neutral-400 " : "text-neutral-700"}`}>{duration}</span>
                </div>

                <div
                    className="relative flex justify-start mt-4 w-full"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <span
                        ref={techButtonRef}
                        className="bg-neutral-900/70 text-neutral-200 border border-neutral-700/50 rounded-full px-4 py-1 tracking-wide font-sans cursor-pointer hover:bg-white transition-colors duration-200 relative z-10 text-xs sm:text-sm"
                    >
                        TECH STACK
                    </span>

                    <div
                        ref={techIconsRef}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex items-center pointer-events-none"
                    >
                        {tech.map((iconNode, index) => (
                            <div
                                key={index}
                                className="absolute tech-icon"
                                style={{ transformOrigin: "center", opacity: 0 }}
                            >
                                <div className="bg-neutral-200 border border-neutral-300 p-1 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                    {iconNode}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

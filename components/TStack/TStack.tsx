"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@/lib/zustand";
import Image from "next/image";
import { GitHub, Prisma } from "@/svgs/allSvg";

gsap.registerPlugin(ScrollTrigger);

interface Logos {
    name: string;
    url: string | React.ReactNode;
}

export const logos: Logos[] = [
    { name: "TypeScript", url: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png" },
    { name: "JavaScript", url: "https://img.icons8.com/?size=100&id=RwtOBojoLS2N&format=png" },
    { name: "JAVA", url: "https://img.icons8.com/?size=100&id=FBycNmdwUQz1&format=png" },
    { name: "Figma", url: "https://img.icons8.com/?size=100&id=snB4bDeuO6gJ&format=png" },
    { name: "NodeJS", url: "https://img.icons8.com/?size=100&id=54087&format=png" },
    { name: "ExpressJS", url: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png" },
    { name: "ReactJS", url: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png" },
    { name: "NextJS", url: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png" },
    { name: "Prisma ORM", url: ( <Prisma width="50" height="50"/>)},
    { name: "MongoDB", url: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png" },
    { name: "PostgreSQL", url: "https://img.icons8.com/?size=100&id=38561&format=png" },
    { name: "Docker", url: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png" },
    { name: "Git", url: "https://img.icons8.com/?size=100&id=20906&format=png" },
    { name: "GitHub", url: (<GitHub width="55" height="55" className="text-neutral-500"/>) },
    { name: "Postman", url: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png" },
    { name: "Turborepo", url: "/Turborepo.svg" },
    { name: "TailwindCSS", url: "/Tailwindcss.svg" },
    { name: "WebSocket", url: "/Websocket.svg" },
    { name: "HTML", url: "/Html.png" },
    { name: "CSS", url: "/css.png" },
];

export default function TStack() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            containerRef.current.querySelectorAll(".logo"),
            {
                opacity: 0,
                y: 20,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.07,
                duration: 0.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-start px-4 sm:px-6 py-12 sm:py-16 font-sans">
            <h2
                className={`text-xl sm:text-3xl font-normal mb-6 sm:mb-10 uppercase tracking-wider text-center ${theme === "dark" ? "text-neutral-300" : "text-black"
                    }`}
            >
                Tech Stack
            </h2>

            <div
                ref={containerRef}
                className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4 sm:gap-6 md:gap-8 place-items-center max-w-[1100px] w-full"
            >
                {logos.map((tech, i) => (
                    <div
                        key={i}
                        className="logo flip-card w-[70px] h-[70px] xs:w-[80px] xs:h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] overflow-hidden"
                    >
                        <div className="flip-inner w-full h-full rounded-full">
                            {/* Front */}
                            <div
                                className={`flip-front flex items-center justify-center w-full h-full rounded-full p-4 ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-neutral-300/90"
                                    }`}
                            >
                                {typeof tech.url === "string" ? (
                                    <Image
                                        width={30}
                                        height={30}
                                        src={tech.url}
                                        alt={tech.name}
                                        className="w-full h-full object-contain"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-white text-sm">
                                        {tech.url}
                                    </div>
                                )}
                            </div>

                            {/* Back */}
                            <div
                                className={`flip-back flex items-center justify-center text-center text-[10px] sm:text-xs md:text-sm font-medium px-2 w-full h-full rounded-full ${theme === "dark"
                                        ? "bg-black text-white border border-neutral-900"
                                        : "bg-neutral-300/90 text-black border border-neutral-300"
                                    }`}
                            >
                                {tech.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

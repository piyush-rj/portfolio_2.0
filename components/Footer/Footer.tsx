"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/zustand";

export default function Footer() {
    const topRef = useRef<HTMLButtonElement>(null);
    const themeRef = useRef<HTMLButtonElement>(null);
    const resumeRef = useRef<HTMLAnchorElement>(null);
    const lastScrollY = useRef(0);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            const targets = [topRef.current, themeRef.current, resumeRef.current];

            if (currentScroll > lastScrollY.current) {
                // Scrolling down → show
                gsap.to(targets, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    pointerEvents: "auto",
                });
            } else {
                // Scrolling up → hide
                gsap.to(targets, {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                    ease: "power2.in",
                    pointerEvents: "none",
                });
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="fixed bottom-6 left-0 right-0 z-50 flex justify-center gap-4">
            {/* Return to Top */}
            <button
                ref={topRef}
                onClick={scrollToTop}
                className={`px-4 py-2 text-xs sm:text-sm tracking-wider font-mono rounded-full shadow-lg hover:scale-105 transition-transform ${theme == "dark" ? " bg-black text-white" : "bg-neutral-300 text-black"}`}
                style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    pointerEvents: "none",
                }}
            >
                return to top();
            </button>

            {/* Theme Toggle */}
            <button
                ref={themeRef}
                onClick={(e) => {
                    e.stopPropagation();
                    setTheme(theme === "dark" ? "light" : "dark");
                }}
                className={`p-2 rounded-full  shadow-lg hover:scale-110 transition-transform ${theme == "dark" ? "bg-black text-white" : "bg-neutral-300 text-black"}`}
                style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    pointerEvents: "none",
                }}
                aria-label="Toggle theme"
            >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Resume Link */}
            <a
                ref={resumeRef}
                href="https://drive.google.com/file/d/1en9yEjLGL3YAsoZhe9OaTXjVyYCm9Yr4/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-xs sm:text-sm tracking-wider font-mono rounded-full shadow-lg hover:scale-105 transition-transform ${theme == "dark" ? " bg-black text-white" : "bg-neutral-300 text-black"}`}
                style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    pointerEvents: "none",
                }}
            >
                resume
            </a>
        </footer>
    );
}

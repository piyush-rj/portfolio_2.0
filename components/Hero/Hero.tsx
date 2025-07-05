"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./blinking.css";
import { useTheme } from "@/lib/zustand";

export default function Hero() {
    const controls = useAnimation();
    const lastY = useRef(0);
    const hasAnimatedIn = useRef(false);
    const { theme } = useTheme();

    useEffect(() => {
        // ✅ Initial mount animation
        if (!hasAnimatedIn.current) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
            hasAnimatedIn.current = true;
        }

        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastY.current + 5) {
                // Scrolling down
                controls.start({ opacity: 0, y: -20, transition: { duration: 0.3 } });
            } else if (currentY < lastY.current - 5) {
                // Scrolling up
                controls.start({ opacity: 1, y: 0, transition: { duration: 0.4 } });
            }

            lastY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="flex flex-col mx-4 px-4 sm:px-8 text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] tracking-wide font-sans font-bold leading-tight sm:leading-15 pt-[80px] xs:pt-[90px] sm:pt-[100px] md:pt-[110px] pb-[30px] sm:pb-[40px]"
        >
            <span className={`${theme == "dark" ? "text-neutral-200" : "text-black"} mb-2 sm:mb-0`}>
                hey! i'm piyush
            </span>
            <span className="flex gap-1 text-cyan-800 font-normal flex-wrap sm:whitespace-nowrap">
                <TypeAnimation
                    sequence={[
                        "fullstack web developer", 2000,
                        "gamer", 2000,
                        "designer", 2000,
                        "web3 explorer", 2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={false}
                />
                <span className="blinking-underscore">_</span>
            </span>
        </motion.div>
    );
}
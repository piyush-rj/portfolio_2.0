"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTheme } from "@/lib/zustand";

export default function ThemeTransitionOverlay() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const { setTheme } = useTheme();
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const handleThemeTransition = (e: CustomEvent) => {
            if (animating) return;
            setAnimating(true);

            const { x, y, nextTheme } = e.detail;
            const overlay = overlayRef.current;
            if (!overlay) return;

            // Dynamically change blend color based on target theme
            overlay.style.background =
                nextTheme === "dark"
                    ? "radial-gradient(circle at center, rgba(0,0,0,0.5), rgba(0,0,0,1))"
                    : "radial-gradient(circle at center, rgba(255,255,255,0.5), rgba(255,255,255,1))";

            overlay.style.clipPath = `circle(0% at ${x}px ${y}px)`;
            overlay.style.opacity = "1";
            overlay.style.pointerEvents = "auto";

            let themeChanged = false;

            gsap.to(overlay, {
                clipPath: `circle(150% at ${x}px ${y}px)`,
                duration: 1.2,
                ease: "power3.inOut",
                onUpdate: () => {
                    if (!themeChanged) {
                        const currentClip = gsap.getProperty(overlay, "clipPath") as string;
                        const radiusMatch = /circle\(([^%]+)%/.exec(currentClip);
                        if (radiusMatch && parseFloat(radiusMatch[1]) > 45) {
                            setTheme(nextTheme);
                            themeChanged = true;
                        }
                    }
                },
                onComplete: () => {
                    requestAnimationFrame(() => {
                        gsap.to(overlay, {
                            opacity: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            onComplete: () => {
                                overlay.style.pointerEvents = "none";
                                setAnimating(false);
                            },
                        });
                    });
                },
            });
        };

        window.addEventListener("theme-transition", handleThemeTransition as EventListener);
        return () => window.removeEventListener("theme-transition", handleThemeTransition as EventListener);
    }, [setTheme, animating]);

    return <div ref={overlayRef} className="fixed inset-0 z-[9999] pointer-events-none"></div>;
}
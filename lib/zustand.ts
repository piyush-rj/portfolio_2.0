import { create } from "zustand";

interface ThemeState {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
    triggerTransition: (x: number, y: number, nextTheme: "light" | "dark") => void;
}

export const useTheme = create<ThemeState>((set, get) => ({
    theme: "dark",
    setTheme: (theme) => set({ theme }),

    triggerTransition: (x: number, y: number, nextTheme: "light" | "dark") => {
        const sphere = document.createElement("div");
        sphere.classList.add("theme-transition-sphere");

        Object.assign(sphere.style, {
            position: "fixed",
            top: `${y}px`,
            left: `${x}px`,
            width: "0px",
            height: "0px",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            zIndex: "9999",
            background: nextTheme === "light" ? "#fff" : "#000",
            pointerEvents: "none",
            transition: "transform 0.9s ease-in-out, opacity 0.5s ease-out",
        });

        document.body.appendChild(sphere);
        void sphere.offsetWidth; // force reflow

        sphere.style.transform = `translate(-50%, -50%) scale(${window.innerWidth * 2})`;

        // Midway: toggle the theme
        setTimeout(() => {
            set({ theme: nextTheme });
        }, 450);

        // Remove ripple
        setTimeout(() => {
            sphere.style.opacity = "0";
            setTimeout(() => {
                document.body.removeChild(sphere);
            }, 500);
        }, 900);
    }
}));

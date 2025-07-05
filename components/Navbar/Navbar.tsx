"use client";

import { useEffect, useRef, useState } from "react";
import { GitHub, LinkedIn, Mail, Twitter } from "@/svgs/allSvg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sun, Moon, X } from "lucide-react";
import { useTheme } from "@/lib/zustand";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);
  const socialMenuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { theme, triggerTransition } = useTheme();
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  const socialLinks = [
    { Icon: LinkedIn, url: "https://www.linkedin.com/in/piyush-raj-07a318260/", label: "LinkedIn" },
    { Icon: Twitter, url: "https://x.com/PiyushC2P", label: "Twitter" },
    { Icon: GitHub, url: "https://github.com/piyush-rj", label: "GitHub" },
    { Icon: Mail, url: "mailto:piyushraj26102004@gmail.com", label: "Email" },
  ];

  useEffect(() => {
    const nav = navRef.current;
    const emoji = emojiRef.current;
    if (!nav || !emoji) return;

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "+=100",
      scrub: true,
      onUpdate: (self) => {
        const scrolled = self.progress > 0.05;
        gsap.to(nav, {
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          backgroundColor:
            theme === "light"
              ? scrolled
                ? "rgba(255, 255, 255, 0.7)"
                : "transparent"
              : "transparent",
          boxShadow: scrolled
            ? theme === "dark"
              ? "inset 0 0 0 1000px rgba(0, 0, 0, 0.25)"
              : "0 4px 10px rgba(0,0,0,0.05)"
            : "none",
          borderWidth: scrolled ? "0.5px" : "0px",
          borderColor:
            theme === "dark"
              ? scrolled
                ? "rgba(255, 255, 255, 0.08)"
                : "transparent"
              : scrolled
                ? "rgba(0, 0, 0, 0.06)"
                : "transparent",
          duration: 0.3,
          ease: "power2.out",
        });

      },
    });

    const handleMouseEnter = () => {
      if (window.innerWidth >= 768) {
        gsap.fromTo(
          emoji,
          { x: -40, opacity: 0, scale: 0.5 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          }
        );
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        gsap.to(emoji, {
          x: -40,
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power1.inOut",
        });
      }
    };

    nav.addEventListener("mouseenter", handleMouseEnter);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mouseenter", handleMouseEnter);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const socialMenu = socialMenuRef.current;
    const overlay = overlayRef.current;

    if (!socialMenu || !overlay) return;

    if (isSocialMenuOpen) {
      gsap.set(overlay, { display: "block" });
      gsap.fromTo(overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(socialMenu,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      const socialItems = socialMenu.querySelectorAll('.social-item');
      gsap.fromTo(socialItems,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out"
        }
      );
    } else {
      gsap.to(socialMenu, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
        }
      });
    }
  }, [isSocialMenuOpen]);

  const toggleSocialMenu = () => {
    setIsSocialMenuOpen(!isSocialMenuOpen);
  };

  const closeSocialMenu = () => {
    setIsSocialMenuOpen(false);
  };

  return (
    <>
      <div
        ref={navRef}
        className={`sticky font-sans top-6 z-50 bg-transparent transition-all duration-300 flex items-center justify-between px-6 py-4 sm:px-9 sm:py-6 rounded-xl mt-6 mx-4 ${theme == "dark" ? "text-neutral-500" : "text-neutral-950"}`}
      >
        <div className="relative tracking-wider text-[18px] font-medium">
          <span className="relative z-10">PIYUSH RAJ</span>
          <div
            ref={emojiRef}
            className="absolute left-28 top-3.5 -translate-y-1/2 ml-1 z-0 text-[15px] opacity-0 pointer-events-none hidden sm:block"
          >
            ✌️
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          {socialLinks.map(({ Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1 rounded-xl cursor-pointer transition duration-200 ${theme === "dark" ? "hover:bg-neutral-900" : "hover:bg-neutral-700"
                }`}
            >
              <Icon height="26" width="26" />
            </a>
          ))}
        </div>

        <button
          onClick={toggleSocialMenu}
          className={`sm:hidden p-2 rounded-xl cursor-pointer transition duration-200 ${theme === "dark" ? "hover:bg-neutral-900" : "hover:bg-neutral-700"
            }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cube"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z" /><path d="M12 22v-10" /><path d="M12 12l8.73 -5.04" /><path d="M3.27 6.96l8.73 5.04" /></svg>
        </button>

      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] sm:hidden"
        style={{ display: "none" }}
        onClick={closeSocialMenu}
      />

      <div
        ref={socialMenuRef}
        className={`fixed top-0 right-0 h-full w-80 z-[70] sm:hidden transform translate-x-full rounded-l-2xl ${theme === "dark"
          ? "bg-neutral-900/95 border-l border-neutral-800"
          : "bg-white/95 border-l border-neutral-200"
          } backdrop-blur-xl`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-xl font-bold font-sans tracking-wide ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
              CONNECT WITH ME
            </h2>
            <button
              onClick={closeSocialMenu}
              className={`p-2 rounded-xl transition duration-200 ${theme === "dark" ? "hover:bg-neutral-800 text-neutral-400" : "hover:bg-neutral-100 text-neutral-600"
                }`}
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {socialLinks.map(({ Icon, url, label }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-item flex items-center space-x-4 p-4 rounded-xl font-sans transition duration-200 ${theme === "dark"
                  ? "hover:bg-neutral-800 text-neutral-300 hover:text-white"
                  : "hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900"
                  }`}
                onClick={closeSocialMenu}
              >
                <Icon height="24" width="24" />
                <span className="text-base font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

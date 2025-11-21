'use client'
import { useRef } from "react";
import { cn } from "@/lib/utils";
import BaseFooter from "@/src/components/Base/BaseFooter";
import HomeMain from "@/src/components/HomeMain";
import MainNavbar from "@/src/components/nav/MainNavbar";
import ScrollContext from "@/src/contexts/ScrollContext";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const careersRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={{ introRef, projectsRef, careersRef, techStackRef }}>
      <div className="h-full max-w-screen flex flex-col items-center justify-center bg-[#f0f9ff] dark:bg-[#0d0e0f] select-none custom-scrollbar relative">
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-[70px] z-50 pointer-events-none backdrop-blur-[4px]",
            "bg-gradient-to-b from-white/70 via-neutral-100/40 to-transparent",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-neutral-300/40 before:to-transparent",
            "dark:bg-gradient-to-b dark:from-[#141414]/70 dark:via-[#141414]/40 dark:to-transparent",
            "dark:before:bg-gradient-to-r dark:before:from-transparent dark:before:via-[#141414]/40 dark:before:to-transparent",
            ''
          )}
        />
        <MainNavbar />
        <HomeMain 
          introRef={introRef}
          projectsRef={projectsRef}
          careersRef={careersRef}
          techStackRef={techStackRef}
        />
        <BaseFooter />
      </div>
    </ScrollContext.Provider>
  );
}
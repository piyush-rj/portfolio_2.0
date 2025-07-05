"use client"
import Main from "@/components/Main";
import { useTheme } from "@/lib/zustand";

export default function Home() {

  const {theme} = useTheme();

  return (
    <div className={`min-h-screen w-full flex justify-center ${theme == "dark" ? "bg-[#0E1011]" : "bg-neutral-200"}`}>
      <Main/>
    </div>
  );
}

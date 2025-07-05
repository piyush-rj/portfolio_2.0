"use client";
import Main from "@/components/Main";
import { useTheme } from "@/lib/zustand";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen w-full flex justify-center transition-colors duration-1000 ${theme === "dark" ? "ios-dark-bg" : "ios-light-bg"
        }`}
    >
      <Main />
    </div>
  );
}

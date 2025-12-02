"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

export default function BaseGithubCard() {
  const cyanTheme = {
    dark: [
    "#161B22", // empty
    "#262B31", // low  (darker than #2E343B)
    "#5D646A", // mid
    "#A4A9AD", // medium-high
    "#C6C4C2"  // high
  ],
    light: ["#E8FBFF", "#A8F4FF", "#6EEBFF", "#31DAF0", "#00CFE3"],
  };

  const [blockSize, setBlockSize] = useState<number>(16);
  const [blockMargin, setBlockMargin] = useState<number>(5);
  const [fontsize, setFontsize] = useState<number>(14);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 450) {
        setBlockSize(8);
        setBlockMargin(2);
        setFontsize(10)
      } else if (window.innerWidth < 768) {
        setBlockSize(12);
        setBlockMargin(4);
        setFontsize(11)
      } else {
        setBlockSize(14);
        setBlockMargin(6);
        setFontsize(14)
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full flex flex-col overflow-hidden mt-10">
      <div className="flex justify-between items-center">
        <span className="md:text-[22px] tracking-wider font-sans text-neutral-300 glow-text ">
          GitHub Activity
        </span>
      </div>

      <div className="mt-5 p-4 rounded-sm border border-neutral-800 bg-[#111] overflow-x-auto">
        <div className="min-w-max">
          <GitHubCalendar
            username="piyush-rj"
            theme={cyanTheme}
            blockSize={blockSize}
            blockMargin={blockMargin}
            blockRadius={1}
            fontSize={fontsize}
            colorScheme="dark"
          />
        </div>
      </div>
    </div>
  );
}

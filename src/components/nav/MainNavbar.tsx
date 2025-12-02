import { RiGithubFill, RiTwitterXFill } from "react-icons/ri";
import { BsLink45Deg } from "react-icons/bs";
import { TbBrandLinkedinFilled } from "react-icons/tb";

export default function MainNavbar() {
    return (
        <div className="w-full md:max-w-6xl z-50 fixed top-4 left-1/2 -translate-x-1/2 py-2 px-4 sm:px-6 font-sans flex items-center">
            <div className="text-base sm:text-lg md:text-[20px] dark:text-neutral-300/80 dark:hover:text-neutral-200 text-neutral-700 transition-colors transform duration-300 hover:glow-text">
                PIYUSH RAJ
            </div>
            <div className="flex-1 flex justify-end items-center gap-x-3 sm:gap-x-4 md:gap-x-5 text-[15px] text-neutral-700 dark:text-neutral-300/90">
                <a 
                    href="https://drive.google.com/file/d/1coJXUdXbhVRba007p6ucb8fZYAoWMQHT/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                    className="dark:hover:text-neutral-200 hover:text-neutral-800 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-900 p-[3px] rounded-sm">
                    <BsLink45Deg  className="size-4 sm:size-4.5" />
                </a>
                <a href="https://x.com/PiyushC2P" target="_blank" rel="noopener noreferrer"
                    className="dark:hover:text-neutral-200 hover:text-neutral-800 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-900 p-[3px] rounded-sm">
                    <RiTwitterXFill className="size-4 sm:size-4.5" />
                </a>
                <a href="https://www.linkedin.com/in/piyush-raj-07a318260" target="_blank" rel="noopener noreferrer"
                    className="dark:hover:text-neutral-200 hover:text-neutral-800 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-900 p-[3px] rounded-sm">
                    <TbBrandLinkedinFilled className="size-4.5 sm:size-5" />
                </a>
                <a href="https://github.com/piyush-rj" target="_blank" rel="noopener noreferrer"
                    className="dark:hover:text-neutral-200 hover:text-neutral-800 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-900 p-[3px] rounded-sm">
                    <RiGithubFill className="size-4.5 sm:size-5" />
                </a>
            </div>
        </div>
    );
}
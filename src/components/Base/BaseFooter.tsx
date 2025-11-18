'use client';
import { useRouter } from "next/navigation";
import { PiCopyrightLight } from "react-icons/pi";

export default function BaseFooter() {

    const router = useRouter();

    return (
        <div className="w-screen max-w-screen border-t md:h-[40vh] mt-10 md:mt-30 font-sans tracking-normal flex">
            <div className="w-full h-full md:px-30 px-10 py-10 md:py-18 flex flex-col md:flex-row gap-x-20 gap-y-10">

                <div className="flex flex-col gap-y-3 text-neutral-300 text-[14px]">
                    <div className="text-neutral-400/80 text-[12px] tracking-wide">MAIN</div>

                    <div
                        onClick={() => router.push('/about')}
                        className="mt-2 cursor-pointer hover:text-primary-blue transition-colors duration-250"
                    >
                        About
                    </div>

                    <div
                        onClick={() => router.push('/projects')}
                        className="cursor-pointer hover:text-primary-blue transition-colors duration-250"
                    >
                        Projects
                    </div>

                    <div
                        onClick={() => router.push('/role')}
                        className="cursor-pointer hover:text-primary-blue transition-colors duration-250"
                    >
                        Role
                    </div>
                </div>

                <div className="flex flex-col gap-y-3 text-neutral-300 text-[14px]">
                    <div className="text-neutral-400/80 text-[12px] tracking-wide">CONTACT</div>

                    <a
                        href="https://www.linkedin.com/in/piyush-raj-07a318260"
                        target="_blank"
                        className="mt-2 cursor-pointer hover:text-primary-blue transition-colors duration-250"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://x.com/PiyushC2P"
                        target="_blank"
                        className="cursor-pointer hover:text-primary-blue transition-colors duration-250"
                    >
                        Twitter
                    </a>
                </div>

                <div className="flex flex-col gap-y-3 text-neutral-300 text-[14px]">
                    <div className="text-neutral-400/80 text-[12px] tracking-wide">MORE</div>

                    <a
                        href="https://github.com/piyush-rj"
                        target="_blank"
                        className="mt-2 cursor-pointer hover:text-primary-blue transition-colors duration-250"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1coJXUdXbhVRba007p6ucb8fZYAoWMQHT/view?usp=sharing"
                        target="_blank"
                        className="cursor-pointer hover:text-primary-blue transition-colors duration-250"
                    >
                        Resume
                    </a>
                </div>

                <div className="md:hidden block flex w-full gap-y-3 text-neutral-300 text-[14px]">
                    <div className="flex items-center gap-x-1 text-neutral-300 tracking-wide font-sans">
                    <span><PiCopyrightLight /></span>
                    2025 Piyush Raj. All Rights Reserved.
                </div>

                </div>

            </div>

            <div className="hidden md:block w-full h-full pt-40 flex justify-end items-end ">
                <div className="flex items-center justify-end pr-20 gap-x-1 text-neutral-300 tracking-wide font-sans">
                    <span><PiCopyrightLight /></span>
                    2025 Piyush Raj. All Rights Reserved.
                </div>
            </div>

        </div>
    );
}

"use client"
import { Mail, Twitter } from "@/src/all-svgs/svgs";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { useState } from "react";
import { Link2 } from "../animated-icons/Link";

const roboto = Roboto({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


export default function BaseIntro() {

    const [activeImage, setActiveImage] = useState<number>(0);
    const [isPressed, setIsPressed] = useState<boolean>(false);

    function handleClick() {
        setIsPressed(true);

        setTimeout(() => {
            setIsPressed(false);
            setActiveImage((prev) => (prev + 1) % allImages.length);
        }, 50)
    }

    const allImages = ['pfp.jpg', 'dazai.jpeg', 'Gojo.jpeg', 'tanjiro.jpeg'];

    return (
        <div className={`w-full ${roboto.className}`}>
            {/* name, pfp, socials */}
            <div className="h-auto w-full flex text-neutral-300">
                <div className="w-full flex items-center gap-x-2.5">
                    <div
                        onClick={handleClick}
                        className="h-9 w-9 rounded-md overflow-hidden relative "
                    >
                        <Image
                            src={`/images/${allImages[activeImage]}`}
                            alt="oopps"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className={`${roboto.className} text-[26px] font-medium tracking-wider flex items-center`}>
                        piyush
                        <a
                            href="https://drive.google.com/file/d/1hQKK_Luxhr_pJ9zuv4NOoi9h41guRk9T/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-rotate-45"
                        >
                            <Link2 className="size-5"/>
                        </a>
                    </span>
                </div>

                <div className="w-full flex gap-x-3.5 justify-end items-center">
                    <a
                        href="https://twitter.com/PiyushC2P"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter
                            width="23"
                            height="23"
                            className="hover:text-neutral-400 transition-colors duration-250"
                        />
                    </a>

                    <a href="mailto:piyushraj26102004@email.com">
                        <Mail
                            width="23"
                            height="23"
                            className="hover:text-neutral-400 transition-colors duration-250"
                        />
                    </a>
                </div>

            </div>

            {/* about me */}
            <div className="flex flex-col md:text-[19px] text-[#b0b0b0] mt-5">
                <span className="tracking-wide">
                    A 21 yr old engineer working across full-stack apps, scalability, rust, contracts, etc, etc.
                </span>

                <span className={`${roboto.className} tracking-wide font-normal`}>
                    currently building fast, reliable apps that scale smoothly and feel great to use. Also, I’ve been diving into Rust and getting a solid grasp of Solana fundamentals to broaden my skills.
                </span>
            </div>
        </div>
    )
}
'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MoreIcon } from "@/src/all-svgs/svgs";
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})

export default function BaseProjects() {
    return (
        <div className="w-full flex flex-col mt-15 overflow-hidden">
            <span className="text-[19px] tracking-wider font-light text-[#858585]">
                Cool Stuff
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <ProjectCard
                    title="ByteWords"
                    image="/projectImages/bytewords.png"
                    url="https://bytewords-pi.vercel.app/"
                    description="Bytewords is a blogging CRUD app with a minimal dark-themed ui."
                    descriptionBg="#86600B"
                />
                <ProjectCard
                    title="Solax"
                    image="/projectImages/solax.png"
                    url="https://solax-kappa.vercel.app/"
                    description="A Solana-based token launchpad for developers."
                    descriptionBg="#927BC9"
                />
                <ProjectCard
                    title="Grid64"
                    image="/projectImages/grid64.png"
                    url="https://github.com/piyush-rj/grid64"
                    description="Grid64 is a chess app, which is scalable and fast. Thanks to redis!"
                    descriptionBg="#26807A"
                />
                <ProjectCard
                    title="Paygen"
                    image="/projectImages/paygen.png"
                    url="https://github.com/piyush-rj/paytm-adv"
                    description="A PayTM clone run by a webhook server"
                    descriptionBg="#3178C6"
                />
            </div>
        </div>
    );
}

interface ProjectCardProps {
    image: string;
    title: string;
    description?: string;
    url?: string;
    descriptionBg?: string;
}

export function ProjectCard({ title, description, descriptionBg, image, url }: ProjectCardProps) {
    const [activePanel, setActivePanel] = useState<boolean>(false);

    return (
        <div className="relative w-full">
            <Link
                href={url || "#"}
                target="_blank"
                className="h-[220px] w-full relative overflow-hidden shadow-xl rounded-xl hover:-translate-y-[2px] transition-all transform duration-300 group block"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                />

                <div className="absolute bottom-3.5 left-3.5 bg-neutral-300/90 text-neutral-800 px-3 py-0.5 rounded-[10px] flex items-center gap-0.5 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {title}
                </div>
            </Link>

            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setActivePanel((prev) => !prev);
                }}
                className="absolute top-2 right-2 text-neutral-200 bg-neutral-950/80 hover:scale-105 hover:bg-neutral-950 flex items-center cursor-pointer rounded-md p-1 transition-all transform duration-200"
            >
                <MoreIcon width="20" height="20" />
            </div>

            {activePanel && (
                <div
                    style={{ backgroundColor: descriptionBg }}
                    className="absolute top-10 right-9 w-[200px] text-neutral-950 rounded-[14px] rounded-tr-none shadow-sm shadow-neutral-950 p-4 z-20 animate-in slide-in-from-top-2 duration-300"
                >
                    <p className={`text-md tracking-wide leading-relaxed ${roboto.className}`}>{description}</p>
                </div>
            )}

        </div>
    );
}

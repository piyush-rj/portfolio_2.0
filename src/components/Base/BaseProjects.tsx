'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
                />
                <ProjectCard
                    title="Solax"
                    image="/projectImages/solax.png"
                    url="https://solax-kappa.vercel.app/"
                />
                <ProjectCard
                    title="Grid64"
                    image="/projectImages/grid64.png"
                    url="https://github.com/piyush-rj/grid64"
                />
                <ProjectCard
                    title="Paygen"
                    image="/projectImages/paygen.png"
                    url="https://github.com/piyush-rj/paytm-adv"
                />
            </div>
        </div>
    );
}

interface ProjectCardProps {
    image: string;
    title: string;
    url?: string;
}

export function ProjectCard({ title, image, url }: ProjectCardProps) {
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

        </div>
    );
}

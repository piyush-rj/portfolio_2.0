import Image from "next/image"
import React from "react";
import { BiLogoKubernetes } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiHono, SiMongodb } from "react-icons/si";

export default function BaseTechStack() {
    return (
        <div className="w-full flex flex-col overflow-hidden">
            <span className=" md:text-[22px] font-sans tracking-wider text-neutral-300 glow-text">
                Tech Stack
            </span>

            <div className="flex flex-wrap gap-3.5 mt-4 max-w-full">
                <TechStackCard type='image' imgUrl="/stack/next.svg" name="nextJS" />
                <TechStackCard type="image" imgUrl="/stack/prisma.png" name="reactJS" />
                <TechStackCard type='image' imgUrl="/stack/ts.svg" name="typescript" />
                <TechStackCard type='image' imgUrl="/stack/express.svg" name="express" />
                <TechStackCard type='icon'  icon={<SiHono className="text-orange-500 size-4 md:size-6.5"/>} name="hono" />
                <TechStackCard type='image' imgUrl="/stack/postgres.svg" name="postgres" />
                <TechStackCard type='icon' icon={<SiMongodb className="text-green-600 size-4.5 md:size-7"/>}  name="mongoDB" />
                <TechStackCard type='image' imgUrl="/stack/prisma.png" name="prismaORM" />
                <TechStackCard type='image' imgUrl="/stack/websocket.svg" name="websocket" />
                <TechStackCard type='icon' icon={<DiRedis className="text-red-600 size-5 md:size-7"/>} name="redis" />
                <TechStackCard type='image' imgUrl="/stack/docker.svg" name="docker" />
                <TechStackCard type='icon' icon={<BiLogoKubernetes className="text-blue-500 size-5 md:size-7"/>} name="kubernetes" />
                <TechStackCard type='image' imgUrl="/stack/postman.svg" name="postman" />
                <TechStackCard type='image' imgUrl="/stack/turborepo.svg" name="turborepo" />
                <TechStackCard type='image' imgUrl="/stack/git.svg" name="git" />
                <TechStackCard type='image' imgUrl="/stack/github.svg" name="github" />
            </div>
        </div>
    )
}

type TechStackCardProps = {
    name: string;
    imgUrl?: string;
    icon?: React.ReactElement;
    type: 'icon' | 'image';
    className?: string;
}

export function TechStackCard({ name, imgUrl, type, icon, className }: TechStackCardProps) {
    return (
        <div className="flex items-center gap-x-3 shadow-xl hover:-translate-y-[2px] transition-transform duration-200 bg-white/5 rounded-md p-2 px-2.5 justify-between">
            <div className="relative w-5 h-5 md:w-7 md:h-7">
            {(type === 'image' && imgUrl) ? (
                <Image
                    src={imgUrl}
                    alt={name}
                    fill
                    className="object-cover rounded-lg md:rounded-xs"
                    unoptimized
                />
            ): (
                <span className={`${className} h-5 w-5 pt-px`}>
                    {icon}
                </span>
            )}    
            </div>
            <div className="text-sm md:text-sm tracking-wider text-primary-light font-medium">{name}</div>
        </div>
    )
}

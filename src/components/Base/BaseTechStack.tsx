import Image from "next/image"

export default function BaseTechStack() {
    return (
        <div className="w-full flex flex-col mt-15 overflow-hidden">
            <span className={`text-[19px] tracking-wider font-light text-primary-light`}>
                What I work with
            </span>

            <div className="flex flex-wrap gap-3.5 mt-4 max-w-full">
                <TechStackCard icon="/stack/next.svg" name="NextJS" />
                <TechStackCard icon="/stack/ts.svg" name="typescript" />
                <TechStackCard icon="/stack/express.svg" name="express" />
                <TechStackCard icon="/stack/postgres.svg" name="postgres" />
                <TechStackCard icon="/stack/websocket.svg" name="websocket" />
                <TechStackCard icon="/stack/turborepo.svg" name="turborepo" />
                <TechStackCard icon="/stack/docker.svg" name="docker" />
                <TechStackCard icon="/stack/prisma.png" name="prisma" />
                <TechStackCard icon="/stack/git.svg" name="git" />
                <TechStackCard icon="/stack/github.svg" name="github" />
                <TechStackCard icon="/stack/rust.svg" name="rust" />
                <TechStackCard icon="/stack/postman.svg" name="postman" />
            </div>
        </div>
    )
}

type TechStackCardProps = {
    name: string;
    icon: string;
}

export function TechStackCard({ name, icon }: TechStackCardProps) {
    return (
        <div className="flex items-center gap-x-4 shadow-xl hover:-translate-y-[1px] transition-transform duration-200 bg-white/5 rounded-md p-2 justify-between">
            <div className="relative w-5 h-5 md:w-5 md:h-5">
                <Image
                    src={icon}
                    alt={name}
                    fill
                    className="object-cover rounded-xs md:rounded-xs"
                    unoptimized
                />
            </div>
            <div className="text-sm md:text-sm tracking-wider text-primary-light font-medium">{name}</div>
        </div>
    )
}

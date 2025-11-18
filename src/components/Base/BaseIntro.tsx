import { cn } from "@/lib/utils";

export default function BaseIntro() {

    return (
        <div className={cn('w-full font-sans dark:bg-clip-text dark:text-transparent flex flex-col py-4 pt-12',
            'dark:bg-gradient-to-br dark:from-neutral-200 dark:via-neutral-300/80 dark:to-transparent',
            'md:text-7xl text-2xl font-semibold gap-y-2 text-neutral-600'
        )}>
            <div className="glow-text">
                I design interfaces
            </div>
            <div className="glow-text">
                and build interactions.
            </div>
            <div className="text-sm md:text-xl mt-1 md:mt-5 text-neutral-700 dark:text-neutral-400 font-normal gap-x-2">
                currently building{" "}
                <a
                    href="https://x.com/winterfell_dev"
                    target="_blank"
                    className="italic dark:text-primary-blue text-primary-blue transition-colors transform duration-300">
                    @winterfell
                </a>
            </div>
        </div>
    )
}
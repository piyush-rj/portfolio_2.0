"use client";

import { cn } from '@/src/lib/utils';
import { FaArrowRightLong } from 'react-icons/fa6';
import SafariBrowser from './SafariBrowser';
import { useRouter } from 'next/navigation';

interface WorkSpaceCardProps {
    title: string;
    description: string;
    redirectLink: string;
    imageUrl: string;
    className?: string;
}

export default function WorkspaceCard({
    title,
    description,
    redirectLink,
    imageUrl,
    className,
}: WorkSpaceCardProps) {

    const router = useRouter();

    const handleRedirect = () => {
        router.push(redirectLink);
    };

    return (
        <div
            style={{
                maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.84) 50%, rgba(0,0,0,0) 100%)',
            }}
            className={cn(
                'md:h-[80vh] h-[40vh] w-full rounded-3xl overflow-hidden p-1.5 md:p-3 min-h-[96%]',
                'border relative shadow-2xl',
                className,
            )}
        >
            <div className="absolute top-0 left-2 h-px bg-linear-to-r from-transparent via-light/50 to-transparent w-full" />

            <div
                onClick={handleRedirect}
                className={cn(
                    'h-full w-full rounded-xl border border-neutral-800 group-hover:border-neutral-700 overflow-hidden',
                    'p-5 md:p-8 flex flex-col gap-y-10 relative items-center',
                    'bg-linear-to-br from-neutral-900 via-neutral-800/40 to-neutral-900',
                    'group tracking-wide',
                    'cursor-pointer'
                )}
            >
                <div className="absolute top-0 left-2 h-px bg-linear-to-r from-transparent via-light/20 group-hover:via-light/70 to-transparent w-full transition-colors duration-300" />
                
                <div
                    className={cn(
                        'absolute inset-0 opacity-0 group-hover:opacity-100',
                        'transition-all duration-500 pointer-events-none',
                    )}
                    style={{
                        background:
                            'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255,255,255,0.2), transparent 70%)',
                    }}
                />

                <div className="flex justify-between items-start w-full text-light/90 relative hover:z-30">
                    <div className="flex flex-col items-start md:gap-y-1">
                        <div className="md:text-2xl font-sans font-semibold group-hover:text-white transition-colors duration-300">
                            {title}
                        </div>

                        <div className="text-sm">
                            <span className="text-light/60 text-xs md:text-base">{description}</span>
                        </div>
                    </div>

                    <div>
                        <FaArrowRightLong
                            className="size-5 md:size-8 group-hover:translate-x-2 group-hover:text-white group-hover:brightness-150 transition-all transform duration-300"
                            strokeWidth="0.1"
                        />
                    </div>
                </div>

                <div
                    className={cn(
                        'absolute w-full max-w-[85%] h-full -bottom-20 md:-bottom-35',
                        'group-hover:-translate-y-4 transition-all transform duration-400 opacity-90',
                    )}
                >
                    <SafariBrowser
                        url={""}
                        className="group-hover:shadow-xl"
                        imageSrc={imageUrl}
                    />
                </div>

            </div>
        </div>
    );
}

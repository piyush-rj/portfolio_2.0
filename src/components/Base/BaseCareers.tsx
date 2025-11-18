export default function BaseCareers() {
    return (
        <div className={`w-full flex flex-col mt-10 md:mt-40 overflow-hidden font-sans`}>
            <span className="md:text-[22px] tracking-wider font-sans text-neutral-300 glow-text ">
                Roles
            </span>

            <div className={`mt-5 mb-10 flex flex-col space-y-2`}>
                <span className=" md:text-[18px] space-x-4 text-neutral-400 md:flex">
                    Fullstack developer{" "}
                    <span className="italic text-primary-blue">@Wallpaper-Heaven</span>
                    <span className="text-[12px] md:text-[13px] text-neutral-400">
                        ( May&apos;25 - June&apos;25 )
                    </span>
                </span>

                <span className="text-neutral-400 tracking-wide text-sm md:text-[17px]">
                    Worked as a freelance full-stack developer for an interior design company, where I built their website from scratch to boost their online presence.
                </span>
            </div>
        </div>
    )
}
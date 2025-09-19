import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})

export default function BaseCareers() {
    return (
        <div className={`w-full flex flex-col mt-15 overflow-hidden`}>
            <span className={`text-[19px] tracking-wider font-light text-[#858585]`}>
                Roles
            </span>

            <div className={`mt-4 flex flex-col space-y-2 ${roboto.className}`}>
                <span className="tracking-wide font-semibold text-[18px] space-x-4">
                    <span>Wallpaper Heaven</span>
                    <span className="font-light text-[12px] md:text-[16px] text-neutral-300"> 
                        ( May&apos;25 - June&apos;25 )
                    </span>
                </span>

                <span className="text-neutral-300/90 tracking-wide text-base md:text-[17px]">
                    Worked as a freelance full-stack developer for an interior design company, where I built their website from scratch to boost their online presence.
                </span>
            </div>
        </div>
    )
}
import { PiCopyrightLight } from "react-icons/pi";

export default function BaseFooter() {

    return (
        <div className="w-screen max-w-6xl border-t md:h-[10vh] mt-10 md:mt-30 font-sans tracking-wide flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-primary-light font-sans !text-[10px] md:!text-[14px] md:py-10 py-4">
                <div className="flex">Design & Developed by <span className="pl-1 font-semibold">Piyush Raj</span></div>
                <span className="flex items-center gap-x-1"><PiCopyrightLight /> 2025. All rights Reserved.</span>
            </div>
        </div>
    );
}

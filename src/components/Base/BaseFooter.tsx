import { Copyright, GitHub, LinkedIn, Mail, Twitter } from "@/src/all-svgs/svgs"
import { Roboto } from "next/font/google"
import { Link2 } from "../animated-icons/Link"

const roboto = Roboto({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})

export default function BaseFooter() {
    return (
        <div
            className={`${roboto.className} w-full flex items-center mt-18 pt-15 border-t border-neutral-700 pb-40 overflow-hidden`}
        >
            <div className="tracking-wider flex items-center gap-1 text-sm text-neutral-300">
                <Copyright width="18" height="18" />
                <span>2025 PiyushC2P</span>
            </div>

            <div className="flex gap-x-3.5 items-center text-neutral-300/80 ml-auto">
                <a
                    href="https://drive.google.com/file/d/1hQKK_Luxhr_pJ9zuv4NOoi9h41guRk9T/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-rotate-45"
                >
                    <Link2 className="size-4 md:size-5" />
                </a>

                <a
                    href="https://twitter.com/PiyushC2P"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Twitter
                        width="23"
                        height="23"
                        className="hover:text-neutral-400/80 transition-colors duration-250"
                    />
                </a>

                <a
                    href="https://linkedin.com/in/piyush-raj-07a318260"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn
                        width="23"
                        height="23"
                        className="hover:text-neutral-400/80 transition-colors duration-250"
                    />
                </a>

                <a
                    href="https://github.com/piyush-rj"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub
                        width="23"
                        height="23"
                        className="hover:text-neutral-400/80 transition-colors duration-250"
                    />
                </a>

                <a href="mailto:piyushraj26102004@email.com">
                    <Mail
                        width="23"
                        height="23"
                        className="hover:text-neutral-400/80 transition-colors duration-250"
                    />
                </a>
            </div>
        </div>

    )
}
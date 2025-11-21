import { RefObject } from "react";
import BaseCareers from "./Base/BaseCareers";
import BaseIntro from "./Base/BaseIntro";
import BaseProjects from "./Base/BaseProjects";
import BaseTechStack from "./Base/BaseTechStack";

interface HomeMainProps {
    introRef: RefObject<HTMLDivElement | null>;
    projectsRef: RefObject<HTMLDivElement | null>;
    careersRef: RefObject<HTMLDivElement | null>;
    techStackRef: RefObject<HTMLDivElement | null>;
}

export default function HomeMain({ introRef, projectsRef, careersRef, techStackRef }: HomeMainProps) {
    return (
        <div className="w-full px-6 md:px-0 md:max-w-6xl custom-scrollbar pt-20 md:pt-40 flex flex-col md:gap-y-15 gap-y-8">
            <div ref={introRef} className="scroll-mt-24"> <BaseIntro /> </div>
            <div ref={projectsRef} className="scroll-mt-24"> <BaseProjects /> </div>
            <div ref={careersRef} className="scroll-mt-24"> <BaseCareers /> </div>
            <div ref={techStackRef} className="scroll-mt-24"> <BaseTechStack /> </div>
        </div>
    )
}
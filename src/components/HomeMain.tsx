import BaseCareers from "./Base/BaseCareers";
import BaseFooter from "./Base/BaseFooter";
import BaseIntro from "./Base/BaseIntro";
import BaseProjects from "./Base/BaseProjects";
import BaseTechStack from "./Base/BaseTechStack";

export default function HomeMain() {
    return (
        <div className="w-full max-w-[820px] p-4 px-6 custom-scrollbar">
            <BaseIntro/>
            <BaseTechStack/>
            <BaseProjects/>
            <BaseCareers/>
            <BaseFooter/>
        </div>
    )
}
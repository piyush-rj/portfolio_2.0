import BaseCareers from "./Base/BaseCareers";
import BaseFooter from "./Base/BaseFooter";
import BaseIntro from "./Base/BaseIntro";
import BaseProjects from "./Base/BaseProjects";
import BaseTechStack from "./Base/BaseTechStack";

export default function HomeMain() {
    return (
        <div className="w-full px-6 md:px-0 md:max-w-6xl custom-scrollbar pt-20 md:pt-40 flex flex-col gap-y-15">
            <BaseIntro/>
            {/* <BaseTechStack/> */}
            <BaseProjects/>
            <BaseCareers/>
        </div>
    )
}
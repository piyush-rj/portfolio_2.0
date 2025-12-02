import BaseCareers from "./Base/BaseCareers";
import BaseGithubCard from "./Base/BaseGithubCard";
import BaseIntro from "./Base/BaseIntro";
import BaseProjects from "./Base/BaseProjects";
import BaseTechStack from "./Base/BaseTechStack";


export default function HomeMain() {
    return (
        <div className="w-full px-6 md:px-0 md:max-w-6xl custom-scrollbar pt-20 md:pt-40 flex flex-col md:gap-y-15 gap-y-8">
            <BaseIntro />
            <BaseProjects />
            <BaseCareers />
            <BaseTechStack />
            <BaseGithubCard/>
        </div>
    )
}
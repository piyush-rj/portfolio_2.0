import WorkspaceCard from "@/src/utility/WorkspaceCard";

export default function BaseProjects() {
    return (
        <div className="w-full flex flex-col overflow-hidden">
            <span className=" md:text-[22px] font-sans tracking-wider text-neutral-300 glow-text">
                Cool Stuff
            </span>

            <div className="flex flex-col space-y-2 md:space-y-40 mt-4">
                <WorkspaceCard
                    title="Winterfell"
                    description="AI powered smart contract generator"
                    imageUrl="/projectImages/winterfell.jpg"
                    redirectLink="https://github.com/bottle-nex/winterfell"
                />
                <WorkspaceCard
                    title="Nocturn"
                    description="A quiz application with crypto staking"
                    imageUrl="/projectImages/nocturn.jpg"
                    redirectLink="https://github.com/celestium-x/nocturn"
                />
                <WorkspaceCard
                    title="Grid64"
                    description="A real-time chess applcation"
                    imageUrl="/projectImages/grid64.png"
                    redirectLink="https://github.com/piyush-rj/grid64"
                />
            </div>
        </div>
    );
}
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import TStack from "./TStack/TStack";
import WorkExp from "./WorkExp/WorkExp";

export default function Main() {
    return (
        <div className="w-full h-full">
            {/* Fixed Navbar */}
            <div className="fixed top-0 left-0 w-full z-[1000] ">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Navbar />
                </div>
            </div>

            {/* Hero Section (narrow layout) */}
            <div className="pt-20 max-w-5xl mt-[180px] mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
            </div>

            <div className="mt-32 space-y-35 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
                <Projects />
                <WorkExp />
                <TStack />
            </div>

            <div className="w-full mt-[200px]">
                <Footer />
            </div>
        </div>
    );
}

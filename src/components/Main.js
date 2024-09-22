import AboutMe from "./AboutMe";
import ProfileCard from "./ProfileCard";
import CurrentProject from "./CurrentProject";
import Footer from "./Footer";

const Main = () => (
    <div className="flex flex-col justify-between hero bg-neutral-content min-h-screen w-full overflow-x-hidden md:pt-12">
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:gap-16 gap-0 pt-8">
                <div className="mx-2 py-4 md:pt-16 sm:pt-2 md:pb-0">
                    <ProfileCard />
                </div>
                <div className="flex flex-col col-start-1 md:row-start-1 md:col-start-2 mx-2">
                    <AboutMe />
                    <div className="p-2 md:p-8"></div>
                    <CurrentProject />
                </div>
            </div>
        </div>
        <Footer />
    </div>
);


export default Main;
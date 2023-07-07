import ThemeChanger from "./ThemeChanger";

const AboutMe = () => {
    return (
        <article className="prose">
            <div className="text-primary">
                <div className="flex flex-row justify-between">
                    <h1 className="text-xl text-primary-focus">About Me</h1>
                    <ThemeChanger />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ring-4 ring-primary ring-offset-4 rounded-md p-4 bg-primary-content">
                    <div>
                        <p className="text-left">Hey there! My name is Gordon and I am a software developer based in Denver.
                            Currently pursuing an M.B.A. and venturing into entreprenurial pursuits.</p>
                        <p className="text-left">I&#39;m a curious 25 year old who wishes to explore and learn more about the world.</p>
                    </div>
                    <div className="self-center ring-2 ring-accent ring-offset-2 rounded-sm ">
                        <ol className="list-none text-center -indent-8 text-secondary">
                            <li>Striving for success,</li>
                            <li>driven by adversity,</li>
                            <li>and relentlessly shaping</li>
                            <li>a brighter future.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </article>

    )
}

export default AboutMe;

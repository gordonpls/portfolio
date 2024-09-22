const CurrentProject = () => {
    return (
        <article className="prose">
            <div className="text-primary">
                <div className="flex flex-row justify-between p-2">
                    <h1 className="text-xl text-primary-focus">Current Project</h1>
                </div>
                <div className="grid grid-cols-2 gap-4 ring-4 ring-primary ring-offset-4 rounded-md p-4 bg-primary-content">
                    <div className="flex flex-col items-center font-mono ring-2 ring-accent ring-offset-2 rounded-sm">
                        <p className="text-2xl text-primary">*******</p>
                        {/* <a className="decoration-0 text-white" href="https://cutique.co" target="_blank" rel="noreferrer"> */}
                        <button disabled className="btn btn-primary uppercase w-36 disabled:bg-error disabled:text-white disabled:opacity-50 uppercase mb-2">
                        soon!&trade;
                        </button>
                        {/* </a> */}
                    </div>
                    <div className="self-center pt-0 md:pt-2 text-center">
                        <progress className="progress progress-primary w-40" value="25" max="100"></progress>
                        <progress className="progress progress-primary w-40" value="50" max="100"></progress>
                        <progress className="progress progress-primary w-40"></progress>
                        <progress className="progress progress-primary w-40" value="75" max="100"></progress>
                        <progress className="progress progress-primary w-40" value="100" max="100"></progress>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default CurrentProject;

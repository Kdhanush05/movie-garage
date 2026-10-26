
const Main = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <nav className="flex items-center justify-between border-b border-zinc-800 px-6 py-5 md:px-12">
                <h1 className="text-3xl font-extrabold tracking-wide text-red-600">
                    The Movie Garage
                </h1>

                <span className="rounded bg-red-600 px-4 py-2 font-semibold">
                    Home
                </span>
            </nav>

            <main className="flex min-h-[75vh] flex-col justify-center px-6 md:px-16">
                <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-red-500">
                    Welcome
                </p>

                <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-7xl">
                    Unlimited movies, TV shows and more.
                </h2>

                <p className="mt-6 max-w-xl text-lg text-gray-400">
                    Welcome to your Netflix home page. Get ready to explore
                    your next favourite story.
                </p>

                
            </main>
        </div>
    );
};

export default Main;

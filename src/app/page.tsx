export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="flex flex-col gap-3 text-center">
                <a
                    className="border border-zinc-800 hover:bg-zinc-800 text-white font-semibold py-6 px-8 rounded-full flex gap-2"
                    href="/add-flashcard"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add flashcard
                </a>
                <a
                    className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-6 px-8 rounded-full"
                    href="/learn"
                >
                    Start learning
                </a>
            </div>
        </main>
    )
}

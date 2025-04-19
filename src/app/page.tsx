export default async function Home() {
    return (
        <main>
            <div className="main-nav">
                <a
                    className="main-nav__item link"
                    href="/add-flashcard"
                >
                    Add flashcard
                </a>
                <a
                    className="main-nav__item link"
                    href="/learn"
                >
                    Start learning
                </a>
                <a
                    className="main-nav__item link"
                    href="/sign-in"
                >
                    Sign in
                </a>
            </div>
        </main>
    )
}

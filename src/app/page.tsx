import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <div>
                <h1>
                    <span>Flashcard</span>
                </h1>
                <p>Master any subject with spaced repetition flashcards</p>
                <div>
                    <Link className="btn-primary no-underline" href="/register">
                        Get Started Free
                    </Link>
                    <Link className="btn-secondary" href="/login">
                        Sign In
                    </Link>
                </div>
            </div>

            <div>
                <div>
                    <div>📚</div>
                    <h3>Organize Your Decks</h3>
                    <p>Create unlimited decks to organize your learning materials</p>
                </div>
                <div>
                    <div>🧠</div>
                    <h3>Spaced Repetition</h3>
                    <p>Study smarter with our intelligent spaced repetition algorithm</p>
                </div>
                <div>
                    <div>📊</div>
                    <h3>Track Progress</h3>
                    <p>Monitor your learning journey with detailed statistics</p>
                </div>
            </div>
        </main>
    )
}

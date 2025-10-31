import Link from 'next/link'

const HomePage = () => {
  return (
    <main className="home-main">
      <div className="home-hero">
        <h1 className="home-title">
          <span>Flashcard App</span>
        </h1>
        <p className="home-subtitle">
          Master any subject with spaced repetition flashcards
        </p>
        <div className="home-cta">
          <Link href="/register" className="home-primary-button">
            Register
          </Link>
          <Link href="/login" className="home-secondary-button">
            Login
          </Link>
        </div>
      </div>

      <div className="home-features">
        <div className="home-feature">
          <div className="home-feature-icon">📚</div>
          <h3>Organize Your Decks</h3>
          <p>Create unlimited decks to organize your learning materials</p>
        </div>
        <div className="home-feature">
          <div className="home-feature-icon">🧠</div>
          <h3>Spaced Repetition</h3>
          <p>Study smarter with our intelligent spaced repetition algorithm</p>
        </div>
        <div className="home-feature">
          <div className="home-feature-icon">📊</div>
          <h3>Track Progress</h3>
          <p>Monitor your learning journey with detailed statistics</p>
        </div>
      </div>
    </main>
  )
}

export default HomePage
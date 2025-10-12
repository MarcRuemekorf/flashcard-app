import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.hero}>
                <h1 className={styles.title}>
                    🎴 <span>Flashcard</span>
                </h1>
                <p className={styles.subtitle}>Master any subject with spaced repetition flashcards</p>
                <div className={styles.cta}>
                    <Link href="/register" className={styles.primaryButton}>
                        Get Started Free
                    </Link>
                    <Link href="/login" className={styles.secondaryButton}>
                        Sign In
                    </Link>
                </div>
            </div>

            <div className={styles.features}>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>📚</div>
                    <h3>Organize Your Decks</h3>
                    <p>Create unlimited decks to organize your learning materials</p>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>🧠</div>
                    <h3>Spaced Repetition</h3>
                    <p>Study smarter with our intelligent spaced repetition algorithm</p>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>📊</div>
                    <h3>Track Progress</h3>
                    <p>Monitor your learning journey with detailed statistics</p>
                </div>
            </div>
        </main>
    )
}

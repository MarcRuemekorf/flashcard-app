import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Flashcard App',
    description: 'Learn smarter with spaced repetition flashcards'
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <main className="min-h-screen flex justify-center items-center">{children}</main>
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import '@/styles/main.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Flashcard App',
    description: 'Learn smarter with spaced repetition flashcards'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

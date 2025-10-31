import type { Metadata } from 'next'
import Providers from '@/components/shared/providers'

export const metadata: Metadata = {
  title: 'Flashcard App',
  description: 'Learn smarter with spaced repetition flashcards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
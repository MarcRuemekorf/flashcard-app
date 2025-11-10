import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <article className="flex gap-2">
        <div className="h-full flex content-center justify-center">
          <img src="/flashcards-illustration.png" alt="Flashcards Illustration" width={300} height={300} />
        </div>
        <div className="flex flex-col gap-2">
          <h1>
            Master any subject with spaced repetition flashcards
          </h1>
          <div className="flex gap-2">
            <Link href="/register" className={buttonVariants({ size: "lg" })} >
              Register
            </Link>
            <Link href="/login" className={buttonVariants({ size: "lg", variant: "outline" })} >
              Login
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}

export default HomePage
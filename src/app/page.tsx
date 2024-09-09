import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <a className='border border-zinc-800 hover:bg-zinc-800 text-white font-semibold py-6 px-8 rounded-full' href="/learn">Start learning</a>
        </main>
    )
}

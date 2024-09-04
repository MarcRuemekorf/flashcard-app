import React from 'react'
import dynamic from 'next/dynamic'
import Button from '@/components/input-elements/Button'
import useGetFlashcardLibrary from '@/lib/hooks/useGetFlashcardLibrary'
const Flashcard = dynamic(() => import('@/components/flashcards/flashcard/Flashcard'), { ssr: false })

const Flashcards: React.FC = () => {
    const { data } = useGetFlashcardLibrary()
    const [currentIndex, setCurrentIndex] = React.useState(0)

    if(!data) return <p>No data...</p>

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="text-center">
                {currentIndex + 1}/{data.length}
            </div>
            <Flashcard question={data[currentIndex].question} answer={data[currentIndex].answer} />
            <Button onClick={() => setCurrentIndex((currentIndex + 1) % data.length)}>Next</Button>
        </div>
    )
}

export default Flashcards

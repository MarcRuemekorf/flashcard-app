import React from 'react'
import Button from '@/components/input-elements/Button'
import useGetFlashcardLibrary from '@/lib/hooks/useGetFlashcardLibrary'
import FlashcardSkeleton from '@/components/skeletons/FlashcardSkeleton'
import Flashcard from '@/components/flashcards/flashcard/Flashcard'

const Flashcards: React.FC = () => {
    const { data, isPending } = useGetFlashcardLibrary()
    const [currentIndex, setCurrentIndex] = React.useState(0)

    if (isPending) return <FlashcardSkeleton />

    if (!data) return <p>No data...</p>

    const removeItemAtIndex = (index: number) => {
        const newData = [...data]
        newData.splice(index, 1)
    }

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="text-center">
                {currentIndex + 1}/{data.length}
            </div>
            <Flashcard question={data[currentIndex].question} answer={data[currentIndex].answer} />
            <div className="flex justify-center align-center">
                <div className="flex align-center gap-2">
                    <Button
                        variant="secondary"
                        onClick={() => setCurrentIndex((currentIndex + 1) % data.length)}
                        className="mx-auto"
                    >
                        <span role="img" aria-label="see_no_evil" className='text-xl'>🙈</span>
                    </Button>
                    <Button
                        variant="success"
                        onClick={() => setCurrentIndex((currentIndex + 1) % data.length)}
                        className="mx-auto"
                    >
                        <span role="img" aria-label="thumbsup" className='text-xl'>👍</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Flashcards

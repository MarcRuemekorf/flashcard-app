import React, { useEffect } from 'react'
import Button from '@/components/input-elements/Button'
import useGetFlashcardLibrary from '@/lib/hooks/useGetFlashcardLibrary'
import FlashcardSkeleton from '@/components/skeletons/FlashcardSkeleton'
import Flashcard from '@/components/flashcards/flashcard/Flashcard'

const Flashcards: React.FC = () => {
    const { data, isPending } = useGetFlashcardLibrary()
    const [cards, setCards] = React.useState<Flashcard[]>([])
    const [currentIndex, setCurrentIndex] = React.useState(0)

    useEffect(() => {
        if (data) {
            setCards(data)
        }
    }, [data])

    if (isPending) return <FlashcardSkeleton />

    if (!data || data.length === 0) return <p>No data...</p>

    const removeCardAtIndex = (index: number) => {
        if (cards.length === 1) {
            return
        }

        const cardStack = [...cards]
        cardStack.splice(index, 1)
        setCards(cardStack)
        if (currentIndex >= cardStack.length) {
            setCurrentIndex(0)
        }
    }

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="text-center">
                {currentIndex + 1}/{cards.length}
            </div>
            {cards.length > 0 && (
                <Flashcard question={cards[currentIndex].question} answer={cards[currentIndex].answer} />
            )}
            <div className="flex justify-center align-center">
                <div className="flex align-center gap-2">
                    <Button
                        variant="outline"
                        onClick={() => setCurrentIndex((currentIndex + 1) % cards.length)}
                        className="mx-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                            />
                        </svg>
                    </Button>
                    <Button variant="success" onClick={() => removeCardAtIndex(currentIndex)} className="mx-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Flashcards

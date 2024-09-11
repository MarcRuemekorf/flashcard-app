import React, { useEffect } from 'react'
import useGetFlashcardDeck from '@/lib/hooks/useGetFlashcardDeck'
import FlashcardSkeleton from '@/components/skeletons/flashcard-stack-skeleton/flashcard-skeleton/FlashcardSkeleton'
import Flashcard from '@/components/flashcard-stack/flashcard/Flashcard'
import StatsCard from '@/components/session-stats/stats-card/StatsCard'
import StackControls from './flashcard-stack-controls/FlashcardStackControls'
import StackStats from './flashcard-stack-stats/FlashcardStackStats'

const FlashcardStack = (): JSX.Element => {
    const { data, isPending } = useGetFlashcardDeck()
    const [currentCardStack, setCurrentCardStack] = React.useState<Flashcard[]>([])
    const [masteredCardStack, setMasteredCardStack] = React.useState<Flashcard[]>([])
    const [skippedCardStack, setSkippedCardStack] = React.useState<Flashcard[]>([])
    const [currentIndex, setCurrentIndex] = React.useState(0)

    useEffect(() => {
        if (data) {
            setCurrentCardStack(data)
        }
    }, [data])

    if (isPending) return <FlashcardSkeleton />

    if (!data || data.length === 0) return <p>No data...</p>

    const moveCardToStack = (index: number, stackType: 'mastered' | 'skipped') => {
        if (currentCardStack.length === 0) {
            return
        }

        const cardStack = [...currentCardStack]
        cardStack.splice(index, 1)

        setCurrentCardStack(cardStack)

        if (stackType === 'mastered') {
            setMasteredCardStack([...masteredCardStack, currentCardStack[index]])
        }

        if (stackType === 'skipped') {
            setSkippedCardStack([...skippedCardStack, currentCardStack[index]])
        }

        if (currentIndex >= cardStack.length) {
            setCurrentIndex(0)
        }
    }

    return (
        <div className="w-full flex flex-col gap-6">
            {currentCardStack.length > 0 ? (
                <>
                    <StackStats
                        amountInDeck={data.length}
                        amountInStack={currentCardStack.length}
                        skipped={skippedCardStack.length}
                        mastered={masteredCardStack.length}
                    />
                    <Flashcard
                        question={currentCardStack[currentIndex].question}
                        answer={currentCardStack[currentIndex].answer}
                    />
                    <StackControls
                        onSkip={() => moveCardToStack(currentIndex, 'skipped')}
                        onMaster={() => moveCardToStack(currentIndex, 'mastered')}
                    />
                </>
            ) : (
                <StatsCard skipped={skippedCardStack.length} mastered={masteredCardStack.length} />
            )}
        </div>
    )
}

export default FlashcardStack

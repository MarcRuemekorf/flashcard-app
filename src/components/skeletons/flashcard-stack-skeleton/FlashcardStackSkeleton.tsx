import React from 'react'
import FlashcardStackStatsSkeleton from './flashcard-stack-stats-skeleton/FlashcardStackStatsSkeleton'
import FlashcardSkeleton from './flashcard-skeleton/FlashcardSkeleton'
import FlashcardStackControlsSkeleton from './flashcard-stack-controls-skeleton/FlashcardStackControlsSkeleton'

const FlashcardStackSkeleton: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-6">
            <FlashcardStackStatsSkeleton />
            <FlashcardSkeleton />
            <FlashcardStackControlsSkeleton />
        </div>
    )
}

export default FlashcardStackSkeleton

import React from 'react'

const FlashcardSkeleton = (): JSX.Element => {
    return (
        <div className="dark:bg-zinc-800 rounded-lg p-8 min-h-64">
            <div className="h-4 bg-zinc-600 animate-pulse rounded-sm mb-3 w-full"></div>
            <div className="h-4 bg-zinc-600 animate-pulse rounded-sm w-5/6"></div>
        </div>
    )
}

export default FlashcardSkeleton

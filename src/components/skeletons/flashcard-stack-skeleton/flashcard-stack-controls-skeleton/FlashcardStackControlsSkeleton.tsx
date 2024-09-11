import React from 'react'

const FlashcardStackControlsSkeleton: React.FC = () => {
    return (
        <div className="flex justify-center align-center">
            <div className="flex align-center gap-3">
                <div className="h-16 w-16 bg-zinc-600 animate-pulse rounded-full"></div>
                <div className="h-16 w-16 bg-zinc-600 animate-pulse rounded-full"></div>
            </div>
        </div>
    )
}

export default FlashcardStackControlsSkeleton

import React from 'react'

const FlashcardStackStatsSkeleton: React.FC = () => {
    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-3 text-center">
                <div className="h-3 bg-zinc-600 animate-pulse rounded-sm w-20"></div>
                <div className="h-4 w-5 bg-zinc-600 animate-pulse rounded-sm mx-auto"></div>
            </div>
            <div className="flex justify-center gap-6 ml-auto">
                <div className="flex flex-col gap-3 text-center">
                    <div className="h-3 bg-zinc-600 animate-pulse rounded-sm w-16"></div>
                    <div className="h-4 w-5 bg-zinc-600 animate-pulse rounded-sm mx-auto"></div>
                </div>
                <div className="flex flex-col gap-3 text-center">
                    <div className="h-3 bg-zinc-600 animate-pulse rounded-sm w-16"></div>
                    <div className="h-4 w-5 bg-zinc-600 animate-pulse rounded-sm mx-auto"></div>
                </div>
            </div>
        </div>
    )
}

export default FlashcardStackStatsSkeleton

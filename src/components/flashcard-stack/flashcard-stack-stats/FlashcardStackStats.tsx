import React, { useEffect } from 'react'

interface FlashcardStackStatsProps {
    amountInDeck: number
    amountInStack: number
    skipped: number
    mastered: number
}

const FlashcardStackStats = ({
    amountInDeck,
    amountInStack,
    skipped,
    mastered
}: FlashcardStackStatsProps): JSX.Element => {
    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-2 text-center">
                <p className="text-sm text-zinc-600">Current stack</p>
                {amountInStack}
            </div>
            <div className="flex justify-center gap-6 ml-auto">
                <div className="flex flex-col gap-2 text-center">
                    <p className="text-sm text-zinc-600">Skipped</p>
                    {skipped}/{amountInDeck}
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <p className="text-sm text-zinc-600">Mastered</p>
                    {mastered}/{amountInDeck}
                </div>
            </div>
        </div>
    )
}

export default FlashcardStackStats

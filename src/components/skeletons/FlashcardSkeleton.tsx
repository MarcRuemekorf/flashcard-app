import React from 'react'

const FlashcardSkeleton: React.FC = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="h-4 bg-gray-100 animate-pulse rounded-sm mb-3 w-full"></div>
            <div className="h-4 bg-gray-100 animate-pulse rounded-sm w-5/6"></div>
        </div>
    )
}

export default FlashcardSkeleton

'use client'

import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import FlashcardSkeleton from '@/components/skeletons/FlashcardSkeleton'
const Flashcards = dynamic(() => import('@/components/flashcards/Flashcards'), {
    ssr: false,
    loading: () => <FlashcardSkeleton />
})

const LearnPage: NextPage = () => {

    return (
        <div className="w-full p-4">
            <h1>Learn</h1>
            <div className="w-full flex flex-col h-screen content-center justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 m-auto">
                <Flashcards />
            </div>
            </div>
        </div>
    )
}

export default LearnPage

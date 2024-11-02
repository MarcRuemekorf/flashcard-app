'use client'

import React from 'react'
import { NextPage } from 'next'
import useGetFlashcardDeck from '@/lib/hooks/useGetFlashcards'
import FlashcardStack from '@/components/flashcard-stack/FlashcardStack'
import FlashcardStackSkeleton from '@/components/skeletons/flashcard-stack-skeleton/FlashcardStackSkeleton'
import LearnPageTemplate from '@/components/templates/learn-page-template/LearnPageTemplate'

const LearnPage: NextPage = () => {
    const { data, isPending } = useGetFlashcardDeck()

    if (isPending)
        return (
            <LearnPageTemplate>
                <FlashcardStackSkeleton />
            </LearnPageTemplate>
        )

    if (!data || data.length === 0)
        return (
            <LearnPageTemplate>
                <p className="text-center">No data...</p>
            </LearnPageTemplate>
        )

    return (
        <LearnPageTemplate>
            <FlashcardStack />
        </LearnPageTemplate>
    )
}

export default LearnPage

"use client"

import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic'
const Flashcards = dynamic(() => import('@/components/flashcards/Flashcards'), { ssr: false })

const LearnPage: NextPage = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <div>
            <h1>Learn</h1>
            <Flashcards />
        </div>
    );
};

export default LearnPage;
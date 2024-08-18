"use client";

import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic'
import Button from '@/components/input-elements/Button';
const Flashcard = dynamic(() => import('@/components/flashcard/Flashcard'), { ssr: false })

const LearnPage: NextPage = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const flashcards = [
        {
            question: 'What is the capital of France?',
            answer: 'Paris',
        },
        {
            question: 'What is the capital of Germany?',
            answer: 'Berlin',
        },
        {
            question: 'What is the capital of Spain?',
            answer: 'Madrid',
        },
        {
            question: 'What is the capital of Italy?',
            answer: 'Rome',
        },
        {
            question: 'What is the capital of Japan?',
            answer: 'Tokyo',
        }
    ]

    return (
        <div>
            <h1>Learn</h1>
            <div className="w-full p-4">
                <div role="div" className="w-full flex flex-col h-screen content-center justify-center">
                    <div className="w-full sm:w-1/2 lg:w-1/3 m-auto flex flex-col gap-3">
                        <div className="text-center">
                            {currentIndex + 1}/{flashcards.length}
                        </div>
                        <Flashcard question={flashcards[currentIndex].question} answer={flashcards[currentIndex].answer} />
                        <Button onClick={() => setCurrentIndex((currentIndex + 1) % flashcards.length)}>
                            Next
                        </Button>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnPage;
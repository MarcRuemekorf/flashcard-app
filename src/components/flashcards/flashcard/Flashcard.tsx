'use client'

import React from 'react'
import Card from './card/Card'

const Flashcard: React.FC<Flashcard> = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = React.useState(false)

    return (
        <Card className="bg-indigo-500 text-white" onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? <p>{answer}</p> : <p>{question}</p>}
        </Card>
    )
}

export default Flashcard

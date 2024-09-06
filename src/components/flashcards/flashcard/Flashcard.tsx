'use client'

import React from 'react'
import Card from './card/Card'

const Flashcard: React.FC<Flashcard> = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = React.useState(false)

    return (
        <Card className="dark:bg-zinc-800 text-white font-medium text-xl" onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? <p>{answer}</p> : <p>{question}</p>}
        </Card>
    )
}

export default Flashcard

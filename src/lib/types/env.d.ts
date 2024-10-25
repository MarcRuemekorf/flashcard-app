interface Flashcard {
    question: string
    answer: string
    hint?: string
}

interface FlashcardDeck {
    isPending: boolean
    data: Flashcard[]
}

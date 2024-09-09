interface Flashcard {
    question: string
    answer: string
}

interface FlashcardDeck {
    isPending: boolean
    data: Flashcard[]
}

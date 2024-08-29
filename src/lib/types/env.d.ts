interface Flashcard {
    question: string
    answer: string
}

interface FlashcardLibrary {
    isPending: boolean
    data: Flashcard[]
}

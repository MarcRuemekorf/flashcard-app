import { Flashcard } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'

interface Flashcards {
    isPending: boolean
    data: Flashcard[]
}

const useGetFlashcards = (): Flashcards => {
    const { isPending, data } = useQuery({
        queryKey: ['Flashcards'],
        queryFn: async () => {
            const response = await fetch('/api/library')
            return await response.json()
        }
    })

    return { isPending, data }
}

export default useGetFlashcards

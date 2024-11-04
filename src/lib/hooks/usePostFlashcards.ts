import Flashcard from '@/components/flashcard-stack/flashcard/Flashcard'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const usePostFlashcards = () => {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: async (flashcards: FlashcardFormData) => {
            console.log('flashcards', flashcards)
            const response = await fetch('/api/flashcards', {
                method: 'POST',
                body: JSON.stringify(flashcards),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return response.json()
        },
        onSuccess: (data) => {
            console.log(data)
            const flashcards = data.flashcards

            if (flashcards.length > 1) {
                alert('Flashcards created successfully')
            } else {
                alert('Flashcard created successfully')
            }
        },
        onError: (error) => {
            alert(`there was an error ${error}`)
        },
        onSettled: () => {
            // queryClient.invalidateQueries('Flashcards') TODO: Find out how to invalidate queries
        }
    })

    const postFlashcards = (flashcards: FlashcardFormData) => {
        return mutate(flashcards)
    }

    return { postFlashcards, isPending }
}

export default usePostFlashcards

const postFlashcard = async (flashcard: Flashcard) => {}

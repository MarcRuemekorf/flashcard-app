import { useQuery } from '@tanstack/react-query'

const useGetFlashcardDeck = (): FlashcardDeck => {
    const { isPending, data } = useQuery({
        queryKey: ['FlashcardDeck'],
        queryFn: async () => {
            const response = await fetch('/api/library')
            return await response.json()
        }
    })

    return { isPending, data }
}

export default useGetFlashcardDeck

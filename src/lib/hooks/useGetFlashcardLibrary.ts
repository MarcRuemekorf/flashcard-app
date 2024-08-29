import { useQuery } from '@tanstack/react-query'

const useGetFlashcardLibrary = (): FlashcardLibrary => {
    const { isPending, data } = useQuery({
        queryKey: ['flashCardLibrary'],
        queryFn: async () => {
            const response = await fetch('/api/library')
            return await response.json()
        }
    })

    return { isPending, data }
}

export default useGetFlashcardLibrary

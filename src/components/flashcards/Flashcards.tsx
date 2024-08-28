import React from 'react';
import dynamic from 'next/dynamic'
import Button from '@/components/input-elements/Button';
import useGetFlashcardLibrary from '@/lib/hooks/useGetFlashcardLibrary';
const Flashcard = dynamic(() => import('@/components/flashcards/flashcard/Flashcard'), { ssr: false })

const Flashcards: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const {isPending, data} = useGetFlashcardLibrary()

    return (
        <div className="w-full p-4">
            <div role="div" className="w-full flex flex-col h-screen content-center justify-center">
                <div className="w-full sm:w-1/2 lg:w-1/3 m-auto flex flex-col gap-3">
                    {isPending ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                        <div className="text-center">
                        {currentIndex + 1}/{data.length}
                    </div>
                        <Flashcard question={data[currentIndex].question} answer={data[currentIndex].answer} />
                        <Button onClick={() => setCurrentIndex((currentIndex + 1) % data.length)}>
                            Next
                        </Button> 
                        </>
                    )}  
                </div>
            </div>
        </div>
    );
};

export default Flashcards;
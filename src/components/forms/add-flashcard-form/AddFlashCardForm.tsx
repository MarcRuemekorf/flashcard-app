import React from 'react'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form'
import Input from '@/components/input-elements/Input'
import Textarea from '@/components/input-elements/Textarea'
import Card from '@/components/card/Card'
import Button from '@/components/input-elements/Button'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import usePostFlashcards from '@/lib/hooks/usePostFlashcards'

const flashcardSchema = z.object({
    deck: z.string().min(1, 'Deck name is required'),
    question: z.string().min(1, 'Question is required'),
    answer: z.string().min(1, 'Answer is required'),
    hint: z.string().optional()
})

const AddFlashcardForm = (): JSX.Element => {
    const methods = useForm<FlashcardFormData>({
        resolver: zodResolver(flashcardSchema),
        defaultValues: { flashcards: [{ question: '', answer: '', hint: '' }] }
    })

    const { control } = methods

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'flashcards'
    })

    const { postFlashcards, isPending } = usePostFlashcards()

    const onSubmit = (data: FlashcardFormData) => {
        postFlashcards(data)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                    <Card className="flex flex-col gap-3">
                        <h3 className="text-2xl">Select or create a deck</h3>
                        <Input name="deck" label="Deck name:" />
                    </Card>
                    {fields.map((field) => (
                        <Card className="flex flex-col gap-3" key={field.id}>
                            <h3 className="text-2xl">Add a flashcard</h3>
                            <Input name="question" label="Question:" />
                            <Input name="answer" label="Answer:" />
                            <Textarea name="hint" label="Hint:" placeholder="Enter a hint..." />
                        </Card>
                    ))}

                    <Button
                        size="sm"
                        className="ml-auto"
                        type="button"
                        onClick={() => append({ question: '', answer: '', hint: '' })}
                    >
                        Add flashcard
                    </Button>
                    <Button size="sm" className="ml-auto" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default AddFlashcardForm

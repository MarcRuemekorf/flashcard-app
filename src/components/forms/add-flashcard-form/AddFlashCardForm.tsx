import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from '@/components/input-elements/Input'
import Textarea from '@/components/input-elements/Textarea'
import Card from '@/components/card/Card'
import Button from '@/components/input-elements/Button'

const AddFlashcardForm = (): JSX.Element => {
    const methods = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                    <Card className="flex flex-col gap-3">
                        <h3 className="text-2xl">Create a deck</h3>
                        <Input name="deck-name" label="Deck name:" />
                    </Card>
                    <Card className="flex flex-col gap-3">
                        <h3 className="text-2xl">Add a flashcard</h3>
                        <Input name="question" label="Question:" />
                        <Input name="answer" label="Answer:" />
                        <Textarea name="hint" label="Hint:" placeholder="Enter a hint..." />

                        <Button size="sm" className="ml-auto" type="submit">
                            Submit
                        </Button>
                    </Card>
                </div>
            </form>
        </FormProvider>
    )
}

export default AddFlashcardForm

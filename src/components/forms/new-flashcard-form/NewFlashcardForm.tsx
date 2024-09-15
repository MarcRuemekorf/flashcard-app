import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from '@/components/input-elements/Input'
import Textarea from '@/components/input-elements/Textarea'
import Card from '@/components/card/Card'

const NewDeck = (): JSX.Element => {
    const methods = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Card className="flex flex-col h-full"></Card>
                <Card className="flex flex-col h-full">
                    <Input name="question" label="Question:" />
                    <Input name="answer" label="Answer:" />
                    <Textarea name="hint" label="Hint:" placeholder="Enter a hint..." />

                    <button type="submit">Submit</button>
                </Card>
            </form>
        </FormProvider>
    )
}

export default NewDeck

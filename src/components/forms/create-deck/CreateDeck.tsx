import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from '@/components/input-elements/Input'
import Textarea from '@/components/input-elements/Textarea'

const CreateDeck = (): JSX.Element => {
    const methods = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input name="question" label="Question:" />
                <Input name="answer" label="Answer:" />
                <Textarea name="hint" label="Hint:" placeholder="Enter a hint..." />

                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    )
}

export default CreateDeck

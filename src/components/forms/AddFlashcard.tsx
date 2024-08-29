import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from '../input-elements/Input'
import Textarea from '../input-elements/Textarea'

type FormData = {
    title: string
    description: string
    content: string
}

const AddFlashcard: React.FC = () => {
    const methods = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input name="question" label="Question:" />
                <Input name="answer" label="Answer:" />
                <Textarea name="example" label="Example usage:" placeholder="Enter an example..." />

                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    )
}

export default AddFlashcard

import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from '@/components/input-elements/Input'
import Button from '@/components/input-elements/Button'
import Card from '@/components/card/Card'

const NewDeck = (): JSX.Element => {
    const methods = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Card className="flex flex-col h-full min-h-64 dark:bg-zinc-900 border border-zinc-800 text-white font-medium text-xl">
                    <Input name="deck-name" label="Deck name:" />
                    <Button type="submit">Add deck</Button>
                </Card>
            </form>
        </FormProvider>
    )
}

export default NewDeck

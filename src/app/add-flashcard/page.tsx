'use client'

import AddFlashcardForm from '@/components/forms/add-flashcard-form/AddFlashCardForm'
import FormPageTemplate from '@/components/templates/form-page-template/FormPageTemplate'
import { NextPage } from 'next'

const AddFlashcardPage: NextPage = () => {
    return (
        <FormPageTemplate>
            <AddFlashcardForm />
        </FormPageTemplate>
    )
}

export default AddFlashcardPage

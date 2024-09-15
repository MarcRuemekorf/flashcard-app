import NewFlashcardForm from '@/components/forms/new-flashcard-form/NewFlashcardForm'
import FormPageTemplate from '@/components/templates/form-page-template/FormPageTemplate'
import { NextPage } from 'next'

const NewFlashcardPage: NextPage = () => {
    return (
        <FormPageTemplate>
            <NewFlashcardForm />
        </FormPageTemplate>
    )
}

export default NewFlashcardPage

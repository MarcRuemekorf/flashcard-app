import React from 'react'
import { useFormContext } from 'react-hook-form'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    label?: string
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...props }) => {
    const { register } = useFormContext()

    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea {...props} id={name} {...register(name)} />
        </div>
    )
}

export default Textarea

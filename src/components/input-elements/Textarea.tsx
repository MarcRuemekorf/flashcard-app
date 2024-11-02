import React from 'react'
import { useFormContext } from 'react-hook-form'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    label?: string
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...props }) => {
    const { register } = useFormContext()

    return (
        <div className="flex flex-col gap-1">
            {label && <label htmlFor={name}>{label}</label>}
            <textarea {...props} id={name} {...register(name)} className="bg-zinc-700 rounded py-1 px-2" />
        </div>
    )
}

export default Textarea

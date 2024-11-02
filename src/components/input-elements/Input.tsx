import React from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
    const { register } = useFormContext()

    return (
        <div className="flex flex-col gap-1">
            {label && <label htmlFor={name}>{label}</label>}
            <input {...props} id={name} {...register(name)} className="bg-zinc-700 rounded py-1 px-2" />
        </div>
    )
}

export default Input

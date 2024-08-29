import React from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
    const { register } = useFormContext()

    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <input {...props} id={name} {...register(name)} />
        </div>
    )
}

export default Input

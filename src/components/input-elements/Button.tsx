import React from 'react'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant'> {
    children: React.ReactNode
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'default', ...props }) => {
    const buttonVariant: { [key: string]: string } = {
        default: 'bg-zinc-700 hover:bg-zinc-800',
        primary: 'bg-blue-600 hover:bg-blue-600',
        success: 'bg-emerald-600 hover:bg-emerald-600',
        danger: 'bg-red-500 hover:bg-red-600',
        outline: 'border border-zinc-800 hover:bg-zinc-800'
    }

    return (
        <button
            {...props}
            className={`font-semibold p-6 rounded-full ${buttonVariant[variant]} ${props.className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button

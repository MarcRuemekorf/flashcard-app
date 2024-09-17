import React from 'react'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant'> {
    children: React.ReactNode
    onClick?: () => void
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'default', size = 'md', ...props }) => {
    const buttonVariant: { [key: string]: string } = {
        default: 'bg-zinc-700 hover:bg-zinc-800',
        primary: 'bg-blue-600 hover:bg-blue-600',
        success: 'bg-emerald-600 hover:bg-emerald-600',
        danger: 'bg-red-500 hover:bg-red-600',
        outline: 'border border-zinc-800 hover:bg-zinc-800'
    }

    const buttonSize: { [key: string]: string } = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    }

    return (
        <button
            {...props}
            className={`font-semibold rounded-md ${buttonVariant[variant]} ${buttonSize[size]} ${props.className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button

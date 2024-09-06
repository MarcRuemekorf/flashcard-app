import React from 'react'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant'> {
    children: React.ReactNode
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', ...props }) => {
    const buttonVariant: { [key: string]: string } = {
        primary: 'bg-blue-500 hover:bg-blue-600',
        secondary: 'bg-zinc-700 hover:bg-zinc-800',
        success: 'bg-green-500 hover:bg-green-600',
        danger: 'bg-red-500 hover:bg-red-600'
    }

    return (
        <button
            {...props}
            className={`font-semibold py-3 px-4 rounded ${buttonVariant[variant]} ${props.className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button

import React from 'react'

interface CardProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return (
        <div
            className={`dark:bg-zinc-900 border dark:border-zinc-800 dark:text-white rounded-xl p-8 sm:p-8" ${props.className}`}
        >
            {children}
        </div>
    )
}

export default Card

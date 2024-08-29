import React from 'react'

interface CardProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Card: React.FC<CardProps> = ({ children, onClick, ...props }) => {
    return (
        <div
            onClick={onClick}
            className={`rounded-lg px-4 py-4 sm:p-6 drop-shadow-md md:drop-shadow-xl" cursor-pointer ${props.className}`}
        >
            {children}
        </div>
    )
}

export default Card

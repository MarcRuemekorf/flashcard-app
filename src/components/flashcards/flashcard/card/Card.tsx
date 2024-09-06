import React from 'react'

interface CardProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Card: React.FC<CardProps> = ({ children, onClick, ...props }) => {
    return (
        <div onClick={onClick} className={`rounded-xl p-8 sm:p-8" cursor-pointer ${props.className}`}>
            {children}
        </div>
    )
}

export default Card

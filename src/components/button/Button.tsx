import { ReactElement } from 'react'

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    className?: string
}

const Button = ({ children, onClick, disabled = false, className = '' }: ButtonProps): ReactElement => (
    <button className={className} onClick={onClick} disabled={disabled}>
        {children}
    </button>
)

export default Button

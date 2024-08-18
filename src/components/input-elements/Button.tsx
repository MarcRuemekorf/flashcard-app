import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
    return (
        <button
            {...props}
            className={`bg-white drop-shadow-md hover:drop-shadow-lg font-semibold py-2 px-4 rounded ${props.className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
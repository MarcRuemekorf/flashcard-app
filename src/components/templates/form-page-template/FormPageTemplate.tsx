import React from 'react'

const FormPageTemplate = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const test = 'test'
    return (
        <div className="w-full flex flex-col h-screen content-center justify-center">
            <div className="w-full p-4">
                <div className="w-full sm:w-1/2 lg:w-1/3 m-auto">{children}</div>
            </div>
        </div>
    )
}

export default FormPageTemplate

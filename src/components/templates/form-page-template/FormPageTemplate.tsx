import React from 'react'

const FormPageTemplate = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full p-4">
                <div className="w-full sm:w-1/2 xl:w-1/3 m-auto">{children}</div>
            </div>
        </div>
    )
}

export default FormPageTemplate

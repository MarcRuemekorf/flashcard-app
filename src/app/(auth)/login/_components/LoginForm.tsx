'use client'

import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import TextInput from '@/components/text-input/TextInput'

type FormData = {
    email: string
    password: string
}

const LoginForm = () => {
    const form = useForm<FormData>()
    const [submitting, setSubmitting] = useState<boolean>(false)

    const onLogin = async (formData: FormData) => {
        // setSubmitting(true)
        // try {
        //     await signIn('credentials', { ...formData, callbackUrl: '/' })
        // } catch (error) {
        //     console.error('Error signing in: ', error)
        // } finally {
        //     setSubmitting(false)
        // }
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
            console.log('Form Data: ', formData)
        }, 3000)
    }

    return (
        <FormProvider {...form}>
            <form className="form" onSubmit={form.handleSubmit(onLogin)}>
                <TextInput
                    inputName="email"
                    options={{
                        required: 'your email is required to log in'
                    }}
                    label="Email"
                    autoComplete="email"
                />
                <TextInput
                    inputName="password"
                    options={{
                        required: 'your password is required to log in'
                    }}
                    label="Password"
                    autoComplete="current-password"
                    inputType="password"
                />
                <div className="form__footer">
                    <button type="submit" title="Login" disabled={submitting}>
                        Login
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}

export default LoginForm

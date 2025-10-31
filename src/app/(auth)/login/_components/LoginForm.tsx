'use client'

import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema, type SignInInput } from '@/lib/validations/auth'
import { signIn } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginForm = () => {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<SignInInput>({
        resolver: zodResolver(signInSchema),
    })

    const onLogin = async (formData: SignInInput) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await signIn.email({
                email: formData.email,
                password: formData.password,
            })
            if (response.error) {
                setError(response.error.message || 'Failed to sign in')
                return
            }
            router.push('/dashboard')
            router.refresh()
        } catch (err) {
            setError('An unexpected error occurred. Please try again.')
            console.error('Sign in error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-logo">
                    <h1>Flashcard App</h1>
                    <p>Sign in to your account</p>
                </div>

                {error && (
                    <div className="form-alert error">
                        {error}
                    </div>
                )}

                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onLogin)} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                {...form.register('email')}
                                disabled={isLoading}
                            />
                            {form.formState.errors.email && (
                                <span className="form-error">{form.formState.errors.email.message}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                {...form.register('password')}
                                disabled={isLoading}
                            />
                            {form.formState.errors.password && (
                                <span className="form-error">{form.formState.errors.password.message}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </FormProvider>

                <div className="auth-footer">
                    Don&apos;t have an account?{' '}
                    <Link href="/register">Register here</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm

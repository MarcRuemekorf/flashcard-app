'use client'

import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema, type SignInInput } from '@/lib/validations/auth'
import { signIn } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

const LoginForm = () => {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<SignInInput>({
        resolver: zodResolver(signInSchema)
    })

    const onLogin = async (formData: SignInInput) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await signIn.email({
                email: formData.email,
                password: formData.password
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
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                {error && <div className="form-alert error">{error}</div>}

                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onLogin)} className="auth-form">
                        <div className="form-group">
                            <Label htmlFor="email">Email</Label>
                            <Input
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
                            <Label htmlFor="password">Password</Label>
                            <Input
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
                    </form>
                </FormProvider>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </Button>
                <Button variant="link" className="w-full">
                    Register
                </Button>
            </CardFooter>
        </Card>
    )
}

export default LoginForm

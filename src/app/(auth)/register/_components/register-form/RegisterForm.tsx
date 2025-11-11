'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, type SignUpInput } from '@/lib/validations/auth'
import { signUp } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const RegisterForm = () => {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpInput>({
        resolver: zodResolver(signUpSchema)
    })

    const onSubmit = async (data: SignUpInput) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await signUp.email({
                email: data.email,
                password: data.password,
                name: data.name
            })

            if (response.error) {
                setError(response.error.message || 'Failed to create account')
                return
            }

            // Redirect to dashboard on success
            router.push('/dashboard')
            router.refresh()
        } catch (err) {
            setError('An unexpected error occurred. Please try again.')
            console.error('Sign up error:', err)
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
                {error && (
                    <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <div className="auth-form-group">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            {...register('name')}
                            disabled={isLoading}
                        />
                        {errors.name && <span className="auth-error">{errors.name.message}</span>}
                    </div>

                    <div className="auth-form-group">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            {...register('email')}
                            disabled={isLoading}
                        />
                        {errors.email && <span className="auth-error">{errors.email.message}</span>}
                    </div>

                    <div className="auth-form-group">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Create a strong password"
                            {...register('password')}
                            disabled={isLoading}
                        />
                        {errors.password && <span className="auth-error">{errors.password.message}</span>}
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Creating account...' : 'Create Account'}
                </Button>
                Already have an account?{' '}
                <Link className={buttonVariants({ variant: 'link' })} href="/login">
                    Login here
                </Link>
            </CardFooter>
        </Card>
    )
}

export default RegisterForm

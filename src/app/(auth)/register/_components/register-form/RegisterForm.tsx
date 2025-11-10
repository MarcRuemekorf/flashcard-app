'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, type SignUpInput } from '@/lib/validations/auth'
import { signUp } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const RegisterForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: SignUpInput) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
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
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <h1>Flashcard App</h1>
          <p>Create your account to start learning</p>
        </div>

        {error && (
          <div className="auth-alert error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div className="auth-form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              {...register('name')}
              disabled={isLoading}
            />
            {errors.name && (
              <span className="auth-error">{errors.name.message}</span>
            )}
          </div>

          <div className="auth-form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register('email')}
              disabled={isLoading}
            />
            {errors.email && (
              <span className="auth-error">{errors.email.message}</span>
            )}
          </div>

          <div className="auth-form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create a strong password"
              {...register('password')}
              disabled={isLoading}
            />
            {errors.password && (
              <span className="auth-error">{errors.password.message}</span>
            )}
          </div>

          <Button type="submit" disabled={isLoading}>{ isLoading ? 'Creating account...' : 'Create Account' }</Button>

        </form>

        <div className="auth-footer">
          Already have an account?{' '}
          <Link href="/login">Login here</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm;
import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:3000',
    fetchOptions: {
        onError: (ctx) => {
            if (ctx.response.status === 429) {
                console.error('Rate limit exceeded. Please try again later.')
            }
        },
        onSuccess: (ctx) => {
            // Handle successful requests if needed
            console.log('Auth request successful:', ctx.response.status)
        }
    }
})

export const { 
    signIn, 
    signUp, 
    signOut, 
    useSession,
    getSession,
    updateUser,
    changePassword,
    verifyEmail,
    resetPassword
} = authClient

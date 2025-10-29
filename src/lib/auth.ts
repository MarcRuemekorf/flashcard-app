import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import prisma from './prisma.config'

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: process.env.NODE_ENV === 'production', // Enable in production
        autoSignIn: true,
        minPasswordLength: 8,
        maxPasswordLength: 128
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day (session will be updated if it's older than this)
        cookieCache: {
            enabled: true,
            maxAge: 60 * 60 * 24 // 1 day
        }
    },
    user: {
        additionalFields: {
            emailVerified: {
                type: 'boolean',
                defaultValue: false
            }
        }
    },
    rateLimit: {
        enabled: true,
        window: 60, // 1 minute
        max: 10 // 10 requests per minute
    },
    advanced: {
        crossSubDomainCookies: {
            enabled: false
        },
        useSecureCookies: process.env.NODE_ENV === 'production',
        generateId: () => crypto.randomUUID()
    },
    secret: process.env.BETTER_AUTH_SECRET!,
    baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
    trustedOrigins: [
        process.env.BETTER_AUTH_URL || 'http://localhost:3000'
    ]
})

export type Session = typeof auth.$Infer.Session.session
export type User = typeof auth.$Infer.Session.user

import NextAuth, { CredentialsSignin } from "next-auth"
import prisma from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import bcrypt from "bcryptjs"

class InvalidLoginError extends CredentialsSignin {
    code = "Invalid identifier or password"
}

const providers: Provider[] = [
    Credentials({
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) return null;

            const user = await prisma.user.findUnique({
                where: { email: credentials.email as string },
            });

            if (!user) return null;

            const passwordMatch = await bcrypt.compare(
                credentials.password as string,
                user.password as string
            );

            if (!passwordMatch) return null;

            return {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            };
        },
    })
]

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers,
    pages: {
        signIn: "/sign-in",
        newUser: "/sign-up",
    },
})
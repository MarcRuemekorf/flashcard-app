import { NextRequest, NextResponse } from 'next/server'
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);

    const isAuthPage = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register')
    const isProtectedPage =
        request.nextUrl.pathname.startsWith('/dashboard') ||
        request.nextUrl.pathname.startsWith('/decks') ||
        request.nextUrl.pathname.startsWith('/study')

    // Redirect authenticated users away from auth pages
    if (sessionCookie && isAuthPage) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // Redirect unauthenticated users to login for protected pages
    if (!sessionCookie && isProtectedPage) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth (auth API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\..*|public).*)'
    ]
}

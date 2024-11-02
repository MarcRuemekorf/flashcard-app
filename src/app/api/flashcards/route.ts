import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

// const data = [
//     {
//         question: 'What is the capital of France?',
//         answer: 'Paris'
//     },
//     {
//         question: 'What is the capital of Germany?',
//         answer: 'Berlin'
//     },
//     {
//         question: 'What is the capital of Spain?',
//         answer: 'Madrid'
//     },
//     {
//         question: 'What is the capital of Italy?',
//         answer: 'Rome'
//     },
//     {
//         question: 'What is the capital of Japan?',
//         answer: 'Tokyo'
//     }
// ]

export async function GET() {
    const flashcards = await prisma.flashcard.findMany()
    return NextResponse.json(flashcards)
}

export async function POST(req: Request) {
    const body = await req.json()

    console.log('body', body)

    const result = await prisma.flashcard.create({
        data: {
            ...body
        }
    })

    if (!result) {
        return Response.json({
            message: 'Failed to create flashcard',
            status: 500
        })
    }

    return Response.json({
        message: 'Flashcard created successfully',
        status: 200
    })
}

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

const data = [
    {
        question: 'What is the capital of France?',
        answer: 'Paris'
    },
    {
        question: 'What is the capital of Germany?',
        answer: 'Berlin'
    },
    {
        question: 'What is the capital of Spain?',
        answer: 'Madrid'
    },
    {
        question: 'What is the capital of Italy?',
        answer: 'Rome'
    },
    {
        question: 'What is the capital of Japan?',
        answer: 'Tokyo'
    }
]

export async function GET() {
    const flashcards = await prisma.flashcard.findMany()
    return NextResponse.json(flashcards)
}

export async function POST(request: Request) {
    const { id, question, answer, hint, deckId, created, updatedAt, authorId } = await request.json()
    const newFlashcard = await prisma.flashcard.create({
        data: {
            id,
            question,
            answer,
            hint,
            deckId,
            created,
            updatedAt,
            authorId
        }
    })
    return NextResponse.json(newFlashcard)
}

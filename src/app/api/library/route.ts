import { NextResponse } from 'next/server'
 
const data = [
    {
        question: 'What is the capital of France?',
        answer: 'Paris',
    },
    {
        question: 'What is the capital of Germany?',
        answer: 'Berlin',
    },
    {
        question: 'What is the capital of Spain?',
        answer: 'Madrid',
    },
    {
        question: 'What is the capital of Italy?',
        answer: 'Rome',
    },
    {
        question: 'What is the capital of Japan?',
        answer: 'Tokyo',
    }
]

export async function GET(request: Request) {
    return NextResponse.json(data)
}
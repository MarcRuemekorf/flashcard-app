import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
    {
        firstName: 'Admin',
        email: 'admin@flashcard.app',
    },
]

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u })
    }
}

main()
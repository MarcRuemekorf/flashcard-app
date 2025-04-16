import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function main() {
    const hashedPassword = await bcrypt.hash('test1234', 10);

    const user: Prisma.UserCreateInput = {
        firstName: 'Admin',
        email: 'admin@flashcard.app',
        password: hashedPassword,
    }

    await prisma.user.create({ data: user })
}

main()
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function deletePost() {
    const masterClass = await prisma.masterClass.delete({
        where: {
            id: 1
        }
    })
    console.log(masterClass)
}
async function main() {
    deletePost()

}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

const getAllUsers = async () => {
    return await prisma.user_list.findMany();
}

const getUserById = async (user_id: string) => {
    return await prisma.user_list.findUnique({
        where: {
            id: user_id
        }
    });
}

const getUsersByRange = async (offset: number, limit: number) => {
    return await prisma.user_list.findMany({
        skip: offset,
        take: limit
    });
}

const getUserRowsCount = async () => {
    return await prisma.user_list.count();
}

export { getAllUsers, getUserById, getUsersByRange, getUserRowsCount };



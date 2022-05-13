import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

const getAllUsers = async () => {
    return await prisma.user_list.findMany();
}

export { getAllUsers };



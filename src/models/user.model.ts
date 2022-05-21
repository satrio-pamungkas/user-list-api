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

const getUserRowsCount = async (search: string) => {
    return await prisma.user_list.count({
        where: {
            OR: [
                { first_name: { contains: search }},
                { last_name: { contains: search }},
                { email: { contains: search }},
                { phone_number: { contains: search }},
                { gender: { contains: search }},
                { street_address: { contains: search }}
            ]
        }
    });
}

const getUserByFilter = async (offset: number, limit: number, search: string, sort_by: string, order_by: string ) => {
    return await prisma.user_list.findMany({
        where: {
            OR: [
                { first_name: { contains: search }},
                { last_name: { contains: search }},
                { email: { contains: search }},
                { phone_number: { contains: search }},
                { gender: { contains: search }},
                { street_address: { contains: search }}
            ]
        },
        orderBy: {
            [sort_by]: order_by
        },
        skip: offset,
        take: limit
    });

}

export { getAllUsers, getUserById, getUsersByRange, getUserRowsCount, getUserByFilter };
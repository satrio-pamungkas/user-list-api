import { Paginate } from "../types";

export const getPagination = async (page: number, size: number): Promise<Paginate> => {
    if (page <= 0 || size <= 0) {
        throw new Error('Page and size cannot be negative value or zero');
    }

    const limit: number = size ? +size : 10;
    const offset: number = page ? page * limit : 1;

    return { limit, offset };
}

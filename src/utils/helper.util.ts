import { Paginate } from "../types";

export const getPagination = async (page: number, size: number): Promise<Paginate> => {
    const limit: number = size ? +size : 10;
    const offset: number = page ? page * limit : 1;

    return { limit, offset };
}

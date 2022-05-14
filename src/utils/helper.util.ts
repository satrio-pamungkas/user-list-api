export const getPagination = (page: number, size: number) => {
    const limit: number = size ? +size : 10;
    const offset: number = page ? page * limit : 1;

    return { limit, offset };
}

import { Request, Response } from 'express';
import { getAllUsers, getUserById, getUserRowsCount, getUsersByRange } from '../services/user.service';
import { getPagination } from '../utils/helper.util';

const showAllUsers = async (req: Request, res: Response) => {
    try {
        const data: any = await getAllUsers();

        if (data === null) {
            throw new Error('Data is empty');
        }

        return res.status(200).json(data);

    } catch(error: any) {

        return res.status(404).json({ message: error.message });
    }

};

const showUserWithId = async (req: Request, res: Response) => {
    try {
        const id: any = req.params;
        const data: any = await getUserById(id);

        if (data === null) {
            throw new Error(`Id ${id} not found`);
        }

        return res.status(200).json(data);

    } catch(error: any) {

        return res.status(404).json({ message: error.message });
    }
}

const showUserWithRange = async (req: Request, res: Response) => {
    try {
        const page: number = parseInt(req.query.page as any);
        const size: number = parseInt(req.query.size as any);
        const { limit, offset } = getPagination(page - 1, size);

        const data: any = await getUsersByRange(offset, limit);

        if (data === null) {
            throw new Error('data is empty');
        }

        const totalRows: number = await getUserRowsCount();
        const currentPage: any = page;
        const totalPage: any = Math.ceil(totalRows / limit);
        
        return res.status(200).json({
            current_page: currentPage || 1,
            per_page: size || 10,
            total_rows: totalRows,
            total_pages: totalPage,
            data: data
        });

    } catch(error: any) {

        return res.status(404).json({ message: error.message });
    }
}

export { showAllUsers, showUserWithId, showUserWithRange };
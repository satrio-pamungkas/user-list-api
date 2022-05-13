import { Request, Response } from 'express';
import { getAllUsers } from '../services/user.service';

const showAllUsers = async (req: Request, res: Response) => {
    const data: any = await getAllUsers();

    return res.status(200).json(data);
};

export { showAllUsers };
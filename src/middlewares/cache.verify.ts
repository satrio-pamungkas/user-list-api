import { Request, Response, NextFunction } from 'express';
import client from '../configs/redis.config';

export const checkCacheAvailable = async (req: Request, res: Response, next: NextFunction) => {
    client.on('error', (error: any) => {
        console.log('Problem with Redis', error);
        return next();
    });

    const data: any = await client.get('get-all-data');

    if (data != null) {
        console.log('This response using cache');
        return res.status(200).json(JSON.parse(data));
    } else {
        return next();
    }
}
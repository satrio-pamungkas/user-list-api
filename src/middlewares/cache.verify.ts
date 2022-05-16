import { Request, Response, NextFunction } from 'express';
import client from '../configs/redis.config';

export const checkCacheAvailable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: any = await client.get('get-all-data');

        if (data != null) {
            return res.status(200).json(JSON.parse(data));
        } else {
            return next();
        }
        
    } catch {
        console.log('Problem with Redis');
        return next();
    }
}
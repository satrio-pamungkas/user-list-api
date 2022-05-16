import * as redis from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const REDIS_URL: any = process.env.REDIS_URL;
const client = redis.createClient({
    url: REDIS_URL
});

export default client;
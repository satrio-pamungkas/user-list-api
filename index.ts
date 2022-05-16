import express, { Express, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import client from './src/configs/redis.config';
import { UserRoute } from './src/routes/user.route';

dotenv.config();

const app: Express = express();
const PORT: any = process.env.PORT;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/v1/users/', UserRoute());

app.listen(PORT, async () => {
    await client.connect()
        .then(() => {
            console.log('Succesfully connnected to Redis cache');
        })
        .catch(() => {
            console.log('Failed to connect Redis cache');
            client.quit();
        });

    console.log(`Server is running at http://localhost:${PORT}`);
});


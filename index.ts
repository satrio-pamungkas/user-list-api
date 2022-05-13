import express, { Express, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { UserRoute } from './src/routes/user.route';

dotenv.config();

const app: Express = express();
const PORT: any = process.env.PORT;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/v1/users/', UserRoute());

app.listen(PORT, () => {
    console.log(`Server sudah berjalan pada localhost:${PORT}`);
});


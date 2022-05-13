import express, { Express, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const PORT: any = process.env.PORT;

app.use(cors());
app.get('/', (res: Response) => {
    res.send('Express with TypeScript');
});
app.listen(PORT, () => {
    console.log(`Server sudah berjalan pada localhost:${PORT}`);
});


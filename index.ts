import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import client from './src/configs/redis.config';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { UserRoute } from './src/routes/user.route';
import { InvoiceRouter } from './src/routes/invoice.route';

dotenv.config();

export const app: Express = express();
const PORT: any = process.env.PORT;
const swaggerDoc: any = YAML.load('./docs/swagger.yaml');

app.use(cors());
app.use("/public", express.static(__dirname + "/src/views/public/"));
app.use(express.json());
app.set('view engine', 'ejs');

app.use('/api/v1/users/', UserRoute());
app.use('/api/v1/print-pdf', InvoiceRouter());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

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


import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;
const test = 0;

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

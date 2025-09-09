import express, {type Response, type Request} from 'express';
import instanceDatabase from './database/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()

app.get('/hello-world',(req: Request ,res: Response) =>{
    res.send("Olá, mundo")
})

export default app;
import express, {type Response, type Request} from 'express';

const app = express()

app.get('/hello-world',(req: Request ,res: Response) =>{
    res.send("Olá, mundo")
})

export default app;
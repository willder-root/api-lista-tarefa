import app from './app.js';

const port: number = 8090;
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);    
});
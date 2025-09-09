import app from './app.js';

const port: number = Number.parseInt(process.env.PORT || "8070") ;

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);    
});
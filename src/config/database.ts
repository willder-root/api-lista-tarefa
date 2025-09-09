import dotenv from 'dotenv';
dotenv.config();

const databaseConfig: any = {
    dialect: String(process.env.DB_DIALECT as string) || "postgres",
    host: String(process.env.DB_HOST as string),
    port: Number.parseInt(process.env.DB_PORT as string || "5432"),
    database: String(process.env.DB_NAME as string),
    username: String(process.env.DB_USER as string),
    password: String(process.env.DB_PASS as string),

}

export default databaseConfig
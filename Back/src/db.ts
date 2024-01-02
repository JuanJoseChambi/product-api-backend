import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const { DB_USER,DB_HOST, DB_PORT, DB_NAME } = process.env


const db = mongoose.connect(`${DB_USER}://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .then(() => console.log(`DB Conected to ${DB_NAME}`))
    .catch(err => console.log("Error al conctarse a MongoDB :", err))

export default db
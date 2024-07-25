import express from "express";
import router from "./routes";
import db from './config/db'

// COnectar a base de datos
async function connectDB() {
    try {

        await db.authenticate()
        db.sync()
        console.log('Conexión exitosa a la BD')
        
    } catch (error) {
        console.error(error)
        console.log('Hubo un error al conectar la base de datos')
    }
}

connectDB()

const server = express()

server.use('/api/products', router)
export default server
import express from "express";
import router from "./routes";
import db from './config/db'
import colors from 'colors'
import SwaggerUi from "swagger-ui-express";
import swaggerSpect, { swaggerUiOptions } from "./config/swagger";

// Conectar a base de datos
export async function connectDB() {
    try {

        await db.authenticate()
        db.sync()
        //console.log(colors.blue.bgBlue.bold('Conexión exitosa a la BD'))
        
    } catch (error) {
        console.error(error)
        console.log(colors.bgRed.white('Hubo un error al conectar la base de datos'))
    }
}

connectDB()

// Instancia de express
const server = express()

// Leer datos de formulario
server.use(express.json())

server.use('/api/products', router)


// Docs
server.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerSpect, swaggerUiOptions))

export default server
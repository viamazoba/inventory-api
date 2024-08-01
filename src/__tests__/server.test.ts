import { connectDB } from "../server"
import db from "../config/db"

// Prueba de conexión a la base de datos 
// Observa que importas los métodos de conexión a la base de datos
jest.mock('../config/db')

describe('connectDB', ()=>{
    it('Should handle database connection error', async ()=>{

        // Esta parte del código hace la conexión a la db, pero simula un rechazo para probar el catch
        jest.spyOn(db, 'authenticate').mockRejectedValueOnce(new Error('Hubo un error al conectar la base de datos'))
        const consoleSpy = jest.spyOn(console, 'log')

        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Hubo un error al conectar la base de datos')
        )
    })
})
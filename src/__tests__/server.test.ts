import request from "supertest"
import server, { connectDB } from "../server"
import db from "../config/db"

describe('GET /api', ()=>{
    it('should send back a json response', async ()=>{
        const res = await request(server).get('/api')

        expect(res.status).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/)
        expect(res.body.msg).toBe('Desde API')

        expect(res.status).not.toBe(404)
        expect(res.body.msg).not.toBe('desde api')
    })
})

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
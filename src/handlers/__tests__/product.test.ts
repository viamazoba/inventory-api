import request from "supertest"
import server from "../../server"

describe('POST /api/products', ()=>{
    it('should display validation errors', async ()=>{
        const res = await request(server).post('/api/products').send({})
        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('errors')
        expect(res.body.errors).toHaveLength(4)

        expect(res.status).not.toBe(404)
        expect(res.body.errors).not.toHaveLength(2)
    })

    it('should validate that the price is greater than 0', async ()=>{
        const res = await request(server).post('/api/products').send({
            name: "Monitor Curvo - Test",
            price: 0
        })

        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('errors')
        expect(res.body.errors).toHaveLength(1)

        expect(res.status).not.toBe(404)
        expect(res.body.errors).not.toHaveLength(2)
    })

    it('should validate that the price is a number', async ()=>{
        const res = await request(server).post('/api/products').send({
            name: "Monitor Curvo - Test",
            price: "Hola"
        })

        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('errors')
        expect(res.body.errors).toHaveLength(2)

        expect(res.status).not.toBe(404)
        expect(res.body.errors).not.toHaveLength(4)
    })

    it('should create a new product', async ()=>{
        const res = await request(server).post('/api/products').send({
            name: "Mouse - Testing",
            price: 50
        })

        expect(res.status).toBe(201)
        expect(res.body).toHaveProperty('data')

        expect(res.status).not.toBe(400)
        expect(res.status).not.toBe(404)
        expect(res.status).not.toBe(200)
        expect(res.body).not.toHaveProperty('errors')
        
    })
})
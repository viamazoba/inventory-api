import express from "express";

const server = express()

// Routing
server.get('/',(req, res)=> {
    res.send('Hola mundo en Express')
})

export default server
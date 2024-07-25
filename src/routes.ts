import { Router } from "express"

const router = Router()

// Routing
router.get('/',(req, res)=> {
    res.send('Desde get')
})

router.post('/',(req, res)=> {
    res.send('Desde post')
})

export default router
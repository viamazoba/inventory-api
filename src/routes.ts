import { Router } from "express"
import { createProduct } from "./handlers/product"
import { body, validationResult } from 'express-validator'

const router = Router()

// Routing
router.get('/',(req, res)=> {
    res.send('Desde get')
})

router.post('/',
     // Validación
    body('name')
     .notEmpty().withMessage('El nombre del producto no puede ir vacío'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio del producto no puede ir vacío')
        .custom( value => value > 0 ).withMessage('Precio no vàlido')
   ,
    createProduct)

export default router
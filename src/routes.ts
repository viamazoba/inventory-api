import { Router } from "express"
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product"
import { body, param } from 'express-validator'
import { handleInputErrors } from "./middleware"

const router = Router()
/**
 * @swagger
 * components:
 *      schemas:
 *          Product:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The Product ID
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description: The Product name
 *                      example: Monitor Curvo de 49 pulgadas
 *                  price:
 *                      type: number
 *                      description: The Product price
 *                      example: 300
 *                  availability:
 *                      type: boolean
 *                      description: The Product availability
 *                      example: false
 */

// Routing
router.get('/',getProducts)
router.get('/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getProductById
)


router.post('/',
     // Validación
    body('name')
     .notEmpty().withMessage('El nombre del producto no puede ir vacío'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio del producto no puede ir vacío')
        .custom( value => value > 0 ).withMessage('Precio no vàlido'),
    handleInputErrors,
    createProduct
)

router.put('/:id',
    param('id').isInt().withMessage('ID no válido'),
    body('name')
     .notEmpty().withMessage('El nombre del producto no puede ir vacío'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio del producto no puede ir vacío')
        .custom( value => value > 0 ).withMessage('Precio no válido'),
    body('availability').isBoolean().withMessage('Valor no válido').notEmpty().withMessage('La disponibilidad del producto no puede ser vacía'),
    handleInputErrors,
    updateProduct
)

router.patch('/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    updateAvailability
)

router.delete('/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors, 
    deleteProduct
)

export default router